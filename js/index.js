import { Meme } from "./Meme.js";
import { ImagesList, listeImages } from "./Image.js";
/*let meme=new Meme();
console.log(meme);*/

/**
 * chargement de la liste des options du select
 * @param {ImagesListe} images liste d'images sous forme d'array ImagesListe
 */
const loadSelectImages = (images = listeImages) => {
  const select = document.querySelector("select#image"); // le select devant le # est optionnel
  const noItem = select.item(0);
  select.innerHTML = "";
  select.appendChild(noItem);
  images.map((e) => {
    const optEleme = document.createElement("option");
    optEleme.value = e.id;
    optEleme.innerHTML = e.title;
    select.appendChild(optEleme);
  });
};
window.lsi = loadSelectImages; //permet de lancer la fonction directement dans la console

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
    var meme = {
      texte: evt.target["texte"].value,
      x: Number(evt.target["valx"].value),
      y: Number(evt.target["valy"].value),
      color: evt.target["color"].value,
      fontSize: Number(evt.target["fontSize"].value),
      fontWeight: evt.target["fontWeight"].value,
    };
    console.log(meme);
    // console.log("texte=", evt.target["texte"].value);
    // console.log("x=", evt.target["valx"].value);
    // console.log("y=", evt.target["valy"].value);
    // console.log("color=", evt.target["color"].value);
    // console.log("fontSize=", evt.target["fontSize"].value);
    // console.log("fontWeight=", evt.target["fontWeight"].value);
    //debugger; force l'arrêt. pas beau
  }

  document.forms["meme_form"].addEventListener("submit", onformsubmit);
  // on peut aussi écrire document.forms.meme_form
}

document.addEventListener("DOMContentLoaded", function (evt) {
  initJs("aquamarine");
});
