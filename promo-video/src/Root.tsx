import { Composition, Folder } from "remotion";
import { Promo } from "./Promo";
import { FPS, TOTAL_FRAMES } from "./content";

// The brief requires exactly 90 s; fail loudly if content.ts timings drift.
if (TOTAL_FRAMES !== 90 * FPS) {
  throw new Error(`Promo must be 2700 frames, content.ts timings add up to ${TOTAL_FRAMES}`);
}

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="StackVenger">
      <Composition id="StackVengerPromo" component={Promo} durationInFrames={TOTAL_FRAMES} fps={FPS} width={1920} height={1080} />
    </Folder>
  );
};
