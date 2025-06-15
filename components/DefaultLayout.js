import Header from "./header/Header";
import Footer from "./footer/Footer";
import { styled } from "@mui/material/styles";

const Root = styled("div")({
  minHeight: "100vh",
});

const DefaultLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default DefaultLayout;
