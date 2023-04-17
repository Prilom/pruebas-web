// Esta función genera el formulario dinámico en base al número de cursos seleccionado

function generarFormulario() {
    const cursos = document.getElementById('numero-cursos').value;
    const form = document.getElementById('formulario');
    form.innerHTML = '';
    
    // Se itera por cada curso para crear los elementos correspondientes
    for (let i = 1; i <= cursos; i++) {
      const cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');
      cursoDiv.innerHTML = `Curso ${i}: Numero de aulas`;
  
      const aulasInput = document.createElement('select');
      aulasInput.name = `curso-${i}-aulas`;

      // Se agregan las opciones para el número de aulas
      for (let j = 1; j <= 8; j++) {
        const option = document.createElement('option');
        option.value = j;
        option.text = `${j} Aulas`;
        aulasInput.appendChild(option);
      }
  
      cursoDiv.appendChild(aulasInput);
      form.appendChild(cursoDiv);
      
      // Se agrega un listener para el cambio del número de aulas
      aulasInput.addEventListener('change', function() {
        const aulas = parseInt(this.value);
        const aulasDiv = document.createElement('div');
        aulasDiv.classList.add('aulas');

        // Se itera por cada aula para crear los elementos correspondientes
        for (let k = 1; k <= aulas; k++) {
          const aulaDiv = document.createElement('div');
          aulaDiv.classList.add('aula');
          aulaDiv.innerHTML = `Aula ${k}:`;
  
          const claseInput = document.createElement('input');
          claseInput.type = 'text';
          claseInput.name = `curso-${i}-aula-${k}-clase`;
          claseInput.placeholder = `Clase (Ej: A, B, C)`;
  
          const alumnosInput = document.createElement('input');
          alumnosInput.type = 'number';
          alumnosInput.name = `curso-${i}-aula-${k}-alumnos`;
          alumnosInput.placeholder = `Número de alumnos`;
  
          aulaDiv.appendChild(claseInput);
          aulaDiv.appendChild(alumnosInput);
          aulasDiv.appendChild(aulaDiv);
        }
        
        // Se comprueba si ya existe un elemento aulas para el curso actual (sustituir en lugar de añadir)
        const existingAulasDiv = cursoDiv.querySelector('.aulas');
        if (existingAulasDiv) {
          existingAulasDiv.replaceWith(aulasDiv);
        } else {
          cursoDiv.appendChild(aulasDiv);
        }
      });
    }
  }


// Esta función almacena la información del formulario en un objeto json (diccionario de python)

function almacenarInformacion() {
const cursos = document.getElementById('numero-cursos').value;
const info = {};

// Se itera por cada aula del curso actual para obtener su información
for (let i = 1; i <= cursos; i++) {
    const cursoInfo = {};
    const aulas = document.getElementsByName(`curso-${i}-aulas`)[0].value;

    for (let j = 1; j <= aulas; j++) {
    const clase = document.getElementsByName(`curso-${i}-aula-${j}-clase`)[0].value;
    const alumnos = document.getElementsByName(`curso-${i}-aula-${j}-alumnos`)[0].value;
    cursoInfo[clase] = [];
    
    // Se itera por cada alumno de la clase actual para generar su ID
    for (let k = 1; k <= alumnos; k++) {
        const alumno = `${new Date().getFullYear()}${i}${clase}${k.toString().padStart(2, '0')}`;
        cursoInfo[clase].push(alumno);
    }
    }

    info[i] = cursoInfo;
}

console.log(info); // Ahora lo imprimimos en consola, pero deberia ser un return que se le pasa a la Api junto con el id de centro
}
