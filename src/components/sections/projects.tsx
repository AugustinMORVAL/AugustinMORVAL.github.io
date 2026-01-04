import SectionWrapper from "../ui/section-wrapper";
import projects from "@/data/projects";
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

export default function ProjectsSection() {
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
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer transition-all"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl text-primary">📁</span>
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
                </motion.div>
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
                            {project.skills.frontend.map((skill) => (
                              <div
                                key={skill.title}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm"
                              >
                                <span className="text-lg">{skill.icon}</span>
                                <span>{skill.title}</span>
                              </div>
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
                            {project.skills.backend.map((skill) => (
                              <div
                                key={skill.title}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm"
                              >
                                <span className="text-lg">{skill.icon}</span>
                                <span>{skill.title}</span>
                              </div>
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
