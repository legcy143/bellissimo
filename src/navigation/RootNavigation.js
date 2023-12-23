import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/starter/SplashScreen';
import { BottomNavigation } from './BottomNavigation';
import { AuthNavigation } from './AuthNavigation';

const Stack = createStackNavigator();

export function RootNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="AuthNavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    );
}