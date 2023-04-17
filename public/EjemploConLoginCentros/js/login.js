////////////////// cargar fondo /////////////////////////
window.addEventListener("load", function() {
  var bgImage = document.getElementById("fondodos.webp");
  fondouno.src = "css/images/fondouno.webp";
});

/////////////////////////  Menú  ///////////////////////
$icon.addEventListener("click", () => $icon.classList.toggle("open"))

const getHTML = (options) => {
    let {url, success, error} = options;
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
          let html = xhr.responseText;
          success(html);
    } else {
        let message = xhr.statusText || "Ocurrió un error al cargar la dirección de la página";
        error (`Error ${xhr.status}: ${message}`)
    }
    })

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8")
    xhr.send();
}


$d.addEventListener("DOMContentLoaded", e => {
    /////////////////////////  HTML  ///////////////////////
    getHTML({
    url: "assets/centro.html",
    success:(html) => $main.innerHTML = html,
    error: (err) => $main.innerHTML = `<h1>${err}</h1>`
  })
})

$d.addEventListener("click", e => {
    if (e.target.matches("li a")){
        e.preventDefault()
        getHTML({
            url: e.target.href,
            success:(html) => $main.innerHTML = html,
            error: (err) => $main.innerHTML = `<h1>${err}</h1>`
        })
    }
})
// seleccionar el formulario de acceso
const formData = new FormData();
formData.append('username', 'usuario');
formData.append('password', 'contraseña');

fetch('https://brainwave-382317.ew.r.appspot.com/token', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// Seleccionar el formulario
const form = document.querySelector('#formdata');

// Agregar un evento para escuchar el envío del formulario
form.addEventListener('submit', (event) => {
  // Evitar el comportamiento predeterminado del formulario de enviar los datos a una página nueva
  event.preventDefault();
  

  // Obtener los valores de los campos de entrada
  const centro = document.querySelector('#centro').value;
  const cip = document.querySelector('#CIP').value;
  const cp = document.querySelector('#CP').value;
  const password = document.querySelector('#password').value;
  const opciones = document.querySelector('#opciones').value;

  // Validar los valores de los campos de entrada
  if (centro.trim() === '' || cip.trim() === '' || cp.trim() === '' || password.trim() === '' || opciones.trim() === '') {
    alert('Por favor, complete todos los campos.');
    return;
  } 

  // Crear un objeto con los valores de los campos de entrada
  const data = {
    desc_school,
    cif,
    phone,
    zip_code,
    password,
    country_id,
    city,
    type_id
  };

  // Convertir el objeto en formato JSON
  const jsonData = JSON.stringify(data);

  // Crear una instancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Configurar la solicitud para enviar los datos a la API
  xhr.open('POST', 'https://brainwave-382317.ew.r.appspot.com/register/');

  // Configurar las cabeceras de la solicitud
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Definir una función para manejar la respuesta de la API
  xhr.onload = function() {
    if (xhr.status === 201) {
      console.log(xhr.response);
      alert('Los datos se han enviado correctamente.');
      form.reset(); // aquí reseteo el formulario
      window.location.href = './successful.html'; // redirigir a la página de confirmación
    } else {
      console.error(xhr.statusText);
      alert('Ha ocurrido un error al enviar los datos.');
    }
  };

  // Definir una función para manejar los errores de la solicitud
  xhr.onerror = function() {
    console.error(xhr.statusText);
    alert('Ha ocurrido un error al enviar los datos.');
  };

  // Enviar los datos a la API
  xhr.send(jsonData);
});
