export type Theme = {
  button: {
    default?: string;
    destructive?: string;
    outline?: string;
    secondary?: string;
    ghost?: string;
    link?: string;
    [key: string]: string | undefined;
  };
  [key: string]: unknown;
};

export interface FallbackTheme extends Theme {
  button: {
    [key: string]: string | undefined;
    default?: string;
    destructive?: string;
    outline?: string;
    secondary?: string;
    ghost?: string;
    link?: string;
  };
}