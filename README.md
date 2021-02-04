# Prueba-Fase-1---Focun
Prueba Fase 1 Focun - Realizado por *Cristian Yamith Burbano*
Fecha: 3/02/2021

El index.js principal se encuentra en la carpeta /scripts.

## Punto 1:
para el punto 1 se empleo la siguiente linea de código para mostrar u ocultar el div con clase ".form-group" a partir de la entrada de texto con id "nombre"

```javascript
$("#nombre").closest(".form-group").toggle();
```

## Punto 2:
para el punto 2 se puede utilizar una metodo y callback como este para escribir en consola si el correo es valido o falso.:
```javascript
$("#nombre").on("change keyup",function(){
        console.log(validarCorreo($("#nombre")));
});

//función que retorna true si es valido y false si no es un correo valido
function validarCorreo(input){
    var value=$(input).val();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

```

En el código Html de este repositorio se agrego una función de más para agregar modificaciones al dom y que aparezca un mensaje de error 

## Punto 3, 4, 5, 6:
Para estos puntos se construyó un objeto instanciando a la clase Proxy de manera que al modificar alguna propiedad del objeto se pudiera hacer uso de un callback y modificar la vista (DOM), como alternativa se hubiera podido crear una clase con getters y setters correspondientes.

## Punto 7 - Documentación:
    la documentación se encuentra en la carpeta ./docs , está se realizó a través de JSdoc.
    Para volver a correr la documentación basta con correr nuevamente dentro de node: npx run doc;
    [documentacion](https://github.com/CristianBurbano/Prueba-Fase-1---Focun/tree/main/docs)
