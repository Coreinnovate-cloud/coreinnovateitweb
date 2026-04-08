import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  label,
  type,
  ...props
}: React.ComponentProps<"input"> & { label?: string; error?: string }) {
  return (
    <div className="gap-y-2 w-full flex flex-col">
      {label && <label className="text-sm font-medium text-black" htmlFor={label}>{label}</label>}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-[#98A2B3] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-lg border border-[#D0D5DD] bg-white p-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-primary focus-visible:ring-1",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
