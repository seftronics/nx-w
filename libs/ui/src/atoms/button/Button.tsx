import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useThemeButtonVariants } from "./use-theme-button-variants";
import type { Theme } from "./types";

import { cn } from "@nx-w/utils";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize    = "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

export type ButtonProps = React.ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  showThemeName?: boolean;
  theme: Theme;
};

function Button({
  variant = 'default',
  size,
  asChild = false,
  showThemeName = false,
  theme,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const buttonVariants = useThemeButtonVariants(theme);
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button }
