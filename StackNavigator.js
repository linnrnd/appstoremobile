import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//import screen
import Category from "./screens/Category";
import AppName from "./screens/AppName";
import AppNameDetail from "./screens/AppNameDetail";
import AppNameLatest from "./screens/AppNameLatest";

//import component
import Back from "./components/Back";
import Title from "./components/Title";

const StackNavigatorConfig = {
  initialRouteName: "Category"
};
const RouteConfigs = {
  Category: {
    screen: Category,
    navigationOptions: () => ({
      headerTitle: () => <Title title="Linn App Store" />,
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerTitleStyle: { alignSelf: "center" },
      headerStyle: { backgroundColor: "#0029F9" },
      headerLeft: () => null
    })
  },
  AppName: {
    screen: AppName,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("appName"),
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: { backgroundColor: "#0029F9" },
      headerLeft: () => <Back navigation={navigation} routeName="Category" />
    })
  },
  AppNameLatest: {
    screen: AppNameLatest,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => <Title title={navigation.getParam("appName")} />,
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: { backgroundColor: "#0029F9" },
      headerLeft: () => <Back navigation={navigation} routeName="Category" />
    })
  },
  AppNameDetail: {
    screen: AppNameDetail,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => <Title title="Worms Zone" />,
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: { backgroundColor: "#0029F9" },
      headerLeft: () => <Back navigation={navigation} routeName="AppName" />
    })
  }
};
export default createAppContainer(
  createStackNavigator(RouteConfigs, StackNavigatorConfig)
);
