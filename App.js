import React, { useEffect } from 'react';
import { AppNavigator } from './src/navigation/appNavigator/appNavigator';
import { ThemeProvider } from './src/components/context/themeContext/themeContext';
import SplashScreen from 'react-native-splash-screen';


export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </>
}
