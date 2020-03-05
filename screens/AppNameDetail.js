import React from "react";
import {
  View,
  Image,
  StyleSheet,
  BackHandler,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class AppNameDetail extends React.Component {
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
    this.props.navigation.navigate("AppName");
    return true;
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ margin: 10 }}>
            <View
              style={{
                alignItems: "center",
                height: 200,
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../assets/icons/game.jpg")}
                style={styles.img}
              />
            </View>

            {/* <View style={{flexDirection:"row",justifyContent:"space-between"}}> */}

            <Text style={{ marginTop: 10, fontSize:18 }}>v 4.2918</Text>
            {/* <Text style={{marginTop:10,fontSize:15}}>54.4MB</Text> */}

            <TouchableOpacity style={styles.touchBtn}>
              <Image
                source={require("../assets/icons/download2.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ marginTop: 5, color: "#00ACFF",fontSize:16 }}>
                DownLoad (54.5MB)
              </Text>
            </TouchableOpacity>

            {/* </View> */}

            <Text style={{ fontSize: 20, marginTop: 10 }}>Description</Text>
            <Text style={{ marginTop: 10 }}>
              The description of Worms Zone .io - Voracious Snake Open Worms
              Zone and join the battle of brave worms in an enormous arena! Grow
              your worm to be the largest and earn yourself a champion’s title.
              And don’t forget, a champion must stand out from the crowd. Choose
              a skin for your worm in the wardrobe or create your own cool
              design. There are several tactics for becoming a champion:
              ""fighter"", ""trickster"", or ""builder"". Which will you be?
            </Text>
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
  // img: {
  //   width: "100%",
  //   height: 250,
  //   shadowColor: "rgba(0,0,0, .4)", // IOS
  //   shadowOffset: { height: 1, width: 1 }, // IOS
  //   shadowOpacity: 0.5, // IOS
  //   elevation: 5
  // },
  touchBtn: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 3,
    marginTop: 10,
    borderRadius: 5,
    borderColor: "#00ACFF",
    // width:120,
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity:0.5, // IOS
    elevation: 5,
    backgroundColor:"white"
  }
});
