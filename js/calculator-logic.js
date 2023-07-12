const getFocusOil = document.getElementById("focus-oil")
const getType  = document.getElementById("type")
const getTypeContent  = document.getElementById("typeContent")
const getTypeSelect  = document.getElementById("typeSelect")
const resultOil = document.getElementById("resultOil")
const getDropsImageOil = document.getElementById("drops-image-oil")

const url = "https://profesorcbd.com"
const utm = "?utm_medium=display&utm_source=calculadorarecomendador&utm_campaign=10072023_compratuaceite&utm_content=boton_"
const urlIMG = `${url}/wp-content/uploads/2022/03/`
const images = ["5-2.png", "5gaba.png", "10-3.png", "10gaba.png", "10menta.png", "15-2.png", "30-2.png", "nala.png"]
const [cbd5, cbd5Gaba, cbd10, cbd10Gaba, cbd10Menta, cbd15, cbd30, nala] = images
const urls = [
  `/aceite-cbd-premium-hakuna-oil-5-full-spectrum-base-mct/${utm}aceiteFS5`, 
  `/aceite-cbd-5-premium-hakuna-oil-con-gaba/${utm}buenasnochez5`,
  `/aceite-cbd-premium-hakuna-oil-al-10-full-spectrum-con-base-mct/${utm}aceiteFS10`,
  `/aceite-cbd-10-premium-hakuna-oil-con-gaba/${utm}buenasnochez10`,
  `/aceite-cbd-premium-hakuna-oil-al-10-con-aroma-a-menta/${utm}aceitementa`,
  `/aceite-cbd-premium-hakuna-oil-al-15-full-spectrum-con-base-mct/${utm}FS15`,
  `/aceite-cbd-premium-hakuna-oil-al-30-full-spectrum-con-base-mct/${utm}FS30`,
  `/aceite-de-cbd-para-mascotas-isolado-sin-thc-nalatales/${utm}nala`
]
const text = [
  "Full Sprectrum 5%",
  "Buenas nochezzz 5%",
  "Full Sprectrum 10%",
  "Buenas nochezzz 10%",
  "de Menta 10%",
  "Full Sprectrum 15%",
  "Full Sprectrum 30%",
  "de Nala"
]
const [cbd5URL, cbd5GabaURL, cbd10URL, cbd10GabaURL, cbd10MentaURL, cbd15URL, cbd30URL, nalaURL] = urls
const [cbd5Text, cbd5GabaText, cbd10Text, cbd10GabaText, cbd10MentaText, cbd15Text, cbd30Text, nalaText] = text
const values = {
  "focusResult": [
    // { "name": "Me siento dispers@",
    //   "result":
    //   [
    //     { 
    //       "description": "El empujoncito que necesitas en forma de aceite. Stop desidia.",
    //       "oil": `${cbd5Text}`,
    //       "img": `${urlIMG}${cbd5}`,
    //       "buy": `${url}${cbd5URL}` 
    //     }
    //   ]
    // },
    { 
      "name": "Son muchas cosas. ¿Por dónde empiezo?",
      "question": "¿Cuál de estas expresiones te define?",
      "result": 
      [
        {
          "name": "Ay",
          "description": "El empujoncito que necesitas.",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}` 
        },
        {
          "name": "Ay, ay",
          "description": "Mejora tu vida con este aceite",
          "oil": `${cbd10Text}`,
          "img": `${urlIMG}${cbd10}`,
          "buy": `${url}${cbd10URL}` 
        },
        {
          "name": "Ay, ay, ay",
          "description": "Somos muchos en tu misma situación. ¡Esto es lo que nos está ayudando!.",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Ay, ay, ay, ay",
          "description": "Prueba nuestro aceite de las grandes soluciones.",
          "oil": `${cbd30Text}`,
          "img": `${urlIMG}${cbd30}`,
          "buy": `${url}${cbd30URL}` 
        }
      ]
    },
    { 
      "name": "Me siento agobiad@",
      "question": "¿Qué frase te define mejor?",
      "result": 
      [
        
        {
          "name": "Sé que pasará, pero...",
          "description": "Del 'jo' al 'ja' en tres gotas. ¿Te animas?",
          "oil": `${cbd10Text}`,
          "img": `${urlIMG}${cbd10}`,
          "buy": `${url}${cbd10URL}` 
        },
        {
          "name": "Lo veo todo negro",
          "description": "¡Tenenos las únicas gotas que descolman el vaso!",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Estoy casi bien. ¿Me ayudáis a quitar el 'casi'?",
          "description": "Sube de nivel incorporando este aceite en tu rutina diaria.",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}` 
        }
      ]
    },
    { "name": "No me pasa nada, pero...",
      "result": 
      [
        {
          "description": "El empujoncito que necesitas en forma de aceite.",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}`  
        }
      ]
    },
    { 
      "name": "Rendimiento Deportivo",
      "question": "¿En qué quieres centrarte?",
      "result": 
      [
        {
          "name": "Descargar músculos después de entrenar",
          "description": "Con este aceite, las piernas te irán solas… hasta las cañas post-gym.",
          "oil": `${cbd10MentaText}`,
          "img": `${urlIMG}${cbd10Menta}`,
          "buy": `${url}${cbd10MentaURL}` 
        },
        {
          "name": "Recuperar rápido después de un buen entreno",
          "description": "Con estas gotas mañana sí vuelves al gym.", 
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Acabo demasiado inquieto después del entreno.",
          "description": "Un resort en Tailandia… o nuestra línea BuenasNochezzz.",
          "oil": `${cbd10GabaText}`,
          "img": `${urlIMG}${cbd10Gaba}`,
          "buy": `${url}${cbd10GabaURL}` 
        }
      ]
    },
    { 
      "name": "Necesito un punto zen",
      "question": "¿Cuál es la intensidad de tu problema?",
      "result": 
      [
        {
          "name": "Alta o media alta.",
          "description": "Somos muchos en tu misma situación. ¡Esto es lo que nos está ayudando!",
          "oil": `${cbd10GabaText}`,
          "img": `${urlIMG}${cbd10Gaba}`,
          "buy": `${url}${cbd10GabaURL}`
        },
        {
          "name": "Baja o media baja.",
          "description": "Toma desde hoy el control de tu bienestar.",
          "oil": `${cbd5GabaText}`,
          "img": `${urlIMG}${cbd5Gaba}`,
          "buy": `${url}${cbd5GabaURL}`
        }
      ]
    },  
    { 
      "name": "Sólo quiero sentirme mejor",
      "question": "¿Dónde te ves más identificado?",
      "result": 
      [
        {
          "name": "Estoy en un bache",
          "description": "Tienes dos formas de pasar el bache: en bici o todoterreno. Este aceite es lo segundo.",
          "oil": `${cbd10Text}`,
          "img": `${urlIMG}${cbd10}`,
          "buy": `${url}${cbd10URL}`,
        },
        {
          "name": "Lo veo todo negro",
          "description": "¡Estas gotas son expertas en ahuyentar nubarrones!",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Estoy bien pero podría estar mejor",
          "description": "Sube de nivel incorporando este aceite a tu rutina diaria.",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}` 
        }
      ]
    },
    { "name": "Vida de mi mascota",
      "result": 
      [
        {
          "description": "Ayuda a tu mascota a ser su mejor versión con este producto natural. ¡Se lo debes!",
          "oil": `${nalaText}`,
          "img": `${url}/wp-content/uploads/2022/05/${nala}`,
          "buy": `${url}${nalaURL}`
        }
      ]
    }
  ]
}

