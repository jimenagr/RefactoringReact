import React, { useState } from 'react';
import axios from 'axios';

const Formulario = ({ baseUrl, setNotes }) => {
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),
    };
  
    axios.post(baseUrl, noteObject)
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, response.data]);
        setNewNote("");
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    width: '300px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  };

  return (
    <form onSubmit={addNote} style={formStyle}>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        style={inputStyle}
        placeholder="Añade tus notas!!!"></input>
      <button type="submit" style={buttonStyle}>Save</button>
    </form>
  );
};

export default Formulario;





