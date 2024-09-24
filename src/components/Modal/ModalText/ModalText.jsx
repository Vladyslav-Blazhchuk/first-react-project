import React from "react";
import Modal from "../Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody"
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalClose from "../ModalClose/ModalClose";
import PropType from "prop-types";
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../features/modal/modalSlice';


function ModalText({ onClose, product, onAddToFav }) {

    const dispatch = useDispatch();

    return (
        <Modal onClose={onClose}>
            <div>
                <ModalClose onClick={() => dispatch(closeModal('isTextModalOpen'))} />
                <ModalHeader>Add {product.name}</ModalHeader>
                <ModalBody>
                    <p className="description">{product.description}</p>
                </ModalBody>
                <ModalFooter
                    firstText="ADD TO FAVORITE"
                    firstClick={() => {
                        onAddToFav(product);
                        dispatch(closeModal('isTextModalOpen'));
                    }}
                />
            </div>
        </Modal>
    );
}

ModalText.propTypes = {
    onClose: PropType.func.isRequired,
    product: PropType.object.isRequired,
    onAddToFav: PropType.func.isRequired
};

export default ModalText;
