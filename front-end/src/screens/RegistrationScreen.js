import React, { useCallback, useMemo, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { useFonts } from "expo-font";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

import { Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { TouchableOpacity } from "react-native-gesture-handler";

const RegistrationScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  const bottomSheetModalRef = useRef(BottomSheetModal);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "85"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={2}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.mainHeader}>More About</Text>
            <Image
              style={styles.image}
              source={require("./../../assets/saturn.png")}
              contentFit="contain"
            />
            <ScrollView Vertical style={styles.scrollBody}>
              <View style={styles.scrollHorizontalArea}>
                <Text style={styles.scrollHorizontalTitle}>
                  Places to visit in Saturn
                </Text>
                <ScrollView horizontal contentContainerStyle={styles.scrollHorizontal}>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={styles.scrollHorizontalArea}>
                <Text style={styles.scrollHorizontalTitle}>
                  Places to visit in Saturn
                </Text>
                <ScrollView horizontal contentContainerStyle={styles.scrollHorizontal}>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={styles.scrollHorizontalArea}>
                <Text style={styles.scrollHorizontalTitle}>
                  Places to visit in Saturn
                </Text>
                <ScrollView horizontal contentContainerStyle={styles.scrollHorizontal}>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                    style={styles.visitImage}
                    source={require("./../../assets/saturn_visit_image1.png")}
                    contentFit="cover"
                  />
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "grey",
  },
  image: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.2,
  },
  mainHeader: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "black",
    alignContent: "flex-start",
  },
  scrollBody: {
    width: WIDTH,
    backgroundColor: "#E5CAFF",
  },
  scrollHorizontalArea: {
    flex: 1,
    backgroundColor: "#D3A7FD",
    alignItems: "center",
    margin: 15,
    borderRadius: 15,
  },
  scrollHorizontal: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },

  scrollHorizontalTitle: {
    fontFamily: "Poppins_500Medium",
    color: "#1D267D",
    fontSize: 14,
    margin: 4,
  },
  imageCard: {
    flex: 1,
    borderRadius: 10,
    width: WIDTH * 0.2,
    height: HEIGHT * 0.2,
  },
  visitImage: {
    width: WIDTH * 0.35,
    height: HEIGHT * 0.2,
    marginHorizontal: 5,
    marginVertical: 12,
    borderRadius: 10,
  },
});

export default RegistrationScreen;
