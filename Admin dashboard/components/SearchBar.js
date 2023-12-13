// components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder="Search..." style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
