import React from 'react';
import T from 'prop-types';

const NoteList = ({ notes, onDelete, onUpdate }) => {
  return (
    <ul>
      {notes.map(el => (
        <li key={el.id}>
          {el.text}
          <input
            checked={el.completed}
            type="checkbox"
            onChange={() => onUpdate(el.id)}
          />
          <button type="button" onClick={() => onDelete(el.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

NoteList.propTypes = {
  notes: T.arrayOf(T.shape({})).isRequired,
  onDelete: T.func.isRequired,
  onUpdate: T.func.isRequired,
};

export default NoteList;
