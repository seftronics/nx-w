'use client';

import { Button } from '@nx-w/ui';
import { useActiveTheme } from '@nx-w/hooks';

export default function Index() {
  const theme = useActiveTheme();
  return (
    <div>
     <Button
        themeObj={typeof theme.button === 'object' ? theme.button : undefined}
        variant="ghost"
      >
        Zikas
      </Button>
    </div>
);
}