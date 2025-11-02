import React, { useEffect } from 'react';
import { AppNavigator } from './src/navigation/appNavigator/appNavigator';
import { ThemeProvider } from './src/components/context/themeContext/themeContext';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';


export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})