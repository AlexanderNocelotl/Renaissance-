import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React, { useState } from "react";
import { router } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import ProgressBar from "react-native-progress";
import * as Progress from 'react-native-progress';





const SurveyPage = () => {
  // Storing if selected, default is false
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(false);
  const [selection3, setSelection3] = useState(false);

  return (
    <View style={styles.bcontainer}>
      <View>
         <View style={styles.bar}>
            <View style={styles.ybar }/>
         </View> 
       
        <Text style={styles.rena}>Renaissance</Text>
        <Text style={styles.question}> Whats Your goal?</Text>
        <Text style={styles.quest}>check multiple if needed</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelection1(!selection1);
          }}
          style={styles.radioButtons}
        >
          <Text style={{ fontSize: 22 }}>Become a Music Producer</Text>
          <TabBarIcon
            name={
              !selection1
                ? "radio-button-off-outline"
                : "radio-button-on-outline"
            }
            style={{ fontSize: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelection2(!selection2);
          }}
          style={styles.radioButtons}
        >
          <Text style={{ fontSize: 22 }}>Build a Community</Text>
          <TabBarIcon
            name={
              !selection2
                ? "radio-button-off-outline"
                : "radio-button-on-outline"
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelection3(!selection3);
          }}
          style={styles.radioButtons}
        >
          <Text style={{ fontSize: 22 }}>Help Music Producers</Text>
          <TabBarIcon
            name={
              !selection3
                ? "radio-button-off-outline"
                : "radio-button-on-outline"
            }
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.navigate("/(tabs)/Homepage")}
        >
          <Text style={{ fontSize: 30 }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SurveyPage;
const styles = StyleSheet.create({
  bcontainer: {
    flex: 1,
    display: "flex",
    paddingTop: 80,
    backgroundColor: "#ECE7DE",
  },
  bar: {
    width: 315,
    height: 19,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    alignSelf: "center",
    // marginBottom: 20,
  },
  ybar: {
    backgroundColor: "#DAD43F",
    width: 157,
    height: 19,
    borderRadius: 15,
  },
  rena: {
    alignSelf: "center",
    fontSize: 42,
  },
  question: {
    alignSelf: "center",
    fontSize: 20,
  },
  quest: {
    alignSelf: "center",
  },
  radioButtons: {
    marginVertical: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "black",
    width: "50%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginRight: 10,
    borderRadius: 15,
  },
  nextButton: {
    backgroundColor: "#FFBE40",
    borderColor: "#E49A0A",
    borderWidth: 2,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 15,
  },
});
