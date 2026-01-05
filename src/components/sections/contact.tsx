import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { Mail, Send } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate contact info section
      if (contactInfoRef.current) {
        gsap.fromTo(
          contactInfoRef.current,
          {
            x: -100,
            opacity: 0,
            rotateY: -15,
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (formRef.current) {
        const formFields = formRef.current.querySelectorAll(".form-field");
        
        gsap.fromTo(
          formRef.current,
          {
            x: 100,
            opacity: 0,
            rotateY: 15,
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          formFields,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      // In production, integrate with EmailJS or another service
      console.log("Form data:", data);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success animation
      if (formRef.current) {
        gsap.to(formRef.current, {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      reset();
    } catch (error) {
      // Error animation
      if (formRef.current) {
        gsap.to(formRef.current, {
          x: -10,
          duration: 0.1,
          yoyo: true,
          repeat: 3,
          ease: "power2.inOut",
        });
      }

      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <SectionWrapper id="contact" className="min-h-screen py-20">
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
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12" style={{ perspective: "1000px" }}>
          {/* Contact Info */}
          <div
            ref={contactInfoRef}
            className="space-y-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Email */}
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${config.email}`}
                  className="text-lg hover:text-primary transition-colors"
                >
                  {config.email}
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Follow me on social media
              </p>
              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={config.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SiGithub className="h-6 w-6" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on GitHub</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SiLinkedin className="h-6 w-6" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Name */}
            <div className="form-field space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-field space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="form-field space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={6}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="form-field w-full gap-2"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
