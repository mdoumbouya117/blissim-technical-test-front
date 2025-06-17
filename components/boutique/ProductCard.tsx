import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WishlistButton from "@/components/wishlist/WishlistButton";
import { styled } from "@mui/material/styles";
import { Product } from "@/types";
import { useGlobalState } from "@/state/global-context";

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
  maxHeight: 170,
  height: 140,
  width: "auto",
  margin: "auto",
});

const Name = styled(Typography)({
  fontSize: "1rem",
});

const ProductCard = ({ product }: { product: Product }) => {
  const { addProductToCart, pushObject } = useGlobalState();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addProductToCart(product);
    pushObject("open_interstitial", true);
  };

  return (
    <Root>
      <Content>
        <ThumbnailContainer>
          <Thumbnail image={product.image} title={product.title} />
        </ThumbnailContainer>
        <Name gutterBottom variant="h2">
          {product.title}
        </Name>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          aria-label={`Price: ${product.price} euros`}
        >
          {product.price} €
        </Typography>
      </Content>
      <CardActions>
        <IconButton
          aria-label="Add to cart"
          onClick={(e) => handleAddToCart(e, product)}
          size="large"
        >
          <ShoppingBasketIcon color="secondary" />
        </IconButton>
        <WishlistButton product={product} />
      </CardActions>
    </Root>
  );
};

export default ProductCard;
