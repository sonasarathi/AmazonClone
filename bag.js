//scroll animations
const target = document.querySelector(".product-wrapper");
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
target.addEventListener("scroll", reveal);

//store shoes info 
var shoes = [
  {
    name: 'CLASSIC BAG',
    price: '9000',
    img: 'https://m.media-amazon.com/images/I/418mU-ro5iS._AC_SY580_.jpg'
  },
  {
    name: 'PARTY WEAR BAG',
    price: '1000',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    //cartImg: '',
  },
  {
    name: 'WOMEN BAGS',
    price: '900',
    img: 'https://a.1stdibscdn.com/valentino-beige-leather-mini-rockstud-glam-lock-shoulder-bag-for-sale-picture-4/v_13101/v_142938821640587394833/luxury_women_valentino_used_handbags_p508256_001_master.jpg?width=768',
    //cartImg: '',
  },
  {
    name: 'CLASSIC COMBO OFFER BAGS',
    price: '1500',
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41AsVmtA18L._AC_SS450_.jpg'
  },  
];

//add to cart 
const cart = document.querySelector(".cart-wrapper");
const row = document.querySelectorAll(".row");
const item1Img = document.querySelector("#item1-img");
const item1Name = document.querySelector("#item1-name");
const item1Price = document.querySelector("#item1-price");
const item2Img = document.querySelector("#item2-img");
const item2Name = document.querySelector("#item2-name");
const item2Price = document.querySelector("#item2-price");
const item3Img = document.querySelector("#item3-img");
const item3Name = document.querySelector("#item3-name");
const item3Price = document.querySelector("#item3-price");
const item4Img = document.querySelector("#item4-img");
const item4Name = document.querySelector("#item4-name");
const item4Price = document.querySelector("#item4-price");
var click = 0;


const cartBtn = document.querySelectorAll("#add");
cartBtn.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    row.forEach(function(r)  {
                  r.style.display = "flex";
                  })
    var pid = event.target.parentElement.parentElement.id;
    switch(pid)
      {
        case "prod1":
          item1Img.setAttribute("style", "background-image: url(" + shoes[0].img + ")");
          item1Name.innerHTML = shoes[0].name;
          item1Price.innerHTML = shoes[0].price;
        break;
          
        case "prod2":
          item2Img.setAttribute("style", "background-image: url(" + shoes[1].img + ")");
          item2Name.innerHTML = shoes[1].name;
          item2Price.innerHTML = shoes[1].price;
        break;
          
       case "prod3":
          item3Img.setAttribute("style", "background-image: url(" + shoes[2].img + ")");
          item3Name.innerHTML = shoes[2].name;
          item3Price.innerHTML = shoes[2].price;
        break;
          
        case "prod4":
          item4Img.setAttribute("style", "background-image: url(" + shoes[3].img + ")");
          item4Name.innerHTML = shoes[3].name;
          item4Price.innerHTML = shoes[3].price;
        break;
          
        default: 
          window.alert("error");
          
      }
  })
});

//delete cart 
const empty = document.querySelector("#delete");
empty.addEventListener('click', function(){
      row.forEach(function(r)  {
                  r.style.visibility = "hidden";
                  })
});

