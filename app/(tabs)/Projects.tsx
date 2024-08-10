import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from "expo-router";
const App = () => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.headerText}>Drafts</Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Name..."
                    style={styles.searchInput}
                />
            </View>

             
             <TouchableOpacity style={styles.createButton} onPress={() => router.navigate("/Daw")}>
                <Text style={styles.createButtonText}>Create New</Text> 
                
            </TouchableOpacity>

            {/* Draft List */}
            <View style={styles.draftContainer}>
                <DraftCard
                    title="Song Title: Summer Rise"
                    lastEdited="07/21/24"
                />
                <DraftCard
                    title="Song Title: Man In Snow"
                    lastEdited="06/21/24"
                />
                <DraftCard
                    title="Song Title: Moonshine"
                    lastEdited="06/03/24"
                />
            </View>

           
        </View>
    );
};

const DraftCard = ({ title, lastEdited }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.leftSection}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>Last Edited: {lastEdited}</Text>
                    {/* Replace with your waveform image */}
                    <Image source={require('../../assets/images/waveplusplay.png')} style={styles.waveform} />
                </View>
                <View style={styles.rightSection}>
                    {/* Replace with your star icon */}
                    <Image source={require('../../assets/images/star1.png')} style={styles.starIcon} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.publishButton}>
                    <Text style={styles.buttonText}>Publish</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Edit</Text>
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
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        marginTop:60,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 40,
        paddingLeft: 40, // adjust padding for the search icon
        borderColor: '#000',
        borderWidth: 1,
    },
    draftContainer: {
        flex: 1,
        
    },
    card: {
        backgroundColor: '#34383C',
        borderRadius: 25,
       width:360,
       height:158,
       paddingTop:20,
       paddingBottom:20,
        marginBottom: 20,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftSection: {
        flex: 1,
    },
    rightSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    subtitle: {
        color: 'white',
        marginBottom: 15,
    },
    waveform: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    starIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    publishButton: {
        backgroundColor: '#B95858',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    editButton: {
        backgroundColor: '#B95858',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    createButton: {
        backgroundColor: '#B95858',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    createButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;
