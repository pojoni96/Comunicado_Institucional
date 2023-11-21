/**
 * Copia el comunicado en el portapapales.
 */
function copiarComunicado(){
    let div = document.getElementById("seccion_del_comunicado").innerHTML;

    navigator.clipboard.writeText(div);
}

/**
 * Descarga el comunicado en formato PNG.
 */
function descargarComunicado(){
    const comunicado = document.getElementById("cuerpo_del_comunicado");
    let nombre_archivo = "CI-" + String(document.getElementById("campo_fecha").value).replace(/\s/g,'_') + ".png";

    html2canvas(comunicado, {scale: 5, allowTaint: true, useCORS: true}).then((canvas) => {
        let base64img= canvas.toDataURL("image/png");
        base64img.crossOrigin = "anonymous";
        let aux_hlink = document.createElement("a");
        aux_hlink.setAttribute("href", base64img);
        aux_hlink.setAttribute("download", nombre_archivo);
        aux_hlink.click();
        aux_hlink.remove();
    });
}

/**
 * Dependiendo de la opcion del comunicado, se descarga la imagen o copia el codigo HTML.
 */
function gestionarComunicado(){
    let opcion = conseguirOpcionComunicado();

    if(opcion == "Descargar"){
        descargarComunicado();
        document.querySelector("#boton_confirmacion p").innerHTML = "¡Imagen Descargada Correctamente!";
    }
    
    else{
        copiarComunicado();
        document.querySelector("#boton_confirmacion p").innerHTML = "¡Código HTML Copiado Correctamente!";
    }

    document.getElementById("boton_confirmacion").style.visibility = "visible";
    irAlElemento("#boton_confirmacion");
}