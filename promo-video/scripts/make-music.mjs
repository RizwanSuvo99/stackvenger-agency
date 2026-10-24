// Synthesizes the promo's background track (90 s, 120 BPM, A minor) and writes
// public/audio/music.mp3. Pure JS synthesis — no samples, so it is license-free.
// Sections follow the video's scene cuts (seconds): 5 logo, 12 services,
// 25 featured work, 55 montage, 65 process, 77 tech, 83 CTA.
// Run: npm run music   (needs ffmpeg on PATH for the MP3 encode)
import { writeFile, mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SR = 44100;
const DUR = 90;
const N = SR * DUR;
const BEAT = 0.5; // 120 BPM
const L = new Float32Array(N);
const R = new Float32Array(N);
const sendL = new Float32Array(N); // reverb send
const sendR = new Float32Array(N);

// deterministic noise so every run renders the same track
let seed = 12345;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296) * 2 - 1;
const hz = (midi) => 440 * 2 ** ((midi - 69) / 12);
const smooth = (t, a, b) => Math.min(1, Math.max(0, (t - a) / (b - a)));
const inRange = (t, a, b) => t >= a && t < b;

const add = (i, l, r, send = 0) => {
  if (i < 0 || i >= N) return;
  L[i] += l; R[i] += r;
  sendL[i] += l * send; sendR[i] += r * send;
};

// ---------------------------------------------------------------- harmony
// Am – F – C – G, one chord per bar (2 s); the CTA lands on F → Am.
const CHORDS = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]];
const chordAt = (t) => (t >= 87 ? [57, 60, 64] : t >= 83 ? [53, 57, 60] : CHORDS[Math.floor(t / 2) % 4]);

// ---------------------------------------------------------------- pad (detuned saws, filtered)
{
  const phases = new Float64Array(18);
  let lpL = 0, lpR = 0;
  for (let i = 0; i < N; i++) {
    const t = i / SR;
    const chord = chordAt(t);
    let sL = 0, sR = 0;
    chord.forEach((note, n) => {
      [-0.12, 0, 0.12].forEach((det, d) => {
        const k = n * 3 + d;
        phases[k] = (phases[k] + hz(note + det) / SR) % 1;
        const saw = phases[k] * 2 - 1;
        if (d === 0) { sL += saw; sR += saw; } else if (d === 1) sL += saw; else sR += saw;
      });
    });
    // filter opens over the intro, breathes with each bar, and closes for the outro
    const open = 0.012 + 0.05 * smooth(t, 0, 5) + 0.02 * Math.sin((t / 8) * Math.PI * 2) ** 2 - 0.03 * smooth(t, 85, 90);
    lpL += Math.max(0.004, open) * (sL - lpL);
    lpR += Math.max(0.004, open) * (sR - lpR);
    const vol = 0.07 * (0.35 + 0.65 * smooth(t, 0, 3)) * (inRange(t, 25, 55) || inRange(t, 77, 83) ? 0.8 : 1);
    add(i, lpL * vol, lpR * vol, 0.5);
  }
}

// ---------------------------------------------------------------- drums
const kick = (t0, gain = 1) => {
  const s = Math.floor(t0 * SR);
  let ph = 0;
  for (let j = 0; j < SR * 0.45; j++) {
    const t = j / SR;
    ph += (48 + 110 * Math.exp(-t * 28)) / SR;
    const v = Math.sin(ph * Math.PI * 2) * Math.exp(-t * 7) * 0.55 * gain;
    add(s + j, v, v);
  }
};
const hat = (t0, gain = 1) => {
  const s = Math.floor(t0 * SR);
  let prev = 0;
  for (let j = 0; j < SR * 0.06; j++) {
    const n = rnd();
    const hp = n - prev; prev = n; // crude high-pass
    const v = hp * Math.exp((-j / SR) * 70) * 0.05 * gain;
    add(s + j, v * 0.8, v, 0.1);
  }
};
const clap = (t0) => {
  const s = Math.floor(t0 * SR);
  let bp = 0, lp = 0;
  for (let j = 0; j < SR * 0.25; j++) {
    const t = j / SR;
    const n = rnd();
    lp += 0.35 * (n - lp); bp = n - lp; // band-ish
    const env = (t < 0.01 ? 1 : t < 0.02 ? 0.6 : 1) * Math.exp(-t * 18);
    const v = bp * env * 0.09;
    add(s + j, v, v * 0.9, 0.35);
  }
};

for (let t = 5; t < 83; t += BEAT) {
  const beat = Math.round(t / BEAT);
  const halfTime = inRange(t, 65, 77);
  if (!halfTime || beat % 2 === 0) kick(t, inRange(t, 5, 12) ? 0.8 : 1);
  if (t >= 12) hat(t + BEAT / 2, halfTime ? 0.6 : 1);
  if ((inRange(t, 25, 55) || inRange(t, 77, 83)) && beat % 2 === 1) clap(t);
  if (inRange(t, 25, 55) || inRange(t, 77, 83)) hat(t + BEAT / 4, 0.45); // 16th shuffle
}

