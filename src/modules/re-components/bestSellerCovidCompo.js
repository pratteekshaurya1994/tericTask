import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, PermissionsAndroid, Image } from 'react-native';
import { SizeConfig } from "../../constants/size-config";
import { COLORS } from "../../constants/colors";


const BestSellerCovidComponent = ({ navigation, title }) => {

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
                <Text style={styles.kitText}>kit of 6 packs</Text>
            </View>
            <View style={styles.ratingMainContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>4.4</Text>
                </View>
                <Text style={styles.ratingNumberText}>56 Ratings</Text>
            </View>
            <View style={styles.mrpMainContainer}>
                <View style={styles.mrpContainer}>
                    <Text style={styles.mrpText}>MRP</Text>
                    <Text style={styles.mrpPriceText}>₹ 338</Text>
                </View>
                <Text style={styles.mrpDiscountText}>10% off</Text>
            </View>
            <View style={styles.finalPriceContainer}>
            <Text style={styles.fnalPriceText}>₹ 333</Text>
            <View style={styles.addContainer}>
                <Text style={styles.addText}>ADD</Text>
            </View>
            </View>
        </View>
    );
}

export default BestSellerCovidComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.whiteDark,
        height: SizeConfig.blockHeight * 40,
        width: SizeConfig.blockWidth * 45,
        elevation: 12,
        borderRadius: 5,
        marginRight: SizeConfig.blockWidth * 2
    },
    imageContainer: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 45,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: COLORS.blackExtraLight,
        borderBottomWidth: 1
    },
    whatWouldImage: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 35,
    },
    contentContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 45,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "red",
        paddingHorizontal: SizeConfig.blockWidth * 1,
        paddingVertical: SizeConfig.blockHeight * 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: SizeConfig.blockHeight * 1.8,
        marginBottom: SizeConfig.blockHeight * 1,
    },
    kitText: {
        fontSize: SizeConfig.blockHeight * 1.6
    },
    ratingMainContainer: {
        flexDirection: "row",
        height: SizeConfig.blockHeight * 4,
        width: SizeConfig.blockWidth * 43,
        marginHorizontal: SizeConfig.blockWidth * 1,
        // backgroundColor: "red",
        alignItems: 'center',
        flexDirection: "row"
    },
    ratingContainer: {
        height: SizeConfig.blockHeight * 2.5,
        width: SizeConfig.blockWidth * 10,
        backgroundColor: "#2AD490",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 3,

    },
    ratingText: {
        fontSize: SizeConfig.blockHeight * 1.7,
        color: COLORS.whiteDark,
    },
    ratingNumberText: {
        fontSize: SizeConfig.blockHeight * 1.7,
        marginLeft: SizeConfig.blockWidth * 2,
    },
    mrpMainContainer: {
        flexDirection: "row",
        height: SizeConfig.blockHeight * 4,
        width: SizeConfig.blockWidth * 43,
        marginHorizontal: SizeConfig.blockWidth * 1,
        // backgroundColor: "red",
        alignItems: 'center',
        flexDirection: "row"
    },
    mrpContainer: {
        height: SizeConfig.blockHeight * 2.5,
        width: SizeConfig.blockWidth * 18,
        // backgroundColor: "green",
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 3,
        flexDirection: "row"
    },
    mrpText: {
        color: COLORS.blackDark
    },
    mrpPriceText: {
        color: COLORS.blackDark,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
    },
    mrpDiscountText: {
        color: "#FF6F61",
        marginLeft: SizeConfig.blockWidth * 4,
        fontWeight: "700",
    },
    finalPriceContainer: {
        height: SizeConfig.blockHeight * 5,
        width: SizeConfig.blockWidth * 43,
        marginHorizontal: SizeConfig.blockWidth * 1,
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    fnalPriceText: {
        fontSize: SizeConfig.blockHeight * 2.2,
        fontWeight: "700",
    },
    addContainer: {
        height: SizeConfig.blockHeight *3,
        width: SizeConfig.blockWidth * 10,
        backgroundColor: "#FF6F61",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    addText: {
        color:COLORS.whiteDark,
        fontSize: SizeConfig.blockHeight * 1.8,
        fontWeight: "700",
    }
});