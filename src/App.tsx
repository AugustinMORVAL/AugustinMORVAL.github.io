import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/sections/hero";
import SkillsSection from "./components/sections/skills";
import EducationSection from "./components/sections/education";
import ExperienceSection from "./components/sections/experience";
import ProjectsSection from "./components/sections/projects";
import ContactSection from "./components/sections/contact";
import ParticlesBackground from "./components/particles-background";
import { ErrorBoundary } from "react-error-boundary";
import { useLenis } from "./hooks/useLenis";
import { useGSAPScrollTrigger } from "./hooks/useGSAPScrollTrigger";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <pre className="text-sm text-red-500">{error.message}</pre>
      </div>
    </div>
  );
}

function App() {
  // Initialize smooth scrolling with Lenis
  useLenis();
  
  // Initialize GSAP ScrollTrigger
  useGSAPScrollTrigger();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider delayDuration={200}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Animated gradient background */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
          
          {/* Radial gradients for glow effect */}
          <div className="fixed inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>

          {/* Particle Background */}
          <ParticlesBackground />

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="relative">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Toast Notifications */}
          <Toaster />
        </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
