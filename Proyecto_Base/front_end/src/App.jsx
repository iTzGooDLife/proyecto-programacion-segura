import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Inicio.jsx'
import AddCamion from './AddCamion.jsx'
import AddMotor from './AddMotor.jsx'
import AddIncidencia from './AddIncidencia.jsx';
import AddIncidenciaM from './AddIncidenciaM.jsx';
import AddIncidenciaC from './AddIncidenciaC.jsx';
import Historial from './Historial.jsx';
import HistorialM from './HistorialM.jsx';
import HistorialC from './HistorialC.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/addCamion" element={<AddCamion/>}/>
      <Route path="/addMotor" element={<AddMotor/>}/>
      <Route path="/addIncidencia" element={<AddIncidencia/>}/>
      <Route path="/addIncidenciaC" element={<AddIncidenciaC/>}/>
      <Route path="/addIncidenciaM" element={<AddIncidenciaM/>}/>
      <Route path="/historial" element={<Historial/>}/>
      <Route path="/historialM" element={<HistorialM/>}/>
      <Route path="/historialC" element={<HistorialC/>}/>
    </Routes>
  )
}

export default App;