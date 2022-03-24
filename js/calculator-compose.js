const calculatorCompose = (drops) => {
  const getROOT = document.getElementById(drops)
  if (getROOT) { 
    const text = `<div class="drops-main">
                  <div class="drops-container">
                    <div class="drops-logo">
                      <img src="https://profesorcbd.com/wp-content/uploads/2022/03/hakunaoil-new.png" alt="Hakuna-oil">
                    </div>
                    <h2>Calcula la cantidad de gotas</h2>
                    <div class="drops-content">
                      <div id="drops-image" class="drops-image">
                        <img class="drops-appear" src="https://profesorcbd.com/wp-content/uploads/2022/03/5-2.png">
                      </div>
                      <div class="drops-settings">
                        <h3>Concentración de aceite de CBD</h3>
                        <select id="cbd" class="cbd" name="cbd" onchange="changeProduct(getCBD.value)"></select>
                        <h3>Intensidad del problema que quieres solucionar</h3>
                        <select id="focus" class="focus" name="focus"></select>
                        <h3>Peso corporal aproximado</h3>
                        <select id="weight" class="weight" name="weight"></select>
                        <div class="drops-calculate-content">
                          <input class="drops-calculate" type="button" value="Calcular" onclick="result(getFocus.value, getWeight.value, getCBD.value)" />
                        </div>
                      </div>
                    </div>
                    <h3>Cantidad de gotas calculada para el uso y peso indicado</h3>
                    <div class="drops-result-container">
                      <div class="drops-result-text">
                        <p id="drops-selection"></p>
                      </div>
                      <div id="drops-result" class="drops-result"></div>
                    </div>
                  </div>
                </div>`
  return getROOT.innerHTML = text
  }
}

calculatorCompose("drops")