const temperaturas = [
    [22, 25, 23],  // Madrid: Lun, Mar, Mie
    [18, 20, 19],  // Barcelona
    [15, 17, 16]   // Bilbao
]

// Encontrar la temperatura máxima
let maxTemp = temperaturas[0][0]

for (let i = 0; i < temperaturas.length; i++) {
    for (let j = 0; j < temperaturas[i].length; j++) {
        if (temperaturas[i][j] > maxTemp) {
            maxTemp = temperaturas[i][j]
        }
    }
}

function mediaAlumnos (notas) {
    const num_alumnos = 5
    const num_notas_por_alumno = 4
   
    for (let i = 0; i < notas.length; i++) {
         let suma = 0
        for (let k = 0; k < notas[i].length; k++) {
                 suma += notas[i][k]
        }

        const media = suma / num_notas_por_alumno
        console.log(`alumno: ${i + 1}:`, media)
    }
    
}

const notas = [
    [7.5, 8.0, 6.5, 9.0],  // notas[0] - Alumno 1
    [5.0, 6.0, 7.0, 5.5],  // notas[1] - Alumno 2
    [9.0, 9.5, 8.5, 10.0]  // notas[2] - Alumno 3
]



function totalButacas (butacas) {
    let totalButacas = 0
    for (let i = 0; i < butacas.length; i++) {
        for (let k = 0; k < butacas[i].length; k++) {
            totalButacas += butacas[i][k]
        }
    }
    return totalButacas
}

const butacas = [
    [15, 18, 12, 20],  // Lunes a Jueves - Sala 1
    [10, 8, 14, 16],   // Sala 2
    [20, 20, 19, 17]   // Sala 3
]

function imprimirTablas (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`tabla ${i + 1} : ${arr[i][j]}`)
        }
    }
}


const tablas = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],       // Tabla del 1
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],  // Tabla del 2
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], // Tabla del 3
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],// Tabla del 4
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]// Tabla del 5
]

function calcularMaxLluvias (lluvias) {
    let maxTotal = 0
    let ciudadMax = 0

    for (let i = 0; i < lluvias.length; i++) {
        let totalCiudad = 0
        for (let j = 0; j < lluvias[i].length; j++) {
            totalCiudad += lluvias[i][j]
        }
        if (totalCiudad > maxTotal) {
            maxTotal = totalCiudad
            ciudadMax = i
        }
    }
    return `la ciudad con mas lluvias es ${ciudadMax + 1} con ${maxTotal}mm`
}


const lluvias = [
    [5, 0, 3, 8, 2, 0, 1],    // Ciudad A
    [0, 0, 0, 2, 1, 0, 0],    // Ciudad B
    [10, 8, 5, 12, 9, 7, 11], // Ciudad C
    [3, 2, 4, 3, 5, 2, 3]     // Ciudad D
]



function contarMinas (tablero) {
    let contador = 0
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === '*') {
                contador++
            }
        }
    }

    return contador
}

const tablero = [
    ["*", "-", "-", "*", "-"],
    ["-", "-", "*", "-", "-"],
    ["*", "-", "-", "-", "*"],
    ["-", "*", "-", "-", "-"],
    ["-", "-", "-", "*", "-"]
]


console.log(contarMinas(tablero))


function ventasTotalesMasAltas (ventas) {
    let ventasTotales = 0
    let productoConMasVentas = 0
    for (let i = 0; i < ventas.length; i++) {
        let totalProducto = 0
        for (let j = 0; j < ventas[i].length; j++) {
            totalProducto += ventas[i][j]
        }

        if (totalProducto > ventasTotales) {
            ventasTotales = totalProducto
            productoConMasVentas = i
        }
    }

    return `el producto con mas ventas es ${productoConMasVentas + 1} con ${ventasTotales}`
}


const ventas = [
    [1200, 1500, 1800, 2000],  // Producto A
    [900, 950, 1000, 1100],    // Producto B
    [2000, 1800, 2200, 2400]   // Producto C
]


console.log(ventasTotalesMasAltas(ventas))


