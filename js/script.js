dia=document.getElementById("modoNoche");

function diurnoNocturno(){
    if (dia.getAttribute("class")=="fa-solid fa-moon"){
    
            dia.setAttribute("class","fa-solid fa-sun");
            document.body.setAttribute("class","nocturno");
        }
    
    else if (dia.getAttribute("class")=="fa-solid fa-sun"){
        dia.setAttribute("class","fa-solid fa-moon");
        document.body.setAttribute("class","diurno");
}
}


/*
JS
// On page load set the theme.
(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }

  document.getElementById("theme").textContent = localStorage.getItem("theme");
}

html
<button type="button" onclick="themeToggle()">Theme Toggle</button>
<div id="theme"></div>
*/