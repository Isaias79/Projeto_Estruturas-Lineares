import LinkedStack from './LinkedStack.js'

const pushButton = document.querySelector("#pushButton")
const popButton = document.querySelector("#popButton")
const peekButton = document.querySelector("#peekButton")
const isemptyButton = document.querySelector("#isemptyButton")
const sizeButton = document.querySelector("#sizeButton")

const s = new LinkedStack();


pushButton.addEventListener("click", function (){
    return pushValue()
})
popButton.addEventListener("click", ()=>popValue())
peekButton.addEventListener("click", ()=>peekValue())
isemptyButton.addEventListener("click", ()=>isemptyValue())
sizeButton.addEventListener("click", ()=>sizeValue())

function pushValue() {
  const texto = document.querySelector("#elemento").value
  alert(s.push(texto))
//   console.log(s.push(texto))
}

function popValue(){
  alert(s.pop())
//   console.log(s.pop())
}

function peekValue(){
  alert(s.peek())
//   console.log(s.peek())
}

function isemptyValue(){
  alert(s.isEmpty())
//   console.log(s.isEmpty())
}

function sizeValue(){
  alert(s.size())
//   console.log(s.size())
}