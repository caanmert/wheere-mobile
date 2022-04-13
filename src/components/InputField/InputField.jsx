import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderColor: 'black',
    borderWidth: 2,
    margin: 15,
    textAlign: 'center',
    borderRadius: 30,
    height: '5%',

  },
});

function InputField({
  placeholder, placeholderTextColor, secureTextEntry, value,
}) {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
}

InputField.defaultProps = {
  placeholder: 'Input',
  placeholderTextColor: 'black',
  secureTextEntry: false,

};

InputField.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.element.isRequired,
};

export default InputField;
