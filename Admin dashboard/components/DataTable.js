// components/DataTable.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataTable = ({ data }) => {
  return (
    <View style={styles.dataTable}>
      {data.map((item, index) => (
        <View key={index} style={styles.dataRow}>
          <Text>{item}</Text>
          {/* Add more columns as needed */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dataTable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  dataRow: {
    flex: 1,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default DataTable;
