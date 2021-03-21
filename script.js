
let carrito = [];
if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  document.getElementById("contador").innerHTML = carrito.length;
}



$(async function(){

let remeras= await traerDatos();

async function traerDatos(){
  const response=await fetch("remeras.json");
const json=await response.json();
return json;
}

/*Mostrar*/
let options=`<div class="container">
<div class="row home nav_selection ">
  <div class="col-4">
</div>
  <div class="col-4 ">
  </div>
  <div class="col-4">
    </select>
  </div>
</div>
</div>`
let auxIndex=``;
  for (let i = 0; i <remeras.length; i++) {
        auxIndex+= `
        <div class="col-sm-3 card-margin"> 
        <div class="card">
        <img src=${remeras[i].imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${remeras[i].nombre}</h5>
          <p class="card-text">$${remeras[i].precio}</p>
        </div>
        <div class="card-footer">
        <div class="text-center">
      <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
      <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
        </div>
      </div>
      </div>`
      }

      document.getElementById("mostrarProductos").innerHTML = auxIndex;
      document.getElementById("mostrarOption").innerHTML = options;
    

});



/*AGREGAR PRODUCTOS AL CARRITO Y ACTUALIZAR EL CONTADOR*/
function agregarAlCarrito(nombreProducto) {
  carrito.push(nombreProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("contador").innerHTML = carrito.length; 
}

/*FUNCION PARA ENVIAR DATOS AL STORAGE DE DETALLE*/

function detallesProducto(parametro){
  location.href = "detalle.html";
  localStorage.setItem("producto", JSON.stringify(parametro));
}
 

/*ORDENAR remeras*/
function ordenar() {
  var x = document.getElementById("option-menu").value;
  if(x=="Mayor"){
    remeras=remeras.sort((a,b)=>b.precio-a.precio);
    let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
      }
    document.getElementById("mostrarProductos").innerHTML = auxIndex ;
  }else if(x=="Menor"){
    remeras=remeras.sort((a,b)=>a.precio-b.precio);
    let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
      }
    document.getElementById("mostrarProductos").innerHTML = auxIndex ;
  }
  else if(x=="Fecha"){
    remeras=remeras.sort((a,b)=>b.fecha-a.fecha);
    let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
      }
    document.getElementById("mostrarProductos").innerHTML = auxIndex ;
  }
}

/*JQUERY ANUNCIANTES*/
$('#mostrar').click(function(){
	$("#carrusel").show();
});
$('#ocultar').click(function(){
	$('#carrusel').hide();
});
