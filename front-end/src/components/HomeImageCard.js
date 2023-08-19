import React from "react";
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
    Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const HomeImageCard = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={require("./../../assets/starShip.png")}
        contentFit="contain"
      />
      <View style={styles.overlayView}/>
      <Text style={styles.cardText}>star-Ship</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 156,
    width: 138,
    marginVertical: 15,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent:"center"
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.49)",
    borderRadius: 15,
  },
  cardText:{
    fontFamily:"Poppins_700Bold",
    fontSize:18,
    color:"white",
    textAlign:"center"
  }
});
export default HomeImageCard;
