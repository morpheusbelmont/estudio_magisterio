/*==========================================================
 MAGISTERIO PRO
 router.js
 Versión 2.0

 Motor de Navegación

 Lic. Carlos Eduardo Sepúlveda Toro
==========================================================*/

"use strict";

/*==========================================================
 CONTENEDOR PRINCIPAL
==========================================================*/

const content = document.getElementById("content");

/*==========================================================
 RENDERIZAR VISTA
==========================================================*/

function render(view){

    switch(view){

        case "inicio":

            renderInicio();

        break;

        case "biblioteca":

            renderBiblioteca();

        break;

        case "simulacros":

            renderSimulacros();

        break;

        case "progreso":

            renderProgreso();

        break;

        case "configuracion":

            renderConfiguracion();

        break;

        default:

            renderInicio();

    }

}

/*==========================================================
 INICIO
==========================================================*/

function renderInicio(){

    content.innerHTML=`

    <section class="card">

        <h2>${biblioteca.inicio.titulo}</h2>

        <p>

            ${biblioteca.inicio.descripcion}

        </p>

        <br>

        <p>

            ${biblioteca.inicio.mensaje}

        </p>

    </section>

    <section class="grid" id="modulos"></section>

    `;

    cargarModulos();

}

/*==========================================================
 MÓDULOS
==========================================================*/

function cargarModulos(){

    const grid=document.getElementById("modulos");

    biblioteca.modulos.forEach(modulo=>{

        grid.innerHTML+=`

        <div
            class="module"
            onclick="abrirModulo('${modulo.id}')">

            <h3>

                ${modulo.icono}
                ${modulo.nombre}

            </h3>

            <p>

                ${modulo.descripcion}

            </p>

        </div>

        `;

    });

}

/*==========================================================
 BIBLIOTECA
==========================================================*/

function renderBiblioteca(){

    content.innerHTML=`

    <section class="card">

        <h2>

            Biblioteca

        </h2>

        <p>

            Seleccione un módulo para consultar la
            documentación.

        </p>

    </section>

    <div class="list" id="listaModulos"></div>

    `;

    const lista=document.getElementById("listaModulos");

    biblioteca.modulos.forEach(modulo=>{

        lista.innerHTML+=`

        <button
            onclick="abrirModulo('${modulo.id}')">

            ${modulo.icono}
            ${modulo.nombre}

        </button>

        `;

    });

}

/*==========================================================
 ABRIR MÓDULO
==========================================================*/

function abrirModulo(id){

    const documentos=biblioteca.documentos.filter(

        documento=>documento.modulo===id

    );

    let html=`

    <section class="card">

    <h2>

    Documentación

    </h2>

    <p>

    Recursos oficiales disponibles.

    </p>

    </section>

    <div class="list">

    `;

    if(documentos.length===0){

        html+=`

        <button>

        Próximamente...

        </button>

        `;

    }

    documentos.forEach(documento=>{

        html+=`

        <button

        onclick="window.open('${documento.url}','_blank')">

        [PDF]

        ${documento.titulo}

        </button>

        `;

    });

    html+=`

    </div>

    `;

    content.innerHTML=html;

}

/*==========================================================
 SIMULACROS
==========================================================*/

function renderSimulacros(){

    content.innerHTML=`

    <section class="card">

        <h2>

            Simulacros

        </h2>

        <p>

            Aquí aparecerán los simuladores del Concurso
            Docente.

        </p>

    </section>

    `;

}

/*==========================================================
 PROGRESO
==========================================================*/

function renderProgreso(){

    content.innerHTML=`

    <section class="card">

        <h2>

            Progreso

        </h2>

        <p>

            Próximamente podrás guardar tu avance.

        </p>

    </section>

    `;

}

/*==========================================================
 CONFIGURACIÓN
==========================================================*/

function renderConfiguracion(){

    content.innerHTML=`

    <section class="card">

        <h2>

            Configuración

        </h2>

        <p>

            Personaliza la aplicación.

        </p>

    </section>

    `;

}
