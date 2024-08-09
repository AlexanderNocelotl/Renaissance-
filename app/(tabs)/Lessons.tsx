import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {router} from "expo-router";


const Lesson = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>IMPORTANT TO DO</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Learn Our Music Creator</Text>
          <Text style={styles.subText}>Difficulty: Starter</Text>
          <Text style={styles.subText}>Time to completion: 10 minutes</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.searchIcon} />
        <Text style={styles.searchText}>Explore Concepts</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Learn Our Music Creator</Text>
          <Text style={styles.subText}>Difficulty: Starter</Text>
          <Text style={styles.subText}>Time to completion: 10 minutes</Text>
        </View>
      <TouchableOpacity onPress={() => router.navigate('../Lesson1')}>
          <Text style={styles.buttonText}>Learn Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Learn Our Music Creator</Text>
          <Text style={styles.subText}>Difficulty: Starter</Text>
          <Text style={styles.subText}>Time to completion: 10 minutes</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE6DF',
    paddingTop:90,
    paddingRight: 10,
    paddingLeft: 10,
  },
  header: {
    backgroundColor: '#3D3D3D',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3D3D3D',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#C36F63',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
  },
});

export default Lesson;
