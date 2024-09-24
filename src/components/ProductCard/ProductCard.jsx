import Button from '../Button/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ModalImage from "../Modal/ModalImage/ModalImage.jsx";
import ModalClose from '../Modal/ModalClose/ModalClose.jsx';
import ModalClosing from '../Modal/ModalClosing/ModalClosing.jsx';
import './ProductCard.scss';
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from '../../features/cart/cartSlice';
import { addToFav, removeFromFav } from '../../features/fav/favSlice';
import { openModal, closeModal } from '../../features/modal/modalSlice.jsx';


function ProductCard({ product, isCartPage, uniqueKey }) {

    const dispatch = useDispatch();
    const fav = useSelector((state) => state.fav);
    const modals = useSelector((state) => state.modals);

    const isProductInFav = fav.some(item => item.id === product.id);

    const handleFavClick = (e) => {
        e.stopPropagation();
        if (isProductInFav) {
            dispatch(removeFromFav(product.id));
        } else {
            dispatch(addToFav(product));
        }
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(openModal({ modalType: 'isImageModalOpen', uniqueKey }));
    };

    const handleRemoveFromCart = (e) => {
        e.stopPropagation();
        dispatch(openModal({ modalType: 'isConfirmRemoveOpen', uniqueKey }));
    }

    return (
        <div className="main__products">
            <img
                className="main__product-img"
                src={product.image}
                alt={product.name}
            />
            <h3 className="main__product-name">{product.name}</h3>
            <p className="main__product-price">{product.price} ₴</p>
            <div className="main__button-wrapper">
                <Button
                    className={"main__btn-cart"}
                    onClick={handleAddToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Button>
                <Button
                    className={"main__btn-fav"}
                    onClick={handleFavClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none" className={isProductInFav ? 'main__btn-fav__active' : ''}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Button>
                {isCartPage && (
                    <Button
                        className={"main__btn-remove"}
                        onClick={handleRemoveFromCart}>
                        <ModalClose />
                    </Button>
                )}
            </div>
            {modals.openModals[uniqueKey]?.['isImageModalOpen'] && (
                <ModalImage
                    product={product}
                    onClose={() => dispatch(closeModal({ modalType: 'isImageModalOpen', uniqueKey }))}
                    onAddToCart={() => {
                        dispatch(addToCart({ ...product, uniqueKey }));
                        dispatch(closeModal({ modalType: 'isImageModalOpen', uniqueKey }));
                    }}
                />
            )}
            {modals.openModals[uniqueKey]?.['isConfirmRemoveOpen'] && (
                <ModalClosing
                    product={product}
                    uniqueKey={uniqueKey}
                />
            )}
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    isCartPage: PropTypes.bool,
    uniqueKey: PropTypes.string.isRequired,
};

export default ProductCard;
