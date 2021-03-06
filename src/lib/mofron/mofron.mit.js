/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (typeof mofron != "undefined") {
	    console.error('mofron is already defined');
	}

	__webpack_require__(2);

	/* util */
	__webpack_require__(4);
	mofron.util.Vdom = __webpack_require__(5);
	mofron.util.Style = __webpack_require__(6);
	mofron.util.Color = __webpack_require__(7);
	mofron.util.Font = __webpack_require__(8);

	/* UI Parts */
	mofron.parts.Base = __webpack_require__(9);
	mofron.parts.Text = __webpack_require__(10);
	mofron.parts.Button = __webpack_require__(11);
	mofron.parts.InputText = __webpack_require__(12);
	mofron.parts.Header = __webpack_require__(13);
	mofron.parts.Frame = __webpack_require__(14);
	mofron.parts.Image = __webpack_require__(15);
	mofron.parts.Loading = __webpack_require__(16);
	mofron.parts.Heading = __webpack_require__(17);
	mofron.parts.Background = __webpack_require__(18);

	/* Layout */
	mofron.layout.Base = __webpack_require__(19);
	mofron.layout.Horizon = __webpack_require__(20);
	mofron.layout.HorizCenter = __webpack_require__(21);
	mofron.layout.VertiCenter = __webpack_require__(22);
	mofron.layout.Margin = __webpack_require__(23);

	/* Event */
	mofron.event.Base = __webpack_require__(24);
	mofron.event.Click = __webpack_require__(25);
	mofron.event.MouseOver = __webpack_require__(26);

	/* effect */
	mofron.effect.Base = __webpack_require__(27);
	mofron.effect.Fade = __webpack_require__(28);

	/* template */
	mofron.tmpl.Base = __webpack_require__(29);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["mofron"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	    "use strict";

	    if ( //(typeof module         === "object") && 
	    _typeof(module.exports) === "object") {
	        module.exports = global.document ? factory(global, true) : function (w) {
	            if (!w.document) {
	                throw new Error("mofron requires a window with a document");
	            }
	            return factory(w);
	        };
	    } else {
	        factory(global);
	    }

	    // Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
	    "use strict";

	    return {
	        parts: {},
	        layout: {},
	        event: {},
	        effect: {},
	        tmpl: {},
	        util: {},
	        root: new Array()
	    };
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	mofron.util.getId = function () {
	    try {
	        var ret_id = "aid_";
	        var loop = 0;
	        var val = 0;
	        for (loop = 0; loop < 32; loop++) {
	            val = Math.random() * 16 | 0;
	            if (loop === 8 || loop === 12 || loop === 16 || loop === 20) {
	                ret_id += "-";
	            }
	            ret_id += (loop == 12 ? 4 : loop == 16 ? val & 3 | 8 : val).toString(16);
	        }
	        return ret_id;
	    } catch (e) {
	        console.error(e.stack);
	        throw new Error();
	    }
	};

	mofron.util.camelMap = {
	    "alignItems": "alignItems",
	    "alignSelf": "alignSelf",
	    "alignmentBaseline": "alignmentBaseline",
	    "all": "all",
	    "animation": "animation",
	    "animationDelay": "animationDelay",
	    "animationDirection": "animationDirection",
	    "animationDuration": "animationDuration",
	    "animationFillMode": "animationFillMode",
	    "animationIterationCount": "animationIterationCount",
	    "animationName": "animationName",
	    "animationPlayState": "animationPlayState",
	    "animationTimingFunction": "animationTimingFunction",
	    "backfaceVisibility": "backfaceVisibility",
	    "background": "background",
	    "backgroundAttachment": "backgroundAttachment",
	    "backgroundBlendMode": "backgroundBlendMode",
	    "backgroundClip": "backgroundClip",
	    "backgroundColor": "backgroundColor",
	    "backgroundImage": "backgroundImage",
	    "backgroundOrigin": "backgroundOrigin",
	    "backgroundPosition": "backgroundPosition",
	    "backgroundPositionX": "backgroundPositionX",
	    "backgroundPositionY": "backgroundPositionY",
	    "backgroundRepeat": "backgroundRepeat",
	    "backgroundRepeatX": "backgroundRepeatX",
	    "backgroundRepeatY": "backgroundRepeatY",
	    "backgroundSize": "backgroundSize",
	    "baselineShift": "baselineShift",
	    "border": "border",
	    "borderBottom": "borderBottom",
	    "borderBottomColor": "borderBottomColor",
	    "borderBottomLeftRadius": "borderBottomLeftRadius",
	    "borderBottomRightRadius": "borderBottomRightRadius",
	    "borderBottomStyle": "borderBottomStyle",
	    "borderBottomWidth": "borderBottomWidth",
	    "borderCollapse": "borderCollapse",
	    "borderColor": "borderColor",
	    "borderImage": "borderImage",
	    "borderImageOutset": "borderImageOutset",
	    "borderImageRepeat": "borderImageRepeat",
	    "borderImageSlice": "borderImageSlice",
	    "borderImageSource": "borderImageSource",
	    "borderImageWidth": "borderImageWidth",
	    "borderLeft": "borderLeft",
	    "borderLeftColor": "borderLeftColor",
	    "borderLeftStyle": "borderLeftStyle",
	    "borderLeftWidth": "borderLeftWidth",
	    "borderRadius": "borderRadius",
	    "borderRight": "borderRight",
	    "borderRightColor": "borderRightColor",
	    "borderRightStyle": "borderRightStyle",
	    "borderRightWidth": "borderRightWidth",
	    "borderSpacing": "borderSpacing",
	    "borderStyle": "borderStyle",
	    "borderTop": "borderTop",
	    "borderTopColor": "borderTopColor",
	    "borderTopLeftRadius": "borderTopLeftRadius",
	    "borderTopRightRadius": "borderTopRightRadius",
	    "borderTopStyle": "borderTopStyle",
	    "borderTopWidth": "borderTopWidth",
	    "borderWidth": "borderWidth",
	    "bottom": "bottom",
	    "boxShadow": "boxShadow",
	    "boxSizing": "boxSizing",
	    "breakAfter": "breakAfter",
	    "breakBefore": "breakBefore",
	    "breakInside": "breakInside",
	    "bufferedRendering": "bufferedRendering",
	    "captionSide": "captionSide",
	    "clear": "clear",
	    "clip": "clip",
	    "clipPath": "clipPath",
	    "clipRule": "clipRule",
	    "color": "color",
	    "colorInterpolation": "colorInterpolation",
	    "colorInterpolationFilters": "colorInterpolationFilters",
	    "colorRendering": "colorRendering",
	    "columnCount": "columnCount",
	    "columnFill": "columnFill",
	    "columnGap": "columnGap",
	    "columnRule": "columnRule",
	    "columnRuleColor": "columnRuleColor",
	    "columnRuleStyle": "columnRuleStyle",
	    "columnRuleWidth": "columnRuleWidth",
	    "columnSpan": "columnSpan",
	    "columnWidth": "columnWidth",
	    "columns": "columns",
	    "content": "content",
	    "counterIncrement": "counterIncrement",
	    "counterReset": "counterReset",
	    "cursor": "cursor",
	    "cx": "cx",
	    "cy": "cy",
	    "direction": "direction",
	    "display": "display",
	    "dominantBaseline": "dominantBaseline",
	    "emptyCells": "emptyCells",
	    "fill": "fill",
	    "fillOpacity": "fillOpacity",
	    "fillRule": "fillRule",
	    "filter": "filter",
	    "flex": "flex",
	    "flexBasis": "flexBasis",
	    "flexDirection": "flexDirection",
	    "flexFlow": "flexFlow",
	    "flexGrow": "flexGrow",
	    "flexShrink": "flexShrink",
	    "flexWrap": "flexWrap",
	    "float": "float",
	    "floodColor": "floodColor",
	    "floodOpacity": "floodOpacity",
	    "font": "font",
	    "fontFamily": "fontFamily",
	    "fontFeatureSettings": "fontFeatureSettings",
	    "fontKerning": "fontKerning",
	    "fontSize": "fontSize",
	    "fontStretch": "fontStretch",
	    "fontStyle": "fontStyle",
	    "fontVariant": "fontVariant",
	    "fontVariantLigatures": "fontVariantLigatures",
	    "fontWeight": "fontWeight",
	    "height": "height",
	    "imageRendering": "imageRendering",
	    "isolation": "isolation",
	    "justifyContent": "justifyContent",
	    "left": "left",
	    "letterSpacing": "letterSpacing",
	    "lightingColor": "lightingColor",
	    "lineHeight": "lineHeight",
	    "listStyle": "listStyle",
	    "listStyleImage": "listStyleImage",
	    "listStylePosition": "listStylePosition",
	    "listStyleType": "listStyleType",
	    "margin": "margin",
	    "marginBottom": "marginBottom",
	    "marginLeft": "marginLeft",
	    "marginRight": "marginRight",
	    "marginTop": "marginTop",
	    "marker": "marker",
	    "markerEnd": "markerEnd",
	    "markerMid": "markerMid",
	    "markerStart": "markerStart",
	    "mask": "mask",
	    "maskType": "maskType",
	    "maxHeight": "maxHeight",
	    "maxWidth": "maxWidth",
	    "maxZoom": "maxZoom",
	    "min-height": "minHeight",
	    "min-width": "minWidth",
	    "minZoom": "minZoom",
	    "mixBlendMode": "mixBlendMode",
	    "motion": "motion",
	    "motionOffset": "motionOffset",
	    "motionPath": "motionPath",
	    "motionRotation": "motionRotation",
	    "objectFit": "objectFit",
	    "objectPosition": "objectPosition",
	    "opacity": "opacity",
	    "order": "order",
	    "orientation": "orientation",
	    "orphans": "orphans",
	    "outline": "outline",
	    "outlineColor": "outlineColor",
	    "outlineOffset": "outlineOffset",
	    "outlineStyle": "outlineStyle",
	    "outlineWidth": "outlineWidth",
	    "overflow": "overflow",
	    "overflowWrap": "overflowWrap",
	    "overflowX": "overflowX",
	    "overflowY": "overflowY",
	    "padding": "padding",
	    "paddingBottom": "paddingBottom",
	    "paddingLeft": "paddingLeft",
	    "paddingRight": "paddingRight",
	    "paddingTop": "paddingTop",
	    "page": "page",
	    "pageBreakAfter": "pageBreakAfter",
	    "pageBreakBefore": "pageBreakBefore",
	    "pageBreakInside": "pageBreakInside",
	    "paintOrder": "paintOrder",
	    "perspective": "perspective",
	    "perspectiveOrigin": "perspectiveOrigin",
	    "pointerEvents": "pointerEvents",
	    "position": "position",
	    "quotes": "quotes",
	    "r": "r",
	    "resize": "resize",
	    "right": "right",
	    "rx": "rx",
	    "ry": "ry",
	    "shapeImageThreshold": "shapeImageThreshold",
	    "shapeMargin": "shapeMargin",
	    "shapeOutside": "shapeOutside",
	    "shapeRendering": "shapeRendering",
	    "size": "size",
	    "speak": "speak",
	    "src": "src",
	    "stopColor": "stopColor",
	    "stopOpacity": "stopOpacity",
	    "stroke": "stroke",
	    "strokeDasharray": "strokeDasharray",
	    "strokeDashoffset": "strokeDashoffset",
	    "strokeLinecap": "strokeLinecap",
	    "strokeLinejoin": "strokeLinejoin",
	    "strokeMiterlimit": "strokeMiterlimit",
	    "strokeOpacity": "strokeOpacity",
	    "strokeWidth": "strokeWidth",
	    "tabSize": "tabSize",
	    "tableLayout": "tableLayout",
	    "textAlign": "textAlign",
	    "textAlignLast": "textAlignLast",
	    "textAnchor": "textAnchor",
	    "textCombineUpright": "textCombineUpright",
	    "textDecoration": "textDecoration",
	    "textIndent": "textIndent",
	    "textOrientation": "textOrientation",
	    "textOverflow": "textOverflow",
	    "textRendering": "textRendering",
	    "textShadow": "textShadow",
	    "textTransform": "textTransform",
	    "top": "top",
	    "touchAction": "touchAction",
	    "transform": "transform",
	    "transformOrigin": "transformOrigin",
	    "transformStyle": "transformStyle",
	    "transition": "transition",
	    "transitionDelay": "transitionDelay",
	    "transitionDuration": "transitionDuration",
	    "transitionProperty": "transitionProperty",
	    "transition-timing-function": "transitionTimingFunction",
	    "unicode-bidi": "unicodeBidi",
	    "unicodeRange": "unicodeRange",
	    "userZoom": "userZoom",
	    "vectorEffect": "vectorEffect",
	    "verticalAlign": "verticalAlign",
	    "visibility": "visibility",
	    "webkitAppRegion": "webkitAppRegion",
	    "webkitAppearance": "webkitAppearance",
	    "webkitBackgroundClip": "webkitBackgroundClip",
	    "webkitBackgroundOrigin": "webkitBackgroundOrigin",
	    "webkitBorderAfter": "webkitBorderAfter",
	    "webkitBorderAfterColor": "webkitBorderAfterColor",
	    "webkitBorderAfterStyle": "webkitBorderAfterStyle",
	    "webkitBorderAfterWidth": "webkitBorderAfterWidth",
	    "webkitBorderBefore": "webkitBorderBefore",
	    "webkitBorderBeforeColor": "webkitBorderBeforeColor",
	    "webkitBorderBeforeStyle": "webkitBorderBeforeStyle",
	    "webkitBorderBeforeWidth": "webkitBorderBeforeWidth",
	    "webkitBorderEnd": "webkitBorderEnd",
	    "webkitBorderEndColor": "webkitBorderEndColor",
	    "webkitBorderEndStyle": "webkitBorderEndStyle",
	    "webkitBorderEndWidth": "webkitBorderEndWidth",
	    "webkitBorderHorizontalSpacing": "webkitBorderHorizontalSpacing",
	    "webkitBorderImage": "webkitBorderImage",
	    "webkitBorderStart": "webkitBorderStart",
	    "webkitBorderStartColor": "webkitBorderStartColor",
	    "webkitBorderStartStyle": "webkitBorderStartStyle",
	    "webkitBorderStartWidth": "webkitBorderStartWidth",
	    "webkitBorderVerticalSpacing": "webkitBorderVerticalSpacing",
	    "webkitBoxAlign": "webkitBoxAlign",
	    "webkitBoxDecorationBreak": "webkitBoxDecorationBreak",
	    "webkitBoxDirection": "webkitBoxDirection",
	    "webkitBoxFlex": "webkitBoxFlex",
	    "webkitBoxFlexGroup": "webkitBoxFlexGroup",
	    "webkitBoxLines": "webkitBoxLines",
	    "webkitBoxOrdinalGroup": "webkitBoxOrdinalGroup",
	    "webkitBoxOrient": "webkitBoxOrient",
	    "webkitBoxPack": "webkitBoxPack",
	    "webkitBoxReflect": "webkitBoxReflect",
	    "webkitClipPath": "webkitClipPath",
	    "webkitColumnBreakAfter": "webkitColumnBreakAfter",
	    "webkitColumnBreakBefore": "webkitColumnBreakBefore",
	    "webkitColumnBreakInside": "webkitColumnBreakInside",
	    "webkitFilter": "webkitFilter",
	    "webkitFontSizeDelta": "webkitFontSizeDelta",
	    "webkitFontSmoothing": "webkitFontSmoothing",
	    "webkitHighlight": "webkitHighlight",
	    "webkitHyphenateCharacter": "webkitHyphenateCharacter",
	    "webkitLineBreak": "webkitLineBreak",
	    "webkitLineClamp": "webkitLineClamp",
	    "webkitLocale": "webkitLocale",
	    "webkitLogicalHeight": "webkitLogicalHeight",
	    "webkitLogicalWidth": "webkitLogicalWidth",
	    "webkitMarginAfter": "webkitMarginAfter",
	    "webkitMarginAfterCollapse": "webkitMarginAfterCollapse",
	    "webkitMarginBefore": "webkitMarginBefore",
	    "webkitMarginBeforeCollapse": "webkitMarginBeforeCollapse",
	    "webkitMarginBottomCollapse": "webkitMarginBottomCollapse",
	    "webkitMarginCollapse": "webkitMarginCollapse",
	    "webkitMarginEnd": "webkitMarginEnd",
	    "webkitMarginStart": "webkitMarginStart",
	    "webkitMarginTopCollapse": "webkitMarginTopCollapse",
	    "webkitMask": "webkitMask",
	    "webkitMaskBoxImage": "webkitMaskBoxImage",
	    "webkitMaskBoxImageOutset": "webkitMaskBoxImageOutset",
	    "webkitMaskBoxImageRepeat": "webkitMaskBoxImageRepeat",
	    "webkitMaskBoxImageSlice": "webkitMaskBoxImageSlice",
	    "webkitMaskBoxImageSource": "webkitMaskBoxImageSource",
	    "webkitMaskBoxImageWidth": "webkitMaskBoxImageWidth",
	    "webkitMaskClip": "webkitMaskClip",
	    "webkitMaskComposite": "webkitMaskComposite",
	    "webkitMaskImage": "webkitMaskImage",
	    "webkitMaskOrigin": "webkitMaskOrigin",
	    "webkitMaskPosition": "webkitMaskPosition",
	    "webkitMaskPositionX": "webkitMaskPositionX",
	    "webkitMaskPositionY": "webkitMaskPositionY",
	    "webkitMaskRepeat": "webkitMaskRepeat",
	    "webkitMaskRepeatX": "webkitMaskRepeatX",
	    "webkitMaskRepeatY": "webkitMaskRepeatY",
	    "webkitMaskSize": "webkitMaskSize",
	    "webkitMaxLogicalHeight": "webkitMaxLogicalHeight",
	    "webkitMaxLogicalWidth": "webkitMaxLogicalWidth",
	    "webkitMinLogicalHeight": "webkitMinLogicalHeight",
	    "webkitMinLogicalWidth": "webkitMinLogicalWidth",
	    "webkitPaddingAfter": "webkitPaddingAfter",
	    "webkitPaddingBefore": "webkitPaddingBefore",
	    "webkitPaddingEnd": "webkitPaddingEnd",
	    "webkitPaddingStart": "webkitPaddingStart",
	    "webkitPerspectiveOriginX": "webkitPerspectiveOriginX",
	    "webkitPerspectiveOriginY": "webkitPerspectiveOriginY",
	    "webkitPrintColorAdjust": "webkitPrintColorAdjust",
	    "webkitRtlOrdering": "webkitRtlOrdering",
	    "webkitRubyPosition": "webkitRubyPosition",
	    "webkitTapHighlightColor": "webkitTapHighlightColor",
	    "webkitTextCombine": "webkitTextCombine",
	    "webkitTextDecorationsInEffect": "webkitTextDecorationsInEffect",
	    "webkitTextEmphasis": "webkitTextEmphasis",
	    "webkitTextEmphasisColor": "webkitTextEmphasisColor",
	    "webkitTextEmphasisPosition": "webkitTextEmphasisPosition",
	    "webkitTextEmphasisStyle": "webkitTextEmphasisStyle",
	    "webkitTextFillColor": "webkitTextFillColor",
	    "webkitTextOrientation": "webkitTextOrientation",
	    "webkitTextSecurity": "webkitTextSecurity",
	    "webkitTextStroke": "webkitTextStroke",
	    "webkitTextStrokeColor": "webkitTextStrokeColor",
	    "webkitTextStrokeWidth": "webkitTextStrokeWidth",
	    "-webkit-transition": "webkitTransition",
	    "webkitTransformOriginX": "webkitTransformOriginX",
	    "webkitTransformOriginY": "webkitTransformOriginY",
	    "webkitTransformOriginZ": "webkitTransformOriginZ",
	    "webkitUserDrag": "webkitUserDrag",
	    "webkitUserModify": "webkitUserModify",
	    "webkitUserSelect": "webkitUserSelect",
	    "webkitWritingMode": "webkitWritingMode",
	    "whiteSpace": "whiteSpace",
	    "widows": "widows",
	    "width": "width",
	    "willChange": "willChange",
	    "wordBreak": "wordBreak",
	    "wordSpacing": "wordSpacing",
	    "wordWrap": "wordWrap",
	    "writingMode": "writingMode",
	    "x": "x",
	    "y": "y",
	    "zIndex": "zIndex",
	    "zoom": "zoom",
	    "cssText": "cssText",
	    "length": "length",
	    "parentRule": "parentRule",
	    "cssFloat": "cssFloat",
	    "item": "item",
	    "getPropertyValue": "getPropertyValue",
	    "getPropertyPriority": "getPropertyPriority",
	    "setProperty": "setProperty",
	    "removeProperty": "removeProperty"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file util/Vdom.js
	 *
	 */

	module.exports = function () {
	    function _class(tag) {
	        _classCallCheck(this, _class);

	        try {
	            if ('string' != typeof tag) {
	                throw new Error('invalid parameter');
	            }
	            this.id = null;
	            this.tag = tag;
	            this.clname = new Array();
	            this.parent = null;
	            this.child = new Array();
	            this.style = new mofron.util.Style(this);
	            this.attr = {};
	            this.text = null;
	            this.push_flg = false;
	            this.value = null;
	            ////console.log(tag + ' -> ' + this.getId());
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: 'chgTag',
	        value: function chgTag(tag) {
	            try {
	                if ('string' != typeof tag) {
	                    throw new Error('invalid parameter');
	                }
	                this.tag = tag;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getId',
	        value: function getId() {
	            try {
	                if (null === this.id) {
	                    this.id = mofron.util.getId();
	                }
	                return this.id;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addChild',
	        value: function addChild(chd) {
	            try {
	                if ('object' != (typeof chd === 'undefined' ? 'undefined' : _typeof(chd))) {
	                    throw new Error('invalid parameter');
	                }
	                chd.setTarget(this);
	                this.child.push(chd);
	                this.value = null;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setStyle',
	        value: function setStyle(key, val) {
	            try {
	                //console.log('set ' + this.tag + ' style-> ' + key + ':' + val);
	                this.style.set(key, val);
	                this.value = null;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getStyle',
	        value: function getStyle(key) {
	            try {
	                return this.style.get(key);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setAttr',
	        value: function setAttr(key, val) {
	            try {
	                var _key = key === undefined ? null : key;
	                var _val = val === undefined ? null : val;
	                this.attr[_key] = _val;
	                this.value = null;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getAttr',
	        value: function getAttr(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.attr;
	                }
	                return this.attr[_val];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addClname',
	        value: function addClname(name) {
	            try {
	                if ('string' != typeof name) {
	                    throw new Error('invalid parameter');
	                }
	                this.clname.push(name);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setText',
	        value: function setText(txt) {
	            try {
	                if ('string' != typeof txt) {
	                    throw new Error('invalid parameter');
	                }
	                this.text = txt;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            try {
	                var ret_val = '';
	                if (null != this.value) {
	                    ret_val += this.value;
	                } else {
	                    //console.log(this.getId() + ' -> getValue()');
	                    ret_val += '<' + this.tag + ' ';

	                    /* set id attribute */
	                    ret_val += 'id="' + this.getId() + '" ';

	                    /* set class attribute:*/
	                    var clname_str = 'class="';
	                    for (var idx in this.clname) {
	                        clname_str += this.clname[idx] + ' ';
	                    }
	                    clname_str += '"';
	                    if ('class=""' != clname_str) {
	                        ret_val += clname_str;
	                    }

	                    /* set style attribute */
	                    var style_conts = this.style.get();
	                    var style = 'style="';
	                    for (var key in style_conts) {
	                        if (null === style_conts[key]) {
	                            continue;
	                        }
	                        style += key + ':' + style_conts[key] + ';';
	                    }
	                    style += '"';
	                    if ('style=""' != style) {
	                        ret_val += style;
	                    }

	                    var attr_conts = '';
	                    for (var key in this.attr) {
	                        attr_conts += key;
	                        if (null != this.attr[key]) {
	                            attr_conts += '=' + this.attr[key] + ' ';
	                        }
	                    }
	                    ret_val += attr_conts + '>';

	                    this.value = ret_val;
	                }

	                /* get child value */
	                if (0 != this.child.length) {
	                    for (var chd_idx in this.child) {
	                        //console.log(this.getId() + ' -> child value() -> ' + this.child[chd_idx].getValue());
	                        ret_val += this.child[chd_idx].getValue();
	                    }
	                }

	                if (null != this.text) {
	                    ret_val += this.text;
	                }

	                if (false === this.isSimpleTag()) {
	                    ret_val += '</' + this.tag + '>';
	                }

	                //console.log(this.getId() + ' -> ' + ret_val);
	                //console.log(this.getId() + ' -> value() -> ' + ret_val);
	                return ret_val;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'pushDom',
	        value: function pushDom(tgt) {
	            try {
	                if (true === this.push_flg) {
	                    throw new Error('already pushed');
	                }

	                this.setTarget(tgt);

	                var tgt_dom = null;
	                if (null === this.parent) {
	                    tgt_dom = document.body;
	                    console.log(this.getId() + ' -> push DOM to body');
	                } else {
	                    tgt_dom = document.querySelector('#' + this.parent.getId());
	                    console.log(this.getId() + ' -> push DOM to ' + this.parent.getId());
	                }
	                tgt_dom.insertAdjacentHTML('beforeend', this.getValue());
	                //console.log('innerHTML : ' + tgt_dom.innerHTML);
	                //tgt_dom.innerHTML += this.getValue();

	                this.setPushed();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'isPushed',
	        value: function isPushed() {
	            try {
	                return this.push_flg;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setPushed',
	        value: function setPushed() {
	            try {
	                if (0 != this.child.length) {
	                    for (var chd_idx in this.child) {
	                        this.child[chd_idx].setPushed();
	                    }
	                }
	                this.push_flg = true;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'isSimpleTag',
	        value: function isSimpleTag() {
	            try {
	                if ('br' == this.tag || 'hr' == this.tag || 'input' == this.tag || 'img' == this.tag) {
	                    return true;
	                }
	                return false;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setTarget',
	        value: function setTarget(tgt) {
	            try {
	                if ('object' != (typeof tgt === 'undefined' ? 'undefined' : _typeof(tgt))) {
	                    throw new Error('invalid parameter');
	                }
	                this.parent = tgt;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getChild',
	        value: function getChild(idx) {
	            try {
	                var _idx = idx === undefined ? null : idx;
	                if (null === _idx) {
	                    return this.child;
	                }
	                if (0 > _idx || this.child.length - 1 < _idx) {
	                    throw new Error('invalid parameter');
	                }
	                return this.child[_idx];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file Style.js
	 */
	module.exports = function () {
	    function _class(tgt) {
	        _classCallCheck(this, _class);

	        try {
	            if ('object' != (typeof tgt === 'undefined' ? 'undefined' : _typeof(tgt))) {
	                throw new Error('invalid parameter');
	            }
	            this.target = tgt;
	            this.conts = {};
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: 'set',
	        value: function set(key, val) {
	            try {
	                var _val = val === undefined ? null : val;

	                if ('string' != typeof key || null != _val && 'string' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                if (true === this.target.isPushed()) {
	                    var dom = document.querySelector('#' + this.target.getId());
	                    dom.style[key] = val;
	                }
	                this.conts[key] = val;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            try {
	                var _key = key === undefined ? null : key;
	                if (null === _key) {
	                    return this.conts;
	                }
	                return this.conts[_key] === undefined ? null : this.conts[_key];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file  Color.js
	 * @brief color abstructor
	 */
	module.exports = function () {
	    function _class(r, g, b, a) {
	        _classCallCheck(this, _class);

	        try {
	            this.red = r || null;
	            this.green = g || null;
	            this.blue = b || null;
	            this.alpha = a || 1;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: 'getRgba',
	        value: function getRgba() {
	            try {
	                return new Array(this.red, this.green, this.blue, this.alpha);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getStyle',
	        value: function getStyle() {
	            try {
	                return 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alpha + ')';
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();
	/* end of file */

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file  Font.js
	 */
	module.exports = function () {
	    function _class(fm) {
	        _classCallCheck(this, _class);

	        try {
	            if ('string' != typeof fm) {
	                throw new Error('invalid parameter');
	            }
	            this.family = fm;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: 'font',
	        value: function font(tgt) {
	            try {
	                tgt.style('font-family', this.family);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file   parts/Base.js
	 * @brief  Base of UI Parts Class
	 * @author simpart
	 */

	module.exports = function () {
	    function _class(prm) {
	        _classCallCheck(this, _class);

	        try {
	            var _prm = prm === undefined ? null : prm;
	            this.parent = null;
	            this.child = new Array();
	            this.event = new Array();
	            this.layout = new Array();
	            //this.effect    = new Array();
	            this.vdom = new mofron.util.Vdom('div');
	            this.state = null;
	            this.initContents(this.vdom, _prm);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    /*** method ***/

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getEventTgt',
	        value: function getEventTgt() {
	            try {
	                return this.getTarget();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addChild',
	        value: function addChild(chd, disp, tgt) {
	            try {
	                var _disp = disp === undefined ? true : disp;
	                var _tgt = tgt === undefined ? null : tgt;
	                chd.parent = this;
	                this.child.push(chd);
	                if ('inited' === this.state) {
	                    chd.init(_disp);
	                    for (var idx in this.layout) {
	                        this.layout[idx].layout();
	                    }
	                }

	                /* set initial display of child */
	                var chd_vdom = chd.getVdom();
	                if (false === _disp) {
	                    chd_vdom.setStyle('display', 'none');
	                }

	                /* set to target vdom */
	                if (null === _tgt) {
	                    this.getTarget().addChild(chd_vdom);
	                } else {
	                    _tgt.addChild(chd_vdom);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getChild',
	        value: function getChild(idx) {
	            try {
	                var _idx = idx === undefined ? null : idx;
	                if (null === _idx) {
	                    return this.child;
	                }
	                if (0 > _idx || this.child.length - 1 < _idx) {
	                    throw new Error('invalid parameter');
	                }
	                return this.child[_idx];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getStyleTgt',
	        value: function getStyleTgt() {
	            try {
	                return this.getTarget();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'style',
	        value: function style(key, val) {
	            try {
	                var _key = key === undefined ? null : key;
	                var _val = val === undefined ? null : val;

	                if (null === _key && null === _val) {
	                    return this.vdom.getStyle();
	                }
	                var style_tgt = this.getStyleTgt();
	                style_tgt.setStyle(key, val);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent(evt) {
	            try {
	                if (undefined === evt || null === evt || 'object' != (typeof evt === 'undefined' ? 'undefined' : _typeof(evt))) {
	                    throw new Error('invalid parameter');
	                }
	                this.event.push(evt);
	                evt.setTarget(this);
	                if ('inited' === this.state) {
	                    evt.event();
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addLayout',
	        value: function addLayout(lo) {
	            try {
	                if (undefined === lo || null === lo || 'object' != (typeof lo === 'undefined' ? 'undefined' : _typeof(lo))) {
	                    throw new Error('invalid parameter');
	                }
	                this.layout.push(lo);
	                lo.setTarget(this);

	                if ('inited' === this.state) {
	                    lo.layout();
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getLayout',
	        value: function getLayout(idx) {
	            try {
	                var _idx = idx === undefined ? null : idx;
	                if (null === _idx) {
	                    return this.layout;
	                }

	                if ('number' !== typeof _idx || 0 > _idx || this.layout.length <= _idx) {
	                    return null;
	                }
	                return this.layout[_idx];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * create parts to DOM
	         * 
	         * @param disp (bool) : initial visible flag. default is true
	         */

	    }, {
	        key: 'init',
	        value: function init(disp) {
	            try {

	                if ('inited' === this.state) {
	                    throw new Error('detect duplicate init');
	                }
	                this.state = 'init';
	                var _disp = disp === undefined ? true : disp;

	                /* set initialize target */
	                if (null === this.parent || null === this.parent.state) {
	                    var init_tgt = null;
	                    if (null === this.parent) {
	                        mofron.root.push(this);
	                    } else {
	                        init_tgt = this.parent.getTarget();
	                    }

	                    if (false === _disp) {
	                        this.vdom.setStyle('display', 'none');
	                    }
	                    //console.log(this.getVdom().getId() + ' -> pushDom()');
	                    this.vdom.pushDom(init_tgt);
	                    console.log("pushed");
	                }

	                for (var idx in this.event) {
	                    this.event[idx].event();
	                }

	                /* set layout */
	                for (var idx in this.layout) {
	                    this.layout[idx].layout();
	                }

	                for (var idx in this.child) {
	                    this.child[idx].init(_disp);
	                }

	                this.state = "inited";
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {} catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setVisible',
	        value: function setVisible(flg, eff) {
	            try {
	                var _flg = flg === undefined ? null : flg;
	                var _eff = eff === undefined ? null : eff;

	                if (null === _flg) {
	                    throw new Error('invalid parameter');
	                }

	                if ('boolean' != typeof _flg || null != _eff && 'object' != (typeof _eff === 'undefined' ? 'undefined' : _typeof(_eff))) {
	                    throw new Error('invalid parameter');
	                }

	                if (null != _eff) {
	                    eff.setTarget(this);
	                    eff.setCallback(function (prm) {
	                        try {
	                            if (true === prm[1]) {
	                                prm[0].setStyle('display', null);
	                            } else {
	                                prm[0].setStyle('display', 'none');
	                            }
	                        } catch (e) {
	                            console.error(e.stack);
	                            throw e;
	                        }
	                    }, [this.getVdom(), _flg]);
	                    _eff.effect(_flg);
	                } else {
	                    var vd = this.getVdom();
	                    if (true === _flg) {
	                        vd.setStyle('display', null);
	                    } else {
	                        vd.setStyle('display', 'none');
	                    }
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getVdom',
	        value: function getVdom() {
	            try {
	                return this.vdom;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Text.js
	 * @brief  Base UI of Text
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    /**
	     * initialize Header
	     */
	    function _class(txt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, txt));

	            _this.auto_color = false;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                if ('string' != typeof prm) {
	                    throw new Error('invalid parameter');
	                }

	                var text = new mofron.util.Vdom('div');
	                text.setText(prm);
	                vd.addChild(text);
	                this.size(15);

	                //$('#' + this.getId()).html('<div class="text-conts">'+ this.text +'</div>');
	                //if ((null !== this.theme.colors[0]) &&
	                //    (true === this.auto_color)) {
	                //    if (true === this.auto_color) {
	                //        var rgb = this.theme.colors[0].getRgba();
	                //        if (290 > (rgb[0]+rgb[1]+rgb[2])) {
	                //            var style = new mofron.other.Styles(this, ' div');
	                //            style.style('color', 'rgba(255,255,255,'+ rgb[3] +')');
	                //        }
	                //    }
	                //}
	                //
	                //if (null !== this.theme.font) {
	                //    this.theme.font.font(this);
	                //}
	                //style.style('font-size', this.size + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'text',
	        value: function text(val) {
	            try {} catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'size',
	        value: function size(val) {
	            try {
	                if ('number' != typeof val) {
	                    throw new Error('invalid parameter');
	                }
	                var _val = val === undefined ? null : val;
	                var txt = this.getTarget();
	                if (null === _val) {
	                    return txt.getStyle('font-size');
	                }
	                txt.setStyle('font-size', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setAlign',
	        value: function setAlign(tp) {
	            try {
	                //var style = new mofron.other.Styles(this, ' .text-conts');
	                //style.style('text-align', tp);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setLink',
	        value: function setLink(url, tab) {
	            try {
	                //var _tab = tab || false;
	                //var style = new mofron.other.Styles(this, ' .text-conts');
	                //style.style('cursor', 'pointer');
	                //var click = new mofron.event.Click();
	                //if (false === _tab) {
	                //    click.setCbfunc (function(){
	                //        window.location.href = url;
	                //    });
	                //} else {
	                //    click.setCbfunc (function(){
	                //        window.open(url, '_blank');
	                //    });
	                //}
	                //this.addEvent(click);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setColor',
	        value: function setColor(color) {
	            try {
	                //var style = new mofron.other.Styles(this, ' .text-conts');
	                //style.style('color', color.getStyle());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);
	/* end of file */

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Button.js
	 * @author simpart
	 */

	/**
	 * @class Button
	 */
	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class(cnt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, cnt));

	            if ('string' === typeof cnt) {
	                _this.addChild(new mofron.parts.Text(cnt));
	            } else if ('object' === (typeof cnt === 'undefined' ? 'undefined' : _typeof(cnt))) {
	                _this.addChild(cnt);
	            } else {
	                throw new Error('invalid parameter');
	            }
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                vd.addChild(new mofron.util.Vdom('button'));
	                this.style('cursor', 'pointer');
	                this.width(50);
	                this.height(25);
	                //this.style('display'        , 'flex');
	                //this.style('align-items'    , 'center');
	                //this.style('justify-content', 'center');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setClickEvent',
	        value: function setClickEvent(func, prm) {
	            try {
	                if (null === func) {
	                    throw new Error('invalid parameter');
	                }
	                var _prm = prm === undefined ? null : prm;
	                var click = new mofron.event.Click();
	                click.setCbfunc(func, _prm);
	                this.addEvent(click);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'width',
	        value: function width(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var btn = this.getTarget();
	                if (null === _val) {
	                    return btn.getStyle('width');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                btn.setStyle('width', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'height',
	        value: function height(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var btn = this.getTarget();
	                if (null === _val) {
	                    return btn.getStyle('height');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                btn.setStyle('height', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Input.js
	 * @brief  Base of UI InputText Class
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class(val) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, val));
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                vd.addChild(new mofron.util.Vdom('input'));
	                this.width(200);
	                this.height(25);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'width',
	        value: function width(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var input = this.getTarget();
	                if (null === _val) {
	                    return input.getStyle('width');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                input.setStyle('width', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'height',
	        value: function height(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var input = this.getTarget();
	                if (null === _val) {
	                    return input.getStyle('height');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                input.setStyle('height', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getText',
	        value: function getText() {
	            try {
	                var vd = this.getTarget();
	                if (false === vd.isPushed()) {
	                    return null;
	                }
	                var dm = document.querySelector('#' + vd.getId());
	                return dm.value;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);
	/* end of file */

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Header.js
	 * @brief  Base UI of Header
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                var hdr_conts = new mofron.util.Vdom('div');
	                hdr_conts.setStyle('width', '100%');
	                //hdr_conts.setStyle('float', 'left');
	                hdr_conts.setStyle('border-bottom', 'solid 1px lightgray');
	                hdr_conts.setStyle('position', 'fixed');
	                vd.addChild(hdr_conts);

	                var hdr_pad = new mofron.util.Vdom('div');
	                //hdr_pad.setStyle('float', 'none');
	                vd.addChild(hdr_pad);

	                this.height(50);

	                //if (null !== this.util.theme.colors[0]) {
	                //    conts_style.style(
	                //        'background',
	                //        this.theme.colors[0].getStyle(),
	                //        ' .conts'
	                //    );
	                //}

	                this.addLayout(new mofron.layout.Horizon());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getEventTgt',
	        value: function getEventTgt() {
	            try {
	                console.log('get event target : ' + this.vdom.getChild(1).getId());
	                return this.vdom; //.getChild(1);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	        /**
	         * set/get header height
	         *
	         * @param hei : (int) height (px)
	         */

	    }, {
	        key: 'height',
	        value: function height(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var hdr = this.getTarget();

	                if (null === _val) {
	                    return hdr.getStyle('height');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                hdr.setStyle('height', val + 'px');
	                this.vdom.getChild(1).setStyle('height', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * set header background color
	         *
	         * col : (string) color
	         */

	    }, {
	        key: 'color',
	        value: function color(col) {
	            try {
	                if (null === col || col === undefined) {
	                    throw new Error('invalid parameter');
	                }

	                if ('object' != (typeof col === 'undefined' ? 'undefined' : _typeof(col))) {
	                    throw new Error('invalid parameter');
	                }
	                this.style('background', col.getStyle());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Frame.js
	 * @brief  Base UI Frame class
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * initialize contents
	         * 
	         * @param disp : (bool) visible flag
	         */

	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                var frame = new mofron.util.Vdom('div');
	                frame.setStyle('border', 'solid 1px black');
	                vd.addChild(frame);

	                if ('number' === typeof prm) {
	                    this.size(prm, prm);
	                } else {
	                    this.size(100, 100);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'size',
	        value: function size(hei, wid) {
	            try {
	                var _hei = hei === undefined ? null : hei;
	                var _wid = wid === undefined ? null : wid;
	                var style = this.getStyleTgt();

	                if (null === _hei && null === _wid) {
	                    return [style.getStyle('height'), style.getStyle('width')];
	                }

	                if ('number' != typeof _hei || 'number' != typeof _wid) {
	                    throw new Error('invalid parameter');
	                }

	                style.setStyle('height', _hei + 'px');
	                style.setStyle('width', _wid + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'radius',
	        value: function radius(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var style = this.getStyleTgt();

	                if (null === _val) {
	                    var ret_val = style.getStyle('webkit-border-radius');
	                    if (null != ret_val) {
	                        return ret_val;
	                    }
	                    ret_val = style.getStyle('-moz-border-radius');
	                    if (null != ret_val) {
	                        return ret_val;
	                    }
	                    ret_val = style.getStyle('border-radius');
	                    if (null != ret_val) {
	                        return ret_val;
	                    }
	                    return null;
	                }

	                if ('number' != typeof val) {
	                    throw new Error('invalid parameter');
	                }

	                style.setStyle('webkit-border-radius', _val + 'px');
	                style.setStyle('-moz-border-radius', _val + 'px');
	                style.setStyle('border-radius', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'shadow',
	        value: function shadow(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var style = this.getStyleTgt();

	                if (null === _val) {
	                    return style.getStyle('box-shadow');
	                }

	                if ('number' != typeof val) {
	                    throw new Error('invalid parameter');
	                }
	                style.setStyle('box-shadow', val / 2 + 'px ' + val / 2 + 'px ' + val + 'px ' + '0px gray');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Image.js
	 * @brief  Base UI Image Class
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'initContents',


	        //    constructor (url) {
	        //        try {
	        //            super(prm);
	        //        } catch (e) {
	        //            console.error(e.stack);
	        //            throw e;
	        //        }
	        //    }

	        value: function initContents(vd, prm) {
	            try {
	                if ('string' !== typeof prm) {
	                    throw new Error('invalid parameter');
	                }
	                var image = new mofron.util.Vdom('img');
	                image.setAttr('src', prm);
	                vd.addChild(image);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Loading.js
	 * @brief  Base UI Loading Class
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class(prm) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

	            _this.timeout = 0;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }
	    /**
	     * 
	     */


	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, tgt) {
	            try {
	                var txt = new mofron.util.Vdom('div');
	                txt.setText('Loading..');
	                vd.addChild(txt);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'notifyTimeout',
	        value: function notifyTimeout(cbf, to) {
	            try {
	                if (0 > to) {
	                    throw new Error('invalid parameter');
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setVisible',
	        value: function setVisible(flg, eff) {
	            try {
	                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setVisible', this).call(this, flg, eff);
	                if (true === flg && 0 != this.timeout) {}
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Heading.js
	 * @brief  Base UI of Heading
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class(txt, lv) {
	        _classCallCheck(this, _class);

	        try {
	            var _lv = lv === undefined ? 1 : lv;
	            if (null === txt || 'number' != typeof _lv) {
	                throw new Error('invalid parameter');
	            }
	            if (1 > _lv || 6 < _lv) {
	                throw new Error('invalid parameter');
	            }

	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, [txt, _lv]));
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                // var frame = new mofron.parts.Frame();
	                //frame.style('width', '100%');
	                //frame.style('height', null);
	                //this.addChild(frame);

	                var conts = new mofron.util.Vdom('h' + prm[1]);
	                conts.setStyle('margin', '0px');
	                conts.setText(prm[0]);
	                //frame.getTarget().addChild(conts);
	                vd.addChild(conts);

	                //var style = new mofron.other.Styles(this, ' div');
	                //style.style('width'  , '100%');
	                //style.style('height' , '35px');
	                //style.style('border-left'  , 'solid 15px black');
	                //style.style('border-bottom', 'solid 1px black');
	                //if (null !== this.theme.colors[0]) {
	                //    style.style('border-color', this.theme.colors[0].getStyle());
	                //}
	                //
	                //var ttl_style = new mofron.other.Styles(this.title);
	                //ttl_style.style('margin-left'  , '20px');
	                //this.addChild(this.title,disp);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'marginLeft',
	        value: function marginLeft(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.getTarget().getStyle('margin-left');
	                }
	                if ('number' !== typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                this.style('margin-left', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Background.js
	 * @author simpart
	 */

	module.exports = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                var div = new mofron.util.Vdom('div');
	                div.setStyle('height', '100%');
	                div.setStyle('width', '100%');
	                div.setStyle('position', 'fixed');
	                vd.addChild(div);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.getVdom().getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setColor',
	        value: function setColor(clr) {
	            try {
	                //var style = new mofron.other.Styles(this);
	                //style.style('background'    , clr.getStyle ());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setShadow',
	        value: function setShadow(val) {
	            try {
	                //var style = new mofron.other.Styles(this);
	                //style.style('box-shadow'    , '0px '+ val/2 + 'px '+ val +'px '+ '0px gray');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file layout/Base.js
	 * @brief Base class of layout
	 */
	module.exports = function () {
	    function _class() {
	        _classCallCheck(this, _class);

	        try {
	            this.target = null;
	            this.exec_cnt = 0;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    /**
	     * @param tgt : (object) layout target Parts
	     */


	    _createClass(_class, [{
	        key: 'setTarget',
	        value: function setTarget(tgt) {
	            try {
	                this.target = tgt;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'layout',
	        value: function layout() {
	            try {
	                if (null === this.target) {
	                    throw new Error('target is null');
	                }
	                var tgt_chd = this.target.getChild();
	                for (var idx in tgt_chd) {
	                    if (idx < this.exec_cnt) {
	                        continue;
	                    }
	                    this.layoutFunc(idx, tgt_chd[idx]);
	                    this.exec_cnt++;
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'layoutFunc',
	        value: function layoutFunc(idx, tgt) {
	            try {
	                console.warn('layout is not implements');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file Horizon.js
	 */
	module.exports = function (_mofron$layout$Base) {
	    _inherits(_class, _mofron$layout$Base);

	    function _class(rt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

	            _this.exec_flg = false;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'layout',
	        value: function layout() {
	            try {
	                if (true === this.exec_flg) {
	                    return;
	                }

	                this.target.style('display', '-webkit-flex');
	                this.target.style('display', 'flex');
	                this.exec_flg = true;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.layout.Base);

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file HorizCenter.js
	 */
	module.exports = function (_mofron$layout$Base) {
	    _inherits(_class, _mofron$layout$Base);

	    function _class(rt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

	            var _rt = rt === undefined ? 80 : rt;
	            _this.rate = _rt;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'layout',
	        value: function layout() {
	            try {
	                var child = this.target.getChild();
	                for (var idx in child) {
	                    child[idx].getVdom().setStyle('width', this.rate + '%');
	                    child[idx].getVdom().setStyle('position', 'relative');
	                    child[idx].getVdom().setStyle('left', (100 - this.rate) / 2 + '%');
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.layout.Base);

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file Center.js
	 */

	module.exports = function (_mofron$layout$Base) {
	    _inherits(_class, _mofron$layout$Base);

	    function _class(rt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

	            var _rt = rt === undefined ? 50 : rt;
	            _this.rate = _rt;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'layout',
	        value: function layout() {
	            try {
	                this.target.style('display', '-webkit-flex');

	                var style = new mofron.other.Styles(tgt_chd);
	                style.style('height', this.rate + '%');
	                style.style('position', 'relative');
	                style.style('top', (100 - this.rate) / 2 + '%');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.layout.Base);
	/* end of file */

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file Margin.js
	 */

	module.exports = function (_mofron$layout$Base) {
	    _inherits(_class, _mofron$layout$Base);

	    function _class(tp, v) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

	            if ('string' != typeof tp || '' != tp && 'top' != tp && 'right' != tp && 'bottom' != tp && 'left' != tp || 'number' != typeof v) {
	                throw new Error('invalid parameter');
	            }
	            _this.type = tp;
	            _this.val = v;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'layoutFunc',
	        value: function layoutFunc(idx, tgt) {
	            try {
	                var mg = 'margin';
	                if ('' !== this.type) {
	                    mg += '-' + this.type;
	                }
	                tgt.getVdom().setStyle(mg, this.val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'value',
	        value: function value(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.val;
	                }
	                this.val = _val;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.layout.Base);

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file event/Base.js
	 */
	module.exports = function () {
	    function _class(cbf) {
	        _classCallCheck(this, _class);

	        try {
	            var _cbf = cbf === undefined ? null : cbf;
	            this.target = null;
	            this.cb_func = _cbf;
	            this.cb_parm = null;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: 'setTarget',
	        value: function setTarget(parts) {
	            try {
	                if ('object' != (typeof parts === 'undefined' ? 'undefined' : _typeof(parts))) {
	                    throw new Error('invalid parameter');
	                }
	                this.target = parts.getEventTgt();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setCbfunc',
	        value: function setCbfunc(cbf, cbp) {
	            try {
	                if (null === cbf) {
	                    throw new Error('invalid parameter');
	                }
	                var _cbp = cbp === undefined ? null : cbp;
	                this.cb_func = cbf;
	                this.cb_parm = _cbp;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'event',
	        value: function event() {
	            try {
	                console.warn('not implement');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();
	/* end of file */

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file Click.js
	 */
	module.exports = function (_mofron$event$Base) {
	    _inherits(_class, _mofron$event$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'event',
	        value: function event() {
	            try {
	                var cbf = this.cb_func;
	                var cbp = this.cb_parm;
	                if (false === this.target.isPushed()) {
	                    throw new Error('target is not ready');
	                }
	                //console.log('set click event -> ' + this.target.getId());
	                var tgt_dom = document.querySelector('#' + this.target.getId());
	                tgt_dom.addEventListener('click', function () {
	                    try {
	                        if (null != cbf) {
	                            cbf(cbp);
	                        }
	                    } catch (e) {
	                        console.error(e.stack);
	                        throw e;
	                    }
	                }, false);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.event.Base);
	/* end of file */

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file HoverOut.js
	 */
	module.exports = function (_mofron$event$Base) {
	    _inherits(_class, _mofron$event$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'event',
	        value: function event() {
	            try {
	                var cbf = this.cb_func;
	                var cbp = this.cb_parm;

	                if (false === this.target.isPushed()) {
	                    throw new Error('target is not ready');
	                }
	                var tgt_dom = document.querySelector('#' + this.target.getId());
	                tgt_dom.addEventListener('mouseover', function () {
	                    try {
	                        if (null != cbf) {
	                            cbf(cbp);
	                        }
	                    } catch (e) {
	                        console.error(e.stack);
	                        throw e;
	                    }
	                }, false);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.event.Base);

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file effect/Base.js
	 */
	module.exports = function () {
	    function _class(tgt, spd) {
	        _classCallCheck(this, _class);

	        try {
	            var _tgt = tgt === undefined ? null : tgt;
	            this.target = null;
	            if (null != _tgt) {
	                this.setTarget(_tgt);
	            }

	            var _spd = spd === undefined ? null : spd;
	            this.speed = 0.5;
	            if (null != _spd) {
	                this.setSpeed(_spd);
	            }
	            this.callback = new Array(null, null);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: 'setTarget',
	        value: function setTarget(tgt) {
	            try {
	                if ('object' != (typeof tgt === 'undefined' ? 'undefined' : _typeof(tgt))) {
	                    throw new Error('invalid parameter');
	                }
	                this.target = tgt;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'effect',
	        value: function effect(flg) {
	            try {
	                var _flg = flg === undefined ? true : flg;
	                var dom = this.target.getVdom();
	                if (false === dom.isPushed()) {
	                    throw new Error('target is not ready');
	                }
	                this.effect_func(_flg, dom);

	                if (null != this.callback[0]) {
	                    setTimeout(this.callback[0], 1000 * this.speed, this.callback[1]);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'effect_func',
	        value: function effect_func(flg, vd) {
	            try {} catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setSpeed',
	        value: function setSpeed(spd) {
	            try {
	                if ('number' != typeof spd) {
	                    throw new Error('invalid parameter');
	                }
	                this.speed = spd;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setCallback',
	        value: function setCallback(cbf, cbp) {
	            try {
	                var _cbp = cbp === undefined ? null : cbp;
	                if ('function' != typeof cbf) {
	                    throw new Error('invalid parameter');
	                }
	                this.callback[0] = cbf;

	                if (null != _cbp) {
	                    this.callback[1] = _cbp;
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function (_mofron$effect$Base) {
	    _inherits(_class, _mofron$effect$Base);

	    function _class(tgt, spd) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, tgt, spd));

	            _this.exec = false;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'effect_func',
	        value: function effect_func(flg, vd) {
	            try {
	                if (false === this.exec) {
	                    vd.setStyle('-webkit-transition', this.speed + 's all linear 0s');
	                    vd.setStyle('-moz-transition', 'all ' + this.speed + 's');
	                    vd.setStyle('-ms-transition', 'all ' + this.speed + 's');
	                    vd.setStyle('-o-transition', 'all ' + this.speed + 's');
	                    vd.setStyle('transtion', this.speed + 's all linear 0s');

	                    if (true === flg) {
	                        vd.setStyle('opacity', '0');
	                    } else {
	                        vd.setStyle('opacity', '1');
	                    }
	                }

	                var disp = vd.getStyle('display');
	                if ('none' == disp) {
	                    vd.setStyle('display', null);
	                }

	                setTimeout(function (prm) {
	                    if (true === prm[1]) {
	                        prm[0].setStyle('opacity', '1');
	                    } else {
	                        prm[0].setStyle('opacity', '0');
	                    }
	                }, 200, [vd, flg]);
	                //if (true === flg) {
	                //    vd.setStyle('opacity', '1');
	                //} else {
	                //    vd.setStyle('opacity', '0');
	                //}

	                //var tgt_dom = document.querySelector('#' + this.target.getVdom().getId());
	                //if (true === flg) {
	                //    tgt_dom.classList.add('mofron-effect-fadein');
	                //    tgt_dom.classList.remove('mofron-effect-fadeout');
	                //} else {
	                //    tgt_dom.classList.remove('mofron-effect-fadein');
	                //    tgt_dom.classList.add('mofron-effect-fadeout');
	                //}


	                this.exec = true;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getStyleTag',
	        value: function getStyleTag() {
	            try {
	                var ret_val = '<style>';

	                ret_val += '.mofron-effect-fadein {';
	                ret_val += 'opacity:1;';
	                ret_val += '}';

	                ret_val += '.mofron-effect-fadeout {';
	                ret_val += 'opacity:0;';
	                ret_val += '}';

	                ret_val += '</style>';
	                return ret_val;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.effect.Base);

	mofron.effect.fade_exec = false;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file tmpl/Base.js
	 */
	module.exports = function () {
	    function _class() {
	        _classCallCheck(this, _class);

	        try {
	            this.test;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }

	    _createClass(_class, [{
	        key: "start",
	        value: function start() {
	            try {} catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}();

/***/ }
/******/ ]);