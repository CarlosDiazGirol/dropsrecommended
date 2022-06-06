const getFocusOil = document.getElementById("focus-oil")
const getType  = document.getElementById("type")
const getTypeContent  = document.getElementById("typeContent")
const getTypeSelect  = document.getElementById("typeSelect")
const resultOil = document.getElementById("resultOil")
const getDropsImageOil = document.getElementById("drops-image-oil")

const url = "https://profesorcbd.com"
const urlIMG = `${url}/wp-content/uploads/2022/03/`
const images = ["5-2.png", "5gaba.png", "10-3.png", "10gaba.png", "10menta.png", "15-2.png", "30-2.png", "nala.png"]
const [cbd5, cbd5Gaba, cbd10, cbd10Gaba, cbd10Menta, cbd15, cbd30, nala] = images
const urls = [
  "/aceite-cbd-premium-hakuna-oil-5-full-spectrum-base-mct/",
  "/aceite-cbd-5-premium-hakuna-oil-buenas-nochezzz-con-gaba/",
  "/aceite-cbd-premium-hakuna-oil-al-10-full-spectrum-con-base-mct/",
  "/aceite-cbd-10-premium-hakuna-oil-buenas-nochezzz-con-gaba/",
  "/aceite-cbd-premium-hakuna-oil-al-10-con-aroma-a-menta/",
  "/aceite-cbd-premium-hakuna-oil-al-15-full-spectrum-con-base-mct/",
  "/aceite-cbd-premium-hakuna-oil-al-30-full-spectrum-con-base-mct/",
  "/aceite-de-cbd-para-mascotas-isolado-sin-thc-nalatales/"
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
    { "name": "Concentración",
      "result":
      [
        { 
          "description": "¿Harto/a de comer rabillos de pasas y hacer sudokus? No nos extraña. ¡De este aceite no te cansarás!",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}` 
        }
      ]
    },
    { 
      "name": "Dolores",
      "question": "¿En qué consiste ese dolor?",
      "result": 
      [
        {
          "name": "Son molestias articulares",
          "description": "La vida con dolor de rodillas es la vida peor. Mejora la tuya con este aceite.",
          "oil": `${cbd10Text}`,
          "img": `${urlIMG}${cbd10}`,
          "buy": `${url}${cbd10URL}` 
        },
        {
          "name": "Son los dolores menstruales",
          "description": "¿Tú qué tienes: sistema endocannabinoide o sistema ibuprofenoide? Pues eso.",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}` 
        },
        {
          "name": "Padezco dolores crónicos",
          "description": "Somos muchos en tu misma situación. ¡Esto es lo que nos está ayudando!",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Son molestias muy severas",
          "description": "Prueba nuestro aceite de las grandes soluciones.",
          "oil": `${cbd30Text}`,
          "img": `${urlIMG}${cbd30}`,
          "buy": `${url}${cbd30URL}` 
        }
      ]
    },
    { 
      "name": "Estrés/Ansiedad",
      "question": "¿Cuál es el origen del estrés?",
      "result": 
      [
        
        {
          "name": "Por una situación personal o laboral",
          "description": "Se sabe que el chocolate y el CBD alivian el estrés. Pero el segundo no engorda. ¿Te animas?",
          "oil": `${cbd10Text}`,
          "img": `${urlIMG}${cbd10}`,
          "buy": `${url}${cbd10URL}` 
        },
        {
          "name": "Llevo angustiado muchísimo tiempo",
          "description": "¡Tenenos las únicas gotas que descolman el vaso!",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Estoy bien, pero me gustaria encontrarme mejor",
          "description": "Sube de nivel con este aceite: la rutina diaria que logrará tu equilibrio.",
          "oil": `${cbd5Text}`,
          "img": `${urlIMG}${cbd5}`,
          "buy": `${url}${cbd5URL}` 
        }
      ]
    },
    { "name": "Inmunidad",
      "result": 
      [
        {
          "description": "El aceite que pondrá en guardia a tu sistema endocannabinoide. Stop virus.",
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
          "description": "Con nuestras gotas anti-agujetas mañana sí vuelves",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Quiero descansar bien después de entrenar",
          "description": "Para bajar las revoluciones, un resort en Tailandia… o nuestro aceite del buen",
          "oil": `${cbd10GabaText}`,
          "img": `${urlIMG}${cbd10Gaba}`,
          "buy": `${url}${cbd10GabaURL}` 
        }
      ]
    },
    { 
      "name": "Sueño",
      "question": "¿Cuál es tu problema de sueño?",
      "result": 
      [
        {
          "name": "Duermo pero no descanso",
          "description": "Toma desde hoy el control de tu sueño.",
          "oil": `${cbd10GabaText}`,
          "img": `${urlIMG}${cbd10Gaba}`,
          "buy": `${url}${cbd10GabaURL}`
        },
        {
          "name": "Estoy empezando a dormir mal ahora",
          "description": "No te resignes a contar ovejas. Con este aceite, sólo contarás gotas.",
          "oil": `${cbd5GabaText}`,
          "img": `${urlIMG}${cbd5Gaba}`,
          "buy": `${url}${cbd5GabaURL}`
        },
        {
          "name": "Tengo insomnio, nada me va bien",
          "description": "Somos muchos en tu misma situación. ¡Esto es lo que nos está ayudando!",
          "oil": `${cbd10GabaText}`,
          "img": `${urlIMG}${cbd10Gaba}`,
          "buy": `${url}${cbd10GabaURL}` 
        }
      ]
    },  
    { 
      "name": "Vitalidad",
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
          "description": "¡Estas gotas son experas en ahuyentar nubarrones!",
          "oil": `${cbd15Text}`,
          "img": `${urlIMG}${cbd15}`,
          "buy": `${url}${cbd15URL}` 
        },
        {
          "name": "Estoy bien pero podría estar mejor",
          "description": "Sube de nivel con este aceite: la rutina diaria que logrará tu equilibrio.",
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
    case "Vitalidad":
    case "Sueño":
    case "Rendimiento Deportivo":
    case "Estrés/Ansiedad":
    case "Dolores":
      getQuestion(value, arr)
    break;
    default:
      getResult(value, arr, beforeValue)
    break;
  }
}

createOptions(getFocusOil, values.focusResult)