import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Ionicons style={styles.options} name="options" size={35} color="black" />
        </View>
        <Text style={styles.welcome}>Weclome Back Jeffrey!</Text>
        <Image
        source={require("../../assets/images/chefprofile.png")}
         style={styles.profile}
         />
         
      </View>
      <View style={styles.containerDots}>
        <View style={styles.dot}></View>
        <View style={styles.dot1}></View>
        <View style={styles.dot1}></View>
        <View style={styles.dot1}></View>
      </View>
      <View>
        <Text style={styles.trending}>Trending</Text>
      </View>
      <TouchableOpacity onPress={() => router.navigate("/comments")}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/CovArt1.png")}
            style={styles.musicImg}
          />

          <View style={styles.textcard}>
            <Text style={styles.textSongTitle}> Song Title: SUNDOWN</Text>
            <Text style={styles.textCreator}>Creator: Helene Paquet</Text>
            <Text style={styles.textDatePosted}>Date Posted 08/4/24</Text>

            <Image
              source={require("../../assets/images/playandwaves.png")}
              style={styles.soundWave}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/comments")}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/CovArt2.png")}
            style={styles.musicImg}
          />

          <View style={styles.textcard}>
            <Text style={styles.textSongTitle}> Song Title: Sphere</Text>
            <Text style={styles.textCreator}>Creator: Jongho Baek </Text>
            <Text style={styles.textDatePosted}>Date Posted 08/5/24</Text>

            <Image
              source={require("../../assets/images/playandwaves.png")}
              style={styles.soundWave}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/comments")}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/CovArt3.png")}
            style={styles.musicImg}
          />

          <View style={styles.textcard}>
            <Text style={styles.textSongTitle}> Song Title: Hustle</Text>
            <Text style={styles.textCreator}>Creator: Goyathlay Radja </Text>
            <Text style={styles.textDatePosted}>Date Posted 08/4/24</Text>

            <Image
              source={require("../../assets/images/playandwaves.png")}
              style={styles.soundWave}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate("/comments")}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/CovArt4.png")}
            style={styles.musicImg}
          />

          <View style={styles.textcard}>
            <Text style={styles.textSongTitle}> Song Title: Spaceman</Text>
            <Text style={styles.textCreator}>Creator: LeTuan James </Text>
            <Text style={styles.textDatePosted}>Date Posted 08/30/24</Text>

            <Image
              source={require("../../assets/images/playandwaves.png")}
              style={styles.soundWave}
            />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE7DE",
  },
  topContainer: {
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  options:{
    marginTop:4,
  },
  profile: {
    backgroundColor: "blue",
    width: 42,
    height: 42,
    borderRadius: 30,
  },
  welcome: {
    marginTop:8,
    fontSize: 22,
    fontFamily: `Kameron`,
  },
  containerDots: {
    marginTop: 17.5,
    flexDirection: "row",
  },
  dot: {
    backgroundColor: "#34383C",
    height: 24,
    width: 24,
    borderRadius: 15,
    marginLeft:113.5,
  },
  dot1: {
    backgroundColor: "#ECE7DE",
    height: 24,
    width: 24,
    borderRadius: 15,
    borderWidth:3,
    borderColor:'#9C9C9C',
    marginLeft:36,
  },
  trending:{
    textAlign: "center",
    fontSize: 32,
    marginBottom: 12,
    marginTop: 24,
  },
  card: {
    alignSelf: "center",
    flexDirection: "row",
    width: 382,
    height: 158,
    backgroundColor: "#34383C",
    borderRadius: 16,
    marginBottom:20,
  },
  musicImg: {
    height: 126,
    width: 126,
    marginTop: 13,
    marginLeft: 16,
    marginBottom: 13,
    borderRadius: 12.6,
    borderWidth: 2.5,
    borderColor: "white",
  },
  play: {
    marginLeft: 22,
  },
  soundWave: {
    marginTop: 24,
  },
  textcard: {
    flexDirection: "column",
    color: "white",
    marginTop: 16,
    marginLeft: 24,
  },
  textSongTitle: {
    color: "white",
    fontSize: 15,
  },
  textCreator: {
    fontSize: 12,
    color: "white",
  },
  textDatePosted: {
    fontSize: 11,
    color: "white",
  },
});
