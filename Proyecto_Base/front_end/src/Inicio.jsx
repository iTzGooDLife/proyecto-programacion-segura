import Navbar from "../components/Navbar"
import Button from "../components/Button"

function Inicio(){

    const user = `user`

    return(
        <>
            <div>
                <Navbar />
                <h1 className="text-center py-12 text-3xl">Bienvenid@ {user}, ¿qué desea hacer hoy?</h1>
                <div className="grid gap-10 grid-cols-2 grid-rows-2 text-center px-32">
                    <Button 
                        link="/addIncidencia" 
                        text="Añadir incidencia"
                        />
                    <Button link="/historial" text="Ver historial de incidencias"/>
                    <Button link="/addCamion" text="Añadir maquinaria"/>
                    <Button link="/addMotor" text="Añadir motor"/>
                </div>
            </div>
        </>
    )
}

export default Inicio
