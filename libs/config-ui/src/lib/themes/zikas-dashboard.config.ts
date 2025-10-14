export const zikasTheme = {
  name: 'zikas',
  displayName: 'Zikas',
  button: {
    default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary/20 dark:focus-visible:ring-secondary/40 dark:bg-secondary/60",
    outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    link: "text-primary underline-offset-4 hover:underline",
  },
} as const;