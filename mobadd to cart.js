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
    name: 'I PHONE',
    price: '50,000',
    img: 'https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max" id="hero-img',
    //cartImg: '',
  },
  {
    name: 'I PHONE',
    price: '60000',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7EQCjSId5Gn6RUoFCcDX6pZ_Tct14dNdUEXdl5Qe&s" id="hero-img',
    //cartImg: '',
  },
  {
    name: 'I PHONE',
    price: '70000',
    img: 'https://alaneesqatar.qa/wp-content/uploads/2022/09/Apple-iPhone-14-6GB-128GB-Red.png',
    //cartImg: '',
  },
  {
    name: 'I PHONE',
    price: '80000',
    img: 'https://s3.envato.com/files/380285952/IPhone%2014%20Pro%20Concept%20Gold.65.jpg',
    //cartImg: '',
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

