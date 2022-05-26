import React from 'react';
import './App.css';
import AppHeader from './component/Header/Header';
import List from './component/list/list';
import Card from './component/card/card';
import BestSeller from './component/BestSeller/bestseller';
import Footer from './component/footer/footer';

import 'antd/dist/antd.css';



function App() {
  return (
    <div className="App">
      <AppHeader />
      <List />
      <Card />
      <BestSeller />
      <Footer />
    </div>
  );
}

export default App;
