function initJs(color) {
    var jsLoadedNode = document.querySelector("#is-js-loaded");
    jsLoadedNode.innerHTML = "JS <b>Chargé</b>";
    jsLoadedNode.style.color = color;
    jsLoadedNode.style.textAlign = "center";    
}
initJs('aquamarine',{a:34, b:10});