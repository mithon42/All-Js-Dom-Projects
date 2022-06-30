/*
 *** Project Requirements:
 * - Change the background color by generating random rga color by clicking a button
 * - Also display the hex code to a disable input field
 * - Add a button to copy the color code
 * - Add a Toast message when copy
*/


// Step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary reference
// step 4 - handle the click event
// step 5 - handle the copy button click event
// step 6 - Active toast message
// step 7 - create a dynamic toast message
// step 8 - clear toast message


// Global
let div = null

window.onload = () =>{
    main()
}

// Main Function
function main(){
    const root = document.getElementById('root')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copyBtn')
    const changeBtn = document.getElementById('changeBtn')

    changeBtn.addEventListener('click', function(){
        const bgColor = generateHexColor()

        root.style.backgroundColor = bgColor
        output.value = bgColor
    })
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
        if()
        generateToastMessage(`${output.value} copied`)
    })

}

// Create Color 
function generateHexColor(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// Create Div Dynamic Toast Message
function generateToastMessage(msg){
    div = document.createElement('div')
    div.innerText = msg
    div.className = 'toast-message toast-message-slide-in'

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend', function(){
            div.remove()
            div = null
        })
    })

    document.body.appendChild(div)
}