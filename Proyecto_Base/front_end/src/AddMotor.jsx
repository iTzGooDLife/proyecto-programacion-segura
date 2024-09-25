import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { notifications } from '@mantine/notifications';
import { IoMdDoneAll as SucceessIcon } from "react-icons/io";
import { BiError as ErrorIcon } from "react-icons/bi";
import { Disclosure } from '@headlessui/react'

const AddMotor = () => {

    const [motor, setMotor] = useState({
        n_serie: "",
        id_maquina: "",
        marca: "",
        fecha_adquisicion: "",
    });

    const [motores, setMotores] = useState([])

    useEffect(() => {
        const fetchCamiones = async () => {
            try{
                const res = await axios.get("http://localhost:8082/showMotor")
                setMotores(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchCamiones()
    }, [])

    const handleChange = (e) => {
        setMotor((prev) => ({...prev, [e.target.name]: e.target.value }))
    };
 
    const handleClick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8082/addMotor", motor)
            .then(() => {
                notifications.show({
                    title: "Exito!",
                    message: "El motor fue agregado exitosamente",
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
                autoClose: 3000,
                icon: <ErrorIcon />,
              });
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-center py-12 text-3xl italic">Añadir motor</h1>
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
                        placeholder="id_maquina" 
                        onChange={handleChange} 
                        name="id_maquina"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center" 
                        type="text" 
                        placeholder="marca" 
                        onChange={handleChange} 
                        name="marca"/>
                    <input 
                        className="text-xl bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center" 
                        type="date" 
                        placeholder="fecha_adquisicion" 
                        onChange={handleChange} 
                        name="fecha_adquisicion"/>
                    <button 
                        onClick={handleClick}
                        className="text-xl bg-cyan-400 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded text-center"
                        >
                        Añadir
                    </button>
                </div>
                <div className="form flex flex-col gap-2 w-2/5 bg-cyan-100 mb-10">
                {motores && motores.map((elemento,index) => (
                    <div key={index}>
                        <Disclosure>
                            <Disclosure.Button className="p-3 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-200 rounded-b">
                                {elemento.n_serie}
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-3 flex flex-col justify-center rounded-b">
                                <p className="py-1">Id Maquinaria: {elemento.id_maquina}</p>
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

export default AddMotor