// ---------------------------------------------------------------- bass (filtered saw, 8ths)
for (let t = 12; t < 83; t += BEAT / 2) {
  const root = chordAt(t)[0] - 24;
  const s = Math.floor(t * SR);
  let ph = 0, lp = 0;
  const len = SR * BEAT * 0.45;
  for (let j = 0; j < len; j++) {
    ph = (ph + hz(root) / SR) % 1;
    lp += 0.06 * (ph * 2 - 1 - lp);
    const env = Math.min(1, j / 200) * Math.exp((-j / SR) * 6);
    const v = (lp + Math.sin(ph * Math.PI * 2) * 0.6) * env * (inRange(t, 65, 77) ? 0.11 : 0.15);
    add(s + j, v, v);
  }
}

// ---------------------------------------------------------------- arpeggio (triangle plucks)
const pluck = (t0, note, gain, pan) => {
  const s = Math.floor(t0 * SR);
  let ph = 0;
  for (let j = 0; j < SR * 0.35; j++) {
    ph = (ph + hz(note) / SR) % 1;
    const tri = 1 - 4 * Math.abs(ph - 0.5);
    const v = tri * Math.exp((-j / SR) * 9) * gain;
    add(s + j, v * (1 - pan), v * (1 + pan), 0.45);
  }
};
for (let t = 12; t < 83; t += BEAT / 2) {
  const step = Math.round(t / (BEAT / 2));
  const chord = chordAt(t);
  const full = inRange(t, 25, 55) || inRange(t, 77, 83);
  if (!full && !(inRange(t, 12, 25) && step % 2 === 0) && !(inRange(t, 65, 77) && step % 4 === 0)) continue;
  const note = chord[step % 3] + 12 + (step % 6 >= 3 ? 12 : 0);
  pluck(t, note, full ? 0.06 : 0.045, step % 2 ? 0.35 : -0.35);
}

// ---------------------------------------------------------------- transitions
const riser = (tEnd, len) => {
  let lp = 0;
  for (let i = Math.floor((tEnd - len) * SR); i < tEnd * SR; i++) {
    const p = (i / SR - (tEnd - len)) / len;
    const n = rnd();
    lp += (0.02 + 0.5 * p * p) * (n - lp);
    const v = lp * p * p * 0.14;
    add(i, v, v, 0.4);
  }
};
const impact = (t0) => {
  const s = Math.floor(t0 * SR);
  let ph = 0, lp = 0;
  for (let j = 0; j < SR * 2.2; j++) {
    const t = j / SR;
    ph += (38 + 40 * Math.exp(-t * 6)) / SR;
    const n = rnd();
    lp += 0.08 * (n - lp);
    const v = Math.sin(ph * Math.PI * 2) * Math.exp(-t * 2.2) * 0.4 + lp * Math.exp(-t * 3) * 0.25;
    add(s + j, v, v, 0.6);
  }
};
riser(5, 2); impact(5);
riser(25, 3); impact(25);
riser(55, 3); impact(55);
riser(83, 2); impact(83);

// ---------------------------------------------------------------- reverb (Schroeder: 4 combs + 2 allpasses per side)
const reverb = (input, offset) => {
  const out = new Float32Array(N);
  for (const [d, g] of [[1557, 0.84], [1617, 0.83], [1491, 0.82], [1422, 0.81]]) {
    const buf = new Float32Array(d + offset);
    let k = 0;
    for (let i = 0; i < N; i++) {
      const y = buf[k];
      buf[k] = input[i] + y * g;
      out[i] += y * 0.25;
      k = (k + 1) % buf.length;
    }
  }
  for (const d of [225 + offset, 556 + offset]) {
    const buf = new Float32Array(d);
    let k = 0;
    for (let i = 0; i < N; i++) {
      const b = buf[k];
      const y = -out[i] + b;
      buf[k] = out[i] + b * 0.5;
      out[i] = y;
      k = (k + 1) % d;
    }
  }
  return out;
};
const wetL = reverb(sendL, 0);
const wetR = reverb(sendR, 23);

// ---------------------------------------------------------------- master: mix, soft clip, normalise, 16-bit WAV
let peak = 0;
for (let i = 0; i < N; i++) {
  L[i] = Math.tanh((L[i] + wetL[i] * 0.35) * 1.4);
  R[i] = Math.tanh((R[i] + wetR[i] * 0.35) * 1.4);
  peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
}
const norm = 0.89 / peak;
const wav = Buffer.alloc(44 + N * 4);
wav.write("RIFF", 0); wav.writeUInt32LE(36 + N * 4, 4); wav.write("WAVE", 8);
wav.write("fmt ", 12); wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(2, 22);
wav.writeUInt32LE(SR, 24); wav.writeUInt32LE(SR * 4, 28); wav.writeUInt16LE(4, 32); wav.writeUInt16LE(16, 34);
wav.write("data", 36); wav.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) {
  wav.writeInt16LE(Math.round(L[i] * norm * 32767), 44 + i * 4);
  wav.writeInt16LE(Math.round(R[i] * norm * 32767), 46 + i * 4);
}
const outDir = path.join(ROOT, "public", "audio");
await mkdir(outDir, { recursive: true });
const wavPath = path.join(ROOT, "out", "music.wav");
await mkdir(path.dirname(wavPath), { recursive: true });
await writeFile(wavPath, wav);
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", wavPath, "-codec:a", "libmp3lame", "-b:a", "192k", path.join(outDir, "music.mp3")]);
console.log("wrote public/audio/music.mp3");
