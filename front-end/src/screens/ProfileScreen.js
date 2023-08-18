import React, { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import headerImage from '../../assets/profileHeader.png';
import { useState } from 'react';
import BookingCard from '../components/bookingCard';

const ProfileScreen = () => {
    const mainHeader = [
        {
            key: 'pi',
            Header: 'Personal Information'
        },
        {
            key: 'mb',
            Header: 'My Bookings'
        }]

    const bookings = [
        {
            key: 1,
            from: 'Mars',
            to: 'Saturn',
            mode: 'SpaceX 19001',
            date: '10/12/2023',
            time: '18:00',
            status: 'completed'
        },
        {
            key: 2,
            from: 'Earth',
            to: 'Saturn',
            mode: 'SpaceX 19002',
            date: '10/12/2023',
            time: '18:00',
            status: 'Canceled'
        }
    ]
    const [selectedMainHeader, setSelectedMainHeader] = useState('pi');

    return (
        <View style={styles.container}>
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
                        {mainHeader.map(value => (
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
                <View style={[styles.section, {flex: 1, marginVertical: 10}]}>
                    {bookings.map(value => (
                        <BookingCard key={value.key}/>
                    ))}
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
        fontWeight: 'bold',
        color: '#ffffff'
    },
    label: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 5,
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
    selected: {
        backgroundColor: '#791AF6',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 15,
        fontWeight: '500',
        color: '#791AF6',
        alignSelf: 'center'
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
    section: {
        paddingHorizontal: 16,
        marginVertical: 5,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#fff'
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