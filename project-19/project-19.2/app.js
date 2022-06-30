/**
 * Author: Md. Mithon Islam
 * Dec:
*/

window.onload = () =>{
  main()
}

const converter = {
  area: {
    name: 'Area',
    units: {
      squareKiloMeter: 'Square Kilometer',
      squareMeter: 'Square Meter',
      squareMile: 'Square Mile',
      squareYard: 'Square Yard',
      squareFoot: 'Square Foot',
      squareInch: 'Square Inch',
      hectare: 'Hectare',
    }
  },
  mess: {
    name: 'Mess',
    units: {
      tonne: 'Tonne',
      kilogram: 'Kilogram',
      gram: 'Gram',
      milligram: 'Milligram',
      usTon: 'Us Ton',
      stone: 'Stone'
    }
  },
  length: {
    name: 'Length',
    units: {
      kilometer: 'Kilometer',
      meter: 'Meter',
      centimeter: 'Centimeter',
      millimeter: 'Millimeter',
      micrometers: 'Micrometers',
      nanometer: 'Nanometer',
      mile: 'Mile',
      yard: 'Yard',
      foot: 'Foot',
      inch: 'Inch'
    }
  },
  time: {
    name: 'Time',
    units: {
      second: 'Second',
      minute: 'Minute',
      hour: 'Hour',
      day: 'Day'
    }
  },
  volume: {
    name: 'Volume',
    units: {
      usLiquidGallon: 'US Liquid Gallon',
      usLiquidQuart: 'US Liquid Quart',
      usTablespoon: 'US Tables Poon',
      usTeaspoon: 'US Teaspoon',
      cubicMeter: 'Cubic Meter',
      liter: 'Liter',
      milliliter: 'Milliliter'
    }
  }
}

function main(){
  const categorySelect = document.getElementById('category-select')
  const leftSelect = document.getElementById('left-select')
  const rightSelect = document.getElementById('right-select')

  const converterKeys = Object.keys(converter).sort()
  removeAllChild(categorySelect)
  converterKeys.forEach((item) => {
    addOption(categorySelect, {value: item, text: converter[item].name})
  })


  categorySelect.addEventListener('change', function(){
    const categoryName = categorySelect.value
    const units = converter[categoryName].units
  

    // Handle Left Select
    removeAllChild(leftSelect)
    const leftOption = Object.keys(units).sort()
    leftOption.forEach((item) => {
      addOption(leftSelect, {value: item, text: units[item]})
    })

    // Handle Right Select
    removeAllChild(rightSelect)
    const rightOption = Object.keys(units).sort()
    leftOption.forEach((item) => {
      addOption(rightSelect, {value: item, text: units[item]})
    })
    rightSelect.value = rightOption[1]
  })

  const categoryName = categorySelect.value
  const units = converter[categoryName].units

  // Handle Left Select
  removeAllChild(leftSelect)
  const leftOption = Object.keys(units).sort()
  leftOption.forEach((item) => {
    addOption(leftSelect, {value: item, text: units[item]})
  })
  // Handle Right Select
  removeAllChild(rightSelect)
  const rightOption = Object.keys(units).sort()
  rightOption.forEach((item) =>{
    addOption(rightSelect, {value: item, text: units[item]})
  })
  rightSelect.value = rightOption[1]
}

function addOption(parent, option){
  const optionElement = document.createElement('option')
  optionElement.setAttribute('value', option.value)
  optionElement.innerText = option.text

  parent.appendChild(optionElement)
}

function removeAllChild(parent){
  while(parent.firstChild){
    parent.firstChild.remove()
  }
}
