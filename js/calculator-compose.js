const calculatorCompose = (drops) => {
  const getROOT = document.getElementById(drops)
  if (getROOT) { 
    const text = `<div class="drops-main">
    <div class="drops-container recommended">
      <div class="drops-logo">
        <img src="https://profesorcbd.com/wp-content/uploads/2022/03/hakunaoil-new.png" alt="Hakuna-oil">
      </div>
      <h2>Recomendador de aceites</h2>
      <div class="drops-content">
        <div id="drops-image-oil" class="drops-image-oil">
          <img src="https://profesorcbd.com/wp-content/uploads/2022/05/isolado.png">
        </div>
        <div class="drops-settings">
          <h3>Intensidad del problema que quieres solucionar</h3>
          <select id="focus-oil" class="focus-oil" onchange="createType(getFocusOil.value, values.focusResult)" name="focus"></select>
          <div id="typeContent" class="typeContent">
            <div id="type"></div>
            <select id="typeSelect" class="typeSelect" onchange="createType(getTypeSelect.value, values.focusResult, getFocusOil.value ) "name="oil"></select>
          </div>
          <div id="resultOil" class="resultOil"></div>
        </div>
      </div>
    </div>
  </div>`
  return getROOT.innerHTML = text
  }
}

calculatorCompose("drops-recommended")