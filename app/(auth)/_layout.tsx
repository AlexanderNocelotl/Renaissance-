import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="survey" options = {{headerShown: false}}/>
        <Stack.Screen name="survey2" options = {{headerShown: false}}/>
    </Stack>


  )
}

export default AuthLayout

const styles = StyleSheet.create({})