'use client'
import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

interface ThemeProps {
  children: ReactNode;
}

function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
