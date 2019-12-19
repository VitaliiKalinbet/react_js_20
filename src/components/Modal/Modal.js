import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    children: T.node.isRequired,
    onClose: T.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    // console.log(e);
    if (e.code !== 'Escape') {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  handleCloseModal = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        onClick={this.handleCloseModal}
        className={styles.backdrop}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
