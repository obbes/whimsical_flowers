document.getElementById('date').innerHTML = new Date().toDateString();
//function should allow for navigation bar resize and maintain responsivness
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
