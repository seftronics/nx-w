import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useThemeButtonVariants, defaultTheme } from "./get-button-variants";
import type { Theme } from "./button-theme.types";
import type { ButtonVariant, ButtonSize } from "./button-types";
import { cn } from "@nx-w/utils";

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
  const buttonVariants = useThemeButtonVariants(defaultTheme);

  const resolvedClassName =
    className && className.trim().length > 0
      ? className
      : theme.button?.[variant] || '';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), resolvedClassName)}
      {...props}
    >
      {props.children}
    </Comp>
  );
}
export { Button, ButtonVariant as buttonVariants };