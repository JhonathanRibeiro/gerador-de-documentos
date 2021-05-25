const inputText = document.querySelector("#input-text"),
    outputText = document.querySelector("#output-text"),
    btnUppercase = document.querySelector("#btn_uppercase"),
    btnLowercase = document.querySelector("#btn_lowercase"),
    btnMixedcase = document.querySelector("#btn_mixedcase"),
    btnTogglecase = document.querySelector("#btn_togglecase"),
    btnPropercase = document.querySelector("#btn_propercase"),
    btnSentencecase = document.querySelector("#btn_sentencecase"),
    btnReset = document.querySelector("#btn_reset");
var clipboard = new Clipboard(".copy-button");

function lowercase() {
    outputText.innerText = inputText.value.toLowerCase()
}

function mixedcase() {
    for (var e = inputText.value.toLowerCase().split(""), t = 0; t < e.length; t += 2)
        e[t] = e[t].toUpperCase();
    outputText.innerText = e.join("")
}

function propercase() {
    outputText.innerText = inputText.value.replace(/\w\S*/g, function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
    })
}

function firstLetterUpper(e) {
    return e.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(e) {
        return e.toUpperCase()
    })
}
//limpa o campo
function reset() {
    inputText.value = "",
        outputText.innerText = ""
}

function sentencecase() {
    var e = firstLetterUpper(inputText.value);
    outputText.innerText = e
}

function togglecase() {
    outputText.innerText = inputText.value.toUpperCase().split(" ").map(function(e) {
        return e.charAt(0).toLowerCase() + e.slice(1)
    }).join(" ")
}
//Formata o texto todo em maiúsculo
function uppercase() {
    outputText.innerText = inputText.value.toUpperCase()
}
clipboard.on("success", function(e) {
        console.info("Action:", e.action),
            console.info("Text:", e.text),
            console.info("Trigger:", e.trigger),
            e.clearSelection()
    }),
    clipboard.on("error", function(e) {
        console.error("Action:", e.action),
            console.error("Trigger:", e.trigger)
    }),
    btnUppercase.addEventListener("click", uppercase, !1),
    btnLowercase.addEventListener("click", lowercase, !1),
    btnMixedcase.addEventListener("click", mixedcase, !1),
    btnTogglecase.addEventListener("click", togglecase, !1),
    btnPropercase.addEventListener("click", propercase, !1),
    btnSentencecase.addEventListener("click", sentencecase, !1),
    btnReset.addEventListener("click", reset, !1);