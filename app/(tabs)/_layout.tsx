import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      // initialRouteName="Homepage"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Homepage"

        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ), 
          tabBarLabel: "Home"
        }}
      />
       {/* boo */}
      <Tabs.Screen
        name="Lessons"
        options={{
          title: 'Lessons',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'book-music' : 'book-music-outline'} size={28} color={color} />
          ),
        }}
     />
    </Tabs>
  );
}
