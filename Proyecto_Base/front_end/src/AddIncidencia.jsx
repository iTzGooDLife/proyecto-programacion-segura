import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function AddIncidencia() {
    
    const [incidenciaC, setIncidenciaC] = useState({
        id_maquinaria: "",
        n_serie: "",
        fecha: "",
        descripcion: "",
        id_jefe_motores: "",
        id_mecanico: "",
    });

    const [incidenciaM, setIncidenciaM] = useState({
        id_maquinaria: "",
        n_serie: "",
        fecha: "",
        descripcion: "",
        id_jefe_motores: "",
        id_mecanico: "",
    });

    const handleChangeC = (e) => {
        setIncidenciaC((prev) => ({...prev, [e.target.name]: e.target.value }))
    };
 
    const handleClickC = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8081/addFichaIncidenciaC", incidenciaC)
            console.log('añadido')
        }catch(err){
            console.log(err)
        }
    };

    const handleChangeM = (e) => {
        setIncidenciaM((prev) => ({...prev, [e.target.name]: e.target.value }))
    };
 
    const handleClickM = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8082/addFichaIncidenciaM", incidenciaM)
            console.log('añadido')
        }catch(err){
            console.log(err)
        }
    };

    console.log(incidenciaC)
    
    return (
        <div>
            <Navbar />
            <h1 className="text-center pt-12 text-3xl italic">Añadir incidencia</h1>
            <h2 className="text-center py-8 text-xl">Seleccione si es a maquinaria o a motor</h2>
            <div className="grid gap-10 grid-cols-2 grid-rows-2 text-center px-32">
                <Button link="/addIncidenciaC" text="Incidencia para maquinaria"/>
                <Button link="/addIncidenciaM" text="Incidencia para motor"/>
            </div>
        </div>
    )
}

export default AddIncidencia