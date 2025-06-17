import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
}));

const Footer = () => {
  return (
    <FooterRoot>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}SuperSite{new Date().getFullYear()}
        {"."}
      </Typography>
    </FooterRoot>
  );
};

export default Footer;
