import { motion } from "framer-motion";
import { User, Code2, Brain, Server } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building robust, scalable applications with modern frameworks and best practices.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Developing AI solutions with computer vision, NLP, and deep learning techniques.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing RESTful APIs, database architectures, and server-side logic.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="About Me"
          description="Getting to know who I am and what drives me."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About Text */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <User size={22} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Who I Am
                </h3>
              </div>
              <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
                <p>
                  I'm a <span className="text-text-primary font-medium">Computer Science Engineering student</span> with
                  a deep interest in Software Engineering, Machine Learning,
                  Computer Vision, and Backend Development.
                </p>
                <p>
                  I have a strong foundation in{" "}
                  <span className="text-text-primary font-medium">
                    Data Structures and Algorithms
                  </span>
                  , with over 250+ problems solved across competitive
                  programming platforms.
                </p>
                <p>
                  My passion lies in solving real-world problems through
                  technology — whether it's building intelligent detection
                  systems, crafting user-friendly platforms, or automating
                  complex workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-3 grid sm:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 card-border group hover:bg-bg-card-hover/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
