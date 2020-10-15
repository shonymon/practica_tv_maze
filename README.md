
## Instalación

**Correr Composer:**
```
composer install
```


**Copiar .env y generar key:**
```
cp .env.example .env
php artisan key:generate
```

**Editar archvio .env**
```
...
APP_TIMEZONE=America/Mazatlan
...
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tv_maze
DB_USERNAME=username
DB_PASSWORD=password
...
```

**Correr las migraciones**
```
php artisan migrate
```

**Generar Token Keys de Passport para usar la API**
```
php artisan passport:install
```

**Instalar dependencias con NPM para la aplicación**
```
npm install
```

**Construir la aplicación para el ambiente deseado**
```
npm run dev
or
npm run watch
or
npm run prod
```


### Librerias Usadas

- **[Vue](https://vuejs.org/)**
- **[Vue-Router](https://router.vuejs.org/)**
- **[Vuex](https://vuex.vuejs.org/)**
- **[Font Awesome 5](https://fontawesome.com/)**
- **[Axios](https://github.com/axios/axios)**
- **[Bulma CSS](https://bulma.io/)**

### Trabajado en un ambiente con:

- **Ubuntu 20.04**
- **Php 7.4**
- **MySQL 8.0.21**
- **Node.js 12.19.0**
