import LinkedStack from './LinkedStack.js'

const pushButton = document.querySelector("#pushButton")
const popButton = document.querySelector("#popButton")
const peekButton = document.querySelector("#peekButton")
const isemptyButton = document.querySelector("#isemptyButton")
const sizeButton = document.querySelector("#sizeButton")

const s = new LinkedStack();

let modificar = document.querySelector("#meuArray")


pushButton.addEventListener("click", function (){
    return pushValue()
})
popButton.addEventListener("click", ()=>popValue())
peekButton.addEventListener("click", ()=>peekValue())
isemptyButton.addEventListener("click", ()=>isemptyValue())
sizeButton.addEventListener("click", ()=>sizeValue())

function pushValue() {
  const texto = document.querySelector("#elemento").value
  modificar.innerHTML = `${s.push(texto)}`
  exibirPilha()
  // alert(s.push(texto))
//   console.log(s.push(texto))
}

function popValue(){
  modificar.innerHTML = `${s.pop()}`
  exibirPilha()
  // alert(s.pop())
//   console.log(s.pop())
}

function peekValue(){
  modificar.innerHTML = `${s.peek()}`
  // alert(s.peek())
//   console.log(s.peek())
}

function isemptyValue(){
  modificar.innerHTML = `${s.isEmpty()}`
  // alert(s.isEmpty())
//   console.log(s.isEmpty())
}

function sizeValue(){
  modificar.innerHTML = `${s.size()}`
  // alert(s.size())
//   console.log(s.size())
}

function exibirPilha(){
  modificar = document.querySelector("#meuArray")
  modificar.innerHTML = ""

  let temp = s.top
  while (temp !== null){
      modificar.innerHTML += `<p>${temp.value}</p>`
      temp = temp.prev
  }
}