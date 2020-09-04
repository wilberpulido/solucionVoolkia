const seller_id = 179571326;

fetch(`https://api.mercadolibre.com/orders/search/pending?seller=${seller_id}&site_id=$MLA`)
    .then(res => res.json())
    .catch(error=> console.log(error))
    .then( response => response.map(item => {
        return console.log(`${item.id} del item, "${item.title}" del item, "${item.category_id}" donde esta publicado, "${item.name}" de la categoria.`)
    }));

    //Si la url consultada de la api es correcta, tiene que imprimir por consola todos los items que consiga del vendedor con el formato
    // --> " id " del ítem, " title " del item, " category_id " donde está publicado, " name " de la categoría. No se genera un archivo log
    //Con librerias de node como file system, podriamos generar y escribir un archivo con toda la data que nos regresa la request en ese formato.
    //Para ello tendria que importar la libreria fs = require('fs'); y usar el metodo fs.writeFile, y pasar por parametro el resultado
    //de la consulta en el formato elegido. Para hacer la consulta general, podria usar javascrip para hacer un minisitio web con un
    //label y un input, para escibir el user_id a solicitar, con un boton que genere un evento click para realizar la request
    //y pase como parametro el value del input a seller_id y luego a la url de la que pasa como parametro al fetch