/*
 *** Project Requirements:
 * - Change the background color by generating random rga color by clicking a button
*/


// Step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary reference
// step 4 - handle the click event


window.onload = () => {
    main()
}

// main function
function main(){
    const root = document.getElementById('root')
    const changeBtn = document.getElementById('changeBtn')
    const output = document.getElementById('output')

    changeBtn.addEventListener('click', function(){
        const bgColor = generateHexColor()
        root.style.backgroundColor = bgColor
        output.value = 'Hex Code: ' + bgColor
    })
}

// Create RGB color
function generateHexColor() {
    // HexColor = #000000, #ffffff
    // 255, 255, 255 = ff, ff, ff ==> #ffffff
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

