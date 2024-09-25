import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";


function Historial(){

    return (
        <>
            <Navbar />
            <h1 className="text-center pt-12 text-3xl italic">Ver historial de incidencias</h1>
            <h2 className="text-center py-8 text-xl">Seleccione si quiere ver el de maquinas o motores</h2>
            <div className="grid gap-10 grid-cols-2 grid-rows-2 text-center px-32">
                <Button link="/historialC" text="Historial de incidencias de maquinarias"/>
                <Button link="/historialM" text="Historial de incidencias de motores"/>
            </div>
        </>
    );
}

export default Historial;