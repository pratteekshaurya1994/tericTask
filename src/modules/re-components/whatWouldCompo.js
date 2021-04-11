import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, PermissionsAndroid, Image } from 'react-native';
import { SizeConfig } from "../../constants/size-config";
import { COLORS } from "../../constants/colors";


const WhatWouldComponent = ({ navigation, title }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.whatWouldImage}
                    source={require('../../assets/food1.jpg')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>1,00,000+ Medicines</Text>
            </View>
        </View>
    );
}

export default WhatWouldComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.whiteDark,
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 45,
        elevation: 12,
        borderRadius: 5,
    },
    imageContainer: {
        height: SizeConfig.blockHeight * 13,
        width: SizeConfig.blockWidth * 45,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    whatWouldImage: {
        height: SizeConfig.blockHeight * 10,
        width: SizeConfig.blockWidth * 45,
    },
    contentContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 45,
        justifyContent: "center",
        // backgroundColor: "blue",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: SizeConfig.blockHeight * 2.1,
    }
});