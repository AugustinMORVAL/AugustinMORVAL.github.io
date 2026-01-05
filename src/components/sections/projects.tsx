import SectionWrapper from "../ui/section-wrapper";
import projects, { type Project, type Skill } from "@/data/projects";
import { motion } from "framer-motion";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        // Parallax effect with different speeds
        const speed = 1 + (index % 3) * 0.3;
        
        gsap.to(project, {
          y: -50 * speed,
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });

        // 3D entrance animation
        gsap.fromTo(
          project,
          {
            opacity: 0,
            rotateX: 45,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredProject !== index) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePosition({ x, y });

    // 3D tilt effect
    gsap.to(card, {
      rotateY: x / 20,
      rotateX: -y / 20,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredProject(null);
    
    // Reset tilt
    gsap.to(e.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <SectionWrapper id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl text-primary group-hover:scale-125 transition-transform duration-500">📁</span>
                    
                    {/* Animated gradient overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        transform: hoveredProject === index 
                          ? `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                          : 'none',
                      }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-secondary whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                    <div className="flex flex-col md:flex-row gap-6">
                      {project.skills.frontend.length > 0 && (
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-2">
                            Frontend
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.frontend.map((skill: Skill) => (
                              <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm hover:bg-primary/20 transition-colors"
                              >
                                <span className="text-lg">{skill.icon}</span>
                                <span>{skill.title}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.skills.backend.length > 0 && (
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-2">
                            Backend
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.backend.map((skill: Skill) => (
                              <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm hover:bg-primary/20 transition-colors"
                              >
                                <span className="text-lg">{skill.icon}</span>
                                <span>{skill.title}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, idx: number) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="gap-2">
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
