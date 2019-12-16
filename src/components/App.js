import React, { Component } from 'react';
import shortid from 'shortid';
import NoteEditor from './NoteEditor/NoteEditor';
import NoteList from './NoteList/NoteList';

class App extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    const notesFromLS = localStorage.getItem('notes');
    // console.log(notesFromLS);
    if (notesFromLS) {
      this.setState({ notes: JSON.parse(notesFromLS) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { notes } = this.state;
    if (prevState.notes !== notes) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }

  createNote = text => {
    const note = {
      text,
      id: shortid.generate(),
      completed: false,
    };

    this.setState(
      prevState => ({ notes: [...prevState.notes, note] }),
      // () => {
      //   const { notes } = this.state;
      //   localStorage.setItem('notes', JSON.stringify(notes));
      // },
    );
  };

  deleteNote = id => {
    this.setState(
      prevState => ({
        notes: prevState.notes.filter(el => el.id !== id),
      }),
      // () => {
      //   const { notes } = this.state;
      //   localStorage.setItem('notes', JSON.stringify(notes));
      // },
    );
  };

  updateNote = id => {
    this.setState(
      prevState => ({
        notes: prevState.notes.map(el =>
          el.id === id ? { ...el, completed: !el.completed } : el,
        ),
      }),
      // () => {
      //   const { notes } = this.state;
      //   localStorage.setItem('notes', JSON.stringify(notes));
      // },
    );
  };

  render() {
    const { notes } = this.state;
    return (
      <>
        <NoteEditor onCreate={this.createNote} />
        <NoteList
          onUpdate={this.updateNote}
          onDelete={this.deleteNote}
          notes={notes}
        />
      </>
    );
  }
}

export default App;
