import { createStackNavigator } from '@react-navigation/stack';
import GetNumberScreen from '../screens/auth/GetNumberScreen';
import GetOtpScreen from '../screens/auth/GetOtpScreen';


const Stack = createStackNavigator();

export function AuthNavigation() {
    return (
        <Stack.Navigator initialRouteName='GetNumber' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="GetNumber" component={GetNumberScreen} />
            <Stack.Screen name="GetOtp" component={GetOtpScreen} />
        </Stack.Navigator>
    );
}