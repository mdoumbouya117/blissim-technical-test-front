import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../state/global-context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

const InterstitialRoot = styled("div")(({ theme }) => ({
  width: "350px",
  padding: theme.spacing(2),
}));

const ProductListContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ProductItem = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative",
  display: "flex",
}));

const ProductItemImg = styled(CardMedia)(({ theme }) => ({
  width: "100px",
  height: "auto",
  maxHeight: "90px",
  marginRight: theme.spacing(2),
}));

const DeleteButton = styled(IconButton)({
  position: "absolute",
  right: 0,
  bottom: 0,
});

const Interstitial = () => {
  const context = useContext(GlobalContext);
  const cart = context.cart;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice();
  });

  const handleRemoveProduct = (id) => {
    context.removeProductToCart(id);
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((p) => {
      total += p.price;
    });
    setTotalPrice(total);
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={context.open_interstitial}
      onClose={() => context.pushObject("open_interstitial", false)}
      onOpen={() => context.pushObject("open_interstitial", false)}
    >
      <InterstitialRoot>
        <ProductListContainer container alignItems="center">
          <Grid>
            <IconButton
              onClick={() => context.pushObject("open_interstitial", false)}
              size="large"
            >
              <ArrowBackIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid>
            <Typography variant="h5">Mon panier</Typography>
          </Grid>
        </ProductListContainer>

        <ProductListContainer container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography>
              {context.cart.length > 1
                ? `${context.cart.length} produits`
                : `${context.cart.length} produit`}
            </Typography>
          </Grid>

          {cart.map((product) => (
            <Grid size={{ xs: 12 }} key={product.id}>
              <ProductItem>
                <ProductItemImg
                  component="img"
                  alt={product.title}
                  image={product.image}
                  title="Contemplative Reptile"
                />
                <div>
                  <Typography>{product.title}</Typography>
                  <Typography>{product.price}euros</Typography>
                  <DeleteButton
                    onClick={() => handleRemoveProduct(product.id)}
                    size="large"
                  >
                    <DeleteIcon color="secondary" />
                  </DeleteButton>
                </div>
              </ProductItem>
            </Grid>
          ))}
        </ProductListContainer>

        <Typography gutterBottom>
          Prix total : {totalPrice} {totalPrice > 1 ? "euros" : "euro"}
        </Typography>
        <Button color="primary" variant="contained">
          Commander
        </Button>
      </InterstitialRoot>
    </SwipeableDrawer>
  );
};

export default Interstitial;
