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

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
}

export default LoginScreen;
