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
  ChangePreHeader(color);
  var bt = document.querySelector("#ne-pas-cliquer");
  bt.addEventListener("click", function (evt) {
    console.log(evt);
    console.log(evt.target);
    bt.innerHTML = "Trop tard";
    ChangePreHeader("black");
  });

  /**
   * fonction de gestion de soumission formulaire
   * @param {SubmitEvent} evt event de soumission
   */
  function onformsubmit(evt) {
    evt.preventDefault();
    console.log(evt);
    console.log("texte=", evt.target["texte"].value);
    console.log("x=", evt.target["valx"].value);
    console.log("y=", evt.target["valy"].value);
    console.log("coul=", evt.target["coul"].value);
    console.log("fontSize=", evt.target["fontSize"].value);
    console.log("fontWeight=", evt.target["fontWeight"].value);
    //debugger; force l'arrêt. pas beau
  }

  document.forms["meme_form"].addEventListener("submit", onformsubmit);
  // on peut aussi écrire document.forms.meme_form
}

document.addEventListener("DOMContentLoaded", function (evt) {
  initJs("aquamarine");
});
