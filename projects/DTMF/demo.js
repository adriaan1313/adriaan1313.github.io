let i;
let tds = document.getElementsByTagName("td");

window.onload = function(){
  for(i = 0; i < tds.length; i++){
    tds[i].f0 = tds[i].outerHTML.split("f0=\"").pop().split("\"")[0];
    tds[i].f1 = tds[i].outerHTML.split("f1=\"").pop().split("\"")[0];
    tds[i].onmousedown = function(){if(!isNaN(this.f0)){DTMF0.start(this.f0, this.f1);}};
    document.onmouseup = function(){
      if(typeof(DTMF0.context) == "object"){
        DTMF0.end();
      }
    };
    //console.log(tds[i].f0 + ", " + tds[i].f1);
  }
}
window.addEventListener("keydown", function(_e){
  _e.preventDefault();
  if(typeof(DTMF0.context) !== "object"){
    if(_e.key == 0){DTMF0.start(941, 1336);}
    else if(_e.key == 1){DTMF0.start(697, 1209);}
    else if(_e.key == 2){DTMF0.start(697, 1336);}
    else if(_e.key == 3){DTMF0.start(697, 1477);}
    else if(_e.key == 4){DTMF0.start(770, 1209);}
    else if(_e.key == 5){DTMF0.start(770, 1336);}
    else if(_e.key == 6){DTMF0.start(770, 1477);}
    else if(_e.key == 7){DTMF0.start(852, 1209);}
    else if(_e.key == 8){DTMF0.start(852, 1336);}
    else if(_e.key == 9){DTMF0.start(852, 1477);}
    else if(_e.key.toLocaleLowerCase() == "a"){DTMF0.start(697, 1633);}
    else if(_e.key.toLocaleLowerCase() == "b"){DTMF0.start(770, 1633);}
    else if(_e.key.toLocaleLowerCase() == "c"){DTMF0.start(852, 1633);}
    else if(_e.key.toLocaleLowerCase() == "d"){DTMF0.start(941, 1633);}
    else if(_e.key = "*" && _e.code == "Digit8"){DTMF0.start(941, 1209);}
    else if(_e.key = "#" && _e.code == "Digit3"){DTMF0.start(941, 1477);}
  }
});
window.addEventListener("keyup", function(_e){
  if(typeof(DTMF0.context) == "object"){
    DTMF0.end();
    _e.preventDefault();
  }
});
