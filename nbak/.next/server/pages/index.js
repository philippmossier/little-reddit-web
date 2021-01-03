module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generated/graphql.ts":
/*!**********************************!*\
  !*** ./src/generated/graphql.ts ***!
  \**********************************/
/*! exports provided: RegularErrorFragmentDoc, RegularUserFragmentDoc, RegularUserResponseFragmentDoc, ChangePasswordDocument, useChangePasswordMutation, ForgotPasswordDocument, useForgotPasswordMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, MeDocument, useMeQuery, PostsDocument, usePostsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularErrorFragmentDoc", function() { return RegularErrorFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserFragmentDoc", function() { return RegularUserFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserResponseFragmentDoc", function() { return RegularUserResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDocument", function() { return ChangePasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangePasswordMutation", function() { return useChangePasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordDocument", function() { return ForgotPasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForgotPasswordMutation", function() { return useForgotPasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsDocument", function() { return PostsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostsQuery", function() { return usePostsQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const RegularErrorFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularError on FieldError {
  field
  message
}
    `;
const RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularUser on User {
  id
  username
}
    `;
const RegularUserResponseFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
const ChangePasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
function useChangePasswordMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ChangePasswordDocument);
}
;
const ForgotPasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
function useForgotPasswordMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ForgotPasswordDocument);
}
;
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument);
}
;
const LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Logout {
  logout
}
    `;
function useLogoutMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LogoutDocument);
}
;
const RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RegisterDocument);
}
;
const MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
function useMeQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: MeDocument
  }, options));
}
;
const PostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Posts {
  posts {
    id
    createdAt
    updatedAt
    title
  }
}
    `;
function usePostsQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: PostsDocument
  }, options));
}
;

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-urql */ "next-urql");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.ts");
/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createUrqlClient */ "./src/utils/createUrqlClient.ts");
var _jsxFileName = "/home/phil/code/gh/fullstack/littlereddit/little-reddit-web/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const IndexPage = () => {
  const [{
    data
  }] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["usePostsQuery"])();
  return __jsx("div", {
    className: "flex items-center content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "ab"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_0__["withUrqlClient"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__["default"], {
  ssr: true
})(IndexPage));

/***/ }),

/***/ "./src/utils/betterUpdateQuery.tsx":
/*!*****************************************!*\
  !*** ./src/utils/betterUpdateQuery.tsx ***!
  \*****************************************/
/*! exports provided: betterUpdateQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "betterUpdateQuery", function() { return betterUpdateQuery; });
function betterUpdateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, data => fn(result, data));
}

/***/ }),

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/exchange-graphcache */ "@urql/exchange-graphcache");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.ts");
/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./betterUpdateQuery */ "./src/utils/betterUpdateQuery.tsx");





const createUrqlClient = ssrExchange => ({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__["cacheExchange"])({
    updates: {
      Mutation: {
        login: (_result, args, cache, info) => {
          Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__["betterUpdateQuery"])(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
          }, _result, (result, query) => {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: result.login.user
              };
            }
          });
        },
        register: (_result, args, cache, info) => {
          Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__["betterUpdateQuery"])(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
          }, _result, (result, query) => {
            if (result.register.errors) {
              return query;
            } else {
              return {
                me: result.register.user
              };
            }
          });
        },
        logout: (_result, args, cache, info) => {
          Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_3__["betterUpdateQuery"])(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["MeDocument"]
          }, _result, () => ({
            me: null
          }));
        }
      }
    }
  }), ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__["fetchExchange"]]
});

/* harmony default export */ __webpack_exports__["default"] = (createUrqlClient);

