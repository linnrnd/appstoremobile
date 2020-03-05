import React from "react";
import {
  View,
  Text,
  BackHandler,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
export default class AppName extends React.Component {
  constructor(props) {
    super(props);
    this.BackHandler = null;
  }
  async componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }
  handleBackPress = () => {
    this.props.navigation.navigate("Category");
    return true;
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.secondContainer}>
          <Image
            source={require("../assets/icons/search.jpg")}
            style={styles.firstimg}
          />
          <TextInput
            placeholder="Search. . ."
            style={styles.textInput}
            placeholderTextColor="#707070"
          />
        </View>

        {/* <View style={styles.firstContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppNameDetail")}
          >
            <Image source={require("../assets/icons/game.jpg")} />
          </TouchableOpacity>
          <Text style={{ marginTop: 10, marginLeft: 5 }}>Worms Zone</Text>
          <View style={{ marginTop: 10, marginLeft: 100 }}>
            <Text>DownLoad</Text>
            <Image
              source={require("../assets/icons/download.png")}
              style={styles.img}
            />
          </View>
        </View> */}

        <View style={styles.firstContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppNameDetail")}
          >
            <Image source={require("../assets/icons/game.jpg")} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 50,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 20 }}>Worms Zone</Text>
            {/* <Text style={{marginTop:5}}>4.2918 for Android</Text> */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                borderWidth: 1,
                padding: 3,
                marginTop: 10,
                borderRadius: 5,
                borderColor: "#00ACFF"
              }}
            >
              <Image
                source={require("../assets/icons/download2.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ marginTop: 5, color: "#00ACFF" }}>DownLoad</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppNameDetail")}
          >
            <Image source={require("../assets/icons/game.jpg")} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 50,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 20 }}>Worms Zone</Text>
            {/* <Text style={{marginTop:5}}>4.2918 for Android</Text> */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                borderWidth: 1,
                padding: 3,
                marginTop: 10,
                borderRadius: 5,
                borderColor: "#00ACFF"
              }}
            >
              <Image
                source={require("../assets/icons/download2.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ marginTop: 5, color: "#00ACFF" }}>DownLoad</Text>
            </TouchableOpacity>
          </View>
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
  firstContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    margin: 10,
    // borderWidth: 1,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 5,
    padding: 10,
    backgroundColor: "#FAF2F2"
  },
  img: {
    width: 25,
    height: 50,
    marginTop: 25
  },
  secondContainer: {
    margin: 10,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    minHeight: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "#707070"
  },
  textInput: {
    marginLeft: 10,
    fontSize: 20
  },
  firstimg: {
    width: 30,
    height: 30
  }
});
