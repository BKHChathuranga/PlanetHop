import React from 'react'

const HeaderTab = () => {
    return (
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
    )
}

const styles = StyleSheet.create({
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
    }
})

export default HeaderTab