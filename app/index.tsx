import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SurveyPage from '@/app/(auth)/survey'
import Daw from '@/app/Daw'
import Home from './(tabs)/Homepage'
import App from './(tabs)/Lessons'

const index = () => {
  return (
    // <SurveyPage/>
    <App/>
   
    // <View>
    //   <Text>Hello World!</Text>
    // </View>
  )
}

export default index

const styles = StyleSheet.create({})