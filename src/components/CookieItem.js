import React from "react";
import { CookieWrapper,  

  Description,
  GlobalStyle,
  ListWrapper,
  Title,
  ShopImage,
} from "../styles";
//import styles from "../styles";
import cookieList from "./CookieList";


const CookieItem = props => {
    const cookie = props.cookie;
    return (
      <CookieWrapper  key={cookie.id}>
          <img alt={cookie.name} src={cookie.image} />
          <p >{cookie.name}</p>
          <p className="cookie-price">{cookie.price} KD</p>
      </CookieWrapper>
    );
}



  export default CookieItem;