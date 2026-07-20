/*=========================================================
 MAGISTERIO PRO
 app.js
 Versión 1.0

 Autor:
 Lic. Carlos Eduardo Sepúlveda Toro
=========================================================*/

"use strict";

/*=========================================================
 VARIABLES
=========================================================*/

const home = document.getElementById("home");
const dashboard = document.getElementById("dashboard");

const btnComenzar = document.getElementById("btnComenzar");

const modules = document.querySelectorAll(".module");

/*=========================================================
 INICIALIZACIÓN
=========================================================*/

window.addEventListener("load", iniciarSistema);

/*=========================================================
 SISTEMA
=========================================================*/

function iniciarSistema(){

    console.clear();

    console.log("====================================");
    console.log(" MAGISTERIO PRO");
    console.log(" Sistema iniciado correctamente");
    console.log("====================================");

    registrarEventos();

}

/*=========================================================
 EVENTOS
=========================================================*/

function registrarEventos(){

    if(btnComenzar){

        btnComenzar.addEventListener(
            "click",
            mostrarDashboard
        );

    }

    modules.forEach(modulo=>{

        modulo.addEventListener(

            "click",

            abrirModulo

        );

    });

}

/*=========================================================
 MOSTRAR DASHBOARD
=========================================================*/

function mostrarDashboard(){

    home.classList.remove("active");

    dashboard.classList.add("active");

}

/*=========================================================
 ABRIR MÓDULOS
=========================================================*/

function abrirModulo(e){

    const nombre=e.target.innerText.trim();

    switch(nombre){

        case "[>] MARCO NORMATIVO":

            abrirMarcoNormativo();

        break;

        case "[>] GESTIÓN ADMINISTRATIVA":

            mensaje("Gestión Administrativa");

        break;

        case "[>] GESTIÓN ACADÉMICA":

            mensaje("Gestión Académica");

        break;

        case "[>] CONVIVENCIA ESCOLAR":

            mensaje("Convivencia Escolar");

        break;

        case "[>] EDUCACIÓN INCLUSIVA":

            mensaje("Educación Inclusiva");

        break;

        case "[>] COMPETENCIAS DOCENTES":

            mensaje("Competencias Docentes");

        break;

        case "[>] LECTURA CRÍTICA":

            mensaje("Lectura Crítica");

        break;

        case "[>] RAZONAMIENTO CUANTITATIVO":

            mensaje("Razonamiento Cuantitativo");

        break;

        case "[>] CONOCIMIENTO ESPECÍFICO":

            mensaje("Conocimiento Específico");

        break;

        case "[>] SIMULACROS CNSC":

            mensaje("Simulacros");

        break;

    }

}

/*=========================================================
 MENSAJES
=========================================================*/

function mensaje(texto){

    alert(

        "Módulo seleccionado:\\n\\n"+

        texto+

        "\\n\\nDisponible próximamente."

    );

}

/*=========================================================
 MARCO NORMATIVO
=========================================================*/

function abrirMarcoNormativo(){

    alert(

`MARCO NORMATIVO

Documentos recomendados

• Constitución Política

• Ley 115 de 1994

• Decreto 1075 de 2015

• Ley 715 de 2001

• Decreto Ley 1278 de 2002

• Decreto 1290 de 2009

• Ley 1620 de 2013

• Decreto 1421 de 2017

• Ley 1098 de 2006

• Manual de Funciones

En la siguiente versión este módulo
abrirá una biblioteca con enlaces
directos a los documentos oficiales.`

    );

}

/*=========================================================
 UTILIDADES
=========================================================*/

function abrirURL(url){

    window.open(

        url,

        "_blank"

    );

}

/*=========================================================
 FUTURAS VERSIONES
=========================================================*/

/*

Versión 1.1

- Biblioteca Inteligente
- Buscador
- Enlaces Oficiales

Versión 1.2

- Resúmenes

Versión 1.3

- Conceptos Clave

Versión 1.4

- Casos CNSC

Versión 2.0

- Banco de Preguntas

Versión 2.5

- Simulador CNSC

Versión 3.0

- Estadísticas

- Progreso

- LocalStorage

*/
