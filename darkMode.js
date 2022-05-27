if(window.location.href.split('?')[1].split('#')[0] == "dark") {
  document.getElementById("stylesheet").href = "/dark.css";
  document.getElementById("dark").href = window.location.href.split("?dark")[0];
  document.getElementById("dark").innerHTML = "light mode";
  Array.from(document.getElementsByClassName("mL")).forEach(function(a){a.href=a.href.split("#")[0]+"?dark#"+(a.href.split("#")[1]||"");});//still won't work on ie, but at least it doesn't break ie anymore
}
