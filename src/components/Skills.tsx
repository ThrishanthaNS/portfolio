import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
} from "lucide-react";
import { skillCategories } from "../data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Skills"
          description="Technologies and tools I work with on a regular basis."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6 card-border group hover:bg-bg-card-hover/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-badge px-3 py-1.5 text-xs font-medium text-text-secondary bg-bg-tertiary border border-border rounded-lg cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
