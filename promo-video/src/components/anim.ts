import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { SpringConfig } from "remotion";
import { theme } from "../theme";

// Spring progress (0 → 1) that starts `delay` frames into the current sequence.
export const useEnter = (delay = 0, config: Partial<SpringConfig> = theme.spring.soft) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - delay, fps, config });
};

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
