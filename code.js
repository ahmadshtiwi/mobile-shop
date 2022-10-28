

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-button");
const cancelBtn = document.querySelector(".cancel-button");
const searchInput = document.querySelector("input");

cancelBtn.onclick =()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchInput.value = "";
}
    




function myFunction() {
    var nav = document.getElementById("navbar");

    
    if (nav.style.display === "none") {
        alert("s")
      x.style.display = "none";
    } else {
        alert("s")
      x.style.display = "flex";
    }
  }

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };