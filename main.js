
const btnOn = document.querySelector("#btnOn")
const btnOff = document.querySelector("#btnOff")

const lightbox = document.querySelector(".lightbox")


btnOn.addEventListener("click", function(){
    lightbox.style.backgroundColor = "yellow"
    btnOn.style.color = "red"
    btnOff.style.color = "black"
})
btnOff.addEventListener("click", function(){
    lightbox.style.backgroundColor = "transparent"
    btnOff.style.color = "red"
    btnOn.style.color = "black"
    

    

})