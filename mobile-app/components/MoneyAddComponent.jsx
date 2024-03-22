import { View, Text } from 'react-native';
import React from 'react';

const MoneyAddComponent = ({ props }) => {
  return (
    <View
      className="
       border-b border-gray-300 p-4
    "
    >
      <View className="flex-row justify-between mt-4">
        <Text className="text-lg font-bold">BDT {props.bdt}</Text>
        <Text className="text-sm">
          {new Date(props.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="text-xs text-red-700">
          {props?.exchangeRate?.rate}
        </Text>
        <Text className="text-sm">{props.status}</Text>
      </View>
    </View>
  );
};

export default MoneyAddComponent;
