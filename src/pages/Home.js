import React, {useContext} from 'react';
//import prduct context
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext)
 //get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );  
  });
  
  return <div>

  </div>;
};

export default Home;
