import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Props} from './types';

const Header: FC<Props> = props => {
  return (
    <View>
      <Text style={style.Title}>{props.title}</Text>
      <Text style={style.Title}>{props.name}</Text>
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
