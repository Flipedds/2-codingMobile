import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button} from "react-native";

export default function Dados({ navigation }) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/Curriculo.jpeg")}
          style={styles.imageCurriculo}
        />
        <Text style={styles.centerText}>Currículo</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')}>
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
      textAlign: 'center',
    },
  });