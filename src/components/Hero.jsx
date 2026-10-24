import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { Link, ABOUT_PATH, CONTACTS_PATH } from "../router";

// Promo video (built in /promo-video). Browsers only allow muted autoplay, so it
// starts silent with a sound toggle. Visitors who ask for reduced motion get the
// poster and a play button instead of autoplay.
const PROMO_SRC = "/assets/videos/stackvenger-promo.mp4";
const PROMO_POSTER = "/assets/images/stackvenger-promo-poster.webp";
const reduceMotion = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function SoundIcon({ on }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      {on ? (
        <>
          <path d="M15.5 9a4 4 0 0 1 0 6" />
          <path d="M18 6.5a7.5 7.5 0 0 1 0 11" />
        </>
      ) : (
        <path d="M16 9.5l5 5M21 9.5l-5 5" />
      )}
    </svg>
  );
}

function VideoCard() {
  const [playing, setPlaying] = useState(() => !reduceMotion());
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef(null);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = soundOn;
    if (!soundOn && v.paused) v.play().catch(() => {});
    setSoundOn(!soundOn);
  };

  return (
    <div className={`video-card video-card--promo ${playing ? "live" : ""}`}>
      {playing ? (
        <>
          <video
            ref={videoRef}
            src={PROMO_SRC}
            poster={PROMO_POSTER}
            autoPlay
            muted={!soundOn}
            loop
            playsInline
            preload="metadata"
            aria-label="StackVenger promo video"
          />
          <button
            type="button"
            className="sound-btn"
            onClick={toggleSound}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute promo video" : "Turn on promo video sound"}
          >
            <SoundIcon on={soundOn} />
            <span>{soundOn ? "Sound on" : "Sound off"}</span>
          </button>
        </>
      ) : (
        <>
          <img src={PROMO_POSTER} alt="StackVenger promo video" loading="lazy" />
          <button className="play-btn" aria-label="Play promo video" onClick={() => { setSoundOn(true); setPlaying(true); }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5l11 6.5-11 6.5v-13z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <span className="kicker-pill">
            <span className="kicker-chip">✦ NEXT-GEN</span>
            AI-Accelerated Product Development
          </span>
        </Reveal>

        <Reveal delay={110}>
          <h1 className="gradient-text">
            Build Smarter.
            <br />
            Launch Faster.
          </h1>
        </Reveal>

        <Reveal delay={210}>
          <p className="hero-para">
            StackVenger combines AI technology with expert developers to
            turn your idea into a market-ready product — in record time.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="hero-cta">
            <Link className="btn" to={CONTACTS_PATH}>
              <ArrowRight size={20} className="btn-arrow" /> Start Your Project
            </Link>
            <Link className="btn btn-outline" to={ABOUT_PATH}>
              <ArrowRight size={20} className="btn-arrow" /> See Our Process
            </Link>
          </div>
        </Reveal>

        <Reveal delay={220} y={44}>
          <VideoCard />
        </Reveal>
      </div>
    </section>
  );
}
