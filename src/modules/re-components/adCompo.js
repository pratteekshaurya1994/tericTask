import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, PermissionsAndroid, Image } from 'react-native';
import { SizeConfig } from "../../constants/size-config";
import { COLORS } from "../../constants/colors";


const AdComponent = ({ navigation, imageUrl }) => {

    return (
        <Image
            style={styles.adImage}
            source={imageUrl}
            resizeMode="cover"
        />
    );
}

export default AdComponent;

const styles = StyleSheet.create({
    adImage: {
        width: SizeConfig.blockWidth * 96,
        height: SizeConfig.blockHeight * 20,
        borderRadius: 10,
    },
});