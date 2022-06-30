/**
 * Author: Md. Mithon Islam
 * Dec:
*/

window.onload = () =>{
  main()
}

const converter = {
  area: {
    name: 'Area'
  },
  mess: {
    name: 'Mess'
  },
  length: {
    name: 'Length'
  },
  volume: {
    name: 'Volume'
  },
  time: {
    name: 'Time'
  },
  dataTransferRate: {
    name: 'Data Transfer Rate'
  },
  pressure: {
    name: 'Pressure'
  }
};

function main(){
  const categorySelect = document.getElementById('category-select')

  const converterKeys = Object.keys(converter).sort()
  removeAllChild(categorySelect)
  converterKeys.forEach((item) => {
    addOption(categorySelect, {value: item, text: converter[item].name})
  })
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
