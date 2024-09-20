let listaNombresGastos = [];
let listaValorGastos = [];
let listaDescripcionGastos = [];

function clickBoton() {
  let nombreGasto = document.getElementById("nombreGasto").value;
  let valorGasto = document.getElementById("valorGasto").value;
  let descripcionGasto = document.getElementById("descripcionGasto").value;

  console.log(valorGasto);
  console.log(nombreGasto);

  
  valorGasto = Number(valorGasto);

//alerta de gastos superiores a 150
  if(valorGasto > 150){
    alert(`Cuidado el gasto ${nombreGasto} supera los 150 USD`)
  }

  listaNombresGastos.push(nombreGasto);
  listaValorGastos.push(valorGasto);
  listaDescripcionGastos.push(descripcionGasto);

  console.log(listaValorGastos);
  //alert("Click del usuario");
  actualizarListaGastos();
}

function actualizarListaGastos(){
  const listaElementos = document.getElementById('listaDeGastos');
  const totalElementos = document.getElementById('totalGastos');
  let htmlLista = '';
  let totalGastos = 0;
  listaNombresGastos.forEach((elemento, posicion) => {
    const descripcionGasto = listaDescripcionGastos[posicion];
    const valorGasto = Number(listaValorGastos[posicion]);

    htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} <br>
    <em> Descripción:</em> ${descripcionGasto}<br>
    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
    <button onclick="modificarGasto(${posicion});">Modificar</button>
    </li>`;
    //en onclick se hace un argumento

    //calculamos el total de gastos 
    totalGastos += Number(valorGasto);
  });
  listaElementos.innerHTML = htmlLista;
  totalElementos.innerHTML = totalGastos.toFixed(2);
  limpiar();
}

function limpiar(){
  document.getElementById("nombreGasto").value = '';
  document.getElementById("valorGasto").value = '';
  document.getElementById("descripcionGasto").value
}

function eliminarGasto(posicion){
  listaNombresGastos.splice(posicion,1);
  listaValorGastos.splice(posicion,1);
  listaDescripcionGastos.splice(posicion,1);
  actualizarListaGastos();
}

//funcion de modificacion de elementos

function modificarGasto(posicion){
  let nombreGastoModificado = listaNombresGastos[posicion];
  let valorGastoModificado = listaValorGastos[posicion];
  let descripcionGastoModificado = listaDescripcionGastos[posicion];

  document.getElementById("nombreGasto").value = nombreGastoModificado;
  document.getElementById("valorGasto").value = valorGastoModificado;
  document.getElementById("descripcionGasto").value = descripcionGastoModificado;

  let boton = document.getElementById("botonFormulario");

  boton.onclick = function() {
    let nuevoNombre = document.getElementById("nombreGasto").value;
    let nuevoValor = document.getElementById("valorGasto").value;
    let nuevaDescripcion = document.getElementById("descripcionGasto").value;

    listaNombresGastos[posicion] = nuevoNombre;
    listaValorGastos [posicion] = nuevoValor;
    listaDescripcionGastos[posicion] = nuevaDescripcion;

    actualizarListaGastos();

    boton.onclick = clickBoton;
  };
}
