import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:5000/api/products");
      const products = await response.json();
      setProducts(products);
    } catch (e) {
      console.error("An error has occured:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewProduct = () => {
    //setProducts([...products, {name: 'product 3', price: 300.00}])
    setProducts((prev) => [
      ...prev,
      {
        id: 30,
        brand: "Nike",
        description: "Awesome shoes",
        name: "Running Snickers",
        pictureUrl: "https://www.google.com",
        price: 300,
        type: "Shoes",
      },
    ]);
  };

  return (
    <>
      <Typography variant="h1">Products</Typography>
      <Catalog products={products} addNewProduct={addNewProduct}/>
    </>
  );
}

export default App;
