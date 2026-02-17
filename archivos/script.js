import fs from "node:fs"

function crearArchivo(nombre, edad, profesion){
    const filePath = "agenda.json"

    if (!fs.existsSync(filePath)) {
        throw new Error("El archivo aún no fue creado")
    }
    const archivo = fs.readFileSync(filePath, "utf-8")
    const archivoParseado = JSON.parse(archivo)
    
    const existe = archivoParseado.some(val => 
        val.nombre === nombre && val.edad === edad && val.profesion === profesion
    )
    
    if (existe) {
        console.log("Este registro ya existe")
        return
    }

    const persona = {
        nombre,
        edad,
        profesion,
    }
    archivoParseado.push(persona)
    fs.writeFileSync(filePath, JSON.stringify(archivoParseado, null, 2))

}

crearArchivo("raul", 24, "backend")



