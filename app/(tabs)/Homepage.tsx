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

const Home = () => {
  const data = [
    {
      image: require("../../assets/images/image 2.png"),
      title: "Song Title: Place Holder",
      creator: "Miguel",
      datePosted: "Date Posted",
      onPressPage: "comments",
    },
    {
      image: require("../../assets/images/image 3.png"),
      title: "Song Title: Place Holder",
      creator: "Miguel",
      datePosted: "Date Posted",
      onPressPage: "comments",
    },
    {
      image: require("../../assets/images/image 4.png"),
      title: "Song Title: Place Holder",
      creator: "Miguel",
      datePosted: "Date Posted",
      onPressPage: "comments",
    },
  ];

  return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileCircle} />
          <Text style={styles.welcomeText}>Welcome Back, Alexander</Text>
          <TouchableOpacity style={styles.settingsIconContainer}>
            <View style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        {data.map((item, index) => (
          <Pressable
            onPress={() => {
              router.push(item.onPressPage);
            }}
          >
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardCreator}>Creator: {item.creator}</Text>
                <Text style={styles.cardDate}>{item.datePosted}</Text>
                <View style={styles.audioControl}>
                  <View style={styles.playButton}>
                    <Text style={styles.playButtonText}>▶</Text>
                  </View>
                  <Image
                    source={require("../../assets/images/sound-wave.png")}
                    style={styles.audioWaveform}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE7DE",
    paddingTop: 90,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#C4C4C4",
    marginRight: 10,
  },
  welcomeText: {
    color: "black",
    fontSize: 18,
    flex: 1,
  },
  settingsIconContainer: {
    padding: 10,
  },
  settingsIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#C4C4C4",
    borderRadius: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#2E2E2E",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 40,
    overflow: "hidden",
  },
  cardImage: {
    width: 100,
    height: 120,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardCreator: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  cardDate: {
    color: "white",
    fontSize: 12,
    marginBottom: 10,
  },
  audioControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  playButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#B95858",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  playButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  audioWaveform: {
    flex: 1,
    height: "50%",
    borderRadius: 5,

    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    width: "50%",
    // padding:10,
  },
  content: {
    flex: 1,
    backgroundColor: "#ECE7DE",
  },
});
