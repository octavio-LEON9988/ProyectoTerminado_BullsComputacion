
//===================================ARR OBJETOS=====================================
const productos = [[{
        tipo: "Auricular",
        marca: "Redragon",
        modelo: "REDRAGON ZEUS",
        stock: "En stock",
        precio: 15565,
        img: "https://images.precialo.com/products/auriculares-gamer-redragon-h510-zeus-negro-y-rojo/d989f29f-877d-4362-9f3b-c974a79b5244.jpeg",
        alt: "Auriculares_Redragon ZEUS",
        id: 1
    },
    {
        tipo: "Mouse",
        marca: "Razer",
        modelo: "RAZER VIPER MINI",
        stock: "En stock",
        precio: 21345,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/388/187/products/razer-viper-mini-mayorista1-6fd2d3d5af5cb51ebb16639703390285-640-0.jpg",
        alt: "Mouse_ViperMini",
        id: 2
    },
    {
        tipo: "Monitor",
        marca: "Zowie",
        modelo: "ZOWIE XL2411P 144hz",
        stock: "Poco stock",
        precio: 124560,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1bJUhFglKlb1_6grbwebNb7JLMG6wUYFwA&usqp=CAU",
        alt: "Monitor_Zowie XL2411P",
        id: 3
    },
    {
        tipo: "Micro Procesador",
        marca: "AMD",
        modelo: "Ryzen 5 5600G",
        stock: "En stock",
        precio: 88475,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/297/812/products/sin-titulo111-67118c676632575c7316622269312792-1024-1024.png",
        alt: "Procesador_AMD Ryzen5 5600G",
        id: 4
    },
    {
        tipo: "Butaca",
        marca: "Corsair",
        modelo: "Corsair T1 RACE",
        stock: "Poco stock",
        precio: 191320,
        img: "https://www.qloud.ar/SITES/IMG/ddr-informatica-07-2021/1200x1200/CF-9010012-WW_1.jpg",
        alt: "Butaca_Corsair T1 RACE",
        id: 5
    }],[{
        tipo: "Mousepad",
        marca: "HyperX",
        modelo: "hyperX furyS",
        stock: "En stock",
        precio: 10500,
        img: "https://row.hyperx.com/cdn/shop/products/hyperx_fury_s_gaming_mouse_pad_speed_edition_cloth_m_3_folded.jpg?v=1662421090",
        id: 6
    },
    {
        tipo: "Teclado",
        marca: "Redragon",
        modelo: "Redragon Kumara K552",
        stock: "En stock",
        precio: 16220,
        img: "https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/k/5/k552rgb-1-sp-blue_ok.jpg",
        id: 7
    },
    {
        tipo: "Micrófono",
        marca: "Redragon",
        modelo: "Redragon Blazar GM300",
        stock: "Poco stock",
        precio: 35600,
        img: "https://www.qloud.ar/SITES/ryr/fotos/19674-0.jpg",
        id: 8
    },
    {
        tipo: "Gabinete",
        marca: "Corsair",
        modelo: "Corsair Spec-Delta",
        stock: "Poco stock",
        precio: 50000,
        img: "https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-10724940.jpg",
        id: 9
    },
    {
        tipo: "Mouse",
        marca: "Logitech",
        modelo: "Logitech Gpro Superlight",
        stock: "En stock",
        precio: 38450,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/278/708/products/mouse-logitech-g-pro-x-superlight-negro1-9ddc5ec74d3066024916535826357821-640-0.webp",
        id: 10
    }],[{
        tipo: "Pc",
        marca: "Intel",
        modelo: "INTEL i5-12400 32GB NVME-1TB RTX-3070",
        stock: "En stock",
        precio: 980300,
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://www.comeros.com.ar/wp-content/uploads/2022/08/pc-comeros-intel-g561.jpg",
        id: 11
    },
    {
        tipo: "Pc",
        marca: "AMD",
        modelo: "RYZEN 7-5700G 16GB SSD-240 HDD-1TB",
        stock: "En stock",
        precio: 379000,
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://www.comeros.com.ar/wp-content/uploads/2022/08/pc-comeros-amd-g561.jpg",
        id: 12
    },
    {
        tipo: "Pc",
        marca: "AMD",
        modelo: "RYZEN 3-3200G 8GB SSD-240",
        stock: "Sin stock",
        precio: 150500,
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://www.comeros.com.ar/wp-content/uploads/2022/08/pc-comeros-amd-g561.jpg",
        id: 13
    },
    {
        tipo: "Pc",
        marca: "Intel",
        modelo: "INTEL i3-10105 8GB SSD-240",
        stock: "En stock",
        precio: 162450,
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://www.comeros.com.ar/wp-content/uploads/2022/08/pc-comeros-intel-g561.jpg",
        id: 14
    },
    {
        tipo: "Pc",
        marca: "AMD",
        modelo: "RYZEN 9-5950X 64GB M.2-2TB RTX-4090ti",
        stock: "En stock",
        precio: 1691500,
        img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://www.comeros.com.ar/wp-content/uploads/2022/08/pc-comeros-amd-g561.jpg",
        id: 15
    }]
]
const carrito = []


