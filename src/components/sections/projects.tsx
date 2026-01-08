import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/config/config";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkillIcon } from "../sections/skills/components/skill-icon";
import { SKILLS } from "@/data/skills-data";

gsap.registerPlugin(ScrollTrigger);
const projects = config.projects;

const SkillGroup = ({ title, skills }: { title: string; skills: { name: keyof typeof SKILLS }[] }) =>
  skills.length > 0 && (
    <div>
      <h4 className="text-sm font-semibold mb-2 text-foreground">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill: { name: keyof typeof SKILLS }, idx: number) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted"
          >
            <div className="w-5 h-5 flex-shrink-0">
              <SkillIcon skillName={skill.name} />
            </div>
            <span className="text-sm">{SKILLS[skill.name].label}</span>
          </div>
        ))}
      </div>
    </div>
  );

export default function ProjectsSection() {
  const cards = useRef<HTMLDivElement[]>([]);
  const [tiltTimeout, setTiltTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards.current, {
        start: "top 85%",
        onEnter: batch =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 80, rotateX: 20, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              stagger: 0.12,
              ease: "power3.out",
            }
          ),
      });

      cards.current.forEach((card, i) => {
        gsap.to(card, {
          y: -30 - i * 3,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if ("ontouchstart" in window) return;
    if (tiltTimeout) clearTimeout(tiltTimeout);

    setTiltTimeout(setTimeout(() => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;

      gsap.to(el, {
        rotateY: x / 25,
        rotateX: -y / 25,
        boxShadow: `${-x / 4}px ${y / 4}px 25px hsl(var(--shadow-color) / var(--shadow-opacity-hover))`,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    }, 10));
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      boxShadow: `0px 10px 25px hsl(var(--shadow-color) / var(--shadow-opacity))`,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const setCardRef = (el: HTMLDivElement | null, i: number) => {
    if (el) cards.current[i] = el;
  };

  return (
    <SectionWrapper id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            My recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Dialog key={project.id}>
              <div className="relative h-full">
                <div
                  ref={el => setCardRef(el, i)}
                  onMouseMove={handleMove}
                  onMouseLeave={resetTilt}
                  className="bg-card rounded-xl overflow-hidden cursor-pointer transition hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary transform-style-3d h-full flex flex-col min-h-[500px]"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">📁</span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary whitespace-nowrap w-fit mb-3">
                      {project.category}
                    </span>
                    <p className="text-base text-muted-foreground line-clamp-5 flex-grow">
                      {project.description}
                    </p>
                  </div>
                </div>

                <DialogTrigger asChild>
                  <button
                    className="absolute inset-0"
                    aria-label={`Open ${project.title}`}
                  />
                </DialogTrigger>
              </div>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <DialogTitle className="text-3xl font-bold">
                        {project.title}
                      </DialogTitle>
                      <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </p>
                  </DialogHeader>

                  {/* Tech Stack in Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <SkillGroup title="Frontend" skills={project.skills.frontend} />
                    <SkillGroup title="Backend" skills={project.skills.backend} />
                    <SkillGroup title="Database" skills={project.skills.database} />
                  </div>

                  {/* Key Features */}
                  {project.features?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gap-2">
                        <ExternalLink className="h-4 w-4" /> Live
                      </Button>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="gap-2">
                          <Github className="h-4 w-4" /> Code
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}