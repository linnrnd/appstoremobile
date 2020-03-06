import React from "react";
import {
  View,
  Text,
  BackHandler,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
  Linking
} from "react-native";

//import const
const axios = require("axios");
import { postImagePath } from "../consts/Urls";

export default class AppName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: [],
      refreshing: true,
      keyword: null,
      showImg: false,
      app: []
    };
    this.BackHandler = null;
  }

  async componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );

    this.getAppByCategory();
    // this.getDownLoadApp();
  }
  handleBackPress = () => {
    this.props.navigation.navigate("Category");
    return true;
  };
  getDownLoadApp(data) {
    // alert(data);
    const urls =
      "http://103.83.190.196/LinnAppStore/public/application/download/" + data;
    axios
      .get(urls)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getAppByCategory() {
    const self = this;
    const url =
      "http://103.83.190.196/LinnAppStore/public/api/applications/" +
      this.props.navigation.getParam("category_id");
    // console.log(url);
    axios
      .get(url)
      .then(function(response) {
        // console.log(response.data.data);
        self.setState({
          appName: response.data.data,
          app: response.data.data,
          refreshing: false,
          keyword: null
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onRefresh = () => {
    this.setState({
      appName: [],
      app: [],
      refreshing: true,
      keyword: null
    });
    this.getAppByCategory();
  };
  searching(word) {
    // alert(word)
    return this.state.appName.filter(app => {
      const regex = new RegExp(word);
      return app.name.match(regex);
    });
  }
  handleOnChangeSearchInput(value) {
    // alert(value);
    if (value) {
      this.setState({ showImg: true, keyword: value });
      setTimeout(() => {
        var data = this.searching(value);
        this.setState({ appName: data });
      }, 100);
    } else {
      this.setState({
        appName: this.state.app,
        keyword: null,
        showImg: false
      });
    }
  }
  clearSearchInput() {
    this.setState({ keyword: null, showImg: false });
    this.getAppByCategory();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.appName.length == 0 && (
          <View style={[styles.noMemberTextWrapper, StyleSheet.absoluteFill]}>
            <Text style={styles.noText}>Not Found</Text>
          </View>
        )}
        <View style={styles.secondContainer}>
          <Image
            source={require("../assets/icons/search.png")}
            style={styles.firstimg}
          />
          <TextInput
            placeholder="Search. . ."
            style={styles.textInput}
            value={this.state.keyword}
            multiline={true}
            onChangeText={this.handleOnChangeSearchInput.bind(this)}
            placeholderTextColor="#707070"
          />
          <View style={{ marginLeft: "auto" }}>
            {this.state.showImg ? (
              <TouchableOpacity onPress={() => this.clearSearchInput()}>
                <Image
                  source={require("../assets/icons/close-button.png")}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                    marginRight: 5
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >
          {this.state.appName.map((data, index) => {
            return (
              <View key={index}>
                <View style={styles.firstContainer}>
                  <Image
                    source={{ uri: postImagePath + data.logo }}
                    style={styles.img}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                  <TouchableOpacity
                    onPress={() => this.getDownLoadApp(data.id)}
                    style={styles.touchBtn}
                  >
                    <Image source={require("../assets/icons/down.png")} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
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
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
    padding: 10,
    elevation: 0.5,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 3,
    backgroundColor: "white"
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
    fontSize: 15
  },
  firstimg: {
    width: 30,
    height: 30
  },
  img: {
    width: 70,
    height: 70
  },
  text: {
    fontSize: 15,
    color: "#0029F9"
  },
  touchBtn: {
    marginRight: 20
  },
  noMemberTextWrapper: {
    // flex:1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  noText: {
    fontSize: 14
  }
});
