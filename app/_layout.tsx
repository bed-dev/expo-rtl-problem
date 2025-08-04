import { Stack } from "expo-router";
import {I18nManager, Platform, Text, View} from "react-native";
import * as Updates from 'expo-updates';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";
import {DrawerToggleButton} from "@react-navigation/drawer";

export default function RootLayout() {
  const shouldBeRTL = true;

  if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== 'web') {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
    Updates.reloadAsync()
  }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({navigation}) => ({
                        headerTitleAlign: "center",
                    headerLeft: DrawerToggleButton
                })}>
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }}
                />

            </Drawer>
        </GestureHandlerRootView>
    );
}
