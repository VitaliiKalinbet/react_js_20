import React, { Component } from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
import FriendList from './FriendList/FriendList';

const filterNamesArr = (arr, string) => arr.filter(el => el.includes(string));

class App extends Component {
  state = {
    names: ['mango', 'poly', 'ajax', 'bob'],
    filter: '',
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { names, filter } = this.state;
    const items = filterNamesArr(names, filter);
    return (
      <>
        <input type="text" value={filter} onChange={this.handleChange} />
        <FriendList items={items} />
        <hr />
        <SignUpForm />
      </>
    );
  }
}

export default App;
