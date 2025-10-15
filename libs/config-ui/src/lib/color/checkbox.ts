import { cva } from "class-variance-authority"

// Checkbox variants for size and color theme
export const checkboxVariants = cva(
  [
    "peer shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ],
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
      },
      variant: {
        // Default (primary)
        default: [
          "border-input dark:bg-input/30",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          "aria-invalid:border-destructive"
        ].join(' '),
        // Destructive (error)
        destructive: [
          "border-destructive",
          "data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
          "focus-visible:border-destructive focus-visible:ring-destructive/50 focus-visible:ring-[3px]"
        ].join(' '),
        // Success
        success: [
          "border-green-500",
          "data-[state=checked]:bg-green-500 data-[state=checked]:text-white",
          "focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px]"
        ].join(' '),
        // Warning
        warning: [
          "border-yellow-500",
          "data-[state=checked]:bg-yellow-500 data-[state=checked]:text-white",
          "focus-visible:border-yellow-500 focus-visible:ring-yellow-500/50 focus-visible:ring-[3px]"
        ].join(' '),
        // Info
        info: [
          "border-blue-500",
          "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white",
          "focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px]"
        ].join(' '),
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);