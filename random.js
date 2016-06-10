

function randomFunc() {
  var rando = Math.random();
  if (rando > .5) {
    mainDiv.innerHTML = "<img src='left_arrow_sign.svg'>";
  } else {
    mainDiv.innerHTML = "<img src='Aiga_rightarrow_inv.svg'>"
  };
  console.log("math.random", rando);
};

var mainDiv = document.getElementById("mainDiv");

mainDiv.addEventListener("click", randomFunc);

