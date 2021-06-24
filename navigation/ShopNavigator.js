import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

// const ProductsNavigator = createStackNavigator({
//     ProductsOverviewScreen: ProductsOverviewScreen
// }, {
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//         },
//         headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
// });

const Stack = createStackNavigator();

const ProductsNavigator = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="All Products"
            >
                <Stack.Screen
                    name="All Products"
                    component={ProductsOverviewScreen}
                    options={{ 
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                        }, 
                        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
                    }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsNavigator;