import { useState, useEffect } from "react";

/**
 * Custom hook to manage theme switching between light and dark modes
 * @returns {readonly [string, () => void]} A tuple containing:
 * - theme: Current theme ('light' | 'dark')
 * - toggleTheme: Function to toggle between themes
 */
const useTheme = (): readonly [string, () => void] => {
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return [theme, toggleTheme] as const;
};

export default useTheme;