import REST_ADR, { REST_RESSOURCES } from "./constantes.js";
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
  this.image = undefined;
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
   * sauvegarde des données
   */
  this.savDatas = () => {
    //comme on n'a pas besoin de l'image, on l'enlève
    const tmp = { ...this, image: undefined };
    // ou delete tmp.image;
    //const tmp = Object.assign({}, this);
    //delete tmp.image;
    return fetch(
      `${REST_ADR}${REST_RESSOURCES.memes}${
        undefined !== this.id ? "/" + this.id : ""
      }`,
      {
        method: undefined !== this.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tmp),
      }
    ).then((response) => {
      return response.json();
    });
    // on peut ecrire then((response) =>response.json()) car une seule instruction
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
