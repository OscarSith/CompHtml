const url_servicio = 'http://localhost/proyecto_prueba/enlaces.php';
let listaEnlaces = [];

const traerEnlaces = () => {
    fetch(url_servicio).then((response) => {
        return response.json();
    }).then((enlaces) => {
        listaEnlaces = enlaces;
        const primeros = enlaces.filter((enlace) => {
            if(enlace.parentesco == 0){
                return enlace;
            }
        })

        let item_html = "";

        for (let i = 0; i < primeros.length; i++) {
            item_html += `<li class="mb-3">
                            <a href="#${primeros[i].id}" class="text-decoration-none fs-5 text-secondary d-block bg-white p-2">${primeros[i].nombre}</a>
                        </li>`;
            
        }

        document.getElementById("lista-primeros").innerHTML = item_html;

        const nodeListEnlaces = document.querySelectorAll('#lista-primeros a');
        nodeListEnlaces.forEach((enlace) => {
            enlace.addEventListener("click", (event) => {
                event.preventDefault();

                const enlace = event.target;
                const seleccionado = event.target.closest("ul").querySelector("a.seleccionado");
                if (seleccionado != null) {
                    seleccionado.classList.remove("seleccionado");
                }
                enlace.classList.add("seleccionado");

                //Obtengo información del atributo href
                let idLista = enlace.getAttribute("href");

                //Obtener el id
                idLista = idLista.substr(1);

                //Obtener sub enlaces de los primeros enlaces
                const subEnlaces = listaEnlaces.filter((enlace) => {
                    if (enlace.parentesco == idLista) {
                        return enlace;
                    }
                })

                let item_html = "";

                for (let i = 0; i < subEnlaces.length; i++) {
                    item_html += `<li class="mb-3">
                                    <a href="#${subEnlaces[i].id}" class="text-decoration-none fs-5 text-secondary d-block bg-white p-2">${subEnlaces[i].nombre}</a>
                                </li>`;
                    
                }

                document.getElementById("sub-lista").innerHTML = item_html;
            })
        })
    });
}

traerEnlaces();