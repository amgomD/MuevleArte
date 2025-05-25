  function obtenerParametroID() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
  }


  // Obtener los elementos
  const restarBtn = document.getElementById('restar');
  const sumarBtn = document.getElementById('sumar');
  const totalElem = document.getElementById('total');

  let ladoder = document.getElementById('ladoDer');
  let ladoizq = document.getElementById('ladoIzq');


  const idProducto = obtenerParametroID();

  fetch('./productos.json')
    .then(response => response.json())
    .then(productos => {
      const producto = productos.find(p => p.id === idProducto);

      if (producto) {
        // Mostrar nombre, precio y descripción
        var nombrestr = producto.nombre;
        document.getElementById("nombre").textContent = nombrestr ;
        document.getElementById("nombre1").textContent = nombrestr.substring(0, 8);;
        document.getElementById("precioPRODUCT").textContent = producto.precio;
        console.log(producto.precio)
        document.getElementById("descripcionArt").textContent = producto.descripcion;
             document.title = producto.nombre;
          ladoder.style.backgroundImage = "url("+producto.url_foto_portada+")";
         
          if(producto.url_foto_portada2 ===""){
        ladoizq.style.display = 'none';
          }else{
      ladoizq.style.backgroundImage = "url("+producto.url_foto_portada2+")";
       
          }
         
     // Mostrar colores
        const contenedorColores = document.getElementById("colores");
        contenedorColores.innerHTML = "";

        producto.variantes.forEach(vari => {
          const div = document.createElement("div");
          div.className = "colorSelect";
          div.style.backgroundColor = vari.color;
          div.setAttribute("data-id", vari.id);
          div.setAttribute("data-img", vari.url_imagen);


 

         document.getElementById("productBig").src = vari.url_imagen;
          document.getElementById("productBig").setAttribute("data-id", vari.id);
          div.title = `Color: ${vari.color}`;

          
  // Agregar el evento click para cambiar la imagen
  div.addEventListener("click", function () {
    const nuevaImg = this.getAttribute("data-img");
      totalElem.innerText = '0';
    document.getElementById("productBig").src = nuevaImg;
     document.getElementById("productBig").setAttribute("data-id", this.getAttribute("data-id"));
  });

          contenedorColores.appendChild(div);





        });
      } else {
        console.error("Producto no encontrado con id:", idProducto);
      }
    })
    .catch(error => console.error("Error cargando el JSON:", error));



  // Convertir el contenido inicial en número
  let total = parseInt(totalElem.innerText);

  // Función para actualizar el DOM
  function actualizarTotal() {
    const productos = JSON.parse(localStorage.getItem("productos"));
  const idProducto = obtenerParametroID();
    totalElem.innerText = total;

        const wid =    document.getElementById("productBig").getAttribute("data-id");
    console.log(wid);

const producto = productos.find(p => p.id === idProducto);
    console.log( producto.variantes);
if (producto) {
  // Paso 3: Buscar la variante específica y actualizar la cantidad
  const variante = producto.variantes.find(v => v.id == wid);
   console.log(variante);
  if (variante) {
    variante.cantidad = total;

    // Paso 4: Guardar los cambios en localStorage
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log("Cantidad actualizada con éxito.");
  } else {
    console.error("Variante no encontrada.");
  }
} else {
  console.error("Producto no encontrado.");
}


  }

  // Evento para restar
  restarBtn.addEventListener('click', function () {
    if (total > 0) {
      total--;
      actualizarTotal();
    }
  });

  // Evento para sumar
  sumarBtn.addEventListener('click', function () {
    total++;
    actualizarTotal();
  });


        document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "index.html";
  });

      document.getElementById("carrito").addEventListener("click", function() {
    window.location.href = "carrito.html";
  });