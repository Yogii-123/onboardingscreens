// // components/Sidebar.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity ,Dimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Sidebar = ({ navigation }) => {
//   const { height } = Dimensions.get('window');

//   const navigateToScreen = (screenName) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     < View style={[styles.sidebar, { height }]}>
//       <TouchableOpacity onPress={() => navigateToScreen('Dashboard')}>
//         <View style={styles.menuItem}>
//           <Icon name="dashboard" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Dashboard</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('UsersDetails')}>
//         <View style={styles.menuItem}>
//           <Icon name="users" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Users Details</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('Message')}>
//         <View style={styles.menuItem}>
//           <Icon name="comment" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Message</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('WithdrawRequests')}>
//         <View style={styles.menuItem}>
//           <Icon name="money" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Withdraw Requests</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('Category')}>
//         <View style={styles.menuItem}>
//           <Icon name="th-list" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Category</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('Questions')}>
//         <View style={styles.menuItem}>
//           <Icon name="question" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Questions</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('Notifications')}>
//         <View style={styles.menuItem}>
//           <Icon name="bell" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Notifications</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
//         <View style={styles.menuItem}>
//           <Icon name="cog" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Settings</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigateToScreen('Logout')}>
//         <View style={styles.menuItem}>
//           <Icon name="sign-out" size={20} color="#3498db" />
//           <Text style={styles.menuText}>Logout</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sidebar: {
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   menuText: {
//     marginLeft: 10,
//     color: '#3498db',
//   },
// });

// export default Sidebar;
