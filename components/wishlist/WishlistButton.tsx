import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useGlobalState } from "@/state/global-context";
import { Product } from "@/types";

const WishlistButton = ({ product }: { product: Product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useGlobalState();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleClick = () => {
    isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  return (
    <Tooltip title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}>
      <IconButton
        onClick={handleClick}
        color={isInWishlist ? "secondary" : "default"}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default WishlistButton;
