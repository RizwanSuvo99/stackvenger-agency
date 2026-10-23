import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { Link, ABOUT_PATH, CONTACTS_PATH } from "../router";

function VideoCard() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`video-card ${playing ? "live" : ""}`}>
      {playing ? (
        <video
          src="/assets/videos/71-home-2-video.mp4"
          poster="/assets/images/71-home-1-1.webp"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      ) : (
        <>
          <img
            src="/assets/images/71-home-1-1.webp"
            alt="StackVenger studio showreel"
            loading="lazy"
          />
          <button className="play-btn" aria-label="Play showreel" onClick={() => setPlaying(true)}>
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
