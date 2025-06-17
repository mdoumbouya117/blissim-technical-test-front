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
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalState } from "@/state/global-context";

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
  const { cart, removeProductToCart, open_interstitial, pushObject } =
    useGlobalState();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const handleRemoveProduct = (id: string | number) => {
    removeProductToCart(id);
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((p) => {
      total += p.price;
    });
    setTotalPrice(Number(total.toFixed(2)));
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open_interstitial}
      onClose={() => pushObject("open_interstitial", false)}
      onOpen={() => pushObject("open_interstitial", false)}
    >
      <InterstitialRoot>
        <ProductListContainer container alignItems="center">
          <Grid>
            <IconButton
              aria-label="back"
              onClick={() => pushObject("open_interstitial", false)}
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
              {cart.length > 1
                ? `${cart.length} produits`
                : `${cart.length} produit`}
            </Typography>
          </Grid>

          {cart.map((product, index) => (
            <Grid size={{ xs: 12 }} key={`${product.id}_${index}`}>
              <ProductItem>
                <ProductItemImg image={product.image} title={product.title} />
                <div>
                  <Typography>{product.title}</Typography>
                  <Typography>{product.price} €</Typography>
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

        {cart.length > 0 && (
          <>
            <Typography gutterBottom>Prix total : {totalPrice} €</Typography>
            <Button color="primary" variant="contained">
              Commander
            </Button>
          </>
        )}
      </InterstitialRoot>
    </SwipeableDrawer>
  );
};

export default Interstitial;
