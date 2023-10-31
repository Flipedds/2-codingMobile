import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/image.jpg")} style={styles.image} />
      <Text style={styles.centerText}>Filipe André</Text>
      <Button title="Dados" onPress={() => navigation.navigate('Dados')}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

function Dados({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Curriculo.jpeg")}
        style={styles.imageCurriculo}
      />
      <Text style={styles.centerText}>Currículo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 25,
  },
  imageCurriculo: {
    width: 300,
    height: 450,
    borderRadius: 25,
  },
  centerText: {
    paddingTop: 20,
    width: 100,
    height: 50,
    fontSize: 20,
  },
});
