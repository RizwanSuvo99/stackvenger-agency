import { Audio } from "@remotion/media";
import { interpolate, staticFile, useVideoConfig } from "remotion";
import { audio } from "../content";

// Optional music + voiceover. Renders nothing until a file is set in content.ts.
// Music fades in/out and is ducked whenever a voiceover is present.
export const AudioLayer = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const base = audio.voiceover ? audio.musicVolumeUnderVoiceover : audio.musicVolume;
  return (
    <>
      {audio.music ? (
        <Audio
          src={staticFile(audio.music)}
          volume={(f) =>
            interpolate(f, [0, audio.fadeInSeconds * fps, durationInFrames - audio.fadeOutSeconds * fps, durationInFrames - 1], [0, base, base, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      ) : null}
      {audio.voiceover ? <Audio src={staticFile(audio.voiceover)} /> : null}
    </>
  );
};
