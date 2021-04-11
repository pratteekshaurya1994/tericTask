import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SizeConfig } from "../../constants/size-config";
import { COLORS } from "../../constants/colors";


const OfferCombo = ({ navigation,code }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.whatWouldImage}
                source={require('../../assets/food1.jpg')}
                resizeMode="cover"
            />
            <View style={styles.footerContainer}>
                <View style={styles.footerContentContainer}>
                    <View style={styles.codeTextContainer}>
                        <Text style={styles.couponText}>Coupons Code</Text>
                        <Text style={styles.couponCodeText}>{code}</Text>
                    </View>
                    <View style={styles.codeTextBtnContainer}>
                        <TouchableOpacity>
                            <View style={styles.codeTextBtn}>
                                <Text style={styles.codeText}>COPY COUPON CODE & SHOP</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default OfferCombo;

const styles = StyleSheet.create({
    container: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 94,
    },
    whatWouldImage: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 94,
    },
    footerContainer: {
        height: SizeConfig.blockHeight * 10,
        width: SizeConfig.blockWidth * 94,
        backgroundColor: COLORS.whiteDark,
    },
    footerContentContainer: {
        height: SizeConfig.blockHeight * 10,
        width: SizeConfig.blockWidth * 90,
        marginHorizontal: SizeConfig.blockWidth * 2,
        // backgroundColor: COLORS.red,
        flexDirection: "row"
    },
    codeTextContainer: {
        height: SizeConfig.blockHeight * 10,
        width: SizeConfig.blockWidth * 30,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    couponText: {
        fontSize: SizeConfig.blockHeight * 2,
        color: COLORS.blackDark,
        fontWeight: "bold"
    },
    couponCodeText: {
        fontSize: SizeConfig.blockHeight * 2.2,
        color: "#FF6F61",
        fontWeight: "bold"
    },
    codeTextBtnContainer: {
        height: SizeConfig.blockHeight * 10,
        width: SizeConfig.blockWidth * 60,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end",

    },
    codeTextBtn: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 55,
        marginVertical: SizeConfig.blockHeight * 1,
        // marginHorizontal: SizeConfig.blockWidth * 2,
        // marginLeft: SizeConfig.blockWidth * 16,
        backgroundColor: "#FF6F61",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    codeText: {
        fontSize: SizeConfig.blockHeight * 1.9,
        color: COLORS.whiteDark,
        fontWeight: "bold"
    }
});