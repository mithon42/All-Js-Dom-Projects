// Converter Main Data Start
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
// Converter Main Data End

// Globals
let lastLeftSelectsValue = '';
let lastRightSelectsValue = '';

window.onload = () =>{
  main()
}

function main(){
  const categorySelect = document.getElementById('category-select')
  const leftSelect = document.getElementById('left-select')
  const rightSelect = document.getElementById('right-select')

  
}