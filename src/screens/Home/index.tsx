/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';

import {Alert} from 'react-native';
import {isAxiosError} from 'axios';

import {Input} from '../../components/Input';
import {Product} from '../../components/Product';

import {IProduct, productsAPI} from '../../services/products';

import * as S from './styles';
import {formatPrice} from '../../helpers';

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [textInput, setTextInput] = useState('');

  const getProducts = async () => {
    try {
      const response = await productsAPI();

      if (response.data) {
        setProducts(response.data);
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        Alert.alert(error.message);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const RenderProducts = ({product}: {product: IProduct}) => (
    <S.ContainerProducts>
      <Product
        labelTitle={product.category}
        image={product.image}
        productTitle={product.title}
        productDescription={product.description}
        productPrice={formatPrice(product.price)}
      />
    </S.ContainerProducts>
  );

  const handleChangeInput = (event: string) => {
    const term = event.toLowerCase();
    setTextInput(term);
  };

  const handleSubmit = async () => {
    if (textInput.length > 0) {
      const productsFiltered = products.filter(product =>
        product.title.toLowerCase().includes(textInput),
      );
      setProducts(productsFiltered);
    }

    if (textInput.length === 0) {
      getProducts();
    }
  };

  return (
    <S.Container>
      <S.ContainerInput>
        <Input
          onChangeText={event => handleChangeInput(event)}
          onSubmitEditing={() => handleSubmit()}
        />
      </S.ContainerInput>
      <S.FlatListProducts
        data={products}
        renderItem={({item}) => <RenderProducts product={item} />}
        keyExtractor={item => String(item.id)}
        numColumns={2}
      />
    </S.Container>
  );
}
