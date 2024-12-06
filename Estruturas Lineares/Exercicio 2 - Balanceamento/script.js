import {Stack} from "./Stack.js"

const pushButton = document.querySelector("#balancear_Button")


balancear_Button.addEventListener("click", ()=>balancear())

function balancear(){
    const s = new Stack()
    const texto = document.getElementById("elemento").value

    for (let letra of texto){ 
        if (letra === "(" || letra  === "[" || letra === "{"){
            s.push(letra)
        } else if (letra === ")" || letra === "]" || letra === "}"){
            if (s.isEmpty()){
                alert("Não Está Balanceado! ")
                return
            } else if (s.peek() === "(" &&  letra != ")") {
                alert("Não Está Balanceado! ")
                return
            } else if (s.peek() === "[" && letra != "]"){
                alert("Não está Balanceado! ")
                return
            } else if (s.peek() === "{" && letra != "}"){
                alert("Não está Balanceado! ")
                return
            }
            s.pop()
        }
    }
    if (s.isEmpty()){
        alert("Está Balanceado!")
    }else{
        alert("Não Está Balanceado!")
    }
}
