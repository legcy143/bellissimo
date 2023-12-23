import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/user/bottomStacks/HomeScreen';
import ProafileScreen from '../screens/user/bottomStacks/ProafileScreen';
import ExploreScreen from '../screens/user/bottomStacks/ExploreScreen';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
            <Tab.Screen name="Profile" component={ProafileScreen} />
        </Tab.Navigator>
    );
}