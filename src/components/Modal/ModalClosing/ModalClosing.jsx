import Modal from "../Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody"
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalClose from "../ModalClose/ModalClose";
import { useDispatch } from 'react-redux';
import { removeFromCart } from "../../../features/cart/cartSlice";
import { closeModal } from "../../../features/modal/modalSlice";

function ModalClosing({ uniqueKey, product, }) {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal({ modalType: 'isConfirmRemoveOpen', uniqueKey }));
    }

    const handleRemove = () => {
        dispatch(removeFromCart({ id: product.id, uniqueKey }));
        handleClose();
    };

    return (
        <Modal onClose={handleClose}>
            <ModalClose onClick={handleClose} />
            <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
            </div>
            <ModalHeader>
                Are you sure you want to delete this product?
            </ModalHeader>
            <ModalBody>
                <p className="description">By clicking the "Yes, delete" button, {product.name} will be deleted!</p>
            </ModalBody>
            <ModalFooter
                firstText="No, cancel"
                firstClick={handleClose}
                secondaryText="Yes, delete"
                secondaryClick={handleRemove}
            />
        </Modal>
    )
}

export default ModalClosing;
