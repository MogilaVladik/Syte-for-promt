import { TELEGRAM_URL } from "@/config/constants";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "vip";
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href = TELEGRAM_URL,
  icon,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#E50914] hover:bg-[#c20712] text-white shadow-lg hover:shadow-[#E50914]/50",
    secondary: "bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white",
    vip: "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black shadow-lg hover:shadow-yellow-500/50",
  };

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`
        inline-flex items-center justify-center gap-3 
        px-8 py-4 font-bold text-lg rounded-2xl 
        transition-all hover:scale-105
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {icon}
      {children}
    </a>
  );
}
