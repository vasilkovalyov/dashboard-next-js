'use client';
import { useEffect, useState } from 'react';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
