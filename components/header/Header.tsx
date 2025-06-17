import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useGlobalState } from "@/state/global-context";
import { KeyboardEvent, MouseEvent } from "react";
import Interstitial from "@/components/Interstitial";

const StyledToolbar = styled(Toolbar)({
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
});

const StyledShoppingBasketIcon = styled(ShoppingBasketIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const Header = () => {
  const { open_interstitial, cart, wishlist, pushObject } = useGlobalState();

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      pushObject("open_interstitial", open);
    };

  return (
    <>
      <header>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <StyledToolbar>
              <Link href="/" passHref>
                <Typography variant="h4" component="h1">
                  SuperShop
                </Typography>
              </Link>
              <div>
                <IconButton
                  aria-label="Shopping cart"
                  onClick={toggleDrawer(!open_interstitial)}
                  size="large"
                >
                  <Badge badgeContent={cart.length} color="error" max={99}>
                    <StyledShoppingBasketIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  component={Link}
                  href="/wishlist"
                  aria-label="Wishlist"
                  sx={{ ml: 1 }}
                >
                  <Badge badgeContent={wishlist.length} color="error" max={99}>
                    <StyledFavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </div>
            </StyledToolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
    </>
  );
};

export default Header;
