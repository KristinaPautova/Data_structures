
function hash(string, max) {
    let hash = 0
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i)
    }
    return hash % max
}

function HashTable() {
    let storage = []
    const storageLimit = 4

    this.print = function() {
        console.log(storage)
    }

    this.add = function (key, value) {
        let index = hash(key, storageLimit)
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false
            for (let i = 0; i < storage[index].len; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted === false) {
                storage[index].push([key, value])
            }
        }
    }

    this.remove = function (key) {
        let index = hash(key, storageLimit)
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index]
        } else {
            for (let i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i]
                }
            }
        }
    }

}

const hashT = new HashTable();
hashT.add(1,'sdkmvskdm',)
hashT.add('name','Kristina')
hashT.print()