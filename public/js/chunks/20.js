(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AdminComponentDiv.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AdminComponentDiv.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Buttons/BackTo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Buttons/BackTo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['href', 'title']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/AppLayout */ "./resources/js/Layouts/AppLayout.vue");
/* harmony import */ var _Components_Buttons_BackTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Buttons/BackTo */ "./resources/js/Components/Buttons/BackTo.vue");
/* harmony import */ var _Components_AdminComponentDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/AdminComponentDiv */ "./resources/js/Components/AdminComponentDiv.vue");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-filepond */ "./node_modules/vue-filepond/dist/vue-filepond.js");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_filepond__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! filepond/dist/filepond.min.css */ "./node_modules/filepond/dist/filepond.min.css");
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css");
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_8__);
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






 // Import image preview plugin styles

 // Import image preview and file type validation plugins
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';


var FilePond = vue_filepond__WEBPACK_IMPORTED_MODULE_3___default()(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_8___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppLayout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    BackTo: _Components_Buttons_BackTo__WEBPACK_IMPORTED_MODULE_1__["default"],
    FilePond: FilePond,
    AdminComponentDiv: _Components_AdminComponentDiv__WEBPACK_IMPORTED_MODULE_2__["default"],
    MultiSelect: vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      values: this.$page.categories,
      file: '/storage/medium/' + this.$page.material.image,
      form: this.$inertia.form({
        title: this.$page.material.title,
        image: this.$page.material.image,
        category: this.$page.material.category,
        properties: this.$page.material.properties
      }, {
        bag: 'default',
        resetOnSuccess: true
      })
    };
  },
  methods: {
    create: function create() {
      this.form.put(route('materials.update', [this.$page.material.id]));
    },
    processFile: function processFile(e) {
      this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
    },
    addTag: function addTag(newTag) {
      newTag = {
        title: newTag
      };
      this.values.push(newTag);
      this.form.category = newTag;
    },
    selecting: function selecting(val, id) {
      this.form.category = val.title;
    },
    addProperty: function addProperty() {
      this.form.properties.push({
        title: '',
        value: ''
      });
    },
    removeProperty: function removeProperty(index) {
      this.form.properties.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "rounded-2xl w-full bg-white py-6 px-4" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Buttons/BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Buttons/BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true& ***!
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
    {
      staticClass: "group cursor-pointer",
      on: {
        click: function($event) {
          return _vm.link(_vm.href)
        }
      }
    },
    [
      _c("i", {
        staticClass:
          "bx bx-left-arrow-alt transform group-hover:-translate-x-2 transition ease-out duration-300"
      }),
      _vm._v(" " + _vm._s(_vm.title))
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=template&id=ddc51094&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=template&id=ddc51094&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("app-layout", [
    _c(
      "div",
      { staticClass: "container mx-auto py-16" },
      [
        _c(
          "div",
          { staticClass: "mb-5" },
          [
            _c("back-to", {
              attrs: { href: _vm.route("materials.index"), title: "Назад" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "admin-component-div",
          { staticClass: "py-12 flex flex-row space-x-5" },
          [
            _c(
              "form",
              {
                staticClass: "space-y-6 w-3/12 conform",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.create($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  [
                    _c("multi-select", {
                      attrs: {
                        "tag-placeholder": "Добавить новую категорию материала",
                        placeholder: "Поиск категорий материала",
                        options: _vm.values,
                        multiple: false,
                        taggable: true,
                        label: "title",
                        value: "title"
                      },
                      on: { tag: _vm.addTag, select: _vm.selecting },
                      model: {
                        value: _vm.form.category,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "category", $$v)
                        },
                        expression: "form.category"
                      }
                    }),
                    _vm._v(" "),
                    _vm.form.error("category")
                      ? _c("p", { staticClass: "text-xs text-red-500" }, [
                          _vm._v(_vm._s(_vm.form.error("category")))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-input", {
                  attrs: { "label-placeholder": "Название", primary: "" },
                  scopedSlots: _vm._u(
                    [
                      _vm.form.error("title")
                        ? {
                            key: "message-danger",
                            fn: function() {
                              return [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.form.error("title")) +
                                    "\n                    "
                                )
                              ]
                            },
                            proxy: true
                          }
                        : null
                    ],
                    null,
                    true
                  ),
                  model: {
                    value: _vm.form.title,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "title", $$v)
                    },
                    expression: "form.title"
                  }
                }),
                _vm._v(" "),
                _c("file-pond", {
                  ref: "pond",
                  attrs: {
                    name: "test",
                    "label-idle": "Drop files here...",
                    server: _vm
                      .route("images.post-image", {
                        dir: "materials",
                        prefix: "material"
                      })
                      .url()
                  },
                  on: {
                    processfile: function($event) {
                      return _vm.processFile($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "w-6/12" }, [
                  _c("img", { attrs: { src: _vm.file, alt: "" } })
                ]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  { attrs: { gradient: "", block: "", success: "" } },
                  [_vm._v("\n                    Обновить\n                ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex flex-col justify-center items-center flex-grow space-y-7"
              },
              [
                _c("h2", [_vm._v("Свойства материала:")]),
                _vm._v(" "),
                _vm._l(_vm.form.properties, function(property, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "flex items-center" },
                    [
                      _c(
                        "div",
                        [
                          _c("vs-input", {
                            staticClass: "mx-4",
                            attrs: {
                              "label-placeholder": "Название",
                              primary: ""
                            },
                            model: {
                              value: property.title,
                              callback: function($$v) {
                                _vm.$set(property, "title", $$v)
                              },
                              expression: "property.title"
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.error("properties." + index + ".title")
                            ? _c("p", { staticClass: "text-xs text-red-500" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.form.error(
                                      "properties." + index + ".title"
                                    )
                                  )
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v("\n                    :\n                    "),
                      _c(
                        "div",
                        [
                          _c("vs-input", {
                            staticClass: "mx-4",
                            attrs: {
                              "label-placeholder": "Значение",
                              primary: ""
                            },
                            model: {
                              value: property.value,
                              callback: function($$v) {
                                _vm.$set(property, "value", $$v)
                              },
                              expression: "property.value"
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.error("properties." + index + ".value")
                            ? _c("p", { staticClass: "text-xs text-red-500" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.form.error(
                                      "properties." + index + ".value"
                                    )
                                  )
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: { icon: "", danger: "" },
                          on: {
                            click: function($event) {
                              return _vm.removeProperty(index)
                            }
                          }
                        },
                        [_c("i", { staticClass: "bx bx-x" })]
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex flex-col justify-center" },
                  [
                    _c("vs-button", { on: { click: _vm.addProperty } }, [
                      _c("i", { staticClass: "bx bx-plus" }),
                      _vm._v(" Добавить\n                    ")
                    ]),
                    _vm._v(" "),
                    _vm.form.error("properties")
                      ? _c("p", { staticClass: "text-xs text-red-500" }, [
                          _vm._v(_vm._s(_vm.form.error("properties")))
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ],
              2
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/AdminComponentDiv.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/AdminComponentDiv.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminComponentDiv_vue_vue_type_template_id_866a79f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true& */ "./resources/js/Components/AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true&");
/* harmony import */ var _AdminComponentDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminComponentDiv.vue?vue&type=script&lang=js& */ "./resources/js/Components/AdminComponentDiv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminComponentDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminComponentDiv_vue_vue_type_template_id_866a79f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminComponentDiv_vue_vue_type_template_id_866a79f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "866a79f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/AdminComponentDiv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/AdminComponentDiv.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/AdminComponentDiv.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponentDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminComponentDiv.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AdminComponentDiv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponentDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponentDiv_vue_vue_type_template_id_866a79f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AdminComponentDiv.vue?vue&type=template&id=866a79f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponentDiv_vue_vue_type_template_id_866a79f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminComponentDiv_vue_vue_type_template_id_866a79f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Buttons/BackTo.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/Buttons/BackTo.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackTo_vue_vue_type_template_id_44ac7f3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true& */ "./resources/js/Components/Buttons/BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true&");
/* harmony import */ var _BackTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackTo.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/BackTo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackTo_vue_vue_type_template_id_44ac7f3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackTo_vue_vue_type_template_id_44ac7f3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44ac7f3b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/BackTo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/BackTo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Buttons/BackTo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackTo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Buttons/BackTo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTo_vue_vue_type_template_id_44ac7f3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Buttons/BackTo.vue?vue&type=template&id=44ac7f3b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTo_vue_vue_type_template_id_44ac7f3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTo_vue_vue_type_template_id_44ac7f3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/Materials/Edit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Admin/Materials/Edit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_ddc51094_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=ddc51094&scoped=true& */ "./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=template&id=ddc51094&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_ddc51094_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_ddc51094_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ddc51094",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Materials/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=template&id=ddc51094&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=template&id=ddc51094&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_ddc51094_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=ddc51094&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Materials/Edit.vue?vue&type=template&id=ddc51094&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_ddc51094_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_ddc51094_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);