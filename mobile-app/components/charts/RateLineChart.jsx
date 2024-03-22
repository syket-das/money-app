import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-gifted-charts';

const RateLineChart = () => {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  return (
    <LineChart
      width={Dimensions.get('window').width - 100}
      areaChart
      data={data}
    />
  );
};

export default RateLineChart;
