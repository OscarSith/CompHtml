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
        document.getElementById("nombres").innerText = `${usuario.primer_nombre} ${usuario.segundo_nombre}`;
        document.getElementById("apellidos").innerText = `${usuario.primer_apellido} ${usuario.segundo_apellido}`;
        document.getElementById("estado-civil").innerText = usuario.estado_civil;
        document.getElementById("genero").innerText = usuario.genero;

        const fecha = new Date(usuario.fecha_nac);
        document.getElementById("fecha-nac").innerText = fecha.toLocaleString("es-PE", {year: 'numeric', month:"long", day: "2-digit"})
        
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

    document.getElementById('input-primer-nombre').value = data_usuario.primer_nombre;
};

traerUsuarios();