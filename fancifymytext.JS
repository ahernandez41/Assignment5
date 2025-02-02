window.onload = function() {
    document.getElementById("fancy").onchange = applyStyles;
    document.getElementById("boring").onchange = applyStyles;
};

function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyles() {
    let fancy = document.getElementById("fancy");
    let textArea = document.getElementById("userText");
    if (fancy.checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(/\.+\s*/); 
    text = sentences.join("-Moo.");
    textArea.value = text;
}

