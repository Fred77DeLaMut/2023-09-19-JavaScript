import { ImageMeme as Img} from "./Image.js";
/**
 * Constructeur d'objet Meme avec ou sans json de base
 */
export function Meme(jsonConfiguredMemeStr) {
  // this attache la valeur à l'objet et est donc visible de l'extérieur
  this.texte = "Texte du meme";
  this.x = 0;
  this.y = 32;
  this.color = "#000000";
  this.fontWeight = "500";
  this.fontSize = 32;
  this.underline = false;
  this.italic = false;
  this.imageId = -1;
  this.image=new Img;

  /**
   * chargement de valeurs a partir d'un meme en json
   * @param {string} jsonStr
   */
  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };

  if (jsonConfiguredMemeStr!==undefined) {
    this.loadFromString(jsonConfiguredMemeStr);
    
  }
}

var meme = new Meme();
