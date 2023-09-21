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
class ImageMeme extends ImageShort {
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
