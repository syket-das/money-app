import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect } from 'react';
import useExchangeRateStore from '../store/exchangeRateStore';

const Calculator = () => {
  const { exchangeRates, getExchangeRates } = useExchangeRateStore(
    (state) => state
  );

  useEffect(() => {
    getExchangeRates();
  }, []);

  const lastIndex = exchangeRates.length - 1;
  const rate = exchangeRates[lastIndex]?.rate || 0;

  const [bdt, setBdt] = useState(0);
  const [inr, setInr] = useState(0);

  useEffect(() => {
    setInr(bdt * (rate / 100));
  }, [bdt]);

  useEffect(() => {
    setBdt(inr / (rate / 100));
  }, [inr]);

  return (
    <View>
      <View className="flex-row justify-between items-center gap-x-4">
        <View className="w-1/3">
          <Text className="mb-2 font-bold text-green-600 ml-2">BDT</Text>
          <TextInput
            className="border-2 border-gray-300 rounded-lg  p-2"
            value={
              bdt === 0
                ? 0
                : bdt.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
            }
            onChangeText={(text) => setBdt(text)}
          />
        </View>

        <Text className="text-2xl font-bold mt-4 ">
          <FontAwesome name="exchange" size={24} color={COLORS.primary} />
        </Text>
        <View className="w-1/3">
          <Text className="mb-2 font-bold text-blue-700 ml-2">INR</Text>
          <TextInput
            className="border-2 border-gray-300 rounded-lg   p-2"
            value={
              inr === 0
                ? 0
                : inr.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
            }
            onChangeText={(text) => setInr(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;
