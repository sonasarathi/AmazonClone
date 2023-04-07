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
    name: 'WASHING MACHINE',
    price: '35000',
    img: 'https://media.istockphoto.com/id/1181334518/photo/laundry-room-with-a-washing-machine.jpg?s=612x612&w=0&k=20&c=GD1wXWJJ9sHMpH5pna6zIg2RbZmbyq9tUb4hvK967vQ=',
    //cartImg: '',
  },
  {
    name: 'AIR CONDITIONER',
    price: '30000',
    img: 'https://media.istockphoto.com/id/1368514998/photo/hand-adjusting-temperature-on-air-conditioner.jpg?s=612x612&w=is&k=20&c=S0-YTNFQNgRXGObRSjBH0Tb-vUTraQUx6czZJ8V-jSY=" id="hero-img',
    //cartImg: '',
  },
  {
    name: 'TELEVISION',
    price: '40000',
    img: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //cartImg: '',
  },
  {
    name: 'FAN',
    price: '3000',
    img: 'https://cdn.pixabay.com/photo/2014/08/10/08/22/electric-fan-414575__340.jpg',
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

