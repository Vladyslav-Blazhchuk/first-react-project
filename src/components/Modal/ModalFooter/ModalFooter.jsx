import './ModalFooter.scss';
import PropTypes from 'prop-types';


function ModalFooter({ firstText, secondaryText, firstClick, secondaryClick }) {
  return (
    <footer className="footer">
      {firstText && <button className="first-btn" onClick={firstClick}>{firstText}</button>}
      {secondaryText && <button className="second-btn" onClick={secondaryClick}>{secondaryText}</button>}
    </footer>
  );
}

ModalFooter.propTypes = {
  firstText: PropTypes.string,
  secondaryText: PropTypes.string,
  firstClick: PropTypes.func,
  secondaryClick: PropTypes.func
};

export default ModalFooter;
