import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Note from "./note";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: "",
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>To Do List - Yokesh</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Type here to create an item"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.addTask.bind(this)}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{
              uri: "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png",
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
  addTask() {
    if (this.state.noteText) {
      var date = new Date();
      this.state.noteArray.push({
        date:
          date.getFullYear() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getDate(),
        note: this.state.noteText,
      });

      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: this.state.noteText });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#6200EE",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 25,
    bottom: 75,
  },
  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 63,
    height: 63,
  },
});
