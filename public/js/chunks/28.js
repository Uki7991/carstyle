(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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
var _methods;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: this.$inertia.form({
        name: '',
        phone: ''
      }, {
        bag: 'default',
        resetOnSuccess: true
      }),
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
          1024: {
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
          1024: {
            arrows: false,
            width: '100%'
          }
        }
      },
      advantages: this.$page.advantages,
      services: this.$page.services,
      materialCategories: this.$page.materialCategories,
      tables: this.$page.tables,
      menuActive: false,
      galleries: this.$page.galleries,
      galleryCategories: this.$page.galleryCategories,
      contact: this.$page.contact,
      dialogActive: false,
      coolIndex: null,
      activeDescription: false,
      computedService: {}
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
    },
    filteredCoolImages: function filteredCoolImages() {
      return this.filteredImages.map(function (item) {
        return {
          src: '/storage/large/' + item.image
        };
      });
    }
  },
  methods: (_methods = {
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
      this.lazyLoad();
      window.scrollBy(0, 10);
    },
    lazyLoad: function lazyLoad(active) {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

      if (active === false) {
        active = true;
        setTimeout(function () {
          lazyImages.forEach(function (lazyImage) {
            if (lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {// document.removeEventListener("scroll", lazyLoad);
                // window.removeEventListener("resize", lazyLoad);
                // window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    },
    replaceSvg: function replaceSvg() {
      var _this2 = this;

      document.querySelectorAll('img.svg').forEach(function (item) {
        var imgUrl = item.src;
        var classes = item.getAttribute('class');
        var id = item.getAttribute('id');

        if (imgUrl !== null || imgUrl !== '' || imgUrl !== undefined) {
          if (_this2.route().ziggy.baseUrl !== imgUrl) {
            window.axios.get(imgUrl).then(function (data) {
              var span = document.createElement('span');
              span.innerHTML = data.data;
              var svg = span.firstChild;
              svg.setAttribute('class', classes);
              svg.setAttribute('id', id);
              item.parentNode.replaceChild(svg, item);
            })["catch"](function (error) {});
          }
        }
      });
    },
    openMenu: function openMenu() {
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
      this.menuActive = true;
    },
    closeMenu: function closeMenu() {
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
      this.menuActive = false;
    },
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
    }
  }, _defineProperty(_methods, "activeService", function activeService(service) {
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
  }), _defineProperty(_methods, "submitForm", function submitForm() {
    var _this3 = this;

    this.$inertia.post(this.route('bids.store'), this.form, {
      preserveScroll: true,
      onSuccess: function onSuccess(data) {
        if (_this3.$page.form_post && _this3.$page.form_post.status) {
          _this3.form.reset();

          _this3.dialogActive = true;
        }
      }
    });
  }), _defineProperty(_methods, "clickedImage", function clickedImage(i) {
    console.log(i);
  }), _defineProperty(_methods, "showFullDescription", function showFullDescription(service) {
    this.activeDescription = true;
    this.computedService = service;
  }), _methods),
  filters: {
    translateErrors: function translateErrors(value, type, translate) {
      return value.replace(type, translate);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    if (window.innerWidth > 1024) {
      this.menuActive = true;
    }

    var last_known_scroll_position = 0;
    var contactsTop = 0;
    var contact = this.contact;
    var prevScroll = window.scrollY || document.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.getElementsByClassName('site-header');

    var checkScroll = function checkScroll() {
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
      curScroll = window.scrollY || document.scrollTop;

      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    var toggleHeader = function toggleHeader(direction, curScroll) {
      if (direction === 2 && curScroll > 52) {
        //replace 52 with the height of your header in px
        header[0].classList.add('hide');
        header[1].classList.add('hide');
        prevDirection = direction;
      } else if (direction === 1) {
        header[0].classList.remove('hide');
        header[1].classList.remove('hide');
        prevDirection = direction;
      }
    };

    window.addEventListener('scroll', checkScroll);
    var isSet = false;
    window.addEventListener('scroll', function (e) {
      last_known_scroll_position = window.scrollY;
      contactsTop = document.getElementById('contacts').offsetTop;

      if (last_known_scroll_position > contactsTop - 500) {
        if (!isSet) {
          document.getElementsByTagName('iframe')[0].setAttribute('src', contact.yandex);
          isSet = true;
        }
      }

      document.getElementsByTagName('nav')[0].classList.toggle('xl:bg-white', last_known_scroll_position > document.getElementsByTagName('nav')[0].offsetHeight);
    });
    var active = false;
    document.addEventListener("scroll", function () {
      _this4.lazyLoad(active);

      _this4.replaceSvg();
    });
    window.addEventListener("resize", function () {
      _this4.lazyLoad(active);

      _this4.replaceSvg();

      document.getElementsByTagName('nav')[0].classList.toggle('bg-white', window.innerWidth <= 1280);
    });
    window.addEventListener("orientationchange", function () {
      _this4.lazyLoad(active);

      _this4.replaceSvg();
    });

    var closeMenu = function closeMenu() {
      return _this4.closeMenu();
    };

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (window.innerWidth < 1280) {
          setTimeout(function () {
            closeMenu();
          }, 600);
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    document.getElementsByTagName('nav')[0].classList.toggle('bg-white', window.innerWidth <= 1280);
    this.replaceSvg();
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
  return _c(
    "div",
    { staticClass: "custom-tabs-component lg:flex-row flex-col" },
    [
      _c(
        "ul",
        { staticClass: "custom-tabs-component-tabs lg:w-3/12 w-full" },
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
        {
          staticClass:
            "custom-tabs-component-panels lg:w-9/12 w-full flex justify-end"
        },
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
    ]
  )
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
      _c(
        "vs-dialog",
        {
          attrs: { blur: "" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("p", { staticClass: "text-2xl font-bold" }, [
                    _vm._v("Ожидайте звонка")
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("div", { staticClass: "flex mt-9 justify-center" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "font-semibold py-3 px-9 bg-blue-600 rounded-md text-white",
                        on: {
                          click: function($event) {
                            _vm.dialogActive = false
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Вернуться на сайт\n                "
                        )
                      ]
                    )
                  ])
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.dialogActive,
            callback: function($$v) {
              _vm.dialogActive = $$v
            },
            expression: "dialogActive"
          }
        },
        [
          _vm._v(" "),
          _c("p", { staticClass: "font-medium text-center" }, [
            _vm._v("Наш специалист свяжется с вами "),
            _c("br"),
            _vm._v(" в течение 10 мин.")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "fixed top-0 w-screen xl:hidden right-0 z-20 bg-white site-header"
        },
        [
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
        ]
      ),
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
                "transition duration-300 fixed top-0 w-screen xl:w-full h-screen xl:h-auto z-50 site-header"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "xl:max-w-screen-xl lg:px-4 xl:px-0 py-5 flex pl-4 xl:pl-0 flex-col xl:flex-row h-full justify-between xl:justify-start xl:items-center mx-auto"
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex justify-between items-center" },
                    [
                      _c("div", {}, [
                        _c(
                          "a",
                          {
                            staticClass: "text-logo uppercase",
                            attrs: { href: "#main" }
                          },
                          [_vm._v("Car style")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.menuActive
                        ? _c("img", {
                            staticClass: "block xl:hidden w-12",
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
                        "flex pl-0 xl:pl-9 xl:space-x-9 menu font-bold xl:font-normal text-4xl xl:text-base flex-col xl:flex-row"
                    },
                    [
                      _c(
                        "li",
                        {
                          staticClass:
                            "hover:text-on-hover transition duration-300"
                        },
                        [
                          _c("a", { attrs: { href: "#services" } }, [
                            _vm._v("Услуги")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "hover:text-on-hover transition duration-300"
                        },
                        [
                          _c("a", { attrs: { href: "#materials" } }, [
                            _vm._v("Материалы")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "hover:text-on-hover transition duration-300"
                        },
                        [
                          _c("a", { attrs: { href: "#work" } }, [
                            _vm._v("Наши работы")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "hover:text-on-hover transition duration-300"
                        },
                        [
                          _c("a", { attrs: { href: "#contacts" } }, [
                            _vm._v("Контакты")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass:
                        "flex menu xl:space-x-9 flex-col xl:flex-row xl:items-center xl:ml-auto flex-col-reverse"
                    },
                    [
                      _c("li", {}, [
                        _c(
                          "ul",
                          {
                            staticClass:
                              "flex bottom-0 left-0 mt-5 xl:mt-0 space-x-9"
                          },
                          [
                            _vm.contact.instagram
                              ? _c("li", { staticClass: "group" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "icon",
                                      attrs: {
                                        href: _vm.contact.instagram,
                                        target: "_blank",
                                        rel: "noreferrer"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "svg fill-current text-svg group-hover:text-on-hover transition duration-400 w-6 xl:w-auto",
                                        attrs: {
                                          src: "/assets/icons/instagram.svg",
                                          alt: ""
                                        }
                                      })
                                    ]
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.contact.whatsapp
                              ? _c("li", { staticClass: "group" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "icon",
                                      attrs: {
                                        href: _vm.contact.whatsapp,
                                        target: "_blank",
                                        rel: "noreferrer"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "svg fill-current text-svg group-hover:text-on-hover transition duration-400 w-6 xl:w-auto",
                                        attrs: {
                                          src: "/assets/icons/whatsapp.svg",
                                          alt: ""
                                        }
                                      })
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "ul",
                          {
                            staticClass:
                              "flex flex-col xl:items-center xl:space-x-9 space-y-3 xl:space-y-0 xl:flex-row"
                          },
                          [
                            _vm.contact.address
                              ? _c("li", { staticClass: " group" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "icon flex items-center",
                                      attrs: { href: "#contacts" }
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                                        attrs: {
                                          src: "/assets/icons/map.svg",
                                          alt: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        _vm._l(_vm.contact.address, function(
                                          address
                                        ) {
                                          return _c("p", [
                                            _vm._v(_vm._s(address))
                                          ])
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.contact.email
                              ? _c(
                                  "li",
                                  { staticClass: "lg:hidden block group" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "icon flex items-center",
                                        attrs: {
                                          href: "mailto:" + _vm.contact.email
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                                          attrs: {
                                            src: "/assets/icons/mail.svg",
                                            alt: ""
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(_vm.contact.email))
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.contact.phone
                              ? _c("li", { staticClass: " group" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "icon flex items-center",
                                      attrs: {
                                        href: "tel:" + _vm.contact.phone
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                                        attrs: {
                                          src: "/assets/icons/phone.svg",
                                          alt: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.contact.phone))
                                      ])
                                    ]
                                  )
                                ])
                              : _vm._e()
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
        _c(
          "section",
          {
            staticClass: "first py-32 pt-48 relative px-4",
            attrs: { id: "main" }
          },
          [
            _c("div", {
              staticClass:
                "dots_back w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4"
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "max-w-screen-xl lg:items-center mx-auto flex flex-col lg:flex-row ll:justify-between space-y-9 lg:space-y-0 z-10 relative"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "lg:w-6/12 xl:w-5/12 text-center lg:text-left w-full md:w-9/12"
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass:
                          "flex flex-col md:flex-row items-center bg-white py-3 px-3 rounded-xl md:space-x-4 md:space-y-0 space-y-4",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitForm($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center lg:px-5 lg:py-1 py-5",
                            class: {
                              "border-red-500 border rounded": _vm.form.error(
                                "name"
                              )
                            }
                          },
                          [
                            _c("img", {
                              staticClass:
                                "svg fill-current text-gray-700 w-8 h-7",
                              attrs: {
                                src: "/assets/icons/person.svg",
                                alt: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "relative" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "hidden",
                                  attrs: { for: "name" }
                                },
                                [_vm._v("Name")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name"
                                  }
                                ],
                                staticClass: "w-full ml-2 focus:outline-none",
                                attrs: {
                                  id: "name",
                                  placeholder: "Имя",
                                  type: "text"
                                },
                                domProps: { value: _vm.form.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.error("name")
                                ? _c(
                                    "p",
                                    {
                                      staticClass:
                                        "text-red-500 text-xs absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-full"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("translateErrors")(
                                            _vm.form.error("name"),
                                            "name",
                                            "имя"
                                          )
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center lg:px-5 lg:py-1 py-5",
                            class: {
                              "border-red-500 border rounded": _vm.form.error(
                                "phone"
                              )
                            }
                          },
                          [
                            _c("img", {
                              staticClass:
                                "svg fill-current text-gray-700 w-8 h-7",
                              attrs: {
                                src: "/assets/icons/phone_black.svg",
                                alt: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "relative" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "hidden",
                                  attrs: { for: "phone" }
                                },
                                [_vm._v("Phone")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.phone,
                                    expression: "form.phone"
                                  }
                                ],
                                staticClass: "w-full ml-2 focus:outline-none",
                                attrs: {
                                  id: "phone",
                                  placeholder: "Номер",
                                  type: "text"
                                },
                                domProps: { value: _vm.form.phone },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.error("phone")
                                ? _c(
                                    "p",
                                    {
                                      staticClass:
                                        "text-red-500 text-xs absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-full"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("translateErrors")(
                                            _vm.form.error("phone"),
                                            "phone",
                                            "номер"
                                          )
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-svg hover:bg-on-hover transition duration-300 py-3 px-9 mt-4 lg:mt-0 text-white rounded-md"
                          },
                          [_vm._v("Записаться")]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("section", { staticClass: "second py-32 relative" }, [
          _c("div", {
            staticClass:
              "dots_back w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4"
          }),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "max-w-screen-xl px-4 lg:px-0 mx-auto" }, [
            _c(
              "p",
              {
                staticClass:
                  "text-indigo-600 text-lg mb-3 font-semibold text-center"
              },
              [_vm._v("Почему мы?")]
            ),
            _vm._v(" "),
            _vm._m(4),
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
                    staticClass:
                      "lg:w-4/12 md:w-4/12 sm:w-6/12 w-full text-center py-7 px-6",
                    attrs: { "data-id": i }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "rounded-2xl bg-secondary border-2 border-white shadow-advantage w-21 h-21 flex items-center mx-auto justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "lazy svg fill-current text-svg",
                          attrs: {
                            src: "",
                            "data-src": "/storage/files/" + item.image,
                            alt: ""
                          }
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
                    _c("p", [_vm._v(_vm._s(item.description))])
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
              { staticClass: "max-w-screen-xl px-4 lg:px-0 mx-auto" },
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
                _c("transition", { attrs: { duration: "200", name: "fade" } }, [
                  !_vm.activeTab
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "grid lg:grid-cols-4 mt-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
                        },
                        _vm._l(_vm.services, function(item, i) {
                          return _c(
                            "div",
                            {
                              key: i,
                              staticClass: "w-full group my-6 cursor-pointer",
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
                                    "font-semibold group-hover:text-on-hover transition duration-300 text-lg text-gray-800"
                                },
                                [_vm._v(_vm._s(item.title))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-sm text-gray-600 italic" },
                                [_vm._v(_vm._s(item.description))]
                              ),
                              _vm._v(" "),
                              _c("img", {
                                staticClass:
                                  "mt-4 lazy rounded-2xl h-48 w-full object-cover",
                                attrs: {
                                  src: "",
                                  "data-src": "/storage/large/" + item.image,
                                  alt: ""
                                }
                              })
                            ]
                          )
                        }),
                        0
                      )
                    : _c(
                        "div",
                        {
                          staticClass:
                            "custom-tabs-component lg:flex-row flex-col"
                        },
                        [
                          _c(
                            "ul",
                            {
                              staticClass:
                                "custom-tabs-component-tabs lg:w-3/12 pr-4 w-full divide-y divide-gray-200"
                            },
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
                                  service.full_description
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "italic hover:line-through cursor-pointer text-description",
                                          on: {
                                            click: function($event) {
                                              return _vm.showFullDescription(
                                                service
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(service.description))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "transition",
                                    {
                                      attrs: { name: "fade", duration: "200" }
                                    },
                                    [
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
                                          ],
                                          staticClass: "mt-4"
                                        },
                                        _vm._l(
                                          _vm.tables.filter(function(item) {
                                            return (
                                              item.service_id === service.id
                                            )
                                          }),
                                          function(table) {
                                            return _c(
                                              "li",
                                              {
                                                key: table.id,
                                                staticClass:
                                                  "flex py-1-5 group",
                                                class: {
                                                  "is-active": table.active
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "hidden group-hover:flex"
                                                  },
                                                  [_vm._v("— ")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "group-hover:text-indigo-500",
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.showPanel(
                                                          table
                                                        )
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
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dialog",
                            {
                              attrs: {
                                scroll: "",
                                "overflow-hidden": "",
                                "full-screen": ""
                              },
                              model: {
                                value: _vm.activeDescription,
                                callback: function($$v) {
                                  _vm.activeDescription = $$v
                                },
                                expression: "activeDescription"
                              }
                            },
                            [
                              _c("div", { staticClass: "lg:py-16 lg:px-32" }, [
                                _c(
                                  "p",
                                  { staticClass: "font-bold text-4xl mb-10" },
                                  [_vm._v(_vm._s(_vm.computedService.title))]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "ql",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.computedService.full_description
                                    )
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-tabs-component-panels bg-white p-3 rounded-2xl lg:w-9/12 w-full justify-end"
                            },
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
                                  attrs: {
                                    "aria-hidden": "true",
                                    role: "tabpanel"
                                  }
                                },
                                [
                                  _c("vs-table", {
                                    staticClass: "custom",
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "thead",
                                          fn: function() {
                                            return [
                                              _c(
                                                "vs-tr",
                                                _vm._l(table.headings, function(
                                                  heading
                                                ) {
                                                  return _c(
                                                    "vs-th",
                                                    { key: heading.id },
                                                    [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            heading.title
                                                          ) +
                                                          "\n                                            "
                                                      )
                                                    ]
                                                  )
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
                                                  _vm._l(
                                                    table.headings.length,
                                                    function(jtem, j) {
                                                      return _c(
                                                        "vs-td",
                                                        { key: j },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "block lg:flex"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "w-2/3"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                        " +
                                                                      _vm._s(
                                                                        table
                                                                          .headings[
                                                                          j
                                                                        ]
                                                                          .values[
                                                                          i
                                                                        ].value
                                                                      ) +
                                                                      "\n                                                    "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              table.headings[j]
                                                                .values[i]
                                                                .description
                                                                ? _c(
                                                                    "vs-tooltip",
                                                                    {
                                                                      staticClass:
                                                                        "group",
                                                                      attrs: {
                                                                        circle:
                                                                          ""
                                                                      },
                                                                      scopedSlots: _vm._u(
                                                                        [
                                                                          {
                                                                            key:
                                                                              "tooltip",
                                                                            fn: function() {
                                                                              return [
                                                                                _vm._v(
                                                                                  "\n                                                            " +
                                                                                    _vm._s(
                                                                                      table
                                                                                        .headings[
                                                                                        j
                                                                                      ]
                                                                                        .values[
                                                                                        i
                                                                                      ]
                                                                                        .description
                                                                                    ) +
                                                                                    "\n                                                        "
                                                                                )
                                                                              ]
                                                                            },
                                                                            proxy: true
                                                                          }
                                                                        ],
                                                                        null,
                                                                        true
                                                                      )
                                                                    },
                                                                    [
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "bx bxs-info-circle bx-xs text-non-active group-hover:text-svg"
                                                                      })
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
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
              { staticClass: "max-w-screen-xl px-4 lg:px-0 mx-auto" },
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
                      staticClass: "py-5 justify-between"
                    },
                    [
                      _c("div", { staticClass: "w-full mb-7" }, [
                        _c("p", { staticClass: "text-xl font-bold" }, [
                          _vm._v(_vm._s(materialCategory.title))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "grid lg:grid-cols-2 grid-cols-1 gap-4"
                        },
                        _vm._l(materialCategory.materials, function(material) {
                          return _c(
                            "div",
                            { key: material.id, staticClass: "w-full mb-4" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "bg-white rounded-3xl py-5 px-6"
                                },
                                [
                                  _c("img", {
                                    staticClass: "h-12 object-cover lazy",
                                    attrs: {
                                      src: "",
                                      "data-src":
                                        "/storage/small/" + material.image,
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
                        }),
                        0
                      )
                    ]
                  )
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("section", { staticClass: "fifth py-32", attrs: { id: "work" } }, [
          _c(
            "div",
            { staticClass: "max-w-screen-xl px-4 lg:px-0 mx-auto" },
            [
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
                    "flex flex-col lg:flex-row lg:items-end justify-between"
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
                        "block catogories_slide justify-center relative mb-5 lg:w-5/12 w-full"
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
                          return _c(
                            "splide-slide",
                            { key: category.id, staticClass: "group" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-xs group-hover:text-indigo-600 text-non-active absolute -top-1 -right-2",
                                  class: { active: category.active }
                                },
                                [_vm._v(_vm._s(category.galleries_count))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "cursor-pointer group-hover:text-on-hover text-non-active transition duration-300 py-1",
                                  class: {
                                    "active font-bold": category.active
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.galleryCategoriesActive(
                                        category
                                      )
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(category.title))]
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("cool-light-box", {
                attrs: {
                  items: _vm.filteredCoolImages,
                  index: _vm.coolIndex,
                  effect: "fade"
                },
                on: {
                  close: function($event) {
                    _vm.coolIndex = null
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "hidden lg:grid grid-cols-3 mt-5 grid-rows-2 gap-8 h-80"
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
                                "border border-indigo-100 text-gray-600 text-sm bg-gray-200 hover:bg-indigo-400 hover:text-white transition duration-300 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5",
                              on: {
                                click: function($event) {
                                  _vm.coolIndex = i
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Смотреть все\n                        "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("img", {
                        staticClass:
                          "w-full h-full object-cover rounded-2xl lazy cursor-pointer hover:shadow-xl hover:-translate-y-2 transition duration-300",
                        class: { transform: i !== 3 },
                        attrs: {
                          src: "",
                          "data-src": "/storage/medium/" + gallery.image,
                          alt: ""
                        },
                        on: {
                          click: function($event) {
                            _vm.coolIndex = i
                          }
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
                { staticClass: "lg:hidden mt-5" },
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
                      return _c(
                        "splide-slide",
                        {
                          key: image.id,
                          staticClass: "rounded-2xl",
                          nativeOn: {
                            click: function($event) {
                              _vm.coolIndex = i
                            }
                          }
                        },
                        [
                          i === 4 ||
                          _vm.filteredImages.slice(0, 5).length - 1 === i
                            ? _c("div", {
                                staticClass:
                                  "h-full w-full absolute rounded-2xl bg-gray-100 opacity-75"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          i === 4 ||
                          _vm.filteredImages.slice(0, 5).length - 1 === i
                            ? _c("div", {
                                staticClass:
                                  "h-full w-full absolute rounded-2xl backdrop-blur-3"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          i === 4 ||
                          _vm.filteredImages.slice(0, 5).length - 1 === i
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "border border-indigo-100 text-gray-600 text-sm bg-gray-200 hover:bg-indigo-400 hover:text-white transition duration-300 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5",
                                  on: {
                                    click: function($event) {
                                      _vm.coolIndex = i
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Смотреть все\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("img", {
                            staticClass:
                              "cursor-pointer hover:shadow-xl hover:-translate-y-2 transition duration-300",
                            class: { transform: i !== 4 },
                            attrs: {
                              src: "/storage/small/" + image.image,
                              alt: ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.clickedImage(i)
                              }
                            }
                          })
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
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
                  "max-w-screen-xl px-4 lg:px-0 mx-auto bg-transparent z-10 relative"
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
                    staticClass:
                      "font-bold mb-5 lg:text-4xl text-2xl leading-tight"
                  },
                  [_vm._v("Как нас найти?")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-col space-y-5 py-5" }, [
                  _vm.contact.address
                    ? _c(
                        "a",
                        {
                          staticClass: "flex items-center group",
                          attrs: { href: "#contacts" }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                            attrs: { src: "/assets/icons/map.svg", alt: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            _vm._l(_vm.contact.address, function(address) {
                              return _c("p", [_vm._v(_vm._s(address))])
                            }),
                            0
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.contact.email
                    ? _c(
                        "a",
                        {
                          staticClass: "flex items-center group",
                          attrs: { href: "mailto:" + _vm.contact.email }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                            attrs: { src: "/assets/icons/mail.svg", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.contact.email))])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.contact.phone
                    ? _c(
                        "a",
                        {
                          staticClass: "flex items-center group",
                          attrs: { href: "tel:" + _vm.contact.phone }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                            attrs: { src: "/assets/icons/phone.svg", alt: "" }
                          }),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.contact.phone))])
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex space-x-5 py-5" }, [
                  _vm.contact.instagram
                    ? _c(
                        "a",
                        {
                          staticClass: "group",
                          attrs: {
                            href: _vm.contact.instagram,
                            target: "_blank",
                            rel: "noreferrer"
                          }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "lg:w-9 w-6 cursor-pointer svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                            attrs: {
                              src: "/assets/icons/instagram.svg",
                              alt: ""
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.contact.whatsapp
                    ? _c(
                        "a",
                        {
                          staticClass: "group",
                          attrs: {
                            href: _vm.contact.whatsapp,
                            target: "_blank",
                            rel: "noreferrer"
                          }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "lg:w-9 w-6 cursor-pointer svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                            attrs: {
                              src: "/assets/icons/whatsapp.svg",
                              alt: ""
                            }
                          })
                        ]
                      )
                    : _vm._e()
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(5)
          ]
        ),
        _vm._v(" "),
        _c("footer", { staticClass: "pb-12 pt-24" }, [
          _c(
            "div",
            {
              staticClass:
                "max-w-screen-xl flex lg:block justify-between items-center px-4 lg:px-4 mx-auto"
            },
            [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-col lg:flex-row items-center justify-between"
                },
                [
                  _c("div", { staticClass: "flex lg:space-x-9 items-center" }, [
                    _c(
                      "a",
                      {
                        staticClass: " hidden lg:block group",
                        attrs: { href: _vm.contact.instagram }
                      },
                      [
                        _c("img", {
                          staticClass:
                            "svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                          attrs: { src: "/assets/icons/instagram.svg", alt: "" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: " hidden lg:block group",
                        attrs: { href: _vm.contact.whatsapp }
                      },
                      [
                        _c("img", {
                          staticClass:
                            "svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                          attrs: { src: "/assets/icons/whatsapp.svg", alt: "" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "flex items-center space-x-1 group",
                        attrs: { href: "tel:" + _vm.contact.phone }
                      },
                      [
                        _c("img", {
                          staticClass:
                            "svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                          attrs: { src: "/assets/icons/phone.svg", alt: "" }
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.contact.phone))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          " space-x-1 hidden lg:flex items-center group",
                        attrs: { href: "#contacts" }
                      },
                      [
                        _c("img", {
                          staticClass:
                            "svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                          attrs: { src: "/assets/icons/map.svg", alt: "" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          _vm._l(_vm.contact.address, function(address) {
                            return _c("p", [_vm._v(_vm._s(address))])
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          " space-x-1 hidden lg:flex items-center group",
                        attrs: { href: "mailto:" + _vm.contact.email }
                      },
                      [
                        _c("img", {
                          staticClass:
                            "svg fill-current text-svg group-hover:text-on-hover transition duration-400",
                          attrs: { src: "/assets/icons/mail.svg", alt: "" }
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.contact.email))])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "hidden xl:block lg:text-sm text-xs text-center text-gray-500"
                    },
                    [
                      _vm._v(
                        "Все права защищены —\n                        2020 © CAR STYLE"
                      )
                    ]
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
                "lg:text-sm mt-4 xl:hidden text-xs text-center text-gray-500"
            },
            [_vm._v("Все права защищены — 2020 © CAR\n                STYLE")]
          )
        ])
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
    return _c(
      "p",
      {
        staticClass:
          "font-bold md:text-5xl lg:text-6xl text-4xl mb-5 leading-tight"
      },
      [_vm._v("Тонирование "), _c("br"), _vm._v(" и оклейка авто")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "leading-6 text-sm md:text-base mb-10" }, [
      _vm._v(
        "Качественное тонирование и оклеивание вашего\n                        автомобиля "
      ),
      _vm._v(
        " нашими специалистами.\n                        Высококачественные пленки от "
      ),
      _vm._v(
        " проверенных поставщиков с гарантией выполненной\n                        работы 3 "
      ),
      _vm._v(" года.\n                        Записывайтесь и получайте "),
      _c("span", { staticClass: "font-bold text-indigo-600" }, [
        _vm._v("скидку 5%")
      ]),
      _vm._v(".")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lg:w-6/12 w-full" }, [
      _c("img", {
        staticClass: "max-w-full ll:max-w-none",
        attrs: { src: "/assets/images/car.png", alt: "" }
      })
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
        _vm._v("Более 2000 автомобилей было\n                    "),
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
    return _c("div", { staticClass: "flex lg:absolute top-0 min-w-full" }, [
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
              title: "yandex_map",
              src: "",
              width: "100%",
              frameborder: "1",
              allowfullscreen: "true"
            }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex  items-center lg:mb-5" }, [
      _c("div", { staticClass: "lg:mr-9" }, [
        _c(
          "a",
          { staticClass: "text-logo uppercase", attrs: { href: "#main" } },
          [
            _vm._v(
              "\n                            Car style\n                        "
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "menu lg:space-x-9 hidden lg:flex" }, [
        _c(
          "li",
          { staticClass: "hover:text-on-hover transition duration-300" },
          [_c("a", { attrs: { href: "#services" } }, [_vm._v("Услуги")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "hover:text-on-hover transition duration-300" },
          [_c("a", { attrs: { href: "#materials" } }, [_vm._v("Материалы")])]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "hover:text-on-hover transition duration-300" },
          [_c("a", { attrs: { href: "#work" } }, [_vm._v("Наши работы")])]
        )
      ])
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