import {  StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [color ,setColor] = useState('#000000')

  const generateColor = () => {
    let hexRange = '0123456789ABCDEF'
    let colorHex = '#'
    for(let i = 0 ; i < 6 ; i++){
      colorHex += hexRange[Math.floor(Math.random() * 16)]
    }
    setColor(colorHex)
  }
  return (
    <>
    <StatusBar backgroundColor={color}/>
    <View style = { [styles.container,{backgroundColor:color}]}>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>generateColor()}>
        <Text style={styles.buttonTxt}>Generate Color</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:'black',
    height:50,
    borderRadius:25
  },
  buttonTxt:{
    padding:15,
    fontSize:15,
    color:'white'
  }
})
