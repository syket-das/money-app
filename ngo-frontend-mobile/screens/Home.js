import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
import RateBarChart from '../components/charts/RateBarChart';
import Calculator from '../components/Calculator';
import useExchangeRateStore from '../store/exchangeRateStore';
import useUserStore from '../store/userStore';
const Home = () => {
  const { exchangeRates, getExchangeRates } = useExchangeRateStore(
    (state) => state
  );

  const { user, userErr, getUser, clearUserErr } = useUserStore(
    (state) => state
  );

  useEffect(() => {
    getExchangeRates();
    getUser();
  }, []);

  return (
    <View className="px-4">
      <StatusBar barStyle="light-content" />
      <View className="flex-row justify-between mt-8">
        <View>
          <View className="flex-row items-center">
            <Text className=" text-2xl font-bold">Hello,</Text>
            <Text className=" text-2xl font-bold ml-1">
              {user?.name.split(' ')[0]}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-x-2">
          <Text className=" font-bold">BDT 5000</Text>
          <MaterialCommunityIcons name="wallet" size={24} />
        </View>
      </View>

      <View className="mt-8">
        <View className="flex-row items-center justify-between">
          <Text className=" text-lg font-bold mb-4">Today's Rate </Text>
          <Text className=" text-2xl text-red-600 font-bold mb-4">
            {/* last rate */}
            {exchangeRates.length > 0
              ? exchangeRates[exchangeRates.length - 1].rate
              : '0'}

            <Entypo name="arrow-up" size={24} />
          </Text>
        </View>

        <RateBarChart />
      </View>

      <View className="mt-8">
        <View className="flex-row items-center justify-between">
          <Text className=" text-lg font-bold mb-4">Exchange Calculator</Text>
        </View>
        <Calculator />
      </View>
    </View>
  );
};

export default Home;
