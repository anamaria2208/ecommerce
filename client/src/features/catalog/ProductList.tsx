import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 12, md: 12, lg : 12 }} >
        {products.map((product: Product) => (
          <Grid key={product.id} lg={3} xs={12} sm={4} md={4}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
