import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '70%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
});

function Button({
  title, onPress, color, activeOpacity,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      color={color}
      activeOpacity={activeOpacity}
    >
      <Text>{title}</Text>
    </TouchableOpacity>

  );
}

Button.defaultProps = {
  activeOpacity: 0.7,
  onPress: () => {},
  title: 'Title',
  color: 'Gray',
};
Button.propTypes = {
  activeOpacity: PropTypes.number,
  onPress: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
