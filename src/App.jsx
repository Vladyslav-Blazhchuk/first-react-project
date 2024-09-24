import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./AppContext";
import { fetchProducts } from "./features/products/productsSlice";
import { addToCart, removeFromCart } from "./features/cart/cartSlice";
import { addToFav, removeFromFav } from "./features/fav/favSlice";

function App() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const isProductInFav = (productId) => {
    return fav.some((favProduct) => favProduct.id === productId);
  };

  return (
    <AppContext.Provider value={{
      products,
      addToCart: (product) => dispatch(addToCart(product)),
      addToFav: (product) => dispatch(addToFav(product)),
      removeFromFav: (productId) => dispatch(removeFromFav(productId)),
      removeFromCart: (productId) => dispatch(removeFromCart(productId)),
      isProductInFav
    }}>
      <Header cartCount={cart.length} favCount={fav.length} />
      <Outlet />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
