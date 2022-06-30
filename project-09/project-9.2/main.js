/**
 * Date: 12-03-2022
 * Author: Mithon Islam
 * Description: Color Picker Application Width Huge Dom Functionalities
 */


// ==//==//==//==// Globals //==//==//==//==
let div = null


// ==//==//==//==// Onload Handler //==//==//==//==
window.onload = () =>{
    main()
}


// Main or Boot Function, this function will take care of getting all the DOM references
function main(){
    const generateRandomColorBtn = document.getElementById('generate-random-color-btn')
    const colorInputHex = document.getElementById('color-input-hex')

    generateRandomColorBtn.addEventListener('click', handleGenerateRandomColorBtn)

    colorInputHex.addEventListener('keyup', handleColorInputHex)

};



// ==//==//==//==// Event Handlers //==//==//==//==
function handleGenerateRandomColorBtn(){
    const color = generateColorDecimal()
    updateColorToDom(color)
};

function handleColorInputHex(event){
    const hexColor = event.target.value
    if (hexColor){
        this.value = hexColor.toUpperCase()
        if (isValidHex(hexColor)){
            const color = hexToDecimalColors(hexColor)
            updateColorToDom(color)
        }
    }
};



// ==//==//==//==// DOM Functions //==//==//==//==
/**
 * Update dom elements with calculated color values
 * @param {object} color
 */
function updateColorToDom(color){
    const hexColor = generateHexColor(color)
    const rgbColor = generateRGBColor(color)

    document.getElementById('color-display').style.backgroundColor = `#${hexColor}`
    // document.getElementById('copy-mode-hex')
    // document.getElementById('copy-mode-rgb')
    document.getElementById('color-input-hex').value = hexColor
    document.getElementById('color-input-rgb').value = rgbColor
    document.getElementById('color-slider-label-red').innerText = color.red
    document.getElementById('color-slider-input-red').value = color.red
    document.getElementById('color-slider-label-green').innerText = color.green
    document.getElementById('color-slider-input-green').value = color.green
    document.getElementById('color-slider-label-blue').innerText = color.blue
    document.getElementById('color-slider-input-blue').value = color.blue
}


// ==//==//==//==// Utils Functions //==//==//==//==
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
 * take a color object of three decimal and values and return a rgb color code
 * @param {object} color;
 * @returns {string}
 */
function generateRGBColor({red, green, blue}){
    return `rgb(${red}, ${green}, ${blue})`
}


/**
 * Convert hex color to rgb
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

/**
 * @param {string} color;
 * @returns {boolean}
 */
function isValidHex(color){
    if(color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}$/i.test(color)
};

