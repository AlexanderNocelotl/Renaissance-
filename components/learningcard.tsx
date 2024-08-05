import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const Lcard = () => {
  return (
    <View style={styles.block1}>
      <Image source={require("../assets/images/Nnote.png")}style={styles.nnote}/>
      <View>
        <Text style={styles.block1textbig}>Learn Our Music Creator</Text>
        <Text style={styles.block1text}>Difficulty: Starter</Text>

        <View style={styles.button}>
          <Text style={{textAlign: "center"}}> START NOW</Text>
        </View>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  block1: {
    backgroundColor: "white",
    height: 90,
    width: 380,
    marginTop:20,
    marginBottom:20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: '',
    
  },
  nnote: {
    marginRight: 10,
    marginLeft: 2,
  },
  block1text: {
    textAlign: "left",
  },
  button: {
    width: 200,
    height: 18,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  block1textbig: {
    fontSize: 20,
    marginBottom:5,
  },
});
  
export default Lcard;