"use client";

import React, { createContext, useContext } from "react";
import { THEMES } from '@nx-w/config-ui';

type ThemeType = typeof THEMES[keyof typeof THEMES];
export const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
  value,
  children, 
}: {
  value: ThemeType;
  children: React.ReactNode;
}) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);