class API {
    constructor() {
      this.baseUrl = 'http://localhost:8000'; // URL de la API
      this.user_id = null; // Variable que almacenará el id del usuario logueado
      this.fastAPIRequest = new FastAPIRequest(); // Instanciación de la clase FastAPIRequest
    }
  
    async login(user, pass) {
      // Método de login que recibe el usuario y contraseña
      const endpoint = '/token'; // Endpoint para validar el login
      const data = { username: user, password: pass }; // Datos que se envían al endpoint
      const response = await this.fastAPIRequest.sendPostRequest(endpoint, data); // Envío de datos al endpoint mediante la clase FastAPIRequest
      this.user_id = response.user_id; // Almacenamiento del id del usuario logueado
      return response; // Retorno de la respuesta
    }
  
    async storeClassInfo() {
      // Método para almacenar la información de las clases
      if (!this.user_id) {
        alert('Por favor, inicie sesión.'); // Si no hay usuario logueado, se muestra un mensaje de alerta
        return;
      }
      const curso = document.getElementById('curso').value;
      const clase = document.getElementById('clase').value;
      const numeroAlumnos = document.getElementById('numero-alumnos').value;
      const actualYear = new Date().getFullYear();
      const claveClase = {};
      claveClase[clase] = [];
      for (let i = 1; i <= numeroAlumnos; i++) {
        claveClase[clase].push(`${actualYear}${curso}${clase}${i.toString().padStart(2, '0')}`);
      }
      const informacion = {};
      informacion[curso] = claveClase;
      const endpoint = `insertar-informacion/${this.user_id}`; // Endpoint para almacenar la información de las clases
      const response = await this.fastAPIRequest.sendPostRequest(endpoint, informacion); // Envío de datos al endpoint mediante la clase FastAPIRequest
      alert('La información ha sido almacenada correctamente.'); // Si todo va bien, se muestra un mensaje de alerta
    }
  }
  
  class FastAPIRequest {
    constructor() {
      this.baseUrl = 'http://localhost:8000'; // URL de la API
    }
  
    async sendPostRequest(endpoint, data) {
      // Método que envía un JSON a la API y recibe la respuesta
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`Error al enviar la solicitud: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    }
  }
  
  async function login() {
    // Función que se ejecuta al pulsar el botón de login
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const api = new API(); // Instanciación de la clase API
    const response = await api.login(user, pass); // Llamada al método login
    if (response.user_id) {
      await api.storeClassInfo(); // Si el login ha sido exitoso, se llama al método para almacenar la información de las clases
    } else {
      alert('Usuario o contraseña incorrectos.'); // Si el login falla, se muestra un mensaje de alerta
    }
}


