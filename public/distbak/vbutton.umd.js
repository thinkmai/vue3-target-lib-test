(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("vue"));
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["vbutton"] = factory(require("vue"));
  else
    root["vbutton"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function (__WEBPACK_EXTERNAL_MODULE__8bbf__) {
  //__WEBPACK_EXTERNAL_MODULE__8bbf__ 传递的是vue包
  return (function (modules) { // webpackBootstrap
      var installedModules = {};

      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
        }
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      };
      __webpack_require__.t = function (value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        if (mode & 2 && typeof value != 'string')
          for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ?
          function getDefault() {
            return module['default'];
          } :
          function getModuleExports() {
            return module;
          };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
      };
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "fb15");
    })
    ({
      "6b0d": (function (module, exports, __webpack_require__) {
        "use strict";
        console.log('6b0d---->>%o');
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = (sfc, props) => {
          for (const [key, val] of props) {
            sfc[key] = val;
          }
          return sfc;
        };
      }),
      "8875": (function (module, exports, __webpack_require__) {
        console.log('8875---->>%o');
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function (root, factory) {
          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
              __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        }(typeof self !== 'undefined' ? self : this, function () {
          function getCurrentScript() {
            var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
            if (!descriptor && 'currentScript' in document && document.currentScript) {
              return document.currentScript
            }
            if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
              return document.currentScript
            }
            try {
              throw new Error();
            } catch (err) {
              var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
                ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
                stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
                scriptLocation = (stackDetails && stackDetails[1]) || false,
                line = (stackDetails && stackDetails[2]) || false,
                currentLocation = document.location.href.replace(document.location.hash, ''),
                pageSource,
                inlineScriptSourceRegExp,
                inlineScriptSource,
                scripts = document.getElementsByTagName('script');

              if (scriptLocation === currentLocation) {
                pageSource = document.documentElement.outerHTML;
                inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
                inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
              }

              for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].readyState === 'interactive') {
                  return scripts[i];
                }
                if (scripts[i].src === scriptLocation) {
                  return scripts[i];
                }
                if (
                  scriptLocation === currentLocation &&
                  scripts[i].innerHTML &&
                  scripts[i].innerHTML.trim() === inlineScriptSource
                ) {
                  return scripts[i];
                }
              }
              return null;
            }
          };

          return getCurrentScript
        }));


      }),
      "8bbf": (function (module, exports) {
        console.log('8bbf---->>%o');
        module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

      }),
      "fb15": (function (module, __webpack_exports__, __webpack_require__) {
        console.log('fb15---->>%o');
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        if (typeof window !== 'undefined') {
          var currentScript = window.document.currentScript
          if (true) {
            var getCurrentScript = __webpack_require__("8875")
            currentScript = getCurrentScript()
            if (!('currentScript' in document)) {
              Object.defineProperty(document, 'currentScript', {
                get: getCurrentScript
              })
            }
          }

          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
          if (src) {
            __webpack_require__.p = src[1]
          }
        }
        var setPublicPath = (null);

        var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

        function render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.count) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
            onClick: _cache[0] || (_cache[0] = function () {
              return $setup.onAdd && $setup.onAdd.apply($setup, arguments);
            })
          }, "累加")]);
        }

        var buttonvue_type_script_lang_js = ({
          name: "vbutton",
          data: function data() {
            return {};
          },
          setup: function setup() {
            console.log('external_commonjs_vue_commonjs2_vue_root_Vue_---->>%o', external_commonjs_vue_commonjs2_vue_root_Vue_);
            var count = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
            var onAdd = function onAdd() {
              count.value++;
            };

            return {
              count: count,
              onAdd: onAdd
            };
          }
        });
        var exportHelper = __webpack_require__("6b0d");
        var exportHelper_default = __webpack_require__.n(exportHelper);
        const __exports__ = exportHelper_default()(buttonvue_type_script_lang_js, [
          ['render', render]
        ])
        var packages_button = (__exports__);
        var packages_button_0 = (packages_button);
        var entry_lib = __webpack_exports__["default"] = (packages_button_0);
      })
    });
});