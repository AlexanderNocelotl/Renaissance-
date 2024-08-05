import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

function comments() {
  return (
    <View style={styles.container}>
      <View style={styles.textc}>
        <Text style={styles.text}>Song Title: Untitled</Text>
        <Text>Creator: Miguel</Text>
        <Text>Duration 1:58</Text>
     </View>
        <Image source={require("../assets/images/Group 121.png")}/>
        <View>
          <Image source={require("../assets/images/Group120.png")}/>
        </View>
        <View>
          <Image source={require("../assets/images/Group121.png")}/>
          <View>
            
          </View>
        </View>
        
    </View>
    
  )
}

export default comments

const styles = StyleSheet.create({
container:{

},
textc:{

},
text:{

},

});