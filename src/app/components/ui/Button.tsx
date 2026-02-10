import { TELEGRAM_URL } from "@/config/constants";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "vip";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  href = TELEGRAM_URL,
  icon,
  className = "",
  fullWidth = false,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-red-primary hover:bg-red-primary/90 text-white shadow-lg hover:shadow-red-primary/50",
    secondary: "bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white",
    vip: "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black shadow-lg hover:shadow-yellow-500/50",
  };

  const isValidVariant = (v: string): v is ButtonVariant => {
    return ["primary", "secondary", "vip"].includes(v);
  };

  const safeVariant = isValidVariant(variant) ? variant : "primary";
  const isExternal = href?.startsWith("http") ?? false;

  const baseClasses = `
    inline-flex items-center justify-center gap-3 
    px-8 py-4 font-bold text-lead rounded-2xl 
    transition-all hover:scale-105
    ${variants[safeVariant]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  if (onClick && !href) {
    return (
      <button
        onClick={onClick}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {icon}
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
    </a>
  );
}
