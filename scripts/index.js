
$(document).ready(function(){


    $(".btnPunto1").on("click",function(){toggleFormGroup("nombre")}); //evento punto 1
    $("#nombre").on("change keyup",function(){ejecutarValidacionCorreo()}); //evento punto 2

});
// ===========  PUNTO 1 ==============================
/**
 * Muestra u oculta un contendedor con clase form-group de alguna entrada que recibe como parametro su ID
 * @param {string} inputID Id de la entrada al cual es padre del contenedor con clase form-group que se pretende mostrar u ocultar
 */
function toggleFormGroup(inputID){
    var parentNode=$("#"+inputID).closest(".form-group") //Elemento padre del Id en cuestión
    .toggle(); // mostrar o ocultar

}
// ===========  PUNTO 2 ==============================
/**
 * Ejecuta la validación de la entrada de tipo correo y modifica el DOM.
 */   
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

/**
 * Función para validación de una entrada de tipo correo, esta retorna un boleano.
 * @param {Jquery<HtmlElement>} input elemento de jquery especificado. 
 * @returns {boolean} retorna un valor booleano: true si el correo es valido y false si no es valido
 */
function validarCorreo(input){
    var value=$(input).val();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// ===========  PUNTO 3 ==============================
/**
 * el objeto modelo es una variable global y sus propiedades podrán ser cambiadas desde la consola.
 */
var modelo=new Proxy({
    text:"",
    date:"",
    textarea:"",
    select:"",
    checkbox:"",
    "sizeTextArea": 300 //propiedad agregada para el punto 6
}, {
    set: cambiarPropiedadAModelo
});

// ===========  PUNTO 5 ==============================
/**
 * Cambia el valor de una propiedad en un Objeto y realiza cambios al DOM dependiendo de la propiedad cambiada.
 * @param {Object} obj Objeto al que se le realizará el cambio
 * @param {string} prop Propiedad que será cambiada en el objeto
 * @param {any} value Valor que se le asignará a la propiedad
 */
function cambiarPropiedadAModelo(obj,prop, value){
    obj[prop]= value;
    $("#ObservadorObjeto").html(JSON.stringify(modelo));
    switch(prop){
        case "checkbox":
            $("[name="+prop+"]").attr('checked',value);
            break;
        case "sizeTextArea":
            $("[name='textarea']").attr('rows',value);
        default: $("[name="+prop+"]").val(value);

    }

}
/**
 * PUNTO 4
 */
$(document).ready(function(){
    $("form#punto3to6").find("input, textarea, select").on('change keyup', function(){
        if(this.type!="checkbox"){
            modelo[this.name]= $(this).val();
        }else{
            modelo[this.name]= $(this).prop('checked')
        }
    })
})





