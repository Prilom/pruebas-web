/**
 * Esta clase se encargará de enviar formularios html a la Api y procesar una respuesta
 * 
 * --> apiUrl: Url de la API completa
 * --> data: El diccionario json que va a recibir la API
 * --> callback: La función que se va a encargar de realizar una tarea con los datos devueltos
 */

class ApiFormRequest {
    constructor(apiUrl, data, callback) {
      this.apiUrl = apiUrl;
      this.data = data;
      this.callback = callback;
        console.log(data)
    }
  
    async postData() {
      try {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.data),
        });
  
        const responseData = await response.json();
  
        if (this.callback) {
          this.callback(responseData);
        }
  
        return responseData;
      } catch (error) {
            console.error("Error en la petición:", error);
        throw error;
      }
    }
  }


/**
 * TODO: Comprobar que funciona al cargar la pagina-----------------------------------------------------------------------------------------------------
 * TODO: Obtener el id de sesion------------------------------------------------------------------------------------------------------------------------
 * TODO: Ver si es necesario almacenar alguna propiedad de clase con el id_sesion para manejar mas sencillamente las validaciones API-------------------
 * 
 * Esta clase se encargará de enviar peticiones a la API al cargar una pagina
 * 
 * --> apiUrl: Url de la API completa
 * --> sessionId: El id de sesion
 * --> callback: La función que se va a encargar de realizar una tarea con los datos devueltos
 */

class ApiRequestOnLoad {
    constructor(apiUrl, sessionId, callback) {
        this.apiUrl = apiUrl;
        this.sessionId = sessionId;
        this.callback = callback;

        this.initRequestOnLoad();
    }

    async initRequestOnLoad() {
        window.addEventListener("load", async () => {
        await this.getData();
        });
    }

    async getData() {
        try {
        const response = await fetch(this.apiUrl, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Session-Id": this.sessionId,
            },
        });

        const responseData = await response.json();

        if (this.callback) {
            this.callback(responseData);
        }

        return responseData;
        } catch (error) {
        console.error("Error en la petición:", error);
        throw error;
        }
    }
}



class ApiLoginRequest {
  constructor(apiUrl, data, callback) {
    this.apiUrl = apiUrl;
    this.data = data;
    this.callback = callback;
    console.log(data);
  }

  async postData() {
    try {
      // Convertir el objeto de datos a formato x-www-form-urlencoded
      const urlencodedData = new URLSearchParams();
      for (const [key, value] of Object.entries(this.data)) {
        urlencodedData.append(key, value);
      }
      console.log(urlencodedData);
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencodedData,
      });

      const responseData = await response.json();

      if (this.callback) {
        this.callback(responseData);
      }

      return responseData;
    } catch (error) {
      console.error("Error en la petición:", error);
      throw error;
    }
  }
}