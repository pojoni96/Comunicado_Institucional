/**
 * Crea un elemento "a", que tomara como vinculo al elemento pasado por parametro.
 * @param {HTMLDivElement} div 
 */
function irAlElemento(div){
    let a = document.createElement("a");
    a.setAttribute("href", div);
    a.click();
    a.remove();
}

/**
 * En el caso de que la opcion sea "Copiar" setea el margen superior del contenedor de botones en 0.
 * @param {String} opcion 
 */
function quitarMargenSuperior(opcion){
    let div = document.getElementById("contenedor_botones_modificar-gestionar_comunicado");

    if(opcion == "Copiar")
        div.style.marginTop = 0;
    else
        div.style.marginTop = "20px";
}

/**
 * Devuelve la opcion Descargar o Copiar del formulario.
 * @returns {HTMLFormElement}
 */
function conseguirOpcionComunicado(){
    let valor = document.querySelector("input[name='opcionComunicado']:checked");
    let st;

    if(valor == null)
        st = false;
    else
        st = valor.value;
    
    return st;
}

/**
 * Valida las respuesta del formulario, e inserta los textos en el comunicado que corresponda.
 * Retorna si se actualizo el comunicado o no.
 * @return {Boolean}
 */
function actualizarComunicado(){
    let campos_validos;
    let campo_fecha = document.getElementById("campo_fecha").value;
    let campo_texto_comunicado = String(document.getElementById("campo_texto_comunicado").value);
    let opcion_comunicado = conseguirOpcionComunicado();

    if(campo_fecha.length !=0 && campo_texto_comunicado !=0 && opcion_comunicado){
        console.log(opcion_comunicado);
        insertarComunicado(opcion_comunicado);
        actualizarNombreBoton(opcion_comunicado);
        quitarMargenSuperior(opcion_comunicado);
        
        document.getElementById("campo_fecha_a_modificar").innerHTML = campo_fecha;
        let texto = campo_texto_comunicado.replace(/\n|\r/g, "<br>");
        document.getElementById("campo_texto_a_modificar").innerHTML = texto;
        
        campos_validos = true;
    }
    else
        campos_validos = false;

    return campos_validos;
}

/**
 * Agrega una clase al body que cambia el color de fondo.
 */
function cambiarColoresAlBody(){
    document.querySelector("body").classList.add("nuevos_colores_del_body");
}

/**
 * Muestra el bloque que contiene el comunicado y los botones.
 */
function mostrarContenidoOculto(){
    let div = document.getElementById("bloque_contenido_oculto");

    div.classList.remove("bloque_contenido_oculto");
    div.classList.add("mostrar_bloque_oculto");
}

/**
 * Actualiza la pagina, utilizando las funciones anteriores.
 */
function actualizarPagina(){
    if(actualizarComunicado()){
        cambiarColoresAlBody();
        mostrarContenidoOculto();
        irAlElemento("#cuerpo_del_comunicado");
    }
}