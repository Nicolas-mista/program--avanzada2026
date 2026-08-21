//1. Consumo de Datos desde una API

async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await response.json();
    console.log(usuarios); 
    return usuarios;       
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}


//2. Procesamiento de Datos de una API

async function imprimirNombresDeUsuarios() {
  const usuarios = await obtenerUsuarios();
  if (usuarios) {
    usuarios.forEach(usuario => {
      console.log(usuario.name);
    });
  }
}

//3. Autenticación Simulada

function autenticarUsuario(credenciales) {
  const usuarioPredefinido = {
    usuario: 'admin',
    contrasena: 'secreta123'
  };

  return credenciales.usuario === usuarioPredefinido.usuario && 
         credenciales.contrasena === usuarioPredefinido.contrasena;
}

//4. Transformación de Datos

function mapearUsuarios(usuarios) {
  return usuarios.map(usuario => ({
    nombre: usuario.name,
    email: usuario.email
  }));
}


//5. Validación de Formularios

function validarFormulario(formulario) {
  const { nombre, email, password } = formulario;
  
  
  return Boolean(
    nombre && nombre.trim() !== '' &&
    email && email.trim() !== '' &&
    password && password.trim() !== ''
  );
}


//6. Paginación de Datos

function obtenerPagina(datos, numeroPagina) {
  const elementosPorPagina = 5;
  const indiceInicio = (numeroPagina - 1) * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;
  
  return datos.slice(indiceInicio, indiceFin);
}


//7. Envío de Datos a una API

async function enviarDatos(data) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const respuestaAPI = await response.json();
    console.log('Respuesta de la API:', respuestaAPI);
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
}


//8. Búsqueda de Usuarios

function buscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find(usuario => usuario.email === email);
}


//9. Generación de Token de Autenticación

function generarToken(usuario) {
  // Convertimos el objeto usuario a string y luego lo codificamos en Base64
  const payload = JSON.stringify(usuario);
  return btoa(payload); 
}


//10. Actualización de Información del Usuario

function actualizarUsuario(usuario, cambios) {
  
  return { 
    ...usuario, 
    ...cambios 
  };
}