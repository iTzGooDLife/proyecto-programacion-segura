import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Disclosure } from '@headlessui/react'

const HistorialC = () => {
    const [data, getData] = useState([]);
    const [number, getnumber] = useState(''); //Número de la id_maquinaria
    const [historial, setHistorial] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/showHistoriales')
        .then((response) => {
          // Almacenar los datos en el estado del componente
          const data = response.data;
          getData(data)
          const number = data[0].id_maquinaria;
          getnumber(number);//Actualiza el número
          getHistorial(number); //Se hace la post request
        })
        .catch(error => {
          console.error('Error al realizar la solicitud GET:', error);
        });
      }, []);

    const getHistorial = (number) => {
        axios.post('http://localhost:8081/showHistorialC',{
            id_maquinaria: number
        })
        .then((response) => {
          // Almacenar los datos en el estado del componente
          const historial = response.data;
          setHistorial(historial)
        })
        .catch(error => {
          console.error('Error al realizar la solicitud GET:', error);
        });
    }

    const handleChange = event => {
        getHistorial(event.target.value)
      };


    
    return (
        <div>
            <Navbar />
            <h1 className="text-center py-12 text-3xl italic">Historial de incidencias de maquinarias</h1>
            <div className="flex">
                <div className="form flex flex-col gap-8 px-40 w-1/3">
                <select onChange={handleChange}>
                    {data && data.map(elemento => (
                        <option key={elemento.id_maquinaria}>{elemento.id_maquinaria}</option>
                    ))}
                </select>
                </div>
                <div className="form flex flex-col gap-2 w-2/5 bg-cyan-100 mb-10">
                {historial && historial.map((elemento,index) => (
                    <div key={index}>
                        <Disclosure>
                            <Disclosure.Button className="p-3 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-200 rounded-b">
                                {elemento.fecha.slice(0,10)}
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-3 flex flex-col justify-center rounded-b">
                                <p className="py-1">Descripción: {elemento.descripcion}</p>
                                <p className="py-1">Número de serie: {elemento.n_serie}</p>
                                <p className="py-1">Mecánico: {elemento.id_mecanico}</p>
                                <p className="py-1">Autorizado por: {elemento.id_jefe_motores}</p>
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

export default HistorialC;
