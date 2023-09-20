function ChangePreHeader(color) {
  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS <b>Chargé</b>";
  jsLoadedNode.style.color = color;
  jsLoadedNode.style.textAlign = "center";
}

/**
 * fonction d'initialisation du js
 * @param {string} color chaine de valeur de couleur CSS
 * @returns {undefined} pas de retour
 */
function initJs(color) {
  ChangePreHeader(color);
  document.querySelector('button#ne-pas-cliquer').addEventListener('click',function(evt){
    console.log(evt);
  })
}
initJs("aquamarine");
