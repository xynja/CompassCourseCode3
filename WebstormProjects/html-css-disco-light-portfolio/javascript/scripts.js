function randomColorGen() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function discoLight() {
    document.getElementsByClassName(".body");
    document.getElementById("ColorMe").style.background = randomColorGen();
}

//New Gradient Code
function theColorMaker() {
    var baseColor = "rgba(";
    for (var i = 0; i < 3; i++) {
        baseColor += Math.floor(Math.random() * 255) + ",";
}
return baseColor;/* with no return, color is replaces with the new value */
}

function useTheColor() {
var superPower1 = theColorMaker();
var superPower2 = theColorMaker();

document.documentElement.style.setProperty("--poki1", superPower1 + "0.60)");
document.documentElement.style.setProperty("--poki2", superPower2 + "0.90)");
}
setInterval(useTheColor,700); /*What we know as FPS*/
