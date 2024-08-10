import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView } from "react-native-drax";

// THE BLUEPRINT
type NoteProp = {
  noteLetter: string;
};

// PURPOSE: Showing on screen
const Notes: React.FC<NoteProp> = (props: NoteProp) => {
  // State to track the positions of all notes
  const [notes, setNotes] = useState([
    { x: 0, y: 0, letter: props.noteLetter, dragged: false },
  ]);
  // State to track the index of the currently dragged note
  const [draggedNoteIndex, setDraggedNoteIndex] = useState<number | null>(null);

  // Function to handle drag end and update position
  const handleDragEnd = (event: any, index: number) => {
    const { dragAbsolutePosition } = event;
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        x: dragAbsolutePosition.x - 5,
        y: dragAbsolutePosition.y,
        letter: props.noteLetter,
        dragged: true,
      },
    ]);
    setDraggedNoteIndex(null); // Reset dragged note index
    console.log("drag end", dragAbsolutePosition);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <DraxProvider>
        <View>
          {notes.map((note, index) => (
            <DraxView
              key={index}
              style={[
                styles.notes,
                { left: note.x, top: note.y },
                note.dragged && styles.draggedNote,
              ]}
              onDragStart={() => setDraggedNoteIndex(index)}
              onDragEnd={(event) => handleDragEnd(event, index)}
              payload="world"
            >
              <TouchableOpacity
                onPress={() => console.log("clicked")}
                style={styles.touchable}
              >
                <Text style={styles.letter}>{note.letter}</Text>
              </TouchableOpacity>
            </DraxView>
          ))}
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
};

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
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 25,
  },
  //   notes: {
  //     backgroundColor: "#FDFD96",
  //     height: 80,
  //     width: 80,
  //     borderRadius: 4,
  //     marginTop: 8,
  //     marginLeft: 16,
  //     marginRight: 19,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  notes: {
    backgroundColor: "#FDFD96",
    height: 80,
    width: 80,
    borderRadius: 4,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 19,
    position: "absolute",
  },
  draggedNote: {
    backgroundColor: "#FFD700", // Change color when dragged
  },
  clickedNotes: {
    backgroundColor: "#FDFD96",
    height: 330,
    width: 45,
    borderRadius: 4,
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    transform: [{ rotate: "270deg" }],
    fontSize: 48,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
