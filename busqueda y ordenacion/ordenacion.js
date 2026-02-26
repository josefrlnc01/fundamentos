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





const users = [
  { name: "Ana", age: 28 },
  { name: "Luis", age: 19 },
  { name: "Carlos", age: 35 },
  { name: "Marta", age: 22 }
];


function insertionSort () {
    for (let i = 1; i < users.length; i++) {
        //Obtenemos usuario actual
        const current = users[i]
        let j = i - 1
        while (j >= 0 && users[j].age > current.age) {
            //Si edad del usuario anterior es mayor a la del actual se intercambia la posición del actual por la previa que es mayor
            //Primera iteración: users[1] = users[0]
            users[j + 1] = users[j]
            j--
        }
        //Se inserta el valor actual en la posición del valor previamente intercambiado
        //Primera iteración: users[0] = current
        users[j + 1] = current
    }
    return users
}





 
function compare (a,b) {
    //Orden ascendente
    return a - b
}


function selectionSort (numbers, compare) {
    for (let i = 0; i < numbers.length - 1; i++) {
        //Creamos variable para valor del indice del numero más pequeño
        let minIndex = i
        //El valor de J comienza siendo un número mayor a I para que la comprobación inicial sea sobre números distintos
        for (let j = i + 1; j < numbers.length; j++) {
            /*Si un valor de la iteración sobre el array completo es menor que la variable de indice mínimo
            asignamos como nuevo índice el de este número
            */
            
            if (compare(numbers[j], numbers[minIndex]) < 0) {
                minIndex = j
            }
        }
        /*Si el índice es distinto al del número de la iteración actual y por lo tanto son posiciones distintas del array
        comenzamos a desplazar el valor mas pequeño encontrado a la izquierda
        */
        if (minIndex !== i) {
            let temp = numbers[i]
            numbers[i] = numbers[minIndex]
            numbers[minIndex] = temp
        }
    }
    console.log(numbers)
}



function shellShort (numbers) {
    //Obtenemos el salto por iteración
    let gap = Math.floor(numbers.length / 2)

    while (gap > 0) {
        for (let i = gap; i < numbers.length; i++) {
            let temp = numbers[i]
            let j = i
            //Si el indice j = i es mayor o igual al salto y el valor del elemento actual es mayor a la variable auxiliar
            while (j >= gap && numbers[j - gap] > temp) {
                
                numbers[j] = numbers[j - gap]
                j -= gap
            }

            numbers[j] = temp
        }
        gap = Math.floor(gap / 2)
    }
    console.log(numbers)
}




function newBubbleSort () {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    } 
    console.log(numbers)
}





function newInsertionSort () {
    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i]
        let j = i - 1
        while (j >= 0 && numbers[j] > current) {
            numbers[j + 1] = numbers[j]
            j--
        }

        numbers[j + 1] = current
    }
    console.log(numbers)
}





function newShellSort () {
    let gap = Math.floor(numbers.length / 2)

    while (gap > 0) {
        for (let i = gap; i < numbers.length; i++) {
            let temp = numbers[i]
            let j = i
            
            while (j >= gap && numbers[j - gap] > temp) {
                numbers[j] = numbers[j - gap]
                j -= gap
            }


            numbers[j] = temp
        }
        gap = Math.floor(gap / 2)
    }
    console.log(numbers)
}




function ss (numbers) {
    let gap = Math.floor(numbers.length / 2)

    while (gap > 0) {
        for (let i = gap; i < numbers.length; i++) {
            const temp = numbers[i]
            let j = i
            while (j >= gap && numbers[j - gap] > temp) {
                numbers[j] = numbers[j - gap]
                j -= gap
            }

            numbers[j] = temp
        }
        gap = Math.floor(gap / 2)
    }
    return numbers
}


const numbers = [20,3,35,23,74,34,8]

function quickSort (numbers, left = 0, right = numbers.length - 1) {
    if (left >= right) return numbers

    const pivot = numbers[right]
    let i = left - 1

    //Partición del vector
    for (let j = left; j < right; j++) {
        if (numbers[j] < pivot) {
            i++
            const temp = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = temp
        }
    }


    //Colocamos el pivote en su lugar
    const temp = numbers[i + 1]
    numbers[i + 1] = numbers[right]
    numbers[right] = temp

    const pivotIndex = i + 1

    quickSort(numbers, left, pivotIndex - 1)
    quickSort(numbers, pivotIndex + 1, right)
}
quickSort(numbers)