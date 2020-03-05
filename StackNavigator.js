import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Category from "./screens/Category";
import AppName from "./screens/AppName";
import AppNameDetail from "./screens/AppNameDetail";
import Back from "./components/Back";

const StackNavigatorConfig = {
  initialRouteName: "Category"
};
const RouteConfigs = {
  Category: {
    screen: Category,
    navigationOptions: () => ({
      headerTitle: "IT,Mobile & Electronic Mart",
      headerStyle: { backgroundColor: "#0029F9" },
      headerTitleStyle: {
        color: "white",
        textAlignVertical: "center",
        textAlign: "center"
      }
    })
  },
  AppName: {
    screen: AppName,
    navigationOptions: ({navigation}) => ({
      headerTitle:(navigation.getParam("appName")),
      headerStyle: { backgroundColor: "#0029F9" },
      headerTitleStyle: {
        color: "white"
      },
      headerLeft:<Back navigation={navigation} routeName="Category"/>,
    })
  },
  AppNameDetail: {
    screen: AppNameDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: "Worms Zone",
      headerStyle: { backgroundColor: "#0029F9" },
      headerTitleStyle: {
        color: "white"
      },
      headerLeft:<Back navigation={navigation} routeName="AppName"/>,
    })
  }
};
export default createAppContainer(
  createStackNavigator(RouteConfigs, StackNavigatorConfig)
);
