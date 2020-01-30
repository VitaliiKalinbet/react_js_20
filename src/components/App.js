import React from 'react';
import Timer from './Timer/Timer';
import NoteForm from './NoteForm/NoteForm';
import NoteList from './NoteList/NoteList';

function App() {
  return (
    <div>
      <Timer />
      <br />
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
