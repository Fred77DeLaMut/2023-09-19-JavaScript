function initJs(color) {
    console.time('fnInitJs');
    console.log('du texte','autre chose',color);
    console.log(color);
    console.warn(color);
    console.error(color);
    console.trace(arguments);
    var jsLoadedNode = document.querySelector("#is-js-loaded");
    jsLoadedNode.innerHTML = "JS <b>Chargé</b>";
    jsLoadedNode.style.color = color;
    jsLoadedNode.style.textAlign = "center";    
    console.timeEnd('fnInitJs');
}
initJs('aquamarine',{a:34, b:10});