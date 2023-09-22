import { ImageMeme as Img } from "./Image.js";
/**
 * Constructeur d'objet Meme avec ou sans json de base
 */
export function Meme(jsonConfiguredMemeStr) {
  // this attache la valeur à l'objet et est donc visible de l'extérieur
  this.texte = "Ceci n'est pas une éprouvette";
  this.x = 10;
  this.y = 32;
  this.color = "#00BFFF";
  this.fontWeight = "500";
  this.fontSize = 14;
  this.underline = true;
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
