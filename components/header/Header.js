import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
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
              <IconButton
                onClick={toggleDrawer(!context.open_interstitial)}
                size="large"
              >
                <StyledShoppingBasketIcon />
              </IconButton>
            </StyledToolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
    </>
  );
};

export default Header;
