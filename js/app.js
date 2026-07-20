/*==========================================================
 MAGISTERIO PRO
 app.js
 Versión 2.0

 Inicializador del Sistema

 Lic. Carlos Eduardo Sepúlveda Toro
==========================================================*/

"use strict";

/*==========================================================
 VARIABLES
==========================================================*/

const botonesMenu = document.querySelectorAll(".menu button");

/*==========================================================
 INICIO
==========================================================*/

document.addEventListener("DOMContentLoaded", iniciarApp);

/*==========================================================
 APP
==========================================================*/

function iniciarApp(){

    console.clear();

    console.log("=====================================");
    console.log(" MAGISTERIO PRO");
    console.log(" Sistema iniciado");
    console.log("=====================================");

    configurarMenu();

    render("inicio");

}

/*==========================================================
 MENÚ
==========================================================*/

function configurarMenu(){

    botonesMenu.forEach(boton=>{

        boton.addEventListener("click",()=>{

            seleccionarBoton(boton);

            const vista = boton.dataset.view;

            render(vista);

        });

    });

    seleccionarBoton(botonesMenu[0]);

}

/*==========================================================
 BOTÓN ACTIVO
==========================================================*/

function seleccionarBoton(botonActivo){

    botonesMenu.forEach(boton=>{

        boton.classList.remove("active");

    });

    botonActivo.classList.add("active");

}

/*==========================================================
 UTILIDADES
==========================================================*/

function abrirURL(url){

    window.open(url,"_blank");

}

function version(){

    return biblioteca.app.version;

}

function nombreSistema(){

    return biblioteca.app.nombre;

}

/*==========================================================
 MENSAJE
==========================================================*/

console.log(

    nombreSistema(),

    "v",

    version()

);
