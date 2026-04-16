import { create } from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: true, // Default to dark mode for a premium feel
  toggleTheme: () => set((state) => {
    const newTheme = !state.isDarkMode;
    if (typeof window !== 'undefined') {
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    return { isDarkMode: newTheme };
  }),
  setTheme: (isDark) => set(() => {
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    return { isDarkMode: isDark };
  }),
}));
