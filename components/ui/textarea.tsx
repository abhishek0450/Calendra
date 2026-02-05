import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-lg border-2 border-gray-700 bg-gray-800 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 transition-colors",
        "focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-900",
        "resize-y",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
