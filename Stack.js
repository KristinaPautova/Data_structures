function Stack() {
    this.count = 0;
    this.storage = {};



    this.push = function(value){
        this.storage[this.count]= value
        this.count++
    }

    this.pop = function () {
        if(this.count === 0 ) return undefined
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = function() {
        return this.count
    }
    this.print = function() {
        console.log(this.storage)
    }
}

let stk = new Stack()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
console.log(stk.print())
console.log(stk.size())
stk.pop(2)
console.log(stk.print())