import DefaultLayout from "../components/DefaultLayout";
import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import BlissimBanner from "../components/blissimBanner/BlissimBanner";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));

const Home = () => {
  return (
    <DefaultLayout>
      <StyledContainer maxWidth="sm">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          SuperShop
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid>
              <Link href="/boutique">
                <Button variant="contained">La Boutique</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </StyledContainer>
      <BlissimBanner />
    </DefaultLayout>
  );
};

export default Home;
