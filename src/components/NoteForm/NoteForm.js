/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import * as notesActions from '../../redux/notes/notesActions';

class NoteForm extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { onSave } = this.props;
    onSave({ text, id: shortid.generate() });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={text} onChange={this.onChange} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: note => dispatch(notesActions.addNoteAction({ note })),
});

export default connect(null, mapDispatchToProps)(NoteForm);