/***/ }),

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@urql/exchange-graphcache");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-urql":
/*!****************************!*\
  !*** external "next-urql" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-urql");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("urql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2JldHRlclVwZGF0ZVF1ZXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY3JlYXRlVXJxbENsaWVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXVycWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJSZWd1bGFyRXJyb3JGcmFnbWVudERvYyIsImdxbCIsIlJlZ3VsYXJVc2VyRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2MiLCJDaGFuZ2VQYXNzd29yZERvY3VtZW50IiwidXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiIsIlVycWwiLCJGb3Jnb3RQYXNzd29yZERvY3VtZW50IiwidXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbiIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiTG9nb3V0RG9jdW1lbnQiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsIlJlZ2lzdGVyRG9jdW1lbnQiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiLCJQb3N0c0RvY3VtZW50IiwidXNlUG9zdHNRdWVyeSIsIkluZGV4UGFnZSIsImRhdGEiLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3IiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsImNhY2hlIiwicWkiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5Iiwic3NyRXhjaGFuZ2UiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9naW4iLCJfcmVzdWx0IiwiYXJncyIsImluZm8iLCJlcnJvcnMiLCJtZSIsInVzZXIiLCJyZWdpc3RlciIsImxvZ291dCIsImZldGNoRXhjaGFuZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFvTk8sTUFBTUEsdUJBQXVCLEdBQUdDLGtEQUFJOzs7OztLQUFwQztBQU1BLE1BQU1DLHNCQUFzQixHQUFHRCxrREFBSTs7Ozs7S0FBbkM7QUFN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QjtBQUdEO0FBM0JPO0FBREg7QUFERyxHQUFELENBRkosRUFtQ1RkLFdBbkNTLEVBb0NUa0Isa0RBcENTO0FBTG1DLENBQXZCLENBQXpCOztBQTZDZTFCLCtFQUFmLEU7Ozs7Ozs7Ozs7O0FDbERBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgdXBkYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICBkZWxldGVQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNoYW5nZVBhc3N3b3JkOiBVc2VyUmVzcG9uc2U7XG4gIGZvcmdvdFBhc3N3b3JkOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ2hhbmdlUGFzc3dvcmRBcmdzID0ge1xuICBuZXdQYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Gb3Jnb3RQYXNzd29yZEFyZ3MgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWVPckVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VybmFtZVBhc3N3b3JkSW5wdXQgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyRXJyb3JGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlckZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICYgUmVndWxhckVycm9yRnJhZ21lbnRcbiAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmV3UGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjaGFuZ2VQYXNzd29yZDogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdmb3Jnb3RQYXNzd29yZCc+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZU9yRW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ291dCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcG9zdHM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICYgUGljazxQb3N0LCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICd0aXRsZSc+XG4gICk+IH1cbik7XG5cbmV4cG9ydCBjb25zdCBSZWd1bGFyRXJyb3JGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyRXJyb3Igb24gRmllbGRFcnJvciB7XG4gIGZpZWxkXG4gIG1lc3NhZ2Vcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclVzZXIgb24gVXNlciB7XG4gIGlkXG4gIHVzZXJuYW1lXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclVzZXJSZXNwb25zZSBvbiBVc2VyUmVzcG9uc2Uge1xuICBlcnJvcnMge1xuICAgIC4uLlJlZ3VsYXJFcnJvclxuICB9XG4gIHVzZXIge1xuICAgIC4uLlJlZ3VsYXJVc2VyXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJFcnJvckZyYWdtZW50RG9jfVxuJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5leHBvcnQgY29uc3QgQ2hhbmdlUGFzc3dvcmREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDaGFuZ2VQYXNzd29yZCgkdG9rZW46IFN0cmluZyEsICRuZXdQYXNzd29yZDogU3RyaW5nISkge1xuICBjaGFuZ2VQYXNzd29yZCh0b2tlbjogJHRva2VuLCBuZXdQYXNzd29yZDogJG5ld1Bhc3N3b3JkKSB7XG4gICAgLi4uUmVndWxhclVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPENoYW5nZVBhc3N3b3JkTXV0YXRpb24sIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+KENoYW5nZVBhc3N3b3JkRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEZvcmdvdFBhc3N3b3JkKCRlbWFpbDogU3RyaW5nISkge1xuICBmb3Jnb3RQYXNzd29yZChlbWFpbDogJGVtYWlsKVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxGb3Jnb3RQYXNzd29yZE11dGF0aW9uLCBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPihGb3Jnb3RQYXNzd29yZERvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkdXNlcm5hbWVPckVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgbG9naW4odXNlcm5hbWVPckVtYWlsOiAkdXNlcm5hbWVPckVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgLi4uUmVndWxhclVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KExvZ2luRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgLi4uUmVndWxhclVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWUge1xuICAgIC4uLlJlZ3VsYXJVc2VyXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkob3B0aW9uczogT21pdDxVcnFsLlVzZVF1ZXJ5QXJnczxNZVF1ZXJ5VmFyaWFibGVzPiwgJ3F1ZXJ5Jz4gPSB7fSkge1xuICByZXR1cm4gVXJxbC51c2VRdWVyeTxNZVF1ZXJ5Pih7IHF1ZXJ5OiBNZURvY3VtZW50LCAuLi5vcHRpb25zIH0pO1xufTtcbmV4cG9ydCBjb25zdCBQb3N0c0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFBvc3RzIHtcbiAgcG9zdHMge1xuICAgIGlkXG4gICAgY3JlYXRlZEF0XG4gICAgdXBkYXRlZEF0XG4gICAgdGl0bGVcbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c1F1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8UG9zdHNRdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8UG9zdHNRdWVyeT4oeyBxdWVyeTogUG9zdHNEb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07IiwiaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tICduZXh0LXVycWwnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcic7XG5pbXBvcnQgeyB1c2VQb3N0c1F1ZXJ5IH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IGNyZWF0ZVVycWxDbGllbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudCc7XG5cbmNvbnN0IEluZGV4UGFnZTogRkMgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgW3sgZGF0YSB9XSA9IHVzZVBvc3RzUXVlcnkoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2PmFiPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7IHNzcjogdHJ1ZSB9KShJbmRleFBhZ2UpO1xuIiwiaW1wb3J0IHsgQ2FjaGUsIFF1ZXJ5SW5wdXQgfSBmcm9tICdAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJldHRlclVwZGF0ZVF1ZXJ5PFJlc3VsdCwgUXVlcnk+KFxuICBjYWNoZTogQ2FjaGUsXG4gIHFpOiBRdWVyeUlucHV0LFxuICByZXN1bHQ6IGFueSxcbiAgZm46IChyOiBSZXN1bHQsIHE6IFF1ZXJ5KSA9PiBRdWVyeSxcbikge1xuICByZXR1cm4gY2FjaGUudXBkYXRlUXVlcnkocWksIChkYXRhKSA9PiBmbihyZXN1bHQsIGRhdGEgYXMgYW55KSBhcyBhbnkpO1xufVxuIiwiaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSB9IGZyb20gJ0B1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGUnO1xuaW1wb3J0IHsgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSB9IGZyb20gJ3VycWwnO1xuaW1wb3J0IHsgTG9naW5NdXRhdGlvbiwgTG9nb3V0TXV0YXRpb24sIE1lRG9jdW1lbnQsIE1lUXVlcnksIFJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gJy4vYmV0dGVyVXBkYXRlUXVlcnknO1xuXG5jb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnkpID0+ICh7XG4gIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJyxcbiAgZmV0Y2hPcHRpb25zOiB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyBhcyBjb25zdCxcbiAgfSxcbiAgZXhjaGFuZ2VzOiBbXG4gICAgZGVkdXBFeGNoYW5nZSxcbiAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihjYWNoZSwgeyBxdWVyeTogTWVEb2N1bWVudCB9LCBfcmVzdWx0LCAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oY2FjaGUsIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSwgX3Jlc3VsdCwgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oY2FjaGUsIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSwgX3Jlc3VsdCwgKCkgPT4gKHtcbiAgICAgICAgICAgICAgbWU6IG51bGwsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgc3NyRXhjaGFuZ2UsXG4gICAgZmV0Y2hFeGNoYW5nZSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVcnFsQ2xpZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXVycWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9