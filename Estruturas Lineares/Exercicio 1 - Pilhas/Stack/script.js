import {push, pop, peek, isEmpty, size, stack} from "./Stack.js"

const pushButton = document.querySelector("#pushButton")
const popButton = document.querySelector("#popButton")
const peekButton = document.querySelector("#peekButton")
const isemptyButton = document.querySelector("#isemptyButton")
const sizeButton = document.querySelector("#sizeButton")



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
  alert.log(stack)
  // console.log(stack)
}

function popValue(){
  pop()
  alert.log(stack)
  // console.log(stack)
}

function peekValue(){
  alert.log(peek())
  // console.log(peek())
}

function isemptyValue(){
  alert.log(isEmpty())
  // console.log(isEmpty())
}

function sizeValue(){
  alert.log(size())
  // console.log(size())
}