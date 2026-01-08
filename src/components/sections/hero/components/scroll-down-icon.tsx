import { motion } from "framer-motion";

export default function ScrollDownIcon() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={() => {
        const element = document.querySelector("#skills");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
        <motion.div
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <span className="text-sm text-muted-foreground">Scroll</span>
    </motion.div>
  );
}
