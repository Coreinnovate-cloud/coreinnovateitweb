import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  label,
  ...props
}: React.ComponentProps<"textarea"> & { label?: string }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-black" htmlFor={label}>
          {label}
        </label>
      )}

      <textarea
        data-slot="textarea"
        className={cn(
          "border-[#D0D5DD] placeholder:text-[#98A2B3] focus-visible:border-ring focus-visible:ring-primary aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-white p-4 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };
