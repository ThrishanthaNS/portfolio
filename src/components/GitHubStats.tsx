import { motion } from "framer-motion";
import { GitCommitHorizontal, FolderGit2, Code2, Flame } from "lucide-react";
import { githubStats } from "../data";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  "git-commit-horizontal": GitCommitHorizontal,
  "folder-git-2": FolderGit2,
  "code-2": Code2,
  flame: Flame,
};

export default function GitHubStats() {
  return (
    <SectionWrapper id="github">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GitHub"
          title="GitHub Activity"
          description="A snapshot of my open-source contributions and coding activity."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {githubStats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Code2;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="glass rounded-2xl p-6 text-center card-border group hover:bg-bg-card-hover/50 transition-all duration-300"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-accent/10 text-accent mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 card-border"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-6">
            Contribution Activity
          </h3>
          {/* Simulated Contribution Grid */}
          <div className="overflow-x-auto">
            <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[700px]">
              {Array.from({ length: 364 }).map((_, i) => {
                const intensity = Math.random();
                let bg = "bg-bg-tertiary";
                if (intensity > 0.85)
                  bg = "bg-accent";
                else if (intensity > 0.7)
                  bg = "bg-accent/60";
                else if (intensity > 0.5)
                  bg = "bg-accent/30";
                else if (intensity > 0.3)
                  bg = "bg-accent/10";

                return (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${bg} transition-colors hover:ring-1 hover:ring-accent/40`}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-text-muted">
            <span>Less</span>
            {["bg-bg-tertiary", "bg-accent/10", "bg-accent/30", "bg-accent/60", "bg-accent"].map(
              (bg, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${bg}`}
                />
              )
            )}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
