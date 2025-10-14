'use client';
import { Button } from '@nx-w/ui';
import { useTheme } from '@nx-w/providers';
import { THEMES } from '@nx-w/config-ui'; 
import { defaultTheme } from '@nx-w/ui'; 

export default function Index() {
  const themeName = useTheme() ?? 'zikas';
  const themeObj = typeof themeName === 'string'
    ? THEMES[themeName] ?? defaultTheme
    : themeName ?? defaultTheme;

  return (
      <div className="mx-1 text-xs text-gray-500">
        <Button
          theme={themeObj}
          variant='default'
          showThemeName
        >
          Javamas Button
        </Button>
      </div>
  );
}