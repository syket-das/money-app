import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import useMoneyStore from '../store/moneyStore';

const WithdrawMoneyRequest = () => {
  const { withdrawMoneyRequest } = useMoneyStore((state) => state);

  const [data, setData] = useState({
    bdt: 0,
    accountNumber: '',
    method: '',
    message: '',
  });

  const handleWithdrawMoneyRequest = async () => {
    try {
      await withdrawMoneyRequest(data);

      setData({
        bdt: 0,
        accountNumber: '',
        method: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginHorizontal: 22 }}
      >
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Withdraw Money Request
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: 'red',
              marginBottom: 12,
            }}
          >
            Please note that Current exchange rate will be applied and the money
            will be sent to the given account.
          </Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            BDT
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter bdt amount "
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{
                width: '100%',
              }}
              value={
                data.bdt === 0
                  ? 0
                  : data.bdt.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
              }
              onChangeText={(text) => setData({ ...data, bdt: text })}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Account Number
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter account number"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{
                width: '100%',
              }}
              value={data.accountNumber}
              onChangeText={(text) => setData({ ...data, accountNumber: text })}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Method
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="eg. Bkash, Rocket, Nagad, Bank name"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{
                width: '100%',
              }}
              value={data.method}
              onChangeText={(text) => setData({ ...data, method: text })}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Message
          </Text>

          <View
            style={{
              width: '100%',
              height: 100,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              multiline
              placeholder="any message for admin"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{
                width: '100%',
                height: 100,
                paddingEnd: 22,
              }}
              value={data.message}
              onChangeText={(text) => setData({ ...data, message: text })}
            />
          </View>
        </View>
        <Button
          onPress={handleWithdrawMoneyRequest}
          title="Withdraw Money"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WithdrawMoneyRequest;
