    // Simulando el fetch desde un archivo o servidor local
    async function cargarGaleria() {
      try {
        // Si tienes el JSON en un archivo, usa: const res = await fetch('muebles.json');
        const res = await fetch('productos.json'); // <- cambia esto si es un fetch real
        const muebles = await res.json();

        const galeria = document.getElementById('galeria');

        muebles.forEach(mueble => {
          const item = document.createElement('div');
          item.className = 'item';

          // Selecciona portada (usa url_foto_portada2 si existe, sino la normal)
          const portada = mueble.url_foto_portada ? mueble.url_foto_portada : mueble.url_foto_portada2;

          item.innerHTML = `
            <img src="${portada}" alt="${mueble.nombre}">
            <div class="infocata">
              <h2>${mueble.nombre}</h2><br>
              <small>${mueble.categoria}</small><br>
              <span>${mueble.precio}</span>
            </div>
          `;

          // Puedes agregar eventos si deseas abrir un modal con más info
          item.addEventListener('click', () => {
                  window.location.href = "Product.html?id="+mueble.id;
          });

          galeria.appendChild(item);
        });
      } catch (error) {
        console.error('Error al cargar los muebles:', error);
      }
    }

    cargarGaleria();

           document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "index.html";
  });

      document.getElementById("carrito").addEventListener("click", function() {
    window.location.href = "carrito.html";
  });