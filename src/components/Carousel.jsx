import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { CarouselData } from '../data/CarouselData'
Image
const Carousel = () => {
  return (
  <View style={styles.corouselContainer}>
     <Swiper 
     showsPagination={false}
     showsButtons={false}
     autoplay={true}
     
     style={styles.wrapper}>
        {CarouselData.map((item)=>(
            <View>
                <Image  style={styles.imgStyle} source={item.image}  />
            </View>

        ))}
        

        </Swiper>
  </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    corouselContainer:{
        position:'relative'
        

    },
    wrapper: {
        height:250,
       },
    imgStyle:{
        width:'100%',
        height:250,
        resizeMode:'cover'

    }
})