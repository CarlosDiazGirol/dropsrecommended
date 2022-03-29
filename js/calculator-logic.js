const getWeight     = document.getElementById("weight")
const getFocus      = document.getElementById("focus")
const getCBD        = document.getElementById("cbd")
const getResult     = document.getElementById("drops-result")
const getDropsImage = document.getElementById("drops-image") 
const getValues     = document.getElementById("drops-selection")
const getDrops      = document.getElementById("drops")
const values = {
  "focusResult": ["Leve", "Moderada", "Alta"],
  "pain": ["soft", "medium", "hard"],
  "weight": ["20", "21-38", "29-68", "69-108", "108"],
  "cbd": ["Aceite CBD 5%", "Aceite CBD 5% con GABA", "Aceite CBD 10%", "Aceite CBD 10% con GABA", "Aceite CBD 10% con menta", "Aceite CBD 15%", "Aceite CBD 30%"],
  "images": ["5-2.png", "5gaba.png", "10-3.png", "10gaba.png", "10menta.png", "15-2.png", "30-2.png"],
  "Aceite CBD 5%": [
    {"soft": ["3", "5", "6", "9", "11"]},
    {"medium": ["5", "6", "8", "11", "15"]},
    {"hard": ["6","8","9","14","23"]}
  ],
  "Aceite CBD 10%": [
    {"soft": ["2", "2", "3", "5", "6"]},
    {"medium": ["2", "3", "3", "6", "8"]},
    {"hard": ["3","3","5","7","11"]}
  ],
  "Aceite CBD 15%": [
    {"soft": ["1", "2", "2", "3", "4"]},
    {"medium": ["2", "2", "3", "4", "5"]},
    {"hard": ["2","3","3","5","8"]}
  ],
  "Aceite CBD 30%": [
    {"soft": ["1", "1", "1", "2", "2"]},
    {"medium": ["1", "1", "2", "2", "3"]},
    {"hard": ["1","2","2","3","4"]}
  ]
}
const {weight, focusResult, cbd, pain, images} = values
const [cbd5, cbd5Gaba, cbd10, cbd10Gaba, cbd10Menta, cbd15, cbd30] = images
const createOptionsWeight = (id, arr) => {
  const text = `<option value="${arr}"`
  switch(arr) {
    case "20":
      id.innerHTML += `${text}>Hasta ${arr} Kg</option>`
    break;
    case "29-68":
      id.innerHTML += `${text} selected>Entre ${arr} Kg</option>`
    break;
    case "108":
      id.innerHTML += `${text}>Más de ${arr} Kg</option>`
    break;
    default:
      id.innerHTML += `${text}>Entre ${arr} Kg</option>`
  }
}

const createOptions = (id, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr == weight) {
      createOptionsWeight(id, arr[i])
    } else {
      id.innerHTML += `<option value="${arr[i]}">${arr[i]}</option>`
    }
  }
}

if (getDrops) {
  createOptions(getFocus, focusResult)
  createOptions(getWeight, weight)
  createOptions(getCBD, cbd)
}

const getResultValues = () => {
  (window.innerWidth > 600)
  ? getValues.innerHTML = `${getFocus.value} | ${getCBD.value} | ${getWeight.value == "108" ? "Más de" + " " + getWeight.value + " " + "Kg" : getWeight.value + " " + "Kg" }`
  : getValues.innerHTML = `- ${getFocus.value} </br> - ${getCBD.value} </br> - ${getWeight.value == "108" ? "Más de" + " " + getWeight.value + " " + "Kg" : getWeight.value + " " + "Kg" }`
}

const changeValue = (value) => {
  if (value.includes("30%")) {
    return "Aceite CBD 30%"
  } else if (value.includes("15%")) {
    return "Aceite CBD 15%"
  } else if (value.includes("10%")) {
    return "Aceite CBD 10%"
  } else if (value.includes("5%")) {
    return "Aceite CBD 5%"
  }
}

const result = (focusValor, weightValor, cbdValor) => {
  const focusPosition = focusResult.indexOf(focusValor)
  const weightPosition = weight.indexOf(weightValor)
  const drops = values[changeValue(cbdValor)][focusPosition][pain[focusPosition]][weightPosition]
  getResultValues()
  const text = `<div class="drops-total"><h4>${drops}</h4>` 
  switch(drops) {
    case "1":
      getResult.innerHTML = `${text}<p>Gota al día</p></div>`
    break;
    case "2":
      getResult.innerHTML = `${text}<p>Gotas/día (en 2 veces)</p></div>`
    break;
    default:
      getResult.innerHTML = `${text}<p>Gotas/día (en 3 veces)</p></div>`
  }
}

const changeProduct = (value) => {
  const text = '<img class="drops-appear"'
  const urlIMG = 'https://profesorcbd.com/wp-content/uploads/2022/03/'
  switch(value) {
    case cbd[0]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd5}"/>`
    break;
    case cbd[1]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd5Gaba}"/>`
    break;
    case cbd[2]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd10}"/>`
    break;
    case cbd[3]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd10Gaba}"/>`
    break;
    case cbd[4]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd10Menta}"/>`
    break;
    case cbd[5]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd15}"/>`
    break;
    case cbd[6]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${cbd30}"/>`
    break;
  }
}

const scroll = () => {
  document.getElementById('drops').scrollIntoView({
    behavior: "smooth",
    block: "end"
  });
}

if (window.location.href.includes("?drops")) {
  setTimeout(scroll, 2000);
}
result(getFocus.value, getWeight.value, getCBD.value)