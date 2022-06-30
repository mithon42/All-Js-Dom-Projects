/**
 * Date: 21-03-2022
 * Author: Mithon Islam
 * Description: Color Picker Application Width Huge Dom Functionalities
 */



// ==//==//==// Globals //==//==//==
let toastContainer = null
const defaultColor = {
    red: 221,
    green: 222,
    blue: 238
}

// ==//==//==// Onload Handler //==//==//==
window.onload = () => {
    main()
    updateColorCodeToDom(defaultColor)
}


// ==//==//==// Main Or Boot Function, This function will take care of getting all the DOM References //==//==//==
function main(){
    // DOM References
    const generateRandomColorBtn = document.getElementById('generate-random-color-btn')
    const colorInputHex = document.getElementById('color-input-hex')
    const colorSliderRed = document.getElementById('color-slider-input-red')
    const colorSliderGreen = document.getElementById('color-slider-input-green')
    const colorSliderBlue = document.getElementById('color-slider-input-blue')
    const copyToClipboardBtn = document.getElementById('copy-to-clipboard-btn')

    // Event Listeners
    generateRandomColorBtn.addEventListener('click', handleGenerateRandomColorBtn)
    colorInputHex.addEventListener('keyup', handleColorInputHex)

    colorSliderRed.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    colorSliderGreen.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))
    colorSliderBlue.addEventListener('change', handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue))

    copyToClipboardBtn.addEventListener('click', handleCopyToClipboard)
}



// ==//==//==// Event Handlers //==//==//==
/**
 * Handle Generate Random Color Button Events
 */
function handleGenerateRandomColorBtn(){
    const color = generateColorDecimal()
    updateColorCodeToDom(color)
}

/**
 * Handle Color Input Hex Events
 */
function handleColorInputHex(event){
    const hexColor = event.target.value
    if(hexColor){
        this.value = hexColor.toUpperCase()
        if(isValidHex(hexColor)){
            const color = hexToDecimalColors(hexColor)
            updateColorCodeToDom(color)
        }
    }
}

/**
 * Handle Color Sliders Events
 */
function handleColorSliders(colorSliderRed, colorSliderGreen, colorSliderBlue){
    return function(){
        const color = {
            red: parseInt(colorSliderRed.value),
            green: parseInt(colorSliderGreen.value),
            blue: parseInt(colorSliderBlue.value)
        }
        updateColorCodeToDom(color)
    }
}

/**
 * Handle copy To clipboard Events
 */
function handleCopyToClipboard(){
    const colorModeRadios = document.getElementsByName('color-mode')
    const mode = getCheckedValueFormRadios(colorModeRadios)
    if(mode === null){
        throw new Error('Invalid Radio Input')
    }

    if(toastContainer !== null){
        toastContainer.remove()
        toastContainer = null;
    }

    if(mode === 'hex'){
        const hexColor = document.getElementById('color-input-hex').value
        if(hexColor && isValidHex(hexColor)){
            navigator.clipboard.writeText(`#${hexColor}`)
            generateToastMessage(`#${hexColor} Copied`)
        } else{
            alert('Invalid Hex Code')
        }
    } else {
        const rgbColor = document.getElementById('color-input-rgb').value
        if(rgbColor){
            navigator.clipboard.writeText(rgbColor)
            generateToastMessage(`${rgbColor} Copied`)
        } else{
            alert('Invalid RGB Color')
        }
    }
}


// ==//==//==// DOM Function //==//==//==
/**
 * Update dom elements with calculated color values
 * @param {object} color
 */
function updateColorCodeToDom(color){
    let hexColor = generateHexColor(color)
    let rgbColor = generateRGBColor(color)

    document.getElementById('color-display').style.backgroundColor = `#${hexColor}`
    document.getElementById('color-input-hex').value = hexColor
    document.getElementById('color-input-rgb').value = rgbColor
    document.getElementById('color-slider-label-red').innerText = color.red
    document.getElementById('color-slider-label-green').innerText = color.green
    document.getElementById('color-slider-label-blue').innerText = color.blue
    document.getElementById('color-slider-input-red').value = color.red
    document.getElementById('color-slider-input-green').value = color.green
    document.getElementById('color-slider-input-blue').value = color.blue

}

/**
 * Generate a Dynamic DOM Element to show a Toast message
 * @param {String} msg
 */
function generateToastMessage(msg){
    toastContainer = document.createElement('div')
    toastContainer.innerText = msg
    toastContainer.className = 'toast-message toast-message-slider-in'

    toastContainer.addEventListener('click', function(){
        toastContainer.classList.remove('toast-message-slider-in')
        toastContainer.classList.add('toast-message-slider-out')

        toastContainer.addEventListener('animationend', function(){
            toastContainer.remove()
            toastContainer = null
        })
    })

    document.body.appendChild(toastContainer)
}

/**
 * Find the Checked Elements form a list of Radio Buttons
 * @param {Array} nodes 
 * @returns {string / null}
 */
function getCheckedValueFormRadios(nodes){
    let checkedValue = null

    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].checked) {
            checkedValue = nodes[i].value
            break;
        }
    }
    return checkedValue;
}


// ==//==//==// Utils Function //==//==//==
/**
 * Generate and return an object of three color decimal values
 * @returns {Object}
 */
 function generateColorDecimal(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return {
        red,
        green,
        blue,
    }
}

/**
 * take a color object of three decimal and values and return a hexadecimal color code
 * @param {object} color;
 * @returns {string}
 */
function generateHexColor({red, green, blue}){
    const getTowCode = (value) => {
        const hex = value.toString(16)
        return hex.length == 1 ? `0${hex}` : hex
    }

    return `${getTowCode(red)}${getTowCode(green)}${getTowCode(blue)}`.toUpperCase()
}

/**
 * Take a color object of three decimal and values and return a rgb color code
 * @param {object} color;
 * @returns {string}
 */
 function generateRGBColor({red, green, blue}){
    return `rgb(${red}, ${green}, ${blue})`
}

/**
 * @param {string} color;
 * @returns {boolean}
 */
 function isValidHex(color){
    if(color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}$/i.test(color)
};

/**
 * Convert hex color to decimal colors object
 * @param {string} hex
 * @returns {object}
 */
 function hexToDecimalColors(hex){
    const red = parseInt(hex.slice(0, 2), 16 )
    const green = parseInt(hex.slice(2, 4), 16 )
    const blue = parseInt(hex.slice(4), 16 )

    return {
        red,
        green,
        blue
    }
}