import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/user/bottomStacks/HomeScreen';
import ExploreScreen from '../screens/user/bottomStacks/ExploreScreen';
import ProfileScreen from '../screens/user/bottomStacks/ProfileScreen';
import { theme } from '../contants/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {

    const screenOptions = (icon, label) => ({
        tabBarLabel: label,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name={icon} color={color} size={25} />
    });

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.primaryColor,
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={screenOptions("home")} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={screenOptions("home")} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={screenOptions("account")} />
        </Tab.Navigator>
    );
}