import React, { Text, View, StyleSheet } from 'react-native'
import {
    Poppins_800ExtraBold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

const BookingCard = (props) => {
    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_600SemiBold,
        Poppins_500Medium,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    function padZero(number) {
        return number.toString().padStart(2, '0');
    }

    const dateObject = new Date(props.date);
    const yearIndex = dateObject.getUTCFullYear();
    const monthIndex = dateObject.getUTCMonth();
    const shortMonth = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ][monthIndex];
    const dayOfMonth = dateObject.getUTCDate();

    const timeObject = new Date(props.time);
    const hours = timeObject.getUTCHours();
    const minutes = timeObject.getUTCMinutes();

    const timeZone = Math.abs(timeObject.getTimezoneOffset()) / 60;
    const sign = timeZone < 0 ? "-" : "+";
    const formattedTimezone = `${sign}${padZero(Math.floor(timeZone))}:${padZero((timeZone * 60) % 60)}`;

    return (
        <View style={styles.card}>
            <View style={[styles.descCard, props.status === 'cancelled' && { backgroundColor: '#FF542E' }, props.status === 'completed' && { backgroundColor: '#6EFA74' }, props.status === 'upcoming' && { backgroundColor: '#CDFA6E' }]}>
                <View style={{ flexDirection: 'row', paddingBottom: 8 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.titleText}>From</Text>
                        <Text style={[{ paddingTop: 3 }, styles.descText]}>{props.from}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.titleText}>to</Text>
                        <Text style={[{ paddingTop: 3 }, styles.descText]}>{props.to}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.titleText, { flex: 1, alignSelf: 'center' }]}>mode</Text>
                    <Text style={[styles.descText, { flex: 2, alignSelf: 'center' }]}>{props.mode}</Text>
                </View>
            </View>
            <View style={styles.dateCard}>
                <Text style={styles.generalText}>{shortMonth} <Text style={styles.highlightText}>{dayOfMonth}</Text>, {yearIndex}</Text>
                <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, width: '100%', marginVertical: 10 }} />
                <Text style={styles.timeZoneText}>Departure time</Text>
                <Text style={styles.generalText}>{hours}:{minutes} Hrs <Text style={styles.timeZoneText}>(UTC{formattedTimezone})</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 120,
        marginVertical: 5
    },
    descCard: {
        flex: 4,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        padding: 10,
        justifyContent: 'center'
    },
    dateCard: {
        flex: 2,
        backgroundColor: '#0C134F',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        paddingHorizontal: 5,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    generalText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular'
    },
    highlightText: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'Poppins_600SemiBold'
    },
    timeZoneText: {
        color: '#fff',
        fontSize: 10
    },
    titleText: {
        textTransform: 'uppercase',
        color: '#5C469C',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular'
    },
    descText: {
        color: '#0C134F',
        fontSize: 22,
        fontWeight: '600',
        fontFamily: 'Poppins_600SemiBold'
    }
})

export default BookingCard