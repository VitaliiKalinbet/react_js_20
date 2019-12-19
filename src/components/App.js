import React, { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  // shouldComponentUpdate() {
  //   return false;
  // }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open modal
        </button>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              magni?
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              eos fuga voluptas labore laboriosam beatae soluta odio nesciunt
              adipisci natus? Atque quam beatae voluptate neque illum eaque
              error? Ex, enim magnam consequatur porro, commodi vero quos nobis
              eos corporis voluptate necessitatibus expedita quo, nam quisquam
              quis beatae corrupti aliquid esse.
            </p>
            <button onClick={this.closeModal} type="button">
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
