window.onload = function(){
  main()
}

// Globals
let result = 0;

function main(){
  const output = document.getElementById('output')
  const incrementInput =document.getElementById('increment-file')
  const decrementInput =document.getElementById('decrement-file')
  const incrementBtn =document.getElementById('increment-btn')
  const decrementBtn =document.getElementById('decrement-btn')

  displayResult(output)

  incrementBtn.addEventListener('click', function(){
    const increment = parseInt(incrementInput.value)
    displayResult(output)
    result += increment;
  })

  decrementBtn.addEventListener('click', function(){
    const decrement = parseInt(decrementInput.value)
    result -= decrement;
    displayResult(output)
  })

  incrementInput.addEventListener('keyup', handleInput)
  decrementInput.addEventListener('keyup', handleInput)
}

function displayResult(output){
  if(result < 0){
    result = 0
    alert(`Result Can't Be Negative`)
  }
  let finalResult = result
  if(result < 10){
    finalResult = `0${result}`
  }

  output.innerText = finalResult
}

function handleInput (event){
  if(parseInt(event.target.value) > 100){
    event.target.value = 100
  }
  if(parseInt(event.target.value) < 0){
    event.target.value = 0
  }
}