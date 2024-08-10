import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {router} from "expo-router";


const App = () => {
    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Lessons"
                    style={styles.searchInput}
                />
            </View>

            {/* Circles */}
            <View style={styles.circleContainer}>
                <View style={styles.blackCircle} />
                <View style={styles.grayCircle} />
            </View>

            {/* "Important To Do" Section */}
            <Text style={styles.headerText}>IMPORTANT TO DO</Text>

            {/* Lessons List */}
            <View style={styles.lessonContainer}>
                <LessonCard
                    title="How Does Our Digital Audio Workshop Work?"
                    difficulty="Starter"
                    time="10 minutes"
                />
                <LessonCard
                    title="D-Minor Chord"
                    difficulty="Beginner"
                    time="30 minutes"
                />
                <LessonCard
                    title="Basic Chords on Piano"
                    difficulty="Beginner"
                    time="40 minutes"
                />
                <LessonCard
                    title="Basic Chords on Piano"
                    difficulty="Beginner"
                    time="40 minutes"
                />
            </View>
        </View>
    );
};

const LessonCard = ({ title, difficulty, time }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Image source={require('../../assets/images/logoicon.png')} style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.lessonTitle}>{title}</Text>
                <Text style={styles.lessonDetails}>Difficulty: {difficulty}</Text>
                <Text style={styles.lessonDetails}>Time to completion: {time}</Text>
                <TouchableOpacity style={styles.learnButton} onPress={() => router.navigate('../Lesson1')}>
                    <Text style={styles.learnButtonText}>Learn Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
    },
    searchContainer: {
        marginTop: 60,
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 40,
        paddingLeft: 40,  // adjust padding for the search icon
        borderColor: '#000',
        borderWidth: 1,
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    blackCircle: {
        height: 40,
        width: 40,
        backgroundColor: '#000',
        borderRadius: 20,
        marginHorizontal: 10,
    },
    grayCircle: {
        height: 40,
        width: 40,
        backgroundColor: '#C0C0C0',
        borderRadius: 20,
        marginHorizontal: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    lessonContainer: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#35393E',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    iconContainer: {
        marginRight: 20,
    },
    icon: {
        height: 50,
        width: 50,
    },
    textContainer: {
        flex: 1,
    },
    lessonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    lessonDetails: {
        color: 'white',
        marginBottom: 5,
    },
    learnButton: {
        marginTop: 10,
        backgroundColor: '#B95858',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    learnButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default App;
