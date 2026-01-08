"use client";

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
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projects = config.projects;

export default function ProjectsSection() {
  const cards = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards.current, {
        start: "top 85%",
        onEnter: batch =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 80, rotateX: 20, scale: 0.9 },
            { opacity: 1, y: 0, rotateX: 0, scale: 1, stagger: 0.12, ease: "power3.out" }
          ),
      });

      cards.current.forEach((card, i) => {
        gsap.to(card, {
          y: -40 - i * 4,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if ("ontouchstart" in window) return;

    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    gsap.to(el, {
      rotateY: x / 25,
      rotateX: -y / 25,
      boxShadow: `${-x / 4}px ${y / 4}px 25px rgba(0,0,0,.25)`,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0px 10px 25px rgba(0,0,0,.15)",
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <SectionWrapper id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
              <div className="relative">
                <div
                  ref={(el: HTMLDivElement | null) => {
                    if (el) cards.current[i] = el;
                  }}
                  onMouseMove={handleMove}
                  onMouseLeave={resetTilt}
                  className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition hover:shadow-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl">📁</span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <DialogTrigger asChild>
                  <button className="absolute inset-0" aria-label={`Open ${project.title}`} />
                </DialogTrigger>
              </div>

              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a href={project.live} target="_blank">
                    <Button className="gap-2">
                      <ExternalLink className="h-4 w-4" /> Live
                    </Button>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank">
                      <Button variant="outline" className="gap-2">
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
