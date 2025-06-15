import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import Interstitial from "../Interstitial";
import { useContext } from "react";
import GlobalContext from "../../state/global-context";

const StyledToolbar = styled(Toolbar)({
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
});

const StyledShoppingBasketIcon = styled(ShoppingBasketIcon)(({ theme }) => ({
  color: theme.palette.light,
}));

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)(({ theme }) => ({
  color: theme.palette.light,
}));

const Header = () => {
  const context = useContext(GlobalContext);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    context.pushObject("open_interstitial", true);
  };

  return (
    <>
      <header>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <StyledToolbar>
              <Link href="/" passHref>
                <Typography variant="h4">SuperShop</Typography>
              </Link>
              <div>
                <IconButton
                  aria-label="shopping basket"
                  onClick={toggleDrawer(!context.open_interstitial)}
                  size="large"
                >
                  <StyledShoppingBasketIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="/wishlist"
                  aria-label="Wishlist"
                  sx={{ ml: 1 }}
                >
                  <Badge badgeContent={context.wishlist.length} color="error">
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