const appear = () => document.querySelector("img.drops-appear") ? document.querySelector("img.drops-appear").classList.add("drops-disappear") : undefined ;
const visibility = (value, type) => value.style.display = type

const createResult = (title, description, buy) => {
  const template = `
                    <h4>Aceite ${title}</h4>
                    <p>${description}</p>
                    <a href=${buy} target="_blank">
                      <input
                      id=recommended-${title.replace(/\s+/g, '-')}
                        class="drops-buy" 
                        type="button"
                        value="¡Flechazo!" />
                    </a>
                   `
  return template
}

const getResult = (value, arr, beforeValue) => {
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i]
    if (result.name == value && !result.result[0].name) {
      visibility(getTypeContent, 'none')
      resultOil.innerHTML = createResult(result.result[0].oil, result.result[0].description, result.result[0].buy)
      getDropsImageOil.innerHTML = `<img class="drops-appear" src=${result.result[0].img}></img>`
    } else if (result.name == beforeValue) {
      for(var j = 0; j < result.result.length; j++) {
        const solution = result.result[j]
        if (solution.name == value) {
          visibility(resultOil, 'block');
          resultOil.innerHTML = createResult(solution.oil, solution.description, solution.buy)
          getDropsImageOil.innerHTML = `<img class="drops-appear" src=${solution.img}></img>`
        }
      }
    }
  }
}

const getQuestion = (value, arr) => {
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i]
    if (result.name.includes(value)) {
      visibility(getTypeContent, 'block');
      visibility(resultOil, 'none');
      appear();
      getType.innerHTML = `<h3>${result.question}</h3>`
      createOptions(getTypeSelect, result.result)
    }
  }
}

const createOptions = (id, arr) => {
  id.innerHTML = `<option>Elige una opción</option>`
  for (let i = 0; i < arr.length; i++) {
    id.innerHTML += `<option value="${arr[i].name}">${arr[i].name}</option>`
  }
}

const createType = (value, arr, beforeValue) => {
  switch(value) {
    case "Sólo quiero sentirme mejor":
    case "Necesito un punto zen":
    case "Rendimiento Deportivo":
    case "Me siento agobiad@":
    case "Son muchas cosas. ¿Por dónde empiezo?":
      getQuestion(value, arr)
    break;
    default:
      getResult(value, arr, beforeValue)
    break;
  }
}

createOptions(getFocusOil, values.focusResult)