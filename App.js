import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RouteScreen from "./src/screens/RouteScreen";
import StopScreen from "./src/screens/StopScreen";
import PodScreen from "./src/screens/PodScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Route" component={RouteScreen} />
                <Stack.Screen name="Stop" component={StopScreen} />
                <Stack.Screen name="POD" component={PodScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
