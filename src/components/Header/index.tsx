import React, {FC} from 'react';

import {Props} from './types';

import * as S from './styles';

const Header: FC<Props> = props => {
  return (
    <S.Container>
      <S.Title>{props.title}</S.Title>
      <S.Name>{props.name}</S.Name>
    </S.Container>
  );
};

export default Header;
