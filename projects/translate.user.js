// ==UserScript==
// @name         Google translate popup remover
// @namespace    http://adriaan1313.github.io/
// @version      1.0
// @description  Remove Google translate's stupid new history popup
// @author       Bunny
// @include      https://translate.google.*
// @include      http://translate.google.*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let n = document.getElementsByClassName("tlid-notification-container");
    for(let i=0; i < n.length; i++){
      n[i].style.display = "none";
    }
})();
