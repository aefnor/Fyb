import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "Fyb/styles/Home.js"
import Router from "Fyb/navigation/Router.js"

export default class App extends React.Component {
  render() {
    return (
        <Router />
      // <View style={styles.container}>
        
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}