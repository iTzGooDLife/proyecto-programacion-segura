## Consideraciones

Se utilizaron sistemas operativos basados en Debian a la hora de realizar las acciones en este proyecto, en concreto: Pop_OS y Debian.

Tuvimos ciertas complicaciones a la hora de ejecutar comandos docker, debido a problemas con daemon, esto se solucionó de forma rápida usando `$sudo docker` , sin embargo, hay soluciones más sofisticadas en internet que aplicamos, pero sería demasiado extenso de explicar y no va al tema.

## Requerimientos 
## (que no se pueden subir al contenedor)

Es necesario tener archivos '.env' en tres carpetas que serían en:
- ../inf225-2023-1-par002-grupo02/Proyecto_Base
- ../inf225-2023-1-par002-grupo02/Proyecto_Base/API_CAMIONES
- ../inf225-2023-1-par002-grupo02/Proyecto_Base/API_MOTORES

El formato de los siguientes es:

Para ../inf225-2023-1-par002-grupo02/Proyecto_Base

```env
PORT_API_CAMIONES = 8081
PORT_API_MOTORES = 8082
PORT_WEB = 8080
DB_USER = "root"
DB_PASSWORD = "password"
DB_NAME = "ingsfw"
DB_PORT = 3306
DB_HOST = "mysql"
ROOT_PASSWORD = "secret"
DB_NAME_MOTORES = "BD02_MOTORES"
DB_NAME_CAMIONES = "BD02_CAMIONES"
```

Para ../inf225-2023-1-par002-grupo02/Proyecto_Base/API_CAMIONES

```env
PORT_API = 8081
PORT_WEB = 8080
DB_USER = "root"
DB_PASSWORD = "password"
DB_PORT = 3306
DB_HOST = "mysql"
ROOT_PASSWORD = "secret"
DB_NAME = "BD02_CAMIONES"
```

Para ../inf225-2023-1-par002-grupo02/Proyecto_Base/API_MOTORES

```env
PORT_API = 8082
PORT_WEB = 8080
DB_USER = "root"
DB_PASSWORD = "password"
DB_PORT = 3306
DB_HOST = "mysql"
ROOT_PASSWORD = "secret"
DB_NAME = "BD02_MOTORES"
```


## Introducción
Se modificaron los archivos docker originales del proyecto base, creando (y modificando) Dockerfile's para:
- API_CAMIONES
- API_MOTORES
- db
- front_end
Y se dejó un docker-compose general fuera de estas carpetas (o sea en ../inf225-2023-1-par002-grupo02/Proyecto_Base), de esta forma accede a los distintos Dockerfile's.

## Levantar el proyecto
Levantamos el proyecto estando en ../inf225-2023-1-par002-grupo02/Proyecto_Base,
acá utilizamos el comando:

`$ docker compose up --build`

Para comprobar que nuestros contenedores estan levantados con mayor información podemos ejecutar:

`$ docker ps -a`


Si deseamos bajar los contenedores, esto sería ejecutando:

`$ docker compose down`


## Revisando los puertos

Acá podemos notar en qué puertos están levantados los distintos contenedores, web está levantado en el puerto 8080, por lo tanto, si vamos en nuestro navegador favorito a:
`http://localhost:8080/`

Ahora si queremos probar el end-point para cierta API podremos hacerlo en Postman, ya que API_CAMIONES y API_MOTORES están levantados en distintos puertos (8081 y 8082 respectivamente) para API_CAMIONES realizamos:

`GET localhost:8081/createTable`

Lo cual nos retornará un '200 OK' y 'Tabla creada', que es lo que esperamos.

Para API_MOTORES sería:

`GET localhost:8082/createTable`

Lo cual nos retornará un '200 OK' y 'Tabla creada', que es lo que esperamos.









