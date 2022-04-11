import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Wheere!</Text>
    </View>
  );
}

export default SplashScreen;
