import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import {
  Poppins_800ExtraBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const BookingConfirmed = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container1}>
      <Image
        style={styles.image1}
        source={require("../../assets/Success_icon.png")}
        placeholder={blurhash}
      />
      <Text style={styles.text}>Your Booking has been Confirmed !</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image2}
          source={require("./../../assets/Curve.png")}
          contentFit="fill"
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.fontStyle1}>SpaceX 19001</Text>
        <View style={styles.row}>
          <Text style={styles.fontStyle2}>Date&ensp;&ensp;&ensp;:&ensp;</Text>
          <Text style={styles.fontStyle3}>August 22, 2165</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fontStyle2}>Time&ensp;&ensp;&ensp;:&ensp;</Text>
          <Text style={styles.fontStyle3}>18 : 30 Hrs</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fontStyle2}>From&ensp;&ensp;&ensp;:&ensp;</Text>
          <Text style={styles.fontStyle3}>Earth</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fontStyle2}>To&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:&ensp;</Text>
          <Text style={styles.fontStyle3}>Saturn</Text>
        </View>
      </View>
      <Text style={styles.fontStyle4}></Text>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => navigation.navigate("profile")}
      >
        <Text style={styles.appButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#030413",
  },
  imageContainer: {
    flex: 7,
    paddingTop: 50
  },
  image1: {
    width: 162,
    height: 162,
  },
  image2: {
    width: WIDTH * 1,
    height: HEIGHT * 0.6,
  },
  text: {
    fontFamily: "Poppins_700Bold",
    width: 326,
    color: "#FFF",
    textAlign: "center",
    fontSize: 32,
    fontStyle: "normal",
    lineHeight: 47,
    letterSpacing: -1.28,
    paddingBottom: 25
  },
  container2: {
    paddingTop: 25,
    textAlign: "center",
    width: 286,
    height: 254,
    flexShrink: 0,
    borderWidth: 2,
    borderColor: "#791AF6",
    backgroundColor: "#1B1C4B",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row: {
    paddingLeft: 25,
    flexDirection: "row",
    width: 283,
  },
  fontStyle1: {
    display: "flex",
    width: 200,
    height: 33,
    flexDirection: "column",
    flexShrink: 0,
    color: "#FFF",
    fontSize: 20,
    fontStyle: "normal",
    paddingLeft: 55,
    fontFamily: "Poppins_500Medium",
  },
  fontStyle2: {
    paddingTop: 15,
    color: "#FFF",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 17.5,
    fontFamily: "Poppins_500Medium",
  },
  fontStyle3: {
    paddingTop: 15,
    color: "#B36EFA",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 17.5,
    fontFamily: "Poppins_500Medium"
  },
  fontStyle4: {
    padding: 40
  },
  appButtonContainer: {
    justifyContent: "center",
    elevation: 8,
    backgroundColor: "#791AF6",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 50,
    width: 188,
    height: 56
  },
  appButtonText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default BookingConfirmed;
