import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addNewProduct: () => void;
}

const Catalog = ({ products, addNewProduct }: Props) => {
  return (
    <>
      <List>
        {products.map((product: Product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
                {product.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addNewProduct}>
        Add new Product
      </Button>
    </>
  );
};

export default Catalog;
