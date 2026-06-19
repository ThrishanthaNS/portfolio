import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
  FileText,
  FolderOpen,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="hero-gradient" />
      <div className="bg-grid absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-text-secondary px-4 py-1.5 rounded-full border border-border bg-bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-text-primary">Hi, I'm </span>
          <span className="gradient-text">Thrishantha N S</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-text-secondary font-medium mb-3"
        >
          Computer Science Engineering Student
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-base text-text-muted font-mono mb-6"
        >
          Full Stack Developer &middot; Machine Learning Enthusiast &middot;
          Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Passionate about building scalable software systems, AI-powered
          applications, and computer vision solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            <FileText size={18} />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-bg-card hover:bg-bg-card-hover border border-border text-text-primary font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <FolderOpen size={18} />
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-bg-card hover:bg-bg-card-hover border border-border text-text-primary font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageSquare size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: GithubIcon,
              href: "https://github.com/ThrishanthaNS",
              label: "GitHub",
            },
            {
              icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/thrishantha-ns-949b3b2bb/",
              label: "LinkedIn",
            },
            {
              icon: ({ ...props }: React.SVGProps<SVGSVGElement>) => (
                <Mail size={20} {...(props as Record<string, unknown>)} />
              ),
              href: "mailto:thrishantha02ns@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-border bg-bg-card/50 text-text-secondary hover:text-text-primary hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon width={20} height={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-text-muted hover:text-text-secondary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
