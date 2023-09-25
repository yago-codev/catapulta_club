import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
`;
export const ContainerInput = styled(View)`
  margin-top: 10px;
`;

export const FlatListProducts = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 30px;
  padding: 0 20px 0 0;
`;

export const ContainerProducts = styled(View)`
  max-width: 50%;
  flex-direction: row;
  margin-right: 20px;
  margin-bottom: 30px;
`;
