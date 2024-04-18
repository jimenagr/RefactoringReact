import React, { useState, useEffect } from "react";
import axios from "axios";
import Encabezado from "./Encabezado";
import ListaNotas from "./ListaNotas";
import Formulario from "./Formulario";

const baseUrl = 'http://localhost:3001/api/notes';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  return (
    <div>
      <Encabezado />
      <Formulario baseUrl={baseUrl} setNotes={setNotes} />
      <ListaNotas notes={notes} />
    </div>
  );
};

export default App;
