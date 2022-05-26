if(window.location.href.split('?')[1] == "dark") {
  document.getElementById("stylesheet").href = "dark.css";
  document.getElementById("dark").href = ".";
  document.getElementById("dark").innerHTML = "light mode";
  document.getElementById("home").href+="?dark"
}
