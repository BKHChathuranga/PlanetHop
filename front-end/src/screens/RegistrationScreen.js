import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Inputbox from '../components/Inputbox';
import {
  Poppins_800ExtraBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import React, { useState, useLayoutEffect } from 'react';
import Checkbox from 'expo-checkbox';
import SocialLoginButton from '../components/SocialLoginButton';
import { UserRegister } from '../services/AuthService';
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator, npnValidator } from '../helpers/inputValidator'

const RegistrationScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [fName, setFName] = useState({ value: '', error: '' });
  const [lName, setLName] = useState({ value: '', error: '' });
  const [npn, setNpn] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [pwd, setPwd] = useState({ value: '', error: '' });
  const [cpwd, setCpwd] = useState({ value: '', error: '' });
  const [isChecked, setChecked] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleRegister = async () => {

    const fNameValidator = nameValidator(fName.value)
    const lNameValidator = nameValidator(lName.value)
    const emailError = emailValidator(email)
    const npnError = npnValidator(npn)
    const passwordError = passwordValidator(pwd.value)

    if (fNameValidator || lNameValidator || emailError || npnError || passwordError) {
      setFName({ ...fName, error: fNameValidator })
      setLName({ ...lName, error: lNameValidator })
      setEmail({ ...email, error: emailError })
      setNpn({ ...npn, error: npnError })
      setPwd({ ...pwd, error: passwordError })
      return ''
    }
     else if (pwd.value !== cpwd.value) {
        const confirmPasswordError = "Passwords do not match"
        setCpwd({ ...cpwd, error: confirmPasswordError })
        return ''
    }
     else {
      try {
        const data = {
          firstName: fName,
          lastName: lName,
          npn: npn,
          email: email,
          password: pwd.value
        }
        const res = await UserRegister(data);
        console.log('resssss', res)
        console.log("valueee", data)
      } catch (err) {
        console.log("Error in registering")
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar style='light' />
          <View style={styles.header}>
            <Text style={styles.head}>Registration</Text>
            <Text style={styles.bodyText}>
              Fill Your Information Below or Register {"\n"} with your Social accounts
            </Text>
          </View>
          <Inputbox label={"First Name"} placeholder={"First Name"} secureTextEntry={false} IconName={"user"} input={fName.value} style={{ flex: 1 }} setInput={setFName} error={!!fName.error} errorText={fName.error} />
          <Inputbox label={"Last Name"} placeholder={"Last Name"} secureTextEntry={false} IconName={"user"} input={lName.value} style={{ flex: 1 }} setInput={setLName} error={!!lName.error} errorText={lName.error} />
          <Inputbox label={"National Planetary Number (NPN)"} placeholder={"npn"} secureTextEntry={false} IconName={"idcard"} input={npn.value} style={{ flex: 1 }} setInput={setNpn} error={!!npn.error} errorText={npn.error} />
          <Inputbox label={"Email"} placeholder={"Email"} secureTextEntry={false} IconName={"mail"} input={email.value} style={{ flex: 1 }} setInput={setEmail} error={!!email.error} errorText={email.error} />
          <Inputbox label={"Password"} placeholder={"Password"} secureTextEntry={true} IconName={"lock"} input={pwd.value} style={{ flex: 1 }} setInput={setPwd} error={!!pwd.error} errorText={pwd.error} />
          <Inputbox label={"Confirm Password"} placeholder={"Confirm Password"} secureTextEntry={true} IconName={"lock"} input={cpwd.value} style={{ flex: 1 }} setInput={setCpwd} error={!!cpwd.error} errorText={cpwd.error} />
          <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 30 }}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={'#B36EFA'} />
            <Text style={styles.paragraph}>Agree with <Text style={{ color: '#B36EFA', fontFamily: 'Poppins_800ExtraBold', textDecorationLine: 'underline' }}>Terms & Condition</Text></Text>
          </View>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={handleRegister}
          >
            <Text style={styles.appButtonText}>Create Account</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            <View>
              <Text style={[{ marginHorizontal: 10 }, styles.paragraph]}>or sign up with</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginHorizontal: 20, marginVertical: 10 }}>
            <SocialLoginButton name='facebook' />
            <SocialLoginButton name='google' />
            <SocialLoginButton name='instagram' />
          </View>
          <Text style={[{ alignSelf: 'center' }, styles.paragraph]}>Already have an account?  <TouchableOpacity
            onPress={() => navigation.navigate("login")}
          >
            <Text style={{ color: '#B36EFA', fontFamily: 'Poppins_800ExtraBold', textDecorationLine: 'underline' }}>Sign In</Text>
          </TouchableOpacity>
          </Text>
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07071B'
  },
  header: {
    alignItems: 'center'
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
    textAlign: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 20,
  },
  paragraph: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff'
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
    marginHorizontal: 20
  },
  appButtonText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
})