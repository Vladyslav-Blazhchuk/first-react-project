import './Modal.scss';


function Modal({ children, onClose }) {

    const handleWrapperClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-wrapper" onClick={handleWrapperClick}>
            <div className="modal-container">
                {children}
            </div>
        </div>
    );
}

export default Modal;
