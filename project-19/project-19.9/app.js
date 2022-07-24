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
    },
    variants: {
      'squareKiloMeter:squareMeter': {
        formula: 'multiply the area value by 1000000',
        calculation(n){
          return n * 1000000;
        },
      },
      'squareKiloMeter:squareMile': {
        formula: 'divide the area value by 2.59',
        calculation(n){
          return n / 2.59;
        }
      },
      'squareKiloMeter:squareYard': {
        formula: 'multiply the area value by 1196000',
        calculation(n){
          return n * 1196000;
        },
      },
      'squareKiloMeter:squareFoot': {
        formula: 'for an approximal result, multiply the area value by 10760000',
        calculation(n){
          return n * 10760000;
        }
      },
      'squareKiloMeter:squareInch': {
        formula: 'multiply the area value by 1.55e+9',
        calculation(n){
          return n * new Number('1.55e+9')
        }
      },
      'squareKiloMeter:squareFoot': {
        formula: 'for an approximate result, multiply the area value by 1.076e+7',
        calculation(n){
          return n * new Number('1.076e+7')
        }
      },
      'squareMeter:squareKiloMeter': {
        formula: 'divide the area value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'squareMeter:squareMile': {
        formula: 'divide the area value by 2.59e+6',
        calculation(n){
          return n / new Number('2.59e+6')
        }
      },
      'squareMeter:squareYard': {
        formula: 'multiply the area value by 1.196',
        calculation(n){
          return n * 1.196;
        }
      },
      'squareMeter:squareFoot': {
        formula: 'multiply the area value by 10.764',
        calculation(n){
          return n * 10.764;
        }
      },
      'squareMeter:squareInch': {
        formula: 'multiply the area value by 1550',
        calculation(n){
          return n * 1550
        }
      },
      'squareMile:squareKiloMeter': {
        formula: 'multiply the area value by 2.59',
        calculation(n){
          return n * 2.59;
        }
      },
      'squareMile:squareMeter': {
        formula: 'multiply the area value by 2.59e+6',
        calculation(n){
          return n * new Number('2.59e+6');
        }
      },
      'squareMile:squareYard': {
        formula: 'for an approximate result, multiply the area value by 3.098e+6',
        calculation(n){
          return n * new Number('3.098e+6');
        }
      },
      'squareMile:squareFoot': {
        formula: 'for an approximate result, multiply the area value by 2.788e+7',
        calculation(n){
          return n * new Number('2.788e+7');
        }
      },
      'squareMile:squareInch': {
        formula: 'for an approximate result, multiply the area value by 4.014e+9',
        calculation(n){
          return n * new Number('4.014e+9')
        }
      },
      'squareYard:squareKiloMeter': {
        formula: 'divide the area value by 1.196e+6',
        calculation(n){
          return n / new Number('1.196e+6')
        }
      },
      'squareYard:squareMeter': {
        formula: 'divide the area value by 1.196',
        calculation(n){
          return n / 1.196;
        }
      },
      'squareYard:squareMile': {
        formula: 'for an approximate result, divide the area value by 3.098e+6',
        calculation(n){
          return n / new Number('3.098e+6');
        }
      },
      'squareYard:squareFoot': {
        formula: 'multiply the area value by 9',
        calculation(n){
          return n / 9;
        }
      },
      'squareYard:squareInch': {
        formula: 'multiply the area value by 1296',
        calculation(n){
          return n * 1296
        }
      },
      'squareFoot:squareKiloMeter': {
        formula: 'for an approximate result, divide the area value by 1.076e+7',
        calculation(n){
          return n / new Number('1.076e+7');
        }
      },
      'squareFoot:squareMeter': {
        formula: 'divide the area value by 10.764',
        calculation(n){
          return n / 10.764;
        }
      },
      'squareFoot:squareMile': {
        formula: 'for an approximate result, divide the area value by 2.788e+7',
        calculation(n){
          return n / new Number('2.788e+7');
        }
      },
      'squareFoot:squareYard': {
        formula: 'divide the area value by 9',
        calculation(n){
          return n / new Number('9');
        }
      },
      'squareFoot:squareInch': {
        formula: 'multiply the area value by 144',
        calculation(n){
          return n * 144
        }
      },
      'squareInch:squareKiloMeter': {
        formula: 'divide the area value by 1.55e+9',
        calculation(n){
          return n / new Number('1.55e+9')
        }
      },
      'squareInch:squareMeter': {
        formula: 'divide the area value by 1550',
        calculation(n){
          return n / 1550
        }
      },
      'squareInch:squareMile': {
        formula: 'for an approximate result, divide the area value by 4.014e+9',
        calculation(n){
          return n / new Number('4.014e+9')
        }
      },
      'squareInch:squareYard': {
        formula: 'divide the area value by 1296',
        calculation(n){
          return n / 1296
        }
      },
      'squareInch:squareFoot': {
        formula: 'divide the area value by 144',
        calculation(n){
          return n / 144
        }
      },
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
    },
    variants: {
      'tonne:kilogram': {},
      'tonne:gram': {},
      'tonne:milligram': {},
      'tonne:usTon': {},
      'tonne:stone': {},
      'kilogram:tonne': {},
      'kilogram:gram': {},
      'kilogram:milligram': {},
      'kilogram:usTon': {},
      'kilogram:stone': {},
      'gram:tonne': {},
      'gram:kilogram': {},
      'gram:milligram': {},
      'gram:usTon': {},
      'gram:stone': {},
      'milligram:tonne': {},
      'milligram:kilogram': {},
      'milligram:gram': {},
      'milligram:usTon': {},
      'milligram:stone': {},
      'usTon:tonne': {},
      'usTon:kilogram': {},
      'usTon:gram': {},
      'usTon:milligram': {},
      'usTon:stone': {},
      'stone:tonne': {},
      'stone:kilogram': {},
      'stone:gram': {},
      'stone:milligram': {},
      'stone:usTon': {},
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
    },
    variants: {
      'kilometer:meter': {},
      'kilometer:centimeter': {},
      'kilometer:millimeter': {},
      'kilometer:micrometers': {},
      'kilometer:nanometer': {},
      'kilometer:mile': {},
      'kilometer:year': {},
      'kilometer:foot': {},
      'kilometer:inch': {},
      'meter:kilometer': {},
      'meter:centimeter': {},
      'meter:millimeter': {},
      'meter:micrometers': {},
      'meter:nanometer': {},
      'meter:mile': {},
      'meter:yard': {},
      'meter:foot': {},
      'meter:inch': {},
      'centimeter:kilometer': {},
      'centimeter:meter': {},
      'centimeter:millimeter': {},
      'centimeter:micrometers': {},
      'centimeter:nanometer': {},
      'centimeter:mile': {},
      'centimeter:yard': {},
      'centimeter:foot': {},
      'centimeter:inch': {},
      'millimeter:kilometer': {},
      'millimeter:meter': {},
      'millimeter:centimeter': {},
      'millimeter:micrometers': {},
      'millimeter:nanometer': {},
      'millimeter:mile': {},
      'millimeter:yard': {},
      'millimeter:foot': {},
      'millimeter:inch': {},
      'micrometer:kilometer': {},
      'micrometer:meter': {},
      'micrometer:centimeter': {},
      'micrometer:millimeter': {},
      'micrometer:nanometer': {},
      'micrometer:mile': {},
      'micrometer:yard': {},
      'micrometer:foot': {},
      'micrometer:inch': {},
      'nanometer:kilometer': {},
      'nanometer:meter': {},
      'nanometer:centimeter': {},
      'nanometer:millimeter': {},
      'nanometer:micrometer': {},
      'nanometer:mile': {},
      'nanometer:yard': {},
      'nanometer:foot': {},
      'nanometer:inch': {},
      'mile:kilometer': {},
      'mile:meter': {},
      'mile:centimeter': {},
      'mile:millimeter': {},
      'mile:micrometer': {},
      'mile:nanometer': {},
      'mile:mile': {},
      'mile:yard': {},
      'mile:foot': {},
      'mile:inch': {},
      'yard:kilometer': {},
      'yard:meter': {},
      'yard:centimeter': {},
      'yard:millimeter': {},
      'yard:micrometer': {},
      'yard:nanometer': {},
      'yard:mile': {},
      'yard:foot': {},
      'yard:inch': {},
      'foot:kilometer': {},
      'foot:meter': {},
      'foot:centimeter': {},
      'foot:millimeter': {},
      'foot:micrometer': {},
      'foot:nanometer': {},
      'foot:mail': {},
      'foot:yard': {},
      'foot:inch': {},
      'inch:kilometer': {},
      'inch:meter': {},
      'inch:centimeter': {},
      'inch:millimeter': {},
      'inch:micrometer': {},
      'inch:nanometer': {},
      'inch:mile': {},
      'inch:yard': {},
      'inch:foot': {},
    }
  },
  time: {
    name: 'Time',
    units: {
      second: 'Second',
      minute: 'Minute',
      hour: 'Hour',
      day: 'Day',
      week: 'Week'

    },
    variants: {
      'second:minute': {
        formula: 'divide the time value by 60',
        calculation(n){
          return n / 60;
        },
      },
      'second:hour': {
        formula: 'divide the time value by 3600',
        calculation(n){
          return n / 3600;
        },
      },
      'second:day': {
        formula: 'divide the time value by 86400',
        calculation(n){
          return n / 86400;
        },
      },
      'second:week': {
        formula: 'divide the time value by 604800',
        calculation(n){
          return n / 604800;
        },
      },
      'minute:second': {
        formula: 'multiply the time value by 60',
        calculation(n){
          return n * 60;
        },
      },
      'minute:hour': {
        formula: 'multiply the time value by 60',
        calculation(n){
          return n * 60;
        },
      },
      'minute:day': {
        formula: 'divide the time value by 1440',
        calculation(n){
          return n / 1400;
        },
      },
      'minute:week': {
        formula: 'divide the time value by 10080',
        calculation(n){
          return n / 10080;
        },
      },
      'hour:second': {
        formula: 'multiply the time value by 3600',
        calculation(n){
          return n * 3600;
        },
      },
      'hour:minute': {
        formula: 'multiply the time value by 60',
        calculation(n){
          return n * 60;
        },
      },
      'hour:day': {
        formula: 'divide the time value by 24',
        calculation(n){
          return n / 24;
        },
      },
      'hour:week': {
        formula: 'divide the time value by 168',
        calculation(n){
          return n / 168;
        },
      },
      'day:second': {
        formula: 'multiply the time value by 86400',
        calculation(n){
          return n * 86400;
        },
      },
      'day:minute': {
        formula: 'multiply the time value by 1440',
        calculation(n){
          return n * 1440;
        },
      },
      'day:hour': {
        formula: 'multiply the time value by 24',
        calculation(n){
          return n * 24;
        },
      },
      'day:week': {
        formula: 'divide the time value by 7',
        calculation(n){
          return n / 7;
        },
      },
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
    },
    variants: {
      'usLiquidGallon:usLiquidQuart': {},
      'usLiquidGallon:usTablespoon': {},
      'usLiquidGallon:usTeaspoon': {},
      'usLiquidGallon:cubicMeter': {},
      'usLiquidGallon:liter': {},
      'usLiquidGallon:milliliter': {},
      'usLiquidQuart:usLiquidGallon': {},
      'usLiquidQuart:usTablespoon': {},
      'usLiquidQuart:usTeaspoon': {},
      'usLiquidQuart:cubicMeter': {},
      'usLiquidQuart:liter': {},
      'usLiquidQuart:milliliter': {},
      'usTablespoon:usLiquidGallon': {},
      'usTablespoon:usLiquidQuart': {},
      'usTablespoon:usTeaspoon': {},
      'usTablespoon:cubicMeter': {},
      'usTablespoon:liter': {},
      'usTablespoon:milliliter': {},
      'cubicMeter:usLiquidGallon': {},
      'cubicMeter:usLiquidQuart': {},
      'cubicMeter:usTablespoon': {},
      'cubicMeter:usTeaspoon': {},
      'cubicMeter:liter': {},
      'cubicMeter:milliliter': {},
      'liter:usLiquidGallon': {},
      'liter:usLiquidQuart': {},
      'liter:usTablespoon': {},
      'liter:usTeaspoon': {},
      'liter:cubicMeter': {},
      'liter:milliliter': {},
      'milliliter:usLiquidGallon': {},
      'milliliter:usLiquidQuart': {},
      'milliliter:usTablespoon': {},
      'milliliter:usTeaspoon': {},
      'milliliter:cubicMeter': {},
      'milliliter:liter': {},

    }
  }
}
// Converter Main Data End



