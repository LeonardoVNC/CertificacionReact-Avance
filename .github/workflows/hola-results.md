# Resultados de la práctica guíada
1. **¿Qué evento inicia el workflow?**

Por el momento hemos configurado 2 eventos, uno "manual" que se activa desde la propia página [Actions de Github](https://github.com/LeonardoVNC/CertificacionReact-Avance/actions) (el cual se activa con la opción `workflow_dispatch` del yml), y el otro es con el evento de un push al repositorio (activado con la opción `push`)

2. **¿Qué diferencia existe entre un step con uses y uno con run?**

`uses` llama a una "librería", a una acción ya creada en forma de plugin. Por otro lado `run` ejecuta un comando directamente en la terminal de la máquina que ejecuta el workflow.

3. **¿Por qué el checkout debe ocurrir antes de ls y npm ci?**

`uses checkout` nos permite acceder al código del repositorio sobre el que estamos ejecutando el workflow, sin este paso no podemos acceder a nuestro código, si tratamos de hacer un `ls` veremos los archivos de la máquina sin pista alguna de nuestro código, si tratamos de ejecutar `npm ci` no tendremos un archivo `package.json`/`package-lock.json` que le diga que librerías debe descargar

4. **¿Por qué se versiona package-lock.json?**

Nos facilita la comprobación de librerias que tiene nuestro proyecto, guarda la versión de las librerías que usamos y su arbol de dependencias, lo que garantiza que otras máquinas al correr comandos npm descargue las mismas librerias y los mismos archivos.

5. **¿Qué error obvio detectó ESLint?**

La declaración de funciones que no se utilizan en el propio archivo, esto debido a que las funciones las llamabamos desde el html. Archivos de la Clase 11 por cierto.

6. **¿Qué problema puede seguir existiendo aunque el workflow termine en verde?**

JavaScript destaca por su libertad en tipado de datos y en el uso de f.unciones asincronas. Problemas rebuscados con tipos de datos pueden burlar a eslint, y datos recuperados desde APIs en funciones async también quedan fuera del rango que slint puede revisar