import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/starter/SplashScreen';
import { BottomNavigation } from './BottomNavigation';
import ViewProductScreen from '../screens/user/stacks/ViewProductScreen';
import CartScreen from '../screens/user/stacks/CartScreen';
import GetOtpScreen from '../screens/auth/GetOtpScreen';
import GetNumberScreen from '../screens/auth/GetNumberScreen';

const Stack = createStackNavigator();

export function RootNavigation() {
    const screenOptions = (label = "") => ({
        headerShown: true,
        title: label
    });
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash"
                component={SplashScreen}
            />
            <Stack.Screen name="GetNumber"
                component={GetNumberScreen}
                options={screenOptions("")}
            />
            <Stack.Screen name="GetOtp"
                component={GetOtpScreen}
                options={screenOptions("Verify")} />
            <Stack.Screen name="ViewProduct" component={ViewProductScreen} 
            options={screenOptions("")}/>
            <Stack.Screen name="Cart"
                component={CartScreen}
                options={screenOptions("My Cart")}
            />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    );
}