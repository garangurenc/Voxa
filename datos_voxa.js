// Datos del panel Voxa, calculados a partir de sentimiento_real.json
// (7255 opiniones reales con sentimiento)

const datosGlobales = {
  "todas": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 4351,
        "negativo": "34 %",
        "neutral": "39 %",
        "positivo": "27 %",
        "neto": -7
      },
      {
        "banco": "BBVA",
        "total": 1673,
        "negativo": "53 %",
        "neutral": "26 %",
        "positivo": "20 %",
        "neto": -33
      },
      {
        "banco": "Santander",
        "total": 1231,
        "negativo": "45 %",
        "neutral": "33 %",
        "positivo": "22 %",
        "neto": -23
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "Google Reviews",
        "sentimiento": "Positivo",
        "texto": "«Recomiendo este Monte de Piedad. Son muy profesionales y amables. Llevo años necesitando este servicio y siempre he sido muy buen atendida»"
      },
      {
        "banco": "BBVA",
        "red": "Google Reviews",
        "sentimiento": "Negativo",
        "texto": "«Mucha gente esperando solo 1 atendiendo, después de una hora decidí irme, quería abrir una cuenta, pero viendo lo visto mejor me voy.»"
      },
      {
        "banco": "Santander",
        "red": "Google Reviews",
        "sentimiento": "Negativo",
        "texto": "«Llegué 45 minutos antes de la hora oficial de cierre y el local ya estaba completamente cerrado y sin personal. Deberían actualizar sus horarios o respetarlos para no hacer perder el tiempo a la gente»"
      },
      {
        "banco": "CaixaBank",
        "red": "Trustpilot",
        "sentimiento": "Positivo",
        "texto": "«Es una buena app puedes ahcer muchas cosas y funciona muy bien...»"
      },
      {
        "banco": "BBVA",
        "red": "Trustpilot",
        "sentimiento": "Negativo",
        "texto": "«nefasto. La seguridad desmedida, lo dificil que es el uso... absurdo. Metodos de comprobacion que se necesita un maldito master para entenderlo»"
      },
      {
        "banco": "Santander",
        "red": "Trustpilot",
        "sentimiento": "Negativo",
        "texto": "«La espera para atención en ventanillas ahora oficinas es interminable y hay muchas oficinas que están allí pero vacías, muchos empleados se dedican a revisar sus móviles, es un gran fastidio perder tanto tiempo.»"
      },
      {
        "banco": "CaixaBank",
        "red": "TikTok",
        "sentimiento": "Neutral",
        "texto": "«no cojo ni llamadas ni mensajes de nadie pa robar ya tenemos con hacienda»"
      },
      {
        "banco": "BBVA",
        "red": "TikTok",
        "sentimiento": "Positivo",
        "texto": "«Yo pude abrirlo con el pasaporte y no me pidieron comprar el seguro»"
      },
      {
        "banco": "Santander",
        "red": "TikTok",
        "sentimiento": "Negativo",
        "texto": "«me parece súper mal que me cobráis 20 euros todos los meses de comisiones»"
      },
      {
        "banco": "CaixaBank",
        "red": "X",
        "sentimiento": "Negativo",
        "texto": "«Te aseguro que otros bancos no cobran nada por este certificado de titularidad.»"
      },
      {
        "banco": "BBVA",
        "red": "X",
        "sentimiento": "Negativo",
        "texto": "«Btc y eth...las comisiones que cobran y contrato leonino que te hacen firmar, es de denunciarles»"
      },
      {
        "banco": "Santander",
        "red": "X",
        "sentimiento": "Negativo",
        "texto": "«Dejar de mentir y que os suban los impuestos y me gustaría saber que hay detrás. Bajar tipo de interés para la compra de la primera vivienda. No estais arruinando. La banca y los fondos buitres nos arrugas.»"
      },
      {
        "banco": "CaixaBank",
        "red": "Instagram",
        "sentimiento": "Positivo",
        "texto": "«Siempre al efectivo. Cobras y lo sacas. Es nuestro dinero y no tienen que controlar en qué lo gastas.»"
      },
      {
        "banco": "BBVA",
        "red": "Instagram",
        "sentimiento": "Negativo",
        "texto": "«Desde el minuto 1 no me gusto esa actualización ni las fuentes y de paso funciona más lenta 🤥»"
      },
      {
        "banco": "Santander",
        "red": "Instagram",
        "sentimiento": "Negativo",
        "texto": "«Ojo y el renting de 36 meses en letra pequeña 😂😂😂😂»"
      },
      {
        "banco": "CaixaBank",
        "red": "Facebook",
        "sentimiento": "Positivo",
        "texto": "«gracias caixa bamk um buem servicio i mui buena aktitud saludos»"
      },
      {
        "banco": "BBVA",
        "red": "Facebook",
        "sentimiento": "Negativo",
        "texto": "«Deseando de cambiar tooodas mis cosas del bbva e irme a otro banco»"
      },
      {
        "banco": "Santander",
        "red": "Facebook",
        "sentimiento": "Negativo",
        "texto": "«También igual vosotros debéis mirar a quién dais créditos no crees banco Santander? Al cliente o quien suplanta su identidad?»"
      },
      {
        "banco": "BBVA",
        "red": "YouTube",
        "sentimiento": "Negativo",
        "texto": "«Falso, bbva cobra 160 euros anuales de comisiones por mantenimiento de cuenta. Estos dos bancos son el peor sitio donde puedes tener tu dinero.»"
      },
      {
        "banco": "Santander",
        "red": "YouTube",
        "sentimiento": "Neutral",
        "texto": "«Todo normal, cuando trabajes te lo harán sin problema. Aún siendo ciudadano europeo no se la abrieron a mi pareja hasta que no tuvo nómina.»"
      }
    ]
  },
  "Google Reviews": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 815,
        "negativo": "34 %",
        "neutral": "1 %",
        "positivo": "65 %",
        "neto": 30
      },
      {
        "banco": "BBVA",
        "total": 653,
        "negativo": "73 %",
        "neutral": "1 %",
        "positivo": "26 %",
        "neto": -47
      },
      {
        "banco": "Santander",
        "total": 188,
        "negativo": "41 %",
        "neutral": "2 %",
        "positivo": "57 %",
        "neto": 16
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "Google Reviews",
        "sentimiento": "Positivo",
        "texto": "«Recomiendo este Monte de Piedad. Son muy profesionales y amables. Llevo años necesitando este servicio y siempre he sido muy buen atendida»"
      },
      {
        "banco": "BBVA",
        "red": "Google Reviews",
        "sentimiento": "Negativo",
        "texto": "«Mucha gente esperando solo 1 atendiendo, después de una hora decidí irme, quería abrir una cuenta, pero viendo lo visto mejor me voy.»"
      },
      {
        "banco": "Santander",
        "red": "Google Reviews",
        "sentimiento": "Negativo",
        "texto": "«Llegué 45 minutos antes de la hora oficial de cierre y el local ya estaba completamente cerrado y sin personal. Deberían actualizar sus horarios o respetarlos para no hacer perder el tiempo a la gente»"
      }
    ]
  },
  "Trustpilot": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 860,
        "negativo": "49 %",
        "neutral": "6 %",
        "positivo": "45 %",
        "neto": -5
      },
      {
        "banco": "BBVA",
        "total": 412,
        "negativo": "71 %",
        "neutral": "2 %",
        "positivo": "27 %",
        "neto": -44
      },
      {
        "banco": "Santander",
        "total": 337,
        "negativo": "77 %",
        "neutral": "3 %",
        "positivo": "20 %",
        "neto": -57
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "Trustpilot",
        "sentimiento": "Positivo",
        "texto": "«Es una buena app puedes ahcer muchas cosas y funciona muy bien...»"
      },
      {
        "banco": "BBVA",
        "red": "Trustpilot",
        "sentimiento": "Negativo",
        "texto": "«nefasto. La seguridad desmedida, lo dificil que es el uso... absurdo. Metodos de comprobacion que se necesita un maldito master para entenderlo»"
      },
      {
        "banco": "Santander",
        "red": "Trustpilot",
        "sentimiento": "Negativo",
        "texto": "«La espera para atención en ventanillas ahora oficinas es interminable y hay muchas oficinas que están allí pero vacías, muchos empleados se dedican a revisar sus móviles, es un gran fastidio perder tanto tiempo.»"
      }
    ]
  },
  "TikTok": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 1928,
        "negativo": "21 %",
        "neutral": "69 %",
        "positivo": "10 %",
        "neto": -11
      },
      {
        "banco": "BBVA",
        "total": 450,
        "negativo": "20 %",
        "neutral": "71 %",
        "positivo": "9 %",
        "neto": -10
      },
      {
        "banco": "Santander",
        "total": 432,
        "negativo": "25 %",
        "neutral": "64 %",
        "positivo": "11 %",
        "neto": -13
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "TikTok",
        "sentimiento": "Neutral",
        "texto": "«no cojo ni llamadas ni mensajes de nadie pa robar ya tenemos con hacienda»"
      },
      {
        "banco": "BBVA",
        "red": "TikTok",
        "sentimiento": "Positivo",
        "texto": "«Yo pude abrirlo con el pasaporte y no me pidieron comprar el seguro»"
      },
      {
        "banco": "Santander",
        "red": "TikTok",
        "sentimiento": "Negativo",
        "texto": "«me parece súper mal que me cobráis 20 euros todos los meses de comisiones»"
      }
    ]
  },
  "X": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 588,
        "negativo": "58 %",
        "neutral": "35 %",
        "positivo": "7 %",
        "neto": -51
      },
      {
        "banco": "BBVA",
        "total": 36,
        "negativo": "6 %",
        "neutral": "94 %",
        "positivo": "0 %",
        "neto": -6
      },
      {
        "banco": "Santander",
        "total": 22,
        "negativo": "73 %",
        "neutral": "27 %",
        "positivo": "0 %",
        "neto": -73
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "X",
        "sentimiento": "Negativo",
        "texto": "«Te aseguro que otros bancos no cobran nada por este certificado de titularidad.»"
      },
      {
        "banco": "BBVA",
        "red": "X",
        "sentimiento": "Negativo",
        "texto": "«Btc y eth...las comisiones que cobran y contrato leonino que te hacen firmar, es de denunciarles»"
      },
      {
        "banco": "Santander",
        "red": "X",
        "sentimiento": "Negativo",
        "texto": "«Dejar de mentir y que os suban los impuestos y me gustaría saber que hay detrás. Bajar tipo de interés para la compra de la primera vivienda. No estais arruinando. La banca y los fondos buitres nos arrugas.»"
      }
    ]
  },
  "Instagram": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 58,
        "negativo": "31 %",
        "neutral": "59 %",
        "positivo": "10 %",
        "neto": -21
      },
      {
        "banco": "BBVA",
        "total": 29,
        "negativo": "48 %",
        "neutral": "41 %",
        "positivo": "10 %",
        "neto": -38
      },
      {
        "banco": "Santander",
        "total": 14,
        "negativo": "50 %",
        "neutral": "43 %",
        "positivo": "7 %",
        "neto": -43
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "Instagram",
        "sentimiento": "Positivo",
        "texto": "«Siempre al efectivo. Cobras y lo sacas. Es nuestro dinero y no tienen que controlar en qué lo gastas.»"
      },
      {
        "banco": "BBVA",
        "red": "Instagram",
        "sentimiento": "Negativo",
        "texto": "«Desde el minuto 1 no me gusto esa actualización ni las fuentes y de paso funciona más lenta 🤥»"
      },
      {
        "banco": "Santander",
        "red": "Instagram",
        "sentimiento": "Negativo",
        "texto": "«Ojo y el renting de 36 meses en letra pequeña 😂😂😂😂»"
      }
    ]
  },
  "Facebook": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 98,
        "negativo": "22 %",
        "neutral": "50 %",
        "positivo": "28 %",
        "neto": 5
      },
      {
        "banco": "BBVA",
        "total": 24,
        "negativo": "54 %",
        "neutral": "25 %",
        "positivo": "21 %",
        "neto": -33
      },
      {
        "banco": "Santander",
        "total": 155,
        "negativo": "39 %",
        "neutral": "34 %",
        "positivo": "27 %",
        "neto": -12
      }
    ],
    "comentarios": [
      {
        "banco": "CaixaBank",
        "red": "Facebook",
        "sentimiento": "Positivo",
        "texto": "«gracias caixa bamk um buem servicio i mui buena aktitud saludos»"
      },
      {
        "banco": "BBVA",
        "red": "Facebook",
        "sentimiento": "Negativo",
        "texto": "«Deseando de cambiar tooodas mis cosas del bbva e irme a otro banco»"
      },
      {
        "banco": "Santander",
        "red": "Facebook",
        "sentimiento": "Negativo",
        "texto": "«También igual vosotros debéis mirar a quién dais créditos no crees banco Santander? Al cliente o quien suplanta su identidad?»"
      }
    ]
  },
  "YouTube": {
    "filas": [
      {
        "banco": "CaixaBank",
        "total": 4,
        "negativo": "25 %",
        "neutral": "75 %",
        "positivo": "0 %",
        "neto": -25
      },
      {
        "banco": "BBVA",
        "total": 69,
        "negativo": "9 %",
        "neutral": "74 %",
        "positivo": "17 %",
        "neto": 9
      },
      {
        "banco": "Santander",
        "total": 83,
        "negativo": "30 %",
        "neutral": "64 %",
        "positivo": "6 %",
        "neto": -24
      }
    ],
    "comentarios": [
      {
        "banco": "BBVA",
        "red": "YouTube",
        "sentimiento": "Negativo",
        "texto": "«Falso, bbva cobra 160 euros anuales de comisiones por mantenimiento de cuenta. Estos dos bancos son el peor sitio donde puedes tener tu dinero.»"
      },
      {
        "banco": "Santander",
        "red": "YouTube",
        "sentimiento": "Neutral",
        "texto": "«Todo normal, cuando trabajes te lo harán sin problema. Aún siendo ciudadano europeo no se la abrieron a mi pareja hasta que no tuvo nómina.»"
      }
    ]
  }
};

// Sentimiento neto de cada banco por categoría (para categorias.html)
const datosCategorias = [
  {"nombre": "Atención al cliente", "caixa": 17, "bbva": -44, "santander": -15},
  {"nombre": "Cuentas y comisiones", "caixa": -48, "bbva": -41, "santander": -56},
  {"nombre": "App y pagos", "caixa": 25, "bbva": -29, "santander": -66},
  {"nombre": "Préstamos e hipotecas", "caixa": -41, "bbva": -63, "santander": -38},
  {"nombre": "Tarjetas", "caixa": -14, "bbva": -38, "santander": -47},
  {"nombre": "Fraude y seguridad", "caixa": -29, "bbva": -65, "santander": -31},
  {"nombre": "Ahorro e inversión", "caixa": -33, "bbva": -52, "santander": -92},
  {"nombre": "Imagen de marca", "caixa": -30, "bbva": 5, "santander": -21}
];
