/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
} from 'react-native';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Momo() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const featureIconAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -50],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const textInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const collapsedDepositIconAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 45],
          outputRange: [0, 1],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 70],
          outputRange: [120, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  const collapsedWithdrawIconAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 45],
          outputRange: [0, 1],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 70],
          outputRange: [120, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  const collapsedQRIconAnimation = {
    transform: [
      // {
      //   translateX: animatedValue.interpolate({
      //     inputRange: [0, 45],
      //     outputRange: [0, 1],
      //   }),
      // },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 70],
          outputRange: [120, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  const collapsedScanIconAnimation = {
    transform: [
      // {
      //   translateX: animatedValue.interpolate({
      //     inputRange: [0, 45],
      //     outputRange: [0, 1],
      //   }),
      // },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 70],
          outputRange: [120, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.staticHeader}>
        <SafeAreaView />
        <View style={styles.staticHeaderRow}>
          <Image
            source={require('../../assets/images/momo/search.png')}
            style={[styles.icon16, {marginLeft: 24}]}
          />
          <AnimatedTextInput
            placeholder="Tìm kiếm"
            placeholderTextColor="rgba(255, 255, 255, 0.8)"
            style={[styles.searchInput, textInputAnimation]}
          />

          <Animated.Image
            source={require('../../assets/images/momo/deposit.png')}
            style={[styles.icon16, collapsedDepositIconAnimation]}
          />
          <Animated.Image
            source={require('../../assets/images/momo/withdraw.png')}
            style={[styles.icon16, collapsedWithdrawIconAnimation]}
          />
          <Animated.Image
            source={require('../../assets/images/momo/qr.png')}
            style={[styles.icon16, collapsedQRIconAnimation]}
          />
          <Animated.Image
            source={require('../../assets/images/momo/scan.png')}
            style={[styles.icon16, collapsedScanIconAnimation]}
          />

          <Image
            source={require('../../assets/images/momo/bell.png')}
            style={styles.icon16}
          />
          <Image
            source={require('../../assets/images/momo/avatar.png')}
            style={styles.avatar}
          />
        </View>
      </View>

      <View style={[styles.collapsibleHeader]}>
        <Animated.View style={[styles.feature, featureIconAnimation]}>
          <Image
            source={require('../../assets/images/momo/deposit-circle.png')}
            style={styles.featureIcon}
          />
          <Text style={styles.featureName}>NẠP TIỀN</Text>
        </Animated.View>
        <Animated.View style={[styles.feature, featureIconAnimation]}>
          <Image
            source={require('../../assets/images/momo/withdraw-circle.png')}
            style={styles.featureIcon}
          />
          <Text style={styles.featureName}>RÚT TIỀN</Text>
        </Animated.View>
        <Animated.View style={[styles.feature, featureIconAnimation]}>
          <Image
            source={require('../../assets/images/momo/qr-circle.png')}
            style={styles.featureIcon}
          />
          <Text style={styles.featureName}>MÃ QR</Text>
        </Animated.View>
        <Animated.View style={[styles.feature, featureIconAnimation]}>
          <Image
            source={require('../../assets/images/momo/scan-circle.png')}
            style={styles.featureIcon}
          />
          <Text style={styles.featureName}>QUÉT MÃ</Text>
        </Animated.View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: animatedValue},
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <View style={styles.spaceForHeader} />
        <View style={{height: 815, backgroundColor: 'white'}} />
      </ScrollView>
    </View>
  );
}
const STATIC_HEADER_HEIGHT = 80;
const COLLAPSIBLE_HEADER_HEIGHT = 96;
const styles = StyleSheet.create({
  staticHeader: {
    width: '100%',
    height: STATIC_HEADER_HEIGHT,
    backgroundColor: '#AF0C6E',
  },
  staticHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon16: {
    width: 16,
    height: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  collapsibleHeader: {
    position: 'absolute',
    marginTop: STATIC_HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: COLLAPSIBLE_HEADER_HEIGHT,
    paddingHorizontal: 16,
    backgroundColor: '#AF0C6E',
  },
  container: {
    flex: 1,
  },
  spaceForHeader: {
    height: COLLAPSIBLE_HEADER_HEIGHT,
  },
  searchInput: {
    position: 'absolute',
    width: '66%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 8,
    paddingLeft: 32,
    marginLeft: 16,
  },
  feature: {
    alignItems: 'center',
  },
  featureIcon: {
    width: 32,
    height: 32,
  },
  featureName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 12,
  },
});
