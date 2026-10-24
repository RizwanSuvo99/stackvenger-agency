import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { Fragment } from "react";
import { featured, featuredSlideFrames, TRANSITION_FRAMES } from "../content";
import { ProjectSlide } from "./ProjectSlide";

// 0:25–0:55 — 8 featured projects, each sliding in from the right.
export const FeaturedWork = () => (
  <TransitionSeries>
    {featured.map((p, i) => (
      <Fragment key={p.key}>
        {i > 0 ? <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} /> : null}
        <TransitionSeries.Sequence name={p.name} durationInFrames={featuredSlideFrames[i]}>
          <ProjectSlide project={p} index={i} />
        </TransitionSeries.Sequence>
      </Fragment>
    ))}
  </TransitionSeries>
);
