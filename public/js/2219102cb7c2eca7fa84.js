(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Economy/Stats/Stats.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chart_BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chart/BarChart */ "./resources/js/views/Economy/Chart/BarChart.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/Toast */ "./resources/js/utils/Toast.js");
/* harmony import */ var _api_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/stats */ "./resources/js/api/stats/index.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BarChart: _Chart_BarChart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.months = this.parseMonths();
  },
  data: function data() {
    return {
      dataCollection: null,
      dateStart: null,
      dateEnd: null,
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      months: [{
        name: 'Текущий месяц'
      }, {
        name: 'Сентябрь, 2019'
      }, {
        name: 'Август, 2019'
      }, {
        name: 'Июль, 2019'
      }, {
        name: 'Июнь, 2019'
      }, {
        name: 'Май, 2019'
      }, {
        name: 'Апрель, 2019'
      }]
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dateStart, dateEnd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this.dateStart || !_this.dateEnd)) {
                  _context.next = 3;
                  break;
                }

                Object(_utils_Toast__WEBPACK_IMPORTED_MODULE_3__["default"])('Выберите дату', '', 'warning');
                return _context.abrupt("return");

              case 3:
                dateStart = moment__WEBPACK_IMPORTED_MODULE_2___default()(_this.dateStart).format('YYYY-MM-DD');
                dateEnd = moment__WEBPACK_IMPORTED_MODULE_2___default()(_this.dateEnd).endOf('month').format('YYYY-MM-DD');

                if (!(moment__WEBPACK_IMPORTED_MODULE_2___default()(dateEnd).diff(dateStart) < 1)) {
                  _context.next = 8;
                  break;
                }

                Object(_utils_Toast__WEBPACK_IMPORTED_MODULE_3__["default"])('Некорректный промежуток дат', '', 'warning');
                return _context.abrupt("return");

              case 8:
                _context.next = 10;
                return Object(_api_stats__WEBPACK_IMPORTED_MODULE_4__["getStats"])({
                  dateStart: dateStart,
                  dateEnd: dateEnd
                });

              case 10:
                response = _context.sent;
                _this.dataCollection = {
                  checkoutCash: {
                    labels: _toConsumableArray(response.checkoutCash.map(function (c) {
                      return c.key;
                    })),
                    datasets: [{
                      label: 'Пополнений в кассе',
                      data: _toConsumableArray(response.checkoutCash.map(function (c) {
                        return c.sum;
                      })),
                      backgroundColor: Array(response.checkoutCash.length).fill('rgba(54, 162, 235, 0.2)'),
                      borderColor: Array(response.checkoutCash.length).fill('rgba(54, 162, 235, 1)'),
                      borderWidth: 1
                    }]
                  },
                  debts: {
                    labels: _toConsumableArray(response.debts.map(function (c) {
                      return c.key;
                    })),
                    datasets: [{
                      label: 'Денег в минусе',
                      data: _toConsumableArray(response.debts.map(function (c) {
                        return c.debt;
                      })),
                      backgroundColor: Array(response.debts.length).fill('rgba(54, 162, 235, 0.2)'),
                      borderColor: Array(response.debts.length).fill('rgba(54, 162, 235, 1)'),
                      borderWidth: 1
                    }]
                  },
                  increases: {
                    labels: _toConsumableArray(response.increases.map(function (c) {
                      return c.key;
                    })),
                    datasets: [{
                      label: 'Прирост абонентской платы',
                      data: _toConsumableArray(response.increases.map(function (c) {
                        return c.sum;
                      })),
                      backgroundColor: Array(response.increases.length).fill('rgba(54, 162, 235, 0.2)'),
                      borderColor: Array(response.increases.length).fill('rgba(54, 162, 235, 1)'),
                      borderWidth: 1
                    }]
                  },
                  decreases: {
                    labels: _toConsumableArray(response.decreases.map(function (c) {
                      return c.key;
                    })),
                    datasets: [{
                      label: 'Потери абонентской платы',
                      data: _toConsumableArray(response.decreases.map(function (c) {
                        return c.sum;
                      })),
                      backgroundColor: Array(response.decreases.length).fill('rgba(54, 162, 235, 0.2)'),
                      borderColor: Array(response.decreases.length).fill('rgba(54, 162, 235, 1)'),
                      borderWidth: 1
                    }]
                  }
                };

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    parseMonths: function parseMonths() {
      var _this2 = this;

      var dateEnd = moment__WEBPACK_IMPORTED_MODULE_2___default()();
      var dateStart = moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(11, 'months');
      var interim = dateStart.clone();
      var timeValues = [];

      while (dateEnd > interim || interim.format('M') === dateEnd.format('M')) {
        timeValues.push(interim.format('YYYY-MM'));
        interim.add(1, 'month');
      }

      return timeValues.map(function (m) {
        var dates = m.split('-');
        var year = dates[0];

        var month = _this2.monthNames[parseInt(dates[1]) - 1];

        return {
          name: "".concat(month, ", ").concat(year, " \u0433."),
          value: m + '-01'
        };
      }).reverse();
    },
    fillData: function fillData() {
      this.dataCollection = {
        labels: ['Июль, 2019', 'Август, 2019', 'Сентябрь, 2019', 'Октябрь, 2019'],
        datasets: [{
          label: 'Экономические показатели',
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
      };
    },
    getRandomInt: function getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.chart-block[data-v-563e404f] {\n    border: 1px solid #ccc;\n    padding: 20px;\n    max-width: 800px;\n    margin: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=template&id=563e404f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Economy/Stats/Stats.vue?vue&type=template&id=563e404f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _vm._v("\n            Экономическая статистика\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "div",
                { staticClass: "d-flex" },
                [
                  _c("v-select", {
                    staticClass: "mr-5",
                    attrs: {
                      label: "Начало",
                      items: _vm.months,
                      "item-value": "value",
                      "item-text": "name"
                    },
                    model: {
                      value: _vm.dateStart,
                      callback: function($$v) {
                        _vm.dateStart = $$v
                      },
                      expression: "dateStart"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "ml-5",
                    attrs: {
                      label: "Конец",
                      items: _vm.months,
                      "item-value": "value",
                      "item-text": "name"
                    },
                    model: {
                      value: _vm.dateEnd,
                      callback: function($$v) {
                        _vm.dateEnd = $$v
                      },
                      expression: "dateEnd"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", block: "" },
                  on: { click: _vm.getData }
                },
                [_vm._v("Отобразить статистику")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.dataCollection
            ? _c("div", [
                _c(
                  "div",
                  { staticClass: "chart-block" },
                  [
                    _c("h2", { staticClass: "text-center" }, [
                      _vm._v("Пополнений в кассе")
                    ]),
                    _vm._v(" "),
                    _c("BarChart", {
                      attrs: { "chart-data": _vm.dataCollection.checkoutCash }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-block" },
                  [
                    _c("h2", { staticClass: "text-center" }, [
                      _vm._v("Денег в минусе")
                    ]),
                    _vm._v(" "),
                    _c("BarChart", {
                      attrs: { "chart-data": _vm.dataCollection.debts }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-block" },
                  [
                    _c("h2", { staticClass: "text-center" }, [
                      _vm._v("Прирост абонентской платы")
                    ]),
                    _vm._v(" "),
                    _c("BarChart", {
                      attrs: { "chart-data": _vm.dataCollection.increases }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chart-block" },
                  [
                    _c("h2", { staticClass: "text-center" }, [
                      _vm._v("Потери по абонентской плате")
                    ]),
                    _vm._v(" "),
                    _c("BarChart", {
                      attrs: { "chart-data": _vm.dataCollection.decreases }
                    })
                  ],
                  1
                )
              ])
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/stats/index.js":
/*!*****************************************!*\
  !*** ./resources/js/api/stats/index.js ***!
  \*****************************************/
/*! exports provided: getStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStats", function() { return getStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getStats(_x) {
  return _getStats.apply(this, arguments);
}

function _getStats() {
  _getStats = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var dateStart, dateEnd, queryParams, _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dateStart = _ref.dateStart, dateEnd = _ref.dateEnd;
            queryParams = "start_date=".concat(dateStart, "&end_date=").concat(dateEnd);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/stats?".concat(queryParams));

          case 4:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStats.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/views/Economy/Chart/BarChart.js":
/*!******************************************************!*\
  !*** ./resources/js/views/Economy/Chart/BarChart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
});

/***/ }),

/***/ "./resources/js/views/Economy/Stats/Stats.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Economy/Stats/Stats.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stats_vue_vue_type_template_id_563e404f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.vue?vue&type=template&id=563e404f&scoped=true& */ "./resources/js/views/Economy/Stats/Stats.vue?vue&type=template&id=563e404f&scoped=true&");
/* harmony import */ var _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats.vue?vue&type=script&lang=js& */ "./resources/js/views/Economy/Stats/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Stats_vue_vue_type_style_index_0_id_563e404f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css& */ "./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stats_vue_vue_type_template_id_563e404f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stats_vue_vue_type_template_id_563e404f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "563e404f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Economy/Stats/Stats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Economy/Stats/Stats.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Economy/Stats/Stats.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_id_563e404f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=style&index=0&id=563e404f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_id_563e404f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_id_563e404f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_id_563e404f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_id_563e404f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Economy/Stats/Stats.vue?vue&type=template&id=563e404f&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Economy/Stats/Stats.vue?vue&type=template&id=563e404f&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_563e404f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=template&id=563e404f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Economy/Stats/Stats.vue?vue&type=template&id=563e404f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_563e404f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_563e404f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);