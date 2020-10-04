import React from 'react';
import logo from './logo.svg';
import './App.css';
import CookieList from "./components/CookieList";
import styled ,{ ThemeProvider } from "styled-components";

import { GlobalStyle ,Description, ShopImage, Title } from "./styles";
const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#00FFFF", // main background color
  pink: "#ff85a2",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
