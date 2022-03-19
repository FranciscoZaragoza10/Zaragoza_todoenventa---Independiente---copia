let buscando = $(".buscando");
$(() => {
  $("#buscar").submit(function (e) {
    e.preventDefault();
    console.log(buscando);
    $("header").append("<h5>Usted quiere buscar " + buscar[0].value + "</h5>");
  });

  const productos = [
    {
      id: 1,
      nombre: "Jabon Cera",
      precio: 120,
      src: "imgs/index_productos_1.png",
    },
    {
      id: 2,
      nombre: "Playera Tev",
      precio: 110,
      src: "imgs/index_productos_playera.png",
    },
    {
      id: 3,
      nombre: "Pulsera Tev",
      precio: 220,
      src: "imgs/index_productos_pulsera.png",
    },
    {
      id: 4,
      nombre: "Bolsa Tev",
      precio: 119,
      src: "imgs/index_productos_bolsa.png",
    },
    {
      id: 5,
      nombre: "Sombrero Ltc",
      precio: 99,
      src: "imgs/index_productos_sombrero.png",
    },
  ];
  $("#pre-cart").append(
    `<div class="w-100 d-flex justify-content-center my-4">
      <button id="empty" class="btn-primary btn text-align-center mx-3" >Vaciar Carrito</button>
     
      <button id="total" class="btn-primary btn text-align-center mx-3" >Ver Total</button>
      <button id="pay" class="btn-primary btn text-align-center mx-3" >Pagar</button>

    </div>`
  );

  let cart = [];
  let container = document.getElementById("cart");
  $("#empty").on("click", function () {
    localStorage.clear();
    cart = [];
    container.innerHTML = "";
    showProducts();
    totalMountCart();
  });
  $("#total").on("click", function () {
    totalMountCart();
  });
  $(".erase-cart").on("click", function () {
    eraseCart();
  });
  $(".add-cart1").click(function (e) {
    e.preventDefault();
    cart.push(productos[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
    showProducts();
  });
  $(".add-cart2").click(function (e) {
    e.preventDefault();
    cart.push(productos[1]);
    localStorage.setItem("cart", JSON.stringify(cart));
    showProducts();
  });
  $(".add-cart3").click(function (e) {
    e.preventDefault();
    cart.push(productos[2]);
    localStorage.setItem("cart", JSON.stringify(cart));
    showProducts();
  });
  $(".add-cart4").click(function (e) {
    e.preventDefault();
    cart.push(productos[3]);
    localStorage.setItem("cart", JSON.stringify(cart));
    showProducts();
  });
  $(".add-cart5").click(function (e) {
    e.preventDefault();
    cart.push(productos[4]);
    localStorage.setItem("cart", JSON.stringify(cart));
    showProducts();
  });

  function totalMountCart() {
    const totalPrice = cart.reduce((total, item) => item.precio + total, 0);
    $(".total_cart").remove();
    $("#pre-cart").append(
      `<div  class="w-100 d-flex justify-content-center total_cart my-3" >
        <h2 id="total">El monto total de tu compra es $${totalPrice}</h2>
      </div>`
    );
    $(".total_cart").fadeOut(2000).fadeIn(2000);
  }
  $("#cart").append(
    `<button id="ajax" class="btn-primary btn text-align-center mx-3" >AJAX</button>`
  );
  $("#ajax").click(function () {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
  function eraseCart() {
    $(".carrito_prod").remove();
  }
  function showProducts() {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartStorage !== null) {
      let container = document.getElementById("cart");
      container.innerHTML = "";
      for (const prd of cartStorage) {
        $("#cart").append(
          `<div
          class="d-flex flex-wrap-column col-lg-6 col-md-7 col-7 shadow-lg align-items-center my-2 mx-5 carrito_prod"
        >
          <img
            class=" rounded img__carrito"
            src="${prd.src}"
            alt="bolsa"
          />
          <h3 class="text-primary fs-5 mx-2 my-0 text-center w-25">
          ${prd.nombre}
          </h3>
          <h4 class="fw-bold shadow-sm bg-white rounded mx-5">
            <i class="fas fa-shopping-bag text-primary"></i>  $${prd.precio}
          </h4>
          <button class="btn erase-cart">Quitar</button>
        </div>`
        );
      }
    }
  }
  console.log(cart);
});
