// theme.js
export const Colors = {
  light: {
    primary: '#2ECC71',
    secondary: '#F39C12',
    background: '#FFFFFF',
    surface: '#F6F8FA',
    textPrimary: '#1E1E1E',
    textSecondary: '#6B6B6B',
    border: '#E0E0E0',
    error: '#E74C3C',
    success: '#27AE60',
  },
  dark: {
    primary: '#27AE60',
    secondary: '#F5B041',
    background: '#121212',
    surface: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#2C2C2C',
    error: '#E74C3C',
    success: '#2ECC71',
  },
};

// Define full theme objects (add mode property)
export const lightTheme = {
  mode: 'light',
  colors: Colors.light,
};

export const darkTheme = {
  mode: 'dark',
  colors: Colors.dark,
};
