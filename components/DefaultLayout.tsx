import Header from "./header/Header";
import Footer from "./footer/Footer";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const Root = styled("div")({
  minHeight: "100vh",
});

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Root>
      <Header />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};

export default DefaultLayout;
