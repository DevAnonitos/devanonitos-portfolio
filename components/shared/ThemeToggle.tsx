'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="icon-sm" variant="ghost" disabled aria-label="Toggle theme">
        <div className="size-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="secondary"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-3 py-1.5 cursor-pointer h-9"
    >
      {isDark ? (
        <>
          <Sun className="size-4 transition-all" />
          <span className="text-sm font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="size-4 transition-all" />
          <span className="text-sm font-medium">Dark Mode</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;