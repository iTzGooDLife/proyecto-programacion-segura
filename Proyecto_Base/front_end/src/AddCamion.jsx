import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { notifications } from '@mantine/notifications';
import { IoMdDoneAll as SucceessIcon } from "react-icons/io";
import { BiError as ErrorIcon } from "react-icons/bi";
import { Disclosure } from '@headlessui/react'

const AddCamion = () => {

    const [camion, setCamion] = useState({
        n_serie: "",
        marca: "",
        fecha_adquisicion: "",
    });

    const [camiones, setCamiones] = useState([])
    
    const handleChange = (e) => {
        setCamion((prev) => ({...prev, [e.target.name]: e.target.value }))
    };

    useEffect(() => {
        const fetchCamiones = async () => {
            try{
                const res = await axios.get("http://localhost:8081/showMaquinaria")
                setCamiones(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchCamiones()
    }, [])

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8081/addMaquinaria", camion)
            .then(() => {
                notifications.show({
                    title: "Exito!",
                    message: "La maquinaria fue agregada exitosamente",
                    color: "green",
                    autoClose: 5000,
                    icon: <SucceessIcon />,
                  })
            })
            //console.log('añadido')
        }catch(err){
            //console.log(err)
            notifications.show({
                title: "Error!",
                message: "Algo salió mal:( Asegurate de llenar bien los datos",
                color: "red",
                autoClose: 3000,
                icon: <ErrorIcon />,
              });
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-center py-12 text-3xl italic">Añadir maquinaria</h1>
            <div className="flex">
                <div className="form flex flex-col gap-8 px-40">
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center" 
                        type="text" 
                        placeholder="n_serie" 
                        onChange={handleChange} 
                        name="n_serie"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        type="text" 
                        placeholder="marca" 
                        onChange={handleChange} 
                        name="marca"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-gray-400 font-bold py-2 px-4 rounded text-center"
                        type="date" 
                        placeholder="fecha_adquisicion" 
                        onChange={handleChange} 
                        name="fecha_adquisicion"/>
                    <button 
                        className="text-xl bg-cyan-400 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        onClick={handleClick}>
                            Añadir
                        </button>
                </div>
                <div className="form flex flex-col gap-2 w-2/5 bg-cyan-100 mb-10">
                {camiones && camiones.map((elemento,index) => (
                    <div key={index}>
                        <Disclosure>
                            <Disclosure.Button className="p-3 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-200 rounded-b">
                                {elemento.id_maquinaria}
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-3 flex flex-col justify-center rounded-b">
                                <p className="py-1">Número de serie: {elemento.n_serie}</p>
                                <p className="py-1">Marca: {elemento.marca}</p>
                                <p className="py-1">Fecha de adquisición: {elemento.fecha_adquisicion.slice(0,10)}</p>
                                <br/>
                            </Disclosure.Panel>
                        </Disclosure>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default AddCamion