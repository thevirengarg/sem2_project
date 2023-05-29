let inputTextArea = document.getElementById("text-input");
let characCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");
let spaceCount = document.getElementById("space-count");
let paragraph = document.getElementById("para-count");
let button = document.getElementById("clr");
let sentence = document.getElementById("sentence-count");
let readingtime = document.getElementById("reading");
let speaking = document.getElementById("speaking");

inputTextArea.addEventListener("input", function(){
  let txt = inputTextArea.value.trim();
  let countingword = txt.split(/\s+/).filter((item) => item).length;
  let read = Math.floor(countingword * (60/275));
  let speak = Math.floor(countingword *(60/180));
characCount.textContent = (inputTextArea.value.match(/[a-z0-9.]/gi) || []).length;
// g - global , i - capital also
  wordCount.textContent = countingword;
  spaceCount.textContent = inputTextArea.value.split(" ").length -1;
  paragraph.textContent = inputTextArea.value.split("\n").filter((item) => item).length;
  sentence.textContent = inputTextArea.value.split(".").length -1;
  readingtime.textContent = read;
  speaking.textContent = speak;
});



button.addEventListener("click", function(){
  inputTextArea.value = '';
  wordCount.textContent = 0;
  spaceCount.textContent = 0;
  paragraph.textContent = 0;
  characCount.textContent = 0;
  sentence.textContent = 0;
  readingtime.textContent = 0;
  speaking.textContent = 0;
});

































