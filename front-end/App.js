import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavContainer from './src/navigation';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useCallback } from 'react';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer onLayout={onLayoutRootView}>
        <NavContainer />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
