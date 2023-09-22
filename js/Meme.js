import { ImageMeme as Img } from "./Image.js";
/**
 * Constructeur d'objet Meme avec ou sans json de base
 */
export function Meme(jsonConfiguredMemeStr) {
  // this attache la valeur à l'objet et est donc visible de l'extérieur
  this.texte = "C'est vide";
  this.x = 0;
  this.y = 32;
  this.color = "#000000";
  this.fontWeight = "500";
  this.fontSize = 32;
  this.underline = false;
  this.italic = false;
  this.imageId = -1;
  this.image = new Img();
  this.render = undefined;

  const insideRender = () => {
    if (undefined !== this.render && typeof this.render === "function") {
      this.render(this);
    }
  };

  /**
   * update d'un meme par objet avec force render on update
   * @param {object} memeData
   */
  this.update = function (memeData) {
    Object.assign(this, memeData);
    insideRender();
  };

  /**
   * chargement de valeurs a partir d'un meme en json
   * @param {string} jsonStr
   */
  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };

  if (jsonConfiguredMemeStr !== undefined) {
    this.loadFromString(jsonConfiguredMemeStr);
  }
}

// var meme = new Meme();
