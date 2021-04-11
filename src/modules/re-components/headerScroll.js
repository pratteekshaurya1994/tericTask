import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, PermissionsAndroid, Image } from 'react-native';
import { SizeConfig } from "../../constants/size-config";
import { COLORS } from "../../constants/colors";


const HeaderScroll = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.whatWouldImage}
        source={require('../../assets/food1.jpg')}
        resizeMode="contain"
      />
    </View>
  );
}

export default HeaderScroll;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.greenMedium,
    height: SizeConfig.blockHeight * 20,
    width: SizeConfig.blockWidth * 60,
    marginHorizontal: SizeConfig.blockWidth * 2
  },
  whatWouldImage: {
    height: SizeConfig.blockHeight * 20,
    width: SizeConfig.blockWidth * 60,
  }
});