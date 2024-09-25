function Navbar(){
    return(
        <div className="flex items-center h-16 px-8 py-8 bg-gradient-to-r from-cyan-500 to-blue-500">
            <img className="h-full mr-6"></img>
            <h1 className="text-lg text-white">Proyecto INF225 - GRUPO 2</h1>
            <div className="flex flex-row ml-auto gap-x-24 text-white px-8">
                <p className="hover:text-indigo-800"><a href="/">Home</a></p>
                <p className="hover:text-indigo-800"><a href="/addIncidencia">Incidencias</a></p>
                <p className="hover:text-indigo-800"><a href="/historial">Historial</a></p>
            </div>
        </div>
    )
}

export default Navbar