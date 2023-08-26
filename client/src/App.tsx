import { useEffect, useState } from "react";
import {Product} from './product'

       
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async ( ) => {
    try {
      const response = await fetch('https://localhost:5000/api/products')
      const products = await response.json();
      setProducts(products)
    }
    catch(e) {
      console.error("An error has occured:", e)
    }
  }

  useEffect(  () => {
    fetchData()
  }, [])

  const addNewProduct = () => {
    //setProducts([...products, {name: 'product 3', price: 300.00}])
    //setProducts(prev => [...prev, {name: 'product 3', price: 300.00}])
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => <li key={index}>{product.name} {product.price}</li>)}
      </ul>
      <button onClick={addNewProduct}>Add new Product</button>
    </>
  );
}

export default App;
