import React, { Component } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import shortid from 'shortid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slide from '../../transition/slide.module.css';

const lorem = new LoremIpsum();

class List extends Component {
  state = {
    items: [],
  };

  add = () => {
    const item = {
      text: lorem.generateWords(5),
      id: shortid.generate(),
    };
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  remove = id =>
    this.setState(prevState => ({
      items: prevState.items.filter(el => el.id !== id),
    }));

  render() {
    const { items } = this.state;
    return (
      <div>
        <button onClick={this.add} type="button">
          Add items
        </button>
        <TransitionGroup component="ul">
          {items.map(el => (
            <CSSTransition
              key={el.id}
              unmountOnExit
              classNames={slide}
              timeout={2000}
            >
              <li>
                {el.text}
                <button onClick={() => this.remove(el.id)} type="button">
                  delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
