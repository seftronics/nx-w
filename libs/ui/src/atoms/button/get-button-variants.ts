import { cva } from "class-variance-authority";
import type { Theme } from "./button-theme.types";
export const defaultTheme: Theme = { button: {} };

export function useThemeButtonVariants(theme?: Theme) {
  const t = theme ?? defaultTheme;
  return cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: t.button.default || '',
          destructive: t.button.destructive || '',
          outline: t.button.outline || '',
          secondary: t.button.secondary || '',
          ghost: t.button.ghost || '',
          link: t.button.link || '',
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );
}