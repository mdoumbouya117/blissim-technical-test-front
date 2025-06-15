import DefaultLayout from "../components/DefaultLayout";
import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));

const Home = () => {
  return (
    <DefaultLayout>
      <StyledContainer maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          SuperShop
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
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
    </DefaultLayout>
  );
};

export default Home;
