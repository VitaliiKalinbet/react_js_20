// Render prop, best example
import { Component } from 'react';
import T from 'prop-types';

class Toggle extends Component {
  static propTypes = {
    children: T.node.isRequired,
  };

  state = { isOpen: false };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return children({
      isOpen,
      toggle: this.toggle,
    });
  }
}

export default Toggle;

// Render prop, another example
// import { Component } from 'react';
// import T from 'prop-types';

// class Toggle extends Component {
//   static propTypes = {
//     render: T.node.isRequired,
//   };

//   state = { isOpen: false };

//   toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

//   render() {
//     const { render } = this.props;
//     const { isOpen } = this.state;
//     return render({
//       isOpen,
//       toggle: this.toggle,
//     });
//   }
// }

// export default Toggle;
