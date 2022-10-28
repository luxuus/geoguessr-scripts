// ==UserScript==
// @name         Geoguessr Fast Round Skip
// @description  Gives you the ability to move to the next round by pressing the Spacebar
// @version      1.0
// @author       luxus
// @match        *://*.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?domain=geoguessr.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
    document.querySelector(".button_variantPrimary__xc8Hp").click();
  }
});
