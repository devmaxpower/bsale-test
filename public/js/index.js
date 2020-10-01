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
    <div class="product-card">
        <img src="${image}" alt="${producto.name}">
        <div class="card-content">
          <p class="product-category">${producto.name_category} </p>
          <h2 class="product-title">${producto.name}</h2>
          <p class="product-price">$${producto.price}</p>
          ${descuento}
          <a class="btn">Agregar</a>
        </div>
    </div>`);
}
//template categorias
function categoryTemplate(category)
{
  return `
    <li data-category="${category}">${category.replace("_", "")}</li>
  `;
}
async function load()
{
  async function setData(){
    document.querySelector("#sidebar ul").innerHTML = "";
    document.querySelector("#content").innerHTML = "";;
  }
  async function getProduct(url)
  {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }
  const productList = await getProduct(`${window.location.href}api`);

  await setData();
  let filtros = [];
  //Llenar grilla con productos
  productList.forEach(
      (product) => {
        const HTMLString = productTemplate(product);
        const content = document.querySelector("#content");
        content.innerHTML += HTMLString;
        let category = product.name_category.replace(" ", "_")
        if( filtros.indexOf(category) === -1) 
        { 
          filtros.push(category)
        }
      }
  );
  //Llenar filtros
  filtros.forEach(
    (category)=>{
      const HTMLString = categoryTemplate(category);
      const content = document.querySelector("#sidebar ul");
      content.innerHTML += HTMLString;
    }
  )
  console.log(filtros)
  //console.log(productList);
}
load()