var btnTranslate = document.querySelector("#btn-tanslate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function clickEventHandler() {
      var serverUrlWithText = serverUrl + "?text=" + txtInput.value;

      fetch(serverUrlWithText)
      .then(response => response.json())
      .then(json => {outputDiv.innerText = json.contents.translated});
      
};

btnTranslate.addEventListener("click",clickEventHandler);
