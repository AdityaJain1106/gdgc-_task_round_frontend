var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 4000);
  var x;
  const boz = document.querySelectorAll(".boxez");
  for(x = 0; x < boz.length; x++){
    boz[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > boz.length){indexValue = 1}
  boz[indexValue -1].style.display = "block";
}
slideShow();