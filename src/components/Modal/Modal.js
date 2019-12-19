import React, { Component, createRef } from 'react';
import T from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    children: T.node.isRequired,
    onClose: T.func.isRequired,
  };

  state = {};

  backdropRef = createRef();

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
    console.log('this.backdropRef.current :', this.backdropRef.current);
    console.log('e.target :', e.target);
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { children } = this.props;
    console.log('this.backdropRef :', this.backdropRef);
    return createPortal(
      <div
        ref={this.backdropRef}
        onClick={this.handleCloseModal}
        className={styles.backdrop}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>,
      MODAL_ROOT,
    );
  }
}

export default Modal;
