(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueCarousel"] = factory();
	else
		root["vueCarousel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(1)
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/falstack/Documents/Code/vue-carousel/src/vue-carousel.vue"
	__vue_options__._scopeId = "data-v-5317db82"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5317db82", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5317db82", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] vue-carousel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.25.0@css-loader/index.js!./../node_modules/.9.7.0@vue-loader/lib/style-rewriter.js?id=data-v-5317db82&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.9.7.0@vue-loader/lib/selector.js?type=styles&index=0!./vue-carousel.vue", function() {
				var newContent = require("!!./../node_modules/.0.25.0@css-loader/index.js!./../node_modules/.9.7.0@vue-loader/lib/style-rewriter.js?id=data-v-5317db82&scoped=true!./../node_modules/.4.0.2@sass-loader/index.js!./../node_modules/.9.7.0@vue-loader/lib/selector.js?type=styles&index=0!./vue-carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#vue-carousel[data-v-5317db82] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n#vue-carousel .carousel-prev-btn[data-v-5317db82] {\n    left: 0;\n}\n#vue-carousel .carousel-next-btn[data-v-5317db82] {\n    right: 0;\n}\n#vue-carousel .carousel-prev-btn[data-v-5317db82], #vue-carousel .carousel-next-btn[data-v-5317db82], #vue-carousel .carousel-control[data-v-5317db82] {\n    position: absolute;\n}\n#vue-carousel .carousel-hover-show[data-v-5317db82] {\n    opacity: 0;\n    visibility: hidden;\n}\n#vue-carousel:hover .carousel-hover-show[data-v-5317db82] {\n    opacity: 1;\n    visibility: visible;\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    template: '\
	        <div id="vue-carousel" :style="outerStyle" @mouseover="stop" @mouseout="auto">\
	            <div :style="warpStyle" ref="warp">\
	                <item></item>\
	            </div>\
	            <button class="carousel-prev-btn" @click="prev" v-if="status.showPrevNext">«</button>\
	            <button class="carousel-next-btn" @click="next" v-if="status.showPrevNext">»</button>\
	            <div class="carousel-control">\
	                <span class="carousel-btn-menu" v-if="status.showBtnList">\
	                    <em :class="[ \'carousel-btn\', item === status.now ? \'carousel-btn-now\' : \'\' ]" v-for="item in data.length" @click="jump(item)"></em>\
	                </span>\
	            </div>\
	            <tool></tool>\
	        </div>\
	    ',
	    props: {
	        init: {
	            required: true,
	            type: Object
	        }
	    },
	    computed: {
	        outerStyle: function outerStyle() {
	            return {
	                width: this.status.overHidden || this.status.vertical ? '100%' : this.data.length * 100 + '%',
	                height: !this.status.overHidden && this.status.vertical ? this.data.length * 100 + '%' : '100%',
	                position: 'relative',
	                overflow: this.status.overHidden ? 'hidden' : 'visible'
	            };
	        },
	        warpStyle: function warpStyle() {
	            return {
	                height: this.status.vertical && this.status.overHidden ? this.data.length * 100 + '%' : '100%',
	                width: this.status.vertical || !this.status.overHidden ? '100%' : this.data.length * 100 + '%',
	                transition: this.status.fade + "s",
	                cursor: this.data[0].link === undefined ? 'default' : 'pointer',
	                position: 'absolute',
	                left: 0,
	                top: 0
	            };
	        }
	    },
	    data: function data() {
	        return {
	            status: {
	                move: false,
	                vertical: false,
	                fade: 1,
	                timeOut: 1,
	                now: 1,
	                timer: null,
	                autoPlay: true,
	                hoverStop: true,
	                showPrevNext: true,
	                showBtnList: true,
	                loop: true,
	                overHidden: true,
	                keyCode: false
	            },
	            item: null,
	            tool: null,
	            data: null
	        };
	    },
	    created: function created() {
	        this.initData(this.init);
	    },
	
	    methods: {
	        initData: function initData(obj) {
	            if (obj === undefined) {
	                console.error('vue-carousel: ' + '未初始化数据');
	                return false;
	            }
	
	            if (obj.data !== undefined) {
	                this.data = obj.data;
	            } else {
	                console.error('vue-carousel：初始化数据错误');
	                return;
	            }
	
	            if (typeof obj.item === 'string') {
	                this.item = obj.item;
	            }
	
	            if (typeof obj.tool === 'string') {
	                this.tool = obj.tool;
	            }
	
	            if (typeof obj.timeOut === 'number' && obj.timeOut >= 0) {
	                this.status.timeOut = obj.timeOut;
	            }
	
	            if (typeof obj.fade === 'number' && obj.fade >= 0) {
	                this.status.fade = obj.fade;
	            }
	
	            if (typeof obj.autoPlay === 'boolean') {
	                this.status.autoPlay = obj.autoPlay;
	            }
	
	            if (typeof obj.overHidden === 'boolean') {
	                this.status.overHidden = obj.overHidden;
	            }
	
	            if (typeof obj.vertical === 'boolean') {
	                this.status.vertical = obj.vertical;
	            }
	
	            if (typeof obj.loop === 'boolean') {
	                this.status.loop = obj.loop;
	            }
	
	            if (typeof obj.keyCode === 'boolean') {
	                this.status.keyCode = obj.keyCode;
	            }
	
	            if (typeof obj.hoverStop === 'boolean') {
	                this.status.hoverStop = obj.hoverStop;
	            }
	
	            if (typeof obj.showPrevNext === 'boolean') {
	                this.status.showPrevNext = obj.showPrevNext;
	            }
	
	            if (typeof obj.showBtnList === 'boolean') {
	                this.status.showBtnList = obj.showBtnList;
	            }
	
	            this.$options.template = this.$options.template.split('<item>').shift() + "<div @click='open(item)' :style='itemStyle(item)' v-for='item in data'>" + (this.item === null ? '' : this.item) + "</div>" + this.$options.template.split('</item>').pop();
	
	            this.$options.template = this.$options.template.split('<tool>').shift() + (this.tool === null ? '' : this.tool) + this.$options.template.split('</tool>').pop();
	
	            this.auto();
	        },
	        auto: function auto() {
	            var _this = this;
	
	            if (this.status.autoPlay && this.status.timer === null) {
	                (function () {
	                    var self = _this;
	                    _this.status.timer = setInterval(function () {
	                        self.next();
	                    }, self.status.timeOut * 1000);
	                })();
	            }
	        },
	        stop: function stop() {
	            if (this.status.autoPlay && this.status.hoverStop) {
	                clearInterval(this.status.timer);
	                this.status.timer = null;
	            }
	        },
	        prev: function prev() {
	            if (!this.status.move) {
	                if (this.status.now === 1) {
	                    if (this.status.loop) {
	                        this.status.now = this.data.length;
	                        this.scroll(this.status.now - 1);
	                    }
	                } else {
	                    this.status.now--;
	                    this.scroll(this.status.now - 1);
	                }
	            }
	        },
	        next: function next() {
	            if (!this.status.move) {
	                if (this.status.now === this.data.length) {
	                    if (this.status.loop) {
	                        this.status.now = 0;
	                        this.scroll(this.status.now++);
	                    }
	                } else {
	                    this.scroll(this.status.now++);
	                }
	            }
	        },
	        jump: function jump(arg) {
	            if (!this.status.move) {
	                if (this.status.now === arg) return;
	                this.status.now = arg;
	                this.scroll(arg - 1);
	            }
	        },
	        scroll: function scroll(arg) {
	            this.status.move = true;
	            this.status.vertical ? this.$refs.warp.style.top = arg * -(this.status.overHidden ? 100 : 100 / this.data.length) + "%" : this.$refs.warp.style.left = arg * -(this.status.overHidden ? 100 : 100 / this.data.length) + "%";
	            var self = this;
	            setTimeout(function () {
	                self.status.move = false;
	            }, this.status.fade * 1000);
	        },
	        open: function open(item) {
	            if (item.link !== undefined) {
	                window.open(item.link);
	            }
	        },
	        itemStyle: function itemStyle(item) {
	            return {
	                float: this.status.vertical ? "none" : "left",
	                height: this.status.vertical ? 100 / this.data.length + "%" : "100%",
	                width: this.status.vertical ? "100%" : 100 / this.data.length + "%",
	                background: "url(" + item.img + ")" + " center center / cover no-repeat",
	                position: "relative"
	            };
	        }
	    },
	    mounted: function mounted() {
	        // keyCode事件
	        // 40：下，38：上，39：右，37：左，32：空格
	        var self = this;
	        document.addEventListener("keydown", function (e) {
	            if (self.status.keyCode) {
	                var code = e.keyCode;
	                if (code === 40 || code === 39) {
	                    e.preventDefault();
	                    self.next();
	                } else if (code === 38 || code == 37) {
	                    e.preventDefault();
	                    self.prev();
	                }
	            }
	        });
	        // 滚轮事件
	    }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-carousel.js.map