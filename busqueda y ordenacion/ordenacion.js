const vector = [98,45,23,21,2,35,67,34]


function bubbleSort () {
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = 0; j < vector.length - 1 - i; j++) {
            if (vector[j] > vector[j + 1]) {
                const temp = vector[j]
                vector[j] = vector[j + 1]
                vector[j + 1] = temp
            }
        }
    }
    console.log(vector)
}


bubbleSort()


const users = [
  { name: "Ana", age: 28 },
  { name: "Luis", age: 19 },
  { name: "Carlos", age: 35 },
  { name: "Marta", age: 22 }
];


function insertionSort () {
    for (let i = 1; i < users.length; i++) {
        const current = users[i]
        let j = i - 1
        while (j >= 0 && users[j].age > current.age) {
            users[j + 1] = users[j]
            j--
        }
        users[j + 1] = current
    }
    return users
}

const usersGroup = insertionSort()
console.log(usersGroup)

