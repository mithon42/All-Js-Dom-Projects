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
      gram: 'Gram'
    },
    variants: {
      'tonne:kilogram': {
        formula: 'multiply the mass value by 1000',
        calculation(n){
          return n * 1000;
        },
      },
      'tonne:gram': {
        formula: 'multiply the mass value by 1e+6',
        calculation(n){
          return n * new Number('1e+6');
        },
      },
      'kilogram:tonne': {
        formula: 'divide the mass value by 1000',
        calculation(n){
          return n / 1000;
        },
      },
      'kilogram:gram': {
        formula: 'multiply the mass value by 1000',
        calculation(n){
          return n * 1000;
        },
      },
      'gram:tonne': {
        formula: 'divide the mass value by 1e+6',
        calculation(n){
          return n / new Number('1e+6');
        },
      },
      'gram:kilogram': {
        formula: 'divide the mass value by 1000',
        calculation(n){
          return n / 1000;
        },
      }
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
      mile: 'Mile',
      foot: 'Foot',
      inch: 'Inch'
    },
    variants: {
      'kilometer:meter': {
        formula: 'multiply the length value by 1000',
        calculation(n){
          return n * 1000;
        },
      },
      'kilometer:centimeter': {
        formula: 'multiply the length value by 100000',
        calculation(n){
          return n * 100000;
        },
      },
      'kilometer:millimeter': {
        formula: 'multiply the length value by 1e+6',
        calculation(n){
          return n * new Number('1e+6');
        },
      },
      'kilometer:micrometers': {
        formula: 'multiply the length value by 1e+9',
        calculation(n){
          return n * new Number('1e+9');
        },
      },
      'kilometer:mile': {
        formula: 'for an approximate result, divide the length value by 1.609',
        calculation(n){
          return n / 1.609;
        },
      },
      'kilometer:foot': {
        formula: 'for an approximate result, multiply the length value by 3281',
        calculation(n){
          return n * 3281;
        },
      },
      'kilometer:inch': {
        formula: 'for an approximate result, multiply the length value by 39370',
        calculation(n){
          return n * 39370;
        },
      },
      'meter:kilometer': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000;
        },
      },
      'meter:centimeter': {
        formula: 'multiply the length value by 100',
        calculation(n){
          return n * 100;
        },
      },
      'meter:millimeter': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000;
        },
      },
      'meter:micrometers': {
        formula: 'multiply the length value by 1e+6',
        calculation(n){
          return n * new Number('1e+6');
        },
      },
      'meter:mile': {
        formula: 'for an approximate result, divide the length value by 1609',
        calculation(n){
          return n / 1609;
        },
      },
      'meter:foot': {
        formula: 'for an approximate result, multiply the length value by 3.281',
        calculation(n){
          return n * 3.281;
        },
      },
      'meter:inch': {
        formula: 'multiply the length value by 39.37',
        calculation(n){
          return n * 39.37;
        },
      },
      'centimeter:kilometer': {
        formula: 'divide the length value by 100000',
        calculation(n){
          return n / 100000;
        },
      },
      'centimeter:meter': {
        formula: 'divide the length value by 100',
        calculation(n){
          return n / 100;
        },
      },
      'centimeter:millimeter': {
        formula: 'multiply the length value by 10',
        calculation(n){
          return n * 10;
        },
      },
      'centimeter:micrometers': {
        formula: 'multiply the length value by 10000',
        calculation(n){
          return n * 10000;
        },
      },
      'centimeter:mile': {
        formula: 'for an approximate result, divide the length value by 160900',
        calculation(n){
          return n / 160900;
        },
      },
      'centimeter:foot': {
        formula: 'divide the length value by 30.48',
        calculation(n){
          return n / 30.48;
        },
      },
      'centimeter:inch': {
        formula: 'divide the length value by 2.54',
        calculation(n){
          return n / 2.54;
        },
      },
      'millimeter:kilometer': {
        formula: 'divide the length value by 1e+6',
        calculation(n){
          return n / new Number('1e+6');
        },
      },
      'millimeter:meter': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000;
        },
      },
      'millimeter:centimeter': {
        formula: 'divide the length value by 10',
        calculation(n){
          return n / 10;
        },
      },
      'millimeter:micrometers': {
        formula: 'multiply the length value by 1000',
        calculation(n){
          return n * 1000;
        },
      },
      'millimeter:mile': {
        formula: 'for an approximate result, divide the length value by 1.609e+6',
        calculation(n){
          return n / new Number('1.609e+6');
        },
      },
      'millimeter:foot': {
        formula: 'divide the length value by 304.8',
        calculation(n){
          return n / 304.8;
        },
      },
      'millimeter:inch': {
        formula: 'divide the length value by 25.4',
        calculation(n){
          return n / 25.4;
        },
      },
      'micrometer:kilometer': {
        formula: 'divide the length value by 1e+9',
        calculation(n){
          return n / new Number('1e+9');
        },
      },
      'micrometer:meter': {
        formula: 'divide the length value by 1e+6',
        calculation(n){
          return n / new Number('1e+6');
        },
      },
      'micrometer:centimeter': {
        formula: 'divide the length value by 10000',
        calculation(n){
          return n / 10000;
        },
      },
      'micrometer:millimeter': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n * 10000;
        },
      },
      'micrometer:mile': {
        formula: 'for an approximate result, divide the length value by 1.609e+9',
        calculation(n){
          return n / new Number('1.609e+9');
        },
      },
      'micrometer:foot': {
        formula: 'divide the length value by 304800',
        calculation(n){
          return n / 304800;
        },
      },
      'micrometer:inch': {
        formula: 'divide the length value by 25400',
        calculation(n){
          return n / 25400;
        },
      },
      'mile:kilometer': {
        formula: 'for an approximate result, multiply the length value by 1.609',
        calculation(n){
          return n * 1.609;
        },
      },
      'mile:meter': {
        formula: 'for an approximate result, multiply the length value by 1609',
        calculation(n){
          return n * 1609;
        },
      },
      'mile:centimeter': {
        formula: 'for an approximate result, multiply the length value by 160900',
        calculation(n){
          return n * 160900;
        },
      },
      'mile:millimeter': {
        formula: 'for an approximate result, multiply the length value by 1.609e+6',
        calculation(n){
          return n * new Number('1.609e+6');
        },
      },
      'mile:micrometer': {
        formula: 'for an approximate result, multiply the length value by 1.609e+9',
        calculation(n){
          return n * new Number('1.609e+9');
        },
      },
      'mile:mile': {
        formula: 'for an approximate result, divide the length value by 1.609e+9',
        calculation(n){
          return n / new Number('1.609e+9');
        },
      },
      'mile:foot': {
        formula: 'divide the length value by 304800',
        calculation(n){
          return n / 304800;
        },
      },
      'mile:inch': {
        formula: 'divide the length value by 25400',
        calculation(n){
          return n / 25400;
        },
      },
      'foot:kilometer': {
        formula: 'for an approximate result, divide the length value by 3281',
        calculation(n){
          return n / 3281;
        },
      },
      'foot:meter': {
        formula: 'for an approximate result, divide the length value by 3.281',
        calculation(n){
          return n / 3.281;
        },
      },
      'foot:centimeter': {
        formula: 'multiply the length value by 30.48',
        calculation(n){
          return n * 30.48;
        },
      },
      'foot:millimeter': {
        formula: 'multiply the length value by 304.8',
        calculation(n){
          return n * 304.8;
        },
      },
      'foot:micrometer': {
        formula: 'multiply the length value by 304800',
        calculation(n){
          return n * 304800;
        },
      },
      'foot:mail': {
        formula: 'divide the length value by 5280',
        calculation(n){
          return n / 5280;
        },
      },
      'foot:inch': {
        formula: 'multiply the length value by 12',
        calculation(n){
          return n * 12;
        },
      },
      'inch:kilometer': {
        formula: 'for an approximate result, divide the length value by 39370',
        calculation(n){
          return n / 39370;
        },
      },
      'inch:meter': {
        formula: 'divide the length value by 39.37',
        calculation(n){
          return n / 39.37;
        },
      },
      'inch:centimeter': {
        formula: 'multiply the length value by 2.54',
        calculation(n){
          return n * 2.54;
        },
      },
      'inch:millimeter': {
        formula: 'multiply the length value by 25.4',
        calculation(n){
          return n * 25.4;
        },
      },
      'inch:micrometer': {
        formula: 'multiply the length value by 25400',
        calculation(n){
          return n * 25400;
        },
      },
      'inch:mile': {
        formula: 'divide the length value by 63360',
        calculation(n){
          return n / 63360;
        },
      },
      'inch:foot': {
        formula: 'divide the length value by 12',
        calculation(n){
          return n / 12;
        },
      },
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
        formula: 'divide the time value by 60',
        calculation(n){
          return n / 60;
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
      liter: 'Liter',
      milliliter: 'Milliliter'
    },
    variants: {
      'liter:milliliter': {
        formula: 'multiply the volume value by 1000',
        calculation(n){
          return n * 1000;
        },
      },
      'milliliter:liter': {
        formula: 'divide the volume value by 1000',
        calculation(n){
          return n / 1000;
        },
      }
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