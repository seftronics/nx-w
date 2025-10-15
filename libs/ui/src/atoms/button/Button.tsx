import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

type ThemeButtonObj = {
  base?: string;
  variants?: Record<string, string>;
  sizes?: Record<string, string>;
};

type ButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean;
  themeObj?: ThemeButtonObj;
  variant?: string;
  size?: string;
};

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  themeObj,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const buttonVariants = cva(
    themeObj?.base || '',
    {
      variants: {
        variant: themeObj?.variants || {
          default: '',
          destructive: '',
          outline: '',
          secondary: '',
          ghost: '',
          link: '',
        },
        size: themeObj?.sizes || {
          default: '',
          sm: '',
          lg: '',
          icon: '',
          'icon-sm': '',
          'icon-lg': '',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  );
  return (
      <Comp
        data-slot="button"
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
}

export { Button };