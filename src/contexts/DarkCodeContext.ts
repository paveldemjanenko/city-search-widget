import { createContext } from 'react';

export const DarkModeContext = createContext<'light' | 'dark'>('light');
