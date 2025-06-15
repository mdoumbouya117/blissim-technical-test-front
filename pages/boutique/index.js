import DefaultLayout from "../../components/DefaultLayout";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductsList from "../../components/boutique/ProductsList";

const RootContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(5, 0),
}));

const FilterTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  color: theme.palette.primary.main,
}));

const FilterListItem = styled(ListItem)({
  paddingLeft: 0,
});

const Boutique = () => {
  return (
    <DefaultLayout>
      <RootContainer maxWidth="lg">
        <Grid container justifyContent={"center"}>
          <Grid>
            <PageTitle variant="h3" component="h1">
              SuperShop
            </PageTitle>
          </Grid>
        </Grid>

        <Grid container>
          <Grid size={{ xs: 12, md: 3 }}>
            <FilterTitle variant="h6">Catégories</FilterTitle>
            <div>
              <List>
                <FilterListItem>
                  <ListItemText primary="Maquillage" />
                </FilterListItem>
                <FilterListItem>
                  <ListItemText primary="Soins visage" />
                </FilterListItem>
                <FilterListItem>
                  <ListItemText primary="Parfums" />
                </FilterListItem>
              </List>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <ProductsList />
          </Grid>
        </Grid>
      </RootContainer>
    </DefaultLayout>
  );
};

export default Boutique;
