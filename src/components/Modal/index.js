import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeModal } from 'store/actions/modal';

import './style.scss';

class Modal extends PureComponent {
  closeModal = () => {
    const { onRemoveModal } = this.props;

    onRemoveModal();
  };

  render() {
    const { modal } = this.props;

    return (
      (modal)
        ? (
          <div className="modal modal-error">
            <button
              type="button"
              className="modal-close-btn"
              onClick={this.closeModal}
            />
            <div className="modal-message">
              {modal}
            </div>
          </div>
        )
        : null
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal.modal,
});

const mapDispatchToProps = {
  onRemoveModal: removeModal,
};

Modal.propTypes = {
  modal: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.bool,
  ]),
  onRemoveModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modal: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
