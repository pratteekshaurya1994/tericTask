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
import { useDispatch, useSelector } from 'react-redux';

import * as offerAction from '../redux/action/offerAction';


const OfferScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const createCodeReducer = useSelector(
    (state) => state.createCodeReducer,
  );

  useEffect(() => {
    dispatch(offerAction.BestCodeAction(onSuccess, onError));

    // console.log("bestSeller: ", bestSeller);
  }, [onSuccess]);

  const onSuccess = (res) => {

  };
  const onError = (message) => {
    console.log(message);

  };

  const [items, setItems] = useState([]);
  React.useEffect(() => {
    // console.log("yayy: ",createCodeReducer);
    setItems(createCodeReducer.data.product);
    // console.log("home1: ",createBestSellerReducer.data.product);
  }, [createCodeReducer.data.product]);

  console.log("itemsOffer: ", items);

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
        {!createCodeReducer.loading &&
          items?.map((item, index) => {
            return (
              <View style={styles.imageCompo}>
                <OfferCombo
                  key={index.toString()}
                  code={item.code}
                />
              </View>
            );
          })}
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