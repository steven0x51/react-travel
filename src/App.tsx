import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { MenuProps, message } from 'antd';
import { Header, Footer } from "./components"

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};



function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
