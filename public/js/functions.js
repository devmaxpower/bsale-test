'use strict';
//mostrar modal
function showModal(){
  let modal = document.querySelector('.modal');
  let overlay = document.createElement("div");

  modal.classList.add("modal-in");
  overlay.setAttribute("class", "modal-overlay");
  modal.parentNode.insertBefore(overlay, modal); 
}
//ocultar modal
function hideModal(){
  let modal = document.querySelector('.modal');
  let overlay = document.querySelector(".modal-overlay");
  modal.classList.remove("modal-in");
  overlay.remove(); 
}
//template del producto
function productTemplate(producto)
{
  let image = "",
      descuento = "";
  //Verificar existencia de la imagen del producto
  if(!producto.url_image){
    image = "img/default.png";
  }else{
    image = producto.url_image;
  }
  //Verificar descuento
  if(producto.discount=="0"){
    descuento="";
  }else{
    descuento = '<p class="product-discount">'+producto.discount+'% dcto</p>'; 
  }
  return  (`
    <div class="product-card ${producto.name_category.replace(" ", "_")}">
        <img src="${image}" alt="${producto.name}">
        <div class="card-content">
          <p class="product-category">${producto.name_category} </p>
          <h2 class="product-title">${producto.name}</h2>
          ${descuento}
          <div class="add-to-cart">
            <p class="product-price">$${producto.price}</p>
            <a class="btn">Agregar</a>
          </div>
        </div>
    </div>`);
}
//template categorias
function categoryTemplate(category)
{
  return `
    <li class="filtro" data-category="${category}">${category.replace("_", " ")}</li>
  `;
}