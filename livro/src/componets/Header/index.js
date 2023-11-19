import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ toggleMenu }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleMenu}>
        <Text>☰</Text>
      </TouchableOpacity>
      <Text style={styles.logo}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  logo: {
    fontSize: 24,
  },
});

export default Header;
