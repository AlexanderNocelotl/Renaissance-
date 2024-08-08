import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import {router} from "expo-router";

const comments = [
  {
    user: "@Kavin_KEton",
    text: "This Sounds Great!!",
    avatar: require('../assets/images/Kalvin.jpg'),
  },
  {
    user: "@Pa_pi",
    text: "AGREED!!!",
    avatar: require('../assets/images/Donovan.jpg'),
  },
  {
    user: "@MEL0",
    text: "AGREED!!!",
    avatar: require('../assets/images/Melo.jpg'),
  },
  {
    user: "@TATUN",
    text: "This is really good for only 3 months.",
    avatar: require('../assets/images/TayTay.jpg'),
  },
  {
    user: "@Eger",
    text: "You're doing amazing!",
    avatar: require('../assets/images/Eger.jpg'),
  },
];

const Comments = () => {
  const navigation = useNavigation(); 

  const [songImage, setSongImage] = useState(require('../assets/images/HardAlbum.png'));
  const waveformImage = require('../assets/images/sound-wave.png');

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <TouchableOpacity onPress={() => router.navigate('./(tabs)/Homepage')}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
        <View style={styles.songDetailsContainer}>
          <View style={styles.textc}>
            <Text style={styles.songTitle}>Song Title: Untitled</Text>
            <Text style={styles.songInfo}>Creator: Miguel</Text>
            <Text style={styles.songInfo}>Duration: 1:58</Text>
          </View>
          <Image source={songImage} style={styles.songImage} />
        </View>
        <View style={styles.waveformContainer}>
          <Image source={waveformImage} style={styles.waveform} />
        </View>
        <View style={styles.interactionContainer}>
          <View style={styles.iconContainer}>
            <Text>👍</Text>
            <Text>1.5k</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>👎</Text>
            <Text>12</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>🏅</Text>
            <Text>8</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>🔗</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.commentButton}>
          <Text style={styles.commentButtonText}>Add comment</Text>
        </TouchableOpacity>
        <Text style={styles.commentsTitle}>Comments (5)</Text>
        <View style={styles.commentsContainer}>
          <View style={styles.commentContainer}>
            <Image source={comments[0].avatar} style={styles.avatar} />
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentUser}>{comments[0].user}</Text>
              <Text style={styles.commentText}>{comments[0].text}</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.replyButton}>+ Reply</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.threadContainer}>
            {comments.slice(1, 3).map((comment, index) => (
              <View key={index} style={styles.commentContainer}>
                <Image source={comment.avatar} style={styles.avatar} />
                <View style={styles.commentTextContainer}>
                  <Text style={styles.commentUser}>{comment.user}</Text>
                  <Text style={styles.commentText}>{comment.text}</Text>
                </View>
              </View>
            ))}
          </View>
          {comments.slice(3).map((comment, index) => (
            <View key={index} style={styles.commentContainer}>
              <Image source={comment.avatar} style={styles.avatar} />
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentUser}>{comment.user}</Text>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.replyButton}>+ Reply</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#ECE7DE',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: 500,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  songDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  textc: {
    flex: 1,
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  songInfo: {
    color: '#fff',
  },
  songImage: {
    width: 169,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
  },

  waveformContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  waveform: {
    width: '90%',
    height: 50,
    resizeMode: 'contain',
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  commentButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  commentButtonText: {
    fontWeight: 'bold',
  },
  commentsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  commentsContainer: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  threadContainer: {
    marginLeft: 20,
    borderLeftWidth: 2,
    borderLeftColor: '#777',
    paddingLeft: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentTextContainer: {
    flex: 1,
  },
  commentUser: {
    fontWeight: 'bold',
    color: '#fff',
  },
  commentText: {
    color: '#fff',
  },
  replyButton: {
    color: '#fff',
  },
  water:{
    
  }
});

export default Comments;
