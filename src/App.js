import React from 'react';
import { hot } from 'react-hot-loader/root';

import Home from './page/home/Home'
import './scss/main.scss';

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default hot(App);
