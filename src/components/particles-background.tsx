import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useTheme } from "./theme-provider";

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [engineInitialized, setEngineInitialized] = useState(false);

  useEffect(() => {
    let cancelled = false;

    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setEngineInitialized(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (!engineInitialized) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 200,
              links: {
                opacity: 0.8,
              },
            },
          },
        },
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#1a1a1a",
          },
          links: {
            color: isDark ? "#ffffff" : "#1a1a1a",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 120,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
