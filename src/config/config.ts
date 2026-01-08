import { activeSkills } from "./sections/active-skills";
import { experience } from "./sections/experience";
import { education } from "./sections/education";
import { projects } from "./sections/projects";

export const config = {
  name: "Augustin MORVAL",
  title: "Data & AI Engineer",
  description: {
    long: "Data & AI Engineer focused on end-to-end ML: NLP/LLMs, Computer Vision (OMR) and Audio ML. I build practical prototypes and deployment-ready pipelines, with a strong consulting + finance background and a focus on measurable impact.",
    short:
      "Data & AI Engineer bridging ML expertise with business acumen. Building production-ready apps and deploying scalable solutions to drive impact.",
  },
  email: "augustin.morval.pro@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/your-resume-id/view",
  site: "https://yourusername.github.io",
  
  social: {
    github: "https://github.com/AugustinMORVAL",
    linkedin: "https://linkedin.com/in/augustin-morval",
  },

  activeSkills,
  experience,
  education,
  projects,
};
