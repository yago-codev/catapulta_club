import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './src/components/Header';

function App() {
  return (
    <SafeAreaView style={style.App}>
      <Header />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },
});

export default App;
