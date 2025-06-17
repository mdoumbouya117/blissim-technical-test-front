import DefaultLayout from "@/components/DefaultLayout";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductsList from "@/components/boutique/ProductsList";

const RootContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(5, 0),
}));

const Boutique = () => {
  return (
    <DefaultLayout>
      <RootContainer maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid>
            <PageTitle variant="h2">SuperShop</PageTitle>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <ProductsList />
        </Grid>
      </RootContainer>
    </DefaultLayout>
  );
};

export default Boutique;
