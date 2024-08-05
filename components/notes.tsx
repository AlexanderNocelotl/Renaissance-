import { StyleSheet, Text, View, TextStyle } from 'react-native'
import React from 'react'
import { StyleProps } from 'react-native-reanimated'

type NoteProp = {
    noteLetter: string,
}

const notes = (props: NoteProp) => {
  return (
    <View style={styles.notes}>
      <Text style={styles.letter}>{props.noteLetter}</Text>
    </View>
  )
}

export default notes

const styles = StyleSheet.create({
    notes:{
        backgroundColor:'#FDFD96',
        height:80,
        width:80,
        borderRadius:4,
        marginTop:8,
        marginLeft:16,
        marginRight:19,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        transform:  [{ rotate: "270deg" }],
        fontSize:48,
    }
})