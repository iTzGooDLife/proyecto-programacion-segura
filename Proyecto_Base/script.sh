#!/usr/bin/env bash
set -euo pipefail

echo -e "¿Quieres instalar dependencias?\n1. Si\n2. No"
read value
if [ $value -eq 1 ]; then
    echo "[+] Se instalarán las dependencias."
    npm --prefix ./API_CAMIONES install cors
    npm --prefix ./API_MOTORES install cors
    npm --prefix ./front_end install cors
    echo -e "[+] Dependencias instaladas.\n"

elif [ $value -eq 2 ]; then
    :
else
    echo "Opción no válida"
fi

echo -e "Opciones:\n1. Levantar contenedores\n2. Buildear denuevo\n3. Sólo eliminar contenedores"
echo -e "4. Eliminar contenedores y todas las imagenes\n5. Crear tablas correspondientes\n6. Nada"
read var
if [ $var -eq 1 ]; then
    docker compose up -d
elif [ $var -eq 2 ]; then
    docker compose up --build -d
elif [ $var -eq 3 ]; then
    docker compose down
elif [ $var -eq 4 ]; then
    docker compose down
    sleep 1
    docker rmi $(docker images -a | awk '{print $1}' | grep -v "REPOSITORY")
elif [ $var -eq 5 ]; then
    curl http://localhost:8081/createMaquinaria
    curl http://localhost:8081/createFichaIncidenciasC
    curl http://localhost:8082/createMotor
    curl http://localhost:8082/createFichaIncidenciasM
    echo ""
elif [ $var -eq 6 ]; then
    :
else
    echo "Opción no válida, ejecutar denuevo."
fi
