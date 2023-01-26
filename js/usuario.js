let data_usuario = null;

const traerUsuarios = () => {
    fetch("http://localhost/proyecto_prueba/usuario.php")
    .then((response) =>{
        return response.json();
    }).then((usuario) => {
        data_usuario = usuario;

        const nombreCompleto = `${usuario.primer_nombre} ${usuario.segundo_nombre} ${usuario.primer_apellido} ${usuario.segundo_apellido}`;
        document.getElementById("nombre-completo").innerText = nombreCompleto;
        document.getElementById("doc-usuario").innerText = usuario.doc_usuario;
        document.getElementById("imagen-perfil").setAttribute("src", "images/" + usuario.foto);

        // tab datos basicos
        imprimirDatosBasicos(usuario);
        // Tab datos contacto
        document.getElementById("correo").innerText = usuario.datos_contacto.correo;
        document.getElementById("celular").innerText = usuario.datos_contacto.celular;
        document.getElementById("tel-fijo").innerText = usuario.datos_contacto.tel_fijo;
        document.getElementById("dpto").innerText = usuario.datos_contacto.departamento;
        document.getElementById("localidad").innerText = usuario.datos_contacto.localidad;
        document.getElementById("direccion").innerText = usuario.datos_contacto.direccion;
        document.getElementById("barrio").innerText = usuario.datos_contacto.barrio;
        document.getElementById("ciudad").innerText = usuario.datos_contacto.ciudad;

        //Tab datos adicionales
        document.getElementById("o-sexual").innerText = usuario.datos_adicionales.orientacion_sexual;
        document.getElementById("factor-v").innerText = usuario.datos_adicionales.factor_vulner;
        document.getElementById("cod-ocup").innerText = usuario.datos_adicionales.cod_ocupacion;
        document.getElementById("nivel-esc").innerText = usuario.datos_adicionales.nivel_escolaridad;
        document.getElementById("pert-etnica").innerText = usuario.datos_adicionales.pertenencia_etnica;
        document.getElementById("pref-contacto").innerText = usuario.datos_adicionales.pref_contacto;

        document.getElementById("btn-mostrar-form-datos-basicos").addEventListener("click", mostrarFormularioDatosBasicos);
        document.getElementById("btn-cancelar").addEventListener("click", mostrarContenidoBtnCancelar);
        document.getElementById("btn-cancelar2").addEventListener("click", mostrarContenidoBtnCancelar);
        document.getElementById("btn-cancelar3").addEventListener("click", mostrarContenidoBtnCancelar);
        document.getElementById("btn-anterior").addEventListener("click", mostrarContenidoBtnAnterior);
        document.getElementById("btn-anterior2").addEventListener("click", mostrarContenidoBtnAnterior2);
        document.getElementById("btn-paso2").addEventListener("click", mostrarContenidoPaso2);
        document.getElementById("btn-paso3").addEventListener("click", mostrarContenidoPaso3);
        document.getElementById("enviar-actualizacion-usuario").addEventListener("click", enviarActualizarUsuario);
        document.getElementById("btn-fin-actualizarUser").addEventListener("click", regresarFormularioInicio); 
        const listaNodosDropZone = document.querySelectorAll(".dropzone");

        for (let i = 0; i < listaNodosDropZone.length; i++) {
            const element = listaNodosDropZone[i];
            element.addEventListener("dragenter", arrastrarArchivo);
            element.addEventListener("drop", dropArchivo);
        
        }
        
        const listaNodosSelectFile = document.querySelectorAll(".link-select-file");
        const listaNodosInputFile = document.querySelectorAll(".input-documento");

        for (let i = 0; i < listaNodosSelectFile.length; i++) {
            const nodoHtml = listaNodosSelectFile[i];
            nodoHtml.addEventListener("click", buscarArchivo);

            listaNodosInputFile[i].addEventListener("change", capturarImagen);
        }
        

        // TODO: estas lineas iran en la funcion mostrarFormularioDatosBasicos
        document.getElementById('input-primer-nombre').value = data_usuario.primer_nombre;
        document.getElementById('input-segundo-nombre').value = data_usuario.segundo_nombre;
        document.getElementById('input-primer-apellido').value = data_usuario.primer_apellido;
        document.getElementById('input-segundo-apellido').value = data_usuario.segundo_apellido;
        document.getElementById('fecha-nacimiento').value = data_usuario.fecha_nac;

        const selectGenero = document.getElementById('select-genero');
        if (data_usuario.genero == selectGenero.options[0].value) {
            selectGenero.options[0].selected = true;
        }else{
            selectGenero.options[1].selected = true;
        }


        const selectEstadoCivil = document.getElementById('select-estado-civil');

        for (let i = 0; i < selectEstadoCivil.options.length; i++) {
            const optionValue = selectEstadoCivil.options[i].value;

            if (optionValue == data_usuario.estado_civil) {
                // selectEstadoCivil.options[i].selected = true;
                selectEstadoCivil.options.selectedIndex = i;
            }
        }
    });
}

