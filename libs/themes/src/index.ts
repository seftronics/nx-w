import { tenantATheme } from './lib/tenant-a.theme';
import { tenantBTheme } from './lib/tenant-b.theme';
import { defaultTheme } from './lib/default.theme';

export const THEMES = {
  tenantA: tenantATheme,
  tenantB: tenantBTheme,
  default: defaultTheme,
};

export type Theme = typeof defaultTheme;