// Globals
let lastLeftSelectsValue = '';
let lastRightSelectsValue = '';

// Window Onload Functions
window.onload = () =>{
  main()
}

// Main Functions Start
function main(){
  const categorySelect = document.getElementById('category-select')
  const leftSelect = document.getElementById('left-select')
  const rightSelect = document.getElementById('right-select')
  const leftInput = document.getElementById('left-input')
  const rightInput = document.getElementById('right-input')
  const formulaText = document.getElementById('formula-text')

  const converterKeys = Object.keys(converter).sort()
  removeAllChild(categorySelect)
  converterKeys.forEach((item) => {
    addOption(categorySelect, {value: item, text: converter[item].name})
  })

  // Set Default Category Units
  updateCategory(categorySelect, leftSelect, rightSelect)

  categorySelect.addEventListener('change', function(){
    updateCategory(categorySelect, leftSelect, rightSelect)
  })

  // Calculate Value
  calculateValue(categorySelect, leftSelect, rightSelect, leftInput, rightInput, formulaText)

  leftInput.addEventListener('keyup', function(event){
    if(event.target.value && !isNaN(event.target.value)){
      const categoryName = categorySelect.value
      const variants = converter[categoryName].variants
      const variantKey = `${leftSelect.value}:${rightSelect.value}`
      const variant = variants[variantKey]
      leftInput.value = Number(event.target.value);
      rightInput.value = variant.calculation(Number(event.target.value))

    }else{
      rightInput.value = ''
      formulaText.innerText = ''
    }
  })
  rightInput.addEventListener('keyup', function(event){
    if(event.target.value && !isNaN(event.target.value)){
      const categoryName = categorySelect.value
      const variants = converter[categoryName].variants
      const variantKey = `${leftSelect.value}:${rightSelect.value}`
      const variant = variants[variantKey]
      rightInput.value = Number(event.target.value);
      leftInput.value = variant.calculation(Number(event.target.value))

    }else{
      leftInput.value = ''
      formulaText.innerText = ''
    }
  })


  // Left Handle Events
  leftSelect.addEventListener('change', function(event){
    if(event.target.value === rightSelect.value){
      const options = rightSelect.getElementsByTagName('option')
      for(let i = 0; i < options.length; i++){
        if(lastLeftSelectsValue === options[i].value){
          options[i].selected = 'selected'
          lastRightSelectsValue = options[i].value
          break;
        }
      }
    }
    lastLeftSelectsValue = event.target.value
    calculateValue(categorySelect, leftSelect, rightSelect, leftInput, rightInput, formulaText)
  })

  // Right Handle Events
  rightSelect.addEventListener('change', function(event){
    if(event.target.value === leftSelect.value){
      const options = leftSelect.getElementsByTagName('option')
      for(let i = 0; i < options.length; i++){
        if(lastRightSelectsValue === options[i].value){
          options[i].selected = 'selected'
          lastLeftSelectsValue = options[i].value
          break;
        }
      }
    }
    lastRightSelectsValue = event.target.value
    calculateValue(categorySelect, leftSelect, rightSelect, leftInput, rightInput, formulaText)
  })
}
// Main Functions End

