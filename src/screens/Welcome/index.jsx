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

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
}

export default WelcomeScreen;
