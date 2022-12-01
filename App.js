import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Colors ,Fonts} from './src/contants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreeen from './src/screens/SignInScreeen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import AccountScreen from './src/screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from '@rneui/base';
import CartScreen from './src/screens/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false ,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.THIRD_GREEN,
        tabBarInactiveTintColor: Colors.THIRD_GREY,
        tabBarLabelStyle: {
          fontSize :15,
          fontFamily: Fonts.POPPINS_MEDIUM,
          fontWeight: '500'
        }
      }}>
        <Tab.Screen name = 'Home' component={HomeScreen} options= {{
          tabBarIcon: ({color})=>(
            <Ionicons name='home' size={25} color={color} />
          )
        }} />
        <Tab.Screen name = 'Cart' component={CartScreen} options= {{
          tabBarIcon: ({color})=>(
            <Ionicons name='cart' size={25} color={color} />
          )
        }} />
        <Tab.Screen name = 'Orders' component={HomeScreen} options= {{
          tabBarIcon: ({color})=>(
            <Ionicons name='card' size={25} color={color} />
          )
        }} />
        <Tab.Screen name = 'Profile' component={AccountScreen} options= {{
          tabBarIcon: ({color})=>(
            <Ionicons name='person' size={25} color={color} />
          )
        }}/>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreeen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeTab" component={MyTab} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="AccountTab" component={MyTab} />
        <Stack.Screen name="CartTab" component={MyTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
