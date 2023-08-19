import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
const AboutPlanetFeatureCard = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.cardBody}>
      <Text style={styles.cardHeader}>Average Temperature</Text>
      <Text style={styles.featureText}>288F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    padding: 24,
    height: 138,
    width: 138,
    margin: 30,
    borderRadius: 15,
    justifyContent: "flex-start",
    elevation: 8,
    backgroundColor: "#D3A7FD",
  },
  cardHeader: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    color: "#791FD6",
  },
  featureText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 32,
    color: "#45008C",
  },
});

export default AboutPlanetFeatureCard;
