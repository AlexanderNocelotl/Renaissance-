import React from "react";
import {View,Text,Image,StyleSheet,Animated,TouchableOpacity,} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import Notes from "@/components/notes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DraxProvider, DraxView } from "react-native-drax";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";

const Daw = () => {
  return (
    //This code is for home icon and the ruler and pause icon as well as container for all and top black border
    <View style={styles.container}>
      <View style={styles.topBorder}>
        <TouchableOpacity onPress={() => router.navigate("/Homepage")}>
          <Foundation style={styles.home} name="home" size={40} color="white" />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/lines.png")}
          style={styles.lines}
        />
        <Ionicons
          style={styles.pause}
          name="pause-circle"
          size={50}
          color="white"
        />
      </View>
      <DraxView>
        
      </DraxView>
      <View style={styles.bottomBorder}>
        <View style={styles.instrument}></View>
        <View style={styles.octave}></View>
        <Notes/>
      </View>
    </View>
  );
};

export default Daw;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  home: {
    transform: [{ rotate: "270deg" }],
    marginTop: 50,
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
    marginLeft: 20,
    backgroundColor: "#ECE7DE",
    height: 196,
    width: 80,
    borderRadius: 15,
  },
  notes: {
    marginTop: 33,
  },
  lines: {
    marginTop: 360,
    transform: [{ rotate: "270deg" }],
  },
  pause: {
    transform: [{ rotate: "270deg" }],
    marginTop: 360,
  },
  noteblock1: {
    backgroundColor: "#FDFD96",
    height: 330,
    width: 45,
    borderRadius: 4,
  },
  borderline1: {
    marginLeft: 80,
    backgroundColor: "black",
    height: 932,
    width: 3,
  },
  borderline2:{
    marginLeft: 70,
    backgroundColor: "black",
    height: 932,
    width: 3,
  },
});
