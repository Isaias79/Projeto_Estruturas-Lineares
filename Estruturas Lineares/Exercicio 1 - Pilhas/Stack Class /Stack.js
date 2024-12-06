class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.size()-1]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.stack.length 
    }
}


const s = new Stack();
s.push(9)
console.log(s.stack)

export {Stack}