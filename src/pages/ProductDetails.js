import React, {createContext, useState, useEffect} from 'react';
import { Await } from 'react-router-dom';

// create context
export const ProductContext = createContext ();
const ProductDetails = ({children}) => {
  //products state
  const[products, setProducts] = useState([]);
  // fetch products
  useEffect(() =>{
    const fetchProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products/1');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []) 
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductDetails;
