import {Stack} from "./Stack.js"

const pushButton = document.querySelector("#pushButton")
const popButton = document.querySelector("#popButton")
const peekButton = document.querySelector("#peekButton")
const isemptyButton = document.querySelector("#isemptyButton")
const sizeButton = document.querySelector("#sizeButton")

const modificar = document.querySelector("#meuArray")


const s = new Stack()

pushButton.addEventListener("click", ()=>pushValue())
popButton.addEventListener("click", ()=>popValue())
peekButton.addEventListener("click", ()=>peekValue())
isemptyButton.addEventListener("click", ()=>isemptyValue())
sizeButton.addEventListener("click", ()=>sizeValue())

function pushValue() {
  const texto = document.querySelector("#elemento").value
  s.push(texto)
  modificar.innerHTML = `${s.stack}`
  // alert.log(s.stack)
  // console.log(s.stack)
}

function popValue(){
  // const texto = document.querySelector("#elemento").value
  s.pop()
  modificar.innerHTML = `${s.stack}`
  // alert.log(s.stack)
  // console.log(s.stack)
}

function peekValue(){
  // alert.log(s.peek())
  modificar.innerHTML = `${s.peek()}`
  // console.log(s.peek())
}

function isemptyValue(){
  modificar.innerHTML = `${s.isEmpty()}`
  // alert.log(s.isEmpty())
  // console.log(s.isEmpty())
}

function sizeValue(){
  modificar.innerHTML = `${s.size()}`
  // alert.log(s.size())
  // console.log(s.size())
}