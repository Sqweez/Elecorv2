(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/api/client/clientApi.js":
/*!**********************************************!*\
  !*** ./resources/js/api/client/clientApi.js ***!
  \**********************************************/
/*! exports provided: getAllClients, createUser, getClientTypes, getClientById, editClient, deleteClient, parseClients, parseBalance, createParsedClients, sendPushToClient, getDebts, getQRCode, getGenders, getLanguages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllClients", function() { return getAllClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientTypes", function() { return getClientTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientById", function() { return getClientById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editClient", function() { return editClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClient", function() { return deleteClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseClients", function() { return parseClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBalance", function() { return parseBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParsedClients", function() { return createParsedClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPushToClient", function() { return sendPushToClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebts", function() { return getDebts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQRCode", function() { return getQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenders", function() { return getGenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguages", function() { return getLanguages; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getAllClients() {
  return _getAllClients.apply(this, arguments);
}

function _getAllClients() {
  _getAllClients = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/clients");

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllClients.apply(this, arguments);
}

function createUser(_x) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(user) {
    var _yield$axios$post, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!user.birth_date) {
              delete user.birth_date;
            }

            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/clients", user);

          case 3:
            _yield$axios$post = _context2.sent;
            data = _yield$axios$post.data;
            return _context2.abrupt("return", data);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createUser.apply(this, arguments);
}

function getClientTypes() {
  return _getClientTypes.apply(this, arguments);
}

function _getClientTypes() {
  _getClientTypes = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/clients/types");

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getClientTypes.apply(this, arguments);
}

function getClientById(_x2) {
  return _getClientById.apply(this, arguments);
}

function _getClientById() {
  _getClientById = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/clients/".concat(id));

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getClientById.apply(this, arguments);
}

function editClient(_x3) {
  return _editClient.apply(this, arguments);
}

function _editClient() {
  _editClient = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(user) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/api/clients/".concat(user.id), user);

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _editClient.apply(this, arguments);
}

function deleteClient(_x4) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/clients/".concat(id));

          case 2:
            response = _context6.sent;
            return _context6.abrupt("return", response.data);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deleteClient.apply(this, arguments);
}

function parseClients(_x5) {
  return _parseClients.apply(this, arguments);
}

function _parseClients() {
  _parseClients = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(file) {
    var formData, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            formData = new FormData();
            formData.append("file", file);
            _context7.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/parse_clients", formData);

          case 4:
            response = _context7.sent;
            return _context7.abrupt("return", response.data);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _parseClients.apply(this, arguments);
}

function parseBalance(_x6) {
  return _parseBalance.apply(this, arguments);
}

function _parseBalance() {
  _parseBalance = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(file) {
    var formData, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            formData = new FormData();
            formData.append("file", file);
            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/parse_balance", formData);

          case 4:
            response = _context8.sent;
            return _context8.abrupt("return", response.data);

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _parseBalance.apply(this, arguments);
}

function createParsedClients(_x7) {
  return _createParsedClients.apply(this, arguments);
}

function _createParsedClients() {
  _createParsedClients = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(clients) {
    var formData, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            formData = new FormData();
            formData.append("clients", JSON.stringify(clients));
            _context9.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/clients/create_clients", formData);

          case 4:
            response = _context9.sent;
            return _context9.abrupt("return", response.data);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _createParsedClients.apply(this, arguments);
}

function sendPushToClient(_x8) {
  return _sendPushToClient.apply(this, arguments);
}

function _sendPushToClient() {
  _sendPushToClient = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(push) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/clients/push", push);

          case 2:
            response = _context10.sent;
            return _context10.abrupt("return", response.data);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _sendPushToClient.apply(this, arguments);
}

function getDebts() {
  return _getDebts.apply(this, arguments);
}

function _getDebts() {
  _getDebts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/clients/debt");

          case 2:
            response = _context11.sent;
            data = response.data;
            return _context11.abrupt("return", data);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _getDebts.apply(this, arguments);
}

function getQRCode(_x9) {
  return _getQRCode.apply(this, arguments);
}

function _getQRCode() {
  _getQRCode = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v2/referral/".concat(id, "/qr"));

          case 2:
            return _context12.abrupt("return", _context12.sent);

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _getQRCode.apply(this, arguments);
}

function getGenders() {
  return _getGenders.apply(this, arguments);
}

function _getGenders() {
  _getGenders = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/clients/genders");

          case 2:
            return _context13.abrupt("return", _context13.sent);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _getGenders.apply(this, arguments);
}

function getLanguages() {
  return _getLanguages.apply(this, arguments);
}

function _getLanguages() {
  _getLanguages = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/clients/languages");

          case 2:
            return _context14.abrupt("return", _context14.sent);

          case 3:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getLanguages.apply(this, arguments);
}

/***/ })

}]);