module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/[id].js":
/*!********************************!*\
  !*** ./pages/api/note/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // have to parseInt id bc it is a string in the db\n\nconst getNote = id => _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.find(n => n.id === parseInt(id)); //*Note: we are using query and not the params\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // GET the ID of the NOTE\n.get((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.statusCode(404);\n    res.end();\n    return;\n  }\n\n  res.json({\n    data: note\n  });\n}) // EDIT A NOTE\n.patch((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));\n\n  const updated = _objectSpread(_objectSpread({}, note), req.body);\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a[i] = updated;\n  res.json({\n    data: updated\n  });\n}) // DELETEING A NOTE\n.delete((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.splice(i, 1);\n  res.json({\n    data: req.query.id\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS8uanM/OGExYiJdLCJuYW1lcyI6WyJnZXROb3RlIiwiaWQiLCJub3RlcyIsImZpbmQiLCJuIiwicGFyc2VJbnQiLCJoYW5kbGVyIiwibmMiLCJnZXQiLCJyZXEiLCJyZXMiLCJub3RlIiwicXVlcnkiLCJzdGF0dXNDb2RlIiwiZW5kIiwianNvbiIsImRhdGEiLCJwYXRjaCIsInN0YXR1cyIsImkiLCJmaW5kSW5kZXgiLCJ1cGRhdGVkIiwiYm9keSIsImRlbGV0ZSIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLE1BQU1BLE9BQU8sR0FBR0MsRUFBRSxJQUFJQyxxREFBSyxDQUFDQyxJQUFOLENBQVdDLENBQUMsSUFBSUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNJLFFBQVEsQ0FBQ0osRUFBRCxDQUFqQyxDQUF0QixDLENBRUE7OztBQUVBLE1BQU1LLE9BQU8sR0FBR0MsbURBQUUsR0FDaEI7QUFEZ0IsQ0FFZkMsR0FGYSxDQUVULENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2pCLFFBQU1DLElBQUksR0FBR1gsT0FBTyxDQUFDUyxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNVLElBQUwsRUFBVztBQUNURCxPQUFHLENBQUNHLFVBQUosQ0FBZSxHQUFmO0FBQ0FILE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0Q7O0FBRURKLEtBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRUw7QUFBUixHQUFUO0FBQ0QsQ0FaYSxFQWFkO0FBYmMsQ0FjYk0sS0FkYSxDQWNQLENBQUNSLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ25CLFFBQU1DLElBQUksR0FBR1gsT0FBTyxDQUFDUyxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUFwQjs7QUFFQSxNQUFJLENBQUNVLElBQUwsRUFBVztBQUNURCxPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYO0FBQ0FSLE9BQUcsQ0FBQ0ksR0FBSjtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUssQ0FBQyxHQUFHakIscURBQUssQ0FBQ2tCLFNBQU4sQ0FBZ0JoQixDQUFDLElBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTSSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0csS0FBSixDQUFVWCxFQUFYLENBQXRDLENBQVY7O0FBQ0EsUUFBTW9CLE9BQU8sbUNBQVFWLElBQVIsR0FBaUJGLEdBQUcsQ0FBQ2EsSUFBckIsQ0FBYjs7QUFFQXBCLHVEQUFLLENBQUNpQixDQUFELENBQUwsR0FBV0UsT0FBWDtBQUNBWCxLQUFHLENBQUNLLElBQUosQ0FBUztBQUFFQyxRQUFJLEVBQUVLO0FBQVIsR0FBVDtBQUNELENBNUJhLEVBNkJkO0FBN0JjLENBOEJiRSxNQTlCYSxDQThCTixDQUFDZCxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNwQixRQUFNQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDRyxLQUFKLENBQVVYLEVBQVgsQ0FBcEI7O0FBRUEsTUFBSSxDQUFDVSxJQUFMLEVBQVc7QUFDVEQsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWDtBQUNBUixPQUFHLENBQUNJLEdBQUo7QUFDQTtBQUNEOztBQUVELFFBQU1LLENBQUMsR0FBR2pCLHFEQUFLLENBQUNrQixTQUFOLENBQWdCaEIsQ0FBQyxJQUFJQSxDQUFDLENBQUNILEVBQUYsS0FBU0ksUUFBUSxDQUFDSSxHQUFHLENBQUNHLEtBQUosQ0FBVVgsRUFBWCxDQUF0QyxDQUFWO0FBQ0FDLHVEQUFLLENBQUNzQixNQUFOLENBQWFMLENBQWIsRUFBZ0IsQ0FBaEI7QUFFQVQsS0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBRUMsUUFBSSxFQUFFUCxHQUFHLENBQUNHLEtBQUosQ0FBVVg7QUFBbEIsR0FBVDtBQUNELENBM0NhLENBQWhCO0FBNkNlSyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ub3RlL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuaW1wb3J0IG5vdGVzIGZyb20gXCIuLi8uLi8uLi9zcmMvZGF0YS9kYXRhXCI7XG5cbi8vIGhhdmUgdG8gcGFyc2VJbnQgaWQgYmMgaXQgaXMgYSBzdHJpbmcgaW4gdGhlIGRiXG5jb25zdCBnZXROb3RlID0gaWQgPT4gbm90ZXMuZmluZChuID0+IG4uaWQgPT09IHBhcnNlSW50KGlkKSk7XG5cbi8vKk5vdGU6IHdlIGFyZSB1c2luZyBxdWVyeSBhbmQgbm90IHRoZSBwYXJhbXNcblxuY29uc3QgaGFuZGxlciA9IG5jKClcbiAgLy8gR0VUIHRoZSBJRCBvZiB0aGUgTk9URVxuICAuZ2V0KChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZCk7XG5cbiAgICBpZiAoIW5vdGUpIHtcbiAgICAgIHJlcy5zdGF0dXNDb2RlKDQwNCk7XG4gICAgICByZXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzLmpzb24oeyBkYXRhOiBub3RlIH0pO1xuICB9KVxuICAvLyBFRElUIEEgTk9URVxuICAucGF0Y2goKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKTtcblxuICAgIGlmICghbm90ZSkge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgICAgcmVzLmVuZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGkgPSBub3Rlcy5maW5kSW5kZXgobiA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKTtcbiAgICBjb25zdCB1cGRhdGVkID0geyAuLi5ub3RlLCAuLi5yZXEuYm9keSB9O1xuXG4gICAgbm90ZXNbaV0gPSB1cGRhdGVkO1xuICAgIHJlcy5qc29uKHsgZGF0YTogdXBkYXRlZCB9KTtcbiAgfSlcbiAgLy8gREVMRVRFSU5HIEEgTk9URVxuICAuZGVsZXRlKChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZCk7XG5cbiAgICBpZiAoIW5vdGUpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICAgIHJlcy5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpID0gbm90ZXMuZmluZEluZGV4KG4gPT4gbi5pZCA9PT0gcGFyc2VJbnQocmVxLnF1ZXJ5LmlkKSk7XG4gICAgbm90ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgcmVzLmpzb24oeyBkYXRhOiByZXEucXVlcnkuaWQgfSk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/note/[id].js\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//  this helps us store data for the api\nconst notes = new Array(15).fill(1).map((_, i) => ({\n  id: Date.now() + i,\n  title: `Note ${i}`\n}));\nmodule.exports = notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsibm90ZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsSUFBZCxDQUFtQixDQUFuQixFQUFzQkMsR0FBdEIsQ0FBMEIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLE1BQVc7QUFDakRDLElBQUUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEtBQWFILENBRGdDO0FBRWpESSxPQUFLLEVBQUcsUUFBT0osQ0FBRTtBQUZnQyxDQUFYLENBQTFCLENBQWQ7QUFLQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxLQUFqQiIsImZpbGUiOiIuL3NyYy9kYXRhL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgdGhpcyBoZWxwcyB1cyBzdG9yZSBkYXRhIGZvciB0aGUgYXBpXG5jb25zdCBub3RlcyA9IG5ldyBBcnJheSgxNSkuZmlsbCgxKS5tYXAoKF8sIGkpID0+ICh7XG4gIGlkOiBEYXRlLm5vdygpICsgaSxcbiAgdGl0bGU6IGBOb3RlICR7aX1gXG59KSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm90ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });