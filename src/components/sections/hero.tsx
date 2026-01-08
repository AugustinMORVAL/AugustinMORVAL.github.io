import { config } from "@/config/config";
import SectionWrapper from "../ui/section-wrapper";
import { BlurIn, BoxReveal } from "../animations/reveal-animations";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ScrollDownIcon from "../scroll-down-icon";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const buttonRefs = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      if (nameRef.current) {
        const originalText = nameRef.current.textContent || "";
        const chars = originalText.split("");
        
        nameRef.current.innerHTML = chars
          .map((char) => {
            const charText = char === " " ? "\u00A0" : char;
            return `<span class="inline-block" style="opacity: 1; transform: translateY(50px) rotateX(-90deg); background: linear-gradient(to right, white, rgb(226 232 240), rgb(148 163 184)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${charText}</span>`;
          })
          .join("");

        const spans = Array.from(nameRef.current.children) as HTMLElement[];
        tl.to(spans, {
          y: 0,
          rotateX: 0,
          stagger: 0.03,
          ease: "back.out(1.7)",
          duration: 0.8,
        });
      }

      if (titleRef.current) {
        tl.from(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
            ease: "elastic.out(1, 0.5)",
            duration: 1,
          },
          "-=0.3"
        );
      }

      tl.from(
        buttonRefs.current.filter((ref) => ref !== null),
        {
          opacity: 0,
          y: 20,
          scale: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          duration: 0.6,
        },
        "-=0.2"
      );
    });

    return () => ctx.revert();
  }, []);

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
          <h1
            ref={nameRef}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none"
            style={{ 
              perspective: "1000px",
              background: "linear-gradient(to right, white, rgb(226 232 240), rgb(148 163 184))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {config.name}
          </h1>

          {/* Title */}
          <p
            ref={titleRef}
            className="text-lg md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
          >
            {config.title}
          </p>

          {/* Description */}
          <BlurIn delay={0.8}>
            <p className="text-base text-slate-400 max-w-lg">
              {config.description.short}
            </p>
          </BlurIn>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 w-full sm:w-fit">
            {/* Resume Button */}
            <motion.a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              ref={(el) => {
                buttonRefs.current[0] = el;
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <BoxReveal delay={2} width="100%">
                <Button className="flex items-center justify-center gap-2 w-full bg-foreground text-background hover:bg-foreground/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90 font-medium border-0">
                  <FileText size={20} />
                  <span>Resume</span>
                </Button>
              </BoxReveal>
            </motion.a>

            {/* Second Row: Hire Me + Social Buttons */}
            <div className="flex gap-3 w-full">
              {/* Hire Me Button */}
              <motion.a
                href="#contact"
                className="flex-1"
                ref={(el) => {
                  buttonRefs.current[1] = el;
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  className="w-full text-foreground border-border hover:bg-accent"
                >
                  Hire Me
                </Button>
              </motion.a>

              {/* Social Buttons Container */}
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={config.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={(el) => {
                        buttonRefs.current[2] = el;
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button variant="outline" className="px-3" aria-label="GitHub">
                        <SiGithub size={20} />
                      </Button>
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View my GitHub profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={(el) => {
                        buttonRefs.current[3] = el;
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button variant="outline" className="px-3" aria-label="LinkedIn">
                        <SiLinkedin size={20} />
                      </Button>
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
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