//==============================P DESTACADOS=========================================
const boxProductosDestacados = document.querySelector("#boxProductosDestacados");


productos[0].forEach((product) =>{
    
    const createContent = document.createElement("div");

    createContent.className = "card ProductosDestacados";
    createContent.innerHTML = 
    `
    <img
        src="${product.img}"
        class="card-img-top" alt="${product.alt}">
    <div class="card-body ProductosDestacados">
        <h5 class="card-title"><span class="span_producto">${product.tipo}</span> <br> ${product.modelo}</h5>

        <hr class="hr_card">
        <p> <span class="En_stock">${product.stock}</span> <br> $${product.precio} </p>

        
    </div>
`
    const botonAgregar = document.createElement("a");

    botonAgregar.className = "btn btn-warning BotonComprar"
    botonAgregar.id = "BotonAgregar"
    botonAgregar.innerText = "Agregar"


    boxProductosDestacados.append(createContent);
    createContent.append(botonAgregar)


    botonAgregar.addEventListener("click", ()=>{
        carrito.push({
            tipo: product.tipo,
            marca: product.marca,
            modelo: product.modelo,
            stock: product.stock,
            precio: product.precio,
            img: product.img,
            alt: product.alt,
            id: product.id
        })
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
})


//=====================================MAS VENDIDOS==================================
const boxMasVendidos = document.querySelector("#boxMasVendidos");

productos[1].forEach((product) =>{
    
    const createContent = document.createElement("div");

    createContent.className = "card MasVendidos";
    createContent.innerHTML = 
    `
    <img
        src="${product.img}"
        class="card-img-top" alt="${product.alt}">
    <div class="card-body MasVendidos">
        <h5 class="card-title"><span class="span_producto">${product.tipo}</span> <br> ${product.modelo}</h5>

        <hr class="hr_card">
        <p> <span class="En_stock">${product.stock}</span> <br> $${product.precio} </p>

        
    </div>
`
    const botonAgregar = document.createElement("a");

    botonAgregar.className = "btn btn-warning BotonComprar"
    botonAgregar.id = "BotonAgregar"
    botonAgregar.innerText = "Agregar"


    boxMasVendidos.append(createContent);
    createContent.append(botonAgregar)


    botonAgregar.addEventListener("click", ()=>{
        carrito.push({
            tipo: product.tipo,
            marca: product.marca,
            modelo: product.modelo,
            stock: product.stock,
            precio: product.precio,
            img: product.img,
            alt: product.alt,
            id: product.id
        })
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
})

//=======================================PCS ARMADAS=======================================
const boxPcsArmadas = document.querySelector("#boxPcsArmadas");

productos[2].forEach((product) =>{
    
    const createContent = document.createElement("div");

    createContent.className = "card PcsArmadas";
    createContent.innerHTML = 
    `
    <img
        src="${product.img}"
        class="card-img-top" alt="${product.alt}">
    <div class="card-body PcsArmadas">
        <h5 class="card-title"><span class="span_producto">${product.tipo + " " + product.marca}</span> <br> ${product.modelo}</h5>

        <hr class="hr_card">
        <p> <span class="En_stock">${product.stock}</span> <br> $${product.precio} </p>

        
    </div>
`
    const botonAgregar = document.createElement("a");

    botonAgregar.className = "btn btn-warning BotonComprar"
    botonAgregar.id = "BotonAgregar"
    botonAgregar.innerText = "Agregar"


    boxPcsArmadas.append(createContent);
    createContent.append(botonAgregar)


    botonAgregar.addEventListener("click", ()=>{
        carrito.push({
            tipo: product.tipo,
            marca: product.marca,
            modelo: product.modelo,
            stock: product.stock,
            precio: product.precio,
            img: product.img,
            alt: product.alt,
            id: product.id
        })
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
})

//export default productos;