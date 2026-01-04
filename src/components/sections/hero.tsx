import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { BlurIn, BoxReveal } from "../animations/reveal-animations";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import ScrollDownIcon from "../scroll-down-icon";

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" className="relative h-screen">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          {/* Greeting */}
          <BlurIn delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 font-light">
              Hi, I am
            </p>
          </BlurIn>

          {/* Name */}
          <BlurIn delay={0.4}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-none">
              {config.name}
            </h1>
          </BlurIn>

          {/* Title */}
          <BlurIn delay={0.6}>
            <p className="text-lg md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              {config.title}
            </p>
          </BlurIn>

          {/* Description */}
          <BlurIn delay={0.8}>
            <p className="text-base text-slate-400 max-w-lg">
              {config.description.short}
            </p>
          </BlurIn>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 w-full sm:w-fit">
            {/* Resume Button - Full width primary */}
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <BoxReveal delay={2} width="100%">
                <Button className="flex items-center justify-center gap-2 w-full bg-foreground text-background hover:bg-foreground/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90 font-medium border-0">
                  <FileText size={20} />
                  <span>Resume</span>
                </Button>
              </BoxReveal>
            </a>

            {/* Second Row: Hire Me + Social Buttons */}
            <div className="flex gap-3 w-full">
              {/* Hire Me Button */}
              <a href="#contact" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-foreground border-border hover:bg-accent"
                >
                  Hire Me
                </Button>
              </a>

              {/* Social Buttons Container */}
              <div className="flex items-center gap-2">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="px-3" aria-label="GitHub">
                    <SiGithub size={20} />
                  </Button>
                </a>
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="px-3" aria-label="LinkedIn">
                    <SiLinkedin size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Could add 3D elements or graphics here */}
        <div className="hidden md:block"></div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
}
