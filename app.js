const submit_btn = document.getElementById("submit_btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const logIn_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");
// console.log(submit_btn);

const cart = [
  {
    id: 1,
    name: "laptop",
    image: "images/lapi.png",
    stars: 5,
    about:
      "Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery.",
    price: 544.6,
  },
  {
    id: 2,
    name: "Speakers",
    image: "images/speakers.png",
    stars: 5,
    about:
      "High-quality wireless headphones with over-ear design 20 hours of battery life, and a sleek black color.",
    price: 544.6,
  },
  {
    id: 3,

    name: "Television",
    image: "images/tv.png",
    stars: 5,
    about:
      "High-quality wireless headphones with over-ear design 20 hours of battery life, and a sleek black color.",
    price: 544.6,
  },
  {
    id: 4,

    name: "Watches",
    image: "images/watch.png",
    stars: 5,
    about:
      "High-Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery.nd a sleek black color.",
    price: 986.45,
  },
  {
    id: 5,
    name: "Mobile",
    image: "images/iphone.png",
    stars: 5,
    about:
      "Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery..",
    price: 986.45,
  },
  {
    id: 6,
    name: "HeadPhone",
    image: "images/headphone.png",
    stars: 5,
    about:
      "High-quality wireless headphones with over-ear design 20 hours of battery life, and a sleek black color.",
    price: 986.45,
  },
];

function loginBtn() {
  console.log("--->>>");
  // console.log(name.innerText);
  // console.log(email.innerText);
  console.log(logIn_email.value);
  // console.log(email);
  // console.log(login_password.value);
  // localStorage.getItem("name", name.value);
  // let getname = localStorage.getItem("name");

  let getname = localStorage.getItem("name");
  let getEmail = localStorage.getItem("email");
  let getPasss = localStorage.getItem("password");
  console.log(getname);
  console.log(getEmail);
  console.log(getPasss);
  console.log(logIn_email.value);
  console.log(login_password.value);

  // if(getEmail == logIn_email){
  // alert('ppppppppppppppppppp')
  // }
  if (getEmail == logIn_email.value && getPasss == login_password.value) {
    alert("hellow " + getname);
    window.location = "index.html";
  } else if (getPasss != login_password.value) {
    alert("wronge Password");
  } else if (getEmail != logIn_email.value) {
    alert("wrong Email Address");
  }
}

function signUp() {
  console.log("pakistannn");
  // console.log(name);
  console.log(name.value);
  // console.log(email);
  console.log(email.value);
  // console.log(passsword);
  console.log(password.value);
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}
// login()

const cart_quantity = document.getElementById("cart_quantity");
const product = document.getElementById("product");

// console.log(product);

cart.map((item, ind) => {
  if (product) {
    product.innerHTML += `
<div class="card">
<div class="card_img">
  <img height="200" src=${item.image} alt="" />
</div>
<h1>${item.name}</h1>
<div class="rating">

  <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i>
</div>
<div class="card_para">
  ${item.about}
</div>
<div class="price">499.99</div>

<div class="card_btns">
  <button onclick="addToCart(${item.id})" class="main_text_btn card_btn">
    <i class="fa-solid fa-cart-shopping"></i> Add To Cart
  </button>
  <button onclick="detail(${item.id})" class="main_text_btn detail_Btn" id="detail">Detail</button>
</div>
</div>
`;
  }
});
// product.innerHTML = `
// <div class="card">
// <div class="card_img">
//   <img height="200" src="images/lapi.png" alt="" />
// </div>
// <h1>Laptop</h1>
// <div class="rating">
//   <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i>
//   <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i>
// </div>
// <div class="card_para">
//   Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera,
//   128GB storage, and a 4000mAh battery.
// </div>
// <div class="price">499.99</div>
// <div class="quantity">
//   <p>Quantity</p>
//   <div class="add_product">
//     <button onclick="inc()">+</button>
//     <p id="product_qty">199</p>
//     <button onclick="dec()">-</button>
//   </div>
// </div>
// <div class="card_btns">
//   <button onclick="addToCart()" class="main_text_btn card_btn">
//     <i class="fa-solid fa-cart-shopping"></i> Add To Cart
//   </button>
//   <button class="main_text_btn detail_Btn" id="detail">Detail</button>
// </div>
// </div>
// `;
// parseInt(cart_quantity.innerHTML);
// console.log(cart_quantity.innerHTML);
// console.log(parseInt(cart_quantity.innerHTML));

let num = parseInt(cart_quantity?.innerText);
function addToCart(item) {
  // console.log("addto cart ====>>");
  console.log(item);

  // console.log(cart_quantity.innerHTML);
  // num += 1;
  // cart_quantity.innerHTML = num;
  // // console.log(num);
  // alert("Hurry product Added Successfully");
}

// const product_detail = document.getElementById("cartDetail");
// const detail = (item) => {
//   console.log(item);
//   // window.location = "productDetail.html";
//   console.log(product_detail);
//   console.log(item);
//   //   product_detail &&
//   //     product_detail.innerHTML ==
//   //       `
//   //   <div class="product_detail">
//   //   <figure>
//   //     <img src="images/iphone.png" alt="" />
//   //   </figure>
//   //   <p>
//   //     Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera,
//   //     128GB storage, atetur adipisicing elit. Iste, nesciunt eum
//   //     aspernatur nemo dolores reprehenderit harum libero totam sapiente ut
//   //     consequatur nequ doloribus voluptas laboriosam fugit doloremque
//   //     reiciendis sint? and a 4000mAh battery.
//   //   </p>
//   //   <button>ok</button>
//   // </div>
//   //   `;
//   // cart.filter((v, i) => {
//   //   v.id == item ? console.log(v) : "";
//   // });
// };

// console.log(cart_quantity.innerHTML);
// console.log(num);

const product_qty = document.getElementById("product_qty");

let num1 = 3;
function inc() {
  console.log("increasse--->>> ");
  num1 += 1;
}
function dec() {
  console.log("increasse--->>> ");
  if (num1 > 0) {
    num1 -= 1;
  }
}
// dec();
// dec();
// dec();
// dec();
// inc();
// inc();
// inc();
console.log(num1);

function checkOut() {
  console.log("checkkk Out Listtt");
  location = "checkOut.html";
}
