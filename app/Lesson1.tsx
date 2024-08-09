import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {router} from "expo-router";

const Lesson1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>How does our Digital Audio Workshop Work?</Text>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
        <Text style={styles.backButton}>{'←'}</Text>
      </TouchableOpacity>

      <View style={styles.contentBox}>
        <Text style={styles.contentText}>
          The Digital Audio Workshop is known as a DAW. A DAW is a music-making process from recording digital audio through creating beats and melodies with virtual instruments all the way to adding effects to make everything sound great and perfecting your final mix of all the tracks. {'\n\n'}
          Digital Audio Workshops vary from brand to brand. Although these are very important tools to many producers out there, it can get a bit confusing when you have so much on your screen. {'\n\n'}
          Our DAW was made to be a much simpler alternative to those DAWs so we can help your creativity flow without so many restrictions.
        </Text>
      </View>

      <View style={styles.buttonGrid}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.gridButton}><Text style={styles.gridButtonText}>A</Text></TouchableOpacity>
          <TouchableOpacity style={styles.gridButton}><Text style={styles.gridButtonText}>B</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.gridButton}><Text style={styles.gridButtonText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.gridButton}><Text style={styles.gridButtonText}>F</Text></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.tryItOutButton} onPress={() => router.navigate('./Daw')}>
      <Text style={styles.tryItOutButtonText}>Try It Out!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0ECE3',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButtonContainer: {
    alignSelf: 'flex-start', 
    marginBottom: 20, 
  },
  backButton: {
    fontSize: 30,
    color: '#000',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  contentBox: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  contentText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  buttonGrid: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  gridButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
  gridButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  tryItOutButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  tryItOutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Lesson1;
