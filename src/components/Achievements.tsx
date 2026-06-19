import { motion } from "framer-motion";
import { Trophy, Award, Briefcase, Rocket } from "lucide-react";
import { achievements } from "../data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  briefcase: Briefcase,
  rocket: Rocket,
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Achievements"
          description="Milestones and recognitions along my journey."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 card-border group hover:bg-bg-card-hover/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
