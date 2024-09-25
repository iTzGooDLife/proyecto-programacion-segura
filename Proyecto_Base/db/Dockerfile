FROM mysql:8.0.33

ARG DB_NAME_MOTORES
ARG DB_NAME_CAMIONES

RUN echo "CREATE DATABASE ${DB_NAME_MOTORES};" > /docker-entrypoint-initdb.d/createdb.sql
RUN echo "CREATE DATABASE ${DB_NAME_CAMIONES};" >> /docker-entrypoint-initdb.d/createdb.sql
RUN echo "CREATE DATABASE USERS;" >> /docker-entrypoint-initdb.d/createdb.sql
#RUN echo "CREATE DATABASE DB_NAME_CAMIONES;" >> /docker-entrypoint-initdb.d/createdb.sql
#RUN echo "CREATE DATABASE DB_NAME_CAMIONES;" >> /docker-entrypoint-initdb.d/createdb.sql
