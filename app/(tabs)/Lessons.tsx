import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.block2}> 
         <View style={styles.block1}><Text> <Image source={require('../../assets/images/Nnote.png')} style={styles.nnote} /> </Text>
         <Text > </Text>
         </View>
        <Text style={styles.text}>Blofdck 1</Text>
      </View> 
      <View style={styles.block}>
        <Text style={styles.text}>Block 2</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.text}>Block 3</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.text}>Block 4</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);
};




const styles = StyleSheet.create({
  block2: {
backgroundColor: 'gray',
width: '90%',
    height: 150,
  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 10,

  },
  nnote:{
width: 100,
height: 100,
  },
  block1:{
backgroundColor: 'white',
height: 100,
justifyContent: 'center',
width: 200,
  textAlign: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position:'absolute',
    

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  block: {
    width: '90%',
    height: 150,
    backgroundColor: 'rgb(255, 0, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
