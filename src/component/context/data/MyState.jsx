import React, { useState } from 'react';
import MyContext from './myContext';
import { Timestamp } from 'firebase/firestore';

const MyState = ({ children }) => {
    //useState for initilized initial product
  const [products, setProducts] = useState({
    title:"",
    imageURL :"" ,
    price:"",
    category:"",
    time: Timestamp.now(),
    date : new Date().toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    )
  });
  //create a fonction for add product

  return (
    <MyContext.Provider value={{products}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
