/**
 * Date: 12-03-2022
 * Author: Mithon Islam
 * Description: Color Picker Application Width Huge Dom Functionalities
 */



// Globals
let div = null



// Onload Handler
window.onload = () =>{
    main()
}







// Main or Boot Function, this function will take care of getting all the DOM references
function main(){

}






// Event Handlers





// DOM Functions




// Utils Functions
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

    return `#${getTowCode(red)}${getTowCode(green)}${getTowCode(blue)}`.toUpperCase()
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
 */
function hexToRgb(hex){
    const red = parseInt(hex.slice(0, 2), 16 )
    const green = parseInt(hex.slice(2, 4), 16 )
    const blue = parseInt(hex.slice(4), 16 )

    return `rgb(${red}, ${green}, ${blue})`
}

/**
 * @param {string} color;
 * @returns {boolean}
 */
function isValidHex(color){
    if(color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}

