(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modals_ConfirmationModal_ConfirmationModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Modals/ConfirmationModal/ConfirmationModal */ "./resources/js/components/Modals/ConfirmationModal/ConfirmationModal.vue");
/* harmony import */ var _Modals_AddNewsModal_AddNewsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Modals/AddNewsModal/AddNewsModal */ "./resources/js/components/Modals/AddNewsModal/AddNewsModal.vue");
/* harmony import */ var _utils_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Toast */ "./resources/js/utils/Toast.js");
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
    AddNewsModal: _Modals_AddNewsModal_AddNewsModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    ConfirmationModal: _Modals_ConfirmationModal_ConfirmationModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    closeDeleteModal: function closeDeleteModal() {
      this.deleteModal = false;
    },
    closeHideModal: function closeHideModal() {
      this.hideModal = false;
    },
    closeAddModal: function closeAddModal() {
      this.addModal = false;
      Object(_utils_Toast__WEBPACK_IMPORTED_MODULE_2__["default"])('', 'Новость успешно добавлена!');
    },
    closeEditModal: function closeEditModal() {
      this.editModal = false;
      Object(_utils_Toast__WEBPACK_IMPORTED_MODULE_2__["default"])('', 'Новость успешно изменена!');
    }
  },
  data: function data() {
    return {
      editModal: false,
      addModal: false,
      hideModal: false,
      deleteModal: false,
      headers: [{
        text: 'Наименование',
        value: 'title',
        sortable: false
      }, {
        text: 'Дата создания',
        value: 'date',
        sortable: false
      }, {
        text: 'Действие',
        value: 'action',
        sortable: false
      }],
      items: [{
        title: 'Новая новость',
        date: '21.10.2019',
        isVisible: true
      }, {
        title: 'Новая новость 2',
        date: '21.10.2019',
        isVisible: false
      }],
      search: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Control/News/News.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Control/News/News.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Control_NewsSegment_NewsSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Control/NewsSegment/NewsSegment */ "./resources/js/components/Control/NewsSegment/NewsSegment.vue");
/* harmony import */ var _components_Control_StocksSegment_StocksSegment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Control/StocksSegment/StocksSegment */ "./resources/js/components/Control/StocksSegment/StocksSegment.vue");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions */ "./resources/js/store/actions/index.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NewsSegment: _components_Control_NewsSegment_NewsSegment__WEBPACK_IMPORTED_MODULE_1__["default"],
    StocksSegment: _components_Control_StocksSegment_StocksSegment__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["default"].GET_STOCKS);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      currentSegment: 'stocks'
    };
  },
  methods: {
    switchSegment: function switchSegment() {
      this.currentSegment = this.currentSegment === 'news' ? 'stocks' : 'news';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=template&id=31a51224&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=template&id=31a51224&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
        "div",
        { staticClass: "d-flex justify-content-between" },
        [
          _c(
            "v-btn",
            { staticClass: "button-add", attrs: { color: "primary" } },
            [
              _vm._v("\n            Экспорт данных\n            "),
              _c("v-icon", [_vm._v("mdi-file-excel-box")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary" },
              on: {
                click: function($event) {
                  _vm.addModal = true
                }
              }
            },
            [
              _vm._v("\n            Добавить новость\n            "),
              _c("v-icon", [_vm._v("mdi-plus")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("v-text-field", {
        staticClass: "mb-2",
        attrs: {
          clearable: "",
          "append-icon": "mdi-account-search",
          label: "Поиск",
          "single-line": "",
          "hide-details": ""
        },
        model: {
          value: _vm.search,
          callback: function($$v) {
            _vm.search = $$v
          },
          expression: "search"
        }
      }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          "no-results-text": "Нет результатов",
          "no-data-text": "Нет данных",
          "footer-props": {
            "items-per-page-options": [10, 15, { text: "Все", value: -1 }],
            "items-per-page-text": "Записей на странице"
          },
          headers: _vm.headers,
          search: _vm.search,
          items: _vm.items
        },
        scopedSlots: _vm._u([
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        _vm.hideModal = true
                      }
                    }
                  },
                  [
                    !item.isVisible
                      ? _c("v-icon", [_vm._v("mdi-eye")])
                      : _c("v-icon", [_vm._v("mdi-eye-off")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        _vm.editModal = true
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi-pencil-outline")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        _vm.deleteModal = true
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi-delete")])],
                  1
                )
              ]
            }
          },
          {
            key: "footer.page-text",
            fn: function(ref) {
              var pageStart = ref.pageStart
              var pageStop = ref.pageStop
              var itemsLength = ref.itemsLength
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(pageStart) +
                    "-" +
                    _vm._s(pageStop) +
                    " из " +
                    _vm._s(itemsLength) +
                    "\n        "
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("ConfirmationModal", {
        attrs: {
          message: "Вы действительно хотите удалить выбранную новость?",
          state: _vm.deleteModal,
          "ok-message": "Удалить"
        },
        on: { cancel: _vm.closeDeleteModal, confirm: _vm.closeDeleteModal }
      }),
      _vm._v(" "),
      _c("ConfirmationModal", {
        attrs: {
          "ok-message": "Скрыть",
          message: "Вы действительно хотите скрыть выбранную новость?",
          state: _vm.hideModal
        },
        on: { cancel: _vm.closeHideModal, confirm: _vm.closeHideModal }
      }),
      _vm._v(" "),
      _c("AddNewsModal", {
        attrs: { state: _vm.addModal },
        on: { onClose: _vm.closeAddModal }
      }),
      _vm._v(" "),
      _c("AddNewsModal", {
        attrs: {
          title: "Редактирование новости",
          "ok-button": "Сохранить",
          "edit-mode": true,
          state: _vm.editModal
        },
        on: { onClose: _vm.closeEditModal }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Control/News/News.vue?vue&type=template&id=54193cce&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Control/News/News.vue?vue&type=template&id=54193cce&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c("v-card-title", [_vm._v("\n        Акции\n    ")]),
      _vm._v(" "),
      _c("v-card-text", [
        _c(
          "div",
          { staticClass: "d-flex p-2" },
          [
            _c(
              "v-btn",
              {
                staticStyle: { width: "300px" },
                attrs: {
                  depressed: "",
                  color: _vm.currentSegment === "stocks" ? "primary" : ""
                },
                on: {
                  click: function($event) {
                    _vm.currentSegment = "stocks"
                  }
                }
              },
              [_vm._v("Акции\n            ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-4" },
          [
            _vm.currentSegment === "news"
              ? _c("NewsSegment")
              : _c("StocksSegment")
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Control/NewsSegment/NewsSegment.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Control/NewsSegment/NewsSegment.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsSegment_vue_vue_type_template_id_31a51224_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsSegment.vue?vue&type=template&id=31a51224&scoped=true& */ "./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=template&id=31a51224&scoped=true&");
/* harmony import */ var _NewsSegment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsSegment.vue?vue&type=script&lang=js& */ "./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsSegment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsSegment_vue_vue_type_template_id_31a51224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsSegment_vue_vue_type_template_id_31a51224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31a51224",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Control/NewsSegment/NewsSegment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsSegment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsSegment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsSegment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=template&id=31a51224&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=template&id=31a51224&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsSegment_vue_vue_type_template_id_31a51224_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsSegment.vue?vue&type=template&id=31a51224&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Control/NewsSegment/NewsSegment.vue?vue&type=template&id=31a51224&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsSegment_vue_vue_type_template_id_31a51224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsSegment_vue_vue_type_template_id_31a51224_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Control/News/News.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Control/News/News.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _News_vue_vue_type_template_id_54193cce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.vue?vue&type=template&id=54193cce&scoped=true& */ "./resources/js/views/Control/News/News.vue?vue&type=template&id=54193cce&scoped=true&");
/* harmony import */ var _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News.vue?vue&type=script&lang=js& */ "./resources/js/views/Control/News/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _News_vue_vue_type_template_id_54193cce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _News_vue_vue_type_template_id_54193cce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54193cce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Control/News/News.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Control/News/News.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Control/News/News.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Control/News/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Control/News/News.vue?vue&type=template&id=54193cce&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Control/News/News.vue?vue&type=template&id=54193cce&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_54193cce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=template&id=54193cce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Control/News/News.vue?vue&type=template&id=54193cce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_54193cce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_54193cce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);