'use client';

import { Button } from '@nx-w/ui';
import { useActiveTheme } from '@nx-w/hooks';

export default function Index() {
  const theme = useActiveTheme();
  return (
    <div className="mx-1 text-xs text-gray-500">
      <Button
        theme={theme}
        variant='default'
        showThemeName
      >
        Zikas
      </Button>
    </div>
);
}