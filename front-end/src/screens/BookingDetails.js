import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from "react-native";
import { CancelBooking } from '../services/BookingService';

const BookingDetails = ({ route, navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    const cancelBooking = async() => {
        CancelBooking(route.params._id).then((res) => {
            navigation.navigate("profile")
        })
    }

    function padZero(number) {
        return number.toString().padStart(2, '0');
    }

    const dateObject = new Date(route.params.date);
    const yearIndex = dateObject.getUTCFullYear();
    const monthIndex = dateObject.getUTCMonth();
    const shortMonth = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ][monthIndex];
    const dayOfMonth = dateObject.getUTCDate();

    const timeObject = new Date(route.params.departureTime);
    const hours = timeObject.getUTCHours();
    const minutes = timeObject.getUTCMinutes();

    const timeZone = Math.abs(timeObject.getTimezoneOffset()) / 60;
    const sign = timeZone < 0 ? "-" : "+";
    const formattedTimezone = `${sign}${padZero(Math.floor(timeZone))}:${padZero((timeZone * 60) % 60)}`;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <StatusBar style='light' />
                <View style={styles.header}>
                    <Text style={styles.head}>Booking Details</Text>
                    <Text style={styles.bodyText}>
                        <Text>{shortMonth} {dayOfMonth}, {yearIndex}</Text>
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom: 15 }}>
                            <Text style={styles.titleText}>Transport Mode</Text>
                            <Text style={[{ paddingTop: 3 }, styles.descText]}>{route.params.transportationMode}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.titleText}>From</Text>
                                <Text style={[{ paddingTop: 3 }, styles.descText]}>{route.params.from}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', paddingBottom: 15 }}>
                                <Text style={styles.titleText}>To</Text>
                                <Text style={[{ paddingTop: 3 }, styles.descText]}>{route.params.to}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', paddingBottom: 15 }}>
                            <Text style={styles.titleText}>Date</Text>
                            <Text style={[{ paddingTop: 3 }, styles.descText]}>{shortMonth} {dayOfMonth}, {yearIndex}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', paddingBottom: 15 }}>
                            <Text style={styles.titleText}>Time</Text>
                            <Text style={[{ paddingTop: 3 }, styles.descText]}>{hours}:{minutes} Hrs (UTC{formattedTimezone})</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'white', marginBottom: 15 }} />
                        <View style={{ flexDirection: 'row', paddingBottom: 15, justifyContent: 'center' }}>
                            <Text style={[styles.descText, { color: '#791AF6' }]}>Total</Text>
                            <Text style={[{ paddingLeft: 10 }, styles.descText]}>$ {route.params.totalPrice}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: "center", marginVertical: 20}}>
                        <TouchableOpacity
                            style={styles.appButtonContainer}
                            onPress={cancelBooking}
                        >
                            <Text style={styles.appButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07071B'
    },
    paragraph: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff'
    },
    header: {
        alignItems: 'center',
        paddingBottom: 10
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
    body: {
        flex: 1,
        marginHorizontal: 30,
        borderRadius: 16,
        height: "70%",
        backgroundColor: "#1B1C4B",
        borderColor: '#791AF6',
        borderWidth: 1,
        padding: 20
    },
    titleText: {
        textTransform: 'uppercase',
        color: '#791AF6',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular'
    },
    descText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        fontFamily: 'Poppins_600SemiBold'
    },
    appButtonContainer: {
        justifyContent: "center",
        elevation: 8,
        backgroundColor: "#791AF6",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 150,
        height: 45
    },
    appButtonText: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignSelf: "center",
    },
})

export default BookingDetails