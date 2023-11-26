
// const btnOn = document.querySelector("#btnOn")
// const btnOff = document.querySelector("#btnOff")

// const lightbox = document.querySelector(".lightbox")


const imageOne = document.querySelector(".on")
const imageTwo = document.querySelector(".off")





btnOn.addEventListener("click", function(){
    imageTwo.style.display = "none"
    imageOne.style.display = "block"
    btnOff.style.color = "black"
    btnOn.style.color = "red"
})
btnOff.addEventListener("click", function(){
    imageOne.style.display = "none"
    imageTwo.style.display = "block"
    btnOff.style.color = "red"
    btnOn.style.color = "black"
})