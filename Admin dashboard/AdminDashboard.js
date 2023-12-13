// screens/AdminDashboard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopSidebar from './components/TopSidebar';
import TopHeading from './components/TopHeading';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import Sidebar from './components/Sidebar';

const AdminDashboard = ({ navigation }) => {
  const table1Data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const table2Data = ['Data A', 'Data B', 'Data C', 'Data D'];

  return (
    <View style={styles.container}>
      <TopSidebar navigation={navigation} />
      <View style={styles.mainContent}>
        <TopHeading title="Admin Dashboard" />
        <SearchBar />
        <DataTable data={table1Data} />
        <DataTable data={table2Data} />
      </View>
      <Sidebar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align items at the top of the page
  },
  mainContent: {
    flex: 3,
  },
});

export default AdminDashboard;
