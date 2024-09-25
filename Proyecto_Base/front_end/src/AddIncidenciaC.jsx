import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { notifications } from '@mantine/notifications';
import { IoMdDoneAll as SucceessIcon } from "react-icons/io";
import { BiError as ErrorIcon } from "react-icons/bi";


const AddIncidenciaC = () => {

    const [incidenciaC, setIncidenciaC] = useState({
        id_maquinaria: "",
        n_serie: "",
        fecha: "",
        descripcion: "",
        id_jefe_motores: "",
        id_mecanico: "",
    });

    const handleChange = (e) => {
        setIncidenciaC((prev) => ({...prev, [e.target.name]: e.target.value }))
    };
 
    const handleClick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8081/addFichaIncidenciaC", incidenciaC)
            .then(() => {
                notifications.show({
                    title: "Exito!",
                    message: "La incidencia fue agregada exitosamente",
                    color: "green",
                    autoClose: 5000,
                    icon: <SucceessIcon />,
                  })
            })
            //console.log('añadido')
        }catch(err){
            //console.log(err);
            notifications.show({
                title: "Error!",
                message: "Algo salió mal:( Asegurate de llenar bien los datos",
                color: "red",
                autoClose: 4000,
                icon: <ErrorIcon />,
              });
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-center py-12 text-3xl italic">Añadir incidencia de maquinaria</h1>
            <div className="flex">
                <div className="form flex flex-col gap-8 px-40">
                    
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="text" 
                        placeholder="id_maquinaria" 
                        onChange={handleChange} 
                        name="id_maquinaria"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="text" 
                        placeholder="n_serie" 
                        onChange={handleChange} 
                        name="n_serie"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="date" 
                        placeholder="fecha" 
                        onChange={handleChange} 
                        name="fecha"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="text" 
                        placeholder="descripcion" 
                        onChange={handleChange} 
                        name="descripcion"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="text" 
                        placeholder="id_jefe_motores" 
                        onChange={handleChange} 
                        name="id_jefe_motores"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="text" 
                        placeholder="id_mecanico" 
                        onChange={handleChange} 
                        name="id_mecanico"/>

                    <button 
                        onClick={handleClick}
                        className="text-xl bg-cyan-400 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center">
                            Añadir
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default AddIncidenciaC