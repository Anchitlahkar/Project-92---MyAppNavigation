import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import MyHeader from "../components/Header";
import db from "../config";
import firebase from "firebase";
import { Input } from "react-native-elements";
import {RFValue} from "react-native-responsive-fontsize"


export default class SettingScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Settings" navigation={this.props.navigation}/>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 4.5,
    marginTop: RFValue(20),
    padding: RFValue(10),
  },
  button: {
    width: "50%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ff5722",
    marginTop: RFValue(20),
    marginLeft: "25%",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
});
