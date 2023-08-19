import React,{useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import {
  Poppins_800ExtraBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const WelcomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.head}>PlanetHop</Text>
        <Text style={styles.bodyText}>
          Explore the Cosmos: Seamless Planet-Hopping with Our Galactic Flight
          Booking App!
        </Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("./../../assets/welcome_image.png")}
        contentFit="fill"
      />
      </View>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.appButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#030413",
  },
  textContainer: {
    flex: 2,
    justifyContent: "flex-start",
    padding: 20,
  },
  head: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 45,
    color: "white",
    alignContent: "flex-start",
    marginVertical: 40,
  },
  bodyText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "white",
    lineHeight: 30,
  },
  appButtonContainer: {
    justifyContent:"center",
    elevation: 8,
    backgroundColor: "#791AF6",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:50,
    width: 188,
    height:56
  },
  appButtonText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
  imageContainer: {
    flex: 7,
  },
  image: {
    width: WIDTH*0.99,
    height: HEIGHT*0.8,
  },
});

export default WelcomeScreen;
