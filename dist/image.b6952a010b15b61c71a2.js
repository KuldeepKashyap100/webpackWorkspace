/*! For license information please see image.b6952a010b15b61c71a2.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/components/ImageComponent/ImageComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_jsWallpaper_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsWallpaper.png */ "./src/assets/jsWallpaper.png");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ImageComponent = /*#__PURE__*/function () {\n  function ImageComponent() {\n    _classCallCheck(this, ImageComponent);\n  }\n\n  _createClass(ImageComponent, [{\n    key: "render",\n    value: function render() {\n      var imgElement = document.createElement("img");\n      imgElement.src = _assets_jsWallpaper_png__WEBPACK_IMPORTED_MODULE_0__.default;\n      imgElement.style.width = "400px";\n      imgElement.style.height = "200px";\n      imgElement.alt = "JS";\n      document.body.appendChild(imgElement);\n    }\n  }]);\n\n  return ImageComponent;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageComponent);\n\n//# sourceURL=webpack://webpack-workspace/./src/components/ImageComponent/ImageComponent.js?')},"./src/imageRender.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ImageComponent_ImageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ImageComponent/ImageComponent */ "./src/components/ImageComponent/ImageComponent.js");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\nvar image = new _components_ImageComponent_ImageComponent__WEBPACK_IMPORTED_MODULE_0__.default();\nimage.render();\n\n//# sourceURL=webpack://webpack-workspace/./src/imageRender.js?')},"./src/assets/jsWallpaper.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "28281f4488a3246b93cde337f0f5d617.png");\n\n//# sourceURL=webpack://webpack-workspace/./src/assets/jsWallpaper.png?')}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,_,r,n)=>{if(!_){var a=1/0;for(t=0;t<deferred.length;t++){for(var[_,r,n]=deferred[t],o=!0,p=0;p<_.length;p++)(!1&n||a>=n)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[p])))?_.splice(p--,1):(o=!1,n<a&&(a=n));o&&(deferred.splice(t--,1),e=r())}return e}n=n||0;for(var t=deferred.length;t>0&&deferred[t-1][2]>n;t--)deferred[t]=deferred[t-1];deferred[t]=[_,r,n]},__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.p="/static/",(()=>{var e={image:0};__webpack_require__.O.j=_=>0===e[_];var _=(_,r)=>{var n,a,[o,p,t]=r,c=0;for(n in p)__webpack_require__.o(p,n)&&(__webpack_require__.m[n]=p[n]);for(t&&t(__webpack_require__),_&&_(r);c<o.length;c++)a=o[c],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[o[c]]=0;__webpack_require__.O()},r=self.webpackChunkwebpack_workspace=self.webpackChunkwebpack_workspace||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__.O(void 0,["vendors-node_modules_lodash_lodash_js-node_modules_react_index_js"],(()=>__webpack_require__("./src/imageRender.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();