import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { memo, useContext } from "react";
import GlobalContext from "../../state/global-context";

const WishlistButton = memo(({ product }) => {
  const context = useContext(GlobalContext);
  const isInWishlist = context.wishlist.some((item) => item.id === product.id);

  const handleClick = () => {
    if (isInWishlist) {
      context.removeFromWishlist(product.id);
    } else {
      context.addToWishlist(product);
    }
  };

  return (
    <Tooltip title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}>
      <IconButton
        onClick={handleClick}
        color={isInWishlist ? "secondary" : "default"}
        aria-label="wishlist"
      >
        {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
});

export default WishlistButton;
