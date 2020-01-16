import React, { Component } from 'react';
import T from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => this.setState({ value: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input value={value} onChange={this.handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
