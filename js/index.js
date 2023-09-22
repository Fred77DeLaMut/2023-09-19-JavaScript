import { Meme } from "./Meme.js";
import { ImagesList, listeImages } from "./Image.js";

const addFormEvents = () => {
  /**
   * fonction de gestion de soumission formulaire
   * @param {SubmitEvent} evt event de soumission
   */
  function onformsubmit(evt) {
    evt.preventDefault();
    console.log(current);
  }
  const form = document.forms["meme_form"];
  form.addEventListener("submit", onformsubmit);
  // création d'un évènement qui met à jour
  form["texte"].addEventListener("input", (evt) => {
    current.update({ texte: evt.target.value });
  });
  form["valx"].addEventListener("input", (evt) => {
    current.update({ x: evt.target.value });
  });
  form["valy"].addEventListener("input", (evt) => {
    current.update({ y: evt.target.value });
  });
  form["coul"].addEventListener("input", (evt) => {
    current.update({ color: evt.target.value });
  });
  form["fontSize"].addEventListener("input", (evt) => {
    current.update({ fontSize: evt.target.value });
  });
  form["fontWeight"].addEventListener("input", (evt) => {
    current.update({ fontWeight: evt.target.value });
  });
};

/**
 * la fameuse fonction qui va effectuer le render
 * @param {*} mem
 */
const renderMeme = (mem) => {
  console.log(mem);
  /* rendu dom pour un meme */
};

let current = new Meme();
current.render = renderMeme;
//console.log(current);

/**
 * chargement de la liste des options du select
 * @param {ImagesList} images liste d'images sous forme d'array ImagesListe
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
//window.lsi = loadSelectImages; //permet de lancer la fonction directement dans la console

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
  addFormEvents();
}

//déclenchement du chargement des images
const promiseImage = listeImages.loadFromRest();
document.addEventListener("DOMContentLoaded", function (evt) {
  promiseImage.then((r) => {
    loadSelectImages(listeImages);
  });
  initJs("aquamarine");
});
