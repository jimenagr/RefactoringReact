import React from 'react';

const ListaNotas = ({ notes }) => {
  const Container = {
    display: "flex",
    height: "100vh",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const PostIt = {
    margin: "10px",
    height: "250px",
    width: "250px",
  };

  const numberStyle = {
    fontSize: 20,
    textAlign: "center",
  }

  const textStyle = {
    fontSize: 25,
    textAlign: "center",
    color: "white"
  }

  const Colors = ["#C7EAD5", "#F6C8CA", "#EF967E", "#F5D849", "#88D2C0"];
  const TextColors = ["#3AE9A7", "#EF8C8C", "#E27056", "#F0B837", "#C7EAD5"];

  const getRandomColorIndex = () => {
    return Math.floor(Math.random() * Colors.length);
  };

  return (
    <ul>
      <div style={Container}>
        {notes.map((note) => {
          const randomColorIndex = getRandomColorIndex();
          return (
            <div
              style={{ ...PostIt, backgroundColor: Colors[randomColorIndex] }}
              key={note.id}
            >
              <div style={{ ...numberStyle, color: TextColors[randomColorIndex] }}>{note.id}</div>
              <div style={textStyle}>{note.content}</div>
              {note.important && <h1 style={{ ...numberStyle, color: TextColors[randomColorIndex] }}>Important</h1>}
            </div>
          );
        })}
      </div>
    </ul>
  );
};

export default ListaNotas;
