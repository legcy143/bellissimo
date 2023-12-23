import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/starter/SplashScreen';
import { BottomNavigation } from './BottomNavigation';

const Stack = createStackNavigator();

export function RootNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    );
}