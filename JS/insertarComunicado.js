/**
 * Inserta el codigo HTML del comunicado, para luego ser descargado como PNG.
 */
function insertarComunicadoPng(){
    document.getElementById("seccion_del_comunicado").innerHTML = `
    <div class="contenedor_del_comunciado" id="cuerpo_del_comunicado">
        <header>
            <img src="Imagenes/logo_tics_cian.png" alt="encabezado_logo_tics">
            <h2 id="campo_fecha_a_modificar">[(día) (fecha) de (mes) (año)]</h2>
        </header>

        <main class="contenedor_cuerpo_del_mensaje">
            <h1>Mesa de Ayuda informa</h1>

            <section class="mensaje">
                <h3>Estimados usuarios,</h3>
                <p id="campo_texto_a_modificar">[Texto del comunicado]</p>
            </section>

            <section class="saludo_de_despedida">
                <p>Cordialmente,</p>
                <p>Subsecretaría de TICs.</p>
            </section>
        </main>

        <footer>
            <div class="contenedor_dos_cols">
                <div class="boton">
                    <p>mesadeayuda.fi.uba.ar</p>
                    <img src="Imagenes/icono_fiuba.png" alt="ico_mesa" width="16px">
                </div>

                <div class="contenedor_dos_cols">
                    <div class="boton">
                        <p>528-50944</p>
                        <img src="Imagenes/icono_tel_celeste.png" alt="ico_tel" width="16px">
                    </div>

                    <div class="boton">
                        <p>528-50945</p>
                        <img src="Imagenes/icono_tel_celeste.png" alt="ico_tel" width="16px">
                    </div>
                </div>
            </div>
        </footer>
    </div>
    `;
}

/**
 * Inserta el codigo HTML del comunicado, para luego ser copiado con los nuevos textos.
 */
