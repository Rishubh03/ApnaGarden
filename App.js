import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from "./src/store";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './features/authSlice';
import {
  FirstScreen,
  LoginScreen,
  RegistrationScreen,
  PasswordResetScreen,
  MainNavigatorScreen,
  HomeScreen,
  EditProfileScreen,
  FeedbackScreen,
  DepartmentInfoScreen,
  GardensListScreen,
  RegisterComplaints,
  TrackComplaint,
  TrackComplaintDetails,

} from './src/index';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();


function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{
          title: 'Welcome',
          animationTypeForReplace: 'pop',
        }} />
      
        <Stack.Screen name="MainScreen" component={MainNavigatorScreen} options={{
          title: 'Main Screen',
          headerShown: false,
          animationTypeForReplace: 'pop',
        }} />

        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{
          title: 'Profile Screen',
          animationTypeForReplace: 'pop',
        }} />

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          title: 'Profile',
          animationTypeForReplace: 'pop',
        }} />

        <Stack.Screen name="GardenListScreen" component={GardensListScreen} options={{
          title: 'Gardens',
          animationTypeForReplace: 'pop',
        }} />

        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} options={{
          title: 'Feedback',
          animationTypeForReplace: 'pop',
        }} />

        <Stack.Screen name="DepartmentInfoScreen" component={DepartmentInfoScreen} options={{
          title: 'Department',
          animationTypeForReplace: 'pop',
        }} />

        <Stack.Screen name="RegisterComplaints" component={RegisterComplaints} options={{
          title: 'Register Complaints',
          animationTypeForReplace: 'pop',
        }} />


        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          title: 'Sign in',
          animationTypeForReplace: 'pop',
        }} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{
          title: 'Sign up',
          animationTypeForReplace: 'pop',
        }} />
        <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} options={{
          title: 'Reset password',
          animationTypeForReplace: 'pop',
        }} />
        <Stack.Screen name="TrackComplaint" component={TrackComplaint} options={{
          title: 'Track Complaint',
          animationTypeForReplace: 'pop',
        }} />
        <Stack.Screen name="TrackComplaintDetails" component={TrackComplaintDetails} options={{
          title: 'Complaint Details',
          animationTypeForReplace: 'pop',
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}