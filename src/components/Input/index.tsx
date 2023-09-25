import React from 'react';
import {TextInputProps} from 'react-native';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

import * as S from './styles';

export function Input({...rest}: TextInputProps) {
  return (
    <S.Container>
      <S.SearchIcon icon={faSearch} />
      <S.Input {...rest} />
    </S.Container>
  );
}
