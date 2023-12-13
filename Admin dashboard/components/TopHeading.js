// components/TopHeading.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopHeading = ({ title }) => {
  return (
    <View style={styles.topHeading}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topHeading: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TopHeading;
