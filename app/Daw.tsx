import React from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import Notes from "@/components/notes";
import Ionicons from '@expo/vector-icons/Ionicons';

const Daw = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBorder}>
        <Foundation style={styles.home} name="home" size={40} color="white" />
        <Image source={require("../assets/images/lines.png")} style={styles.lines}/>
        <Ionicons style={styles.pause} name="pause-circle" size={50} color="white"  />
      </View>
      <View style={styles.borderline}>
        <View style={styles.noteblock}>

        </View>
         <View></View>
      </View>
      <View style={styles.borderline}></View>

      <View style={styles.bottomBorder}>
        <View style={styles.instrument}></View>
        <View style={styles.octave}></View>
        <View style={styles.notes}>
            <Notes noteLetter="E"></Notes>
            <Notes noteLetter="D"></Notes>
            <Notes noteLetter="C"></Notes>
            <Notes noteLetter="B"></Notes>
            <Notes noteLetter="A"></Notes>
        </View>
      </View>
    </View>
  );
};

export default Daw;

const styles = StyleSheet.create({
  home: {
    transform: [{ rotate: "270deg" }],
    marginTop: 50,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBorder: {
    height: 942,
    width: 64,
    backgroundColor: "#35393E",
    alignItems: "center",
  },
  bottomBorder: {
    backgroundColor: "#35393E",
    height: 950,
    width: 115,
  },
  instrument: {
    marginLeft: 20,
    marginTop: 50,
    height: 150,
    width: 80,
    backgroundColor: "#ECE7DE",
    borderRadius: 15,
  },
  octave: {
    marginTop: 24,
    marginLeft:20,
    backgroundColor: "#ECE7DE",
    height: 196,
    width: 80,
    borderRadius:15,

  },
  notes:{
    marginTop:33,
  },
  lines:{
    marginTop: 360,
    transform: [{ rotate: "270deg" }],
  },
  pause:{
    transform: [{ rotate: "270deg" }],
    marginTop:360,
  },
  borderline:{
    backgroundColor: 'white',
    height:931,
    width:3,
  },
  noteblock:{
    backgroundColor:"#FDFD96",
    height:330,
    width:45,
    marginTop:400,
    marginLeft:20,
    borderRadius: 4,
  },
});
