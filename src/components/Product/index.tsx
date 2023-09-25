import React from 'react';

import * as S from './styles';

interface ProductProps {
  image: string;
  labelTitle: string;
  productTitle: string;
  productDescription: string;
  productPrice: string;
}

export function Product({
  image,
  labelTitle,
  productTitle,
  productDescription,
  productPrice,
}: ProductProps) {
  return (
    <S.Container>
      <S.Label>
        <S.LabelTitle>{labelTitle}</S.LabelTitle>
      </S.Label>
      <S.Img
        source={{
          uri: image,
        }}
      />
      <S.ProductTitlte>{productTitle}</S.ProductTitlte>
      <S.ProductDescription>{productDescription}</S.ProductDescription>
      <S.ProductPrice>{productPrice}</S.ProductPrice>
    </S.Container>
  );
}
