import {Stack} from "./Stack.js"

const pushButton = document.querySelector("#balancear_Button")


const s = new Stack()

balancear_Button.addEventListener("click", ()=>balancear())

function balancear(){
    const texto = document.getElementById("elemento").value
}

// function pushValue() {
//   const texto = document.querySelector("#elemento").value
//   s.push(texto)
//   alert.log(s.stack)
//   // console.log(s.stack)
// }

// function popValue(){
//   // const texto = document.querySelector("#elemento").value
//   s.pop()
//   alert.log(s.stack)
//   // console.log(s.stack)
// }

// function peekValue(){
//   alert.log(s.peek())
//   // console.log(s.peek())
// }

// function isemptyValue(){
  
//   alert.log(s.isEmpty())
//   // console.log(s.isEmpty())
// }

// function sizeValue(){
//   alert.log(s.size())
//   // console.log(s.size())
// }