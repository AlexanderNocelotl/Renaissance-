import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, } from 'react-native';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Welcome Back, noob </Text>
    </View>
    <ScrollView>
      {['Miguel', 'Miguel', 'Miguel'].map((user, index) => (
        <View key={index} style={styles.songContainer}>
          <Text style={styles.songTitle}>Song Title PlaceHolder</Text>
          <Text style={styles.userText}>User: {user}</Text>
          <Text style={styles.postedText}>Posted: Now</Text>
          <View style={styles.buttonContainer}>
            <Button title="Play" onPress={() => {}} />
            <Button title="Sheet Music" onPress={() => {}} />
          </View>
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
header: {
  backgroundColor: '#ccc',
  padding: 20,
  alignItems: 'center',
},
welcomeText: {
  fontSize: 20,
  fontWeight: 'bold',
},
songContainer: {
  backgroundColor: '#eee',
  padding: 20,
  marginVertical: 10,
  marginHorizontal: 20,
  borderRadius: 10,
},
songTitle: {
  fontSize: 18,
  fontWeight: 'bold',
},
userText: {
  fontSize: 14,
  color: '#666',
},
postedText: {
  fontSize: 14,
  color: '#666',
  marginBottom: 10,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
});


