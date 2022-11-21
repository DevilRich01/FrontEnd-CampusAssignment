var brandName = document.querySelectorAll(".brand-name");
var brandContainer = document.querySelectorAll(".brand_container");
var bodyContainer = document.querySelector(".body-container");

function filterBrands() {
   var inputValue = document.querySelector(".input").value.toLowerCase().replace(/\s+/g, '');

   var i;
   for (i = 0; i < brandContainer.length; i++) {
      if (brandName[i].innerText.toLowerCase().replace(/\s+/g, '').includes(inputValue)) {
         brandContainer[i].classList.add("appear");
      } else {
         brandContainer[i].classList.remove("appear");
         brandContainer[i].classList.add("hide");
      }
   }
}