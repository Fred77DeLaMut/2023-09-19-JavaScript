/**
 * affichage de l'état du js
 * @param {string} color chaine de valeur de couleur CSS
 * @return {undefined} pas de retour
 */
function ChangePreHeader(color) {
  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS <b>Chargé</b>";
  jsLoadedNode.style.color = color;
  jsLoadedNode.style.textAlign = "center";
}

/**
 * fonction principale d'initialisation du js
 * @param {string} color chaine de valeur de couleur CSS
 * @returns {undefined} pas de retour
 */
function initJs(color) {
  var bt = document.querySelector("#ne-pas-cliquer");
  ChangePreHeader(color);
  bt.addEventListener("click", function (evt) {
    console.log(evt);
    console.log(evt.target);
    bt.innerHTML = "Trop tard";
    ChangePreHeader("black");
  });
}
document.addEventListener('DOMContentLoaded',function(evt){
initJs("aquamarine");
});
