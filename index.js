const userIput = document.getElementById("number-input"); 
let inputValidator = userIput.value.trim()
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-result");
const volumeEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");
const warrning = document.getElementById("warrning")

let showWarrning = false

const metersToFeet = 3.281
const feetToMeters = 0.304
const litersToGallons = 0.264
const gallonToLitre = 3.785
const kiloToPoubds = 2.204
const poundsToKilo = 0.4535

function Convertor(){
    let baseValue = userIput.value

    if(baseValue === "0"){
        showWarrning = true
        warrning.textContent = "0 cannot be converted"
        warrningValidator()
        return
    }else if(baseValue === ""){
        showWarrning = true
        warrning.textContent = "Please add an number"
        warrningValidator()
        return
    }else{
        showWarrning = false
        warrningValidator()
    }

    lengthEl.textContent = `${baseValue} meters = ${baseValue * metersToFeet} feet | ${baseValue} feet = ${baseValue * feetToMeters} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * litersToGallons).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLitre).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPoubds).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundsToKilo).toFixed(3)} kilos`
}


function warrningValidator(){
    if(showWarrning === true){
       warrning.style.display = "block"
    }else if(showWarrning === false){
        warrning.style.display = "none"
    }
}
// Click event

convertBtn.addEventListener("click", () => {
    Convertor()
})