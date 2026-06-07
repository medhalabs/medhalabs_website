import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "./assets/medhalabs_logo.png";

const LOADER_MS = 2800;
const EXIT_MS = 700;

type LoaderProps = {
  onComplete: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.body.style.overflow = "hidden";

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / LOADER_MS) * 100));
      setProgress(pct);

      if (elapsed < LOADER_MS) {
        frame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setExiting(true);
        window.setTimeout(() => {
          onComplete();
          document.body.style.overflow = "";
        }, EXIT_MS);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      className={`loader-screen${exiting ? " loader-screen--exit" : ""}`}
      aria-hidden={exiting}
      aria-label="Loading Medhā Labs"
    >
      <div className="loader-stars" />

      <div className="loader-center">
        <div className="loader-orbit loader-orbit-1">
          <span className="loader-dot loader-dot-1" />
        </div>
        <div className="loader-orbit loader-orbit-2">
          <span className="loader-dot loader-dot-2" />
        </div>
        <div className="loader-orbit loader-orbit-3">
          <span className="loader-dot loader-dot-3" />
        </div>

        <div className="loader-logo-wrap">
          <div className="loader-logo-glow" />
          <img
            src={logo}
            alt="Medhā Labs"
            className="loader-logo"
            loading="eager"
          />
        </div>
      </div>

      <div className="loader-progress">
        <span className="loader-progress-num">{progress}</span>
        <div className="loader-progress-track">
          <div
            className="loader-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
