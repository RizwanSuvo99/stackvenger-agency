import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, Freeze, useCurrentFrame, useVideoConfig } from "remotion";
import { sceneDurations, TRANSITION_FRAMES } from "./content";
import { Background } from "./components/Background";
import { AudioLayer } from "./components/AudioLayer";
import { Hook } from "./scenes/Hook";
import { Brand } from "./scenes/Brand";
import { Services } from "./scenes/Services";
import { FeaturedWork } from "./scenes/FeaturedWork";
import { Montage } from "./scenes/Montage";
import { Process } from "./scenes/Process";
import { TechStack } from "./scenes/TechStack";
import { Cta } from "./scenes/Cta";

const crossfade = () => <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />;

const HOLD_FRAMES = 30; // the final second holds the end card perfectly still

const Scenes = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="1 Hook" durationInFrames={sceneDurations.hook}>
      <Hook />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="2 Brand reveal" durationInFrames={sceneDurations.brand}>
      <Brand />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="3 What we do" durationInFrames={sceneDurations.services}>
      <Services />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="4 Featured work" durationInFrames={sceneDurations.featured}>
      <FeaturedWork />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="5 Portfolio montage" durationInFrames={sceneDurations.montage}>
      <Montage />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="6 How we work" durationInFrames={sceneDurations.process}>
      <Process />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="7 Tech stack" durationInFrames={sceneDurations.tech}>
      <TechStack />
    </TransitionSeries.Sequence>
    {crossfade()}
    <TransitionSeries.Sequence name="8 Call to action" durationInFrames={sceneDurations.cta}>
      <Cta />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);

export const Promo = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const holdFrom = durationInFrames - HOLD_FRAMES;
  return (
    <AbsoluteFill>
      <Freeze frame={holdFrom - 1} active={frame >= holdFrom}>
        <Background />
        <Scenes />
      </Freeze>
      <AudioLayer />
    </AbsoluteFill>
  );
};
