import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../features/fav/favSlice";
import ProductCard from "../components/ProductCard/ProductCard";
import './FavPage.scss';

function FavPage() {

    const dispatch = useDispatch();
    const favProducts = useSelector((state) => state.fav);

    const handleRemoveFromFav = (productId) => {
        dispatch(removeFromFav(productId));
    };

    return (
        <div className="main">
            <div className="main__wrapper">
                <h2 className="main__title">Favorite products</h2>
                <div className="main__product">
                    {favProducts.length > 0 ? (
                        favProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isFavPage={true}
                                handleRemoveFromFav={() => handleRemoveFromFav(product.id)}
                            />
                        ))
                    ) : (
                        <p className="fav__text">No favorite products found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FavPage;
