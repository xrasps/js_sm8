let buttonUno = document.querySelector('.btnUno')
buttonUno.addEventListener('mousedown', ()=>{
    buttonUno.style.background = "cyan"
})

let buttonDos = document.querySelector('.btnDos')
buttonDos.addEventListener('mouseup', ()=>{
    buttonDos.style.background = "fuchsia"
}) 

let buttonTres = document.querySelector('.btnTres')
buttonTres.addEventListener('mouseover', ()=>{
    buttonTres.style.background = "blanchedalmond"
}) 

let buttonCuatro = document.querySelector('.btnCuatro')
buttonCuatro.addEventListener('mouseout', ()=>{
    buttonCuatro.style.background = "cadetblue"
}) 

let buttonCinco = document.querySelector('.btnCinco')
buttonCinco.addEventListener('mousemove', ()=>{
    function generateColor(){
        return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    $color = generateColor()
    buttonCinco.style.background = $color
}) 

let buttonSeis = document.querySelector('.btnSeis')
buttonSeis.addEventListener('dblclick', ()=>{
    buttonSeis.style.background = "deeppink"
}) 

let buttonSiete = document.querySelector('.btnSiete')
buttonSiete.addEventListener('contextmenu', ()=>{
    buttonSiete.style.background = "darkgrey"
}) 