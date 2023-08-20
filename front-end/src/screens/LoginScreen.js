import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Inputbox from "../components/InputboxLogIn";
import {
  Poppins_800ExtraBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import React, { useState, useLayoutEffect } from "react";
import SocialLoginButton from "../components/SocialLoginButton";

const LoginScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
      <ImageBackground source={require("../../assets/BackgroundImage.png")}>
        <SafeAreaView>
          <StatusBar style="light" />
          <View style={styles.header}>
            <Text style={styles.head}>Sign In</Text>
            <Text style={styles.bodyText}>
              Embark on cosmic journeys with us, your {"\n"}gateway to
              interplanetary adventures.
            </Text>
          </View>
          <Inputbox
            label={"Email Address"}
            placeholder={"Email Address"}
            secureTextEntry={false}
            IconName={"mail"}
            style={{ flex: 1 }}
            setInput={setEmail}
          />
          <Inputbox
            label={"Password"}
            placeholder={"Password"}
            secureTextEntry={true}
            IconName={"lock"}
            style={{ flex: 1 }}
            setInput={setPwd}
          />
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingRight: 15, paddingTop: 5, paddingBottom: 30 }}>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_500Medium",
                  textDecorationLine: "underline",
                  paddingLeft: 5,
                }}
              >
                Forgot password?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.appButtonText}>Sign In</Text>
            <MaterialCommunityIcons
              name={"account-circle-outline"}
              size={25}
              color="#fff"
              style={{ paddingLeft: 10, paddingTop: 6 }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            <View>
              <Text style={[{ marginHorizontal: 10 }, styles.paragraph]}>
                Or
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginHorizontal: 20,
              marginVertical: 10,
              paddingTop: 30,
              paddingBottom: 50
            }}
          >
            <SocialLoginButton name="facebook" />
            <SocialLoginButton name="google" />
            <SocialLoginButton name="instagram" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[{ alignSelf: "center" }, styles.paragraph]}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text
                style={{
                  color: "#B36EFA",
                  fontFamily: "Poppins_800ExtraBold",
                  textDecorationLine: "underline",
                  paddingLeft: 5,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07071B",
  },
  header: {
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 30,
  },
  head: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 45,
    color: "#B36EFA",
    marginTop: 40,
  },
  bodyText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "white",
    lineHeight: 30,
    textAlign: "left",
    marginBottom: 20,
  },
  paragraph: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
  },
  appButtonContainer: {
    justifyContent: "center",
    elevation: 8,
    backgroundColor: "#791AF6",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 20,
    height: 56,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  appButtonText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default LoginScreen;
