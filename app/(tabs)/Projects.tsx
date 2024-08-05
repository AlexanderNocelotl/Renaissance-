import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import {router} from 'expo-router'

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Library</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.waveform}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Song Title: Untitled</Text>
          <Text style={styles.subText}>User: You</Text>
          <Text style={styles.subText}>Created: 07/21/24</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.waveform}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Song Title: Untitled</Text>
          <Text style={styles.subText}>User: You</Text>
          <Text style={styles.subText}>Created: 07/21/24</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.waveform}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Song Title: Untitled</Text>
          <Text style={styles.subText}>User: You</Text>
          <Text style={styles.subText}>Created: 07/21/24</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.createButton} onPress = {() => router.navigate('/Daw')}>
        <Text style={styles.createButtonText}>create new</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE6DF',
    paddingTop: 90,
    paddingRight:10,
    paddingLeft:10,
  },
  header: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  waveform: {
    height: 30,
    backgroundColor: '#000000',
    marginBottom: 10,
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    color: '#000000',
    fontSize: 14,
  },
  createButton: {
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
