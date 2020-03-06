import React from "react";
import { StyleSheet, Text } from "react-native";

export default class Title extends React.Component {
  render() {
    return <Text style={styles.container}>{this.props.title}</Text>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    color:"white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    
  }
});
