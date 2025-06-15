import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext } from "react";
import GlobalContext from "../../state/global-context";
import { styled } from "@mui/material/styles";

const Root = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const Content = styled(CardContent)({
  width: "100%",
});

const ThumbnailContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

const Thumbnail = styled(CardMedia)({
  maxHeight: "170px",
  width: "auto",
  margin: "auto",
});

const Name = styled(Typography)({
  fontSize: "1rem",
});

const ProductCard = ({ product }) => {
  const context = useContext(GlobalContext);

  const handleAddToCart = (e, product) => {
    context.addProductToCart(
      product,
      context.pushObject("open_interstitial", true)
    );
  };

  return (
    <Root>
      <Content>
        <ThumbnailContainer>
          <Thumbnail
            component="img"
            alt={product.title}
            image={product.image}
            title="Contemplative Reptile"
          />
        </ThumbnailContainer>
        <Name gutterBottom component="h2">
          {product.title}
        </Name>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.price}
        </Typography>
      </Content>
      <CardActions>
        <IconButton onClick={(e) => handleAddToCart(e, product)} size="large">
          <ShoppingBasketIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Root>
  );
};

export default ProductCard;
