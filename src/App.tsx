import { ThemeProvider } from "./context/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ErrorBoundary } from "react-error-boundary";
import { useLenis } from "./hooks/useLenis";
import { useGSAPScrollTrigger } from "./hooks/useGSAPScrollTrigger";
import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("./components/sections/hero").then(m => ({ default: m.HeroSection })));
const SkillsSection = lazy(() => import("./components/sections/skills").then(m => ({ default: m.SkillsSection })));
const EducationSection = lazy(() => import("./components/sections/education"));
const ExperienceSection = lazy(() => import("./components/sections/experience"));
const ProjectsSection = lazy(() => import("./components/sections/projects"));
const ContactSection = lazy(() => import("./components/sections/contact"));

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
          <div className="fixed inset-0 bg-gradient-to-br from-[hsl(var(--bg-gradient-from))] via-[hsl(var(--bg-gradient-via))] to-[hsl(var(--bg-gradient-to))]" />

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="relative">
            <Suspense fallback={<div className="min-h-screen" />}>
              <HeroSection />
            </Suspense>
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <SkillsSection />
            </Suspense>
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <ExperienceSection />
            </Suspense>
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <ProjectsSection />
            </Suspense>
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <EducationSection />
            </Suspense>
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <ContactSection />
            </Suspense>
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
