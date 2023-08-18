import React, { Text, View, StyleSheet } from 'react-native'

const BookingCard = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.descCard}>
                <View style={{ flexDirection: 'row', paddingBottom: 18 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.titleText}>From</Text>
                        <Text style={[{paddingTop: 3}, styles.descText]}>Earth</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.titleText}>to</Text>
                        <Text style={[{paddingTop: 3}, styles.descText]}>Saturn</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.titleText, {flex: 1, alignSelf: 'center'}]}>mode</Text>
                    <Text style={[styles.descText, {flex: 2, alignSelf: 'center'}]}>SpaceX 19001</Text>
                </View>
            </View>
            <View style={styles.dateCard}>
                <Text style={styles.generalText}>Aug <Text style={styles.highlightText}>22</Text>, 2165</Text>
                <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, width: '100%', marginVertical: 10 }} />
                <Text style={styles.timeZoneText}>Departure time</Text>
                <Text style={styles.generalText}>18 : 30 Hrs <Text style={styles.timeZoneText}>(GMT+5.30)</Text></Text>
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
        backgroundColor: '#6EFA74',
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
        fontSize: 15
    },
    highlightText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800'
    },
    timeZoneText: {
        color: '#fff',
        fontSize: 10
    },
    titleText: {
        textTransform: 'uppercase',
        color: '#5C469C',
        fontSize: 12
    },
    descText: {
        color: '#0C134F',
        fontSize: 22,
        fontWeight: '600'
    }
})

export default BookingCard