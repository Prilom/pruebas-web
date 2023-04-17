
function sendLoginRequest() {
////// obtener los valores de los campos de entrada//////
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

///// construir el objeto de datos a enviar /////
var data = {
    username: username,
    password: password
};

///// enviar la solicitud POST a la API/////
$.ajax({
    type: "POST",
    url: "https://brainwave-382317.ew.r.appspot.com/token",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (result) {
    alert('Los datos se han enviado correctamente.');
    form.reset(); ///// aquí reseteo el formulario
    window.location.href = './successful.html'; ///// redirige a la página de confirmación
    console.log(result);
    },
    error: function (xhr, status, error) {
    alert('Ha ocurrido un error al enviar los datos.'); ////mensaje de error
    console.log(error);
    }
});
}

function sendCreateRequest() {
//// obtener los valores de los campos de entrada/////
var desc_school = document.getElementById("desc_school").value;
var cif = document.getElementById("cif").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var zip_code = document.getElementById("zip_code").value;
var password = document.getElementById("password").value;
var country_id = document.getElementById("country_id").value;
var city = document.getElementById("city").value;
var type_id = document.getElementById("type_id").value;

///// construir el objeto de datos a enviar /////
var data = {
    desc_school: desc_school,
    cif: cif,
    phone: phone,
    email: email,
    zip_code: zip_code,
    password: password,
    country_id: country_id,
    city: city,
    type_id: type_id
};

///// enviar la solicitud POST a la API/////
$.ajax({
    type: "POST",
    url: "https://brainwave-382317.ew.r.appspot.com/register",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (result) {
    alert('Los datos se han enviado correctamente.');
    form.reset(); ///// aquí reseteo el formulario
    window.location.href = './successful.html'; ///// redirige a la página de confirmación
    console.log(result);
    },
    error: function (xhr, status, error) {
    alert('Ha ocurrido un error al enviar los datos.'); ////mensaje de error
    console.log(error);
    }
});
}

