const defaultQuotes = [
  'Mst. Mim Akter',
  'Mst. Lipi Akter',
  'Mst. Munjura Akter',
  'Md. Liton Malitha',
  'Md. Mithon Islam ',
  'Md. Likhon Hossen',
  'Mst. Khadija Kubra',
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi aspernatur at odit porro fuga! Animi a ipsum enim eum dolorem. Est fuga rerum quisquam eveniet corrupti a et aliquid.'
]


window.onload = function (){
  main()
}

function main() {
  const newQuoteBtn = document.getElementById('new-quotes')
  const newQuoteCount = document.getElementById('quote-count')
  const newQuoteBody = document.getElementById('new-quote-body')


  newQuoteBtn.addEventListener('click', function(event){
    const randomIndex = Math.floor(Math.random() * defaultQuotes.length)
    const quote = defaultQuotes[randomIndex]
    newQuoteBody.innerText = quote
    
    newQuoteCount.innerText = `Quotes Index: ${randomIndex}`
  })
}