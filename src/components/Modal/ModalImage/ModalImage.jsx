import Modal from "../Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody"
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalClose from "../ModalClose/ModalClose";
import './ModalImage.scss';
import PropTypes from "prop-types";


function ModalImage({ onClose, product, onAddToCart, }) {

    if (!product) {
        console.error('Product is undefined or null');
        return null;
    }

    return (
        <Modal onClose={onClose}>
            <ModalClose onClick={onClose} />
            <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
            </div>
            <ModalHeader>
                {product.name}
            </ModalHeader>
            <ModalBody>
                <p className="description">{product.description}</p>
            </ModalBody>
            <ModalFooter
                firstText="No, cancel"
                firstClick={onClose}
                secondaryText="Add to cart"
                secondaryClick={() => {
                    onAddToCart(product);
                    onClose();
                }}
            />
        </Modal>
    );
}

ModalImage.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
    onAddToCart: PropTypes.func.isRequired,
};

export default ModalImage;
