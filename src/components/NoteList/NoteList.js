/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as notesActions from '../../redux/notes/notesActions';

const NoteList = ({ notes, onDeleteNote }) => (
  <ul>
    {notes.map(({ id, text }) => (
      <li key={id}>
        <span>{text}</span>
        <button type="button" onClick={() => onDeleteNote(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = store => ({
  notes: store.notes.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteNote: id => dispatch(notesActions.deleteNoteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
