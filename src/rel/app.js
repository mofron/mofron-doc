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

	__webpack_require__(1);
	//require('mof-parts-pagehdr');
	__webpack_require__(2);
	__webpack_require__(3);

	__webpack_require__(4);
	__webpack_require__(6);

	__webpack_require__(7);
	__webpack_require__(8);



/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @file index.js
	 * @note GPLv3 license 
	 */
	(function(){
	    var theme = class {
	    
	        constructor () {
	            try {
	                this.colors = new Array(
	                                      null,  /* main color */
	                                      null,  /* secondary color */
	                                      null   /* thirdly color */
	                                  );
	                this.font = new Array(
	                                    null,  /* main font */
	                                    null,  /* secondary font */
	                                    null   /* thirdly font */
	                                );
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	        
	        setColor (col, idx) {
	            try {
	                var _idx = (idx === undefined) ? 0 : idx;
	                if ( ('object' != (typeof col)) ||
	                     ('number' != (typeof _idx)) ) {
	                    throw new Error('invalid parameter');
	                }
	                this.colors[_idx] = col;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	        
	        getColor (idx) {
	            try {
	                var _idx = (idx === undefined) ? null : idx;
	                if (null === _idx) {
	                    return this.colors;
	                }
	                if ( ('number' !== (typeof _idx)) ||
	                     ((0 > _idx) || (this.colors.length <= _idx)) ) {
	                    throw new Error('invalid parameter');
	                }
	                return this.colors[_idx];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	        
	        setFont (ft, idx) {
	            try {
	                var _ft = (ft === undefined) ? null : ft;
	                var _idx = (idx === undefined) ? 0 : idx;
	                if (null === _ft) {
	                    return this.font;
	                }
	                if ( ('object' !== (typeof _ft)) ||
	                     ('number' !== (typeof _idx)) ) {
	                    throw new Error('invalid parameter');
	                }
	                this.font[_idx] = ft;
	                
	                var fm     = ft.getFamily();
	                var fm_str = '';
	                for (var f_idx in fm) {
	                    if ('' !== fm_str) {
	                        fm_str += ',';
	                    }
	                    fm_str += f_idx;
	                }
	                var hc = new mofron.util.HeadConts('style');
	                hc.addConts(
	                    mofron.util.getStyleConts(
	                        '.mofron-theme-font' + _idx,
	                        {'font-family' : fm_str}
	                    )
	                );
	                hc.pushTag();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	        
	        getFont (idx) {
	            try {
	                var _idx = (idx === undefined) ? null : idx;
	                if (null === _idx) {
	                    return this.font;
	                }
	                if ( ('number' !== (typeof _idx)) ||
	                     ((0 > _idx) || (this.font.length <= _idx)) ) {
	                    throw new Error('invalid parameter');
	                }
	                return this.font[_idx];
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }
	    mofron.util.theme = new theme();
	}());


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * @file BandText.js
	 */
	mofron.parts.AwesomeIcon = class extends mofron.parts.Text {
	    constructor (ico) {
	        try {
	 console.log(ico);
	            super(ico);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	    
	    initContents(vd, prm) {
	        try {
	            super.initContents(vd, '');
	            var tgt = this.getTarget();
	            tgt.chgTag('i');
	            tgt.addClname('fa ' + prm);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @file   Radihdg.js
	 * @author simpart
	 */

	mofron.parts.Radihdg = class extends mofron.parts.Heading {
	    getTarget () {
	        try {
	            return this.getChild(0).getTarget();
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	    
	    initContents(vd,prm) {
	        try {
	            var frame = new mofron.parts.Frame();
	            frame.style('width'       , '100%');
	            frame.style('height'      , null);
	            frame.style('border-width', '1px 1px 1px 10px');
	            frame.radius(30);
	            frame.addLayout(new mofron.layout.Margin('left',30));
	            this.addChild(frame, true, this.getVdom());
	            
	            super.initContents(this.getTarget(), prm);
	            this.marginLeft(30);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	    
	    marginLeft (val) {
	        try {
	            var _val = (val === undefined) ? null : val;
	            if (null === _val) {
	                return this.getTarget().getChild(0).getStyle('margin-left');
	            }
	            if ('number' !== (typeof _val)) {
	                throw new Error('invalid parameter');
	            }
	            this.getTarget().getChild(0).setStyle('margin-left', val + 'px');
	            this.getChild(0).getLayout(0).value(val);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);

	mofron.tmpl.CenterConts = class extends mofron.tmpl.Base {
	    constructor (app_nm) {
	        try {
	            super();
	            this.hdr = new mofron.parts.PageHeader(app_nm);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	    
	    setHeader (hdr) {
	        try {
	            if ('object' !== (typeof hdr)) {
	                throw new Error('invalid parameter');
	            }
	            this.hdr = hdr;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	    
	    start () {
	        try {
	            var base = new mofron.parts.Base();
	            base.addChild(this.hdr);
	            
	            base.init(false);
	            base.setVisible (true, null);
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @file   PageHeader.js
	 * @brief  Simpale Page Header
	 * @author simpart
	 */

	mofron.parts.PageHeader = class extends mofron.parts.Header {
	    initContents(vd, prm) {
	        try {
	            super.initContents(vd, prm);
	            
	            if ('string' != (typeof prm)) {
	                throw new Error('invalid parameter type');
	            }
	            
	            /* set header style */
	            var conts = this.vdom.getChild(0);
	            conts.setStyle('display'    , 'flex');
	            conts.setStyle('align-items', 'center');
	            
	            /* set header title */
	            var title = new mofron.parts.Text(prm);
	            title.size(35);
	            title.style('margin-left', '20px');
	            this.addChild(title);
	            
	            /* set text color */
	            if ( (undefined != mofron.util.theme) &&
	                 (null !== mofron.util.theme) ) {
	                var clr = mofron.util.theme.getColor(0);
	                if (null !== clr) {
	                    var rgb = clr.getRgba();
	                    if (290 > (rgb[0]+rgb[1]+rgb[2])) {
	                        title.color(new mofron.util.Color(255,255,255));
	                    }
	                }
	            }
	            
	            /* set reload link */
	            title.setLink('./');
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * @file   PageHeader.js
	 * @brief  Simpale Page Header
	 * @author simpart
	 */

	mofron.parts.PageHeader = class extends mofron.parts.Header {
	    initContents(vd, prm) {
	        try {
	            super.initContents(vd, prm);
	            
	            if ('string' != (typeof prm)) {
	                throw new Error('invalid parameter type');
	            }
	            
	            /* set header style */
	            var conts = this.vdom.getChild(0);
	            conts.setStyle('display'    , 'flex');
	            conts.setStyle('align-items', 'center');
	            
	            /* set header title */
	            var title = new mofron.parts.Text(prm);
	            title.size(35);
	            title.style('margin-left', '20px');
	            this.addChild(title);
	            
	            /* set text color */
	            if ( (undefined != mofron.util.theme) &&
	                 (null !== mofron.util.theme) ) {
	                var clr = mofron.util.theme.getColor(0);
	                if (null !== clr) {
	                    var rgb = clr.getRgba();
	                    if (290 > (rgb[0]+rgb[1]+rgb[2])) {
	                        title.color(new mofron.util.Color(255,255,255));
	                    }
	                }
	            }
	            
	            /* set reload link */
	            title.setLink('./');
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	(function() {
	    window.addEventListener("load",function(eve){
	        /* set theme */
	        mofron.util.theme.setColor (
	            new mofron.util.Color(37,113,130)
	        );
	        
	        mofron.util.theme.setColor (
	           new mofron.util.Color(240,240,240),
	           1
	        );
	        
	        var tm_font = new mofron.util.Font('Raleway');
	        tm_font.setFace('./font/raleway/Raleway-Regular.ttf');
	        mofron.util.theme.setFont(tm_font);
	        
	    });
	}());


/***/ },
/* 8 */
/***/ function(module, exports) {

	(function() {
	    window.addEventListener("load",function(eve) {
	        try {
	            //var hdr = new mofron.parts.Radihdg('test').init();
	            var center = new mofron.tmpl.CenterConts('mofron.js Documentation');
	            center.start();
	            new mofron.parts.Button('test').init();
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	    });
	}());



/***/ }
/******/ ]);