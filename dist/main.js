/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeContact(){\r\n    const containerContact = document.createElement('div')\r\n    containerContact.className = 'container-contact'\r\n    const p1 = document.createElement('p')\r\n    p1.textContent = \"📞 123 456 789\"\r\n    const p2 = document.createElement('p')\r\n    p2.textContent = \"🏠 Romania, Bucuresti, Numarul 123\"\r\n    const img = document.createElement('img')\r\n    img.src = '/dist/image/poza.png'\r\n\r\n    containerContact.append(p1,p2,img)\r\n\r\n    return containerContact\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeHome(){\r\n    const home = document.createElement('div')\r\n    home.className = 'home'\r\n\r\n    const p1 = document.createElement('p')\r\n    p1.textContent = 'Best Restaurant in your country'\r\n    const p2 = document.createElement('p')\r\n    p2.textContent = 'Made with passion since 2022'\r\n    const img = document.createElement('img')\r\n    img.src = '/dist/image/yonji.jpg'\r\n    const p3 = document.createElement('p')\r\n    p3.textContent = \"Order online or visit us!\"\r\n\r\n    home.append(p1,p2,img,p3)\r\n\r\n    return home\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\nconst content = document.getElementById('content')\r\n\r\n;(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeCard(name,description,src){\r\n    const card = document.createElement('div')\r\n    card.className = 'card'\r\n    const cardBox = document.createElement('div')\r\n    cardBox.className = 'cardbox'\r\n    const img = document.createElement('img')\r\n    img.src = src\r\n    const h3 = document.createElement('h3')\r\n    h3.textContent = name\r\n    const p = document.createElement('p') \r\n    p.textContent = description\r\n\r\n    \r\n    card.appendChild(cardBox)\r\n    cardBox.append(img,h3,p)\r\n\r\n    return cardBox ,card\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCard);\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction makeHeader(){\r\n    const header = document.createElement('div')\r\n    header.className = 'header'\r\n    const h1 = document.createElement('h1')\r\n    h1.textContent = \"Stefan's Restaurant\"\r\n\r\n    content.appendChild(header)\r\n    header.appendChild(h1)\r\n    header.appendChild(makeNavbar())\r\n}\r\n\r\nfunction makeNavbar(){\r\n    const navbar = document.createElement('div')\r\n    navbar.className = 'navbar'\r\n    const home = document.createElement('div')\r\n    home.id = 'home'\r\n    home.textContent = \"Home\"\r\n    home.classList.add('active')\r\n\r\n    home.addEventListener('click',(e)=>{\r\n        if(e.target.id === 'home'){\r\n            home.classList.add('active')\r\n            document.getElementsByClassName('container-home')[0].style.display = 'block'\r\n            menu.classList.remove('active')\r\n            document.getElementsByClassName('container-menu')[0].style.display = 'none'\r\n            contact.classList.remove('active')\r\n            document.getElementsByClassName('container-contact')[0].style.display = 'none'\r\n        }\r\n})\r\n    const menu = document.createElement('div')\r\n    menu.id = 'menu'\r\n    menu.textContent = \"Menu\"\r\n\r\n    menu.addEventListener('click',(e)=>{\r\n        if(e.target.id === 'menu'){\r\n            home.classList.remove('active')\r\n            document.getElementsByClassName('container-home')[0].style.display = 'none'\r\n            menu.classList.add('active')\r\n            document.getElementsByClassName('container-menu')[0].style.display = 'grid'\r\n            contact.classList.remove('active')\r\n            document.getElementsByClassName('container-contact')[0].style.display = 'none'\r\n        }\r\n    })\r\n\r\n    const contact = document.createElement('div')\r\n    contact.id = 'contact'\r\n    contact.textContent = \"Contact\"\r\n\r\n    contact.addEventListener('click',(e)=>{\r\n        if(e.target.id === 'contact'){\r\n            home.classList.remove('active')\r\n            document.getElementsByClassName('container-home')[0].style.display = 'none'\r\n            menu.classList.remove('active')\r\n            document.getElementsByClassName('container-menu')[0].style.display = 'none'\r\n            contact.classList.add('active')\r\n            document.getElementsByClassName('container-contact')[0].style.display = 'flex'\r\n        }\r\n    })\r\n\r\n\r\n    navbar.append(home,menu,contact)\r\n\r\n    return navbar \r\n}\r\n\r\nfunction makeMiddle(){\r\n    const middle = document.createElement('div')\r\n    middle.className = 'middle'\r\n    const containerHome = document.createElement('div')\r\n    containerHome.className = 'container-home'\r\n\r\n    const containerMenu = document.createElement('div')\r\n    containerMenu.className = 'container-menu'\r\n\r\n    content.appendChild(middle)\r\n    middle.appendChild(containerHome)\r\n    containerHome.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n    middle.appendChild(containerMenu)\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Burger','The Best Burger','/dist/image/burger.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Cheese','The Best Cheese','/dist/image/cheese.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Chicken','The Best Chicken','/dist/image/chicken.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Couscous','The Best Couscous','/dist/image/couscous.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Hummus','The Best hummus','/dist/image/hummus.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Pizza','The Best Pizza','/dist/image/pizza.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Sandwich','The Best Sandwich','/dist/image/sandwich.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Shrimp','The Best Shrimp','/dist/image/shrimp.png'))\r\n    containerMenu.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Apple Pie','The Best Apple Pie','/dist/image/apple-pie.png'))\r\n    middle.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\r\n}\r\n\r\nfunction makeFooter(){\r\n    const footer = document.createElement('div')\r\n    footer.className = 'footer'\r\n  \r\n    const p = document.createElement('p')\r\n    p.textContent = \"Copyright © 2023 Tanase Stefan\"\r\n\r\n    content.appendChild(footer)\r\n    footer.appendChild(p)\r\n}\r\n\r\nfunction makeWebsite(){\r\n    makeHeader(),\r\n    makeMiddle(),\r\n    makeFooter()\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeWebsite);\n\n//# sourceURL=webpack://restaurant_page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;