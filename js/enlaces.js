const url_servicio = 'http://localhost/proyecto_prueba/enlaces.php';
const traerEnlaces = () => {
    fetch(url_servicio).then((response) => {
        return response.json();
    }).then((enlaces) => {
        
        const primeros = enlaces.filter((enlace) => {
            if(enlace.parentesco == 0){
                return enlace;
            }
        })
        console.log(primeros);

        let item_html = "";

        for (let i = 0; i < primeros.length; i++) {
            item_html += `<li class="mb-3">
                            <a href="#" class="text-decoration-none fs-5 text-secondary d-block bg-white p-2">${primeros[i].nombre}</a>
                        </li>`;
            
        }

        document.getElementById("lista-primeros").innerHTML = item_html;

        const nodeListEnlaces = document.querySelectorAll('#lista-primeros a');
        nodeListEnlaces.forEach((enlace) => {
            enlace.addEventListener("click", (event) => {
                event.preventDefault();

                const seleccionado = event.target.closest("ul").querySelector("a.seleccionado");
                if (seleccionado != null) {
                    seleccionado.classList.remove("seleccionado");
                }
                event.target.classList.add("seleccionado");
            })
        })
    });
}

traerEnlaces();