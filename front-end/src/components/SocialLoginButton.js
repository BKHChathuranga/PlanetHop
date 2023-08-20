import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SocialLoginButton = ({name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name={name} size={24} color="#791AF6" style={{alignSelf: 'center'}}/> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        minHeight: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#791AF6',
        justifyContent: 'center',
        marginHorizontal: 5
    }
})

export default SocialLoginButton;