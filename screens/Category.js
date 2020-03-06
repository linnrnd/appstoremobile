import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl
} from "react-native";
const { width } = Dimensions.get("window");
const axios = require("axios");
export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      refreshing: true
    };
  }
 async componentDidMount() {
    this.getAllCategory();
  }
  getAllCategory() {
    const self = this;
    axios
      .get("http://103.83.190.196/LinnAppStore/public/api/categories")
      .then(function(response) {
        // console.log(response.data);
        self.setState({ category: response.data, refreshing: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onRefresh = () => {
    this.setState({
      category: [],
      refreshing: true
    });
    this.getAllCategory();
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >
          <View style={styles.btnContainer}>
            {this.state.category.map((data, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.cardBtn}
                    onPress={() =>
                      this.props.navigation.navigate("AppNameLatest", {
                        appName: data.category_name,category_id:data.id
                      })
                    }
                  >
                    <Text style={styles.text}>{data.category_name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
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
  text: {
    color: "#365AF0",
    fontSize:15
  },
  cardBtn: {
    width: width / 2 - 50,
    height: width / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#787878",
    borderWidth: 1,
    margin: 5,
    // elevation: 10,
    backgroundColor: "white",
    shadowColor: "#787878", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5 // IOS,
  }
});
