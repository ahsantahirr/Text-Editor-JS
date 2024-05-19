var bold_button = document.getElementById("bolds")
var italic_button = document.getElementById("italic")
var underline_button = document.getElementById("underline")
var fontsize_button = document.getElementById("fontsize")
var text_button = document.getElementById("textcolor")
var isBold = false;
var isItalic = false;
bold_button.addEventListener("click", function () {
    var x = document.getElementById("textArea1");
    x.style.fontWeight = "bold"
    if (isBold) {
        x.style.fontWeight = "normal";
    } else {
        x.style.fontWeight = "bold";
    }
    isBold = !isBold;
})
italic_button.addEventListener("click", function () {
    var x = document.getElementById("textArea1");
    x.style.fontStyle = "italic"
    if (isItalic) {
        x.style.fontStyle = "normal";
    } else {
        x.style.fontStyle = "italic";
    }
    isItalic = !isItalic;

})
fontsize_button.addEventListener("input", function () {
    var x = document.getElementById("textArea1");
    var size = fontsize_button.value
    x.style.fontSize = size + "px";

})
underline_button.addEventListener("click", function () {
    var x = document.getElementById("textArea1");
    x.style.textDecoration = "underline"

})
text_button.addEventListener("input", function () {
    var x = document.getElementById("textArea1");
    var colors = text_button.value
    x.style.color = colors;

})
