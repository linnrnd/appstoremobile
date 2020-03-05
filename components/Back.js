import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
export default class Back extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => this.props.navigation.navigate(this.props.routeName)}
      >
        <Image
          source={require("../assets/icons/backarrow.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  backBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  img: {
    width: 40,
    height: 40
  }
});
