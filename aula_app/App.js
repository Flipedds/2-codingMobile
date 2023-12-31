import React from "react";
import Home from './Components/Home';
import Dados from './Components/Dados';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen name="Dados" component={Dados}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
