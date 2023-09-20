/**
 * Constructeur d'objet Meme
 */
function Meme() {
  // this attache la valeur à l'objet et est donc visible de l'extérieur
  this.texte = "Texte du meme";

  var _imageId = 0; //variable privée, on préfixe par underscore
  this.getImageId = function () {
    return _imageId;
  };

  function _changeImage(imageId) {
    console.log("change image fn called");
    _imageId = imageId;
  }
  this.changeImage = _changeImage; // visible de l'extérieur

  console.log("Meme called", this.texte);
  _changeImage(25);
  console.log(_imageId);
}

var meme = new Meme();