const mostrarFormularioDatosBasicos = (evento) => {
    document.getElementById("panel-datos-basicos").classList.add("d-none");
    document.getElementById("form-datos-basicos").classList.remove("d-none");
    document.querySelector("#wizard-actualizar-datos .col").classList.add("active");
};

const mostrarContenidoBtnCancelar = (evento) => {
    //console.log(evento);
    document.getElementById("form-datos-basicos").classList.add("d-none");
    document.getElementById("panel-datos-basicos").classList.remove("d-none");
}

const mostrarContenidoBtnAnterior = (evento) => {
    document.getElementById("actualizar-datos-paso1").classList.remove("d-none");
    document.getElementById("actualizar-datos-paso2").classList.add("d-none");
    document.querySelector("#wizard-actualizar-datos .col").classList.remove("check-listo");
    document.querySelector("#wizard-actualizar-datos .col").classList.add("active");
    document.querySelector("#wizard-actualizar-datos .column2").classList.remove("active");
}

const mostrarContenidoBtnAnterior2 = (evento) => {
    document.getElementById("actualizar-datos-paso3").classList.add("d-none");
    document.getElementById("actualizar-datos-paso2").classList.remove("d-none");
    document.querySelector("#wizard-actualizar-datos .column2").classList.remove("check-listo");
    document.querySelector("#wizard-actualizar-datos .column3").classList.remove("active");
    document.querySelector("#wizard-actualizar-datos .column2").classList.add("active");
}

const obtenerFormData = () => {
    const formElement = document.getElementById("form-actualizar-datos");
    const formData = new FormData(formElement);
    formData.append("id", data_usuario.id);
    return formData;
}

const mostrarContenidoPaso2 = (evento) => {
    let formData = obtenerFormData();
    let objectData = {
        estado_civil: formData.get("estado_civil"),
        fecha_nac: formData.get("fecha_nac"),
        genero: formData.get("genero"),
        primer_apellido: formData.get("primer_apellido"),
        primer_nombre: formData.get("primer_nombre"),
        segundo_apellido: formData.get("segundo_apellido"),
        segundo_nombre: formData.get("segundo_nombre")
    };
    let listaDatosModificados = [];
    
    listaDatosModificados.push({
        label: "Primer nombre",
        value: objectData.primer_nombre,
        show: data_usuario.primer_nombre !== objectData.primer_nombre
    });


    listaDatosModificados.push({
        label: "Segundo nombre",
        value: objectData.segundo_nombre,
        show: data_usuario.segundo_nombre !== objectData.segundo_nombre
    });
    
    listaDatosModificados.push({
        label: "Primer apellido",
        value: objectData.primer_apellido,
        show: data_usuario.primer_apellido !== objectData.primer_apellido
    });
    
    listaDatosModificados.push({
        label: "Segundo apellido",
        value: objectData.segundo_apellido,
        show: data_usuario.segundo_apellido !== objectData.segundo_apellido
    });

    listaDatosModificados.push({
        label: "Género",
        value: objectData.genero,
        show: data_usuario.genero !== objectData.genero
    });
    
    listaDatosModificados.push({
        label: "Estado civil",
        value: objectData.estado_civil,
        show: data_usuario.estado_civil !== objectData.estado_civil
    });
    
    listaDatosModificados.push({
        label: "Fecha nacimiento ",
        value: objectData.fecha_nac,
        show: data_usuario.fecha_nac !== objectData.fecha_nac
    });
    
//console.log(listaDatosModificados);

    let imprimirObjeto = "";
    for (let i = 0; i < listaDatosModificados.length; i++) {
        const object = listaDatosModificados[i]; 
        if(object.show == true){
            imprimirObjeto +=    `<div class="row">
                                <div class="col-3 label-dato-actualizado">
                                    <p>${object.label}</p>
                                </div>
                                <div class="col-9">
                                    <p>${object.value}</p>
                                </div>
                            </div>`
        }     
    }

    if (imprimirObjeto == "") {
        alert("No se modificó ningun dato")
    }else{
        document.getElementById("datos-modificados").innerHTML = imprimirObjeto;
        document.getElementById("actualizar-datos-paso2").classList.remove("d-none");
        document.getElementById("actualizar-datos-paso1").classList.add("d-none");
        document.querySelector("#wizard-actualizar-datos .col").classList.remove("active");
        document.querySelector("#wizard-actualizar-datos .col").classList.add("check-listo");
        document.querySelector("#wizard-actualizar-datos .column2").classList.add("active");
    }

}
const enviarActualizarUsuario = (evento) => {
    evento.preventDefault();
    const formData = obtenerFormData();
    fetch("http://localhost/proyecto_prueba/update_usuario.php", {
        method: 'POST',
        body: formData    
    })
    .then((response) =>{
        return response.json();
    }).then((result) => {
        if (result == true) {
            const options = {
                backdrop : 'static'
            };
            const myModal = new bootstrap.Modal(document.getElementById('modal-actualizar-usuario'), options);
            myModal.show();
            
            data_usuario.estado_civil = formData.get("estado_civil");
            data_usuario.primer_nombre = formData.get("primer_nombre");
            data_usuario.segundo_nombre = formData.get("segundo_nombre");
            data_usuario.primer_apellido = formData.get("primer_apellido");
            data_usuario.segundo_apellido = formData.get("segundo_apellido");
            data_usuario.genero = formData.get("genero");
            data_usuario.fecha_nac = formData.get("fecha_nac");

            imprimirDatosBasicos(data_usuario);
        }else{
            alert("No se pudo actualizar datos")
        }
    })
}

