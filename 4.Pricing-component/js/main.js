const checkbox = document.getElementById("checkbox");
const price1 = document.getElementsByClassName("price1");
const price2 = document.getElementsByClassName("price2");

function check() {
  for (var i = 0; i < price1.length; i++) {
    if (checkbox.checked == true) {
      price1[i].style.display = "block";
      price2[i].style.display = "none";
    } else if (checkbox.checked == false) {
      price1[i].style.display = "none";
      price2[i].style.display = "block";
    }
  }
}
check();
checkbox.addEventListener("click", check);