import './ModalHeader.scss';
import PropTypes from 'prop-types';


function ModalHeader({ children }) {
    return (
        <h2 className="modal-header">{children}</h2>
    );
}

ModalHeader.propTypes = {
    children: PropTypes.node
};

export default ModalHeader;
