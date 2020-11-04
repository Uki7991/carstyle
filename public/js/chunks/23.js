(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CustomTabs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/CustomTabs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: ['tables', 'services'],
  methods: {
    showPanel: function showPanel(table) {
      this.tables = this.tables.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          active: table.id === item.id
        });
      });
      this.services = this.services.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          activeTab: table.service_id === item.id
        });
      });
    },
    activeService: function activeService(service) {
      this.services = this.services.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          activeTab: item.id === service.id
        });
      });
      var table = this.tables.find(function (item) {
        return item.service_id === service.id;
      });
      this.tables = this.tables.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          active: table.id === item.id
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/AppLayout */ "./resources/js/Layouts/AppLayout.vue");
/* harmony import */ var _Components_CustomTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/CustomTabs */ "./resources/js/Components/CustomTabs.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomTabs: _Components_CustomTabs__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppLayout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      slideOptions: {
        // type: 'loop',
        rewind: true,
        arrows: 'slider',
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        gap: 40,
        pagination: false,
        width: '90%',
        padding: {
          left: '1rem',
          right: '1rem'
        },
        breakpoints: {
          640: {
            arrows: false,
            width: '100%'
          }
        }
      },
      imageSlideOptions: {
        // type: 'loop',
        rewind: true,
        arrows: 'slider',
        perPage: 1,
        fixedHeight: '182px',
        gap: 10,
        cover: true,
        perMove: 1,
        pagination: false,
        width: '90%',
        padding: {
          left: '1rem',
          right: '1rem'
        },
        breakpoints: {
          640: {
            arrows: false,
            width: '100%'
          }
        }
      },
      advantages: [{
        icon: 'warranty.svg',
        title: 'Даем гарантию',
        text: 'Получайте гарантию 3 года на проделаную работу'
      }, {
        icon: 'price.svg',
        title: 'Низкие цены',
        text: 'Платите приятные цены за качественную работу'
      }, {
        icon: 'material.svg',
        title: 'Лучшые материалы',
        text: 'Оригинальные пленки Llumar, Suntek, SPECTROLL, KPMF'
      }, {
        icon: 'card.svg',
        title: 'Удобная оплата',
        text: 'Принимаем к оплате карты, а также безналичный расчет'
      }, {
        icon: 'time.svg',
        title: 'Трепетное отношение',
        text: 'Сохраняем заводскую гарантию на автомобиль'
      }, {
        icon: 'wifi.svg',
        title: 'Клиентская зона',
        text: 'Скоротать время ожидания с кофе и бесплатным WI-FI'
      }],
      services: this.$page.services,
      materialCategories: this.$page.materialCategories,
      tables: this.$page.tables,
      menuActive: false,
      galleries: this.$page.galleries,
      galleryCategories: this.$page.galleryCategories
    };
  },
  computed: {
    activeTab: function activeTab() {
      var service = this.services.find(function (item) {
        return item.activeTab === true;
      });
      return service ? service.activeTab : false;
    },
    filteredImages: function filteredImages() {
      var _this = this;

      return this.galleries.filter(function (item) {
        if (_this.galleryCategories.filter(function (cat) {
          var _cat$active;

          return (_cat$active = cat.active) !== null && _cat$active !== void 0 ? _cat$active : cat;
        })[0].id === 0) {
          return item;
        }

        if (item.gallery_category_id === _this.galleryCategories.filter(function (cat) {
          var _cat$active2;

          return (_cat$active2 = cat.active) !== null && _cat$active2 !== void 0 ? _cat$active2 : cat;
        })[0].id) {
          return item;
        }
      });
    }
  },
  methods: {
    activeService: function activeService(service) {
      this.services = this.services.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          activeTab: item.id === service.id
        });
      });
      var table = this.tables.find(function (item) {
        return item.service_id === service.id;
      });
      this.tables = this.tables.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          active: table.id === item.id
        });
      });
    },
    galleryCategoriesActive: function galleryCategoriesActive(category) {
      this.galleryCategories = this.galleryCategories.map(function (cat) {
        cat.active = false;
        return cat;
      });
      category.active = true;
    },
    openMenu: function openMenu() {
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
      this.menuActive = true;
    },
    closeMenu: function closeMenu() {
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
      this.menuActive = false;
    }
  },
  mounted: function mounted() {
    if (window.innerWidth > 1024) {
      this.menuActive = true;
    }

    this.$nextTick(function () {
      document.getElementsByTagName('iframe')[0].setAttribute('src', 'https://yandex.ru/map-widget/v1/-/CCQ~nEg3tD');
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "custom-tabs-component" }, [
    _c(
      "ul",
      { staticClass: "custom-tabs-component-tabs w-3/12" },
      _vm._l(_vm.services, function(service) {
        return _c(
          "li",
          {
            key: service.id,
            staticClass: "custom-tabs-component-tab",
            class: { active: service.activeTab }
          },
          [
            _c(
              "p",
              {
                on: {
                  click: function($event) {
                    return _vm.activeService(service)
                  }
                }
              },
              [_vm._v(_vm._s(service.title))]
            ),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(service.description))]),
            _vm._v(" "),
            _c("transition", { attrs: { name: "fade", duration: "200" } }, [
              _c(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: service.activeTab,
                      expression: "service.activeTab"
                    }
                  ]
                },
                _vm._l(
                  _vm.tables.filter(function(item) {
                    return item.service_id === service.id
                  }),
                  function(table) {
                    return _c(
                      "li",
                      { key: table.id, class: { "is-active": table.active } },
                      [
                        _c(
                          "span",
                          {
                            on: {
                              click: function($event) {
                                return _vm.showPanel(table)
                              }
                            }
                          },
                          [_vm._v(_vm._s(table.title))]
                        )
                      ]
                    )
                  }
                ),
                0
              )
            ])
          ],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "custom-tabs-component-panels w-9/12 flex justify-end" },
      [
        _c(
          "transition-group",
          { attrs: { duration: "200", name: "fade" } },
          _vm._l(_vm.tables, function(table) {
            return _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: table.active,
                    expression: "table.active"
                  }
                ],
                key: table.id,
                staticClass: "custom-tabs-component-panel",
                attrs: { "aria-hidden": "true", role: "tabpanel" }
              },
              [
                _c("vs-table", {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "thead",
                        fn: function() {
                          return [
                            _c(
                              "vs-tr",
                              _vm._l(table.headings, function(heading) {
                                return _c("vs-th", { key: heading.id }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(heading.title) +
                                      "\n                            "
                                  )
                                ])
                              }),
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "tbody",
                        fn: function() {
                          return _vm._l(
                            table.headings[0].values.length,
                            function(item, i) {
                              return _c(
                                "vs-tr",
                                { key: i },
                                _vm._l(table.headings.length, function(
                                  jtem,
                                  j
                                ) {
                                  return _c("vs-td", { key: j }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          table.headings[j].values[i].value
                                        ) +
                                        "\n                            "
                                    )
                                  ])
                                }),
                                1
                              )
                            }
                          )
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            )
          }),
          0
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "fixed top-0 w-screen right-0 z-20 bg-white" }, [
        _c(
          "div",
          { staticClass: "flex justify-between items-center px-4 py-5" },
          [
            _c("div", { staticClass: "text-logo uppercase" }, [
              _vm._v("\n                Car style\n            ")
            ]),
            _vm._v(" "),
            !_vm.menuActive
              ? _c("img", {
                  staticClass: "w-12",
                  attrs: { src: "/assets/icons/menu.svg", alt: "" },
                  on: { click: _vm.openMenu }
                })
              : _vm._e()
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in", duration: "300" } },
        [
          _c(
            "nav",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.menuActive,
                  expression: "menuActive"
                }
              ],
              staticClass:
                "fixed lg:sticky top-0 bg-white w-screen lg:w-full h-screen lg:h-auto z-50"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "container py-5 flex pl-4 lg:pl-0 flex-col lg:flex-row h-full justify-between lg:justify-start lg:items-center mx-auto"
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex justify-between items-center" },
                    [
                      _c("div", { staticClass: "text-logo uppercase" }, [
                        _vm._v(
                          "\n                        Car style\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.menuActive
                        ? _c("img", {
                            staticClass: "block lg:hidden w-12",
                            attrs: { src: "/assets/icons/close.svg", alt: "" },
                            on: { click: _vm.closeMenu }
                          })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass:
                        "flex pl-0 lg:pl-9 lg:space-x-9 menu font-bold lg:font-normal text-4xl lg:text-base flex-col lg:flex-row"
                    },
                    [
                      _c("li", [
                        _c("a", { attrs: { href: "#services" } }, [
                          _vm._v("Услуги")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#materials" } }, [
                          _vm._v("Материалы")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#work" } }, [
                          _vm._v("Наши работы")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#contacts" } }, [
                          _vm._v("Контакты")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass:
                        "flex menu lg:space-x-9 flex-col lg:flex-row lg:items-center lg:ml-auto flex-col-reverse"
                    },
                    [
                      _c("li", {}, [
                        _c(
                          "ul",
                          {
                            staticClass:
                              "flex bottom-0 left-0 mt-5 lg:mt-0 space-x-9"
                          },
                          [
                            _c("li", [
                              _c(
                                "a",
                                { staticClass: "icon", attrs: { href: "" } },
                                [
                                  _c("img", {
                                    staticClass: "w-6 lg:w-auto",
                                    attrs: {
                                      src: "/assets/icons/instagram.svg",
                                      alt: ""
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { staticClass: "icon", attrs: { href: "" } },
                                [
                                  _c("img", {
                                    staticClass: "w-6 lg:w-auto",
                                    attrs: {
                                      src: "/assets/icons/whatsapp.svg",
                                      alt: ""
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "ul",
                          {
                            staticClass:
                              "flex flex-col lg:items-center lg:space-x-9 space-y-3 lg:space-y-0 lg:flex-row"
                          },
                          [
                            _c("li", [
                              _c(
                                "a",
                                {
                                  staticClass: "icon flex",
                                  attrs: { href: "" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      src: "/assets/icons/map.svg",
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v("Краснобогатырская ул., 13, с1 ")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "lg:hidden block" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "icon flex",
                                  attrs: { href: "" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      src: "/assets/icons/mail.svg",
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("carstyle@gmail.com")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                {
                                  staticClass: "icon flex",
                                  attrs: { href: "" }
                                },
                                [
                                  _c("img", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      src: "/assets/icons/phone.svg",
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("+74957556983")])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("main", [
        _vm._m(0),
        _vm._v(" "),
        _c("section", { staticClass: "second py-32 relative" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "container px-4 lg:px-0 mx-auto" }, [
            _c(
              "p",
              {
                staticClass:
                  "text-indigo-600 text-lg mb-3 font-semibold text-center"
              },
              [_vm._v("Почему мы?")]
            ),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex lg:w-9/12 w-full mx-auto flex-wrap justify-center"
              },
              _vm._l(_vm.advantages, function(item, i) {
                return _c(
                  "div",
                  {
                    key: i,
                    staticClass: "lg:w-4/12 w-full text-center py-7 px-6",
                    attrs: { "data-id": i }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "rounded-2xl border-2 border-white shadow-2xl w-21 h-21 flex items-center mx-auto justify-center"
                      },
                      [
                        _c("img", {
                          attrs: { src: "/assets/icons/" + item.icon, alt: "" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "mt-6 mb-5 text-lg font-semibold" },
                      [_vm._v(_vm._s(item.title))]
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(item.text))])
                  ]
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "third py-32", attrs: { id: "services" } },
          [
            _c(
              "div",
              { staticClass: "container px-4 lg:px-0 mx-auto" },
              [
                _c(
                  "p",
                  { staticClass: "text-indigo-600 text-lg mb-3 font-semibold" },
                  [_vm._v("Услуги")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "font-bold mb-5 lg:text-4xl text-2xl leading-tight"
                  },
                  [_vm._v("Каталог наших услуг")]
                ),
                _vm._v(" "),
                _c(
                  "transition",
                  { attrs: { duration: "200", name: "fade" } },
                  [
                    !_vm.activeTab
                      ? _c(
                          "div",
                          { staticClass: "flex flex-wrap" },
                          _vm._l(_vm.services, function(item, i) {
                            return _c(
                              "div",
                              {
                                key: i,
                                staticClass: "lg:w-3/12 w-full px-5 my-6",
                                on: {
                                  click: function($event) {
                                    return _vm.activeService(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "font-semibold text-lg text-gray-800"
                                  },
                                  [_vm._v(_vm._s(item.title))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "text-sm text-gray-600 italic"
                                  },
                                  [_vm._v(_vm._s(item.description))]
                                ),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "mt-4",
                                  attrs: {
                                    src: "/storage/large/" + item.image,
                                    alt: ""
                                  }
                                })
                              ]
                            )
                          }),
                          0
                        )
                      : _c("custom-tabs", {
                          attrs: { services: _vm.services, tables: _vm.tables }
                        })
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "fourth py-32", attrs: { id: "materials" } },
          [
            _c(
              "div",
              { staticClass: "container px-4 lg:px-4 mx-auto" },
              [
                _c(
                  "p",
                  { staticClass: "text-indigo-600 text-lg mb-3 font-semibold" },
                  [_vm._v("Материалы")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "font-bold mb-5 lg:text-4xl text-2xl leading-tight"
                  },
                  [_vm._v("Характеристики используемых брендов")]
                ),
                _vm._v(" "),
                _vm._l(_vm.materialCategories, function(materialCategory) {
                  return _c(
                    "div",
                    {
                      key: materialCategory.id,
                      staticClass: "flex py-5 flex-wrap"
                    },
                    [
                      _c("div", { staticClass: "w-full mb-7" }, [
                        _c("p", { staticClass: "text-xl font-bold" }, [
                          _vm._v(_vm._s(materialCategory.title))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(materialCategory.materials, function(material) {
                        return _c(
                          "div",
                          {
                            key: material.id,
                            staticClass: "lg:w-1/2 w-full px-3 mb-4"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "bg-white rounded-3xl py-5 px-6" },
                              [
                                _c("img", {
                                  staticClass: "h-12 object-cover",
                                  attrs: {
                                    src: "/storage/small/" + material.image,
                                    alt: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-4 text-sm leading-loose divide-y divide-gray-200 lg:divide-y-0"
                                  },
                                  _vm._l(material.properties, function(
                                    property
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: property.id,
                                        staticClass:
                                          "flex flex-col lg:flex-row justify-between"
                                      },
                                      [
                                        _c("p", [
                                          _vm._v(_vm._s(property.title) + ":")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "font-medium" },
                                          [_vm._v(_vm._s(property.value))]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("section", { staticClass: "fifth py-32", attrs: { id: "work" } }, [
          _c("div", { staticClass: "container px-4 lg:px-0 mx-auto" }, [
            _c(
              "p",
              { staticClass: "text-indigo-600 text-lg mb-3 font-semibold" },
              [_vm._v("Наши работы")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex flex-col lg:flex-row items-end justify-between"
              },
              [
                _c(
                  "p",
                  {
                    staticClass:
                      "font-bold mb-5 text-4xl text-2xl leading-tight"
                  },
                  [_vm._v("Фотографии работ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "block justify-center relative mb-5 lg:w-5/12 w-full"
                  },
                  [
                    _c(
                      "splide",
                      {
                        attrs: {
                          options: _vm.slideOptions,
                          slides: _vm.galleryCategories
                        }
                      },
                      _vm._l(_vm.galleryCategories, function(category) {
                        return _c("splide-slide", { key: category.id }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-xs text-indigo-600 absolute -top-1 -right-2"
                            },
                            [_vm._v(_vm._s(category.galleries_count))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "cursor-pointer py-1",
                              class: { "active font-bold": category.active },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.galleryCategoriesActive(category)
                                }
                              }
                            },
                            [_vm._v(_vm._s(category.title))]
                          )
                        ])
                      }),
                      1
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "hidden lg:grid grid-cols-3 grid-rows-2 gap-3 h-80"
              },
              _vm._l(_vm.filteredImages.slice(0, 4), function(gallery, i) {
                return _c(
                  "div",
                  {
                    key: gallery.id,
                    class: {
                      "row-span-2": i === 0 || i === 1,
                      "row-span-1": i === 3 || i === 4,
                      relative: true
                    }
                  },
                  [
                    i === 3 || _vm.filteredImages.slice(0, 4).length - 1 === i
                      ? _c("div", {
                          staticClass:
                            "h-full w-full absolute rounded-2xl bg-gray-100 opacity-75"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    i === 3 || _vm.filteredImages.slice(0, 4).length - 1 === i
                      ? _c("div", {
                          staticClass:
                            "h-full w-full absolute rounded-2xl backdrop-blur-3"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    i === 3 || _vm.filteredImages.slice(0, 4).length - 1 === i
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "border border-indigo-100 text-gray-600 text-sm bg-indigo-200 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5"
                          },
                          [_vm._v("Смотреть все")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "w-full h-full object-cover rounded-2xl",
                      attrs: {
                        src: "/storage/medium/" + gallery.image,
                        alt: ""
                      }
                    })
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "lg:hidden" },
              [
                _c(
                  "splide",
                  {
                    attrs: {
                      options: _vm.imageSlideOptions,
                      slides: _vm.filteredImages.slice(0, 5)
                    }
                  },
                  _vm._l(_vm.filteredImages.slice(0, 5), function(image, i) {
                    return _c("splide-slide", { key: image.id }, [
                      i === 4 || _vm.filteredImages.slice(0, 5).length - 1 === i
                        ? _c("div", {
                            staticClass:
                              "h-full w-full absolute rounded-2xl bg-gray-100 opacity-75"
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      i === 4 || _vm.filteredImages.slice(0, 5).length - 1 === i
                        ? _c("div", {
                            staticClass:
                              "h-full w-full absolute rounded-2xl backdrop-blur-3"
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      i === 4 || _vm.filteredImages.slice(0, 5).length - 1 === i
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "border border-indigo-100 text-gray-600 text-sm bg-indigo-200 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5"
                            },
                            [_vm._v("Смотреть все")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: "/storage/medium/" + image.image,
                          alt: ""
                        }
                      })
                    ])
                  }),
                  1
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4)
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "first py-32 relative px-4" }, [
      _c("div", {
        staticClass:
          "dots_back w-10/12 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "container mx-auto flex flex-col lg:flex-row space-y-9 lg:space-y-0 justify-end z-10 relative"
        },
        [
          _c(
            "div",
            { staticClass: "lg:w-6/12 text-center lg:text-left w-full" },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-bold lg:text-6xl text-4xl mb-5 leading-tight"
                },
                [_vm._v("Тонирование "), _c("br"), _vm._v(" и оклейка авто")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "leading-6 text-sm lg:text-base mb-10" }, [
                _vm._v(
                  "Качественное тонирование и оклеивание  вашего автомобиля "
                ),
                _vm._v(
                  " нашими специалистами.\n                        Высококачественные пленки от "
                ),
                _vm._v(
                  " проверенных поставщиков с гарантией выполненной работы 3 "
                ),
                _vm._v(
                  " года.\n                        Записывайтесь и получайте "
                ),
                _c("span", { staticClass: "font-bold text-indigo-600" }, [
                  _vm._v("скидку 5%")
                ]),
                _vm._v(".")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass:
                    "flex flex-col lg:flex-row items-center bg-white py-3 px-3 rounded-xl"
                },
                [
                  _c("div", { staticClass: "flex lg:px-5 lg:py-0 py-5" }, [
                    _c("img", {
                      attrs: { src: "/assets/icons/person.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "w-full ml-2 focus:outline-none",
                      attrs: { placeholder: "Имя", type: "text" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex lg:px-5 lg:py-0 py-5" }, [
                    _c("img", {
                      attrs: { src: "/assets/icons/phone_black.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "w-full ml-2 focus:outline-none",
                      attrs: { placeholder: "Номер", type: "text" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "bg-blue-600 py-3 px-9 mt-4 lg:mt-0 text-white rounded-md"
                    },
                    [_vm._v("Записаться")]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "lg:w-6/12 w-full" }, [
            _c("img", {
              staticClass: "max-w-full lg:max-w-none",
              attrs: { src: "/assets/images/car.png", alt: "" }
            })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "absolute w-1/2 top-0 left-1/2 transform -translate-x-1/2"
      },
      [
        _c("img", {
          staticClass: "w-full",
          attrs: { src: "/assets/images/styler.png", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "font-bold mb-5 lg:text-4xl text-2xl text-center leading-tight"
      },
      [
        _vm._v("Более 2000 автомобилей было "),
        _c("br"),
        _vm._v(" затонированно и оклеено за время работы "),
        _c("br"),
        _vm._v(" нашей студии.")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "sixth bg-white lg:bg-transparent py-32 relative",
        attrs: { id: "contacts" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "container px-4 lg:px-0 mx-auto bg-transparent z-10 relative"
          },
          [
            _c(
              "p",
              { staticClass: "text-indigo-600 text-lg mb-3 font-semibold" },
              [_vm._v("Контакты")]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "font-bold mb-5 lg:text-4xl text-2xl leading-tight"
              },
              [_vm._v("Как нас найти?")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-col space-y-5 py-5" }, [
              _c("a", { staticClass: "flex", attrs: { href: "" } }, [
                _c("img", {
                  staticClass: "mr-1",
                  attrs: { src: "/assets/icons/map.svg", alt: "" }
                }),
                _vm._v(" "),
                _c("p", [_vm._v("Краснобогатырская ул., 13, с1 ")])
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "flex", attrs: { href: "" } }, [
                _c("img", {
                  staticClass: "mr-1",
                  attrs: { src: "/assets/icons/mail.svg", alt: "" }
                }),
                _vm._v(" "),
                _c("p", [_vm._v("carstyle@gmail.com")])
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "flex", attrs: { href: "" } }, [
                _c("img", {
                  staticClass: "mr-1",
                  attrs: { src: "/assets/icons/phone.svg", alt: "" }
                }),
                _vm._v(" "),
                _c("p", [_vm._v("+74957556983")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex space-x-5 py-5" }, [
              _c("a", { attrs: { href: "" } }, [
                _c("img", {
                  staticClass: "lg:w-9 w-6 cursor-pointer",
                  attrs: { src: "/assets/icons/instagram.svg", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "" } }, [
                _c("img", {
                  staticClass: "lg:w-9 w-6 cursor-pointer",
                  attrs: { src: "/assets/icons/whatsapp.svg", alt: "" }
                })
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex lg:absolute top-0 min-w-full" }, [
          _c("div", {
            staticClass:
              "lg:w-5/12 w-full bg-white lg:block hidden lg:absolute h-202"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "lg:w-8/12 z-10 w-full lg:map-shadow lg:absolute right-0 top-7"
            },
            [
              _c("iframe", {
                staticClass: "lg:h-202 h-72",
                staticStyle: { position: "relative" },
                attrs: {
                  src: "",
                  width: "100%",
                  frameborder: "1",
                  allowfullscreen: "true"
                }
              })
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "pb-12 pt-24" }, [
      _c(
        "div",
        {
          staticClass:
            "container flex lg:block justify-between items-center px-4 lg:px-4 mx-auto"
        },
        [
          _c("div", { staticClass: "flex  items-center lg:mb-5" }, [
            _c("div", { staticClass: "text-logo lg:mr-9 uppercase" }, [
              _vm._v(
                "\n                        Car style\n                    "
              )
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "menu lg:space-x-9 hidden lg:flex" }, [
              _c("li", [
                _c("a", { attrs: { href: "#services" } }, [_vm._v("Услуги")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#materials" } }, [
                  _vm._v("Материалы")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#work" } }, [_vm._v("Наши работы")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex flex-col lg:flex-row items-center justify-between"
            },
            [
              _c("div", { staticClass: "flex lg:space-x-9" }, [
                _c(
                  "a",
                  { staticClass: " hidden lg:block", attrs: { href: "" } },
                  [
                    _c("img", {
                      attrs: { src: "/assets/icons/instagram.svg", alt: "" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: " hidden lg:block", attrs: { href: "" } },
                  [
                    _c("img", {
                      attrs: { src: "/assets/icons/whatsapp.svg", alt: "" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "flex space-x-1", attrs: { href: "" } },
                  [
                    _c("img", {
                      attrs: { src: "/assets/icons/phone.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("+74957556983")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: " space-x-1 hidden lg:flex",
                    attrs: { href: "" }
                  },
                  [
                    _c("img", {
                      attrs: { src: "/assets/icons/map.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Краснобогатырская ул., 13, с1 ")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: " space-x-1 hidden lg:flex",
                    attrs: { href: "" }
                  },
                  [
                    _c("img", {
                      attrs: { src: "/assets/icons/mail.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("carstyle@gmail.com")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "hidden lg:block lg:text-sm text-xs text-center text-gray-500"
                },
                [_vm._v("Все права защищены — 2020 © CAR STYLE")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "lg:text-sm mt-4 lg:hidden text-xs text-center text-gray-500"
        },
        [_vm._v("Все права защищены — 2020 © CAR STYLE")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/CustomTabs.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/CustomTabs.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomTabs_vue_vue_type_template_id_287f3f9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true& */ "./resources/js/Components/CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true&");
/* harmony import */ var _CustomTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomTabs.vue?vue&type=script&lang=js& */ "./resources/js/Components/CustomTabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomTabs_vue_vue_type_template_id_287f3f9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomTabs_vue_vue_type_template_id_287f3f9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "287f3f9a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/CustomTabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/CustomTabs.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/CustomTabs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomTabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CustomTabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTabs_vue_vue_type_template_id_287f3f9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CustomTabs.vue?vue&type=template&id=287f3f9a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTabs_vue_vue_type_template_id_287f3f9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTabs_vue_vue_type_template_id_287f3f9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_317d1a6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=317d1a6e&scoped=true& */ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&scoped=true&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_317d1a6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_317d1a6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "317d1a6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=317d1a6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);