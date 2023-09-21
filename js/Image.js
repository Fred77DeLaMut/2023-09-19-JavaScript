class ImageShort {
  #uid; // champ privé mais visible depuis l'extérieur
  w = 100;
  h;
  url;
  constructor(img = {}) {
    this.#uid = Math.random();
    if (undefined !== img.w) {
      this.w = img.w;
    }
    this.h = undefined !== img.h ? img.h : 100; // autre forme de condition, la ternaire
    if (undefined !== img.url && img.url.length >= 5) {
      this.url = img.url;
    } else {
      this.url = "";
    }
  }
  get uid() {
    return this.#uid;
  }
  set uid(value) {
    this.#uid = value;
  }
  /**
   *
   * @returns {number} ratio largeur/hauteur
   */
  getRatioWH() {
    return this.w / this.h;
  }
}
export class ImageMeme extends ImageShort {
  title = "no image";
  id = undefined;
  constructor(img = {}) {
    super(img);
    if (undefined !== img.title && img.title.length > 2) {
      this.title = img.title;
    } else if (
      undefined === img.title &&
      undefined !== img.url &&
      img.url.length > 5
    ) {
      this.title = img.url.slice(
        img.url.lastIndexOf("/") + 1,
        img.url.lastIndexOf(".")
      );
    }
    if (undefined !== img.id) {
      this.id = img.id;
    }
  }
}

class ImageList extends Array {
  loadFromRest() {
    fetch("http://localhost:5679/images")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((arr) => {
        console.log(arr, this);
        this.splice(0); //conserve jusqu'à la ième case. ici on vide
        /*arr.map((element,position,liste)=>{  //map = foreach met retourne des valeurs
          console.log(element,position,liste);
          this.push(element);
        })*/
        this.push(...arr);  //...arr insère le contenu du tableau arr dans un autre
        console.log(this);
      });
  }
}

export const listeImages = new ImageList();
listeImages.loadFromRest();
