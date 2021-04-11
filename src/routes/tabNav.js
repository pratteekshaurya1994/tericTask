import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    Platform,
    FlatList,
  } from 'react-native';

import { SizeConfig } from '../constants/size-config';
import { COLORS } from '../constants/colors';

import HomeScreen from "../modules/homeScreen";
import OfferScreen from "../modules/offerScreen";

const Tab = createBottomTabNavigator();

export class TabScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: "#FF6151",
                    inactiveTintColor: COLORS.inactiveTintColor,
                    showLabel: true,
                    style: {
                        height: SizeConfig.blockHeight * 7,
                        // paddingBottom: SizeConfig.blockHeight * 2,

                    },
                    labelStyle: {
                        fontSize: SizeConfig.blockHeight * 2
                    }
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image
                                style={{ tintColor: color }}
                                source={require('../assets/spaces.png')}
                                resizeMode= "cover"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Offer"
                    component={OfferScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image
                                style={{ tintColor: color }}
                                source={require('../assets/pinIcon.png')}
                                resizeMode= "cover"
                            />
                        ),
                    }}
                />
                
            </Tab.Navigator>
        );
    }
}

