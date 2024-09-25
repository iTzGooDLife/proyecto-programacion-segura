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

![env pb](imagenes_ids/Pasted image 20230426211126.png)

Para ../inf225-2023-1-par002-grupo02/Proyecto_Base/API_CAMIONES

![env api camiones](imagenes_ids/Pasted image 20230426211159.png)

Para ../inf225-2023-1-par002-grupo02/Proyecto_Base/API_MOTORES

![env api motores](imagenes_ids/Pasted image 20230426211230.png)


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

`$docker compose up --build`

Lo cual en caso de funcionar, nos debería retornar lo siguiente:

![dc up build](imagenes_ids/Pasted image 20230426203337.png)

Para comprobar que nuestros contenedores estan levantados con mayor información podemos ejecutar:

`$docker ps -a`

Lo cual nos retorna:

![dc ps](imagenes_ids/Pasted image 20230426203613.png)

Si deseamos bajar los contenedores, esto sería ejecutando:

`$docker compose down`

Lo cual nos retorna:

![dc down](imagenes_ids/Pasted image 20230426205648.png)

Entonces al realizar nuevamente:

`$docker ps -a`

Veremos que ya no están los contenedores activos.

![docker ps2](imagenes_ids/Pasted image 20230426205800.png)

## Revisando los puertos

Acá podemos notar en qué puertos están levantados los distintos contenedores, web está levantado en el puerto 8080, por lo tanto, si vamos en nuestro navegador favorito a:
http://localhost:8080/

Acá veremos nuestro front_end (pendiente a modificarse), en el cual usamos React con el ambiente de desarrollo Vite.

![8080](imagenes_ids/Pasted image 20230426203918.png)

Ahora si queremos probar el end-point para cierta API podremos hacerlo en Postman, ya que API_CAMIONES y API_MOTORES están levantados en distintos puertos (8081 y 8082 respectivamente) para API_CAMIONES realizamos:

`GET localhost:8081/createTable`

Lo cual nos retornará un '200 OK' y 'Tabla creada', que es lo que esperamos.
![8081](imagenes_ids/Pasted image 20230426205015.png)

Para API_MOTORES sería:

`GET localhost:8082/createTable`

Lo cual nos retornará un '200 OK' y 'Tabla creada', que es lo que esperamos.
![8082](imagenes_ids/Pasted image 20230426205516.png)








