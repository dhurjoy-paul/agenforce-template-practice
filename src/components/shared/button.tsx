import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const defaultClassName =
    "px-3 py-2 rounded-[10px] font-sans font-medium text-sm";

  const variantClasses = {
    primary: "bg-foreground text-background",
    secondary: "bg-foreground text-background",
  };

  return (
    <button
      className={cn(defaultClassName, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
