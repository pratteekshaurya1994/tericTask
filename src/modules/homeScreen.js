import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { SizeConfig } from "../constants/size-config";
import { COLORS } from "../constants/colors";
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderScroll from "./re-components/headerScroll";
import WhatWouldComponent from "./re-components/whatWouldCompo";
import BestSellerCovidComponent from "./re-components/bestSellerCovidCompo";
import FeaturedPopularComponent from "./re-components/featuredPopularCompo";
import AdComponent from "./re-components/adCompo";

import * as homeAction from '../redux/action/homeAction';

import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homeAction.BestSellerAction(onSuccess, onError));
    }, []);

    const onSuccess = () => {
        // console.log(params.productName);
        // setLoading(false);
    };
    const onError = (message) => {
        console.log(message);
        // setLoading(false);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
            />
            <View style={styles.headerContainer}>
                <View style={styles.headerContentContainer}>
                    <View style={styles.headerLeftContainer}>
                        <View style={styles.headerLeftContentContainer}>
                            <Text style={styles.name1Text}>BANNU</Text>
                            <Text style={styles.name2Text}>PHARMACY</Text>
                        </View>
                    </View>
                    <View style={styles.headerRightContainer}>
                        <View style={styles.headerRightContentContainer}>
                            <Icon name="home" type="ionicon" />
                            <Icon name="home" type="ionicon" />
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.topScrollView}>
                    <ScrollView horizontal={true}>
                        <HeaderScroll />
                        <HeaderScroll />
                    </ScrollView>
                </View>
                <View style={styles.uploadPrescContainer}>
                    <View style={styles.uploadPrescImage}>
                        <Image
                            style={styles.orderImg}
                            source={require('../assets/food1.jpg')}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.uploadPrescTextContainer}>
                        <Text style={styles.uploadPrescTitleText}>Order Quickly with prescription</Text>
                        <View>
                            <Text style={styles.uploadPrescDescText}>Upload prescription and tell us what you need.</Text>
                            <Text style={styles.uploadPrescDescText}>We do the rest.</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.uploadPrescBtn}>
                                <Text style={styles.uploadPrescBtnText}>UPLOAD PRESCRIPTION</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.whatWouldContainer}>
                    <Text style={styles.whatWouldText}>What would you like to do today?</Text>
                    <View style={styles.WhatWouldComponentCOntainer}>
                        <WhatWouldComponent title="Medicines" />
                        <WhatWouldComponent title="Health Products" />
                    </View>
                </View>
                <View style={styles.bestSellerContainer}>
                    <View style={styles.bestSellerTitleContainer}>
                        <Text style={styles.bestSellerText}>Best Seller</Text>
                        <Text style={styles.viewAllText}>View All</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                    </ScrollView>
                </View>
                <View style={styles.combineContainer}>
                    <View style={styles.featuredPopularContainer}>
                        <Text style={styles.featuredPopularTitleText}>Featured Brands</Text>
                        <ScrollView style={{ flexDirection: "row" }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <FeaturedPopularComponent title="Dabur" />
                            <FeaturedPopularComponent title="Dabur" />
                            <FeaturedPopularComponent title="Dabur" />
                        </ScrollView>
                    </View>
                    <View style={styles.adContainer}>
                        <AdComponent imageUrl={require('../assets/food1.jpg')} />
                    </View>
                    <View style={styles.featuredPopularContainer}>
                        <Text style={styles.featuredPopularTitleText}>Popular Categories</Text>
                        <ScrollView style={{ flexDirection: "row" }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <FeaturedPopularComponent title="Baby Care" />
                            <FeaturedPopularComponent title="Family" />
                            <FeaturedPopularComponent title="Devices" />
                        </ScrollView>
                    </View>

                </View>
                <View style={styles.bestSellerContainer}>
                    <View style={styles.bestSellerTitleContainer}>
                        <Text style={[styles.bestSellerText, { marginTop: SizeConfig.blockHeight * 2 }]}>COVID 19 Essentials</Text>
                        <Text style={[styles.viewAllText, { marginTop: SizeConfig.blockHeight * 2 }]}>View All</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                        <BestSellerCovidComponent title="Whole Wheat Grass Juice" />
                    </ScrollView>
                </View>
                <View style={styles.adContainer}>
                    <AdComponent imageUrl={require('../assets/food1.jpg')} />
                </View>
                <View style={styles.thatAllContainer}>
                    <Text style={styles.thatAllText}>That's all Folks</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.whiteMedium,
    },
    headerContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 100,
        backgroundColor: COLORS.whiteDark,
        borderTopColor: COLORS.blackExtraLight,
        borderTopWidth: 1,
        borderBottomColor: COLORS.blackExtraLight,
        borderBottomWidth: 1,
    },
    headerContentContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 94,
        marginHorizontal: SizeConfig.blockWidth * 3,
        flexDirection: "row"
    },
    headerLeftContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 44,
    },
    headerLeftContentContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 20,
        justifyContent: "center",
        alignItems: "center"
    },
    name1Text: {
        fontSize: SizeConfig.blockHeight * 2.2,
        fontWeight: "700",
        color: "#FF6F61"
    },
    name2Text: {
        fontSize: SizeConfig.blockHeight * 1.4,
        color: "#435A63",
    },
    headerRightContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 44,
        alignItems: "flex-end"
    },
    headerRightContentContainer: {
        height: SizeConfig.blockHeight * 7,
        width: SizeConfig.blockWidth * 20,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    topScrollView: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 100,
        marginVertical: SizeConfig.blockHeight * 2,
    },
    uploadPrescContainer: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 94,
        marginHorizontal: SizeConfig.blockWidth * 3,
        flexDirection: "row",
        marginBottom: SizeConfig.blockWidth * 3,
        elevation: 11,
        borderRadius: 5,
    },
    uploadPrescImage: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 30,
        backgroundColor: COLORS.whiteDark,
        justifyContent: "center",
        alignItems: "center"
    },
    orderImg: {
        height: SizeConfig.blockHeight * 15,
        width: SizeConfig.blockWidth * 25,
    },
    uploadPrescTextContainer: {
        height: SizeConfig.blockHeight * 20,
        width: SizeConfig.blockWidth * 64,
        backgroundColor: COLORS.whiteDark,
        justifyContent: "space-evenly",


    },
    uploadPrescTitleText: {
        fontWeight: "700",
        fontSize: SizeConfig.blockHeight * 2.3
    },
    uploadPrescDescText: {
        fontSize: SizeConfig.blockHeight * 1.55
    },
    uploadPrescBtn: {
        height: SizeConfig.blockHeight * 4,
        width: SizeConfig.blockWidth * 50,
        backgroundColor: "#FF6F61",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    uploadPrescBtnText: {
        color: COLORS.whiteDark,
    },
    whatWouldContainer: {
        height: SizeConfig.blockHeight * 30,
        width: SizeConfig.blockWidth * 94,
        marginHorizontal: SizeConfig.blockWidth * 3,
    },
    whatWouldText: {
        fontWeight: "700",
        fontSize: SizeConfig.blockHeight * 2,
        marginVertical: SizeConfig.blockHeight * 1
    },
    WhatWouldComponentCOntainer: {
        height: SizeConfig.blockHeight * 25,
        width: SizeConfig.blockWidth * 94,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bestSellerContainer: {
        height: SizeConfig.blockHeight * 45,
        width: SizeConfig.blockWidth * 94,
        marginHorizontal: SizeConfig.blockWidth * 3,
    },
    bestSellerTitleContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: SizeConfig.blockHeight * 1
    },
    bestSellerText: {
        fontSize: SizeConfig.blockHeight * 2.2,
    },
    viewAllText: {
        fontSize: SizeConfig.blockHeight * 2.2,
        color: "#FF6F61",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blackExtraLight,
        marginRight: SizeConfig.blockWidth * 2,
    },
    combineContainer: {
        width: SizeConfig.blockWidth * 100,
        height: SizeConfig.blockHeight * 100,
        backgroundColor: COLORS.whiteDark,
        marginVertical: SizeConfig.blockHeight * 2,
    },
    featuredPopularContainer: {
        marginLeft: SizeConfig.blockWidth * 2,
        width: SizeConfig.blockWidth * 100,
    },
    featuredPopularTitleText: {
        fontWeight: "700",
        fontSize: SizeConfig.blockHeight * 2.2,
        marginTop: SizeConfig.blockHeight * 2.3,
    },
    adContainer: {
        width: SizeConfig.blockWidth * 96,
        marginHorizontal: SizeConfig.blockWidth * 2,
        height: SizeConfig.blockHeight * 20,
        marginVertical: SizeConfig.blockHeight * 5,
    },
    thatAllContainer: {
        width: SizeConfig.blockWidth * 100,
        height: SizeConfig.blockHeight * 7,
        backgroundColor: "#e9e9e9",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: SizeConfig.blockHeight * 2,
    },
    thatAllText: {
        color: "#FF6F61",
        fontSize: SizeConfig.blockHeight * 2.5
    }

});