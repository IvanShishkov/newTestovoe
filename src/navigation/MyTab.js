import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainScreen from '../screens/MainScreen'
import SecondScreen from '../screens/SecondScreen'

const Tab = createBottomTabNavigator()

export const MyTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{ title: 'Список' }}
                name="Home"
                component={MainScreen}
            />
            <Tab.Screen
                options={{ title: 'Элемент списка' }}
                name="Second"
                component={SecondScreen}
            />
        </Tab.Navigator>
    )
}
