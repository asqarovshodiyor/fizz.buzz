const elForm = document.querySelector("#form")
const elInput = document.querySelector("#input")
const eltext = document.querySelector("#text")

elForm.addEventListener("submit",function(evt){
    evt.preventDefault()
    if(elInput.value % 3 === 0){
        eltext.textContent = "fizz"
    }
    if(elInput.value % 5 === 0){
        eltext.textContent = "buzz"
    }
    if(elInput.value % 3 === 0 && elInput.value % 5 === 0){
        eltext.textContent = "fizzbuzz"

    }
    else{
        eltext.textContent = "bu sonlar qoldiqsiz bulinmaydi"
    }
})