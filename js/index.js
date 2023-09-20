function initJs(color) {
    console.log('du texte');
    console.log(color);
    console.warn(color);
    console.error(color);
    console.trace(color);
    var jsLoadedNode = document.querySelector("#is-js-loaded");
    jsLoadedNode.innerHTML = "JS <b>Chargé</b>";
    jsLoadedNode.style.color = color;
    jsLoadedNode.style.textAlign = "center";    
}
initJs('aquamarine');