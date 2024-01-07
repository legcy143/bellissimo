import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/starter/SplashScreen';
import { BottomNavigation } from './BottomNavigation';
import ViewProductScreen from '../screens/user/stacks/ViewProductScreen';
import CartScreen from '../screens/user/stacks/CartScreen';
import GetOtpScreen from '../screens/auth/GetOtpScreen';
import GetNumberScreen from '../screens/auth/GetNumberScreen';
import MyOrderScreen from '../screens/user/stacks/MyOrderScreen';
import HelpCenterScreen from '../screens/user/stacks/HelpCenterScreen';
import EditProfileScreen from '../screens/user/stacks/Profile/EditProfileScreen';
import EditAddres from '../screens/user/stacks/Profile/EditAddres';
import PlaceOrderScreen from '../screens/user/stacks/PlaceOrderScreen';
import OrderDetailScreen from '../screens/user/stacks/OrderDetailScreen';

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
                options={screenOptions("")}
            />
            <Stack.Screen name="Cart"
                component={CartScreen}
                options={screenOptions("My Cart")}
            />
            <Stack.Screen name="PlaceOrder"
                component={PlaceOrderScreen}
                options={screenOptions("Place Order")}
            />
            <Stack.Screen name="MyOrders"
                component={MyOrderScreen}
                options={screenOptions("My Orders")}
            />
            <Stack.Screen name="OrderDetail"
                component={OrderDetailScreen}
                options={screenOptions("Order Detail")}
            />
            <Stack.Screen name="EditProfile"
                component={EditProfileScreen}
                options={screenOptions("Edit Profile")}
            />
            <Stack.Screen name="EditAddres"
                component={EditAddres}
                options={screenOptions("Addres")}
            />
            <Stack.Screen name="HelpCenter"
                component={HelpCenterScreen}
                options={screenOptions("Help Center")}
            />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    );
}