import React, { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import headerImage from '../../assets/profileHeader.png';
import { useEffect, useState } from 'react';
import BookingCard from '../components/bookingCard';
import { ProfileMainTabs } from '../constants/ProfileMainTabs';
import { ProfileStatusTabs } from '../constants/ProfileStatusTabs';
import { StatusBar } from 'expo-status-bar';
import { GetAllBookings } from '../services/BookingService';
import {
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

const ProfileScreen = () => {
    const [selectedMainHeader, setSelectedMainHeader] = useState('pi');
    const [selectedStatusHeader, setSelectedStatusHeader] = useState('upcoming');
    const [allBookings, setAllBookings] = useState([]);

    function getBookings() {
        GetAllBookings().then((res) => {
            setAllBookings(res.data);
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getBookings();
    }, [])

    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.header}>
                <Image source={headerImage} style={{ width: '100%', height: '100%', position: 'absolute', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }} />
                <View style={{ flexDirection: 'column' }}>
                    <View style={[styles.overlay, { height: 360 }]} />
                    <View style={{ paddingTop: 40, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.avatar} source={require('../../assets/profileHeader.png')} />
                        <View style={styles.informationContainer}>
                            <Text style={styles.name}>Johne Doe</Text>
                            <Text style={styles.label}>Joined on : 2163</Text>
                        </View>
                    </View>
                    <View style={styles.Mainheader}>
                        {ProfileMainTabs.map(value => (
                            <TouchableOpacity style={[styles.button, selectedMainHeader === value.key && styles.selected]} key={value.key} onPress={() => setSelectedMainHeader(value.key)}>
                                <Text
                                    style={[
                                        styles.buttonLabel, selectedMainHeader === value.key && styles.selectedLabel
                                    ]}>
                                    {value.Header}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>

            {selectedMainHeader == 'pi' ? (
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Personal Information</Text>
                    </View>
                </View>
            ) : (
                <View style={[styles.section, { flex: 1, marginVertical: 10 }]}>
                    <View style={styles.Sectionheader}>
                        {ProfileStatusTabs.map(value => (
                            <TouchableOpacity style={[styles.statusButton, selectedStatusHeader === value.Header && styles.selected]} key={value.key} onPress={() => setSelectedStatusHeader(value.Header)}>
                                <Text
                                    style={[
                                        styles.buttonLabel, selectedStatusHeader === value.Header && styles.selectedLabel
                                    ]}>
                                    {value.Header}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <ScrollView>
                        {allBookings.data?.map(value => {
                            {
                                if (value.status === selectedStatusHeader) {
                                    return <BookingCard key={value._id} from={value.from} to={value.to} mode={value.transportationMode} date={value.date} time={value.departureTime} status={value.status} />
                                }
                            }
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030413',
    },
    header: {
        height: 200,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ffff',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#000000'
    },
    informationContainer: {
        width: '100%',
        height: 90,
        marginLeft: 30,
        justifyContent: 'center'
    },
    name: {
        fontSize: 35,
        color: '#ffffff',
        fontFamily: 'Poppins_700Bold'
    },
    label: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 5,
        fontFamily: 'Poppins_400Regular'
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: '#030413',
        marginHorizontal: '1%',
        marginVertical: 4,
        minWidth: '44%',
        textAlign: 'center',
    },
    statusButton: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: '#030413',
        marginHorizontal: '1%',
        marginVertical: 4,
        minWidth: '31%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: '#791AF6',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 15,
        color: '#791AF6',
        alignSelf: 'center',
        fontFamily: 'Poppins_400Regular'
    },
    selectedLabel: {
        color: 'white',
    },
    Mainheader: {
        flexDirection: 'row',
        backgroundColor: '#030413',
        marginTop: 15,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: '#791AF6',
        borderRadius: 7
    },
    Sectionheader: {
        flexDirection: 'row',
        backgroundColor: '#030413',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#791AF6',
        borderRadius: 7
    },
    section: {
        flex: 1,
        paddingHorizontal: 16,
        marginVertical: 5,
        backgroundColor: '#030413',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    sectionTitle: {
        paddingTop: 20,
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Poppins_700Bold',
    },
    sectionScroll: {
        paddingBottom: 20,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.4,
        backgroundColor: 'black',
        width: '100%'
    }
})

export default ProfileScreen;