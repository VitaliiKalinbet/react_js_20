import React, { Component } from 'react';
import T from 'prop-types';

class NoteEditor extends Component {
  static propTypes = {
    onCreate: T.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onCreate } = this.props;
    const { inputValue } = this.state;
    onCreate(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={inputValue} type="text" />
        <button type="submit">add</button>
      </form>
    );
  }
}

// NoteEditor.defaultProps = {
//   onCreate: () => null,
// };

// NoteEditor.propTypes = {
//   onCreate: T.func,
// };

export default NoteEditor;
