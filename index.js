/* SCRIPTING BEGINS */
let age = document.getElementById("age-field")
let male = document.getElementById("male")
let female = document.getElementById("female")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let calcBtn = document.getElementById("btn")
let result = document.getElementById("result")
let resultContent = document.getElementById("result-content")

/* MY MODAL SCRIPT */
let myModal = document.getElementById("myModal")
let modalText = document.getElementById("modal-text")

function bmiCalc() {
    let bmiVals = [age.value, height.value, weight.value]

    if (male.checked) {
        bmiVals.push("male")
    } else if (female.checked) {
        bmiVals.push("female")
    }

    let bmi = Number(bmiVals[2]) / ((Number(bmiVals[1]) / 100) * Number(bmiVals[1] / 100))

    let answer = ""

    if (bmi < 18.5) {
        answer = "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        answer = "Healthy"
    } else if (bmi >= 25 && bmi <= 29.9) {
        answer = "Overweight"
    } else if (bmi >= 30 && bmi <= 34.9) {
        answer = "Obese"
    } else if (bmi >= 35) {
        answer = "Extremely obese"
    }

    resultContent.style.display = "block"

    //RESULTS
    result.innerHTML = bmi.toFixed(2)
    resultContent.innerHTML = `You are <span id="resultComment">${answer}</span>`
}

calcBtn.addEventListener("click", function() {
    // MODAL SCRIPTING TO ENSURE ALL FIELDS ARE FILLED!!
    if (age.value === "" || height.value === "" || weight.value === "" || (male.checked === false && female.checked === false)) {
        myModal.style.display = "block"
        modalText.innerHTML = "All fields are required!"
    } else {
        bmiCalc()
    }
})

// MODAL CLOSE BUTTON SCRITPING
let closeBtn = document.getElementById("close")

/* Modal Content disappears/closes when user click the close icon */
closeBtn.onclick = function() {
    myModal.style.display = "none"
}

/* Modal Content disappears/closes when user clicks anywhere outside the modal container */

window.onclick = function(event) {
    if (event.target === myModal) {
        // myModal.style.display = "none" // not working, why?
    }
}