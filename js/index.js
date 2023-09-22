import { Meme } from "./Meme.js";
import { ImagesList, listeImages } from "./Image.js";

/**
 * Récupère les valeurs initiales dans l'objet pour les afficher
 * @param {mem} mem
 */
const fillFormDatas = (mem) => {
  const formImage = document.forms["meme-viewer"];
  const formElement = document.forms["meme_form"];
  formElement["texte"].value = mem.texte;
  formElement["valx"].value = mem.x;
  formElement["valy"].value = mem.y;
  formElement["fontSize"].value = mem.fontSize;
  formElement["fontWeight"].value = mem.fontWeight;
  formElement["coul"].value = mem.color;
  formElement["italic"].checked = mem.italic;
  formElement["underline"].checked = mem.underline;
  formElement["image"].value = mem.imageId;
  formElement["shadow"].checked = mem.shadow;
  formElement["stroke"].checked = mem.stroke;
};

const addFormEvents = () => {
  fillFormDatas(current);
  renderMeme(current);
  /**
   * fonction de gestion de soumission formulaire
   * @param {SubmitEvent} evt event de soumission
   */
  function onformsubmit(evt) {
    evt.preventDefault();
    const promiseSavDatas = current.savDatas();
    promiseSavDatas.then((obj) => {
      current.savDatas();
      current = new Meme();
      current.render = renderMeme;
      fillFormDatas(current);
      renderMeme(current);
      console.log(current);
    });
  }
  const form = document.forms["meme_form"];
  form.addEventListener("submit", onformsubmit);
  // création d'un évènement qui met à jour
  form["texte"].addEventListener("input", (evt) => {
    current.update({ texte: evt.target.value });
  });
  form["valx"].addEventListener("input", (evt) => {
    current.update({ x: Number(evt.target.value) });
  });
  form["valy"].addEventListener("input", (evt) => {
    current.update({ y: Number(evt.target.value) });
  });
  form["coul"].addEventListener("input", (evt) => {
    current.update({ color: evt.target.value });
  });
  form["fontSize"].addEventListener("input", (evt) => {
    current.update({ fontSize: Number(evt.target.value) });
  });
  form["fontWeight"].addEventListener("input", (evt) => {
    current.update({ fontWeight: evt.target.value });
  });
  form["italic"].addEventListener("input", (evt) => {
    current.update({ italic: evt.target.checked });
  });
  form["underline"].addEventListener("input", (evt) => {
    current.update({ underline: evt.target.checked });
  });
  form["image"].addEventListener("input", (evt) => {
    const id = Number(evt.target.value);
    const imageFound = listeImages.find((elementimage) => {
      return elementimage.id === id;
    });
    current.update({ imageId: id, image: imageFound });
    console.log(evt);
  });

  form["stroke"].addEventListener("input", (evt) => {
    current.update({ stroke: evt.target.checked });
  });
  form["shadow"].addEventListener("input", (evt) => {
    current.update({ shadow: evt.target.checked });
  });
};

/**
 * la fameuse fonction qui va effectuer le render
 * @param {*} mem
 */
const renderMeme = (mem) => {
  console.log(mem);
  const svgElement = document.querySelector("svg");
  const imageElement = svgElement.querySelector("image");
  const TextElement = svgElement.querySelector("text");
  TextElement.innerHTML = mem.texte;
  TextElement.setAttribute("y", mem.y);
  TextElement.setAttribute("x", mem.x);
  TextElement.setAttribute("fill", mem.color);
  TextElement.setAttribute("font-size", mem.fontSize);
  TextElement.style.fontWeight = mem.fontWeight;
  TextElement.style.textDecoration = mem.underline ? "underline" : "none";
  TextElement.style.fontStyle = mem.italic ? "italic" : "normal";

  mem.shadow === true
    ? TextElement.classList.add("shadow")
    : TextElement.classList.remove("shadow");
  mem.stroke === true
    ? TextElement.classList.add("stroke")
    : TextElement.classList.remove("stroke");

  svgElement.setAttribute(
    "viewBox",
    `0 0 ${undefined !== mem.image ? mem.image.w : "500"} ${
      undefined !== mem.image ? mem.image.h : "500"
    }`
  );
  imageElement.setAttribute(
    "href",
    undefined !== mem.image ? mem.image.url : "/images/MonImage.jpg"
  );
  // l'image

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