// Add Options Function
function addOption(parent, option){
  const optionElement = document.createElement('option')
  optionElement.setAttribute('value', option.value)
  optionElement.innerText = option.text

  parent.appendChild(optionElement)
}

// Remove All Child Functions Start
function removeAllChild(parent){
  while(parent.firstChild){
    parent.firstChild.remove()
  }
}
// Remove All Child Functions End

// Update Category Functions Start 
function updateCategory(categorySelect, leftSelect, rightSelect){
  const categoryName = categorySelect.value
  const units = converter[categoryName].units
  const option = Object.keys(units).sort()

  // Handle Left Select
  removeAllChild(leftSelect)
  option.forEach((item) => {
    addOption(leftSelect, {value: item, text: units[item]})
  })
  lastLeftSelectsValue = leftSelect.value

  // Handle Right Select
  removeAllChild(rightSelect)
  option.forEach((item) => {
    addOption(rightSelect, {value: item, text: units[item]})
  })
  rightSelect.getElementsByTagName('option')[1].selected = 'selected'
  lastRightSelectsValue = rightSelect.value
}
// Update Category Functions End

// Calculate Value Function Start
function calculateValue(categorySelect, leftSelect, rightSelect, leftInput, rightInput, formulaText){
  const categoryName = categorySelect.value
  const variants = converter[categoryName].variants
  const variantKey = `${leftSelect.value}:${rightSelect.value}`
  const variant = variants[variantKey]
  formulaText.innerText = variant.formula
  leftInput.value = 1;
  rightInput.value = variant.calculation(1)
}
// Calculate Value Function End