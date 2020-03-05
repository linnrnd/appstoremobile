import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
const { width } = Dimensions.get("window");
export default class Category extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => this.props.navigation.navigate("AppName",{appName:"Game"})}
          >
            <Text style={styles.text}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.cardBtn1}
          onPress={() => this.props.navigation.navigate("AppName",{appName:"Player"})}
          >
            <Text style={styles.text}>Player</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.cardBtn2}
          onPress={() => this.props.navigation.navigate("AppName",{appName:"Education"})}
          >
            <Text style={styles.text}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.cardBtn3}
           onPress={() => this.props.navigation.navigate("AppName",{appName:"Social"})}
           >
            <Text style={styles.text}>Social</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.cardBtn4}
          onPress={() => this.props.navigation.navigate("AppName",{appName:"Camera"})}
          >
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.cardBtn5}
           onPress={() => this.props.navigation.navigate("AppName",{appName:"Channel"})}
           >
            <Text style={styles.text}>Channel</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  btnContainer: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 10
  },
  text:{
     color: "white", 
     fontSize: 15
     },
  cardBtn: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    elevation: 10,
    backgroundColor: "#A600EB",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  },
  cardBtn1: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    elevation: 10,
    backgroundColor: "#FF6D00",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  },
  cardBtn2: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    elevation: 10,
    backgroundColor: "#FF0098",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  },
  cardBtn3: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    elevation: 10,
    backgroundColor: "#00ACFF",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  },
  cardBtn4: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    elevation: 10,
    backgroundColor: "#FF004A",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  },
  cardBtn5: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    elevation: 10,
    backgroundColor: "#FFA100",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  }
});
