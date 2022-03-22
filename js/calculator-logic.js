const getWeight     = document.getElementById("weight")
const getFocus      = document.getElementById("focus")
const getCBD        = document.getElementById("cbd")
const getResult     = document.getElementById("drops-result")
const getDropsImage = document.getElementById("drops-image") 
const getValues     = document.getElementById("drops-selection")
const getDrops      = document.getElementById("drops")
const values = {
  "focusResult": ["Bienestar y afecciones suaves", "Bienestar y afecciones moderadas", "Alivio de afecciones graves"],
  "pain": ["soft", "medium", "hard"],
  "weight": ["11", "12-20", "21-38", "29-68", "69-108", "108"],
  "cbd": ["Aceite CBD 5%", "Aceite CBD 10%", "Aceite CBD 15%"],
  "images": ["5.png", "10.png", "15.png"],
  "Aceite CBD 5%": [
    {"soft": ["2", "3", "5", "6", "9", "11"]},
    {"medium": ["3", "5", "6", "8", "11", "15"]},
    {"hard": ["5","6","8","9","14","23"]}
  ],
  "Aceite CBD 10%": [
    {"soft": ["1", "2", "2", "3", "5", "6"]},
    {"medium": ["2", "2", "3", "3", "6", "8"]},
    {"hard": ["2","3","3","5","7","11"]}
  ],
  "Aceite CBD 15%": [
    {"soft": ["1", "1", "2", "2", "3", "4"]},
    {"medium": ["1", "2", "2", "3", "4", "5"]},
    {"hard": ["2","2","3","3","5","8"]}
  ]
}
const {weight, focusResult, cbd, pain, images} = values
const createOptionsWeight = (id, arr) => {
  const text = `<option value="${arr}">`
  switch(arr) {
    case "11":
      id.innerHTML += `${text}${arr} Kg</option>`
    break;
    case "108":
      id.innerHTML += `${text}Más de ${arr} Kg</option>`
    break;
    default:
      id.innerHTML += `${text}Entre ${arr} Kg</option>`
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
const result = (focusValor, weightValor, cbdValor) => {
  const focusPosition = focusResult.indexOf(focusValor)
  const weightPosition = weight.indexOf(weightValor)
  const drops = values[cbdValor][focusPosition][pain[focusPosition]][weightPosition]
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
    getDropsImage.innerHTML = `${text} src="${urlIMG}${images[0]}"/>`
    break;
    case cbd[1]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${images[1]}"/>`
    break;
    case cbd[2]:
    getDropsImage.innerHTML = `${text} src="${urlIMG}${images[2]}"/>`
    break;
  }
}

result(getFocus.value, getWeight.value, getCBD.value)