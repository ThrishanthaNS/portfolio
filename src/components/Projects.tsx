import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Projects"
          description="A selection of projects I've built and contributed to."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden card-border group flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-accent/10 via-bg-tertiary to-accent-secondary/10 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold gradient-text">
                        {project.id}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted font-medium">
                      Project {project.id}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-light transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5 flex-1">
                  {project.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-2 text-xs text-text-secondary"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-accent shrink-0"
                      />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium text-accent bg-accent/8 border border-accent/15 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <GithubIcon width={14} height={14} />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent-light transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
