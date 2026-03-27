import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "white"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "secondary-light";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-3 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 shadow-sm",
      secondary:
        "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50 shadow-sm",
      outline:
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500/50",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500/50",
      white:
        "bg-white text-[#344054] hover:bg-white-100 focus:ring-white-500/50",
      destructive:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50 shadow-sm",
      "secondary-light":
        "bg-secondary-light text-white hover:bg-secondary-light/90 focus:ring-secondary-light/50 shadow-sm",
    };

    const sizes = {
      sm: "px-3 text-xs rounded-[100px]",
      md: "px-4 text-sm rounded-[100px]",
      lg: "px-6 text-base rounded-[100px]",
      xl: "px-8 text-lg rounded-[100px]",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
