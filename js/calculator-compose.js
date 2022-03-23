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
                        <img class="drops-appear" src="https://profesorcbd.com/wp-content/uploads/2022/03/5.png">
                      </div>
                      <div class="drops-settings">
                        <h3>¿Cuál va a ser el uso?</h3>
                        <select id="focus" class="focus" name="focus"></select>
                        <h3>Indica un peso</h3>
                        <select id="weight" class="weight" name="weight"></select>
                        <h3>Elige un % CBD</h3>
                        <select id="cbd" class="cbd" name="cbd" onchange="changeProduct(getCBD.value)"></select>
                        <div class="drops-calculate-content">
                          <input class="drops-calculate" type="button" value="Calcular" onclick="result(getFocus.value, getWeight.value, getCBD.value)" />
                        </div>
                      </div>
                    </div>
                    <h3>Cantidad de gotas calculada para tu objetivo y peso</h3>
                    <div class="drops-result-container">
                      <div class="drops-result-text">
                        <p id="drops-selection"></p>
                      </div>
                      <div id="drops-result" class="drops-result"></div>
                    </div>
                  </div>
                  <div class="drops-disclaimer">
                  <p><strong>Sobre su legalidad en España.</strong></p> 
                  <p>Tanto el cultivo del cáñamo del que proviene el CBD como la venta de sus productos derivados son totalmente legales en España. La Ley exige cumplir con algunos requisitos, como cultivar sólo con semillas certificadas por la UE o mantener siempre un nivel de THC por debajo del 0,2%. ProfesorCBD los cumple estrictamente.</p> 
                  <p>En cuanto a su modo de uso, hasta enero de 2018, el aceite de CBD era considerado en España un suplemento alimenticio, pero un cambio de legislación apartó al aceite de cannabidiol de esta categoría. Hasta entonces, su administración siempre había sido oral: lo más efectivo es por vía sublingual (se vierten las gotas por debajo de la lengua para que sean absorbidas con rapidez por la mucosa bucal).</p>
                  <p>La nueva regulación obliga a ProfesorCBD a advertir que sus productos no son aptos para el consumo humano. Sin embargo, sigue siendo posible comprar aceite de CBD en España. Y en países como Canadá, Estados Unidos o Reino Unido los aceites de CBD se continúan considerando suplementos alimenticios. </p></div>
                </div>`
  return getROOT.innerHTML = text
  }
}

calculatorCompose("drops")