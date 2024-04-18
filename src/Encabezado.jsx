import React from 'react'

function Encabezado() {
  const textStyle = {
    fontSize: 50,
    textAlign: "center", 
    fontWeight: "bold"
    }
  return (
    <div>
      <h1 style={textStyle}>Notes</h1>
    </div>
  )
}

export default Encabezado
