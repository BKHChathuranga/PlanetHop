import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import {
  Poppins_800ExtraBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import HomeImageCard from "../components/HomeImageCard";
import { transportationModes } from "../constants/Screens/HomeScreen";
import { news } from "../constants/Screens/HomeScreen";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView vertical>
          <Text style={styles.headingText}>PlanetHop</Text>
          <View style={styles.headerContainer}>
            <Image
              style={styles.image}
              source={require("./../../assets/HomeHeaderImage.png")}
              contentFit="cover"
            />
            <Text style={styles.headerSignInText}>
              Explore new dimensions with us!
            </Text>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.buttonText}>SignIn</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subSectionBodyContainer}>
            <Text style={styles.subSectionHeader}>
              Our Transportation Modes
            </Text>
            <View style={styles.sliderArea}>
              <ScrollView horizontal>
                {transportationModes.map((mode) => (
                  <HomeImageCard
                    key={mode.id}
                    image={mode.image}
                    header={mode.cardHeader}
                    isNews={false}
                  />
                ))}
              </ScrollView>
            </View>
            <Text style={styles.subSectionHeader}>
              Hot News In Solar System
            </Text>
            <View style={styles.sliderArea}>
              <ScrollView horizontal>
                {news.map((mode) => (
                  <HomeImageCard
                    key={mode.id}
                    image={mode.image}
                    header={mode.cardHeader}
                    isNews={true}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030413",
  },
  image: {
    position: "absolute",
    top: 0,
    height: 276,
    width: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: 276,
    width: "100%",
  },
  headingText: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  subSectionBodyContainer: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 100,
  },
  subSectionHeader: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 5,
  },
  sliderArea: {
    backgroundColor: "#1B1C4B",
    borderRadius: 15,
    borderColor: "#791AF6",
    borderWidth: 1,
    marginBottom: 10,
  },
  headerSignInText: {
    fontFamily: "Poppins_500Medium",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "rgba(121, 26, 246, 1)",
    width: 114,
    height: 37,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Poppins_700Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
