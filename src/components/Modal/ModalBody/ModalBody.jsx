import PropTypes from 'prop-types';

function ModalBody({ children }) {
    return (
        <div className="body">{children}</div>
    );
}

ModalBody.propTypes = {
    children: PropTypes.node
};

export default ModalBody;
