function Queue() {
    let collection = []

    this.print = function() {
        console.log(collection)
    }

    this.enqueue = function(element) {
        collection.push(element)
    }
    this.dequeue = function() {
        return collection.shift()
    }

    this.isEmpty = function() {
        return collection.length === 0
    }

    this.size = function() {
        return collection.length
    }
}

let pQ = new Queue()
console.log('Пустая функция:' + pQ.isEmpty());
pQ.enqueue(1);
pQ.enqueue(2);
pQ.enqueue(3);
pQ.enqueue(4);
pQ.print();
console.log('Пустая функция:' + pQ.isEmpty());
pQ.dequeue();
pQ.print();
console.log('Длина:' + pQ.size());