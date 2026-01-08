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
  useLenis();
  useGSAPScrollTrigger();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider delayDuration={200}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Animated gradient background */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />

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
