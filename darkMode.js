if(window.location.href.split('?')[1].split('#')[0] == "dark") {
  document.getElementById("stylesheet").href = "dark.css";
  document.getElementById("dark").href = ".";
  document.getElementById("dark").innerHTML = "light mode";
  document.getElementsByClassName("mL").forEach(a=>a.href+="?dark");
}
