import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/starter/SplashScreen';
import { BottomNavigation } from './BottomNavigation';
import { AuthNavigation } from './AuthNavigation';
import ViewProductScreen from '../screens/user/stacks/ViewProductScreen';

const Stack = createStackNavigator();

export function RootNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="BottomNavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="ViewProduct" component={ViewProductScreen} />
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    );
}