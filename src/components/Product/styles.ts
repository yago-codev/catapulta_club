import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  border: 2px solid #f8f8f8;
  justify-content: flex-start;
  padding: 10px 12px;
`;

export const Label = styled(View)`
  align-items: center;
  background-color: #281f67;
  border-radius: 100px;
  padding: 4px 9px;
`;

export const LabelTitle = styled(Text)`
  color: #ffffff;
`;

export const Img = styled(Image).attrs({
  height: 91,
  resizeMode: 'contain',
})`
  margin: 13px 0 25px 0;
`;

export const ProductTitlte = styled(Text)`
  color: #000000;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

export const ProductDescription = styled(Text).attrs({
  numberOfLines: 2,
})`
  color: #626262;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
`;

export const ProductPrice = styled(Text)`
  color: #281f67;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-top: 19px;
`;
