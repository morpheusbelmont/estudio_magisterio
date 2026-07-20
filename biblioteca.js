/*==========================================================
 MAGISTERIO PRO
 biblioteca.js
 Versión 2.0

 Base de datos del sistema

 Lic. Carlos Eduardo Sepúlveda Toro
==========================================================*/

"use strict";

const biblioteca = {

    app:{

        nombre:"MAGISTERIO PRO",

        version:"2.0",

        descripcion:"Sistema Inteligente de Preparación"

    },

    menu:[

        {
            id:"inicio",
            titulo:"HOME"
        },

        {
            id:"biblioteca",
            titulo:"BIBLIOTECA"
        },

        {
            id:"simulacros",
            titulo:"SIMULACROS"
        },

        {
            id:"progreso",
            titulo:"PROGRESO"
        },

        {
            id:"configuracion",
            titulo:"CONFIGURACIÓN"
        }

    ],

    inicio:{

        titulo:"Bienvenido",

        descripcion:
        "Magisterio Pro reúne la normatividad, guías oficiales y material de estudio para el Concurso Docente.",

        mensaje:
        "Seleccione un módulo para comenzar."

    },

    modulos:[

        {

            id:"marco",

            nombre:"Marco Normativo",

            icono:"[>]",

            descripcion:
            "Constitución, leyes y decretos."

        },

        {

            id:"administrativa",

            nombre:"Gestión Administrativa",

            icono:"[>]",

            descripcion:
            "Procesos administrativos del sistema educativo."

        },

        {

            id:"academica",

            nombre:"Gestión Académica",

            icono:"[>]",

            descripcion:
            "Currículo, evaluación y planeación."

        },

        {

            id:"convivencia",

            nombre:"Convivencia Escolar",

            icono:"[>]",

            descripcion:
            "Ley 1620 y manuales de convivencia."

        },

        {

            id:"inclusion",

            nombre:"Educación Inclusiva",

            icono:"[>]",

            descripcion:
            "Atención a la diversidad."

        },

        {

            id:"competencias",

            nombre:"Competencias Docentes",

            icono:"[>]",

            descripcion:
            "Competencias funcionales y comportamentales."

        },

        {

            id:"lectura",

            nombre:"Lectura Crítica",

            icono:"[>]",

            descripcion:
            "Comprensión e interpretación."

        },

        {

            id:"razonamiento",

            nombre:"Razonamiento Cuantitativo",

            icono:"[>]",

            descripcion:
            "Problemas matemáticos."

        },

        {

            id:"especifico",

            nombre:"Conocimiento Específico",

            icono:"[>]",

            descripcion:
            "Área disciplinar."

        }

    ],

    documentos:[

        {

            modulo:"marco",

            titulo:"Constitución Política de Colombia",

            tipo:"Constitución",

            prioridad:5,

            url:"https://www.constitucioncolombia.com/"

        },

        {

            modulo:"marco",

            titulo:"Ley 115 de 1994",

            tipo:"Ley",

            prioridad:5,

            url:"https://www.suin-juriscol.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Ley 715 de 2001",

            tipo:"Ley",

            prioridad:5,

            url:"https://www.suin-juriscol.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Decreto 1075 de 2015",

            tipo:"Decreto",

            prioridad:5,

            url:"https://www.funcionpublica.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Decreto Ley 1278 de 2002",

            tipo:"Decreto",

            prioridad:5,

            url:"https://www.funcionpublica.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Decreto 1290 de 2009",

            tipo:"Decreto",

            prioridad:4,

            url:"https://www.funcionpublica.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Ley 1620 de 2013",

            tipo:"Ley",

            prioridad:5,

            url:"https://www.suin-juriscol.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Decreto 1421 de 2017",

            tipo:"Decreto",

            prioridad:5,

            url:"https://www.funcionpublica.gov.co/"

        },

        {

            modulo:"marco",

            titulo:"Ley 1098 de 2006",

            tipo:"Ley",

            prioridad:4,

            url:"https://www.suin-juriscol.gov.co/"

        }

    ]

};
