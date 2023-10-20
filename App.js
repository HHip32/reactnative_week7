import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import index1 from './index1';
import index2 from './index2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function GoBackScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Go back!</Text>
    </View>
  );
}
// screenOptions={{ tabBarStyle: { backgroundColor: '#1BA9FF' }}}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Index1'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Index1') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'reorder-three' : 'reorder-three-outline';
            }
            else if (route.name === 'Goback') {
              iconName = focused ? 'arrow-back' : 'arrow-back-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarLabel: '',
          tabBarStyle: { backgroundColor: '#1BA9FF' }
        })}

      >
        <Tab.Screen name='Settings' component={index2} />
        <Tab.Screen name="Index1" component={index1} />
        <Tab.Screen name='Goback' component={GoBackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}