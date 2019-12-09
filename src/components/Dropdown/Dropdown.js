import React, { Component } from 'react';
import T from 'prop-types';

export default class Dropdown extends Component {
  static propTypes = {
    defaultState: T.bool,
  };

  static defaultProps = {
    defaultState: false,
  };

  state = {
    isOpen: this.props.defaultState,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleToggle}>
          &#9776;
          {isOpen ? 'Close' : 'Open'}
        </button>

        {isOpen && (
          <div>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
