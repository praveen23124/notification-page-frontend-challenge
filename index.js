document.querySelectorAll(".notification")[0].addEventListener("click", function(){
  document.querySelectorAll(".redDot")[0].classList.remove("dot");
  document.querySelectorAll(".notification")[0].style.backgroundColor = "white";

});

document.querySelectorAll(".notification")[1].addEventListener("click", function(){
  document.querySelectorAll(".redDot")[1].classList.remove("dot");
  document.querySelectorAll(".notification")[1].style.backgroundColor = "white";
});

document.querySelectorAll(".notification")[2].addEventListener("click", function(){
  document.querySelectorAll(".redDot")[2].classList.remove("dot");
  document.querySelectorAll(".notification")[2].style.backgroundColor = "white";

});

document.querySelector(".marking").addEventListener("click", function(){
  for(i=0; i<=2; i++){
    document.querySelectorAll(".redDot")[i].classList.remove("dot");
    document.querySelectorAll(".notification")[i].style.backgroundColor = "white";
  }
})
