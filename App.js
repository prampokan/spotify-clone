import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import SearchScreen from "./pages/SearchScreen";
import ProfileScreen from "./pages/ProfileScreen";
import DetailScreen from './pages/DetailScreen';

const bottomTabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabScreen() {
  return (
      <bottomTabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: true,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
            marginHorizontal: 0,
            height: 64,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "white" : "darkgray";
            } 
            else if (route.name === "Search") {
              iconName = "search";
              color = focused ? "white" : "darkgray";
            }
            else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "white" : "darkgray";
            }

            return <Octicons name={iconName} size={22} color={color} />;
          },
          headerShown: false,
        })}
      >
        <bottomTabNavigator.Screen
          name="Home"
          component={HomeScreen}
        />
        <bottomTabNavigator.Screen 
          name="Search" 
          component={SearchScreen} 
        />
        <bottomTabNavigator.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
      </bottomTabNavigator.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown : false }} />
        <Stack.Screen name="Main" component={MainTabScreen} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

