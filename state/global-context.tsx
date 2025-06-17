import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useMemo,
} from "react";
import { Product } from "@/types";

interface GlobalState {
  open_interstitial: boolean;
  cart: Product[];
  wishlist: Product[];
}

interface GlobalActions {
  pushObject: <K extends keyof GlobalState>(
    key: K,
    value: GlobalState[K]
  ) => void;
  addProductToCart: (product: Product) => void;
  removeProductToCart: (id: string | number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string | number) => void;
}

type GlobalContextType = GlobalState & GlobalActions;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, setState] = useState<GlobalState>({
    open_interstitial: false,
    cart: [],
    wishlist: [],
  });

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("cart") ?? "[]");
    const wishlist = JSON.parse(sessionStorage.getItem("wishlist") ?? "[]");
    setState((prev) => ({
      ...prev,
      cart,
      wishlist,
    }));
  }, []);

  const pushObject = useCallback(
    <K extends keyof GlobalState>(key: K, value: GlobalState[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const addProductToCart = useCallback((product: Product) => {
    setState((prev) => {
      const newCart = [...prev.cart, product];
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      return { ...prev, cart: newCart };
    });
  }, []);

  const removeProductToCart = useCallback((id: string | number) => {
    setState((prev) => {
      const newCart = prev.cart.filter((p) => p.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      return { ...prev, cart: newCart };
    });
  }, []);

  const addToWishlist = useCallback((product: Product) => {
    setState((prev) => {
      if (prev.wishlist.some((item) => item.id === product.id)) {
        return prev;
      }
      const newWishlist = [...prev.wishlist, product];
      sessionStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return { ...prev, wishlist: newWishlist };
    });
  }, []);

  const removeFromWishlist = useCallback((id: string | number) => {
    setState((prev) => {
      const newWishlist = prev.wishlist.filter((item) => item.id !== id);
      sessionStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return { ...prev, wishlist: newWishlist };
    });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      pushObject,
      addProductToCart,
      removeProductToCart,
      addToWishlist,
      removeFromWishlist,
    }),
    [state.cart, state.wishlist, state.open_interstitial]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};
