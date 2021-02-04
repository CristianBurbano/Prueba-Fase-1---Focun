# Prueba-Fase-1---Focun
Prueba Fase 1 Focun - Realizado por *Cristian Yamith Burbano*
Fecha: 3/02/2021


## Punto 1:
para el punto 1 se empleo la siguiente linea de código para mostrar u ocultar el div con clase ".form-group" a partir de la entrada de texto con id "nombre"

        `$("#nombre").closest(".form-group").toggle();` 

## Punto 2:
para el punto 2 como evento se utilizó el siguiente código:
`$("#nombre").on("change keyup",function(){ejecutarValidacionCorreo()}); //evento`
donde la función callback llama al metodo:
`
function ejecutarValidacionCorreo(){
    let input=$("#nombre");
    if(validarCorreo(input)){ //llamado de la función.
    input.addClass("is-valid");
    input.removeClass("is-invalid");
    }else{
    input.removeClass("is-valid");
    input.addClass("is-invalid");
    }
};
`
el metodo de validación se puede utilizar una expresión regular:
`
function validarCorreo(input){
    var value=$(input).val();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
`
## Punto 3, 4, 5, 6:
Para estos puntos se construyó un objeto instanciando a la clase Proxy de manera que al modificar alguna propiedad del objeto se pudiera hacer uso de un callback y modificar la vista (DOM), como alternativa se hubiera podido crear una clase con getters y setters correspondientes.

## Punto 7 - Documentación:
    la documentación se encuentra en la carpeta ./docs , está se realizó a través de JSdoc.
    Para volver a correr la documentación basta con correr nuevamente dentro de node: npx run doc;
    https://github.com/CristianBurbano/Prueba-Fase-1---Focun/tree/main/docs

