const getWeight     = document.getElementById("weight")
const getFocus      = document.getElementById("focus")
const getCBD        = document.getElementById("cbd")
const getResult     = document.getElementById("drops-result")
const getDropsImage = document.getElementById("drops-image") 
const getValues     = document.getElementById("drops-selection")
const getDrops      = document.getElementById("drops")
const values = {
  "focus": ["Bienestar y afecciones suaves", "Bienestar y afecciones moderadas", "Alivio de afecciones graves"],
  "pain": ["soft", "medium", "hard"],
  "weight": ["11", "12-20", "21-38", "29-68", "69-108", "108"],
  "cbd": ["Aceite CBD 5%", "Aceite CBD 10%", "Aceite CBD 15%"],
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
// const createOptionsWeight = (id, arr) => {
//   switch(arr[i]) {
//     case "11":
//       id.innerHTML += `<option value="${arr[i]}">${arr[i]} Kg</option>`
//     break;
//     case "108":
//       id.innerHTML += `<option value="${arr[i]}">Más de ${arr[i]} Kg</option>`
//     break;
//     default:
//       id.innerHTML += `<option value="${arr[i]}">Entre ${arr[i]} Kg</option>`
//   }

// }
// const createOptions = (id, arr) => {
// for (let i = 0; i < arr.length; i++) {
//   if (arr == values.weight) {
//     createOptionsWeight(id, arr)
//   } else {
//     id.innerHTML += `<option value="${arr[i]}">${arr[i]}</option>`
//   }
// }
// }


// Options components
const createOptionsWeight = (id, arr) => {
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "11":
        id.innerHTML += `<option value="${arr[i]}">${arr[i]} Kg</option>`
      break;
      case "108":
        id.innerHTML += `<option value="${arr[i]}">Más de ${arr[i]} Kg</option>`
      break;
      default:
        id.innerHTML += `<option value="${arr[i]}">Entre ${arr[i]} Kg</option>`
    }
  }
}
const createOptions = (id, arr) => {
  for (let i = 0; i < arr.length; i++) {
    id.innerHTML += `<option value="${arr[i]}">${arr[i]}</option>`
  }
}
if (getDrops)
createOptionsWeight(getWeight, values.weight)
createOptions(getFocus, values.focus)
createOptions(getCBD, values.cbd)

//getValue
const getResultValues = () => {
  (window.innerWidth > 600)
  ? getValues.innerHTML = `${getFocus.value} | ${getCBD.value} | ${getWeight.value == "108" ? "Más de" + " " + getWeight.value + " " + "Kg" : getWeight.value + " " + "Kg" }`
  : getValues.innerHTML = `- ${getFocus.value} </br> - ${getCBD.value} </br> - ${getWeight.value == "108" ? "Más de" + " " + getWeight.value + " " + "Kg" : getWeight.value + " " + "Kg" }`
}
const result = (focusValor, weightValor, cbdValor) => {
  const focusPosition = values.focus.indexOf(focusValor)
  const weightPosition = values.weight.indexOf(weightValor)
  const drops = values[cbdValor][focusPosition][values.pain[focusPosition]][weightPosition]
  getResultValues()
  
  switch(drops) {
    case "1":
      getResult.innerHTML = `<div class="drops-total"><h4>${drops}</h4> <p>Gota al día</p></div>`
    break;
    case "2":
      getResult.innerHTML = `<div class="drops-total"><h4>${drops}</h4> <p>Gotas/día (en 2 veces)</p></div>`
    break;
    default:
      getResult.innerHTML = `<div class="drops-total"><h4>${drops}</h4> <p>Gotas/día (en 3 veces)</p></div>`
  }
}
result(getFocus.value, getWeight.value, getCBD.value)

const changeProduct = (value) => {
  const resultValues = values.cbd
  switch(value) {
    case resultValues[0]:
      getDropsImage.innerHTML = '<img class="drops-appear" src="./img/Aceite-CBD-5.png"/>'
    break;
    case resultValues[1]:
    getDropsImage.innerHTML = '<img class="drops-appear" src="./img/menta10-uai-min.png"/>'
    break;
    case resultValues[2]:
    getDropsImage.innerHTML = '<img class="drops-appear" src="./img/Aceite-CBD-15.png"/>'
    break;
  }
}