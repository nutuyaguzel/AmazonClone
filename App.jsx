import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'
import { Header } from 'react-native/Libraries/NewAppScreen'


const App = () => {
  return (
  
   <SafeAreaView style={{flex:1 , backgroundColor:"#9ee4d4"}}>
    <StatusBar backgroundColor={"#9ee4d4"} barStyle={"dark-content"} />
     <Router />
     
   </SafeAreaView>

  )
}

export default App