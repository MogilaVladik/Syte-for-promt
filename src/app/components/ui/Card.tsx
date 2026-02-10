import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-white/5 to-white/[0.02] 
        backdrop-blur-sm rounded-2xl border border-white/10
        ${hover ? "hover:border-red-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-primary/20" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
