import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/image.jpg")} style={styles.image} />
        <Text style={styles.centerText}>Filipe André</Text>
        <Button title="Dados" onPress={() => navigation.navigate('Dados')}>
        </Button>
        <StatusBar style="auto" />
      </View>
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
      centerText: {
        paddingTop: 20,
        width: 100,
        height: 50,
        fontSize: 20,
      },
})