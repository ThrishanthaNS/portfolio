import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { navLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">T.</span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Computer Science Engineering student passionate about building
              impactful software and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Projects
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#projects"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Fire Detection System
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  PRISM Worklet Manager
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Recruitment System
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/ThrishanthaNS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                <GithubIcon width={16} height={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/thrishantha-ns-949b3b2bb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                <LinkedinIcon width={16} height={16} />
              </a>
              <a
                href="mailto:thrishantha02ns@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Thrishantha N S. All rights reserved.
          </p>
          <p className="text-xs text-text-muted inline-flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500" /> using React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
