import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import {
    Poppins_800ExtraBold,
    Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { AntDesign } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hook/useTogglePasswordVisibility ';

const Inputbox = ({ label, placeholder, secureTextEntry, IconName, input, setInput, canEdit, keyboard }) => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputHeader}>{label}</Text>
            <View style={styles.inputGroup}>
                <AntDesign name={IconName} size={22} style={[styles.icon, { color: "#791AF6" }]} />
                {secureTextEntry ? (
                    <>
                        <TextInput
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={passwordVisibility}
                            autoCorrect={false}
                            onChangeText={(inp) => setInput({ value: inp, error: '' })}
                            value={input}
                            editable={canEdit == null ? true : canEdit}
                        />
                        <Pressable onPress={handlePasswordVisibility} style={styles.visibilityEye}>
                            <AntDesign name={rightIcon} size={22} color="#8250BB" />
                        </Pressable>
                    </>
                ) : (
                    <TextInput
                        placeholder={placeholder}
                        style={styles.input}
                        secureTextEntry={false}
                        autoCorrect={false}
                        onChangeText={(inp) => setInput(inp)}
                        value={input}
                        editable={canEdit == null ? true : canEdit}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 6
    },
    inputHeader: {
        fontFamily: 'Poppins_400Regular',
        color: '#B36EFA'
    },
    inputGroup: {
        marginTop: 10,
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#07071B',
        minHeight: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#791AF6',
    },
    input: {
        textAlign: "justify",
        paddingBottom: 10,
        color: "#fff",
        flex: 7,
        paddingTop: 8,
    },
    icon: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10,
    },
    visibilityEye: {
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})

export default Inputbox;