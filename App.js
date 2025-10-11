import React from 'react';
import { AppNavigator } from './src/navigation/appNavigator/appNavigator';
import { ThemeProvider } from './src/components/context/themeContext/themeContext';

export default function App() {
  return <>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </>
}
