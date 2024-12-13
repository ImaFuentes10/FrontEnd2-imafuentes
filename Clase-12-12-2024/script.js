//Almaceno TODOS los elementos que contengan la clase 'categoria'
const categorias = document.querySelectorAll("categoria")
//Almaceno un elemento que contenga el id contenido
const contenido = document.querySelector("#contenido")

categorias.forEach(categoria => {
    categoria.addEventListener("click",async(e)=>{
        const nombreArchivo = e.currentTarget.getAttribute("data-seccion")

        try{
            const archivo = await fetch(`${nombreArchivo}.html`)
            if(!archivo.ok) throw new Error("Archivo no encontrado");

            const html = await archivo.text()
            contenido.innerHTML = html
        }catch(error){
            const mensajeError = "<h2>No se encontró información de esta categoría</h2>"
            contenido.innerHTML = mensajeError
        }
    }
    )
})