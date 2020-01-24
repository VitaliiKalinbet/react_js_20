import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Info from './Info/Info';
// import fade from '../transition/fade.module.css';
import pop from '../transition/pop.module.css';
// import slide from '../transition/slide.module.css';
import Header from './Header/Header';
import List from './List/List';

class App extends Component {
  state = {
    showInfo: false,
  };

  show = () => this.setState(prevState => ({ showInfo: !prevState.showInfo }));

  render() {
    const { showInfo } = this.state;
    return (
      <>
        <Header />
        <br />

        <button onClick={this.show} type="button">
          {showInfo ? 'Hide info' : 'Show info'}
        </button>
        {/* {showInfo && <Info />} */}
        <CSSTransition
          timeout={2000}
          in={showInfo}
          unmountOnExit
          classNames={pop}
          onEnter={() => console.log('onEnter event')}
          onEntering={() => console.log('onEntering event')}
          onEntered={() => console.log('onEntered event')}
          onExit={() => console.log('onExit event')}
          onExiting={() => console.log('onExiting event')}
          onExited={() => console.log('onExited event')}
        >
          <Info />
        </CSSTransition>
        <br />

        <List />
      </>
    );
  }
}

export default App;
