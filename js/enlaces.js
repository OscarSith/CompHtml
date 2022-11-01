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
            item_html += imprimirEnlace(primeros[i]);
          
        };

        document.getElementById("lista-primeros").innerHTML = item_html;

        const nodeListEnlaces = document.querySelectorAll('#lista-primeros a');
        nodeListEnlaces.forEach((enlace) => {
            enlace.addEventListener("click", eventoClickPrimeraLista);
        });
    });
};

const eventoClickPrimeraLista = (event) => {
    event.preventDefault();

    const enlace = event.target;
    const seleccionado = enlace.closest("ul").querySelector("a.seleccionado");
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
    });

    let item_html = "";

    for (let i = 0; i < subEnlaces.length; i++) {
        item_html += imprimirEnlace(subEnlaces[i]);
    }

    document.getElementById("sub-lista").innerHTML = item_html;
    document.getElementById("descripcion").innerHTML = "";

    const nodoListaSubEnlaces = document.querySelectorAll("#sub-lista a");
    for(let i = 0; i < nodoListaSubEnlaces.length; i++){
        nodoListaSubEnlaces[i].addEventListener("click", eventoClickSublista);                    
    }
};

const eventoClickSublista = (evento) => {
                        
    let subEnlaceSelect = evento.target.closest("ul").querySelector("a.seleccionado");
    if (subEnlaceSelect != null) {
        subEnlaceSelect.classList.remove("seleccionado");
    }
    evento.target.classList.add("seleccionado");

    let idElementoSelect = evento.target.getAttribute("href").substr(1);
    //console.log(idElementoSelect);

// TODO: Usar el método find del arreglo listaEnlaces
   const itemEncontrado = listaEnlaces.find((item) => {
       if (idElementoSelect == item.id) {
            return item;
       }; 
    });
    let descripcion = `<div class="py-3 px-4 bg-white rounded-3">
                            <h4 class="pb-3 ">${itemEncontrado.nombre}</h4>
                            <p class="my-4">${itemEncontrado.descripcion}</p>
                            <div class="d-grid gap-2">
                                <a href="${itemEncontrado.url}" class="rounded py-2 px-3 btn-enlaces text-light text-center text-decoration-none">${itemEncontrado.nombre}</a>
                            </div>                                                
                        </div>`;
    
    document.getElementById("descripcion").innerHTML = descripcion;
}

const imprimirEnlace = (enlaceObjeto) => {
    return `<li class="mb-3">
                <a href="#${enlaceObjeto.id}" class="text-decoration-none fs-5 text-secondary d-block bg-white p-2">${enlaceObjeto.nombre}</a>
            </li>`;
}
traerEnlaces();
