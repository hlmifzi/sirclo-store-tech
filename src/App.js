import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HomeProvider } from './page/home/provider/HomeContext'
import Home from './page/home/Home'
import './scss/main.scss';

function App() {
  return (
    <>
      <HomeProvider >
        <Home />
      </HomeProvider>
    </>
  );
}

export default hot(App);
