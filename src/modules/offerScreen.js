import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SizeConfig } from "../constants/size-config";
import { COLORS } from "../constants/colors";
import { ScrollView } from 'react-native-gesture-handler';
import OfferCombo from "./re-components/offerCompo";


const OfferScreen = ({ navigation }) => {

  //   useEffect(() => {
  //     setTimeout(() => {

  //       navigation.replace('TabScreen');
  //     }, 3000);
  //   }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={[styles.headerText, { fontSize: SizeConfig.blockHeight * 4 }]}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={[styles.headerText, { marginLeft: SizeConfig.blockWidth * 2 }]}>All Offers</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bhanu Pharmacy Coupons/Offers</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageCompo}>
          <OfferCombo />
        </View>
        <View style={styles.imageCompo}>
          <OfferCombo />
        </View>
        <View style={styles.imageCompo}>
          <OfferCombo />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default OfferScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.whiteMedium,
  },
  headerContainer: {
    height: SizeConfig.blockHeight * 6,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: COLORS.blackDark,
    fontSize: SizeConfig.blockHeight * 2.5,
  },
  titleContainer: {
    height: SizeConfig.blockHeight * 6,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",

  },
  titleText: {
    fontSize: SizeConfig.blockHeight * 2.5
  },
  imageCompo: {
    height: SizeConfig.blockHeight * 30,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    marginVertical: SizeConfig.blockHeight * 2,
    // backgroundColor: "red",
  }
});