function matrizTranspuesta (matriz) {
    const numFilas = matriz[0].length
    let transpuesta = []

    for (let i = 0; i < numFilas; i++) {
        transpuesta.push([])
    }

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            transpuesta[columna][fila] = matriz[fila][columna]
        }
    }

    return transpuesta
}
const matriz = [ 
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.log(matrizTranspuesta(matriz))



function masEstudio (horas) {
    let maxHoras = 0
    let numAlumno = 0
    for (let i = 0; i < horas.length; i++) {
        let totalHorasAlumno = 0
        for (let j = 0; j < horas[i].length; j++) {
            totalHorasAlumno += horas[i][j]
        }
        if (totalHorasAlumno > maxHoras) {
            maxHoras = totalHorasAlumno
            numAlumno = i
        }
    }

    return `El alumno que mas ha estudiado es el alumno n${numAlumno + 1} con ${maxHoras}h`
}

const horas = [
    [2, 3, 1, 4, 2],   // Estudiante 1
    [3, 2, 3, 2, 4],   // Estudiante 2
    [1, 1, 2, 1, 3]    // Estudiante 3
]

console.log(masEstudio(horas))


function encontrarCoordenadasNumMasGrande (numeros) {
    let filaNumero = 0
    let columnaNumero = 0
    let masGrande = numeros[0][0]
    for (let fila = 0; fila < numeros.length; fila++) {
        
        for (let columna = 0; columna < numeros[fila].length; columna++) {
          
            if (numeros[fila][columna] > masGrande) {
                masGrande = numeros[fila][columna]
                filaNumero = fila
                columnaNumero = columna
            }
            
        }
    }

    return `El numero mas grande se encuentra en la fila ${filaNumero + 1} y en la columna ${columnaNumero + 1}`
}

const numeros = [
    [12, 45, 23, 67],
    [89, 34, 56, 78],
    [90, 21, 43, 65],
    [87, 32, 54, 34]
]

console.log(encontrarCoordenadasNumMasGrande(numeros))


function calcularStockTotal (inv) {
    const nuevoArrTranspuesto = []
    const nuevoArr = []
    const numeroFilas = inv[0].length
    for (let i = 0; i < numeroFilas; i++) {
        nuevoArrTranspuesto.push([])
    }

    for (let i = 0; i < inv.length; i++) {
        for (let j = 0; j < inv[i].length; j++) {
            nuevoArrTranspuesto[j][i] = inv[i][j]
        }
    }

    for (let i = 0; i < nuevoArrTranspuesto.length; i++) {
        let acc = 0
        for (let j = 0; j < nuevoArrTranspuesto[i].length; j++) {
            acc += nuevoArrTranspuesto[i][j]
        }
        nuevoArr.push(acc)
    }

    return nuevoArr
}


const inventario = [
    [50, 30, 20, 40, 10],  // Almacén Madrid
    [25, 15, 35, 20, 30],  // Almacén Barcelona
    [40, 25, 15, 30, 20]   // Almacén Valencia
]
// Resultado: [115, 70, 70, 90, 60]


console.log(calcularStockTotal(inventario))


function diagonalMatrizCuadrada (matriz) {
    let contador = 0
    let arr = []
    for (let i = 0; i < matriz.length; i++) {
        arr.push(matriz[i][i])
    }

    return arr
}

const cuadrada = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]
// Diagonal: 1, 7, 13, 19, 25
console.log(diagonalMatrizCuadrada(cuadrada))


function sumaPositivos (nums) {
    let acumulador = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (nums[i][j] >= 0) {
                acumulador += nums[i][j]
            }
        }
    }

    return acumulador
}

const numeros2 = [
    [5, -3, 8, -12, 4],
    [-7, 10, -2, 15, -9],
    [3, -6, 11, -4, 7],
    [-10, 8, -1, 6, -5]
]

console.log(sumaPositivos(numeros2))


function determinarSobre100 (nums) {
    let menoresDe15 = 0
    let mayoresDe50 = 0
    let comprendidosEntre25y45 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 15) {
            menoresDe15++
        } 
        if (nums[i] > 50) {
            mayoresDe50++
        } 
        if (nums[i] > 25 && nums[i] < 45) {
            comprendidosEntre25y45++
        }
    }

    return {menoresDe15, mayoresDe50, comprendidosEntre25y45}
}

const numeros3 = [
    15, 82, 3, 91, 47, 68, 22, 99, 5, 73,
    38, 12, 85, 61, 29, 94, 50, 7, 76, 41,
    19, 88, 33, 56, 2, 71, 45, 98, 24, 67,
    11, 79, 52, 36, 89, 14, 63, 27, 95, 48,
    8, 74, 40, 18, 86, 31, 59, 4, 72, 44,
    20, 93, 55, 10, 78, 42, 17, 87, 34, 66,
    25, 96, 51, 13, 80, 46, 6, 75, 39, 16,
    84, 30, 60, 23, 92, 54, 9, 77, 43, 21,
    90, 35, 64, 28, 97, 49, 1, 70, 37, 83,
    26, 58, 11, 81, 53, 19, 69, 32, 100, 62
]

console.log(determinarSobre100(numeros3))