import React from "react";
//import { ListWrapper } from "../styles";
import { CookieWrapper,  

   Description,
   GlobalStyle,
   ListWrapper,
   Title,
   ShopImage,
 } from "../styles";
// Styling
import styles from "../styles";

// Data
import cookies from "../cookies";

import CookieItem from "./CookieItem";





const cookieList = () => {
     let cookieList = cookies.map((cookie) => (
       <CookieItem cookie={cookie} key={cookie.id} />
 ));
 
    return (
       <div><Title>Cookies and Beyond</Title>
       <Description>Where cookie maniacs gather</Description>
       <ShopImage
  alt="cookie shop"
  src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
/>
       <ListWrapper >
       {/* {cookieList} */}
       
        <div>{cookieList}</div> 
     </ListWrapper></div>
    
    );
 };

 export default cookieList;




  