import fs from "node:fs"
import path from "node:path"
import { personas } from "./DIRECTORIO.js"
import { json } from "node:stream/consumers"
function crearArchivo(nombre, edad, profesion){
    const rutaArchivo = "agenda.json"

    if (!fs.existsSync(rutaArchivo)) {
        fs.writeFileSync(rutaArchivo, JSON.stringify([]))
        console.log("Archivo creado")
    }
    const archivo = fs.readFileSync(rutaArchivo, "utf-8")
    const archivoParseado = JSON.parse(archivo)
    
    const existe = archivoParseado.some(val => 
        val.nombre === nombre && val.edad === edad && val.profesion === profesion
    )
    const usuarioExistente = archivoParseado.filter(user => 
        user.nombre === nombre && user.edad === edad && user.profesion === profesion
    )
    
    if (existe) {
        usuarioExistente.forEach(user => {
            console.log(`El usuario ${user.nombre} con profesión ${user.profesion} y edad ${user.edad} ya existe`)
        })
        return
    }

    const persona = {
        nombre,
        edad,
        profesion,
    }
    archivoParseado.push(persona)
    fs.writeFileSync(rutaArchivo, JSON.stringify(archivoParseado, null, 2))

}



function leerArchivo(rutaArchivo) {
    if (!fs.existsSync(rutaArchivo)) {
        throw new Error("El archivo aún no existe")
    }

    const archivo = fs.readFileSync(rutaArchivo, {encoding: "utf-8"})

    const archivoParseado = JSON.parse(file)

    archivoParseado.forEach(user => {
        console.log(user)
    })
}


function copiarArchivo(nombreArchivo) {
    if (!fs.existsSync(nombreArchivo)) {
        throw new Error("El archivo aún no existe")
    }
    const nuevoNombreArchivo = "newAgenda.json"

    if (fs.existsSync(nuevoNombreArchivo)) {
        throw new Error("El archivo ya existe")
    }

    const base = process.cwd()
    const rutaArchivo = path.join(base, nombreArchivo)


    fs.copyFileSync(rutaArchivo, nuevoNombreArchivo)
    console.log("Archivo copiado correctamente")

}


function busquedaPorLlave(llave) {
    if (typeof llave !== 'string') {
        throw new Error("No puedes introducir un valor numérico como clave")
    }
    const usuario = personas.find(persona => persona.dni === llave)
    if (usuario.length !== 0) {
        console.log("¡Usuario encontrado!", user)
        return
    }

    console.log("El usuario no existe")
    return
}





function crearArchivoDeStock(numeroCodigo, nivelMinimo, nivelActual, proveedor, precio){
    const nombreArchivo = "stock.json"

    if (!fs.existsSync(nombreArchivo)) {
        console.log("El archivo no existe")
        fs.writeFileSync(nombreArchivo, JSON.stringify([]))
    }

    

    const archivoParseado = JSON.parse(fs.readFileSync(nombreArchivo, {encoding: "utf-8"}))
    console.log(archivoParseado)
    const existeElRegistro = archivoParseado.find(reg => reg.numeroCodigo === numeroCodigo && reg.nivelMinimo === nivelMinimo && reg.nivelActual === nivelActual && reg.proveedor === proveedor && reg.precio === precio)

    if (existeElRegistro) {
        console.log("Este artículo ya está añadido")
    }

    const producto = {
        numeroCodigo,
        nivelMinimo,
        nivelActual,
        proveedor,
        precio
    }


    archivoParseado.push(producto)

    fs.writeFileSync(nombreArchivo, JSON.stringify(archivoParseado, null, 2))

    console.log("archivo de stock creado correctamente")
}



function leerStock(nombreArchivo){

    if (!fs.existsSync(nombreArchivo)) {
        throw new Error("El archivo no existe")
    }

    const archivo = fs.readFileSync(nombreArchivo, {encoding: "utf-8"})

    const archivoParseado = JSON.parse(archivo)

    return archivoParseado
} 


function detectarBajoMinimo(nombreArchivo) {
    const archivoParseado = leerStock(nombreArchivo)
    const productosDebajoDelMinimo = archivoParseado.filter(prod => prod.nivelMinimo > prod.nivelActual)
    productosDebajoDelMinimo.forEach(prod => {
        console.log(`Los productos debajo del mínimo son:  ${prod.proveedor}, ${prod.precio}, NUM_CÓDIGO=${prod.numeroCodigo}`)
    })
}


function generarPedido(numeroCodigo) {
    if (!numeroCodigo) {
        throw new Error("Especifica el código del producto que deseas comprar")
    }
    if (typeof numeroCodigo !== 'number') {
        throw new Error("El código debe ser un valor numérico")
    }
    const base = process.cwd()
    const nombreArchivo = "stock.json"
    const filePath = path.join(base, nombreArchivo)

    const archivo = fs.readFileSync(filePath, {encoding:"utf-8"})
    const archivoParseado = JSON.parse(archivo)
    let prod = archivoParseado.find(p => p.numeroCodigo === numeroCodigo)
    
    if (prod) {
        const nuevoArchivo = [...archivoParseado]
        console.log(nuevoArchivo)
        prod.nivelActual++

        nuevoArchivo.push(prod)
        fs.writeFileSync(filePath, JSON.stringify(nuevoArchivo, null, 2))
        console.log("Compra realizada correctamente", prod)
    } else {
        console.log("No existe el producto, no se pudo realizar la compra")
        return
    }
}



function reporteFinal(nombreArchivo, numeroCodigo) {
    const productos = leerStock(nombreArchivo)
    console.log(`Los productos disponibles son ${JSON.stringify(productos, null, 2)}`)

    detectarBajoMinimo(nombreArchivo)

    generarPedido(numeroCodigo)
}


reporteFinal("stock.json", 102)
    





