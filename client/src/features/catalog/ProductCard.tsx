import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { purple } from "@mui/material/colors";
import {  Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Card sx={{ height: 370 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: {
              color: "#9c27b0",
              fontWeight: "fontWeightMedium",
            },
          }}
        />
        <CardMedia
          sx={{
            height: 160,
            backgroundSize: "contain",
            backgroundColor: "primary.light",
          }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            color="secondary"
            fontWeight="fontWeightBold"
          >
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">ADD TO CHART</Button>
          <Button
            size="medium"
            component={Link}
            to={`/catalog/${product.id}`} 
            color="primary"
          >
            VIEW
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
