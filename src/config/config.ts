import { activeSkills } from "./sections/active-skills";
import { experience } from "./sections/experience";
import { education } from "./sections/education";
import { projects } from "./sections/projects";

export const config = {
  name: "Augustin MORVAL",
  title: "Data Scientist & AI Engineer",
  description: {
    long: "Data Scientist & AI Engineer specialized in designing and deploying advanced AI solutions (agentic LLM/GenAI, Computer Vision, Audio ML). I cover the full project lifecycle: business scoping, R&D, evaluation, and productionization through APIs (FastAPI/Flask) and MLOps practices (Docker, CI/CD, GCP). My dual background in consulting and AI engineering enables me to deliver robust solutions aligned with business goals.",
    short:
      "Data Scientist & AI Engineer bridging ML expertise with business acumen. Building production-ready apps and deploying scalable solutions to drive impact.",
  },
  email: "augustin.morval.pro@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1SYd04rSaz-U-pEdx2EggJEy7OZlDbtEk/view?usp=sharing",
  site: "https://augustin-morval.github.io",
  
  social: {
    github: "https://github.com/AugustinMORVAL",
    linkedin: "https://linkedin.com/in/augustin-morval",
  },

  activeSkills,
  experience,
  education,
  projects,
};
