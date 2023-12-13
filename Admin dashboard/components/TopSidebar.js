// components/TopSidebar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopSidebar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.topSidebar}>
      <TouchableOpacity onPress={() => navigateToScreen('Notifications')}>
        <Icon name="bell" size={20} color="#3498db" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Messages')}>
        <Icon name="envelope" size={20} color="#3498db" />
      </TouchableOpacity>
      {/* Add more icons or buttons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  topSidebar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default TopSidebar;
