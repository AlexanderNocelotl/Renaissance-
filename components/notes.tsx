import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView } from 'react-native-drax';

// THE BLUEPRINT
type NoteProp = {
    noteLetter: string,
}

// PURPOSE: Showing on screen
const Notes: React.FC<NoteProp> = (props: NoteProp) => {
    // State to track if the note is clicked
    const [isClicked, setIsClicked] = useState(false);

    // Function to toggle the clicked state
    const toggleClicked = () => {
        setIsClicked(!isClicked);
    };

    return (
        <DraxView
            style={[styles.notes, isClicked ? styles.clickedNotes : null]}
            onDragStart={() => console.log(`start drag: ${props.noteLetter}`)}
            payload={props.noteLetter}
        >
            <TouchableOpacity onPress={toggleClicked} style={styles.touchable}>
                <Text style={styles.letter}>{props.noteLetter}</Text>
            </TouchableOpacity>
        </DraxView>
    )
}

// Main Component including GestureHandlerRootView and DraxProvider
const App: React.FC = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <DraxProvider>
                <View style={styles.container}>
            
                    <Notes noteLetter="E" />
                    <Notes noteLetter="D" />
                    <Notes noteLetter="C" />
                    <Notes noteLetter="B" />
                    <Notes noteLetter="A" />
                </View>
            </DraxProvider>
        </GestureHandlerRootView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notes: {
        backgroundColor: '#FDFD96',
        height: 80,
        width: 80,
        borderRadius: 4,
        marginTop: 8,
        marginLeft: 16,
        marginRight: 19,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clickedNotes: {
     backgroundColor: "#FDFD96",
    height: 330,
    width: 45,
    borderRadius: 4,
    },
    touchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        transform: [{ rotate: "270deg" }],
        fontSize: 48,
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
