import {push, pop, peek, isEmpty, size, stack} from "./Stack.js"

const pushButton = document.querySelector("#pushButton")
const popButton = document.querySelector("#popButton")
const peekButton = document.querySelector("#peekButton")
const isemptyButton = document.querySelector("#isemptyButton")
const sizeButton = document.querySelector("#sizeButton")

const modificar = document.querySelector("#meuArray")



pushButton.addEventListener("click", function (){
    return pushValue()
})
popButton.addEventListener("click", ()=>popValue())
peekButton.addEventListener("click", ()=>peekValue())
isemptyButton.addEventListener("click", ()=>isemptyValue())
sizeButton.addEventListener("click", ()=>sizeValue())

function pushValue() {
  const texto = document.querySelector("#elemento").value
  push(texto)
  modificar.innerHTML = `${stack}`
  // alert.log(stack)
  // console.log(stack)
}

function popValue(){
  pop()
  modificar.innerHTML = `${stack}`
  // alert.log(stack)
  // console.log(stack)
}

function peekValue(){
  modificar.innerHTML = `${peek()}`
  // alert.log(peek())
  // console.log(peek())
}

function isemptyValue(){
  modificar.innerHTML = `${isEmpty()}`
  // alert.log(isEmpty())
  // console.log(isEmpty())
}

function sizeValue(){
  modificar.innerHTML = `${size()}`
  // alert.log(size())
  // console.log(size())
}