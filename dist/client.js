/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/client.js":
/*!**************************!*\
  !*** ./public/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// client.js\nconst React = __webpack_require__(/*! react */ \"react\");\nconst {\n  hydrate\n} = __webpack_require__(/*! react-dom */ \"react-dom\");\nconst {\n  Provider\n} = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst App = (__webpack_require__(/*! ../src/App */ \"./src/App.js\").App);\nconst configureStore = __webpack_require__(/*! ../src/configureStore */ \"./src/configureStore.js\");\n\n// Get the initial state of the application\nconst initialState = window.__INITIAL_STATE__;\n\n// Create the Redux store with the initial state\nconst store = configureStore(initialState);\n\n// Hydrate the client-side application\nhydrate(React.createElement(Provider, {\n  store: store\n}, React.createElement(App, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://task9/./public/client.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// App.jsx\nconst React = __webpack_require__(/*! react */ \"react\");\nconst {\n  useState,\n  useEffect\n} = __webpack_require__(/*! react */ \"react\");\nconst fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nconst {\n  useSsrEffect\n} = __webpack_require__(/*! @issr/core */ \"@issr/core\");\nconst getTodos = async () => {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/todos');\n    if (!response.ok) {\n      throw new Error('Failed to fetch todos');\n    }\n    return response.json();\n  } catch (error) {\n    console.error('Error fetching todos:', error.message);\n    return []; // Return an empty array if there's an error\n  }\n};\nconst App = () => {\n  const [todos, setTodos] = useState([]);\n\n  // Use useSsrEffect for server-side rendering\n  useSsrEffect(async () => {\n    const fetchedTodos = await getTodos();\n    setTodos(fetchedTodos);\n  }, []); // Empty dependency array ensures the effect runs only once\n\n  // Use useEffect for client-side rendering\n  useEffect(() => {\n    // Fetch todos again if component is mounted on the client side\n    getTodos().then(fetchedTodos => {\n      setTodos(fetchedTodos);\n    });\n  }, []); // Empty dependency array ensures the effect runs only once\n\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"Todo List\"), todos.length === 0 ? /*#__PURE__*/React.createElement(\"p\", null, \"Loading todos...\") : /*#__PURE__*/React.createElement(\"ul\", null, todos.map(todo => /*#__PURE__*/React.createElement(\"li\", {\n    key: todo.id,\n    style: {\n      textDecoration: todo.completed ? 'line-through' : 'none'\n    }\n  }, todo.title))));\n};\nmodule.exports = App;\n\n//# sourceURL=webpack://task9/./src/App.js?");

/***/ }),

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  createStore\n} = __webpack_require__(/*! redux */ \"redux\");\n\n// Define your initial state and root reducer here\nconst initialState = {}; // Define your initial state as needed\nconst rootReducer = (state = initialState, action) => {\n  // Handle your actions here\n  return state;\n};\n\n// Create the Redux store\nconst store = createStore(rootReducer);\nmodule.exports = store;\n\n//# sourceURL=webpack://task9/./src/configureStore.js?");

/***/ }),

/***/ "@issr/core":
/*!*****************************!*\
  !*** external "@issr/core" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@issr/core");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/client.js");
/******/ 	
/******/ })()
;