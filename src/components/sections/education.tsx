import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 40, rotateX: 15, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="education" className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and training
          </p>
        </motion.div>

        <div className="space-y-8" style={{ perspective: "1000px" }}>
          {config.education.map((item, index) => (
            <div
              key={`${item.institution}-${item.program}-${item.duration}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {item.program}
                  </h3>
                  <h4 className="text-lg text-primary">{item.institution}</h4>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {item.duration}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills */}
              {item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


