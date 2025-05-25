

const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria'); // 'SofaCama'
var categoriLabel = '';


  // Verificar si es "SofaCama" y modificar contenido
  if (categoria === "SofaCama") {
    document.getElementById("Titulocategoria").innerText = "Sofá Cama";
    document.getElementById("descripcionCat").innerText = "Nuestro diseño de sofá cama es la combinación perfecta de estilo, comodidad y practicidad, Ideal para optimizar espacio sin renunciar al diseño.";
    document.title = "Sofá Cama";
      // Cambiar imagen de fondo del banner
    const banner = document.querySelector(".bannerCategoria");
    banner.style.backgroundImage = "url('./img/BannerSofaCama.png')";
  categoriLabel = 'Sofa Camas';
  }

  if (categoria === "SofaCamaenL") {
    document.getElementById("Titulocategoria").innerText = "Sofá Cama en L";
    document.getElementById("descripcionCat").innerText = "De día, un oasis de suavidad y diseño moderno que invita a relajarse y compartir momentos inolvidables. Sus líneas limpias y su tapizado de ensueño se adaptan a cualquier espacio, aportando un toque de sofisticación sin igual.seño.";
      // Cambiar imagen de fondo del banner
       document.title = "Sofá Cama en L";
    const banner = document.querySelector(".bannerCategoria");
    banner.style.backgroundImage = "url('./img/BannerSofaCamal.png')";

    categoriLabel = 'Sofa Camas en L';
  }

    if (categoria === "SalaModular") {
       document.title = "Sala Modular";
    document.getElementById("Titulocategoria").innerText = "Sala modular";
    document.getElementById("descripcionCat").innerText = "Descubre nuestra increíble sala modular! Más que un simple sofá, es un universo de posibilidades que se ajusta a tu estilo de vida y a cada ocasión.";
     const banner = document.querySelector(".bannerCategoria");
    banner.style.backgroundImage = "url('./img/BannerSala.png')";
    categoriLabel = 'Sala Modular';
  }


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


      if(producto.categoria == categoriLabel){
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


      }
     
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









      document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "index.html";
  });


    document.getElementById("carrito").addEventListener("click", function() {
    window.location.href = "carrito.html";
  });