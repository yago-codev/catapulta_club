import styled from 'styled-components/native';
import {TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  min-height: 42px;
  max-height: 42px;
  background-color: #f8f8f8;
  border-radius: 100px;
  padding: 13px 16px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding: 0 12px;
  color: #cbcbcb;
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs({
  size: 16,
  color: '#CBCBCB',
})``;
