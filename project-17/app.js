const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const inputFill = document.getElementById('input-fill')
const result = document.getElementById('result')
result.style.display = 'none'
const resultName = document.getElementById('result-name')


resetBtn.addEventListener('click', function(){
  inputFill.value = ''
  result.style.display = 'none'
})

submitBtn.addEventListener('click', function(){
  const name = inputFill.value

  if(!name){
    alert('Please Enter Your Name')
  } else{
    result.style.display = 'block'
    resultName.innerText = name
    inputFill.value = ''
  }
})