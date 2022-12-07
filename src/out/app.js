/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.ts ***!
  \***********************/
//add theme buttons to html
var themeButtonTemplate = document.getElementById("theme-button-template");
var themeButtonsParent = document.getElementById("theme-buttons");
var themeNames = ["main", "light"];
var THEME_PATH = "src/out/themes/";
var CSS_LINK = 0;
function addThemeButton(themeFilePath, themeName) {
  var themeButton = themeButtonTemplate.content.cloneNode(true).children[0];
  themeButton.innerHTML = themeName;
  themeButton.setAttribute("data-theme-name", themeFilePath);
  themeButton.addEventListener("click", function () {
    changeCSS(themeFilePath);
    console.log("theme applied: " + themeFilePath);
  });
  themeButtonsParent.appendChild(themeButton);
}
for (var _i = 0, themeNames_1 = themeNames; _i < themeNames_1.length; _i++) {
  var theme = themeNames_1[_i];
  addThemeButton(THEME_PATH + theme + ".css", theme);
}
function changeCSS(cssFile) {
  var oldlink = document.getElementsByTagName("link").item(CSS_LINK);
  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);
  document.getElementsByTagName("head").item(CSS_LINK).replaceChild(newlink, oldlink);
}
/******/ })()
;