import { createReadStream, createWriteStream } from "fs";
import { copyFile } from "fs/promises";
import path, { dirname } from "path";
import {createInterface} from "readline"
import { fileURLToPath } from "url";
import fs, { appendFile } from "node:fs/promises"
import { readFile, writeFile } from "node:fs/promises";
import { on } from "node:events";

//para archivos bastante grandes, > 100MB
async function leerLineaPorLinea () {
    //Obtenemos nombre del directorio en el que trabajamos
    const nombreArchivoActual = fileURLToPath(import.meta.url)

    //Creamos dirección del archivo sobre el que vamos a trabajar
    const __dirname = dirname(nombreArchivoActual)
    const ruta = path.join(__dirname, "..", "archivos", "agenda.json")

    //Creamos el stream de lectura
    const flujoArchivo = createReadStream(ruta)

    const rl = createInterface({
        input:flujoArchivo,
        crlfDelay:Infinity
    })


    let numeroLinea = 0
    //Recorremos el stream de manera secuencial
    for await (const line of rl) {
        numeroLinea++
        console.log(`Linea ${numeroLinea}: ${line}`)
    }
}



async function leerConStream() {
    const nombreArchivoActual = fileURLToPath(import.meta.url)

    const __dirname = dirname(nombreArchivoActual)

    const rutaArchivo = path.join(__dirname, "..", "archivos", "agenda.json")

    //Creamos flujo de lectura
    const flujoLectura = createReadStream(rutaArchivo, {encoding: "utf-8"})

    //Obtenemos parte por parte el contenido del flujo
    flujoLectura.on('data', (chunk) => {
        console.log(chunk)
    })


    flujoLectura.on('end', () => {
        console.log("Lectura completada")
    })

    flujoLectura.on('error', (err) => {
        console.error(err)
    })

}

async function escribirConStream () {
    //Creamos flujo de escritura
    const flujoEscritura = createWriteStream("archivo.txt", {encoding: "utf-8"})

    //Escribimos en cada linea
    for (let i = 0; i < 1000; i++) {
        flujoEscritura.write(`Linea: ${i} \n`)
    }
    //Terminamos el flujo
    flujoEscritura.end()

    flujoEscritura.on("finish", () => {
        console.log("Escritura terminada")
    })

    flujoEscritura.on("error", (err) => {
        console.error(err)
    })


}


async function copiarArchivo() {
    try {
        const nombreArchivoActual = fileURLToPath(import.meta.url)
        const __dirname = dirname(nombreArchivoActual)
        const rutaArchivoACopiar = path.join(__dirname, "..", "archivos", "agenda.json")

        const rutaArchivoCopiado = path.join(__dirname, "agenda.json")
        await copyFile(rutaArchivoACopiar, rutaArchivoCopiado)
    } catch (error) {
        console.error(error)
    }
}




async function escribirArchivoSecuencial (titulo, autor, editorial, añoEdicion, isbn, numeroDePaginas) {
    let archivo = []

    try {
        const contenido = await readFile("biblioteca.json", {encoding: "utf-8"})
        archivo = JSON.parse(contenido)
    } catch {
        await writeFile("biblioteca.json", JSON.stringify([]))
    }

    const campos = {
        titulo,
        autor,
        editorial,
        añoEdicion,
        isbn,
        numeroDePaginas
    }

    archivo.push(campos)

    await writeFile("biblioteca.json", JSON.stringify(archivo, null, 2))

    console.log("escritura secuencial terminada")
}
await escribirArchivoSecuencial("Fundamentos", "David", "Sant", 2000, "none", 400)
await escribirArchivoSecuencial("Fundament", "Davi", "San", 200, "non", 40)
await escribirArchivoSecuencial("Fundamentos", "David", "Sant", 2000, "none", 400)
await escribirArchivoSecuencial("Fundamentos", "David", "Sant", 2000, "none", 400)

function modificarArchivoSecuencial () {
    const flujoLectura = createReadStream("biblioteca.json", { encoding: "utf-8"})
    flujoLectura.on("data", (chunk) => {
        console.log(chunk)
    })

    flujoLectura.on("end", () => {
        console.log("Lectura cerrada")
    } )

    flujoLectura.on("error", (err) => {
        console.error(err)
    })


}

