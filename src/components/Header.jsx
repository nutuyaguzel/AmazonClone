import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
    return (
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
                colors={["#88dae0", "#98e1d6", "#9ee4d4"]}

            >
                <View
                    style={styles.inputBox}
                >
                    <Ionicons name="search" size={24} color="black" />


                </View>
            </LinearGradient>



        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {},
    inputBox: {}
})