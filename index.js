
// console.log(inputNumber)

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const calculateBtn = document.getElementById("calculate-btn-el")
const displayLenght = document.getElementById("display-content-lenght")
const displayVolume = document.getElementById("display-content-volume")
const displayMass = document.getElementById("display-content-mass")
function returnInput(){
    let inputNumber = document.getElementById("input-text").value
    return inputNumber
}


function lenght(){
    const inputNumber = returnInput()
    const conversionInFeets= inputNumber * 3.281
    const consversionInMeters = inputNumber /3.281 
   const string = `${inputNumber} meters =${conversionInFeets} feet | ${inputNumber} feet = ${consversionInMeters.toFixed(3)} meters`
    displayLenght.textContent = string

}

function volume(){
    const inputNumber = returnInput()
    const coversionIngallons = inputNumber * 0.264
    const conversionInLiters = inputNumber/0.264
    const string = `${inputNumber} liters =${coversionIngallons} gallons | ${inputNumber} gallons = ${conversionInLiters.toFixed(3)} liters`
    displayVolume.textContent = string
}

function mass(){
    const inputNumbwer = returnInput()
    const converionInPound =  inputNumber * 2.204
    const conversionInKg = inputNumber / 2.204
    const string = `${inputNumber} kilos =${converionInPound.toFixed(3)} pounds | ${inputNumber} pounds = ${conversionInKg.toFixed(3)} kilos`
    displayMass.textContent = string
}



calculateBtn.addEventListener("click",function(){
    lenght()
    volume()
    mass()
})



