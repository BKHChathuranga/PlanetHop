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
} from "@expo-google-fonts/poppins";
import HomeImageCard from "../components/HomeImageCard";

export default function HomeScreen() {
    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_500Medium,
      });
    
      if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
      <Text style={styles.headingText}>PlanetHop</Text>
        <Image
          style={styles.image}
          source={require("./../../assets/HomeHeaderImage.png")}
          contentFit="cover"
        />
        <View style={styles.subSectionBodyContainer}>
        <Text style={styles.subSectionHeader}>Our Transportation Modes</Text>
        <View style={styles.sliderArea}>
            <ScrollView horizontal>
            <HomeImageCard/>
            <HomeImageCard/>
            <HomeImageCard/>
            </ScrollView>
        </View>
        <Text style={styles.subSectionHeader}>Hot News In Solar System</Text>
        <View style={styles.sliderArea}>
            <ScrollView horizontal>
            <HomeImageCard/>
            <HomeImageCard/>
            <HomeImageCard/>
            </ScrollView>
        </View>
        </View>
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
    height: 276,
    width: '100%',
  },
  headingText: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 32,
    color: "white",
    textAlign:'center',
    marginVertical: 10,
  },
  subSectionBodyContainer:{
    paddingVertical:10,
    paddingHorizontal:25
  },
  subSectionHeader:{
    fontFamily:"Poppins_500Medium",
    fontSize:16,
    color:"#ffffff",
    marginVertical:5
  },
  sliderArea:{
    backgroundColor:"#1B1C4B",
    borderRadius:15,
    borderColor:"#791AF6",
    borderWidth:1
  }
});
