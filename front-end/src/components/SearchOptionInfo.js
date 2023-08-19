import React from "react";
import { StyleSheet, Text, View } from "react-native";
import planetDetails from "../constants/PlanetDetails";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import {
    Poppins_600SemiBold,
    Poppins_500Medium
} from "@expo-google-fonts/poppins";

const SearchOptionInfo = ({ desc, bullets, price }) => {
    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_500Medium
      });
    
      if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.card}>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.bullets}>
        {bullets.map((e, idx) => (
          <View style={styles.bulletItem} key={idx}>
            <MaterialIcons name="filter-vintage" size={15} color="#D4ADFC" />
            <Text style={styles.bulletText}>{e}</Text>
          </View>
        ))}
        {
            price && 
            <Text style={styles.price}>{`$${price}`}</Text>
        }
      </View>
    </View>
  );
};

export default SearchOptionInfo;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#1B1C4B",
    borderColor: "#791AF6",
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
  },
  desc: {
    fontFamily: "Poppins_500Medium",
    color: "#FFFEFE",
    textAlign: "center",
  },
  purpleText: {
    color: "#B36EFA",
  },
  bullets: {
    paddingTop: 10,
    paddingHorizontal: 5
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5
  },
  bulletText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFEFE",
    paddingLeft: 10,
  },
  price: {
    paddingTop: 2,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "Poppins_600SemiBold",
    color: "#FFFEFE",
  }
});
