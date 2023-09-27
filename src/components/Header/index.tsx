import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: FC = () => {
  return (
    <View>
      <Text style={style.Title}>Olá</Text>
      <Text style={style.Title}>Yago</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Title: {
    color: 'black',
    fontSize: 30,
  },
  Subtitle: {
    color: 'black',
    fontSize: 15,
  },
});

export default Header;
