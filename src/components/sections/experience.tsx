import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          {
            scaleY: 0,
            transformOrigin: "top",
          },
          {
            scaleY: 1,
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      experienceRefs.current.forEach((item) => {
        if (!item) return;

        const dot = item.querySelector(".timeline-dot");
        const card = item.querySelector(".experience-card");

        if (dot) {
          gsap.fromTo(
            dot,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="experience" className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"
            style={{ transformOrigin: "top" }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {config.experience.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    experienceRefs.current[index] = el;
                  }
                }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row gap-8`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  } ml-16 md:ml-0`}
                >
                  <div className="experience-card bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    {/* Company & Role */}
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-lg mb-2">
                      <span style={{ background: "linear-gradient(to right, rgb(96 165 250), rgb(192 132 252))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{exp.company}</span>
                    </h4>

                    {/* Duration */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.duration}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-primary mt-1 text-lg">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
