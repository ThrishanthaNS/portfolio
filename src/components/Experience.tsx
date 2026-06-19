import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Work Experience"
          description="Professional experiences that shaped my career."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-accent bg-bg-primary z-10">
                  <div className="absolute inset-0.5 rounded-full bg-accent/40 animate-pulse" />
                </div>

                <div className="glass rounded-2xl p-6 md:p-8 card-border hover:bg-bg-card-hover/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-accent" />
                        <span className="text-sm font-medium text-accent">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-text-muted text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        Remote
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
