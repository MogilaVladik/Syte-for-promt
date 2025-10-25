interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  gradient?: "dark-to-darker" | "darker-to-dark";
}

export default function Section({
  id,
  children,
  className = "",
  gradient = "dark-to-darker",
}: SectionProps) {
  const gradients = {
    "dark-to-darker": "bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]",
    "darker-to-dark": "bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]",
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${gradients[gradient]} ${className}`}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </div>
    </section>
  );
}
