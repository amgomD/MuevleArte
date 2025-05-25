// Suponiendo que los datos están guardados bajo la clave 'productos'
const productosJSON = localStorage.getItem('productos');


  let dtotal = document.getElementById('total')

  let dsubtotal = document.getElementById('subtotal')

let total = 0;
if (productosJSON) {
  const data = JSON.parse(productosJSON);

  const variantesDisponibles = data.flatMap(producto =>
    producto.variantes
      .filter(vari => vari.cantidad > 0)
      .map(vari => ({
        ...vari,
        nombreProducto: producto.nombre,
        categoria: producto.categoria,
        precio: producto.precio
      }))
  );

  console.log("Variantes disponibles:", variantesDisponibles);

  mostrarVariantes(variantesDisponibles);
} else {
  console.warn("No se encontraron productos en localStorage.");
}

function mostrarVariantes(variantes) {
  const contenedor = document.getElementById("Cartitems");

  if (variantes.length === 0) {
    contenedor.innerHTML = "<p>Ups Carrito vacio.</p>";
    return;
  }

  variantes.forEach(vari => {
let preciostr = vari.precio;
preciostr = preciostr.replace('$','');
preciostr = preciostr.replace('.','');
let cantnum = Number(vari.cantidad); 
let prenum = Number(preciostr); 
total += cantnum*prenum;

dtotal.innerHTML = '$'+total;
dsubtotal.innerHTML = '$'+total;

    const card = document.createElement("div");
    card.className = "cart-item";
    card.innerHTML = `

         <button class="remove-btn">&times;</button>
        <img id="item-foto" src="${vari.url_imagen}" alt="Product 1">
        <div class="item-info">
          <h1>${vari.nombreProducto}</h1>
         <div id="precio" class="item-price">${vari.precio}</div>
          <div class="qty-selector">
            Ctd:
            <input class="InputBuscar" readonly type="number" value="${vari.cantidad}" min="1">
          </div>
        </div>
    `;
    contenedor.appendChild(card);
  });
}

           document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "index.html";
  });

      document.getElementById("carrito").addEventListener("click", function() {
    window.location.href = "carrito.html";
  });

  const boton = document.getElementById('pago')

  boton.addEventListener("click", function() {
    
fetch('productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {

    localStorage.setItem('productos', JSON.stringify(data));
      window.location.href = "index.html";

  })



  .catch(error => {
    console.error('Error al cargar o procesar el JSON:', error);
  });
  });