const mostrarContenidoPaso3 = (evento) => {
    document.getElementById("actualizar-datos-paso3").classList.remove("d-none");
    document.getElementById("actualizar-datos-paso2").classList.add("d-none");
    document.querySelector("#wizard-actualizar-datos .column2").classList.remove("active");
    document.querySelector("#wizard-actualizar-datos .column2").classList.add("check-listo");
    document.querySelector("#wizard-actualizar-datos .column3").classList.add("active");
}

const buscarArchivo = (evento) => {
    evento.preventDefault();
    evento.target.closest(".col").querySelector(".input-documento").click();

}

const capturarImagen = (evento) => {
    const contenedorAdjuntarDatos = evento.target.closest(".txt-adjuntar-datos");
    const miArchivo = evento.target.files[0];
    const htmlArchivo = `<div class="row input-adjuntar-datos rounded py-3 g-0">
                            <div class="col text-center">
                                <i class="bi bi-file-earmark-spreadsheet"></i>
                            </div>
                            <div class="col-9">
                                <p class="mb-0">${miArchivo.name}</p>
                            </div>
                            <div class="col text-center">
                                <button type="button" class="border-0 bg-transparent btn-eliminar-archivo">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </div>
                        </div>`;
                        
    contenedorAdjuntarDatos.querySelector(".item-prueba").innerHTML = htmlArchivo;
    contenedorAdjuntarDatos.querySelector(".btn-eliminar-archivo").addEventListener("click", (evento) => {
        const contenedor = evento.target.closest(".txt-adjuntar-datos");
        contenedor.querySelector("i.bi-check-lg").classList.add("d-none");
        contenedor.querySelector(".div-espacio").classList.remove("d-none");
        contenedor.querySelector(".item-prueba").innerHTML = `<div class="row input-adjuntar-datos2 p-3 g-0 align-items-center">
                                                                    <div class="col-1">
                                                                        <i class="bi bi-cloud-upload"></i>
                                                                    </div>
                                                                    <div class="col-11">
                                                                        <p class="mb-0">Arrastre y suelte su archivo aquí o <br>
                                                                            <a href="#" class="link-select-file">seleccione su archivo</a>
                                                                        </p>
                                                                    </div>                                                   
                                                                </div>`
        contenedor.querySelector(".link-select-file").addEventListener("click", buscarArchivo);

    });

    contenedorAdjuntarDatos.querySelector("i.bi-check-lg").classList.remove("d-none");
    contenedorAdjuntarDatos.querySelector(".div-espacio").classList.add("d-none");

}

const regresarFormularioInicio = (evento) => {
    document.getElementById("form-datos-basicos").classList.add("d-none");
    document.getElementById("actualizar-datos-paso1").classList.remove("d-none");
    document.getElementById("actualizar-datos-paso2").classList.add("d-none");
    document.getElementById("actualizar-datos-paso3").classList.add("d-none");
    document.getElementById("panel-datos-basicos").classList.remove("d-none");
}

const imprimirDatosBasicos = (usuario) => {
        document.getElementById("nombres").innerText = `${usuario.primer_nombre} ${usuario.segundo_nombre}`;
        document.getElementById("apellidos").innerText = `${usuario.primer_apellido} ${usuario.segundo_apellido}`;
        document.getElementById("estado-civil").innerText = usuario.estado_civil;
        document.getElementById("genero").innerText = usuario.genero;
        const dateFormat = new Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
              
        const dateParts = dateFormat.formatToParts(new Date(usuario.fecha_nac + "T00:00:00"));
        document.getElementById("fecha-nac").innerText = dateParts[0].value + " " + dateParts[2].value + " " + dateParts[4].value;                 
}

function arrastrarArchivo (event) {
    event.stopPropagation();
    event.preventDefault();
    console.log("OK");
}

function dropArchivo (evento) {
    evento.stopPropagation();
    evento.preventDefault();
    console.log("soltar archivo")
}

traerUsuarios();