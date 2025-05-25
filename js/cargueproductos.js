// Paso 1: Leer el archivo JSON y guardarlo en el localStorage
const productosJSON = localStorage.getItem('productos');
console.log(productosJSON)


fetch('productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    // Guardar en localStorage
    if (productosJSON) {
}else{

    localStorage.setItem('productos', JSON.stringify(data));
}
    // Obtener el contenedor del carrusel
    const carrusel = document.getElementById('carrusel');

    // Limpiar por si acaso
    carrusel.innerHTML = '';
    var bandera = 0;
    // Recorrer cada producto y crear la tarjeta
    data.forEach(producto => {
        bandera +=1;
      // Crear elementos
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = producto.id;

      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url('${producto.url_foto_portada}')`;
      cardImg.style.backgroundSize = 'cover';
      cardImg.style.backgroundPosition = 'center';
      cardImg.style.height = '200px'; // ajusta el alto como desees

      const cuerpo = document.createElement('div');
      cuerpo.classList.add('cuerpo');

      const titulo = document.createElement('h3');
      titulo.textContent = producto.nombre;

      const categoria = document.createElement('h4');
      categoria.textContent = producto.categoria;

      const precio = document.createElement('p');
      precio.textContent = producto.precio;

      // Estructura
      cuerpo.appendChild(titulo);
      cuerpo.appendChild(categoria);
      cuerpo.appendChild(precio);

      card.appendChild(cardImg);
      card.appendChild(cuerpo);

      carrusel.appendChild(card);


    });
        // Obtener todas las cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function () {

      window.location.href = "Product.html?id="+this.id;
    
    
    });
  });








  })



  .catch(error => {
    console.error('Error al cargar o procesar el JSON:', error);
  });


  document.getElementById("sofacamaboton").addEventListener("click", function() {
    window.location.href = "Categorias.html?categoria=SofaCama";
  });
    document.getElementById("sofacamaLboton").addEventListener("click", function() {
    window.location.href = "Categorias.html?categoria=SofaCamaenL";
  });
    document.getElementById("Salamodularboton").addEventListener("click", function() {
    window.location.href = "Categorias.html?categoria=SalaModular";
  });

    document.getElementById("irACategorias").addEventListener("click", function () {
    document.getElementById("seccionCategorias").scrollIntoView({ behavior: "smooth" });
  });
    document.getElementById("catalogoboton").addEventListener("click", function() {
    window.location.href = "catalogo.html";
  });

    document.getElementById("carrito").addEventListener("click", function() {
    window.location.href = "carrito.html";
  });