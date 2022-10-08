import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import UserInfo from "../screens/UserInfo";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Главная" }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{ title: "Информация" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
