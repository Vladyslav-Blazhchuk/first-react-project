import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import './CartPage.scss';
import Button from "../components/Button/Button";


function CartPage() {

    const cartProducts = useSelector((state) => state.cart);

    const totalPrice = cartProducts.reduce((accumulator, product) => {
        const price = parseFloat(product.price.replace(/\s+/g, ''));
        return accumulator + (price || 0);
    }, 0);

    return (
        <div className="main">
            <div className="main__wrapper">
                <h2 className="main__title">Cart</h2>
                <div className="main__product">
                    {cartProducts.length > 0 ? (
                        cartProducts.map((product, index) => (
                            <ProductCard
                                key={`${product.id}-${index}`}
                                product={product}
                                isCartPage={true}
                                uniqueKey={`${product.id}-${index}`}
                            />
                        ))
                    ) : (
                        <p className="cart__text">No products in cart.</p>
                    )}
                </div>
                <div className="main__footer-wrapper">
                    <p className="main__sum">Total: {totalPrice} ₴</p>
                    <Link to="/checkout">
                        <Button className={"main__btn-checkout"} disabled={cartProducts.length === 0}>
                            Checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartPage;
