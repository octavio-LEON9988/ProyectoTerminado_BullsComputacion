
const productosLocalStorage = JSON.parse(localStorage.getItem("carrito"));

const carritoCompras = document.querySelector("#carritoCompras");


productosLocalStorage.forEach((product) => {

    const createContent = document.createElement("div");

    createContent.className = "card ProductosDestacados";
    createContent.innerHTML =
        `
    <img
        src="${product.img}"
        class="card-img-top" alt="${product.alt}">
    <div class="card-body ProductosDestacados">
        <h5 class="card-title"><span class="span_producto">${product.tipo + " " + product.marca}</span> <br> ${product.modelo}</h5>

        <hr class="hr_card">
        <p> <span class="En_stock">${product.stock}</span> <br> $${product.precio} </p>

        
    </div>
`
    carritoCompras.append(createContent)

    const botonEliminar = document.createElement("a");

    botonEliminar.className = "btn btn-danger BotonComprar"
    botonEliminar.id = "BotonEliminar"
    botonEliminar.innerText = "Eliminar"
    createContent.append(botonEliminar);


    botonEliminar.addEventListener("click", () => {
        localStorage.removeItem("carrito")
        carritoCompras.innerHTML = ` `
        total = 0
        totalContent.innerHTML = `<h3 style="
    padding-top: 80px;
    color:#c5541b;
    font-family: 'Barlow', sans-serif;
    ">Total de la compra: $${total} </h3><a class="btn btn-success" id="botonComprar">Comprar</a>`



    })
})
let total = productosLocalStorage.reduce((product, element) => product + element.precio, 0);
const totalContent = document.querySelector("#boxCarrito");

totalContent.innerHTML = `<h3 style="
    padding-top: 80px;
    color:#c5541b;
    font-family: 'Barlow', sans-serif;
    ">Total de la compra: $${total} </h3><a class="btn btn-success" id="botonComprar">Comprar</a>`


const botonComprar = document.querySelector("#botonComprar");
botonComprar.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Su compra fue realizada con éxito',
        showConfirmButton: false,
        timer: 2000
    })
    carritoCompras.innerHTML = ` `
    total = 0
    totalContent.innerHTML = `<h3 style="
    padding-top: 80px;
    color:#c5541b;
    font-family: 'Barlow', sans-serif;
    ">Total de la compra: $${total} </h3><a class="btn btn-success" id="botonComprar">Comprar</a>`
})
