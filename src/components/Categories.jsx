import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Category } from '../data/Categories'

const Categories = () => {


  return (
  <ScrollView  
showsHorizontalScrollIndicator={false}
  horizontal 
  style={styles.container} >
    {Category.map((item)=>(
        <TouchableOpacity style={styles.category}> 
            <Image  style={styles.imgStyle} source={item.image}/>
            <Text style={styles.title} >{item.title}</Text>

        </TouchableOpacity>
    )) }


  </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        padding:10,


    },
    imgStyle:{
        width:50,
        height:50,

    },
    title:{
        color:"#2c4341"

    },
    category:{
        paddingHorizontal:8,
        alignItems: 'center',

    }

})