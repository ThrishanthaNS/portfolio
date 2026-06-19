interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