function insertarComunicadoMail(){
    document.getElementById("seccion_del_comunicado").innerHTML = `
    <div id="cuerpo_del_comunicado">
        <table style="border-collapse: collapse; border-spacing: 0; margin: 0 auto 60px; width: 100%; min-width: 500px; max-width: 600px; font-family: Arial, Helvetica, sans-serif;">
            <tbody>
                <!-- Encabezado Logo TICS -->
                <tr>
                    <td style="padding: 0; width: 100%;">
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHe7-r_zxhg_tW86Y-gbce-JTz0Bywz61wALmaMKrSoU0JkVgtcPz2zTxoArKV5BsUC7vALgtB6RiUVLIcAzVZ8KCWjWlg0abtQy8BmhUWw93KFwLz8=w2400" alt="encabezado_logo_tics" width="100%" style="display: block;">
                    </td>
                </tr>

                <!-- Fecha -->
                <tr style="height: 26px;">
                    <td style="vertical-align: middle; padding: 4px 20px; background-color: #e0e0e0; width: 100%;">
                        <h2 id="campo_fecha_a_modificar" style="margin: 0; color: #19abff; font-size: 1em;">[(día) (fecha) de (mes) (año)]</h2>
                    </td>
                </tr>

                <!-- Titulo principal -->
                <tr>
                    <td style="padding: 20px;background-color: #fffafa; width: 100%;">
                        <h1 style="margin: 0;text-align: center;font-size: 2.6em;">Mesa de Ayuda informa</h1>
                    </td>
                </tr>

                <!-- Cuerpo del mensaje -->
                <tr>
                    <td style="padding: 0 20px 20px;background-color: #fffafa; width: 100%;">
                        <div class="mensaje" style="font-size: 1.2em;">
                            <h3 style="margin: 0 0 20px;">Estimados usuarios:</h3>
                            <p id="campo_texto_a_modificar" style="margin: 0;">[Texto del comunicado]</p>
                        </div>

                        <div style="font-size: 1.2em;margin-top: 20px;">
                            <p style="margin: 0;">Cordialmente,</p>
                            <p style="margin: 0;">Subsecretaría de TICs.</p>
                            <h3 style="margin: 20px 0 0;">No debe contestar este correo.</h3>
                        </div>
                    </td>
                </tr>

                <!-- Pie de pagina -->
                <tr style="height: 26px; width: 100%;">
                    <td style="padding: 4px 20px; background-color: #636363; width: 100%;">
                        <table style="border-collapse: collapse; border-spacing: 0; font-family: Arial, Helvetica, sans-serif; width: 100%;">
                            <tbody>
                                <tr>
                                    <!-- Boton de Mesa de Ayuda -->
                                    <td style="padding: 0 4px 0 0; width: 80%;">
                                        <div style="width: max-content;">
                                            <a href="https://mesadeayuda.fi.uba.ar/" target="_blank" style="text-decoration: none; color: white;">
                                                <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding: 0 2px 0 0; vertical-align: middle; font-size: 12px;">
                                                                <p style="margin: 0;">Sitio Mesa de Ayuda</p>
                                                            </td>

                                                            <td style="padding: 0;">
                                                                <img src="https://lh3.googleusercontent.com/pw/ADCreHePhHzKftKCxrpmdo4jLb5NkuJqYx6Yd-DCEz6sUpymlIndAN3W6KwlhWS2FCvqU-sNksTFcjP0cKM6hXvOXJhE7NwMsJCaqA6laPGZB8X6uZvBtkk=s100-p-k" alt="ico_mesa" width="16px" style="display: block; background-color: white; border-radius: 50%; border: 1px silver solid;">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </a>
                                        </div>
                                    </td>

                                    <!-- Boton de Interno 1 -->
                                    <td style="padding: 0 4px 0 0;">
                                        <div style="width: max-content;">
                                            <a href="tel:+54-11-5285-0944" target="_blank" style="text-decoration: none; color: white">
                                                <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding: 0 2px 0 0; vertical-align: middle; font-size: 12px;">
                                                                <p style="margin: 0;">Int: 50944</p>
                                                            </td>

                                                            <td style="padding: 0;">
                                                                <img src="https://lh3.googleusercontent.com/pw/ADCreHcSxReskt-5mKd0oAPv2WaOa48JRzm95SAhlIG_iYv9gnjQ81nFi2nn19xRPzSgjvf9UiQbavXvT2zIqIftWNZwqe548TQRdFWhFJNXGdKZaPHMI5s=w2400" alt="ico_tel" width="16px" style="display: block; background-color: white; border-radius: 50%; border: 1px silver solid;">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </a>
                                        </div>
                                    </td>

                                    <!-- Boton de Interno 2 -->
                                    <td style="padding: 0 4px 0 0;">
                                        <div style="width: max-content;">
                                            <a href="tel:+54-11-5285-0945" target="_blank" style="text-decoration: none; color: white">
                                                <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding: 0 2px 0 0; vertical-align: middle; font-size: 12px;">
                                                                <p style="margin: 0;">Int: 50945</p>
                                                            </td>

                                                            <td style="padding: 0;">
                                                                <img src="https://lh3.googleusercontent.com/pw/ADCreHcSxReskt-5mKd0oAPv2WaOa48JRzm95SAhlIG_iYv9gnjQ81nFi2nn19xRPzSgjvf9UiQbavXvT2zIqIftWNZwqe548TQRdFWhFJNXGdKZaPHMI5s=w2400" alt="ico_tel" width="16px" style="display: block; background-color: white; border-radius: 50%; border: 1px silver solid;">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </a>
                                        </div>
                                    </td>

                                    <!-- Boton de Whatsapp -->
                                    <td style="padding: 0;">
                                        <div style="width: max-content;">
                                            <a href="https://wa.me/message/7OJGD6DGKGHWK1" target="_blank" style="text-decoration: none; color: white;">
                                                <table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding: 0 2px 0 0; vertical-align: middle; font-size: 12px;">
                                                                <p style="margin: 0;">WhatsApp</p>
                                                            </td>

                                                            <td style="padding: 0;">
                                                                <img src="https://lh3.googleusercontent.com/pw/ADCreHcS86NmnMpT28r6MbLUapQkgGUZHWgSVsqdDzQASbBFIJFD1fcbQTuiykma9moUxopG-g2tB36XjUomSzgEYHtQsyytjDux32h6zIbmhALS6hYxx9g=w2400" alt="ico_wapp" width="16px" style="display: block; background-color: white; border-radius: 50%; border: 1px silver solid;">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
}

/**
 * Inserta el comunicado que corresponda, dependiendo de la opcion.
 * @param {String} opcion 
 */
function insertarComunicado(opcion){
    if(opcion == "Descargar")
        insertarComunicadoPng();
    else
        insertarComunicadoMail();
}

function actualizarBotonDescargar(){
    document.getElementById("boton_desc/copiar").value = "Descargar Comunicado";
}

function actualizarBotonCopiar(){
    document.getElementById("boton_desc/copiar").value = "Copiar Comunicado";
}

/**
 * Actualiza el nombre del boton: Descarga | Copiar.
 * @param {String} opcion 
 */
function actualizarNombreBoton(opcion){
    if(opcion == "Descargar")
        actualizarBotonDescargar();
    else
        actualizarBotonCopiar();
}