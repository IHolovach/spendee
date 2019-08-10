import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => (
  ReactDOM.createPortal(
    children,
    document.getElementById('modal'),
  )
);

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
};

export default Portal;
