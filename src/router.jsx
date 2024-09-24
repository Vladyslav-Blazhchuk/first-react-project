import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavPage from "./pages/FavPage";
import Main from "./components/Main/Main";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { ToggleViewProvider } from "./components/Main/ToggleViewContext/ToggleViewContext";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <ToggleViewProvider>
                    <Main />
                </ToggleViewProvider>
            },
            {
                path: '/fav',
                element: <FavPage />
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: '/checkout',
                element: <CheckoutPage />
            }
        ]
    }
]);
