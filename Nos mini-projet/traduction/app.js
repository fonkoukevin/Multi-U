const translateBtn = document.getElementById("translateBtn");
const inputText = document.getElementById("inputText");
const languageSelect = document.getElementById("languageSelect");
const output = document.getElementById("output");

translateBtn.addEventListener("click", function() {
  const selectedLanguage = languageSelect.value;
  const sourceText = inputText.value;

  fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${selectedLanguage}&dt=t&q=${encodeURI(
      sourceText
    )}`
  )
    .then(response => response.json())
    .then(data => {
      const translatedText = data[0][0][0];
      output.innerHTML = translatedText;
    })
    .catch(error => console.error(error));
});