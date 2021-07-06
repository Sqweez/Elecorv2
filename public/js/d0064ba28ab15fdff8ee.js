(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/js/api/connection/index.js":
/*!**********************************************!*\
  !*** ./resources/js/api/connection/index.js ***!
  \**********************************************/
/*! exports provided: getDuplicate, createConnection, disconnectService, connectService, addBalance, makeSale, getHistory, findAccount, addBalances, editConnection, deleteConnection, deleteTransaction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuplicate", function() { return getDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return createConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectService", function() { return disconnectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectService", function() { return connectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBalance", function() { return addBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSale", function() { return makeSale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAccount", function() { return findAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBalances", function() { return addBalances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editConnection", function() { return editConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConnection", function() { return deleteConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTransaction", function() { return deleteTransaction; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getDuplicate(_x) {
  return _getDuplicate.apply(this, arguments);
}

function _getDuplicate() {
  _getDuplicate = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(account) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/connections/duplicates?personal_account=".concat(account));

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
  return _getDuplicate.apply(this, arguments);
}

function createConnection(_x2) {
  return _createConnection.apply(this, arguments);
}

function _createConnection() {
  _createConnection = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(service) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/connections", service);

          case 2:
            response = _context2.sent;
            console.log(response);
            return _context2.abrupt("return", response.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createConnection.apply(this, arguments);
}

function disconnectService(_x3) {
  return _disconnectService.apply(this, arguments);
}

function _disconnectService() {
  _disconnectService = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(service) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/api/connections/disconnect/".concat(service));

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
  return _disconnectService.apply(this, arguments);
}

function connectService(_x4) {
  return _connectService.apply(this, arguments);
}

function _connectService() {
  _connectService = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(service) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/api/connections/connect/".concat(service));

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
  return _connectService.apply(this, arguments);
}

function addBalance(_x5, _x6) {
  return _addBalance.apply(this, arguments);
}

function _addBalance() {
  _addBalance = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(service, balance) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            balance.balance_change = balance.balance;
            delete balance.balance;
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/connections/balance/".concat(service), balance);

          case 4:
            response = _context5.sent;
            return _context5.abrupt("return", response.data);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addBalance.apply(this, arguments);
}

function makeSale(_x7) {
  return _makeSale.apply(this, arguments);
}

function _makeSale() {
  _makeSale = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(sale) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/connections/sale", sale);

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
  return _makeSale.apply(this, arguments);
}

function getHistory(_x8) {
  return _getHistory.apply(this, arguments);
}

function _getHistory() {
  _getHistory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(connection) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/connections/history/".concat(connection));

          case 2:
            response = _context7.sent;
            return _context7.abrupt("return", response.data);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getHistory.apply(this, arguments);
}

function findAccount(_x9) {
  return _findAccount.apply(this, arguments);
}

function _findAccount() {
  _findAccount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(account) {
    var formData, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            formData = new FormData();
            formData.append('account', account);
            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/connections/find", formData);

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
  return _findAccount.apply(this, arguments);
}

function addBalances(_x10) {
  return _addBalances.apply(this, arguments);
}

function _addBalances() {
  _addBalances = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(balances) {
    var formData, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            formData = new FormData();
            formData.append('balances', JSON.stringify(balances));
            _context9.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/connections/balances', formData);

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
  return _addBalances.apply(this, arguments);
}

function editConnection(_x11) {
  return _editConnection.apply(this, arguments);
}

function _editConnection() {
  _editConnection = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(connection) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/api/connections/".concat(connection.id), connection);

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
  return _editConnection.apply(this, arguments);
}

function deleteConnection(_x12) {
  return _deleteConnection.apply(this, arguments);
}

function _deleteConnection() {
  _deleteConnection = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(connection) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/api/connections/".concat(connection), {
              is_deleted: true
            });

          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _deleteConnection.apply(this, arguments);
}

function deleteTransaction(_x13) {
  return _deleteTransaction.apply(this, arguments);
}

function _deleteTransaction() {
  _deleteTransaction = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(transaction) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/clients/transaction/".concat(transaction));

          case 2:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _deleteTransaction.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/api/service/upload.js":
/*!********************************************!*\
  !*** ./resources/js/api/service/upload.js ***!
  \********************************************/
/*! exports provided: default, deleteFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function uploadFile(_x) {
  return _uploadFile.apply(this, arguments);
}

function _uploadFile() {
  _uploadFile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
    var fileName,
        formData,
        config,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileName = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'file';
            formData = new FormData();
            formData.append(fileName, file);
            config = {
              headers: {
                'content-type': 'multipart/form-data'
              }
            };
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/upload', formData, config);

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _uploadFile.apply(this, arguments);
}

function deleteFile(_x2) {
  return _deleteFile.apply(this, arguments);
}

function _deleteFile() {
  _deleteFile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(file) {
    var formData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            formData = new FormData();
            formData.append('file', file);
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/delete', formData);

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _deleteFile.apply(this, arguments);
}

/***/ })

}]);