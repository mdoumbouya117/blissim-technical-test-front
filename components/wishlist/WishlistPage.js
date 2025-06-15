import { Container, Grid, Typography, Button } from "@mui/material";
import { useContext } from "react";
import Link from "next/link";
import ProductCard from "../boutique/ProductCard";
import GlobalContext from "../../state/global-context";

const WishlistPage = () => {
  const context = useContext(GlobalContext);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h3" component="h1" gutterBottom>
          My Wishlist
        </Typography>
      </Grid>

      {context.wishlist.length === 0 ? (
        <Grid container direction="column" textAlign="center">
          <Grid>
            <Typography variant="body1">
              Your wishlist is empty.&nbsp;
            </Typography>
          </Grid>
          <Grid>
            <Link href="/boutique">
              <Button variant="contained">Browse products</Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {context.wishlist.map((product) => (
            <Grid size={{ xs: 6, md: 4 }} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default WishlistPage;
