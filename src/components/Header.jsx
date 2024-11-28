import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'

const Header = () => {
    return (
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
                colors={["#88dae0", "#98e1d6", "#9ee4d4"]}

            >
                <View style={styles.inputBox}>
                   <View style={styles.row} >
                    <Ionicons name="search" size={24} color="black" />
                    <TextInput placeholder='Search Amazon'
                    placeholderTextColor={'#848484'}
                    style={styles.textInput}
                     />
                   </View>
                   <AntDesign name="scan1" size={24} color="grey" />
               </View>
               <Feather name="mic" size={24} color="black" />
            </LinearGradient>



        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
       padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
      
        

    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#a1bcc0',
        borderWidth:1,
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        height: 40,
        width: '90%',
       
},
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        

    },
    textInput:{
        padding:8,
    },
})