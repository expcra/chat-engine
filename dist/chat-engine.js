(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ChatEngineCore"] = factory();
	else
		root["ChatEngineCore"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);
var isBuffer = __webpack_require__(31);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var waterfall = __webpack_require__(3);
var RootEmitter = __webpack_require__(13);

var augmentSender = __webpack_require__(69);
/**
 An ChatEngine generic emitter that supports plugins and duplicates
 events on the root emitter.
 @class Emitter
 @extends RootEmitter
 */

var Emitter = function (_RootEmitter) {
    _inherits(Emitter, _RootEmitter);

    function Emitter(chatEngine) {
        _classCallCheck(this, Emitter);

        var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

        _this.chatEngine = chatEngine;

        _this.name = 'Emitter';

        /**
         Stores a list of plugins bound to this object
         @private
         */
        _this.plugins = [];

        /**
         Stores in memory keys and values
         @private
         */
        _this._dataset = {};

        _this.plugin(augmentSender(chatEngine));

        /**
         Emit events locally.
          @private
         @param {String} event The event payload object
         */
        _this._emit = function (event) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            // all events are forwarded to ChatEngine object
            // so you can globally bind to events with ChatEngine.on()
            _this.chatEngine._emit(event, data, _this);

            // emit the event from the object that created it
            _this.emitter.emit(event, data);

            return _this;
        };

        /**
         * Listen for a specific event and fire a callback when it's emitted. Supports wildcard matching.
         * @method
         * @param {String} event The event name
         * @param {Function} cb The function to run when the event is emitted
         * @example
         *
         * // Get notified whenever someone joins the room
         * object.on('event', (payload) => {
         *     console.log('event was fired').
         * })
         *
         * // Get notified of event.a and event.b
         * object.on('event.*', (payload) => {
         *     console.log('event.a or event.b was fired').;
         * })
         */
        _this.on = function (event, cb) {

            // call the private _on property
            _this._on(event, cb);

            return _this;
        };

        return _this;
    }

    // add an object as a subobject under a namespace
    /**
     * @private
     */


    _createClass(Emitter, [{
        key: 'addChild',
        value: function addChild(childName, childOb) {
            // assign the new child object as a property of parent under the
            // given namespace
            this[childName] = childOb;

            // assign a data set for the namespace if it doesn't exist
            if (!this._dataset[childName]) {
                this._dataset[childName] = {};
            }

            // the new object can use ```this.parent``` to access
            // the root class
            childOb.parent = this;

            // bind get() and set() to the data set
            childOb.get = this.get.bind(this._dataset[childName]);
            childOb.set = this.set.bind(this._dataset[childName]);
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this[key];
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            if (this[key] && !value) {
                delete this[key];
            } else {
                this[key] = value;
            }
        }

        /**
         Binds a plugin to this object
         @param {Object} module The plugin module
         @tutorial using
         */

    }, {
        key: 'plugin',
        value: function plugin(module) {

            // add this plugin to a list of plugins for this object
            this.plugins.push(module);

            // see if there are plugins to attach to this class
            if (module.extends && module.extends[this.name]) {
                // attach the plugins to this class
                // under their namespace
                this.addChild(module.namespace, new module.extends[this.name]());

                this[module.namespace].ChatEngine = this.chatEngine;

                // if the plugin has a special construct function
                // run it
                if (this[module.namespace].construct) {
                    this[module.namespace].construct();
                }
            }

            return this;
        }

        /**
         * @private
         */

    }, {
        key: 'bindProtoPlugins',
        value: function bindProtoPlugins() {
            var _this2 = this;

            if (this.chatEngine.protoPlugins[this.name]) {

                this.chatEngine.protoPlugins[this.name].forEach(function (module) {
                    _this2.plugin(module);
                });
            }
        }

        /**
         Broadcasts an event locally to all listeners.
         @private
         @param {String} event The event name
         @param {Object} payload The event payload object
         */

    }, {
        key: 'trigger',
        value: function trigger(event) {
            var _this3 = this;

            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};


            // let plugins modify the event
            this.runPluginQueue('on', event, function (next) {
                next(null, payload);
            }, function (reject, pluginResponse) {

                if (reject) {
                    done(reject);
                } else {

                    // emit this event to any listener
                    _this3._emit(event, pluginResponse);
                    done(null, event, pluginResponse);
                }
            });
        }

        /**
         Load plugins and attach a queue of functions to execute before and
         after events are trigger or received.
          @private
         @param {String} location Where in the middleeware the event should run (emit, trigger)
         @param {String} event The event name
         @param {String} first The first function to run before the plugins have run
         @param {String} last The last function to run after the plugins have run
         */

    }, {
        key: 'runPluginQueue',
        value: function runPluginQueue(location, event, first, last) {

            // this assembles a queue of functions to run as middleware
            // event is a triggered event key
            var pluginQueue = [];

            // the first function is always required
            pluginQueue.push(first);

            // look through the configured plugins
            this.plugins.forEach(function (pluginItem) {

                // if they have defined a function to run specifically
                // for this event
                if (pluginItem.middleware && pluginItem.middleware[location]) {

                    if (pluginItem.middleware[location][event]) {
                        // add the function to the queue
                        pluginQueue.push(pluginItem.middleware[location][event]);
                    }

                    if (pluginItem.middleware[location]['*']) {
                        // add the function to the queue
                        pluginQueue.push(pluginItem.middleware[location]['*']);
                    }
                }
            });

            // waterfall runs the functions in assigned order
            // waiting for one to complete before moving to the next
            // when it's done, the ```last``` parameter is called
            waterfall(pluginQueue, last);
        }

        /**
         * @private
         */

    }, {
        key: 'onConstructed',
        value: function onConstructed() {

            this.bindProtoPlugins();
            this.trigger(['$', 'created', this.name.toLowerCase()].join('.'));
        }
    }]);

    return Emitter;
}(RootEmitter);

module.exports = Emitter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(33);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(9);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (tasks, callback) {
    callback = (0, _once2.default)(callback || _noop2.default);
    if (!(0, _isArray2.default)(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        if (taskIndex === tasks.length) {
            return callback.apply(null, [null].concat(args));
        }

        var taskCallback = (0, _onlyOnce2.default)((0, _baseRest2.default)(function (err, args) {
            if (err) {
                return callback.apply(null, [err].concat(args));
            }
            nextTask(args);
        }));

        args.push(taskCallback);

        var task = tasks[taskIndex++];
        task.apply(null, args);
    }

    nextTask([]);
};

var _isArray = __webpack_require__(14);

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = __webpack_require__(15);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(16);

var _once2 = _interopRequireDefault(_once);

var _baseRest = __webpack_require__(52);

var _baseRest2 = _interopRequireDefault(_baseRest);

var _onlyOnce = __webpack_require__(22);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of functions to run, each function is passed
 * a `callback(err, result1, result2, ...)` it must call on completion. The
 * first argument is an error (which can be `null`) and any further arguments
 * will be passed as arguments in order to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    getRawTag = __webpack_require__(62),
    objectToString = __webpack_require__(63);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(20);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(34);
var buildURL = __webpack_require__(36);
var parseHeaders = __webpack_require__(37);
var isURLSameOrigin = __webpack_require__(38);
var createError = __webpack_require__(10);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(39);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(40);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(35);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Allows us to create and bind to events. Everything in ChatEngine is an event
// emitter
var EventEmitter2 = __webpack_require__(50).EventEmitter2;

/**
* The {@link ChatEngine} object is a RootEmitter. Configures an event emitter that other ChatEngine objects inherit. Adds shortcut methods for
* ```this.on()```, ```this.emit()```, etc.
* @class RootEmitter
*/

var RootEmitter = function RootEmitter() {
    var _this = this;

    _classCallCheck(this, RootEmitter);

    /**
    * @private
    */
    this.events = {};

    /**
    Handy property to identify what this class is.
    @type String
    @private
    */
    this.name = 'RootEmitter';

    /**
    Create a new EventEmitter2 object for this class.
     @private
    */
    this.emitter = new EventEmitter2({
        wildcard: true,
        newListener: true,
        maxListeners: 50,
        verboseMemoryLeak: true
    });

    // we bind to make sure wildcards work
    // https://github.com/asyncly/EventEmitter2/issues/186

    /**
    Private emit method that broadcasts the event to listeners on this page.
     @private
    @param {String} event The event name
    @param {Object} the event payload
    */
    this._emit = this.emitter.emit.bind(this.emitter);

    /**
    Listen for a specific event and fire a callback when it's emitted. This is reserved in case ```this.on``` is overwritten.
     @private
    @param {String} event The event name
    @param {Function} callback The function to run when the event is emitted
    */

    this._on = this.emitter.on.bind(this.emitter);

    /**
    * Listen for a specific event and fire a callback when it's emitted. Supports wildcard matching.
    * @method
    * @param {String} event The event name
    * @param {Function} cb The function to run when the event is emitted
    * @example
    *
    * // Get notified whenever someone joins the room
    * object.on('event', (payload) => {
    *     console.log('event was fired').
    * })
    *
    * // Get notified of event.a and event.b
    * object.on('event.*', (payload) => {
    *     console.log('event.a or event.b was fired').;
    * })
    */
    this.on = function (event, callback) {

        // emit the event from the object that created it
        _this.emitter.on(event, callback);

        return _this;
    };

    /**
    * Stop a callback from listening to an event.
    * @method
    * @param {String} event The event name
    * @example
    * let callback = function(payload;) {
    *    console.log('something happend!');
    * };
    * object.on('event', callback);
    * // ...
    * object.off('event', callback);
    */
    this.off = function (event, callback) {

        // emit the event from the object that created it
        _this.emitter.off(event, callback);

        return _this;
    };

    /**
    * Listen for any event on this object and fire a callback when it's emitted
    * @method
    * @param {Function} callback The function to run when any event is emitted. First parameter is the event name and second is the payload.
    * @example
    * object.onAny((event, payload) => {
    *     console.log('All events trigger this.');
    * });
    */
    this.onAny = function (event, callback) {

        // emit the event from the object that created it
        _this.emitter.onAny(event, callback);

        return _this;
    };

    /**
    * Listen for an event and only fire the callback a single time
    * @method
    * @param {String} event The event name
    * @param {Function} callback The function to run once
    * @example
    * object.once('message', => (event, payload) {
    *     console.log('This is only fired once!');
    * });
    */
    this.once = function (event, callback) {

        // emit the event from the object that created it
        _this.emitter.once(event, callback);

        return _this;
    };
};

module.exports = RootEmitter;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = once;
function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}
module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(4),
    isObject = __webpack_require__(21);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onlyOnce;
function onlyOnce(fn) {
    return function () {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}
module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(18),
    isLength = __webpack_require__(24);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emitter = __webpack_require__(1);

/**
This is our User class which represents a connected client. User's are automatically created and managed by {@link Chat}s, but you can also instantiate them yourself.
If a User has been created but has never been authenticated, you will recieve 403s when connecting to their feed or direct Chats.
@class User
@extends Emitter
@extends RootEmitter
@param {User#uuid} uuid A unique identifier for this user.
@param {User#state} state The {@link User}'s state object synchronized between all clients of the chat.
 */

var User = function (_Emitter) {
    _inherits(User, _Emitter);

    function User(chatEngine, uuid) {
        var _ret;

        var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));

        _this.chatEngine = chatEngine;

        _this.name = 'User';

        /**
         The User's unique identifier, usually a device uuid. This helps ChatEngine identify the user between events. This is public id exposed to the network.
         Check out [the wikipedia page on UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier).
          @readonly
         @type String
         */
        _this.uuid = uuid.toString();

        /**
         * Gets the user state. See {@link Me#update} for how to assign state values.
         * @return {Object} Returns a generic JSON object containing state information.
         * @example
         *
         * // State
         * let state = user.state;
         */
        _this.state = state;

        _this._stateSet = false;

        /**
         * Feed is a Chat that only streams things a User does, like
         * 'startTyping' or 'idle' events for example. Anybody can subscribe
         * to a User's feed, but only the User can publish to it. Users will
         * not be able to converse in this channel.
         *
         * @type Chat
         * @example
         * // me
         * me.feed.emit('update', 'I may be away from my computer right now');
         *
         * // another instance
         * them.feed.connect();
         * them.feed.on('update', (payload) => {})
         */

        // grants for these chats are done on auth. Even though they're marked private, they are locked down via the server
        _this.feed = new _this.chatEngine.Chat([chatEngine.global.channel, 'user', uuid, 'read.', 'feed'].join('#'), false, _this.constructor.name === 'Me', {}, 'system');

        /**
         * Direct is a private channel that anybody can publish to but only
         * the user can subscribe to. Great for pushing notifications or
         * inviting to other chats. Users will not be able to communicate
         * with one another inside of this chat. Check out the
         * {@link Chat#invite} method for private chats utilizing
         * {@link User#direct}.
         *
         * @type Chat
         * @example
         * // me
         * me.direct.on('private-message', (payload) -> {
        *     console.log(payload.sender.uuid, 'sent your a direct message');
        * });
         *
         * // another instance
         * them.direct.connect();
         * them.direct.emit('private-message', {secret: 42});
         */
        _this.direct = new _this.chatEngine.Chat([chatEngine.global.channel, 'user', uuid, 'write.', 'direct'].join('#'), false, _this.constructor.name === 'Me', {}, 'system');

        // if the user does not exist at all and we get enough
        // information to build the user
        if (!chatEngine.users[uuid]) {
            chatEngine.users[uuid] = _this;
        }

        if (Object.keys(state).length) {
            // update this user's state in it's created context
            _this.assign(state);
        }

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
     this is only called from network updates
     @private
     */


    _createClass(User, [{
        key: 'assign',
        value: function assign(state) {

            var oldState = this.state || {};
            this.state = Object.assign(oldState, state);

            this._stateSet = true;
        }

        /**
         * @private
         * @param {Object} state The new state for the user
         */

    }, {
        key: 'update',
        value: function update(state) {
            this.assign(state);
        }

        /**
        Get stored user state from remote server.
        @private
        */

    }, {
        key: '_getStoredState',
        value: function _getStoredState(callback) {
            var _this2 = this;

            if (!this._stateSet) {

                this.chatEngine.request('get', 'user_state', {
                    user: this.uuid
                }).then(function (res) {

                    _this2.assign(res.data);
                    callback(_this2.state);
                }).catch(function (err) {
                    _this2.chatEngine.throwError(_this2, 'trigger', 'getState', err);
                });
            } else {
                callback(this.state);
            }
        }
    }]);

    return User;
}(Emitter);

module.exports = User;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var init = __webpack_require__(28);

/**
Global object used to create an instance of {@link ChatEngine}.

@alias ChatEngineCore
@param pnConfig {Object} ChatEngine is based off PubNub. Supply your PubNub configuration parameters here. See the getting started tutorial and [the PubNub docs](https://www.pubnub.com/docs/web-javascript/api-reference-configuration).
@param ceConfig {Object} A list of ChatEngine specific configuration options.
@param [ceConfig.globalChannel=chat-engine] {String} The root channel. See {@link ChatEngine.global}
@param [ceConfig.enableSync] {Boolean} Synchronizes chats between instances with the same {@link Me#uuid}. See {@link Me#sync}.
@param [ceConfig.enableMeta] {Boolean} Persists {@link Chat#meta} on the server. See {@link Chat#update}.
@param [ceConfig.throwErrors=true] {Boolean} Throws errors in JS console.
@param [ceConfig.endpoint='https://pubsub.pubnub.com/v1/blocks/sub-key/YOUR_SUB_KEY/chat-engine-server'] {String} The root URL of the server used to manage permissions for private channels. Set by default to match the PubNub functions deployed to your account. See {@tutorial privacy} for more.
@param [ceConfig.debug] {Boolean} Logs all ChatEngine events to the console This should not be enabled in production.
@param [ceConfig.profile] {Boolean} Sums event counts and outputs a table to the console every few seconds.
@return {ChatEngine} Returns an instance of {@link ChatEngine}
@example
ChatEngine = ChatEngineCore.create({
    publishKey: 'YOUR_PUB_KEY',
    subscribeKey: 'YOUR_SUB_KEY'
});
*/

var create = function create(pnConfig) {
    var ceConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (ceConfig.globalChannel) {
        ceConfig.globalChannel = ceConfig.globalChannel.toString();
    } else {
        ceConfig.globalChannel = 'chat-engine';
    }

    if (typeof ceConfig.throwErrors === 'undefined') {
        ceConfig.throwErrors = true;
    }

    if (typeof ceConfig.enableSync === 'undefined') {
        ceConfig.enableSync = false;
    }

    if (typeof ceConfig.enableMeta === 'undefined') {
        ceConfig.enableMeta = false;
    }

    ceConfig.endpoint = ceConfig.endpoint || 'https://pubsub.pubnub.com/v1/blocks/sub-key/' + pnConfig.subscribeKey + '/chat-engine-server';

    pnConfig.heartbeatInterval = pnConfig.heartbeatInterval || 0;

    // return an instance of ChatEngine
    return init(ceConfig, pnConfig);
};

// export the ChatEngine api
var ChatEngineCore = {
    plugin: {},
    create: create
};

module.exports = ChatEngineCore;

module.exports.ChatEngineCore = ChatEngineCore;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(29);
var PubNub = __webpack_require__(48);
var pack = __webpack_require__(49);

var RootEmitter = __webpack_require__(13);
var Chat = __webpack_require__(51);
var Me = __webpack_require__(99);
var User = __webpack_require__(26);
var waterfall = __webpack_require__(3);

/**
@class ChatEngine
@extends RootEmitter
@return {ChatEngine} Returns an instance of {@link ChatEngine}
*/
module.exports = function () {
    var ceConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var pnConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Create the root ChatEngine object
    var ChatEngine = new RootEmitter();

    ChatEngine.ceConfig = ceConfig;
    ChatEngine.pnConfig = pnConfig;

    /**
     * A map of all known {@link User}s in this instance of ChatEngine.
     * @type {Object}
     * @memberof ChatEngine
     */
    ChatEngine.users = {};

    /**
     * A map of all known {@link Chat}s in this instance of ChatEngine.
     * @memberof ChatEngine
     * @type {Object}
     */
    ChatEngine.chats = {};

    /**
     * A global {@link Chat} that all {@link User}s join when they connect to ChatEngine. Useful for announcements, alerts, and global events.
     * @member {Chat} global
     * @memberof ChatEngine
     */
    ChatEngine.global = false;

    /**
     * This instance of ChatEngine represented as a special {@link User} know as {@link Me}.
     * @member {Me} me
     * @memberof ChatEngine
     */
    ChatEngine.me = false;

    /**
     * An instance of PubNub, the networking infrastructure that powers the realtime communication between {@link User}s in {@link Chats}.
     * @member {Object} pubnub
     * @memberof ChatEngine
     */
    ChatEngine.pubnub = false;

    /**
     * Indicates if ChatEngine has fired the {@link ChatEngine#$"."ready} event.
     * @member {Object} ready
     * @memberof ChatEngine
     */
    ChatEngine.ready = false;

    /**
     * The package.json for ChatEngine. Used mainly for detecting package version.
     * @type {Object}
     */
    ChatEngine.package = pack;

    ChatEngine.throwError = function (self, cb, key, ceError) {
        var payload = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};


        if (ceConfig.throwErrors) {
            // throw ceError;
            console.error(payload);
            throw ceError;
        }

        payload.ceError = ceError.toString();

        self[cb](['$', 'error', key].join('.'), payload);
    };

    if (ceConfig.debug) {

        ChatEngine.onAny(function (event, payload) {
            console.info('debug:', event, payload);
        });
    }

    if (ceConfig.profile) {

        var countObject = {};

        ChatEngine.onAny(function (event) {
            countObject['event: ' + event] = countObject[event] || 0;
            countObject['event: ' + event] += 1;
        });

        setInterval(function () {

            countObject.chats = Object.keys(ChatEngine.chats).length;
            countObject.users = Object.keys(ChatEngine.users).length;

            console.table(countObject);
        }, 3000);
    }

    ChatEngine.protoPlugins = {};

    /**
     * Bind a plugin to all future instances of a Class.
     * @method ChatEngine#proto
     * @param  {String} className The string representation of a class to bind to
     * @param  {Class} plugin The plugin function.
     */
    ChatEngine.proto = function (className, plugin) {
        ChatEngine.protoPlugins[className] = ChatEngine.protoPlugins[className] || [];
        ChatEngine.protoPlugins[className].push(plugin);
    };

    /**
     * @private
     */
    ChatEngine.request = function (method, route) {
        var inputBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var inputParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


        var body = {
            uuid: ChatEngine.pnConfig.uuid,
            global: ceConfig.globalChannel,
            authKey: ChatEngine.pnConfig.authKey
        };

        var params = {
            route: route
        };

        body = Object.assign(body, inputBody);
        params = Object.assign(params, inputParams);

        if (method === 'get' || method === 'delete') {
            params = Object.assign(params, body);
            return axios[method](ceConfig.endpoint, { params: params });
        } else {
            return axios[method](ceConfig.endpoint, body, { params: params });
        }
    };

    /**
     * Parse a channel name into chat object parts
     * @private
     */
    ChatEngine.parseChannel = function (channel) {

        var info = channel.split('#');

        return {
            global: info[0],
            type: info[1],
            private: info[2] === 'private.'
        };
    };

    /**
     * Get the internal channel name of supplied string
     * @private
     */
    ChatEngine.augmentChannel = function () {
        var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();
        var isPrivate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


        var channel = original.toString();

        // public.* has PubNub permissions for everyone to read and write
        // private.* is totally locked down and users must be granted access one by one
        var chanPrivString = 'public.';

        if (isPrivate) {
            chanPrivString = 'private.';
        }

        if (channel.indexOf(ChatEngine.ceConfig.globalChannel) === -1) {
            channel = [ChatEngine.ceConfig.globalChannel, 'chat', chanPrivString, channel].join('#');
        }

        return channel;
    };

    /**
     * Initial communication with the server. Server grants permissions to
     * talk in chats, etc.
     * @private
     */
    ChatEngine.handshake = function (complete) {

        waterfall([function (next) {
            ChatEngine.request('post', 'bootstrap').then(function () {
                next(null);
            }).catch(next);
        }, function (next) {
            ChatEngine.request('post', 'user_read').then(function () {
                next(null);
            }).catch(next);
        }, function (next) {
            ChatEngine.request('post', 'user_write').then(function () {
                next(null);
            }).catch(next);
        }, function (next) {
            ChatEngine.request('post', 'group').then(function () {
                next();
            }).catch(next);
        }], function (error) {

            if (error) {
                ChatEngine.throwError(ChatEngine, '_emit', 'auth', new Error('There was a problem logging into the auth server (' + ceConfig.endpoint + ').' + error && error.response && error.response.data), { error: error });
            } else {
                complete();
            }
        });
    };

    /**
     * Listen to PubNub events and forward them into ChatEngine system.
     * @private
     */
    ChatEngine.listenToPubNub = function () {

        ChatEngine.pubnub.addListener({
            message: function message(m) {

                // assign the message timetoken as a property of the payload
                m.message.timetoken = m.timetoken;

                if (ChatEngine.chats[m.channel]) {
                    ChatEngine.chats[m.channel].trigger(m.message.event, m.message);
                }
            },
            presence: function presence(payload) {

                if (ChatEngine.chats[payload.channel]) {
                    ChatEngine.chats[payload.channel].onPresence(payload);
                }
            },
            status: function status(statusEvent) {

                /**
                 * SDK detected that network is online.
                 * @event ChatEngine#$"."network"."up"."online
                 */

                /**
                 * SDK detected that network is down.
                 * @event ChatEngine#$"."network"."down"."offline
                 */

                /**
                 * A subscribe event experienced an exception when running.
                 * @event ChatEngine#$"."network"."down"."issue
                 */

                /**
                 * SDK was able to reconnect to pubnub.
                 * @event ChatEngine#$"."network"."up"."reconnected
                 */

                /**
                 * SDK subscribed with a new mix of channels.
                 * @event ChatEngine#$"."network"."up"."connected
                 */

                /**
                 * JSON parsing crashed.
                 * @event ChatEngine#$"."network"."down"."malformed
                 */

                /**
                 * Server rejected the request.
                 * @event ChatEngine#$"."network"."down"."badrequest
                 */

                /**
                 * If using decryption strategies and the decryption fails.
                 * @event ChatEngine#$"."network"."down"."decryption
                 */

                /**
                 * Request timed out.
                 * @event ChatEngine#$"."network"."down"."timeout
                 */

                /**
                 * PAM permission failure.
                 * @event ChatEngine#$"."network"."down"."denied
                 */

                // map the pubnub events into ChatEngine events
                var categories = {
                    PNNetworkUpCategory: 'up.online',
                    PNNetworkDownCategory: 'down.offline',
                    PNNetworkIssuesCategory: 'down.issue',
                    PNReconnectedCategory: 'up.reconnected',
                    PNConnectedCategory: 'up.connected',
                    PNAccessDeniedCategory: 'down.denied',
                    PNMalformedResponseCategory: 'down.malformed',
                    PNBadRequestCategory: 'down.badrequest',
                    PNDecryptionErrorCategory: 'down.decryption',
                    PNTimeoutCategory: 'down.timeout'
                };

                var eventName = ['$', 'network', categories[statusEvent.category] || 'other'].join('.');

                ChatEngine._emit(eventName, statusEvent);
            }
        });
    };

    /**
     * Subscribe to PubNub and begin receiving events.
     * @private
     */
    ChatEngine.subscribeToPubNub = function () {

        var chanGroups = [ceConfig.globalChannel + '#' + ChatEngine.me.uuid + '#rooms', ceConfig.globalChannel + '#' + ChatEngine.me.uuid + '#system', ceConfig.globalChannel + '#' + ChatEngine.me.uuid + '#custom'];

        ChatEngine.pubnub.subscribe({
            channelGroups: chanGroups,
            withPresence: true
        });
    };

    /**
     * Initialize ChatEngine modules on first time boot.
     * @private
     */
    ChatEngine.firstConnect = function (state) {

        ChatEngine.pubnub = new PubNub(ChatEngine.pnConfig);

        // create a new chat to use as global chat
        // we don't do auth on this one because it's assumed to be done with the /auth request below
        ChatEngine.global = new ChatEngine.Chat(ceConfig.globalChannel, false, true, {}, 'system');

        ChatEngine.global.once('$.connected', function () {

            // build the current user
            ChatEngine.me = new Me(ChatEngine, ChatEngine.pnConfig.uuid);

            /**
            * Fired when a {@link Me} has been created within ChatEngine.
            * @event ChatEngine#$"."created"."me
            * @example
            * ChatEngine.on('$.created.me', (data, me) => {
            *     console.log('Me was created', me);
            * });
            */
            ChatEngine.me.onConstructed();

            if (ChatEngine.ceConfig.enableSync) {
                ChatEngine.me.session.subscribe();
            }

            ChatEngine.me.update(state, function () {

                /**
                 *  Fired when ChatEngine is connected to the internet and ready to go!
                 * @event ChatEngine#$"."ready
                 * @example
                 * ChatEngine.on('$.ready', (data) => {
                 *     let me = data.me;
                 * })
                 */
                ChatEngine._emit('$.ready', {
                    me: ChatEngine.me
                });

                ChatEngine.ready = true;

                ChatEngine.listenToPubNub();
                ChatEngine.subscribeToPubNub();

                ChatEngine.global.getUserUpdates();

                if (ChatEngine.ceConfig.enableSync) {
                    ChatEngine.me.session.restore();
                }
            });
        });
    };

    /**
     * Disconnect from all {@link Chat}s and mark them as asleep.
     * @method ChatEngine#disconnect
     * @example
     *
     * // create a new chat
     * let chat = new ChatEngine.Chat(new Date().getTime());
     *
     * // disconnect from ChatEngine
     * ChatEngine.disconnect();
     *
     * // every individual chat will be disconnected
     * chat.on('$.disconnected', () => {
     *     done();
     * });
     *
     * // Changing User:
     * ChatEngine.disconnect()
     * ChatEngine = new ChatEngine({}, {});
     * ChatEngine.connect()
     */
    ChatEngine.disconnect = function () {

        // Unsubscribe from all PubNub chats
        ChatEngine.pubnub.unsubscribeAll();

        // for every chat in ChatEngine.chats, signal disconnected
        Object.keys(ChatEngine.chats).forEach(function (key) {
            ChatEngine.chats[key].sleep();
        });
    };

    /**
     * Performs authentication with server and restores connection
     * to all sleeping chats.
     * @method ChatEngine#reconnect
     * @example
     *
     * // create a new chat
     * let chat = new ChatEngine.Chat(new Date().getTime());
     *
     * // disconnect from ChatEngine
     * ChatEngine.disconnect();
     *
     * // reconnect sometime later
     * ChatEngine.reconnect();
     *
     */
    ChatEngine.reconnect = function () {

        // do the whole auth flow with the new authKey
        ChatEngine.handshake(function () {
            // for every chat in ChatEngine.chats, call .connect()
            Object.keys(ChatEngine.chats).forEach(function (key) {
                ChatEngine.chats[key].wake();
            });

            ChatEngine.subscribeToPubNub();
        });
    };

    /**
    @private
    */
    ChatEngine.setAuth = function () {
        var authKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PubNub.generateUUID();


        ChatEngine.pnConfig.authKey = authKey;
        ChatEngine.pubnub.setAuthKey(authKey);
    };

    /**
     * Disconnects, changes authentication token, performs handshake with server
     * and reconnects with new auth key. Used for extending logged in sessions
     * for active users.
     * @method ChatEngine#reauthorize
     * @example
     * // early
     * ChatEngine.connect(...);
     *
     * ChatEngine.once('$.connected', () => {
     *     // first connection established
     * });
     *
     * // some time passes, session token expires
     * ChatEngine.reauthorize(authKey);
     *
     * // we are connected again
     * ChatEngine.once('$.connected', () => {
     *     // we are connected again
     * });
     */
    ChatEngine.reauthorize = function () {
        var authKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PubNub.generateUUID();


        ChatEngine.global.once('$.disconnected', function () {

            ChatEngine.setAuth(authKey);
            ChatEngine.reconnect();
        });

        ChatEngine.disconnect();
    };

    /**
     * Connect to realtime service and create instance of {@link Me}
     * @method ChatEngine#connect
     * @param {String} uuid A unique string for {@link Me}. It can be a device id, username, user id, email, etc. Must be alphanumeric.
     * @param {Object} [state={}] An object containing information about this client ({@link Me}). This JSON object is sent to all other clients on the network, so no passwords!
     * @param {String} [authKey] A authentication secret. Will be sent to authentication backend for validation. This is usually an access token. See {@tutorial auth} for more.
     * @fires $"."connected
     */
    ChatEngine.connect = function (uuid) {
        var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var authKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PubNub.generateUUID();


        // this creates a user known as Me and
        // connects to the global chatroom
        ChatEngine.pnConfig.uuid = uuid;
        ChatEngine.pnConfig.authKey = authKey;

        ChatEngine.handshake(function () {
            ChatEngine.firstConnect(state);
        });
    };

    ChatEngine.destroy = function () {

        Object.keys(ChatEngine.chats).forEach(function (chat) {
            ChatEngine.chats[chat].emitter.removeAllListeners();
        });

        Object.keys(ChatEngine.users).forEach(function (user) {
            ChatEngine.users[user].emitter.removeAllListeners();
        });

        ChatEngine.emitter.removeAllListeners();
    };

    /**
     * The {@link Chat} class. Creates a new Chat when initialized, or returns an existing instance if chat has already been created.
     * @member {Chat} Chat
     * @memberof ChatEngine
     * @see {@link Chat}
     */
    ChatEngine.Chat = function createChat() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var internalChannel = ChatEngine.augmentChannel(args[0], args[1]);

        if (ChatEngine.chats[internalChannel]) {
            return ChatEngine.chats[internalChannel];
        } else {

            var newChat = new (Function.prototype.bind.apply(Chat, [null].concat([ChatEngine], args)))();

            /**
            * Fired when a {@link Chat} has been created within ChatEngine.
            * @event ChatEngine#$"."created"."chat
            * @example
            * ChatEngine.on('$.created.chat', (data, chat) => {
            *     console.log('Chat was created', chat);
            * });
            */
            newChat.onConstructed();

            return newChat;
        }
    };

    /**
     * The {@link User} class. Creates a new User when initialized, or returns an existing instance if chat has already been created.
     * @member {User} User
     * @memberof ChatEngine
     * @see {@link User}
     */
    ChatEngine.User = function createUser() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        if (ChatEngine.me.uuid === args[0]) {
            return ChatEngine.me;
        } else if (ChatEngine.users[args[0]]) {
            return ChatEngine.users[args[0]];
        } else {

            var newUser = new (Function.prototype.bind.apply(User, [null].concat([ChatEngine], args)))();

            /**
            * Fired when a {@link User} has been created within ChatEngine.
            * @event ChatEngine#$"."created"."user
            * @example
            * ChatEngine.on('$.created.user', (data, user) => {
            *     console.log('Chat was created', user);
            * });
            */
            newUser.onConstructed();

            return newUser;
        }
    };

    return ChatEngine;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(32);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(12);
axios.CancelToken = __webpack_require__(46);
axios.isCancel = __webpack_require__(11);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(47);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(41);
var dispatchRequest = __webpack_require__(42);
var isAbsoluteURL = __webpack_require__(44);
var combineURLs = __webpack_require__(45);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(43);
var isCancel = __webpack_require__(11);
var defaults = __webpack_require__(2);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(12);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PubNub=t():e.PubNub=t()}(window,function(){return r={},i.m=n=[function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={PNTimeOperation:"PNTimeOperation",PNHistoryOperation:"PNHistoryOperation",PNDeleteMessagesOperation:"PNDeleteMessagesOperation",PNFetchMessagesOperation:"PNFetchMessagesOperation",PNMessageCounts:"PNMessageCountsOperation",PNSubscribeOperation:"PNSubscribeOperation",PNUnsubscribeOperation:"PNUnsubscribeOperation",PNPublishOperation:"PNPublishOperation",PNSignalOperation:"PNSignalOperation",PNAddMessageActionOperation:"PNAddActionOperation",PNRemoveMessageActionOperation:"PNRemoveMessageActionOperation",PNGetMessageActionsOperation:"PNGetMessageActionsOperation",PNCreateUserOperation:"PNCreateUserOperation",PNUpdateUserOperation:"PNUpdateUserOperation",PNDeleteUserOperation:"PNDeleteUserOperation",PNGetUserOperation:"PNGetUsersOperation",PNGetUsersOperation:"PNGetUsersOperation",PNCreateSpaceOperation:"PNCreateSpaceOperation",PNUpdateSpaceOperation:"PNUpdateSpaceOperation",PNDeleteSpaceOperation:"PNDeleteSpaceOperation",PNGetSpaceOperation:"PNGetSpacesOperation",PNGetSpacesOperation:"PNGetSpacesOperation",PNGetMembersOperation:"PNGetMembersOperation",PNUpdateMembersOperation:"PNUpdateMembersOperation",PNGetMembershipsOperation:"PNGetMembershipsOperation",PNUpdateMembershipsOperation:"PNUpdateMembershipsOperation",PNPushNotificationEnabledChannelsOperation:"PNPushNotificationEnabledChannelsOperation",PNRemoveAllPushNotificationsOperation:"PNRemoveAllPushNotificationsOperation",PNWhereNowOperation:"PNWhereNowOperation",PNSetStateOperation:"PNSetStateOperation",PNHereNowOperation:"PNHereNowOperation",PNGetStateOperation:"PNGetStateOperation",PNHeartbeatOperation:"PNHeartbeatOperation",PNChannelGroupsOperation:"PNChannelGroupsOperation",PNRemoveGroupOperation:"PNRemoveGroupOperation",PNChannelsForGroupOperation:"PNChannelsForGroupOperation",PNAddChannelsToGroupOperation:"PNAddChannelsToGroupOperation",PNRemoveChannelsFromGroupOperation:"PNRemoveChannelsFromGroupOperation",PNAccessManagerGrant:"PNAccessManagerGrant",PNAccessManagerGrantToken:"PNAccessManagerGrantToken",PNAccessManagerAudit:"PNAccessManagerAudit"},e.exports=t.default},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/[!~*'()]/g,function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())})}function i(e){return function(e){var t=[];return Object.keys(e).forEach(function(e){return t.push(e)}),t}(e).sort()}e.exports={signPamFromParams:function(t){return i(t).map(function(e){return"".concat(e,"=").concat(r(t[e]))}).join("&")},endsWith:function(e,t){return-1!==e.indexOf(t,this.length-t.length)},createPromise:function(){var n,r;return{promise:new Promise(function(e,t){n=e,r=t}),reject:r,fulfill:n}},encodeString:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(5))&&r.__esModule?r:{default:r};n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,u,c,f=(a=l,(u=[{key:"getAuthKey",value:function(){return this.authKey}},{key:"setAuthKey",value:function(e){return this.authKey=e,this}},{key:"setCipherKey",value:function(e){return this.cipherKey=e,this}},{key:"getUUID",value:function(){return this.UUID}},{key:"setUUID",value:function(e){return this._db&&this._db.set&&this._db.set("".concat(this.subscribeKey,"uuid"),e),this.UUID=e,this}},{key:"getFilterExpression",value:function(){return this.filterExpression}},{key:"setFilterExpression",value:function(e){return this.filterExpression=e,this}},{key:"getPresenceTimeout",value:function(){return this._presenceTimeout}},{key:"setPresenceTimeout",value:function(e){return 20<=e?this._presenceTimeout=e:(this._presenceTimeout=20,console.log("WARNING: Presence timeout is less than the minimum. Using minimum value: ",this._presenceTimeout)),this}},{key:"setProxy",value:function(e){this.proxy=e}},{key:"getHeartbeatInterval",value:function(){return this._heartbeatInterval}},{key:"setHeartbeatInterval",value:function(e){return this._heartbeatInterval=e,this}},{key:"getSubscribeTimeout",value:function(){return this._subscribeRequestTimeout}},{key:"setSubscribeTimeout",value:function(e){return this._subscribeRequestTimeout=e,this}},{key:"getTransactionTimeout",value:function(){return this._transactionalRequestTimeout}},{key:"setTransactionTimeout",value:function(e){return this._transactionalRequestTimeout=e,this}},{key:"isSendBeaconEnabled",value:function(){return this._useSendBeacon}},{key:"setSendBeaconConfig",value:function(e){return this._useSendBeacon=e,this}},{key:"getVersion",value:function(){return"4.27.2"}},{key:"_decideUUID",value:function(e){return e||(this._db&&this._db.get&&this._db.get("".concat(this.subscribeKey,"uuid"))?this._db.get("".concat(this.subscribeKey,"uuid")):"pn-".concat(i.default.createUUID()))}}])&&o(a.prototype,u),void(c&&o(a,c)),l);function l(e){var t=e.setup,n=e.db;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),s(this,"_db",void 0),s(this,"subscribeKey",void 0),s(this,"publishKey",void 0),s(this,"secretKey",void 0),s(this,"cipherKey",void 0),s(this,"authKey",void 0),s(this,"UUID",void 0),s(this,"proxy",void 0),s(this,"instanceId",void 0),s(this,"sdkName",void 0),s(this,"sdkFamily",void 0),s(this,"partnerId",void 0),s(this,"filterExpression",void 0),s(this,"suppressLeaveEvents",void 0),s(this,"secure",void 0),s(this,"origin",void 0),s(this,"logVerbosity",void 0),s(this,"useInstanceId",void 0),s(this,"useRequestId",void 0),s(this,"keepAlive",void 0),s(this,"keepAliveSettings",void 0),s(this,"autoNetworkDetection",void 0),s(this,"announceSuccessfulHeartbeats",void 0),s(this,"announceFailedHeartbeats",void 0),s(this,"_presenceTimeout",void 0),s(this,"_heartbeatInterval",void 0),s(this,"_subscribeRequestTimeout",void 0),s(this,"_transactionalRequestTimeout",void 0),s(this,"_useSendBeacon",void 0),s(this,"requestMessageCountThreshold",void 0),s(this,"restore",void 0),s(this,"dedupeOnSubscribe",void 0),s(this,"maximumCacheSize",void 0),s(this,"customEncrypt",void 0),s(this,"customDecrypt",void 0),this._db=n,this.instanceId="pn-".concat(i.default.createUUID()),this.secretKey=t.secretKey||t.secret_key,this.subscribeKey=t.subscribeKey||t.subscribe_key,this.publishKey=t.publishKey||t.publish_key,this.sdkName=t.sdkName,this.sdkFamily=t.sdkFamily,this.partnerId=t.partnerId,this.setAuthKey(t.authKey),this.setCipherKey(t.cipherKey),this.setFilterExpression(t.filterExpression),this.origin=t.origin||"ps.pndsn.com",this.secure=t.ssl||!1,this.restore=t.restore||!1,this.proxy=t.proxy,this.keepAlive=t.keepAlive,this.keepAliveSettings=t.keepAliveSettings,this.autoNetworkDetection=t.autoNetworkDetection||!1,this.dedupeOnSubscribe=t.dedupeOnSubscribe||!1,this.maximumCacheSize=t.maximumCacheSize||100,this.customEncrypt=t.customEncrypt,this.customDecrypt=t.customDecrypt,"undefined"!=typeof location&&"https:"===location.protocol&&(this.secure=!0),this.logVerbosity=t.logVerbosity||!1,this.suppressLeaveEvents=t.suppressLeaveEvents||!1,this.announceFailedHeartbeats=t.announceFailedHeartbeats||!0,this.announceSuccessfulHeartbeats=t.announceSuccessfulHeartbeats||!1,this.useInstanceId=t.useInstanceId||!1,this.useRequestId=t.useRequestId||!1,this.requestMessageCountThreshold=t.requestMessageCountThreshold,this.setTransactionTimeout(t.transactionalRequestTimeout||15e3),this.setSubscribeTimeout(t.subscribeRequestTimeout||31e4),this.setSendBeaconConfig(t.useSendBeacon||!0),this.setPresenceTimeout(t.presenceTimeout||300),null!=t.heartbeatInterval&&this.setHeartbeatInterval(t.heartbeatInterval),this.setUUID(this._decideUUID(t.uuid))}t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={PNNetworkUpCategory:"PNNetworkUpCategory",PNNetworkDownCategory:"PNNetworkDownCategory",PNNetworkIssuesCategory:"PNNetworkIssuesCategory",PNTimeoutCategory:"PNTimeoutCategory",PNBadRequestCategory:"PNBadRequestCategory",PNAccessDeniedCategory:"PNAccessDeniedCategory",PNUnknownCategory:"PNUnknownCategory",PNReconnectedCategory:"PNReconnectedCategory",PNConnectedCategory:"PNConnectedCategory",PNRequestMessageCountExceededCategory:"PNRequestMessageCountExceededCategory"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(13))&&r.__esModule?r:{default:r};var o={createUUID:function(){return i.default.uuid?i.default.uuid():(0,i.default)()}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(3));var u=r(n(14));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,a,c,f=(s=l,(a=[{key:"HMACSHA256",value:function(e){return u.default.HmacSHA256(e,this._config.secretKey).toString(u.default.enc.Base64)}},{key:"SHA256",value:function(e){return u.default.SHA256(e).toString(u.default.enc.Hex)}},{key:"_parseOptions",value:function(e){var t=e||{};return t.hasOwnProperty("encryptKey")||(t.encryptKey=this._defaultOptions.encryptKey),t.hasOwnProperty("keyEncoding")||(t.keyEncoding=this._defaultOptions.keyEncoding),t.hasOwnProperty("keyLength")||(t.keyLength=this._defaultOptions.keyLength),t.hasOwnProperty("mode")||(t.mode=this._defaultOptions.mode),-1===this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase())&&(t.keyEncoding=this._defaultOptions.keyEncoding),-1===this._allowedKeyLengths.indexOf(parseInt(t.keyLength,10))&&(t.keyLength=this._defaultOptions.keyLength),-1===this._allowedModes.indexOf(t.mode.toLowerCase())&&(t.mode=this._defaultOptions.mode),t}},{key:"_decodeKey",value:function(e,t){return"base64"===t.keyEncoding?u.default.enc.Base64.parse(e):"hex"===t.keyEncoding?u.default.enc.Hex.parse(e):e}},{key:"_getPaddedKey",value:function(e,t){return e=this._decodeKey(e,t),t.encryptKey?u.default.enc.Utf8.parse(this.SHA256(e).slice(0,32)):e}},{key:"_getMode",value:function(e){return"ecb"===e.mode?u.default.mode.ECB:u.default.mode.CBC}},{key:"_getIV",value:function(e){return"cbc"===e.mode?u.default.enc.Utf8.parse(this._iv):null}},{key:"encrypt",value:function(e,t,n){return this._config.customEncrypt?this._config.customEncrypt(e):this.pnEncrypt(e,t,n)}},{key:"decrypt",value:function(e,t,n){return this._config.customDecrypt?this._config.customDecrypt(e):this.pnDecrypt(e,t,n)}},{key:"pnEncrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),o=this._getPaddedKey(t||this._config.cipherKey,n);return u.default.AES.encrypt(e,o,{iv:r,mode:i}).ciphertext.toString(u.default.enc.Base64)||e}},{key:"pnDecrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),o=this._getPaddedKey(t||this._config.cipherKey,n);try{var s=u.default.enc.Base64.parse(e),a=u.default.AES.decrypt({ciphertext:s},o,{iv:r,mode:i}).toString(u.default.enc.Utf8);return JSON.parse(a)}catch(e){return null}}}])&&i(s.prototype,a),void(c&&i(s,c)),l);function l(e){var t=e.config;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),o(this,"_config",void 0),o(this,"_iv",void 0),o(this,"_allowedKeyEncodings",void 0),o(this,"_allowedKeyLengths",void 0),o(this,"_allowedModes",void 0),o(this,"_defaultOptions",void 0),this._config=t,this._iv="0123456789012345",this._allowedKeyEncodings=["hex","utf8","base64","binary"],this._allowedKeyLengths=[128,256],this._allowedModes=["ecb","cbc"],this._defaultOptions={encryptKey:!0,keyEncoding:"utf8",keyLength:256,mode:"cbc"}}t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(0);var r,i=(r=n(4))&&r.__esModule?r:{default:r};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s,a,u,c=(s=f,(a=[{key:"addListener",value:function(e){this._listeners.push(e)}},{key:"removeListener",value:function(t){var n=[];this._listeners.forEach(function(e){e!==t&&n.push(e)}),this._listeners=n}},{key:"removeAllListeners",value:function(){this._listeners=[]}},{key:"announcePresence",value:function(t){this._listeners.forEach(function(e){e.presence&&e.presence(t)})}},{key:"announceStatus",value:function(t){this._listeners.forEach(function(e){e.status&&e.status(t)})}},{key:"announceMessage",value:function(t){this._listeners.forEach(function(e){e.message&&e.message(t)})}},{key:"announceSignal",value:function(t){this._listeners.forEach(function(e){e.signal&&e.signal(t)})}},{key:"announceMessageAction",value:function(t){this._listeners.forEach(function(e){e.messageAction&&e.messageAction(t)})}},{key:"announceUser",value:function(t){this._listeners.forEach(function(e){e.user&&e.user(t)})}},{key:"announceSpace",value:function(t){this._listeners.forEach(function(e){e.space&&e.space(t)})}},{key:"announceMembership",value:function(t){this._listeners.forEach(function(e){e.membership&&e.membership(t)})}},{key:"announceNetworkUp",value:function(){var e={};e.category=i.default.PNNetworkUpCategory,this.announceStatus(e)}},{key:"announceNetworkDown",value:function(){var e={};e.category=i.default.PNNetworkDownCategory,this.announceStatus(e)}}])&&o(s.prototype,a),void(u&&o(s,u)),f);function f(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"_listeners",void 0),this._listeners=[]}t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNTimeOperation},t.getURL=function(){return"/time/0"},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.prepareParams=function(){return{}},t.isAuthSupported=function(){return!1},t.handleResponse=function(e,t){return{timetoken:t[0]}},t.validateParams=function(){};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,I,K){"use strict";(function(e){var r=K(70),o=K(71),s=K(72);function n(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(n()<t)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=l.prototype:(null===e&&(e=new l(t)),e.length=t),e}function l(e,t,n){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(e,t,n);if("number"!=typeof e)return i(this,e,t,n);if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return c(this,e)}function i(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r);l.TYPED_ARRAY_SUPPORT?(e=t).__proto__=l.prototype:e=f(e,t);return e}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!l.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|p(t,n),i=(e=a(e,r)).write(t,n);i!==r&&(e=e.slice(0,i));return e}(e,t,n):function(e,t){if(l.isBuffer(t)){var n=0|h(t.length);return 0===(e=a(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function(e){return e!=e}(t.length)?a(e,0):f(e,t);if("Buffer"===t.type&&s(t.data))return f(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function c(e,t){if(u(t),e=a(e,t<0?0:0|h(t)),!l.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function f(e,t){var n=t.length<0?0:0|h(t.length);e=a(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function h(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|e}function p(e,t){if(l.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return j(e).length;default:if(r)return N(e).length;t=(""+t).toLowerCase(),r=!0}}function d(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function g(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):2147483647<n?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=l.from(t,r)),l.isBuffer(t))return 0===t.length?-1:y(e,t,n,r,i);if("number"==typeof t)return t&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function y(e,t,n,r,i){var o,s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a/=s=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var f=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===u)return f*s}else-1!==f&&(o-=o-f),f=-1}else for(a<n+u&&(n=a-u),o=n;0<=o;o--){for(var l=!0,h=0;h<u;h++)if(c(e,o+h)!==c(t,h)){l=!1;break}if(l)return o}return-1}function v(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?i<(r=Number(r))&&(r=i):r=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");o/2<r&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[n+s]=a}return s}function b(e,t,n,r){return B(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function _(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o,s,a,u,c=e[i],f=null,l=239<c?4:223<c?3:191<c?2:1;if(i+l<=n)switch(l){case 1:c<128&&(f=c);break;case 2:128==(192&(o=e[i+1]))&&127<(u=(31&c)<<6|63&o)&&(f=u);break;case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&2047<(u=(15&c)<<12|(63&o)<<6|63&s)&&(u<55296||57343<u)&&(f=u);break;case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&65535<(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)&&u<1114112&&(f=u)}null===f?(f=65533,l=1):65535<f&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),i+=l}return function(e){var t=e.length;if(t<=k)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=k));return n}(r)}I.Buffer=l,I.SlowBuffer=function(e){+e!=e&&(e=0);return l.alloc(+e)},I.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),I.kMaxLength=n(),l.poolSize=8192,l._augment=function(e){return e.__proto__=l.prototype,e},l.from=function(e,t,n){return i(null,e,t,n)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})),l.alloc=function(e,t,n){return function(e,t,n,r){return u(t),t<=0?a(e,t):void 0!==n?"string"==typeof r?a(e,t).fill(n,r):a(e,t).fill(n):a(e,t)}(null,e,t,n)},l.allocUnsafe=function(e){return c(null,e)},l.allocUnsafeSlow=function(e){return c(null,e)},l.isBuffer=function(e){return!(null==e||!e._isBuffer)},l.compare=function(e,t){if(!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!s(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);var n;if(void 0===t)for(n=t=0;n<e.length;++n)t+=e[n].length;var r=l.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(!l.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length}return r},l.byteLength=p,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)d(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)d(this,t,t+3),d(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)d(this,t,t+7),d(this,t+1,t+6),d(this,t+2,t+5),d(this,t+3,t+4);return this},l.prototype.toString=function(){var e=0|this.length;return 0==e?"":0===arguments.length?_(this,0,e):function(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e=e||"utf8";;)switch(e){case"hex":return P(this,t,n);case"utf8":case"utf-8":return _(this,t,n);case"ascii":return T(this,t,n);case"latin1":case"binary":return w(this,t,n);case"base64":return m(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}.apply(this,arguments)},l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",t=I.INSPECT_MAX_BYTES;return 0<this.length&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},l.prototype.compare=function(e,t,n,r,i){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(i<=r&&n<=t)return 0;if(i<=r)return-1;if(n<=t)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),u=this.slice(r,i),c=e.slice(t,n),f=0;f<a;++f)if(u[f]!==c[f]){o=u[f],s=c[f];break}return o<s?-1:s<o?1:0},l.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},l.prototype.indexOf=function(e,t,n){return g(this,e,t,n,!0)},l.prototype.lastIndexOf=function(e,t,n){return g(this,e,t,n,!1)},l.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||i<n)&&(n=i),0<e.length&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r=r||"utf8";for(var o,s,a,u,c,f,l,h,p,d=!1;;)switch(r){case"hex":return v(this,e,t,n);case"utf8":case"utf-8":return h=t,p=n,B(N(e,(l=this).length-h),l,h,p);case"ascii":return b(this,e,t,n);case"latin1":case"binary":return b(this,e,t,n);case"base64":return u=this,c=t,f=n,B(j(e),u,c,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return s=t,a=n,B(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(e,(o=this).length-s),o,s,a);default:if(d)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),d=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var k=4096;function T(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function w(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function P(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r);for(var i="",o=t;o<n;++o)i+=x(e[o]);return i}function O(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function S(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(n<e+t)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,r,i,o){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(i<t||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function E(e,t,n,r){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-n,2);i<o;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function R(e,t,n,r){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-n,4);i<o;++i)e[n+i]=t>>>8*(r?i:3-i)&255}function A(e,t,n,r){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function C(e,t,n,r,i){return i||A(e,0,n,4),o.write(e,t,n,r,23,4),n+4}function U(e,t,n,r,i){return i||A(e,0,n,8),o.write(e,t,n,r,52,8),n+8}l.prototype.slice=function(e,t){var n,r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):r<e&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):r<t&&(t=r),t<e&&(t=e),l.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=l.prototype;else{var i=t-e;n=new l(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+e]}return n},l.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||S(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},l.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||S(e,t,this.length);for(var r=this[e+--t],i=1;0<t&&(i*=256);)r+=this[e+--t]*i;return r},l.prototype.readUInt8=function(e,t){return t||S(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return t||S(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return t||S(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return t||S(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUInt32BE=function(e,t){return t||S(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||S(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return(i*=128)<=r&&(r-=Math.pow(2,8*t)),r},l.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||S(e,t,this.length);for(var r=t,i=1,o=this[e+--r];0<r&&(i*=256);)o+=this[e+--r]*i;return(i*=128)<=o&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return t||S(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){t||S(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt16BE=function(e,t){t||S(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt32LE=function(e,t){return t||S(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return t||S(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return t||S(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return t||S(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return t||S(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return t||S(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,n,r){e=+e,t|=0,n|=0,r||M(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},l.prototype.writeUIntBE=function(e,t,n,r){e=+e,t|=0,n|=0,r||M(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;0<=--i&&(o*=256);)this[t+i]=e/o&255;return t+n},l.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,1,255,0),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):E(this,e,t,!0),t+2},l.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):E(this,e,t,!1),t+2},l.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):R(this,e,t,!0),t+4},l.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},l.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},l.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;0<=--o&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},l.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,1,127,-128),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):E(this,e,t,!0),t+2},l.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):E(this,e,t,!1),t+2},l.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):R(this,e,t,!0),t+4},l.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},l.prototype.writeFloatLE=function(e,t,n){return C(this,e,t,!0,n)},l.prototype.writeFloatBE=function(e,t,n){return C(this,e,t,!1,n)},l.prototype.writeDoubleLE=function(e,t,n){return U(this,e,t,!0,n)},l.prototype.writeDoubleBE=function(e,t,n){return U(this,e,t,!1,n)},l.prototype.copy=function(e,t,n,r){if(n=n||0,r||0===r||(r=this.length),t>=e.length&&(t=e.length),t=t||0,0<r&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&n<t&&t<r)for(i=o-1;0<=i;--i)e[i+t]=this[i+n];else if(o<1e3||!l.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},l.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!l.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,"number"==typeof(e=e||0))for(o=t;o<n;++o)this[o]=e;else{var s=l.isBuffer(e)?e:N(new l(e,r).toString()),a=s.length;for(o=0;o<n-t;++o)this[o+t]=s[o%a]}return this};var t=/[^+\/0-9A-Za-z-_]/g;function x(e){return e<16?"0"+e.toString(16):e.toString(16)}function N(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],s=0;s<r;++s){if(55295<(n=e.charCodeAt(s))&&n<57344){if(!i){if(56319<n){-1<(t-=3)&&o.push(239,191,189);continue}if(s+1===r){-1<(t-=3)&&o.push(239,191,189);continue}i=n;continue}if(n<56320){-1<(t-=3)&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&-1<(t-=3)&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function j(e){return r.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(t,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function B(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}}).call(this,K(69))},function(e,t,n){"use strict";e.exports=function(e){return null!==e&&"object"==typeof e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(12)),i=u(n(66)),o=u(n(67)),s=u(n(68)),a=n(74);n(0);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(!navigator||!navigator.sendBeacon)return!1;navigator.sendBeacon(e)}var d=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(g,r.default),g);function g(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g);var n=e.listenToBrowserNetworkEvents,r=void 0===n||n;return e.db=o.default,e.cbor=new s.default,e.sdkFamily="Web",e.networking=new i.default({del:a.del,get:a.get,post:a.post,patch:a.patch,sendBeacon:p}),t=f(this,l(g).call(this,e)),r&&(window.addEventListener("offline",function(){t.networkDownDetected()}),window.addEventListener("online",function(){t.networkUpDetected()})),t}t.default=d,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var y=a(n(3)),v=a(n(6)),b=a(n(15)),m=a(n(7)),_=a(n(18)),k=a(n(19)),T=s(n(20)),w=s(n(21)),P=s(n(22)),O=s(n(23)),S=s(n(24)),M=s(n(25)),E=s(n(26)),R=s(n(27)),A=s(n(28)),C=s(n(29)),U=s(n(30)),x=s(n(31)),N=s(n(32)),j=s(n(33)),B=s(n(34)),I=s(n(35)),K=s(n(36)),D=s(n(37)),L=s(n(38)),F=s(n(39)),G=s(n(40)),H=s(n(41)),q=s(n(42)),z=s(n(43)),Y=s(n(44)),$=s(n(45)),W=s(n(46)),J=s(n(47)),X=s(n(48)),V=s(n(49)),Q=s(n(50)),Z=s(n(51)),ee=s(n(52)),te=s(n(53)),ne=s(n(54)),re=s(n(55)),ie=s(n(56)),oe=s(n(57)),se=s(n(58)),ae=s(n(59)),ue=s(n(60)),ce=s(n(61)),fe=s(n(62)),le=s(n(63)),he=s(n(64)),pe=s(n(8)),de=s(n(65)),r=a(n(1)),i=a(n(4)),o=(n(0),a(n(5)));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c,f,l,h=(c=ye,l=[{key:"generateUUID",value:function(){return o.default.createUUID()}}],(f=[{key:"getVersion",value:function(){return this._config.getVersion()}},{key:"networkDownDetected",value:function(){this._listenerManager.announceNetworkDown(),this._config.restore?this.disconnect():this.destroy(!0)}},{key:"networkUpDetected",value:function(){this._listenerManager.announceNetworkUp(),this.reconnect()}}])&&u(c.prototype,f),void(l&&u(c,l)),ye);function ye(e){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ye),ge(this,"_config",void 0),ge(this,"_listenerManager",void 0),ge(this,"_tokenManager",void 0),ge(this,"time",void 0),ge(this,"publish",void 0),ge(this,"fire",void 0),ge(this,"history",void 0),ge(this,"deleteMessages",void 0),ge(this,"messageCounts",void 0),ge(this,"fetchMessages",void 0),ge(this,"channelGroups",void 0),ge(this,"push",void 0),ge(this,"hereNow",void 0),ge(this,"whereNow",void 0),ge(this,"getState",void 0),ge(this,"setState",void 0),ge(this,"grant",void 0),ge(this,"grantToken",void 0),ge(this,"audit",void 0),ge(this,"subscribe",void 0),ge(this,"signal",void 0),ge(this,"presence",void 0),ge(this,"unsubscribe",void 0),ge(this,"unsubscribeAll",void 0),ge(this,"addMessageAction",void 0),ge(this,"removeMessageAction",void 0),ge(this,"getMessageActions",void 0),ge(this,"createUser",void 0),ge(this,"updateUser",void 0),ge(this,"deleteUser",void 0),ge(this,"getUser",void 0),ge(this,"getUsers",void 0),ge(this,"createSpace",void 0),ge(this,"updateSpace",void 0),ge(this,"deleteSpace",void 0),ge(this,"getSpaces",void 0),ge(this,"getSpace",void 0),ge(this,"getMembers",void 0),ge(this,"addMembers",void 0),ge(this,"updateMembers",void 0),ge(this,"removeMembers",void 0),ge(this,"getMemberships",void 0),ge(this,"joinSpaces",void 0),ge(this,"updateMemberships",void 0),ge(this,"leaveSpaces",void 0),ge(this,"disconnect",void 0),ge(this,"reconnect",void 0),ge(this,"destroy",void 0),ge(this,"stop",void 0),ge(this,"getSubscribedChannels",void 0),ge(this,"getSubscribedChannelGroups",void 0),ge(this,"addListener",void 0),ge(this,"removeListener",void 0),ge(this,"removeAllListeners",void 0),ge(this,"parseToken",void 0),ge(this,"setToken",void 0),ge(this,"setTokens",void 0),ge(this,"getToken",void 0),ge(this,"getTokens",void 0),ge(this,"clearTokens",void 0),ge(this,"getAuthKey",void 0),ge(this,"setAuthKey",void 0),ge(this,"setCipherKey",void 0),ge(this,"setUUID",void 0),ge(this,"getUUID",void 0),ge(this,"getFilterExpression",void 0),ge(this,"setFilterExpression",void 0),ge(this,"setHeartbeatInterval",void 0),ge(this,"setProxy",void 0),ge(this,"encrypt",void 0),ge(this,"decrypt",void 0);var t=e.db,r=e.networking,i=e.cbor,o=this._config=new y.default({setup:e,db:t}),s=new v.default({config:o});r.init(o);var a=this._tokenManager=new _.default(o,i),u={config:o,networking:r,crypto:s,tokenManager:a},c=k.default.bind(this,u,pe),f=k.default.bind(this,u,C),l=k.default.bind(this,u,x),h=k.default.bind(this,u,j),p=k.default.bind(this,u,de),d=this._listenerManager=new m.default,g=new b.default({timeEndpoint:c,leaveEndpoint:f,heartbeatEndpoint:l,setStateEndpoint:h,subscribeEndpoint:p,crypto:u.crypto,config:u.config,listenerManager:d});this.addListener=d.addListener.bind(d),this.removeListener=d.removeListener.bind(d),this.removeAllListeners=d.removeAllListeners.bind(d),this.parseToken=a.parseToken.bind(a),this.setToken=a.setToken.bind(a),this.setTokens=a.setTokens.bind(a),this.getToken=a.getToken.bind(a),this.getTokens=a.getTokens.bind(a),this.clearTokens=a.clearTokens.bind(a),this.channelGroups={listGroups:k.default.bind(this,u,O),listChannels:k.default.bind(this,u,S),addChannels:k.default.bind(this,u,T),removeChannels:k.default.bind(this,u,w),deleteGroup:k.default.bind(this,u,P)},this.push={addChannels:k.default.bind(this,u,M),removeChannels:k.default.bind(this,u,E),deleteDevice:k.default.bind(this,u,A),listChannels:k.default.bind(this,u,R)},this.hereNow=k.default.bind(this,u,B),this.whereNow=k.default.bind(this,u,U),this.getState=k.default.bind(this,u,N),this.setState=g.adaptStateChange.bind(g),this.grant=k.default.bind(this,u,oe),this.grantToken=k.default.bind(this,u,se),this.audit=k.default.bind(this,u,ie),this.publish=k.default.bind(this,u,ae),this.fire=function(e,t){return e.replicate=!1,e.storeInHistory=!1,n.publish(e,t)},this.signal=k.default.bind(this,u,ue),this.history=k.default.bind(this,u,ce),this.deleteMessages=k.default.bind(this,u,fe),this.messageCounts=k.default.bind(this,u,le),this.fetchMessages=k.default.bind(this,u,he),this.addMessageAction=k.default.bind(this,u,I),this.removeMessageAction=k.default.bind(this,u,K),this.getMessageActions=k.default.bind(this,u,D),this.createUser=k.default.bind(this,u,L),this.updateUser=k.default.bind(this,u,F),this.deleteUser=k.default.bind(this,u,G),this.getUser=k.default.bind(this,u,H),this.getUsers=k.default.bind(this,u,q),this.createSpace=k.default.bind(this,u,z),this.updateSpace=k.default.bind(this,u,Y),this.deleteSpace=k.default.bind(this,u,$),this.getSpaces=k.default.bind(this,u,W),this.getSpace=k.default.bind(this,u,J),this.addMembers=k.default.bind(this,u,V),this.updateMembers=k.default.bind(this,u,Q),this.removeMembers=k.default.bind(this,u,Z),this.getMembers=k.default.bind(this,u,X),this.getMemberships=k.default.bind(this,u,ee),this.joinSpaces=k.default.bind(this,u,ne),this.updateMemberships=k.default.bind(this,u,te),this.leaveSpaces=k.default.bind(this,u,re),this.time=c,this.subscribe=g.adaptSubscribeChange.bind(g),this.presence=g.adaptPresenceChange.bind(g),this.unsubscribe=g.adaptUnsubscribeChange.bind(g),this.disconnect=g.disconnect.bind(g),this.reconnect=g.reconnect.bind(g),this.destroy=function(e){g.unsubscribeAll(e),g.disconnect()},this.stop=this.destroy,this.unsubscribeAll=g.unsubscribeAll.bind(g),this.getSubscribedChannels=g.getSubscribedChannels.bind(g),this.getSubscribedChannelGroups=g.getSubscribedChannelGroups.bind(g),this.encrypt=s.encrypt.bind(s),this.decrypt=s.decrypt.bind(s),this.getAuthKey=u.config.getAuthKey.bind(u.config),this.setAuthKey=u.config.setAuthKey.bind(u.config),this.setCipherKey=u.config.setCipherKey.bind(u.config),this.getUUID=u.config.getUUID.bind(u.config),this.setUUID=u.config.setUUID.bind(u.config),this.getFilterExpression=u.config.getFilterExpression.bind(u.config),this.setFilterExpression=u.config.setFilterExpression.bind(u.config),this.setHeartbeatInterval=u.config.setHeartbeatInterval.bind(u.config),r.hasModule("proxy")&&(this.setProxy=function(e){u.config.setProxy(e),n.reconnect()})}ge(t.default=h,"OPERATIONS",r.default),ge(h,"CATEGORIES",i.default),e.exports=t.default},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){var r={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};function t(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n}function n(e,t){var n=r[t||"all"];return n&&n.test(e)||!1}t.isUUID=n,t.VERSION="0.1.0",e.uuid=t,e.isUUID=n})?r.apply(t,i):r)||(e.exports=o)},function(e,t,n){"use strict";var r,c,i,u,o,s,a,f,l,h,E=E||function(a){function n(){}var e={},t=e.lib={},r=t.Base={extend:function(e){n.prototype=this;var t=new n;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),(t.init.prototype=t).$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=t.WordArray=r.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||o).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-t%4*8,e.length=a.ceil(t/4)},clone:function(){var e=r.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(4294967296*a.random()|0);return new u.init(t,e)}}),i=e.enc={},o=i.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new u.init(n,t/2)}},s=i.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new u.init(n,t)}},c=i.Utf8={stringify:function(e){try{return decodeURIComponent(escape(s.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return s.parse(unescape(encodeURIComponent(e)))}},f=t.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,n=t.words,r=t.sigBytes,i=this.blockSize,o=r/(4*i);if(e=(o=e?a.ceil(o):a.max((0|o)-this._minBufferSize,0))*i,r=a.min(4*e,r),e){for(var s=0;s<e;s+=i)this._doProcessBlock(n,s);s=n.splice(0,e),t.sigBytes-=r}return new u.init(s,r)},clone:function(){var e=r.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});t.Hasher=f.extend({cfg:r.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(n){return function(e,t){return new n.init(t).finalize(e)}},_createHmacHelper:function(n){return function(e,t){return new l.HMAC.init(n,t).finalize(e)}}});var l=e.algo={};return e}(Math);!function(i){for(var e=E,t=(r=e.lib).WordArray,n=r.Hasher,r=e.algo,o=[],d=[],s=function(e){return 4294967296*(e-(0|e))|0},a=2,u=0;u<64;){var c;e:{c=a;for(var f=i.sqrt(c),l=2;l<=f;l++)if(!(c%l)){c=!1;break e}c=!0}c&&(u<8&&(o[u]=s(i.pow(a,.5))),d[u]=s(i.pow(a,1/3)),u++),a++}var g=[];r=r.SHA256=n.extend({_doReset:function(){this._hash=new t.init(o.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],a=n[4],u=n[5],c=n[6],f=n[7],l=0;l<64;l++){if(l<16)g[l]=0|e[t+l];else{var h=g[l-15],p=g[l-2];g[l]=((h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3)+g[l-7]+((p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10)+g[l-16]}h=f+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&u^~a&c)+d[l]+g[l],p=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&o^i&o),f=c,c=u,u=a,a=s+h|0,s=o,o=i,i=r,r=h+p|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+u|0,n[6]=n[6]+c|0,n[7]=n[7]+f|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(64+r>>>9<<4)]=i.floor(n/4294967296),t[15+(64+r>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA256=n._createHelper(r),e.HmacSHA256=n._createHmacHelper(r)}(Math),c=(r=E).enc.Utf8,r.algo.HMAC=r.lib.Base.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=c.parse(t));var n=e.blockSize,r=4*n;t.sigBytes>r&&(t=e.finalize(t)),t.clamp();for(var i=this._oKey=t.clone(),o=this._iKey=t.clone(),s=i.words,a=o.words,u=0;u<n;u++)s[u]^=1549556828,a[u]^=909522486;i.sigBytes=o.sigBytes=r,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}}),u=(i=E).lib.WordArray,i.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var o=(t[i>>>2]>>>24-i%4*8&255)<<16|(t[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t[i+2>>>2]>>>24-(i+2)%4*8&255,s=0;s<4&&i+.75*s<n;s++)e.push(r.charAt(o>>>6*(3-s)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var t=e.length,n=this._map;!(r=n.charAt(64))||-1!=(r=e.indexOf(r))&&(t=r);for(var r=[],i=0,o=0;o<t;o++)if(o%4){var s=n.indexOf(e.charAt(o-1))<<o%4*2,a=n.indexOf(e.charAt(o))>>>6-o%4*2;r[i>>>2]|=(s|a)<<24-i%4*8,i++}return u.create(r,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},function(o){function w(e,t,n,r,i,o,s){return((e=e+(t&n|~t&r)+i+s)<<o|e>>>32-o)+t}function P(e,t,n,r,i,o,s){return((e=e+(t&r|n&~r)+i+s)<<o|e>>>32-o)+t}function O(e,t,n,r,i,o,s){return((e=e+(t^n^r)+i+s)<<o|e>>>32-o)+t}function S(e,t,n,r,i,o,s){return((e=e+(n^(t|~r))+i+s)<<o|e>>>32-o)+t}for(var e=E,t=(r=e.lib).WordArray,n=r.Hasher,r=e.algo,M=[],i=0;i<64;i++)M[i]=4294967296*o.abs(o.sin(i+1))|0;r=r.MD5=n.extend({_doReset:function(){this._hash=new t.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=e[s=t+n];e[s]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8)}n=this._hash.words;var i,o,s=e[t+0],a=(r=e[t+1],e[t+2]),u=e[t+3],c=e[t+4],f=e[t+5],l=e[t+6],h=e[t+7],p=e[t+8],d=e[t+9],g=e[t+10],y=e[t+11],v=e[t+12],b=e[t+13],m=e[t+14],_=e[t+15],k=n[0],T=S(T=S(T=S(T=S(T=O(T=O(T=O(T=O(T=P(T=P(T=P(T=P(T=w(T=w(T=w(T=w(T=n[1],o=w(o=n[2],i=w(i=n[3],k=w(k,T,o,i,s,7,M[0]),T,o,r,12,M[1]),k,T,a,17,M[2]),i,k,u,22,M[3]),o=w(o,i=w(i,k=w(k,T,o,i,c,7,M[4]),T,o,f,12,M[5]),k,T,l,17,M[6]),i,k,h,22,M[7]),o=w(o,i=w(i,k=w(k,T,o,i,p,7,M[8]),T,o,d,12,M[9]),k,T,g,17,M[10]),i,k,y,22,M[11]),o=w(o,i=w(i,k=w(k,T,o,i,v,7,M[12]),T,o,b,12,M[13]),k,T,m,17,M[14]),i,k,_,22,M[15]),o=P(o,i=P(i,k=P(k,T,o,i,r,5,M[16]),T,o,l,9,M[17]),k,T,y,14,M[18]),i,k,s,20,M[19]),o=P(o,i=P(i,k=P(k,T,o,i,f,5,M[20]),T,o,g,9,M[21]),k,T,_,14,M[22]),i,k,c,20,M[23]),o=P(o,i=P(i,k=P(k,T,o,i,d,5,M[24]),T,o,m,9,M[25]),k,T,u,14,M[26]),i,k,p,20,M[27]),o=P(o,i=P(i,k=P(k,T,o,i,b,5,M[28]),T,o,a,9,M[29]),k,T,h,14,M[30]),i,k,v,20,M[31]),o=O(o,i=O(i,k=O(k,T,o,i,f,4,M[32]),T,o,p,11,M[33]),k,T,y,16,M[34]),i,k,m,23,M[35]),o=O(o,i=O(i,k=O(k,T,o,i,r,4,M[36]),T,o,c,11,M[37]),k,T,h,16,M[38]),i,k,g,23,M[39]),o=O(o,i=O(i,k=O(k,T,o,i,b,4,M[40]),T,o,s,11,M[41]),k,T,u,16,M[42]),i,k,l,23,M[43]),o=O(o,i=O(i,k=O(k,T,o,i,d,4,M[44]),T,o,v,11,M[45]),k,T,_,16,M[46]),i,k,a,23,M[47]),o=S(o,i=S(i,k=S(k,T,o,i,s,6,M[48]),T,o,h,10,M[49]),k,T,m,15,M[50]),i,k,f,21,M[51]),o=S(o,i=S(i,k=S(k,T,o,i,v,6,M[52]),T,o,u,10,M[53]),k,T,g,15,M[54]),i,k,r,21,M[55]),o=S(o,i=S(i,k=S(k,T,o,i,p,6,M[56]),T,o,_,10,M[57]),k,T,l,15,M[58]),i,k,b,21,M[59]),o=S(o,i=S(i,k=S(k,T,o,i,c,6,M[60]),T,o,y,10,M[61]),k,T,a,15,M[62]),i,k,d,21,M[63]);n[0]=n[0]+k|0,n[1]=n[1]+T|0,n[2]=n[2]+o|0,n[3]=n[3]+i|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;t[r>>>5]|=128<<24-r%32;var i=o.floor(n/4294967296);for(t[15+(r+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t[14+(r+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e.sigBytes=4*(t.length+1),this._process(),t=(e=this._hash).words,n=0;n<4;n++)r=t[n],t[n]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8);return e},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}}),e.MD5=n._createHelper(r),e.HmacMD5=n._createHmacHelper(r)}(Math),a=(o=(s=E).lib).Base,f=o.WordArray,l=(o=s.algo).EvpKDF=a.extend({cfg:a.extend({keySize:4,hasher:o.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=(s=this.cfg).hasher.create(),r=f.create(),i=r.words,o=s.keySize,s=s.iterations;i.length<o;){a&&n.update(a);var a=n.update(e).finalize(t);n.reset();for(var u=1;u<s;u++)a=n.finalize(a),n.reset();r.concat(a)}return r.sigBytes=4*o,r}}),s.EvpKDF=function(e,t,n){return l.create(n).compute(e,t)},E.lib.Cipher||function(){var e=(h=E).lib,t=e.Base,s=e.WordArray,n=e.BufferedBlockAlgorithm,r=h.enc.Base64,i=h.algo.EvpKDF,o=e.Cipher=n.extend({cfg:t.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){n.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(r){return{encrypt:function(e,t,n){return("string"==typeof t?p:l).encrypt(r,e,t,n)},decrypt:function(e,t,n){return("string"==typeof t?p:l).decrypt(r,e,t,n)}}}});e.StreamCipher=o.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});function a(e,t,n){var r=this._iv;r?this._iv=void 0:r=this._prevBlock;for(var i=0;i<n;i++)e[t+i]^=r[i]}var u=h.mode={},c=(e.BlockCipherMode=t.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();c.Encryptor=c.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;a.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),c.Decryptor=c.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),a.call(this,e,t,r),this._prevBlock=i}}),u=u.CBC=c,c=(h.pad={}).Pkcs7={pad:function(e,t){for(var n,r=(n=(n=4*t)-e.sigBytes%n)<<24|n<<16|n<<8|n,i=[],o=0;o<n;o+=4)i.push(r);n=s.create(i,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},e.BlockCipher=o.extend({cfg:o.cfg.extend({mode:u,padding:c}),reset:function(){o.reset.call(this);var e=(t=this.cfg).iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=t.createEncryptor;else n=t.createDecryptor,this._minBufferSize=1;this._mode=n.call(t,this,e&&e.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var f=e.CipherParams=t.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),l=(u=(h.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return((e=e.salt)?s.create([1398893684,1701076831]).concat(e).concat(t):t).toString(r)},parse:function(e){var t=(e=r.parse(e)).words;if(1398893684==t[0]&&1701076831==t[1]){var n=s.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return f.create({ciphertext:e,salt:n})}},e.SerializableCipher=t.extend({cfg:t.extend({format:u}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,f.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}})),h=(h.kdf={}).OpenSSL={execute:function(e,t,n,r){return r=r||s.random(8),e=i.create({keySize:t+n}).compute(e,r),n=s.create(e.words.slice(t),4*n),e.sigBytes=4*t,f.create({key:e,iv:n,salt:r})}},p=e.PasswordBasedCipher=l.extend({cfg:l.cfg.extend({kdf:h}),encrypt:function(e,t,n,r){return n=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,(e=l.encrypt.call(this,e,t,n.key,r)).mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,l.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=E,t=e.lib.BlockCipher,n=e.algo,s=[],r=[],i=[],o=[],a=[],u=[],c=[],f=[],l=[],h=[],p=[],d=0;d<256;d++)p[d]=d<128?d<<1:d<<1^283;var g=0,y=0;for(d=0;d<256;d++){var v=(v=y^y<<1^y<<2^y<<3^y<<4)>>>8^255&v^99;s[g]=v;var b=p[r[v]=g],m=p[b],_=p[m],k=257*p[v]^16843008*v;i[g]=k<<24|k>>>8,o[g]=k<<16|k>>>16,a[g]=k<<8|k>>>24,u[g]=k,k=16843009*_^65537*m^257*b^16843008*g,c[v]=k<<24|k>>>8,f[v]=k<<16|k>>>16,l[v]=k<<8|k>>>24,h[v]=k,g?(g=b^p[p[p[_^b]]],y^=p[p[y]]):g=y=1}var T=[0,1,2,4,8,16,32,64,128,27,54];n=n.AES=t.extend({_doReset:function(){for(var e=(n=this._key).words,t=n.sigBytes/4,n=4*((this._nRounds=t+6)+1),r=this._keySchedule=[],i=0;i<n;i++)if(i<t)r[i]=e[i];else{var o=r[i-1];i%t?6<t&&4==i%t&&(o=s[o>>>24]<<24|s[o>>>16&255]<<16|s[o>>>8&255]<<8|s[255&o]):(o=s[(o=o<<8|o>>>24)>>>24]<<24|s[o>>>16&255]<<16|s[o>>>8&255]<<8|s[255&o],o^=T[i/t|0]<<24),r[i]=r[i-t]^o}for(e=this._invKeySchedule=[],t=0;t<n;t++)i=n-t,o=t%4?r[i]:r[i-4],e[t]=t<4||i<=4?o:c[s[o>>>24]]^f[s[o>>>16&255]]^l[s[o>>>8&255]]^h[s[255&o]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,i,o,a,u,s)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,c,f,l,h,r),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,o,s,a){for(var u=this._nRounds,c=e[t]^n[0],f=e[t+1]^n[1],l=e[t+2]^n[2],h=e[t+3]^n[3],p=4,d=1;d<u;d++){var g=r[c>>>24]^i[f>>>16&255]^o[l>>>8&255]^s[255&h]^n[p++],y=r[f>>>24]^i[l>>>16&255]^o[h>>>8&255]^s[255&c]^n[p++],v=r[l>>>24]^i[h>>>16&255]^o[c>>>8&255]^s[255&f]^n[p++];h=r[h>>>24]^i[c>>>16&255]^o[f>>>8&255]^s[255&l]^n[p++],c=g,f=y,l=v}g=(a[c>>>24]<<24|a[f>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^n[p++],y=(a[f>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&c])^n[p++],v=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[c>>>8&255]<<8|a[255&f])^n[p++],h=(a[h>>>24]<<24|a[c>>>16&255]<<16|a[f>>>8&255]<<8|a[255&l])^n[p++],e[t]=g,e[t+1]=y,e[t+2]=v,e[t+3]=h},keySize:8});e.AES=t._createHelper(n)}(),E.mode.ECB=((h=E.lib.BlockCipherMode.extend()).Encryptor=h.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),h.Decryptor=h.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),h),e.exports=E},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(6)),r(n(3)),r(n(7));var c=r(n(16)),f=r(n(17)),l=r(n(2)),a=(n(0),r(n(4)));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o,s,u,p=(o=d,(s=[{key:"adaptStateChange",value:function(e,t){var n=this,r=e.state,i=e.channels,o=void 0===i?[]:i,s=e.channelGroups,a=void 0===s?[]:s;return o.forEach(function(e){e in n._channels&&(n._channels[e].state=r)}),a.forEach(function(e){e in n._channelGroups&&(n._channelGroups[e].state=r)}),this._setStateEndpoint({state:r,channels:o,channelGroups:a},t)}},{key:"adaptPresenceChange",value:function(e){var t=this,n=e.connected,r=e.channels,i=void 0===r?[]:r,o=e.channelGroups,s=void 0===o?[]:o;n?(i.forEach(function(e){t._heartbeatChannels[e]={state:{}}}),s.forEach(function(e){t._heartbeatChannelGroups[e]={state:{}}})):(i.forEach(function(e){e in t._heartbeatChannels&&delete t._heartbeatChannels[e]}),s.forEach(function(e){e in t._heartbeatChannelGroups&&delete t._heartbeatChannelGroups[e]}),!1===this._config.suppressLeaveEvents&&this._leaveEndpoint({channels:i,channelGroups:s},function(e){t._listenerManager.announceStatus(e)})),this.reconnect()}},{key:"adaptSubscribeChange",value:function(e){var t=this,n=e.timetoken,r=e.channels,i=void 0===r?[]:r,o=e.channelGroups,s=void 0===o?[]:o,a=e.withPresence,u=void 0!==a&&a,c=e.withHeartbeats,f=void 0!==c&&c;this._config.subscribeKey&&""!==this._config.subscribeKey?(n&&(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=n),"0"!==this._currentTimetoken&&0!==this._currentTimetoken&&(this._storedTimetoken=this._currentTimetoken,this._currentTimetoken=0),i.forEach(function(e){t._channels[e]={state:{}},u&&(t._presenceChannels[e]={}),(f||t._config.getHeartbeatInterval())&&(t._heartbeatChannels[e]={}),t._pendingChannelSubscriptions.push(e)}),s.forEach(function(e){t._channelGroups[e]={state:{}},u&&(t._presenceChannelGroups[e]={}),(f||t._config.getHeartbeatInterval())&&(t._heartbeatChannelGroups[e]={}),t._pendingChannelGroupSubscriptions.push(e)}),this._subscriptionStatusAnnounced=!1,this.reconnect()):console&&console.log&&console.log("subscribe key missing; aborting subscribe")}},{key:"adaptUnsubscribeChange",value:function(e,t){var n=this,r=e.channels,i=void 0===r?[]:r,o=e.channelGroups,s=void 0===o?[]:o,a=[],u=[];i.forEach(function(e){e in n._channels&&(delete n._channels[e],a.push(e),e in n._heartbeatChannels&&delete n._heartbeatChannels[e]),e in n._presenceChannels&&(delete n._presenceChannels[e],a.push(e))}),s.forEach(function(e){e in n._channelGroups&&(delete n._channelGroups[e],u.push(e),e in n._heartbeatChannelGroups&&delete n._heartbeatChannelGroups[e]),e in n._presenceChannelGroups&&(delete n._channelGroups[e],u.push(e))}),0===a.length&&0===u.length||(!1!==this._config.suppressLeaveEvents||t||this._leaveEndpoint({channels:a,channelGroups:u},function(e){e.affectedChannels=a,e.affectedChannelGroups=u,e.currentTimetoken=n._currentTimetoken,e.lastTimetoken=n._lastTimetoken,n._listenerManager.announceStatus(e)}),0===Object.keys(this._channels).length&&0===Object.keys(this._presenceChannels).length&&0===Object.keys(this._channelGroups).length&&0===Object.keys(this._presenceChannelGroups).length&&(this._lastTimetoken=0,this._currentTimetoken=0,this._storedTimetoken=null,this._region=null,this._reconnectionManager.stopPolling()),this.reconnect())}},{key:"unsubscribeAll",value:function(e){this.adaptUnsubscribeChange({channels:this.getSubscribedChannels(),channelGroups:this.getSubscribedChannelGroups()},e)}},{key:"getHeartbeatChannels",value:function(){return Object.keys(this._heartbeatChannels)}},{key:"getHeartbeatChannelGroups",value:function(){return Object.keys(this._heartbeatChannelGroups)}},{key:"getSubscribedChannels",value:function(){return Object.keys(this._channels)}},{key:"getSubscribedChannelGroups",value:function(){return Object.keys(this._channelGroups)}},{key:"reconnect",value:function(){this._startSubscribeLoop(),this._registerHeartbeatTimer()}},{key:"disconnect",value:function(){this._stopSubscribeLoop(),this._stopHeartbeatTimer(),this._reconnectionManager.stopPolling()}},{key:"_registerHeartbeatTimer",value:function(){this._stopHeartbeatTimer(),0!==this._config.getHeartbeatInterval()&&(this._performHeartbeatLoop(),this._heartbeatTimer=setInterval(this._performHeartbeatLoop.bind(this),1e3*this._config.getHeartbeatInterval()))}},{key:"_stopHeartbeatTimer",value:function(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}},{key:"_performHeartbeatLoop",value:function(){var n=this,e=this.getHeartbeatChannels(),t=this.getHeartbeatChannelGroups(),r={};0===e.length&&0===t.length||(this.getSubscribedChannels().forEach(function(e){var t=n._channels[e].state;Object.keys(t).length&&(r[e]=t)}),this.getSubscribedChannelGroups().forEach(function(e){var t=n._channelGroups[e].state;Object.keys(t).length&&(r[e]=t)}),this._heartbeatEndpoint({channels:e,channelGroups:t,state:r},function(e){e.error&&n._config.announceFailedHeartbeats&&n._listenerManager.announceStatus(e),e.error&&n._config.autoNetworkDetection&&n._isOnline&&(n._isOnline=!1,n.disconnect(),n._listenerManager.announceNetworkDown(),n.reconnect()),!e.error&&n._config.announceSuccessfulHeartbeats&&n._listenerManager.announceStatus(e)}.bind(this)))}},{key:"_startSubscribeLoop",value:function(){var n=this;this._stopSubscribeLoop();var r={},i=[],o=[];if(Object.keys(this._channels).forEach(function(e){var t=n._channels[e].state;Object.keys(t).length&&(r[e]=t),i.push(e)}),Object.keys(this._presenceChannels).forEach(function(e){i.push("".concat(e,"-pnpres"))}),Object.keys(this._channelGroups).forEach(function(e){var t=n._channelGroups[e].state;Object.keys(t).length&&(r[e]=t),o.push(e)}),Object.keys(this._presenceChannelGroups).forEach(function(e){o.push("".concat(e,"-pnpres"))}),0!==i.length||0!==o.length){var e={channels:i,channelGroups:o,state:r,timetoken:this._currentTimetoken,filterExpression:this._config.filterExpression,region:this._region};this._subscribeCall=this._subscribeEndpoint(e,this._processSubscribeResponse.bind(this))}}},{key:"_processSubscribeResponse",value:function(t,e){var c=this;if(t.error)t.category===a.default.PNTimeoutCategory?this._startSubscribeLoop():(t.category===a.default.PNNetworkIssuesCategory?(this.disconnect(),t.error&&this._config.autoNetworkDetection&&this._isOnline&&(this._isOnline=!1,this._listenerManager.announceNetworkDown()),this._reconnectionManager.onReconnection(function(){c._config.autoNetworkDetection&&!c._isOnline&&(c._isOnline=!0,c._listenerManager.announceNetworkUp()),c.reconnect(),c._subscriptionStatusAnnounced=!0;var e={category:a.default.PNReconnectedCategory,operation:t.operation,lastTimetoken:c._lastTimetoken,currentTimetoken:c._currentTimetoken};c._listenerManager.announceStatus(e)}),this._reconnectionManager.startPolling()):t.category===a.default.PNBadRequestCategory&&this._stopHeartbeatTimer(),this._listenerManager.announceStatus(t));else{if(this._storedTimetoken?(this._currentTimetoken=this._storedTimetoken,this._storedTimetoken=null):(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=e.metadata.timetoken),!this._subscriptionStatusAnnounced){var n={};n.category=a.default.PNConnectedCategory,n.operation=t.operation,n.affectedChannels=this._pendingChannelSubscriptions,n.subscribedChannels=this.getSubscribedChannels(),n.affectedChannelGroups=this._pendingChannelGroupSubscriptions,n.lastTimetoken=this._lastTimetoken,n.currentTimetoken=this._currentTimetoken,this._subscriptionStatusAnnounced=!0,this._listenerManager.announceStatus(n),this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[]}var r=e.messages||[],i=this._config,o=i.requestMessageCountThreshold,f=i.dedupeOnSubscribe;if(o&&r.length>=o){var s={};s.category=a.default.PNRequestMessageCountExceededCategory,s.operation=t.operation,this._listenerManager.announceStatus(s)}r.forEach(function(e){var t=e.channel,n=e.subscriptionMatch,r=e.publishMetaData;if(t===n&&(n=null),f){if(c._dedupingManager.isDuplicate(e))return;c._dedupingManager.addEntry(e)}if(l.default.endsWith(e.channel,"-pnpres")){var i={channel:null,subscription:null};i.actualChannel=null!=n?t:null,i.subscribedChannel=null!=n?n:t,t&&(i.channel=t.substring(0,t.lastIndexOf("-pnpres"))),n&&(i.subscription=n.substring(0,n.lastIndexOf("-pnpres"))),i.action=e.payload.action,i.state=e.payload.data,i.timetoken=r.publishTimetoken,i.occupancy=e.payload.occupancy,i.uuid=e.payload.uuid,i.timestamp=e.payload.timestamp,e.payload.join&&(i.join=e.payload.join),e.payload.leave&&(i.leave=e.payload.leave),e.payload.timeout&&(i.timeout=e.payload.timeout),c._listenerManager.announcePresence(i)}else if(1===e.messageType){var o={channel:null,subscription:null};o.channel=t,o.subscription=n,o.timetoken=r.publishTimetoken,o.publisher=e.issuingClientId,e.userMetadata&&(o.userMetadata=e.userMetadata),o.message=e.payload,c._listenerManager.announceSignal(o)}else if(2===e.messageType){var s={channel:null,subscription:null};s.channel=t,s.subscription=n,s.timetoken=r.publishTimetoken,s.publisher=e.issuingClientId,e.userMetadata&&(s.userMetadata=e.userMetadata),s.message={event:e.payload.event,type:e.payload.type,data:e.payload.data},"user"===e.payload.type?c._listenerManager.announceUser(s):"space"===e.payload.type?c._listenerManager.announceSpace(s):"membership"===e.payload.type&&c._listenerManager.announceMembership(s)}else if(3===e.messageType){var a={};a.channel=t,a.subscription=n,a.timetoken=r.publishTimetoken,a.publisher=e.issuingClientId,a.data={messageTimetoken:e.payload.data.messageTimetoken,actionTimetoken:e.payload.data.actionTimetoken,type:e.payload.data.type,uuid:e.issuingClientId,value:e.payload.data.value},a.event=e.payload.event,c._listenerManager.announceMessageAction(a)}else{var u={channel:null,subscription:null};u.actualChannel=null!=n?t:null,u.subscribedChannel=null!=n?n:t,u.channel=t,u.subscription=n,u.timetoken=r.publishTimetoken,u.publisher=e.issuingClientId,e.userMetadata&&(u.userMetadata=e.userMetadata),c._config.cipherKey?u.message=c._crypto.decrypt(e.payload):u.message=e.payload,c._listenerManager.announceMessage(u)}}),this._region=e.metadata.region,this._startSubscribeLoop()}}},{key:"_stopSubscribeLoop",value:function(){this._subscribeCall&&("function"==typeof this._subscribeCall.abort&&this._subscribeCall.abort(),this._subscribeCall=null)}}])&&i(o.prototype,s),void(u&&i(o,u)),d);function d(e){var t=e.subscribeEndpoint,n=e.leaveEndpoint,r=e.heartbeatEndpoint,i=e.setStateEndpoint,o=e.timeEndpoint,s=e.config,a=e.crypto,u=e.listenerManager;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),h(this,"_crypto",void 0),h(this,"_config",void 0),h(this,"_listenerManager",void 0),h(this,"_reconnectionManager",void 0),h(this,"_leaveEndpoint",void 0),h(this,"_heartbeatEndpoint",void 0),h(this,"_setStateEndpoint",void 0),h(this,"_subscribeEndpoint",void 0),h(this,"_channels",void 0),h(this,"_presenceChannels",void 0),h(this,"_heartbeatChannels",void 0),h(this,"_heartbeatChannelGroups",void 0),h(this,"_channelGroups",void 0),h(this,"_presenceChannelGroups",void 0),h(this,"_currentTimetoken",void 0),h(this,"_lastTimetoken",void 0),h(this,"_storedTimetoken",void 0),h(this,"_region",void 0),h(this,"_subscribeCall",void 0),h(this,"_heartbeatTimer",void 0),h(this,"_subscriptionStatusAnnounced",void 0),h(this,"_autoNetworkDetection",void 0),h(this,"_isOnline",void 0),h(this,"_pendingChannelSubscriptions",void 0),h(this,"_pendingChannelGroupSubscriptions",void 0),h(this,"_dedupingManager",void 0),this._listenerManager=u,this._config=s,this._leaveEndpoint=n,this._heartbeatEndpoint=r,this._setStateEndpoint=i,this._subscribeEndpoint=t,this._crypto=a,this._channels={},this._presenceChannels={},this._heartbeatChannels={},this._heartbeatChannelGroups={},this._channelGroups={},this._presenceChannelGroups={},this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[],this._currentTimetoken=0,this._lastTimetoken=0,this._storedTimetoken=null,this._subscriptionStatusAnnounced=!1,this._isOnline=!0,this._reconnectionManager=new c.default({timeEndpoint:o}),this._dedupingManager=new f.default({config:s})}t.default=p,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r;(r=n(8))&&r.__esModule,n(0);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,a,u,c=(s=f,(a=[{key:"onReconnection",value:function(e){this._reconnectionCallback=e}},{key:"startPolling",value:function(){this._timeTimer=setInterval(this._performTimeLoop.bind(this),3e3)}},{key:"stopPolling",value:function(){clearInterval(this._timeTimer)}},{key:"_performTimeLoop",value:function(){var t=this;this._timeEndpoint(function(e){e.error||(clearInterval(t._timeTimer),t._reconnectionCallback())})}}])&&i(s.prototype,a),void(u&&i(s,u)),f);function f(e){var t=e.timeEndpoint;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),o(this,"_reconnectionCallback",void 0),o(this,"_timeEndpoint",void 0),o(this,"_timeTimer",void 0),this._timeEndpoint=t}t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r;(r=n(3))&&r.__esModule,n(0);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,a,u,c=(s=f,(a=[{key:"getKey",value:function(e){var t=function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t}(JSON.stringify(e.payload)).toString(),n=e.publishMetaData.publishTimetoken;return"".concat(n,"-").concat(t)}},{key:"isDuplicate",value:function(e){return this.hashHistory.includes(this.getKey(e))}},{key:"addEntry",value:function(e){this.hashHistory.length>=this._config.maximumCacheSize&&this.hashHistory.shift(),this.hashHistory.push(this.getKey(e))}},{key:"clearHistory",value:function(){this.hashHistory=[]}}])&&i(s.prototype,a),void(u&&i(s,u)),f);function f(e){var t=e.config;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),o(this,"_config",void 0),o(this,"hashHistory",void 0),this.hashHistory=[],this._config=t}t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r;(r=n(3))&&r.__esModule,n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,u,c,f=(a=l,(u=[{key:"_initializeTokens",value:function(){this._userTokens={},this._spaceTokens={},this._userToken=void 0,this._spaceToken=void 0}},{key:"_setToken",value:function(t){var n=this,e=this.parseToken(t);e&&e.resources&&(e.resources.users&&Object.keys(e.resources.users).forEach(function(e){n._userTokens[e]=t}),e.resources.spaces&&Object.keys(e.resources.spaces).forEach(function(e){n._spaceTokens[e]=t})),e&&e.patterns&&(e.patterns.users&&0<Object.keys(e.patterns.users).length&&(this._userToken=t),e.patterns.spaces&&0<Object.keys(e.patterns.spaces).length&&(this._spaceToken=t))}},{key:"setToken",value:function(e){e&&0<e.length&&this._setToken(e)}},{key:"setTokens",value:function(e){var t=this;e&&e.length&&"object"===i(e)&&e.forEach(function(e){t.setToken(e)})}},{key:"getTokens",value:function(e){var t=this,n={users:{},spaces:{}};return e?(e.user&&(n.user=this._userToken),e.space&&(n.space=this._spaceToken),e.users&&e.users.forEach(function(e){n.users[e]=t._userTokens[e]}),e.space&&e.spaces.forEach(function(e){n.spaces[e]=t._spaceTokens[e]})):(this._userToken&&(n.user=this._userToken),this._spaceToken&&(n.space=this._spaceToken),Object.keys(this._userTokens).forEach(function(e){n.users[e]=t._userTokens[e]}),Object.keys(this._spaceTokens).forEach(function(e){n.spaces[e]=t._spaceTokens[e]})),n}},{key:"getToken",value:function(e,t){var n;return t?"user"===e?n=this._userTokens[t]:"space"===e&&(n=this._spaceTokens[t]):"user"===e?n=this._userToken:"space"===e&&(n=this._spaceToken),n}},{key:"extractPermissions",value:function(e){var t={create:!1,read:!1,write:!1,manage:!1,delete:!1};return 16==(16&e)&&(t.create=!0),8==(8&e)&&(t.delete=!0),4==(4&e)&&(t.manage=!0),2==(2&e)&&(t.write=!0),1==(1&e)&&(t.read=!0),t}},{key:"parseToken",value:function(e){var t=this,n=this._cbor.decodeToken(e);if(void 0!==n){var r=Object.keys(n.res.usr),i=Object.keys(n.res.spc),o=Object.keys(n.pat.usr),s=Object.keys(n.pat.spc),a={version:n.v,timestamp:n.t,ttl:n.ttl},u=0<r.length,c=0<i.length;(u||c)&&(a.resources={},u&&(a.resources.users={},r.forEach(function(e){a.resources.users[e]=t.extractPermissions(n.res.usr[e])})),c&&(a.resources.spaces={},i.forEach(function(e){a.resources.spaces[e]=t.extractPermissions(n.res.spc[e])})));var f=0<o.length,l=0<s.length;return(f||l)&&(a.patterns={},f&&(a.patterns.users={},o.forEach(function(e){a.patterns.users[e]=t.extractPermissions(n.pat.usr[e])})),l&&(a.patterns.spaces={},s.forEach(function(e){a.patterns.spaces[e]=t.extractPermissions(n.pat.spc[e])}))),0<Object.keys(n.meta).length&&(a.meta=n.meta),a.signature=n.sig,a}}},{key:"clearTokens",value:function(){this._initializeTokens()}}])&&o(a.prototype,u),void(c&&o(a,c)),l);function l(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),s(this,"_config",void 0),s(this,"_cbor",void 0),s(this,"_userTokens",void 0),s(this,"_spaceTokens",void 0),s(this,"_userToken",void 0),s(this,"_spaceToken",void 0),this._config=e,this._cbor=t,this._initializeTokens()}t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(r,i){var e=r.networking,t=r.config,o=null,s=null,a={};o=i.getOperation()===b.default.PNTimeOperation||i.getOperation()===b.default.PNChannelGroupsOperation?arguments.length<=2?void 0:arguments[2]:(a=arguments.length<=2?void 0:arguments[2],arguments.length<=3?void 0:arguments[3]);"undefined"==typeof Promise||o||(s=v.default.createPromise());var n=i.validateParams(r,a);if(n)return o?o(_(n)):s?(s.reject(new m("Validation failed, check status for details",_(n))),s.promise):void 0;var u,c=i.prepareParams(r,a),f=function(e,t,n){return e.usePost&&e.usePost(t,n)?e.postURL(t,n):e.usePatch&&e.usePatch(t,n)?e.patchURL(t,n):e.getURL(t,n)}(i,r,a),l={url:f,operation:i.getOperation(),timeout:i.getRequestTimeout(r),headers:i.getRequestHeaders?i.getRequestHeaders():{}};c.uuid=t.UUID,c.pnsdk=function(e){if(e.sdkName)return e.sdkName;var t="PubNub-JS-".concat(e.sdkFamily);e.partnerId&&(t+="-".concat(e.partnerId));return t+="/".concat(e.getVersion())}(t),t.useInstanceId&&(c.instanceid=t.instanceId);t.useRequestId&&(c.requestid=y.default.createUUID());if(i.isAuthSupported()){var h=function(e,t,n){var r;e.getAuthToken&&(r=e.getAuthToken(t,n));return r}(i,r,a)||t.getAuthKey();h&&(c.auth=h)}t.secretKey&&function(e,t,n,r,i){var o=e.config,s=e.crypto,a=k(e,i,r);n.timestamp=Math.floor((new Date).getTime()/1e3);var u="".concat(a,"\n").concat(o.publishKey,"\n").concat(t,"\n").concat(v.default.signPamFromParams(n),"\n");if("POST"===a){var c=i.postPayload(e,r);u+="string"==typeof c?c:JSON.stringify(c)}else if("PATCH"===a){var f=i.patchPayload(e,r);u+="string"==typeof f?f:JSON.stringify(f)}var l="v2.".concat(s.HMACSHA256(u));l=(l=(l=l.replace(/\+/g,"-")).replace(/\//g,"_")).replace(/=+$/,""),n.signature=l}(r,f,c,a,i);function p(e,t){if(e.error)o?o(e):s&&s.reject(new m("PubNub call failed, check status for details",e));else{var n=i.handleResponse(r,t,a);o?o(e,n):s&&s.fulfill(n)}}if("POST"===k(r,i,a)){var d=i.postPayload(r,a);u=e.POST(c,d,l,p)}else if("PATCH"===k(r,i,a)){var g=i.patchPayload(r,a);u=e.PATCH(c,g,l,p)}else u="DELETE"===k(r,i,a)?e.DELETE(c,l,p):e.GET(c,l,p);if(i.getOperation()===b.default.PNSubscribeOperation)return u;if(s)return s.promise};var y=r(n(5)),v=(n(0),r(n(2))),b=(r(n(3)),r(n(1)));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){var n="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,c(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),u(t,e)})(e)}function a(e,t,n){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&u(i,n.prototype),i}).apply(null,arguments)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,s(Error)),f);function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=o(this,c(f).call(this,e))).name=n.constructor.name,n.status=t,n.message=e,n}function _(e){return function(e,t){return e.type=t,e.error=!0,e}({message:e},"validationError")}function k(e,t,n){return t.usePost&&t.usePost(e,n)?"POST":t.usePatch&&t.usePatch(e,n)?"PATCH":t.useDelete&&t.useDelete(e,n)?"DELETE":"GET"}e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNAddChannelsToGroupOperation},t.validateParams=function(e,t){var n=t.channels,r=t.channelGroup,i=e.config;if(!r)return"Missing Channel Group";if(!n||0===n.length)return"Missing Channels";if(!i.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/".concat(r.subscribeKey,"/channel-group/").concat(i.default.encodeString(n))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.channels;return{add:(void 0===n?[]:n).join(",")}},t.handleResponse=function(){return{}};n(0);var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNRemoveChannelsFromGroupOperation},t.validateParams=function(e,t){var n=t.channels,r=t.channelGroup,i=e.config;if(!r)return"Missing Channel Group";if(!n||0===n.length)return"Missing Channels";if(!i.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/".concat(r.subscribeKey,"/channel-group/").concat(i.default.encodeString(n))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.channels;return{remove:(void 0===n?[]:n).join(",")}},t.handleResponse=function(){return{}};n(0);var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNRemoveGroupOperation},t.validateParams=function(e,t){var n=t.channelGroup,r=e.config;if(!n)return"Missing Channel Group";if(!r.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/".concat(r.subscribeKey,"/channel-group/").concat(i.default.encodeString(n),"/remove")},t.isAuthSupported=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.prepareParams=function(){return{}},t.handleResponse=function(){return{}};n(0);var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNChannelGroupsOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e){var t=e.config;return"/v1/channel-registration/sub-key/".concat(t.subscribeKey,"/channel-group")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return{groups:t.payload.groups}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNChannelsForGroupOperation},t.validateParams=function(e,t){var n=t.channelGroup,r=e.config;if(!n)return"Missing Channel Group";if(!r.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/".concat(r.subscribeKey,"/channel-group/").concat(i.default.encodeString(n))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return{channels:t.payload.channels}};n(0);var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNPushNotificationEnabledChannelsOperation},t.validateParams=function(e,t){var n=t.device,r=t.pushGateway,i=t.channels,o=e.config;if(!n)return"Missing Device ID (device)";if(!r)return"Missing GW Type (pushGateway: gcm or apns)";if(!i||0===i.length)return"Missing Channels";if(!o.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/".concat(r.subscribeKey,"/devices/").concat(n)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.pushGateway,r=t.channels;return{type:n,add:(void 0===r?[]:r).join(",")}},t.handleResponse=function(){return{}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNPushNotificationEnabledChannelsOperation},t.validateParams=function(e,t){var n=t.device,r=t.pushGateway,i=t.channels,o=e.config;if(!n)return"Missing Device ID (device)";if(!r)return"Missing GW Type (pushGateway: gcm or apns)";if(!i||0===i.length)return"Missing Channels";if(!o.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/".concat(r.subscribeKey,"/devices/").concat(n)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.pushGateway,r=t.channels;return{type:n,remove:(void 0===r?[]:r).join(",")}},t.handleResponse=function(){return{}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNPushNotificationEnabledChannelsOperation},t.validateParams=function(e,t){var n=t.device,r=t.pushGateway,i=e.config;if(!n)return"Missing Device ID (device)";if(!r)return"Missing GW Type (pushGateway: gcm or apns)";if(!i.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/".concat(r.subscribeKey,"/devices/").concat(n)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){return{type:t.pushGateway}},t.handleResponse=function(e,t){return{channels:t}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNRemoveAllPushNotificationsOperation},t.validateParams=function(e,t){var n=t.device,r=t.pushGateway,i=e.config;if(!n)return"Missing Device ID (device)";if(!r)return"Missing GW Type (pushGateway: gcm or apns)";if(!i.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/".concat(r.subscribeKey,"/devices/").concat(n,"/remove")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){return{type:t.pushGateway}},t.handleResponse=function(){return{}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNUnsubscribeOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=0<i.length?i.join(","):",";return"/v2/presence/sub-key/".concat(n.subscribeKey,"/channel/").concat(s.default.encodeString(o),"/leave")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};0<r.length&&(i["channel-group"]=r.join(","));return i},t.handleResponse=function(){return{}};n(0);var r=i(n(1)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNWhereNowOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r;return"/v2/presence/sub-key/".concat(n.subscribeKey,"/uuid/").concat(i)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return t.payload?{channels:t.payload.channels}:{channels:[]}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNHeartbeatOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=0<i.length?i.join(","):",";return"/v2/presence/sub-key/".concat(n.subscribeKey,"/channel/").concat(s.default.encodeString(o),"/heartbeat")},t.isAuthSupported=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.prepareParams=function(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.state,o=void 0===i?{}:i,s=e.config,a={};0<r.length&&(a["channel-group"]=r.join(","));return a.state=JSON.stringify(o),a.heartbeat=s.getPresenceTimeout(),a},t.handleResponse=function(){return{}};n(0);var r=i(n(1)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNGetStateOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r,o=t.channels,s=void 0===o?[]:o,a=0<s.length?s.join(","):",";return"/v2/presence/sub-key/".concat(n.subscribeKey,"/channel/").concat(u.default.encodeString(a),"/uuid/").concat(i)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};0<r.length&&(i["channel-group"]=r.join(","));return i},t.handleResponse=function(e,t,n){var r=n.channels,i=void 0===r?[]:r,o=n.channelGroups,s=void 0===o?[]:o,a={};1===i.length&&0===s.length?a[i[0]]=t.payload:a=t.payload;return{channels:a}};n(0);var r=i(n(1)),u=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNSetStateOperation},t.validateParams=function(e,t){var n=e.config,r=t.state,i=t.channels,o=void 0===i?[]:i,s=t.channelGroups,a=void 0===s?[]:s;if(!r)return"Missing State";if(!n.subscribeKey)return"Missing Subscribe Key";if(0===o.length&&0===a.length)return"Please provide a list of channels and/or channel-groups"},t.getURL=function(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=0<i.length?i.join(","):",";return"/v2/presence/sub-key/".concat(n.subscribeKey,"/channel/").concat(s.default.encodeString(o),"/uuid/").concat(n.UUID,"/data")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.state,r=t.channelGroups,i=void 0===r?[]:r,o={};o.state=JSON.stringify(n),0<i.length&&(o["channel-group"]=i.join(","));return o},t.handleResponse=function(e,t){return{state:t.payload}};n(0);var r=i(n(1)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNHereNowOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=t.channelGroups,s=void 0===o?[]:o,a="/v2/presence/sub-key/".concat(n.subscribeKey);if(0<i.length||0<s.length){var u=0<i.length?i.join(","):",";a+="/channel/".concat(c.default.encodeString(u))}return a},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.includeUUIDs,o=void 0===i||i,s=t.includeState,a=void 0!==s&&s,u={};o||(u.disable_uuids=1);a&&(u.state=1);0<r.length&&(u["channel-group"]=r.join(","));return u},t.handleResponse=function(e,i,t){var n,r=t.channels,o=void 0===r?[]:r,s=t.channelGroups,a=void 0===s?[]:s,u=t.includeUUIDs,c=void 0===u||u,f=t.includeState,l=void 0!==f&&f;n=1<o.length||0<a.length||0===a.length&&0===o.length?function(){var r={};return r.totalChannels=i.payload.total_channels,r.totalOccupancy=i.payload.total_occupancy,r.channels={},Object.keys(i.payload.channels).forEach(function(e){var t=i.payload.channels[e],n=[];return r.channels[e]={occupants:n,name:e,occupancy:t.occupancy},c&&t.uuids.forEach(function(e){l?n.push({state:e.state,uuid:e.uuid}):n.push({state:null,uuid:e})}),r}),r}():function(){var e={},t=[];return e.totalChannels=1,e.totalOccupancy=i.occupancy,e.channels={},e.channels[o[0]]={occupants:t,name:o[0],occupancy:i.occupancy},c&&i.uuids&&i.uuids.forEach(function(e){l?t.push({state:e.state,uuid:e.uuid}):t.push({state:null,uuid:e})}),e}();return n};n(0);var r=i(n(1)),c=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNAddMessageActionOperation},t.validateParams=function(e,t){var n=e.config,r=t.action,i=t.channel;if(!t.messageTimetoken)return"Missing message timetoken";if(!n.subscribeKey)return"Missing Subscribe Key";if(!i)return"Missing message channel";if(!r)return"Missing Action";if(!r.value)return"Missing Action.value";if(!r.type)return"Missing Action.type";if(15<r.type.length)return"Action.type value exceed maximum length of 15"},t.usePost=function(){return!0},t.postURL=function(e,t){var n=e.config,r=t.channel,i=t.messageTimetoken;return"/v1/message-actions/".concat(n.subscribeKey,"/channel/").concat(r,"/message/").concat(i)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.getRequestHeaders=function(){return{"Content-Type":"application/json"}},t.isAuthSupported=function(){return!0},t.prepareParams=function(){return{}},t.postPayload=function(e,t){return t.action},t.handleResponse=function(e,t){return{data:t.data}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNRemoveMessageActionOperation},t.validateParams=function(e,t){var n=e.config,r=t.channel,i=t.actionTimetoken;if(!t.messageTimetoken)return"Missing message timetoken";if(!i)return"Missing action timetoken";if(!n.subscribeKey)return"Missing Subscribe Key";if(!r)return"Missing message channel"},t.useDelete=function(){return!0},t.getURL=function(e,t){var n=e.config,r=t.channel,i=t.actionTimetoken,o=t.messageTimetoken;return"/v1/message-actions/".concat(n.subscribeKey,"/channel/").concat(r,"/message/").concat(o,"/action/").concat(i)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return{data:t.data}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetMessageActionsOperation},t.validateParams=function(e,t){var n=e.config,r=t.channel;if(!n.subscribeKey)return"Missing Subscribe Key";if(!r)return"Missing message channel"},t.getURL=function(e,t){var n=e.config,r=t.channel;return"/v1/message-actions/".concat(n.subscribeKey,"/channel/").concat(r)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.limit,r=t.start,i=t.end,o={};n&&(o.limit=n);r&&(o.start=r);i&&(o.end=i);return o},t.handleResponse=function(e,t){var n={data:t.data,start:null,end:null};n.data.length&&(n.end=n.data[n.data.length-1].actionTimetoken,n.start=n.data[0].actionTimetoken);return n};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNCreateUserOperation},t.validateParams=function(e,t){var n=e.config,r=t.id,i=t.name,o=t.custom;if(!r)return"Missing User.id";if(!i)return"Missing User.name";if(!n.subscribeKey)return"Missing Subscribe Key";if(o&&!Object.values(o).every(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}))return"Invalid custom type, only string, number and boolean values are allowed."},t.usePost=function(){return!0},t.getURL=function(e){var t=e.config;return"/v1/objects/".concat(t.subscribeKey,"/users")},t.postURL=function(e){var t=e.config;return"/v1/objects/".concat(t.subscribeKey,"/users")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.id)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r={};n?void 0===n.customFields&&(n.customFields=!0):n={customFields:!0};if(n){var i=[];n.customFields&&i.push("custom");var o=i.join(",");0<o.length&&(r.include=o)}return r},t.postPayload=function(e,t){return function(e,t){return t}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateUserOperation},t.validateParams=function(e,t){var n=e.config,r=t.id,i=t.name,o=t.custom;if(!r)return"Missing User.id";if(!i)return"Missing User.name";if(!n.subscribeKey)return"Missing Subscribe Key";if(o&&!Object.values(o).every(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}))return"Invalid custom type, only string, number and boolean values are allowed."},t.usePatch=function(){return!0},t.getURL=function(e,t){var n=e.config,r=t.id;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(r)},t.patchURL=function(e,t){var n=e.config,r=t.id;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(r)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.id)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r={};n?void 0===n.customFields&&(n.customFields=!0):n={customFields:!0};if(n){var i=[];n.customFields&&i.push("custom");var o=i.join(",");0<o.length&&(r.include=o)}return r},t.patchPayload=function(e,t){return function(e,t){return t}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNDeleteUserOperation},t.validateParams=function(e,t){var n=e.config;if(!t)return"Missing UserId";if(!n.subscribeKey)return"Missing Subscribe Key"},t.useDelete=function(){return!0},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t)||e.tokenManager.getToken("user")},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetUserOperation},t.validateParams=function(e,t){if(!t.userId)return"Missing userId"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.userId)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r={};n?void 0===n.customFields&&(n.customFields=!0):n={customFields:!0};if(n){var i=[];n.customFields&&i.push("custom");var o=i.join(",");0<o.length&&(r.include=o)}return r},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetUsersOperation},t.validateParams=function(){},t.getURL=function(e){var t=e.config;return"/v1/objects/".concat(t.subscribeKey,"/users")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e){return e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNCreateSpaceOperation},t.validateParams=function(e,t){var n=e.config,r=t.id,i=t.name,o=t.custom;if(!r)return"Missing Space.id";if(!i)return"Missing Space.name";if(!n.subscribeKey)return"Missing Subscribe Key";if(o&&!Object.values(o).every(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}))return"Invalid custom type, only string, number and boolean values are allowed."},t.usePost=function(){return!0},t.getURL=function(e){var t=e.config;return"/v1/objects/".concat(t.subscribeKey,"/spaces")},t.postURL=function(e){var t=e.config;return"/v1/objects/".concat(t.subscribeKey,"/spaces")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.id)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r={};n?void 0===n.customFields&&(n.customFields=!0):n={customFields:!0};if(n){var i=[];n.customFields&&i.push("custom");var o=i.join(",");0<o.length&&(r.include=o)}return r},t.postPayload=function(e,t){return function(e,t){return t}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateSpaceOperation},t.validateParams=function(e,t){var n=e.config,r=t.id,i=t.name,o=t.custom;if(!r)return"Missing Space.id";if(!i)return"Missing Space.name";if(!n.subscribeKey)return"Missing Subscribe Key";if(o&&!Object.values(o).every(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}))return"Invalid custom type, only string, number and boolean values are allowed."},t.usePatch=function(){return!0},t.getURL=function(e,t){var n=e.config,r=t.id;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(r)},t.patchURL=function(e,t){var n=e.config,r=t.id;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(r)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.id)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r={};n?void 0===n.customFields&&(n.customFields=!0):n={customFields:!0};if(n){var i=[];n.customFields&&i.push("custom");var o=i.join(",");0<o.length&&(r.include=o)}return r},t.patchPayload=function(e,t){return function(e,t){return t}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNDeleteSpaceOperation},t.validateParams=function(e,t){var n=e.config;if(!t)return"Missing SpaceId";if(!n.subscribeKey)return"Missing Subscribe Key"},t.useDelete=function(){return!0},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t)||e.tokenManager.getToken("space")},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetSpacesOperation},t.validateParams=function(){},t.getURL=function(e){var t=e.config;return"/v1/objects/".concat(t.subscribeKey,"/spaces")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e){return e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetSpaceOperation},t.validateParams=function(e,t){if(!t.spaceId)return"Missing spaceId"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.spaceId)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r={};n?void 0===n.customFields&&(n.customFields=!0):n={customFields:!0};if(n){var i=[];n.customFields&&i.push("custom");var o=i.join(",");0<o.length&&(r.include=o)}return r},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetMembersOperation},t.validateParams=function(e,t){if(!t.spaceId)return"Missing spaceId"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.spaceId)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.userFields&&s.push("user"),n.customUserFields&&s.push("user.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateMembersOperation},t.validateParams=function(e,t){var n=t.spaceId,r=t.users;if(!n)return"Missing spaceId";if(!r)return"Missing users"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.patchURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.usePatch=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.spaceId)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.patchPayload=function(e,t){return function(e,t){var n=t.users,r={};n&&0<n.length&&(r.add=[],n.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),r.add.push(t)}));return r}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateMembersOperation},t.validateParams=function(e,t){var n=t.spaceId,r=t.users;if(!n)return"Missing spaceId";if(!r)return"Missing users"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.patchURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.usePatch=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.spaceId)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.patchPayload=function(e,t){return function(e,t){var n=t.addMembers,r=t.updateMembers,i=t.removeMembers,o=t.users,s={};n&&0<n.length&&(s.add=[],n.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),s.add.push(t)}));r&&0<r.length&&(s.update=[],r.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),s.update.push(t)}));o&&0<o.length&&(s.update=s.update||[],o.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),s.update.push(t)}));i&&0<i.length&&(s.remove=[],i.forEach(function(e){s.remove.push({id:e})}));return s}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateMembersOperation},t.validateParams=function(e,t){var n=t.spaceId,r=t.users;if(!n)return"Missing spaceId";if(!r)return"Missing users"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.patchURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/spaces/").concat(t.spaceId,"/users")},t.usePatch=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("space",t.spaceId)||e.tokenManager.getToken("space")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.patchPayload=function(e,t){return function(e,t){var n=t.users,r={};n&&0<n.length&&(r.remove=[],n.forEach(function(e){r.remove.push({id:e})}));return r}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNGetMembershipsOperation},t.validateParams=function(e,t){if(!t.userId)return"Missing userId"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.userId)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateMembershipsOperation},t.validateParams=function(e,t){var n=t.userId,r=t.spaces;if(!n)return"Missing userId";if(!r)return"Missing spaces"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.patchURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.usePatch=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.userId)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.patchPayload=function(e,t){return function(e,t){var n=t.addMemberships,r=t.updateMemberships,i=t.removeMemberships,o=t.spaces,s={};n&&0<n.length&&(s.add=[],n.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),s.add.push(t)}));r&&0<r.length&&(s.update=[],r.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),s.update.push(t)}));o&&0<o.length&&(s.update=s.update||[],o.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),s.update.push(t)}));i&&0<i.length&&(s.remove=[],i.forEach(function(e){s.remove.push({id:e})}));return s}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateMembershipsOperation},t.validateParams=function(e,t){var n=t.userId,r=t.spaces;if(!n)return"Missing userId";if(!r)return"Missing spaces"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.patchURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.usePatch=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.userId)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.patchPayload=function(e,t){return function(e,t){var n=t.spaces,r={};n&&0<n.length&&(r.add=[],n.forEach(function(e){var t={id:e.id};e.custom&&(t.custom=e.custom),r.add.push(t)}));return r}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNUpdateMembershipsOperation},t.validateParams=function(e,t){var n=t.userId,r=t.spaces;if(!n)return"Missing userId";if(!r)return"Missing spaces"},t.getURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.patchURL=function(e,t){var n=e.config;return"/v1/objects/".concat(n.subscribeKey,"/users/").concat(t.userId,"/spaces")},t.usePatch=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.getAuthToken=function(e,t){return e.tokenManager.getToken("user",t.userId)||e.tokenManager.getToken("user")},t.prepareParams=function(e,t){var n=t.include,r=t.limit,i=t.page,o={};r&&(o.limit=r);if(n){var s=[];n.totalCount&&(o.count=!0),n.customFields&&s.push("custom"),n.spaceFields&&s.push("space"),n.customSpaceFields&&s.push("space.custom");var a=s.join(",");0<a.length&&(o.include=a)}i&&(i.next&&(o.start=i.next),i.prev&&(o.end=i.prev));return o},t.patchPayload=function(e,t){return function(e,t){var n=t.spaces,r={};n&&0<n.length&&(r.remove=[],n.forEach(function(e){r.remove.push({id:e})}));return r}(0,t)},t.handleResponse=function(e,t){return t};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNAccessManagerAudit},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e){var t=e.config;return"/v2/auth/audit/sub-key/".concat(t.subscribeKey)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!1},t.prepareParams=function(e,t){var n=t.channel,r=t.channelGroup,i=t.authKeys,o=void 0===i?[]:i,s={};n&&(s.channel=n);r&&(s["channel-group"]=r);0<o.length&&(s.auth=o.join(","));return s},t.handleResponse=function(e,t){return t.payload};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNAccessManagerGrant},t.validateParams=function(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key";if(!t.publishKey)return"Missing Publish Key";if(!t.secretKey)return"Missing Secret Key"},t.getURL=function(e){var t=e.config;return"/v2/auth/grant/sub-key/".concat(t.subscribeKey)},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!1},t.prepareParams=function(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.channelGroups,o=void 0===i?[]:i,s=t.ttl,a=t.read,u=void 0!==a&&a,c=t.write,f=void 0!==c&&c,l=t.manage,h=void 0!==l&&l,p=t.authKeys,d=void 0===p?[]:p,g={};g.r=u?"1":"0",g.w=f?"1":"0",g.m=h?"1":"0",0<r.length&&(g.channel=r.join(","));0<o.length&&(g["channel-group"]=o.join(","));0<d.length&&(g.auth=d.join(","));!s&&0!==s||(g.ttl=s);return g},t.handleResponse=function(){return{}};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return i.default.PNAccessManagerGrantToken},t.extractPermissions=l,t.validateParams=function(e,t){var n=e.config;if(!n.subscribeKey)return"Missing Subscribe Key";if(!n.publishKey)return"Missing Publish Key";if(!n.secretKey)return"Missing Secret Key";if(!t.resources&&!t.patterns)return"Missing either Resources or Patterns.";if(t.resources&&(!t.resources.users||0===Object.keys(t.resources.users).length)&&(!t.resources.spaces||0===Object.keys(t.resources.spaces).length)||t.patterns&&(!t.patterns.users||0===Object.keys(t.patterns.users).length)&&(!t.patterns.spaces||0===Object.keys(t.patterns.spaces).length))return"Missing values for either Resources or Patterns."},t.postURL=function(e){var t=e.config;return"/v3/pam/".concat(t.subscribeKey,"/grant")},t.usePost=function(){return!0},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!1},t.prepareParams=function(){return{}},t.postPayload=function(e,t){return function(e,t){var n=t.ttl,r=t.resources,i=t.patterns,o=t.meta,s={ttl:0,permissions:{resources:{channels:{},groups:{},users:{},spaces:{}},patterns:{channels:{},groups:{},users:{},spaces:{}},meta:{}}};if(r){var a=r.users,u=r.spaces;a&&Object.keys(a).forEach(function(e){s.permissions.resources.users[e]=l(a[e])}),u&&Object.keys(u).forEach(function(e){s.permissions.resources.spaces[e]=l(u[e])})}if(i){var c=i.users,f=i.spaces;c&&Object.keys(c).forEach(function(e){s.permissions.patterns.users[e]=l(c[e])}),f&&Object.keys(f).forEach(function(e){s.permissions.patterns.spaces[e]=l(f[e])})}!n&&0!==n||(s.ttl=n);o&&(s.permissions.meta=o);return s}(0,t)},t.handleResponse=function(e,t){return t.data.token};n(0);var r,i=(r=n(1))&&r.__esModule?r:{default:r};function l(e){var t=0;return e.create&&(t|=16),e.delete&&(t|=8),e.manage&&(t|=4),e.write&&(t|=2),e.read&&(t|=1),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNPublishOperation},t.validateParams=function(e,t){var n=e.config,r=t.message;if(!t.channel)return"Missing Channel";if(!r)return"Missing Message";if(!n.subscribeKey)return"Missing Subscribe Key"},t.usePost=function(e,t){var n=t.sendByPost;return void 0!==n&&n},t.getURL=function(e,t){var n=e.config,r=t.channel,i=t.message,o=a(e,i);return"/publish/".concat(n.publishKey,"/").concat(n.subscribeKey,"/0/").concat(s.default.encodeString(r),"/0/").concat(s.default.encodeString(o))},t.postURL=function(e,t){var n=e.config,r=t.channel;return"/publish/".concat(n.publishKey,"/").concat(n.subscribeKey,"/0/").concat(s.default.encodeString(r),"/0")},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.postPayload=function(e,t){var n=t.message;return a(e,n)},t.prepareParams=function(e,t){var n=t.meta,r=t.replicate,i=void 0===r||r,o=t.storeInHistory,s=t.ttl,a={};null!=o&&(a.store=o?"1":"0");s&&(a.ttl=s);!1===i&&(a.norep="true");n&&"object"===u(n)&&(a.meta=JSON.stringify(n));return a},t.handleResponse=function(e,t){return{timetoken:t[2]}};n(0);var r=i(n(1)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNSignalOperation},t.validateParams=function(e,t){var n=e.config,r=t.message;if(!t.channel)return"Missing Channel";if(!r)return"Missing Message";if(!n.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.channel,i=t.message,o=function(e,t){return JSON.stringify(t)}(0,i);return"/signal/".concat(n.publishKey,"/").concat(n.subscribeKey,"/0/").concat(s.default.encodeString(r),"/0/").concat(s.default.encodeString(o))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(){return{}},t.handleResponse=function(e,t){return{timetoken:t[2]}};n(0);var r=i(n(1)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNHistoryOperation},t.validateParams=function(e,t){var n=t.channel,r=e.config;if(!n)return"Missing channel";if(!r.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.channel,r=e.config;return"/v2/history/sub-key/".concat(r.subscribeKey,"/channel/").concat(i.default.encodeString(n))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.start,r=t.end,i=t.reverse,o=t.count,s=void 0===o?100:o,a=t.stringifiedTimeToken,u=void 0!==a&&a,c=t.includeMeta,f=void 0!==c&&c,l={include_token:"true"};l.count=s,n&&(l.start=n);r&&(l.end=r);u&&(l.string_message_token="true");null!=i&&(l.reverse=i.toString());f&&(l.include_meta="true");return l},t.handleResponse=function(n,e){var r={messages:[],startTimeToken:e[1],endTimeToken:e[2]};Array.isArray(e[0])&&e[0].forEach(function(e){var t={timetoken:e.timetoken,entry:function(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}(n,e.message)};e.meta&&(t.meta=e.meta),r.messages.push(t)});return r};n(0);var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNDeleteMessagesOperation},t.validateParams=function(e,t){var n=t.channel,r=e.config;if(!n)return"Missing channel";if(!r.subscribeKey)return"Missing Subscribe Key"},t.useDelete=function(){return!0},t.getURL=function(e,t){var n=t.channel,r=e.config;return"/v3/history/sub-key/".concat(r.subscribeKey,"/channel/").concat(i.default.encodeString(n))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.start,r=t.end,i={};n&&(i.start=n);r&&(i.end=r);return i},t.handleResponse=function(e,t){return t.payload};n(0);var r=o(n(1)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNMessageCounts},t.validateParams=function(e,t){var n=t.channels,r=t.timetoken,i=t.channelTimetokens,o=e.config;if(!n)return"Missing channel";if(r&&i)return"timetoken and channelTimetokens are incompatible together";if(r&&i&&1<i.length&&n.length!==i.length)return"Length of channelTimetokens and channels do not match";if(!o.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=t.channels,r=e.config,i=n.join(",");return"/v3/history/sub-key/".concat(r.subscribeKey,"/message-counts/").concat(o.default.encodeString(i))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.timetoken,r=t.channelTimetokens,i={};if(r&&1===r.length){var o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r,1)[0];i.timetoken=o}else r?i.channelsTimetoken=r.join(","):n&&(i.timetoken=n);return i},t.handleResponse=function(e,t){return{channels:t.channels}};var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNFetchMessagesOperation},t.validateParams=function(e,t){var n=t.channels,r=t.includeMessageActions,i=void 0!==r&&r,o=e.config;if(!n||0===n.length)return"Missing channels";if(!o.subscribeKey)return"Missing Subscribe Key";if(i&&1<n.length)throw new TypeError("History can return actions data for a single channel only. Either pass a single channel or disable the includeMessageActions flag.")},t.getURL=function(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.includeMessageActions,o=void 0!==i&&i,s=e.config,a=o?"history-with-actions":"history",u=0<r.length?r.join(","):",";return"/v3/".concat(a,"/sub-key/").concat(s.subscribeKey,"/channel/").concat(c.default.encodeString(u))},t.getRequestTimeout=function(e){return e.config.getTransactionTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=t.start,r=t.end,i=t.count,o=t.stringifiedTimeToken,s=void 0!==o&&o,a=t.includeMeta,u=void 0!==a&&a,c={};i&&(c.max=i);n&&(c.start=n);r&&(c.end=r);s&&(c.string_message_token="true");u&&(c.include_meta="true");return c},t.handleResponse=function(r,e){var i={channels:{}};return Object.keys(e.channels||{}).forEach(function(n){i.channels[n]=[],(e.channels[n]||[]).forEach(function(e){var t={};t.channel=n,t.timetoken=e.timetoken,t.message=function(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}(r,e.message),e.actions&&(t.actions=e.actions,t.data=e.actions),e.meta&&(t.meta=e.meta),i.channels[n].push(t)})}),i};n(0);var r=i(n(1)),c=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=function(){return r.default.PNSubscribeOperation},t.validateParams=function(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"},t.getURL=function(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=0<i.length?i.join(","):",";return"/v2/subscribe/".concat(n.subscribeKey,"/").concat(s.default.encodeString(o),"/0")},t.getRequestTimeout=function(e){return e.config.getSubscribeTimeout()},t.isAuthSupported=function(){return!0},t.prepareParams=function(e,t){var n=e.config,r=t.state,i=t.channelGroups,o=void 0===i?[]:i,s=t.timetoken,a=t.filterExpression,u=t.region,c={heartbeat:n.getPresenceTimeout()};0<o.length&&(c["channel-group"]=o.join(","));a&&0<a.length&&(c["filter-expr"]=a);Object.keys(r).length&&(c.state=JSON.stringify(r));s&&(c.tt=s);u&&(c.tr=u);return c},t.handleResponse=function(e,t){var r=[];t.m.forEach(function(e){var t={publishTimetoken:e.p.t,region:e.p.r},n={shard:parseInt(e.a,10),subscriptionMatch:e.b,channel:e.c,messageType:e.e,payload:e.d,flags:e.f,issuingClientId:e.i,subscribeKey:e.k,originationTimetoken:e.o,userMetadata:e.u,publishMetaData:t};r.push(n)});var n={timetoken:t.t.t,region:t.t.r};return{messages:r,metadata:n}};n(0);var r=i(n(1)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n(3));var r=i(n(4));n(0);function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,u,c,f=(a=l,(u=[{key:"init",value:function(e){this._config=e,this._maxSubDomain=20,this._currentSubDomain=Math.floor(Math.random()*this._maxSubDomain),this._providedFQDN=(this._config.secure?"https://":"http://")+this._config.origin,this._coreParams={},this.shiftStandardOrigin()}},{key:"nextOrigin",value:function(){return this._providedFQDN.match(/ps\.pndsn\.com$/i)?(this._currentSubDomain=this._currentSubDomain+1,this._currentSubDomain>=this._maxSubDomain&&(this._currentSubDomain=1),e=this._currentSubDomain.toString(),this._providedFQDN.replace("ps.pndsn.com","ps".concat(e,".pndsn.com"))):this._providedFQDN;var e}},{key:"hasModule",value:function(e){return e in this._modules}},{key:"shiftStandardOrigin",value:function(){return this._standardOrigin=this.nextOrigin(),this._standardOrigin}},{key:"getStandardOrigin",value:function(){return this._standardOrigin}},{key:"POST",value:function(e,t,n,r){return this._modules.post(e,t,n,r)}},{key:"PATCH",value:function(e,t,n,r){return this._modules.patch(e,t,n,r)}},{key:"GET",value:function(e,t,n){return this._modules.get(e,t,n)}},{key:"DELETE",value:function(e,t,n){return this._modules.del(e,t,n)}},{key:"_detectErrorCategory",value:function(e){if("ENOTFOUND"===e.code)return r.default.PNNetworkIssuesCategory;if("ECONNREFUSED"===e.code)return r.default.PNNetworkIssuesCategory;if("ECONNRESET"===e.code)return r.default.PNNetworkIssuesCategory;if("EAI_AGAIN"===e.code)return r.default.PNNetworkIssuesCategory;if(0===e.status||e.hasOwnProperty("status")&&void 0===e.status)return r.default.PNNetworkIssuesCategory;if(e.timeout)return r.default.PNTimeoutCategory;if("ETIMEDOUT"===e.code)return r.default.PNNetworkIssuesCategory;if(e.response){if(e.response.badRequest)return r.default.PNBadRequestCategory;if(e.response.forbidden)return r.default.PNAccessDeniedCategory}return r.default.PNUnknownCategory}}])&&o(a.prototype,u),void(c&&o(a,c)),l);function l(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),s(this,"_modules",void 0),s(this,"_config",void 0),s(this,"_maxSubDomain",void 0),s(this,"_currentSubDomain",void 0),s(this,"_standardOrigin",void 0),s(this,"_subscribeOrigin",void 0),s(this,"_providedFQDN",void 0),s(this,"_requestTimeout",void 0),s(this,"_coreParams",void 0),this._modules={},Object.keys(t).forEach(function(e){n._modules[e]=t[e].bind(n)})}t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={get:function(e){try{return localStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{return localStorage.setItem(e,t)}catch(e){return null}}};t.default=r,e.exports=t.default},function(f,l,h){"use strict";(function(i){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var e,o=(e=h(73))&&e.__esModule?e:{default:e};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n,r,a,u=(n=c,(r=[{key:"decodeToken",value:function(e){var t="";e.length%4==3?t="=":e.length%4==2&&(t="==");var n=e.replace("-","+").replace("_","/")+t,r=o.default.decode(new i.from(n,"base64"));if("object"===s(r))return r}}])&&t(n.prototype,r),void(a&&t(n,a)),c);function c(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c)}l.default=u,f.exports=l.default}).call(this,h(9).Buffer)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.byteLength=function(e){var t=l(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,r=l(e),i=r[0],o=r[1],s=new f(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),a=0,u=0<o?i-4:i;for(n=0;n<u;n+=4)t=c[e.charCodeAt(n)]<<18|c[e.charCodeAt(n+1)]<<12|c[e.charCodeAt(n+2)]<<6|c[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=c[e.charCodeAt(n)]<<2|c[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===o&&(t=c[e.charCodeAt(n)]<<10|c[e.charCodeAt(n+1)]<<4|c[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},t.fromByteArray=function(e){for(var t,n=e.length,r=n%3,i=[],o=0,s=n-r;o<s;o+=16383)i.push(u(e,o,s<o+16383?s:o+16383));1==r?(t=e[n-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2==r&&(t=(e[n-2]<<8)+e[n-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],c=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,o=r.length;i<o;++i)a[i]=r[i],c[r.charCodeAt(i)]=i;function l(e){var t=e.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function u(e,t,n){for(var r,i,o=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=r)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,f=-7,l=n?i-1:0,h=n?-1:1,p=e[t+l];for(l+=h,o=p&(1<<-f)-1,p>>=-f,f+=a;0<f;o=256*o+e[t+l],l+=h,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=r;0<f;s=256*s+e[t+l],l+=h,f-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,r),o-=c}return(p?-1:1)*s*Math.pow(2,o-r)},t.write=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,f=(1<<c)-1,l=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),2<=(t+=1<=s+l?h/u:h*Math.pow(2,1-l))*u&&(s++,u/=2),f<=s+l?(a=0,s=f):1<=s+l?(a=(t*u-1)*Math.pow(2,i),s+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,i),s=0));8<=i;e[n+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;0<c;e[n+p]=255&s,p+=d,s/=256,c-=8);e[n+p-d]|=128*g}},function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(r,i,e){(function(b){var e,t,n;t=[],void 0===(n="function"==typeof(e=function(){var e=function(){function o(e){this.$hex=e}o.prototype={length:function(){return this.$hex.length/2},toString:function(e){if(!e||"hex"===e||16===e)return this.$hex;if("utf-8"===e){for(var t="",n=0;n<this.$hex.length;n+=2)t+="%"+this.$hex.substring(n,n+2);return decodeURIComponent(t)}if("latin"!==e)throw new Error("Unrecognised format: "+e);for(var t=[],n=0;n<this.$hex.length;n+=2)t.push(parseInt(this.$hex.substring(n,n+2),16));return String.fromCharCode.apply(String,t)}},o.fromLatinString=function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n).toString(16);1===r.length&&(r="0"+r),t+=r}return new o(t)},o.fromUtf8String=function(e){for(var t=encodeURIComponent(e),n="",r=0;r<t.length;r++)if("%"===t.charAt(r))n+=t.substring(r+1,r+3),r+=2;else{var i=t.charCodeAt(r).toString(16);i.length<2&&(i="0"+i),n+=i}return new o(n)};var s=[],f={},r=function(e){return function(){throw new Error(e+" not implemented")}};function e(){}function t(){}function l(e,t){var n=e.value;return n<24?n:24==n?t.readByte():25==n?t.readUint16():26==n?t.readUint32():27==n?t.readUint64():31==n?null:void r("Additional info: "+n)()}function a(e,t,n){var r=e<<5;t<24?n.writeByte(r|t):t<256?(n.writeByte(24|r),n.writeByte(t)):t<65536?(n.writeByte(25|r),n.writeUint16(t)):t<4294967296?(n.writeByte(26|r),n.writeUint32(t)):(n.writeByte(27|r),n.writeUint64(t))}e.prototype={peekByte:r("peekByte"),readByte:r("readByte"),readChunk:r("readChunk"),readFloat16:function(){var e=this.readUint16(),t=(32767&e)>>10,n=1023&e,r=32768&e;if(31==t)return 0==n?r?-1/0:1/0:NaN;var i=t?Math.pow(2,t-25)*(1024+n):Math.pow(2,-24)*n;return r?-i:i},readFloat32:function(){var e=this.readUint32(),t=(2147483647&e)>>23,n=8388607&e,r=2147483648&e;if(255==t)return 0==n?r?-1/0:1/0:NaN;var i=t?Math.pow(2,t-23-127)*(8388608+n):Math.pow(2,-149)*n;return r?-i:i},readFloat64:function(){var e=this.readUint32(),t=this.readUint32(),n=e>>20&2047,r=4294967296*(1048575&e)+t,i=2147483648&e;if(2047==n)return 0===r?i?-1/0:1/0:NaN;var o=n?Math.pow(2,n-52-1023)*(4503599627370496+r):Math.pow(2,-1074)*r;return i?-o:o},readUint16:function(){return 256*this.readByte()+this.readByte()},readUint32:function(){return 65536*this.readUint16()+this.readUint16()},readUint64:function(){return 4294967296*this.readUint32()+this.readUint32()}},t.prototype={writeByte:r("writeByte"),result:r("result"),writeFloat16:r("writeFloat16"),writeFloat32:r("writeFloat32"),writeFloat64:r("writeFloat64"),writeUint16:function(e){this.writeByte(e>>8&255),this.writeByte(255&e)},writeUint32:function(e){this.writeUint16(e>>16&65535),this.writeUint16(65535&e)},writeUint64:function(e){if(9007199254740992<=e||e<=-9007199254740992)throw new Error("Cannot encode Uint64 of: "+e+" magnitude to big (floating point errors)");this.writeUint32(Math.floor(e/4294967296)),this.writeUint32(e%4294967296)},writeString:r("writeString"),canWriteBinary:function(e){return!1},writeBinary:r("writeChunk")};var h=new Error;function p(e){var t=function(e){var t=e.readByte();return{type:t>>5,value:31&t}}(e);switch(t.type){case 0:return l(t,e);case 1:return-1-l(t,e);case 2:return e.readChunk(l(t,e));case 3:var n=e.readChunk(l(t,e));return n.toString("utf-8");case 4:case 5:var r=l(t,e),i=[];if(null!==r){5===t.type&&(r*=2);for(var o=0;o<r;o++)i[o]=p(e)}else for(var s;(s=p(e))!==h;)i.push(s);if(5!==t.type)return i;for(var a={},o=0;o<i.length;o+=2)a[i[o]]=i[o+1];return a;case 6:var u=l(t,e),c=f[u],i=p(e);return c?c(i):i;case 7:if(25===t.value)return e.readFloat16();if(26===t.value)return e.readFloat32();if(27===t.value)return e.readFloat64();switch(l(t,e)){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;case null:return h;default:throw new Error("Unknown fixed value: "+t.value)}default:throw new Error("Unsupported header: "+JSON.stringify(t))}throw new Error("not implemented yet")}function u(e,t){for(var n=0;n<s.length;n++){var r=s[n].fn(e);if(void 0!==r)return a(6,s[n].tag,t),u(r,t)}if(e&&"function"==typeof e.toCBOR&&(e=e.toCBOR()),!1===e)a(7,20,t);else if(!0===e)a(7,21,t);else if(null===e)a(7,22,t);else if(void 0===e)a(7,23,t);else if("number"==typeof e)Math.floor(e)===e&&e<9007199254740992&&-9007199254740992<e?e<0?a(1,-1-e,t):a(0,e,t):(function(e,t,n){n.writeByte(e<<5|t)}(7,27,t),t.writeFloat64(e));else if("string"==typeof e)t.writeString(e,function(e){a(3,e,t)});else if(t.canWriteBinary(e))t.writeBinary(e,function(e){a(2,e,t)});else{if("object"!=typeof e)throw new Error("CBOR encoding not supported: "+e);if(g.config.useToJSON&&"function"==typeof e.toJSON&&(e=e.toJSON()),Array.isArray(e)){a(4,e.length,t);for(var n=0;n<e.length;n++)u(e[n],t)}else{var i=Object.keys(e);a(5,i.length,t);for(var n=0;n<i.length;n++)u(i[n],t),u(e[i[n]],t)}}}var c=[],d=[],g={config:{useToJSON:!0},addWriter:function(t,n){"string"==typeof t?d.push(function(e){if(t===e)return n(e)}):d.push(t)},addReader:function(n,r){"string"==typeof n?c.push(function(e,t){if(n===t)return r(e,t)}):c.push(n)},encode:function(e,t){for(var n=0;n<d.length;n++){var r=d[n],i=r(t);if(i)return u(e,i),i.result()}throw new Error("Unsupported output format: "+t)},decode:function(e,t){for(var n=0;n<c.length;n++){var r=c[n],i=r(e,t);if(i)return p(i)}throw new Error("Unsupported input format: "+t)},addSemanticEncode:function(e,t){if("number"!=typeof e||e%1!=0||e<0)throw new Error("Tag must be a positive integer");return s.push({tag:e,fn:t}),this},addSemanticDecode:function(e,t){if("number"!=typeof e||e%1!=0||e<0)throw new Error("Tag must be a positive integer");return f[e]=t,this},Reader:e,Writer:t};function i(e){this.buffer=e,this.pos=0}function n(e){this.byteLength=0,this.defaultBufferLength=16384,this.latestBuffer=b.alloc(this.defaultBufferLength),this.latestBufferOffset=0,this.completeBuffers=[],this.stringFormat=e}function y(e){this.hex=e,this.pos=0}function v(e){this.$hex="",this.finalFormat=e||"hex"}return(i.prototype=Object.create(e.prototype)).peekByte=function(){return this.buffer[this.pos]},i.prototype.readByte=function(){return this.buffer[this.pos++]},i.prototype.readUint16=function(){var e=this.buffer.readUInt16BE(this.pos);return this.pos+=2,e},i.prototype.readUint32=function(){var e=this.buffer.readUInt32BE(this.pos);return this.pos+=4,e},i.prototype.readFloat32=function(){var e=this.buffer.readFloatBE(this.pos);return this.pos+=4,e},i.prototype.readFloat64=function(){var e=this.buffer.readDoubleBE(this.pos);return this.pos+=8,e},i.prototype.readChunk=function(e){var t=b.alloc(e);return this.buffer.copy(t,0,this.pos,this.pos+=e),t},(n.prototype=Object.create(t.prototype)).writeByte=function(e){this.latestBuffer[this.latestBufferOffset++]=e,this.latestBufferOffset>=this.latestBuffer.length&&(this.completeBuffers.push(this.latestBuffer),this.latestBuffer=b.alloc(this.defaultBufferLength),this.latestBufferOffset=0),this.byteLength++},n.prototype.writeFloat32=function(e){var t=b.alloc(4);t.writeFloatBE(e,0),this.writeBuffer(t)},n.prototype.writeFloat64=function(e){var t=b.alloc(8);t.writeDoubleBE(e,0),this.writeBuffer(t)},n.prototype.writeString=function(e,t){var n=b.from(e,"utf-8");t(n.length),this.writeBuffer(n)},n.prototype.canWriteBinary=function(e){return e instanceof b},n.prototype.writeBinary=function(e,t){t(e.length),this.writeBuffer(e)},n.prototype.writeBuffer=function(e){if(!(e instanceof b))throw new TypeError("BufferWriter only accepts Buffers");this.latestBufferOffset?this.latestBuffer.length-this.latestBufferOffset>=e.length?(e.copy(this.latestBuffer,this.latestBufferOffset),this.latestBufferOffset+=e.length,this.latestBufferOffset>=this.latestBuffer.length&&(this.completeBuffers.push(this.latestBuffer),this.latestBuffer=b.alloc(this.defaultBufferLength),this.latestBufferOffset=0)):(this.completeBuffers.push(this.latestBuffer.slice(0,this.latestBufferOffset)),this.completeBuffers.push(e),this.latestBuffer=b.alloc(this.defaultBufferLength),this.latestBufferOffset=0):this.completeBuffers.push(e),this.byteLength+=e.length},n.prototype.result=function(){for(var e=b.alloc(this.byteLength),t=0,n=0;n<this.completeBuffers.length;n++){var r=this.completeBuffers[n];r.copy(e,t,0,r.length),t+=r.length}return this.latestBufferOffset&&this.latestBuffer.copy(e,t,0,this.latestBufferOffset),this.stringFormat?e.toString(this.stringFormat):e},"function"==typeof b&&(g.addReader(function(e,t){if(e instanceof b)return new i(e);if("hex"===t||"base64"===t){var n=b.from(e,t);return new i(n)}}),g.addWriter(function(e){return e&&"buffer"!==e?"hex"===e||"base64"===e?new n(e):void 0:new n})),(y.prototype=Object.create(e.prototype)).peekByte=function(){var e=this.hex.substring(this.pos,2);return parseInt(e,16)},y.prototype.readByte=function(){var e=this.hex.substring(this.pos,this.pos+2);return this.pos+=2,parseInt(e,16)},y.prototype.readChunk=function(e){var t=this.hex.substring(this.pos,this.pos+2*e);return this.pos+=2*e,"function"==typeof b?b.from(t,"hex"):new o(t)},(v.prototype=Object.create(t.prototype)).writeByte=function(e){if(e<0||255<e)throw new Error("Byte value out of range: "+e);var t=e.toString(16);1==t.length&&(t="0"+t),this.$hex+=t},v.prototype.canWriteBinary=function(e){return e instanceof o||"function"==typeof b&&e instanceof b},v.prototype.writeBinary=function(e,t){if(e instanceof o)t(e.length()),this.$hex+=e.$hex;else{if(!("function"==typeof b&&e instanceof b))throw new TypeError("HexWriter only accepts BinaryHex or Buffers");t(e.length),this.$hex+=e.toString("hex")}},v.prototype.result=function(){return"buffer"===this.finalFormat&&"function"==typeof b?b.from(this.$hex,"hex"):new o(this.$hex).toString(this.finalFormat)},v.prototype.writeString=function(e,t){var n=o.fromUtf8String(e);t(n.length()),this.$hex+=n.$hex},g.addReader(function(e,t){return e instanceof o||e.$hex?new y(e.$hex):"hex"===t?new y(e):void 0}),g.addWriter(function(e){if("hex"===e)return new v}),g}();return e.addSemanticEncode(0,function(e){if(e instanceof Date)return e.toISOString()}).addSemanticDecode(0,function(e){return new Date(e)}).addSemanticDecode(1,function(e){return new Date(e)}),e})?e.apply(i,t):e)||(r.exports=n)}).call(this,e(9).Buffer)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(e,t,n){var r=o.default.get(this.getStandardOrigin()+t.url).set(t.headers).query(e);return s.call(this,r,t,n)},t.post=function(e,t,n,r){var i=o.default.post(this.getStandardOrigin()+n.url).query(e).set(n.headers).send(t);return s.call(this,i,n,r)},t.patch=function(e,t,n,r){var i=o.default.patch(this.getStandardOrigin()+n.url).query(e).set(n.headers).send(t);return s.call(this,i,n,r)},t.del=function(e,t,n){var r=o.default.delete(this.getStandardOrigin()+t.url).set(t.headers).query(e);return s.call(this,r,t,n)};var r,o=(r=n(75))&&r.__esModule?r:{default:r};n(0);function a(r){var i=(new Date).getTime(),e=(new Date).toISOString(),o=console&&console.log?console:window&&window.console&&window.console.log?window.console:console;o.log("<<<<<"),o.log("[".concat(e,"]"),"\n",r.url,"\n",r.qs),o.log("-----"),r.on("response",function(e){var t=(new Date).getTime()-i,n=(new Date).toISOString();o.log(">>>>>>"),o.log("[".concat(n," / ").concat(t,"]"),"\n",r.url,"\n",r.qs,"\n",e.text),o.log("-----")})}function s(e,i,o){var s=this;return this._config.logVerbosity&&(e=e.use(a)),this._config.proxy&&this._modules.proxy&&(e=this._modules.proxy.call(this,e)),this._config.keepAlive&&this._modules.keepAlive&&(e=this._modules.keepAlive(e)),e.timeout(i.timeout).end(function(t,n){var e,r={};if(r.error=null!==t,r.operation=i.operation,n&&n.status&&(r.statusCode=n.status),t){if(t.response&&t.response.text&&!s._config.logVerbosity)try{r.errorData=JSON.parse(t.response.text)}catch(e){r.errorData=t}else r.errorData=t;return r.category=s._detectErrorCategory(t),o(r,null)}try{e=JSON.parse(n.text)}catch(e){return r.errorData=n,r.error=!0,o(r,null)}return e.error&&1===e.error&&e.status&&e.message&&e.service?(r.errorData=e,r.statusCode=e.status,r.error=!0,r.category=s._detectErrorCategory(r),o(r,null)):(e.error&&e.error.message&&(r.errorData=e.error),o(r,e))})}},function(e,n,t){var r;r="undefined"!=typeof window?window:"undefined"!=typeof self?self:(console.warn("Using browser-only version of superagent in non-browser environment"),this);var i=t(76),o=t(77),s=t(10),a=t(78),u=t(80);function c(){}var f=n=e.exports=function(e,t){return"function"==typeof t?new n.Request("GET",e).end(t):1==arguments.length?new n.Request("GET",e):new n.Request(e,t)};n.Request=v,f.getXHR=function(){if(!(!r.XMLHttpRequest||r.location&&"file:"==r.location.protocol&&r.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only version of superagent could not find XHR")};var l="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};function h(e){if(!s(e))return e;var t=[];for(var n in e)p(t,n,e[n]);return t.join("&")}function p(t,n,e){if(null!=e)if(Array.isArray(e))e.forEach(function(e){p(t,n,e)});else if(s(e))for(var r in e)p(t,n+"["+r+"]",e[r]);else t.push(encodeURIComponent(n)+"="+encodeURIComponent(e));else null===e&&t.push(encodeURIComponent(n))}function d(e){for(var t,n,r={},i=e.split("&"),o=0,s=i.length;o<s;++o)-1==(n=(t=i[o]).indexOf("="))?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function g(e){return/[\/+]json($|[^-\w])/.test(e)}function y(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.header=this.headers=function(e){for(var t,n,r,i,o=e.split(/\r?\n/),s={},a=0,u=o.length;a<u;++a)-1!==(t=(n=o[a]).indexOf(":"))&&(r=n.slice(0,t).toLowerCase(),i=l(n.slice(t+1)),s[r]=i);return s}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function v(e,t){var r=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var t,n=null,e=null;try{e=new y(r)}catch(e){return(n=new Error("Parser is unable to parse the response")).parse=!0,n.original=e,r.xhr?(n.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,n.status=r.xhr.status?r.xhr.status:null,n.statusCode=n.status):(n.rawResponse=null,n.status=null),r.callback(n)}r.emit("response",e);try{r._isResponseOK(e)||(t=new Error(e.statusText||"Unsuccessful HTTP response"))}catch(e){t=e}t?(t.original=n,t.response=e,t.status=e.status,r.callback(t,e)):r.callback(null,e)})}function b(e,t,n){var r=f("DELETE",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}f.serializeObject=h,f.parseString=d,f.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},f.serialize={"application/x-www-form-urlencoded":h,"application/json":JSON.stringify},f.parse={"application/x-www-form-urlencoded":d,"application/json":JSON.parse},a(y.prototype),y.prototype._parseBody=function(e){var t=f.parse[this.type];return this.req._parser?this.req._parser(this,e):(!t&&g(this.type)&&(t=f.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null)},y.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=t,i.url=n,i},f.Response=y,i(v.prototype),o(v.prototype),v.prototype.type=function(e){return this.set("Content-Type",f.types[e]||e),this},v.prototype.accept=function(e){return this.set("Accept",f.types[e]||e),this},v.prototype.auth=function(e,t,n){1===arguments.length&&(t=""),"object"==typeof t&&null!==t&&(n=t,t=""),n=n||{type:"function"==typeof btoa?"basic":"auto"};return this._auth(e,t,n,function(e){if("function"==typeof btoa)return btoa(e);throw new Error("Cannot use basic auth, btoa is not a function")})},v.prototype.query=function(e){return"string"!=typeof e&&(e=h(e)),e&&this._query.push(e),this},v.prototype.attach=function(e,t,n){if(t){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(e,t,n||t.name)}return this},v.prototype._getFormData=function(){return this._formData||(this._formData=new r.FormData),this._formData},v.prototype.callback=function(e,t){if(this._shouldRetry(e,t))return this._retry();var n=this._callback;this.clearTimeout(),e&&(this._maxRetries&&(e.retries=this._retries-1),this.emit("error",e)),n(e,t)},v.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},v.prototype.buffer=v.prototype.ca=v.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},v.prototype.pipe=v.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},v.prototype._isHost=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&"[object Object]"!==Object.prototype.toString.call(e)},v.prototype.end=function(e){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=e||c,this._finalizeQueryString(),this._end()},v.prototype._end=function(){var n=this,r=this.xhr=f.getXHR(),e=this._formData||this._data;this._setTimeouts(),r.onreadystatechange=function(){var e=r.readyState;if(2<=e&&n._responseTimeoutTimer&&clearTimeout(n._responseTimeoutTimer),4==e){var t;try{t=r.status}catch(e){t=0}if(!t){if(n.timedout||n._aborted)return;return n.crossDomainError()}n.emit("end")}};function t(e,t){0<t.total&&(t.percent=t.loaded/t.total*100),t.direction=e,n.emit("progress",t)}if(this.hasListeners("progress"))try{r.onprogress=t.bind(null,"download"),r.upload&&(r.upload.onprogress=t.bind(null,"upload"))}catch(e){}try{this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0)}catch(e){return this.callback(e)}if(this._withCredentials&&(r.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof e&&!this._isHost(e)){var i=this._header["content-type"],o=this._serializer||f.serialize[i?i.split(";")[0]:""];!o&&g(i)&&(o=f.serialize["application/json"]),o&&(e=o(e))}for(var s in this.header)null!=this.header[s]&&this.header.hasOwnProperty(s)&&r.setRequestHeader(s,this.header[s]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send(void 0!==e?e:null),this},f.agent=function(){return new u},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(r){u.prototype[r.toLowerCase()]=function(e,t){var n=new f.Request(r,e);return this._setDefaults(n),t&&n.end(t),n}}),u.prototype.del=u.prototype.delete,f.get=function(e,t,n){var r=f("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},f.head=function(e,t,n){var r=f("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},f.options=function(e,t,n){var r=f("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},f.del=b,f.delete=b,f.patch=function(e,t,n){var r=f("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},f.post=function(e,t,n){var r=f("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},f.put=function(e,t,n){var r=f("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}},function(e,t,n){function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}(e)}(e.exports=r).prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<r.length;i++)if((n=r[i])===t||n.fn===t){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,t,n){"use strict";var i=n(10);function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}(e)}(e.exports=r).prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},r.prototype.parse=function(e){return this._parser=e,this},r.prototype.responseType=function(e){return this._responseType=e,this},r.prototype.serialize=function(e){return this._serializer=e,this},r.prototype.timeout=function(e){if(!e||"object"!=typeof e)return this._timeout=e,this._responseTimeout=0,this;for(var t in e)switch(t){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;default:console.warn("Unknown timeout option",t)}return this},r.prototype.retry=function(e,t){return 0!==arguments.length&&!0!==e||(e=1),e<=0&&(e=0),this._maxRetries=e,this._retries=0,this._retryCallback=t,this};var o=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];r.prototype._shouldRetry=function(e,t){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var n=this._retryCallback(e,t);if(!0===n)return!0;if(!1===n)return!1}catch(e){console.error(e)}if(t&&t.status&&500<=t.status&&501!=t.status)return!0;if(e){if(e.code&&~o.indexOf(e.code))return!0;if(e.timeout&&"ECONNABORTED"==e.code)return!0;if(e.crossDomain)return!0}return!1},r.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},r.prototype.then=function(e,t){if(!this._fullfilledPromise){var i=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(n,r){i.end(function(e,t){e?r(e):n(t)})})}return this._fullfilledPromise.then(e,t)},r.prototype.catch=function(e){return this.then(void 0,e)},r.prototype.use=function(e){return e(this),this},r.prototype.ok=function(e){if("function"!=typeof e)throw Error("Callback required");return this._okCallback=e,this},r.prototype._isResponseOK=function(e){return!!e&&(this._okCallback?this._okCallback(e):200<=e.status&&e.status<300)},r.prototype.getHeader=r.prototype.get=function(e){return this._header[e.toLowerCase()]},r.prototype.set=function(e,t){if(i(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},r.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},r.prototype.field=function(e,t){if(null==e)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),i(e)){for(var n in e)this.field(n,e[n]);return this}if(Array.isArray(t)){for(var r in t)this.field(e,t[r]);return this}if(null==t)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof t&&(t=""+t),this._getFormData().append(e,t),this},r.prototype.abort=function(){return this._aborted||(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort")),this},r.prototype._auth=function(e,t,n,r){switch(n.type){case"basic":this.set("Authorization","Basic "+r(e+":"+t));break;case"auto":this.username=e,this.password=t;break;case"bearer":this.set("Authorization","Bearer "+e)}return this},r.prototype.withCredentials=function(e){return null==e&&(e=!0),this._withCredentials=e,this},r.prototype.redirects=function(e){return this._maxRedirects=e,this},r.prototype.maxResponseSize=function(e){if("number"!=typeof e)throw TypeError("Invalid argument");return this._maxResponseSize=e,this},r.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},r.prototype.send=function(e){var t=i(e),n=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(t&&i(this._data))for(var r in e)this._data[r]=e[r];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+e:e:(this._data||"")+e):this._data=e;return!t||this._isHost(e)||n||this.type("json"),this},r.prototype.sortQuery=function(e){return this._sort=void 0===e||e,this},r.prototype._finalizeQueryString=function(){var e=this._query.join("&");if(e&&(this.url+=(0<=this.url.indexOf("?")?"&":"?")+e),this._query.length=0,this._sort){var t=this.url.indexOf("?");if(0<=t){var n=this.url.substring(t+1).split("&");"function"==typeof this._sort?n.sort(this._sort):n.sort(),this.url=this.url.substring(0,t)+"?"+n.join("&")}}},r.prototype._appendQueryString=function(){console.trace("Unsupported")},r.prototype._timeoutError=function(e,t,n){if(!this._aborted){var r=new Error(e+t+"ms exceeded");r.timeout=t,r.code="ECONNABORTED",r.errno=n,this.timedout=!0,this.abort(),this.callback(r)}},r.prototype._setTimeouts=function(){var e=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){e._timeoutError("Timeout of ",e._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){e._timeoutError("Response timeout of ",e._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},function(e,t,n){"use strict";var i=n(79);function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}(e)}(e.exports=r).prototype.get=function(e){return this.header[e.toLowerCase()]},r.prototype._setHeaderProperties=function(e){var t=e["content-type"]||"";this.type=i.type(t);var n=i.params(t);for(var r in n)this[r]=n[r];this.links={};try{e.link&&(this.links=i.parseLinks(e.link))}catch(e){}},r.prototype._setStatusProperties=function(e){var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.redirect=3==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.created=201==e,this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.forbidden=403==e,this.notFound=404==e,this.unprocessableEntity=422==e}},function(e,t,n){"use strict";t.type=function(e){return e.split(/ *; */).shift()},t.params=function(e){return e.split(/ *; */).reduce(function(e,t){var n=t.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(e[r]=i),e},{})},t.parseLinks=function(e){return e.split(/ *, */).reduce(function(e,t){var n=t.split(/ *; */),r=n[0].slice(1,-1);return e[n[1].split(/ *= */)[1].slice(1,-1)]=r,e},{})},t.cleanHeader=function(e,t){return delete e["content-type"],delete e["content-length"],delete e["transfer-encoding"],delete e.host,t&&(delete e.authorization,delete e.cookie),e}},function(e,t){function n(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(e){n.prototype[e]=function(){return this._defaults.push({fn:e,arguments:arguments}),this}}),n.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,e.arguments)})},e.exports=n}],i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11);function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var n,r});

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {"author":"PubNub","name":"chat-engine","license":"SEE LICENSE IN LICENSE","version":"0.9.21","description":"ChatEngine","browser":"dist/chat-engine.js","main":"src/index.js","react-native":"src/index.js","scripts":{"build":"gulp","deploy":"gulp; npm publish;","docs":"jsdoc src/index.js -c jsdoc.json"},"repository":{"type":"git","url":"git+https://github.com/pubnub/chat-engine.git"},"keywords":["pubnub","chat","sdk","realtime"],"bugs":{"url":"https://github.com/pubnub/chat-engine/issues"},"homepage":"https://github.com/pubnub/chat-engine#readme","devDependencies":{"babel-loader":"^7.1.4","babel-preset-es2015":"^6.24.1","body-parser":"^1.17.2","chai":"^3.5.0","chat-engine-typing-indicator":"0.0.x","decache":"^4.5.0","docdash":"^0.4.0","es6-promise":"^4.1.1","eslint":"^4.7.1","eslint-config-airbnb":"^15.1.0","eslint-plugin-import":"^2.7.0","gulp":"^4.0.0","gulp-clean":"^0.3.2","gulp-eslint":"^4.0.0","gulp-istanbul":"^1.1.2","gulp-jsdoc3":"^1.0.1","gulp-mocha":"^6.0.0","gulp-rename":"^1.2.2","gulp-uglify-es":"^0.1.3","http-server":"^0.10.0","isparta":"^4.1.1","jsdoc":"^3.5.5","mocha":"^5.2.0","proxyquire":"^1.8.0","pubnub-functions-mock":"^0.0.13","request":"^2.82.0","run-sequence":"^2.2.0","sinon":"^4.0.0","stats-webpack-plugin":"^0.6.1","uglifyjs-webpack-plugin":"^1.0.1","webpack":"^3.6.0","webpack-stream":"^4.0.0"},"dependencies":{"async":"2.1.2","axios":"0.16.2","eventemitter2":"2.2.1","pubnub":"^4.20.2"}}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {
      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      this._events.maxListeners = conf.maxListeners !== undefined ? conf.maxListeners : defaultMaxListeners;
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);
      conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    } else {
      this._events.maxListeners = defaultMaxListeners;
    }
  }

  function logPossibleMemoryLeak(count, eventName) {
    var errorMsg = '(node) warning: possible EventEmitter memory ' +
        'leak detected. %d listeners added. ' +
        'Use emitter.setMaxListeners() to increase limit.';

    if(this.verboseMemoryLeak){
      errorMsg += ' Event name: %s.';
      console.error(errorMsg, count, eventName);
    } else {
      console.error(errorMsg, count);
    }

    if (console.trace){
      console.trace();
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    this.verboseMemoryLeak = false;
    configure.call(this, conf);
  }
  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name !== undefined) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else {
          if (typeof tree._listeners === 'function') {
            tree._listeners = [tree._listeners];
          }

          tree._listeners.push(listener);

          if (
            !tree._listeners.warned &&
            this._events.maxListeners > 0 &&
            tree._listeners.length > this._events.maxListeners
          ) {
            tree._listeners.warned = true;
            logPossibleMemoryLeak.call(this, tree._listeners.length, name);
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    if (n !== undefined) {
      this._events || init.call(this);
      this._events.maxListeners = n;
      if (!this._conf) this._conf = {};
      this._conf.maxListeners = n;
    }
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) {
        return false;
      }
    }

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all && this._all.length) {
      handler = this._all.slice();
      if (al > 3) {
        args = new Array(al);
        for (j = 0; j < al; j++) args[j] = arguments[j];
      }

      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this, type);
          break;
        case 2:
          handler[i].call(this, type, arguments[1]);
          break;
        case 3:
          handler[i].call(this, type, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
      if (typeof handler === 'function') {
        this.event = type;
        switch (al) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          handler.apply(this, args);
        }
        return true;
      } else if (handler) {
        // need to make copy of handlers because list can change in the middle
        // of emit call
        handler = handler.slice();
      }
    }

    if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this);
          break;
        case 2:
          handler[i].call(this, arguments[1]);
          break;
        case 3:
          handler[i].call(this, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
      return true;
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }

    return !!this._all;
  };

  EventEmitter.prototype.emitAsync = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
        if (!this._events.newListener) { return Promise.resolve([false]); }
    }

    var promises= [];

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all) {
      if (al > 3) {
        args = new Array(al);
        for (j = 1; j < al; j++) args[j] = arguments[j];
      }
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(this._all[i].call(this, type));
          break;
        case 2:
          promises.push(this._all[i].call(this, type, arguments[1]));
          break;
        case 3:
          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
          break;
        default:
          promises.push(this._all[i].apply(this, args));
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      switch (al) {
      case 1:
        promises.push(handler.call(this));
        break;
      case 2:
        promises.push(handler.call(this, arguments[1]));
        break;
      case 3:
        promises.push(handler.call(this, arguments[1], arguments[2]));
        break;
      default:
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        promises.push(handler.apply(this, args));
      }
    } else if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(handler[i].call(this));
          break;
        case 2:
          promises.push(handler[i].call(this, arguments[1]));
          break;
        case 3:
          promises.push(handler[i].call(this, arguments[1], arguments[2]));
          break;
        default:
          promises.push(handler[i].apply(this, args));
        }
      }
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        return Promise.reject(arguments[1]); // Unhandled 'error' event
      } else {
        return Promise.reject("Uncaught, unspecified 'error' event.");
      }
    }

    return Promise.all(promises);
  };

  EventEmitter.prototype.on = function(type, listener) {
    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if (this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else {
      if (typeof this._events[type] === 'function') {
        // Change to array.
        this._events[type] = [this._events[type]];
      }

      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (
        !this._events[type].warned &&
        this._events.maxListeners > 0 &&
        this._events[type].length > this._events.maxListeners
      ) {
        this._events[type].warned = true;
        logPossibleMemoryLeak.call(this, this._events[type].length, type);
      }
    }

    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if (!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }

        this.emit("removeListener", type, listener);

        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }

        this.emit("removeListener", type, listener);
      }
    }

    function recursivelyGarbageCollect(root) {
      if (root === undefined) {
        return;
      }
      var keys = Object.keys(root);
      for (var i in keys) {
        var key = keys[i];
        var obj = root[key];
        if ((obj instanceof Function) || (typeof obj !== "object") || (obj === null))
          continue;
        if (Object.keys(obj).length > 0) {
          recursivelyGarbageCollect(root[key]);
        }
        if (Object.keys(obj).length === 0) {
          delete root[key];
        }
      }
    }
    recursivelyGarbageCollect(this.listenerTree);

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          this.emit("removeListenerAny", fn);
          return this;
        }
      }
    } else {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++)
        this.emit("removeListenerAny", fns[i]);
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if (this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else if (this._events) {
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if (this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenerCount = function(type) {
    return this.listeners(type).length;
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return EventEmitter;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = EventEmitter;
  }
  else {
    // Browser global.
    window.EventEmitter2 = EventEmitter;
  }
}();


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var waterfall = __webpack_require__(3);
var Emitter = __webpack_require__(1);
var Event = __webpack_require__(70);
var Search = __webpack_require__(71);

var augmentChat = __webpack_require__(98);

/**
 This is the root {@link Chat} class that represents a chat room

 @param {String} [channel=new Date().getTime()] A unique identifier for this chat {@link Chat}. Must be alphanumeric. The channel is the unique name of a {@link Chat}, and is usually something like "The Watercooler", "Support", or "Off Topic". See [PubNub Channels](https://support.pubnub.com/support/solutions/articles/14000045182-what-is-a-channel-).
 @param {Boolean} [isPrivate=false] Attempt to authenticate ourselves before connecting to this {@link Chat}.
 @param {Boolean} [autoConnect=true] Connect to this chat as soon as its initiated. If set to ```false```, call the {@link Chat#connect} method to connect to this {@link Chat}.
 @param {Object} [meta={}] Chat metadata that will be persisted on the server and populated on creation.
 @param {String} [group='default'] Groups chat into a "type". This is the key which chats will be grouped into within {@link Me.session} object.
 @class Chat
 @extends Emitter
 @extends RootEmitter
 @fires Chat#$"."ready
 @fires Chat#$"."state
 @fires Chat#$"."online"."*
 @fires Chat#$"."offline"."*
 */

var Chat = function (_Emitter) {
    _inherits(Chat, _Emitter);

    function Chat(chatEngine) {
        var channel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getTime();
        var isPrivate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var autoConnect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var meta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        var _ret;

        var group = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'custom';

        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, chatEngine));

        _this.chatEngine = chatEngine;

        _this.name = 'Chat';

        _this.plugin(augmentChat(_this));

        /**
        * Classify the chat within some group, Valid options are 'system', 'fixed', or 'custom'.
        * @type Boolean
        * @readonly
        * @private
        */
        _this.group = group;

        /**
        * Excludes all users from reading or writing to the {@link chat} unless they have been explicitly invited via {@link Chat#invite};
        * @type Boolean
        * @readonly
        */
        _this.isPrivate = isPrivate;

        /**
         * Chat metadata persisted on the server. Useful for storing things like the name and description. Call {@link Chat#update} to update the remote information.
         * @type Object
         * @readonly
         */
        _this.meta = meta || {};

        /**
         * A string identifier for the Chat room. Any chat with an identical channel will be able to communicate with one another.
         * @type String
         * @readonly
         * @see [PubNub Channels](https://support.pubnub.com/support/solutions/articles/14000045182-what-is-a-channel-)
         */
        _this.channel = _this.chatEngine.augmentChannel(channel, _this.isPrivate);

        /**
         A list of users in this {@link Chat}. Automatically kept in sync as users join and leave the chat.
         Use [$.join](/Chat.html#event:$%2522.%2522join) and related events to get notified when this changes
          @type Object
         @readonly
         */
        _this.users = {};

        /**
         * Boolean value that indicates of the Chat is connected to the network
         * @type {Boolean}
         */
        _this.connected = false;

        /**
         * Keep a record if we've every successfully connected to this chat before.
         * @type {Boolean}
         */
        _this.hasConnected = false;

        /**
         * If user manually disconnects via {@link ChatEngine#disconnect}, the
         * chat is put to "sleep". If a connection is reestablished
         * via {@link ChatEngine#reconnect}, sleeping chats reconnect automatically.
         * @type {Boolean}
         */
        _this.asleep = false;

        _this.chatEngine.chats[_this.channel] = _this;

        if (autoConnect) {
            _this.connect();
        }

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
     Updates list of {@link User}s in this {@link Chat}
     based on who is online now.
      @private
     @param {Object} status The response status
     @param {Object} response The response payload object
     */


    _createClass(Chat, [{
        key: 'onHereNow',
        value: function onHereNow(status, response) {
            var _this2 = this;

            if (status.error) {

                /**
                 * There was a problem fetching the presence of this chat
                 * @event Chat#$"."error"."presence
                 */
                this.chatEngine.throwError(this, 'trigger', 'presence', new Error('Getting presence of this Chat. Make sure PubNub presence is enabled for this key'));
            } else {

                // get the list of occupants in this channel
                var occupants = response.channels[this.channel].occupants;

                // format the userList for rltm.js standard
                occupants.forEach(function (occupant) {
                    _this2.userUpdate(occupant.uuid, occupant.state);
                });
            }
        }

        /**
        * Turns a {@link Chat} into a JSON representation.
        * @return {Object}
        */

    }, {
        key: 'objectify',
        value: function objectify() {

            return {
                channel: this.channel,
                group: this.group,
                private: this.isPrivate,
                meta: this.meta
            };
        }

        /**
         * Invite a user to this Chat. Authorizes the invited user in the Chat and sends them an invite via {@link User#direct}.
         * @param {User} user The {@link User} to invite to this chatroom.
         * @fires Me#event:$"."invite
         * @example
         * // one user running ChatEngine
         * let secretChat = new ChatEngine.Chat('secret-channel');
         * secretChat.invite(someoneElse);
         *
         * // someoneElse in another instance of ChatEngine
         * me.direct.on('$.invite', (payload) => {
         *     let secretChat = new ChatEngine.Chat(payload.data.channel);
         * });
         */

    }, {
        key: 'invite',
        value: function invite(user) {
            var _this3 = this;

            this.chatEngine.request('post', 'invite', {
                to: user.uuid,
                chat: this.objectify()
            }).then(function () {

                var send = function send() {

                    /**
                     * Notifies {@link Me} that they've been invited to a new private {@link Chat}.
                     * Fired by the {@link Chat#invite} method.
                     * @event Me#$"."invite
                     * @tutorial private
                     * @example
                     * me.direct.on('$.invite', (payload) => {
                     *    let privChat = new ChatEngine.Chat(payload.data.channel));
                     * });
                     */
                    user.direct.emit('$.invite', {
                        channel: _this3.channel
                    });
                };

                if (!user.direct.connected) {
                    user.direct.connect();
                    user.direct.on('$.connected', send);
                } else {
                    send();
                }
            }).catch(function (error) {
                _this3.chatEngine.throwError(_this3, 'trigger', 'search', new Error('Something went wrong while making a request to authentication server.'), { error: error });
            });
        }

        /**
         Keep track of {@link User}s in the room by subscribing to PubNub presence events.
          @private
         @param {Object} data The PubNub presence response for this event
         */

    }, {
        key: 'onPresence',
        value: function onPresence(presenceEvent) {

            // make sure channel matches this channel

            // someone joins channel
            if (presenceEvent.action === 'join') {
                this.userJoin(presenceEvent.uuid, presenceEvent.state);
            }

            // someone leaves channel
            if (presenceEvent.action === 'leave') {
                this.userLeave(presenceEvent.uuid);
            }

            // someone timesout
            if (presenceEvent.action === 'timeout') {
                this.userDisconnect(presenceEvent.uuid);
            }

            // someone's state is updated
            if (presenceEvent.action === 'state-change') {
                this.userUpdate(presenceEvent.uuid, presenceEvent.state);
            }
        }

        /**
         * Update the {@link Chat} metadata on the server.
         * @param  {object} data JSON object representing chat metadta.
         */

    }, {
        key: 'update',
        value: function update(data) {
            var _this4 = this;

            var oldMeta = this.meta || {};
            this.meta = Object.assign(oldMeta, data);

            this.chatEngine.request('post', 'chat', {
                chat: this.objectify()
            }).then(function () {}).catch(function (error) {
                _this4.chatEngine.throwError(_this4, 'trigger', 'chat', new Error('Something went wrong while making a request to chat server.'), { error: error });
            });
        }

        /**
         * Send events to other clients in this {@link User}.
         * Events are trigger over the network  and all events are made
         * on behalf of {@link Me}
         *
         * @param {String} event The event name
         * @param {Object} data The event payload object
         * @example
         * chat.emit('custom-event', {value: true});
         * chat.on('custom-event', (payload) => {
          *     console.log(payload.sender.uuid, 'emitted the value', payload.data.value);
          * });
         */

    }, {
        key: 'emit',
        value: function emit(event, data) {

            if (event === 'message' && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                throw new Error('the payload has to be an object');
            }

            // create a standardized payload object
            var payload = {
                data: data, // the data supplied from params
                sender: this.chatEngine.me.uuid, // my own uuid
                chat: this, // an instance of this chat
                event: event,
                chatengineSDK: this.chatEngine.package.version
            };

            var tracer = new Event(this.chatEngine, this, event);

            // run the plugin queue to modify the event
            this.runPluginQueue('emit', event, function (next) {
                next(null, payload);
            }, function (err, pluginResponse) {

                // remove chat otherwise it would be serialized
                // instead, it's rebuilt on the other end.
                // see this.trigger
                delete pluginResponse.chat;

                // publish the event and data over the configured channel
                tracer.publish(pluginResponse);
            });

            return tracer;
        }

        /**
         Add a user to the {@link Chat}, creating it if it doesn't already exist.
          @private
         @param {String} uuid The user uuid
         @param {Object} state The user initial state
         @param {Boolean} trigger Force a trigger that this user is online
         */

    }, {
        key: 'userJoin',
        value: function userJoin(uuid, state) {

            // Ensure that this user exists in the global list
            // so we can reference it from here out
            this.chatEngine.users[uuid] = this.chatEngine.users[uuid] || new this.chatEngine.User(uuid);
            this.chatEngine.users[uuid].assign(state);

            // check if the user already exists within the chatroom
            // so we know if we need to notify or not
            var userAlreadyHere = this.users[uuid];

            // assign the user to the chatroom
            this.users[uuid] = this.chatEngine.users[uuid];

            // trigger the join event over this chatroom
            if (userAlreadyHere) {

                /**
                 * Broadcast that a {@link User} has come online. This is when
                 * the framework firsts learn of a user. This can be triggered
                 * by, ```$.join```, or other network events that
                 * notify the framework of a new user.
                 *
                 * @event Chat#$"."online"."here
                 * @param {Object} data The payload returned by the event
                 * @param {User} data.user The {@link User} that came online
                 * @example
                 * chat.on('$.online.here', (data) => {
                          *     console.log('User has come online:', data.user);
                          * });
                 */

                this.trigger('$.online.here', { user: this.users[uuid] });
            } else {

                /**
                 * Fired when a {@link User} has joined the room.
                 *
                 * @event Chat#$"."online"."join
                 * @param {Object} data The payload returned by the event
                 * @param {User} data.user The {@link User} that came online
                 * @example
                 * chat.on('$.join', (data) => {
                 *     console.log('User has joined the room!', data.user);
                 * });
                 */

                this.trigger('$.online.join', { user: this.users[uuid] });
            }

            // return the instance of this user
            return this.chatEngine.users[uuid];
        }

        /**
         * Update a user's state.
         * @private
         * @param {String} uuid The {@link User} uuid
         * @param {Object} state State to update for the user
         */

    }, {
        key: 'userUpdate',
        value: function userUpdate(uuid, state) {

            // ensure the user exists within the global space
            this.chatEngine.users[uuid] = this.chatEngine.users[uuid] || new this.chatEngine.User(uuid);

            // if we don't know about this user
            if (!this.users[uuid]) {
                // do the whole join thing
                this.userJoin(uuid, state);
            }

            // update this user's state in this chatroom
            this.users[uuid].assign(state);

            /**
             * Broadcast that a {@link User} has changed state.
             * @event ChatEngine#$"."state
             * @param {Object} data The payload returned by the event
             * @param {User} data.user The {@link User} that changed state
             * @param {Object} data.state The new user state
             * @example
             * ChatEngine.on('$.state', (data) => {
             *     console.log('User has changed state:', data.user, 'new state:', data.state);
             * });
             */
            this.chatEngine._emit('$.state', {
                user: this.users[uuid],
                state: this.users[uuid].state
            });
        }

        /**
         * Called by {@link ChatEngine#disconnect}. Fires disconnection notifications
         * and stores "sleep" state in memory. Sleep means the Chat was previously connected.
         * @private
         */

    }, {
        key: 'sleep',
        value: function sleep() {

            if (this.connected) {
                this.onDisconnected();
                this.asleep = true;
            }
        }

        /**
         * Called by {@link ChatEngine#reconnect}. Wakes the Chat up from sleep state.
         * Re-authenticates with the server, and fires connection events once established.
         * @private
         */

    }, {
        key: 'wake',
        value: function wake() {
            var _this5 = this;

            if (this.asleep) {
                this.handshake(function () {
                    _this5.onConnected();
                });
            }
        }

        /**
         * Fired upon successful connection to the network.
         * @private
         */

    }, {
        key: 'onConnected',
        value: function onConnected() {
            this.connected = true;
            this.trigger('$.connected');
        }

        /**
         * Fires upon disconnection from the network through any means.
         * @private
         */

    }, {
        key: 'onDisconnected',
        value: function onDisconnected() {
            this.connected = false;
            this.trigger('$.disconnected');
        }
        /**
         * Fires upon manually invoked leaving.
         * @private
         */

    }, {
        key: 'onLeave',
        value: function onLeave() {
            this.trigger('$.left');
            this.onDisconnected();
        }
    }, {
        key: 'leaveSystem',
        value: function leaveSystem() {
            var _this6 = this;

            var event = this.emit('$.system.leave', { subject: this.objectify() });
            event.once('$.emitted', function () {
                setTimeout(_this6.chatEngine.request('post', 'leave_channel', { chat: _this6.objectify() }).catch(function (error) {
                    _this6.chatEngine.throwError(_this6, 'trigger', 'chat', new Error('Something went wrong while making a request to chat server.'), { error: error });
                }), 3000);
            });
        }

        /**
         * Leave from the {@link Chat} on behalf of {@link Me}. Disconnects from the {@link Chat} and will stop
         * receiving events.
         * @fires Chat#event:$"."offline"."leave
         * @example
         * chat.leave();
         */

    }, {
        key: 'leave',
        value: function leave() {
            var _this7 = this;

            // unsubscribe from the channel locally
            this.chatEngine.pubnub.unsubscribe({
                channels: [this.channel]
            });
            // tell the server we left
            this.chatEngine.request('post', 'leave', { chat: this.objectify() }).then(function () {

                // trigger the disconnect events and update state
                _this7.onLeave();

                // tell the chat we've left
                _this7.leaveSystem();

                // tell session we've left
                if (_this7.chatEngine.me.session) {
                    _this7.chatEngine.me.session.leave(_this7);
                }
            }).catch(function (error) {
                _this7.chatEngine.throwError(_this7, 'trigger', 'chat', new Error('Something went wrong while making a request to chat server.'), { error: error });
            });
        }

        /**
         Perform updates when a user has left the {@link Chat}.
          @private
         */

    }, {
        key: 'userLeave',
        value: function userLeave(uuid) {

            // store a temporary reference to send with our event
            var user = this.users[uuid];

            // remove the user from the local list of users
            // we don't remove the user from the global list,
            // because they may be online in other channels
            delete this.users[uuid];

            // make sure this event is real, user may have already left
            if (user) {

                // if a user leaves, trigger the event

                /**
                 * Fired when a {@link User} intentionally leaves a {@link Chat}.
                 *
                 * @event Chat#$"."offline"."leave
                 * @param {Object} data The data payload from the event
                 * @param {User} user The {@link User} that has left the room
                 * @example
                 * chat.on('$.offline.leave', (data) => {
                          *     console.log('User left the room manually:', data.user);
                          * });
                 */
                this.trigger('$.offline.leave', { user: user });
            }
        }

        /**
         Fired when a user disconnects from the {@link Chat}
          @private
         @param {String} uuid The uuid of the {@link Chat} that left
         */

    }, {
        key: 'userDisconnect',
        value: function userDisconnect(uuid) {

            var user = this.users[uuid];
            delete this.users[uuid];

            // make sure this event is real, user may have already left
            if (user) {

                /**
                 * Fired specifically when a {@link User} looses network connection
                 * to the {@link Chat} involuntarily.
                 *
                 * @event Chat#$"."offline"."disconnect
                 * @param {Object} data The {@link User} that disconnected
                 * @param {Object} data.user The {@link User} that disconnected
                 * @example
                 * chat.on('$.offline.disconnect', (data) => {
                 *     console.log('User disconnected from the network:', data.user);
                 * });
                 */
                this.trigger('$.offline.disconnect', { user: user });
            }
        }

        /**
         Set the state for {@link Me} within this {@link User}.
         Broadcasts the ```$.state``` event on other clients
          @private
         @param {Object} state The new state {@link Me} will have within this {@link User}
         */

    }, {
        key: 'setState',
        value: function setState(state, callback) {
            this.chatEngine.pubnub.setState({ state: state, channels: [this.chatEngine.global.channel] }, callback);
        }

        /**
         Search through previously emitted events. Parameters act as AND operators. Returns an instance of the emitter based {@link History}. Will
         which will emit all old events unless ```config.event``` is supplied.
         @param {Object} [config] Our configuration for the PubNub history request. See the [PubNub History](https://www.pubnub.com/docs/web-javascript/storage-and-history) docs for more information on these parameters.
         @param {Event} [config.event] The {@link Event} to search for.
         @param {User} [config.sender] The {@link User} who sent the message.
         @param {Number} [config.pages=10] The maximum number of history requests which {@link ChatEngine} will do automatically to fulfill `limit` requirement.
         @param {Number} [config.limit=20] The maximum number of results to return that match search criteria. Search will continue operating until it returns this number of results or it reached the end of history. Limit will be ignored in case if both 'start' and 'end' timetokens has been passed in search configuration.
         @param {Number} [config.count=100] The maximum number of messages which can be fetched with single history request.
         @param {Number} [config.start=0] The timetoken to begin searching between.
         @param {Number} [config.end=0] The timetoken to end searching between.
         @param {Boolean} [config.reverse=false] Search oldest messages first.
         @return {Search}
         @example
        chat.search({
            event: 'my-custom-event',
            sender: ChatEngine.me,
            limit: 20
        }).on('my-custom-event', (event) => {
            console.log('this is an old event!', event);
        }).on('$.search.finish', () => {
            console.log('we have all our results!')
        });
         */

    }, {
        key: 'search',
        value: function search(config) {

            if (this.hasConnected) {
                return new Search(this.chatEngine, this, config);
            } else {
                this.chatEngine.throwError(this, 'trigger', 'search', new Error('You must wait for the $.connected event before calling Chat#search'));
            }
        }

        /**
         * Fired when the chat first connects to network.
         * @private
         */

    }, {
        key: 'connectionReady',
        value: function connectionReady() {
            var _this8 = this;

            this.connected = true;
            this.hasConnected = true;

            /**
             * Broadcast that the {@link Chat} is connected to the network.
             * @event Chat#$"."connected
             * @example
             * chat.on('$.connected', () => {
             *     console.log('chat is ready to go!');
             * });
             */
            this.onConnected();

            if (this.chatEngine.me.session) {
                this.chatEngine.me.session.join(this);
            }

            // add self to list of users
            this.users[this.chatEngine.me.uuid] = this.chatEngine.me;

            // trigger my own online event
            this.trigger('$.online.join', {
                user: this.chatEngine.me
            });

            // global channel updates are triggered manually, only get presence on custom chats
            if (this.channel !== this.chatEngine.global.channel && this.group === 'custom') {

                this.getUserUpdates();

                // we may miss updates, so call this again 5 seconds later
                setTimeout(function () {
                    _this8.getUserUpdates();
                }, 5000);
            }

            this.on('$.system.leave', function (payload) {
                _this8.userLeave(payload.sender.uuid);
            });
        }

        /**
         * Ask PubNub for information about {@link User}s in this {@link Chat}.
         * @private
         */

    }, {
        key: 'getUserUpdates',
        value: function getUserUpdates() {
            var _this9 = this;

            // get a list of users online now
            // ask PubNub for information about connected users in this channel
            this.chatEngine.pubnub.hereNow({
                channels: [this.channel],
                includeUUIDs: true,
                includeState: true
            }, function (s, r) {
                _this9.onHereNow(s, r);
            });
        }

        /**
         * Establish authentication with the server, then subscribe with PubNub.
         * @fires Chat#$"."ready
         * @example
         * // create a new chatroom, but don't connect to it automatically
         * let chat = new Chat('some-chat', false, false);
         *
         * // connect to the chat when we feel like it
         * chat.connect();
         */

    }, {
        key: 'connect',
        value: function connect() {
            var _this10 = this;

            // establish good will with the server
            this.handshake(function () {

                // now that we've got connection, do everything else via connectionReady
                _this10.connectionReady();
            });
        }

        /**
         * Connect to PubNub servers to initialize the chat.
         * @private
         */

    }, {
        key: 'handshake',
        value: function handshake(complete) {
            var _this11 = this;

            waterfall([function (next) {
                if (!_this11.chatEngine.pubnub) {
                    next('You must call ChatEngine.connect() and wait for the $.ready event before creating new Chats.');
                } else {
                    next();
                }
            }, function (next) {

                _this11.chatEngine.request('post', 'grant', { chat: _this11.objectify() }).then(function () {
                    next();
                }).catch(next);
            }, function (next) {

                _this11.chatEngine.request('post', 'join', { chat: _this11.objectify() }).then(function () {
                    next();
                }).catch(next);
            }, function (next) {

                if (_this11.chatEngine.ceConfig.enableMeta) {

                    _this11.chatEngine.request('get', 'chat', {}, { channel: _this11.channel }).then(function (response) {

                        // asign metadata locally
                        if (response.data.found) {
                            _this11.meta = response.data.chat.meta;
                        } else {
                            _this11.update(_this11.meta);
                        }

                        next();
                    }).catch(next);
                } else {
                    next();
                }
            }], function (error) {

                if (error) {
                    _this11.chatEngine.throwError(_this11, 'trigger', 'auth', new Error('Something went wrong while making a request to authentication server.'), { error: error });
                } else {
                    complete();
                }
            });
        }
    }]);

    return Chat;
}(Emitter);

module.exports = Chat;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(17),
    overRest = __webpack_require__(53),
    setToString = __webpack_require__(55);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(54);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(56),
    shortOut = __webpack_require__(68);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(57),
    defineProperty = __webpack_require__(58),
    identity = __webpack_require__(17);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(60),
    getValue = __webpack_require__(67);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(18),
    isMasked = __webpack_require__(64),
    isObject = __webpack_require__(21),
    toSource = __webpack_require__(66);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(65);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (chatEngine) {

    return {
        middleware: {
            on: {
                '*': function _(payload, next) {

                    // if we should try to restore the sender property
                    if (payload.sender && typeof payload.sender === 'string') {

                        // get the user from ChatEngine
                        payload.sender = new chatEngine.User(payload.sender);

                        payload.sender._getStoredState(function () {
                            next(null, payload);
                        });
                    } else {
                        // there's no "sender" in this object, move on
                        next(null, payload);
                    }
                }
            }
        }
    };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emitter = __webpack_require__(1);

/**
 * @class Event
 * Represents an {@link Chat} event.
 * @fires $"."emitted
 * @extends Emitter
 * @extends RootEmitter
 */

var Event = function (_Emitter) {
  _inherits(Event, _Emitter);

  function Event(chatEngine, chat, event) {
    var _ret;

    _classCallCheck(this, Event);

    /**
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, chatEngine));

    _this.chatEngine = chatEngine;

    /**
     * The {@link Chat#channel} that this event is registered to.
     * @type String
     * @see [PubNub Channels](https://support.pubnub.com/support/solutions/articles/14000045182-what-is-a-channel-)
     * @readonly
     */
    _this.channel = chat.channel;

    /**
     * Events are always a property of a {@link Chat}. Responsible for
     * listening to specific events and firing events when they occur.
     * @readonly
     * @type {Chat}
     */
    _this.chat = chat;

    /**
     * The string representation of the event. This is supplied as the first parameter to {@link Chat#on}
     * @type {String}
     */
    _this.event = event;

    /**
     * A name that identifies this class
     * @type {String}
     */
    _this.name = 'Event';

    return _ret = _this, _possibleConstructorReturn(_this, _ret);
  }

  /**
   Publishes the event over the PubNub network to the {@link Event} channel
    @private
   @param {Object} data The event payload object
   */


  _createClass(Event, [{
    key: 'publish',
    value: function publish(m) {
      var _this2 = this;

      m.event = this.event;

      var storeInHistory = true;

      // don't store in history if $.system event
      if (!this.event.indexOf('$.system')) {
        storeInHistory = false;
      }

      this.chatEngine.pubnub.publish({
        message: m,
        channel: this.channel,
        storeInHistory: storeInHistory
      }, function (status, response) {

        if (status.statusCode === 200) {

          if (response) {
            m.timetoken = response.timetoken;
          }

          m.chat = _this2.chat;

          /**
           * Message successfully published
           * @event Event#$"."emitted"
           * @param {Object} data The message payload
           */
          _this2.trigger('$.emitted', m);
        } else {

          /**
           * There was a problem publishing over the PubNub network.
           * @event Chat#$"."error"."publish
           */
          _this2.chatEngine.throwError(_this2, '_emit', 'emitter', new Error('There was a problem publishing over the PubNub network.'), status);
        }
      });
    }
  }]);

  return Event;
}(Emitter);

module.exports = Event;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emitter = __webpack_require__(1);
var eachSeries = __webpack_require__(72);

var eventFilter = __webpack_require__(96);
var senderFilter = __webpack_require__(97);
/**
Returned by {@link Chat#search}. This is our Search class which allows one to search the backlog of messages.
Powered by [PubNub History](https://www.pubnub.com/docs/web-javascript/storage-and-history).
@class Search
@extends Emitter
@extends RootEmitter
@param {ChatEngine} chatEngine This instance of the {@link ChatEngine} object.
@param {Chat} chat The {@link Chat} object to search.
@param {Object} config The configuration object. See {@link Chat#search} for a list of parameters.
*/

var Search = function (_Emitter) {
    _inherits(Search, _Emitter);

    function Search(chatEngine, chat) {
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, chatEngine));

        _this.chatEngine = chatEngine;

        _this.name = 'Search';

        /**
        The {@link Chat} used for searching.
        @type Chat
        */
        _this.chat = chat;

        /**
        An object containing configuration parameters supplied by {@link Chat#search}. See {@link Chat#search} for possible parameters.
        @type {Object}
        */
        _this.config = config;
        _this.config.event = config.event;
        _this.config.limit = config.limit || 20;
        _this.config.channel = _this.chat.channel;
        _this.config.includeTimetoken = true;
        _this.config.stringifiedTimeToken = true;
        _this.config.count = _this.config.count || 100;
        _this.config.pages = _this.config.pages || 10;

        /** @private */
        _this.maxPage = _this.config.pages;
        /** @private */
        _this.numPage = 0;

        /** @private */
        _this.referenceDate = _this.config.end || 0;

        /**
         * Flag which represent whether there is potentially more data available in {@link Chat} history. This flag can
         * be used for conditional call of {@link Chat#search}.
         * @type {boolean}
         */
        _this.hasMore = true;
        /** @private */
        _this.messagesBetweenTimetokens = _this.config.start > '0' && _this.config.end > '0';
        /** @private */
        _this.needleCount = 0;

        /**
         * Call PubNub history in a loop.
         * @private
         */
        _this.page = function (pageDone) {
            var searchConfiguration = Object.assign({}, _this.config, { start: _this.referenceDate });
            delete searchConfiguration.reverse;
            delete searchConfiguration.end;

            /**
             * Requesting another page from PubNub History.
             * @event Search#$"."page"."request
             */
            _this._emit('$.search.page.request');

            _this.chatEngine.pubnub.history(searchConfiguration, function (status, response) {

                /**
                 * PubNub History returned a response.
                 * @event Search#$"."page"."response
                 */
                _this._emit('$.search.page.response');

                if (status.error) {

                    /**
                     * There was a problem fetching the history of this chat
                     * @event Chat#$"."error"."history
                     */
                    _this.chatEngine.throwError(_this, 'trigger', 'search', new Error('There was a problem searching history. Make sure your request parameters are valid and history is enabled for this PubNub key.'), status);
                } else {
                    var startDate = response.startTimeToken;
                    _this.referenceDate = response.startTimeToken;
                    _this.hasMore = response.messages.length === _this.config.count && startDate !== '0';

                    response.messages.sort(function (left, right) {
                        return left.timetoken < right.timetoken ? -1 : 1;
                    });

                    if (_this.config.start && startDate < _this.config.start) {
                        _this.hasMore = false;
                        response.messages = response.messages.filter(function (event) {
                            return event.timetoken >= _this.config.start;
                        });
                    }

                    pageDone(response);
                }
            });
        };

        /**
         * @private
         */
        _this.triggerHistory = function (message, cb) {

            if (_this.needleCount < _this.config.limit || _this.messagesBetweenTimetokens) {

                message.entry.timetoken = message.timetoken;

                _this.trigger(message.entry.event, message.entry, function (reject) {

                    if (!reject) {
                        _this.needleCount += 1;
                    }

                    cb();
                });
            } else {
                cb();
            }
        };

        /**
         * Continue searching the next batch of pages.
         * @see $.search.pause
         */
        _this.next = function () {

            if (_this.hasMore) {

                _this.maxPage = _this.maxPage + _this.config.pages;
                _this.find();
            } else {

                /**
                 * Search has returned all results or reached the end of history.
                 * @event Search#$."search"."finish"
                 */
                _this._emit('$.search.finish');
            }
        };

        /**
         * @private
         */
        _this.find = function () {
            _this.page(function (response) {
                response.messages.reverse();
                _this.numPage += 1;

                eachSeries(response.messages, _this.triggerHistory, function () {

                    if (_this.hasMore && _this.numPage === _this.maxPage) {

                        /**
                         * PubNub History has reached the maximum allocated pages and requires user input to continue.
                         * @see Search#next
                         * @event Search#$"."search"."pause"
                         */
                        _this._emit('$.search.pause');
                    } else if (_this.hasMore && (_this.needleCount < _this.config.limit || _this.messagesBetweenTimetokens)) {
                        _this.find();
                    } else {

                        if (_this.needleCount >= _this.config.limit && !_this.messagesBetweenTimetokens) {
                            _this.hasMore = false;
                        }

                        /**
                         * Search has returned all results or reached the end of history.
                         * @event Search#$"."search"."finish
                         */
                        _this._emit('$.search.finish');
                    }
                });
            });

            return _this;
        };

        if (_this.config.event) {
            _this.plugins.unshift(eventFilter(_this.config.event));
        }

        if (_this.config.sender) {
            _this.plugins.unshift(senderFilter(_this.config.sender));
        }

        /**
         * Search has started.
         * @event Search#$"."search"."start
         */
        _this._emit('$.search.start');
        _this.find();
        return _this;
    }

    return Search;
}(Emitter);

module.exports = Search;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eachLimit = __webpack_require__(73);

var _eachLimit2 = _interopRequireDefault(_eachLimit);

var _doLimit = __webpack_require__(95);

var _doLimit2 = _interopRequireDefault(_doLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A function to apply to each
 * item in `coll`. The iteratee is passed a `callback(err)` which must be called
 * once it has completed. If no error has occurred, the `callback` should be run
 * without arguments or with an explicit `null` argument. The array index is
 * not passed to the iteratee. Invoked with (item, callback). If you need the
 * index, use `eachOfSeries`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
exports.default = (0, _doLimit2.default)(_eachLimit2.default, 1);
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachLimit;

var _eachOfLimit = __webpack_require__(74);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _withoutIndex = __webpack_require__(94);

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A function to apply to each item in `coll`. The
 * iteratee is passed a `callback(err)` which must be called once it has
 * completed. If no error has occurred, the `callback` should be run without
 * arguments or with an explicit `null` argument. The array index is not passed
 * to the iteratee. Invoked with (item, callback). If you need the index, use
 * `eachOfLimit`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit2.default)(limit)(coll, (0, _withoutIndex2.default)(iteratee), callback);
}
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _eachOfLimit;

var _noop = __webpack_require__(15);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(16);

var _once2 = _interopRequireDefault(_once);

var _iterator = __webpack_require__(75);

var _iterator2 = _interopRequireDefault(_iterator);

var _onlyOnce = __webpack_require__(22);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _breakLoop = __webpack_require__(93);

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = (0, _once2.default)(callback || _noop2.default);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = (0, _iterator2.default)(obj);
        var done = false;
        var running = 0;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            } else if (value === _breakLoop2.default || done && running <= 0) {
                done = true;
                return callback(null);
            } else {
                replenish();
            }
        }

        function replenish() {
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
            }
        }

        replenish();
    };
}
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iterator;

var _isArrayLike = __webpack_require__(23);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _getIterator = __webpack_require__(76);

var _getIterator2 = _interopRequireDefault(_getIterator);

var _keys = __webpack_require__(77);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? { value: coll[i], key: i } : null;
    };
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done) return null;
        i++;
        return { value: item.value, key: i };
    };
}

function createObjectIterator(obj) {
    var okeys = (0, _keys2.default)(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? { value: obj[key], key: key } : null;
    };
}

function iterator(coll) {
    if ((0, _isArrayLike2.default)(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = (0, _getIterator2.default)(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(78),
    baseKeys = __webpack_require__(89),
    isArrayLike = __webpack_require__(23);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(79),
    isArguments = __webpack_require__(80),
    isArray = __webpack_require__(14),
    isBuffer = __webpack_require__(82),
    isIndex = __webpack_require__(84),
    isTypedArray = __webpack_require__(85);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(81),
    isObjectLike = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(4),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(83);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(86),
    baseUnary = __webpack_require__(87),
    nodeUtil = __webpack_require__(88);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(4),
    isLength = __webpack_require__(24),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(20);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(90),
    nativeKeys = __webpack_require__(91);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(92);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _withoutIndex;
function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}
module.exports = exports["default"];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doLimit;
function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}
module.exports = exports["default"];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (event) {
    return {
        middleware: {
            on: {
                '*': function _(payload, next) {

                    var matches = payload && payload.event && payload.event === event;

                    next(!matches, payload);
                }
            }
        }
    };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (user) {
    return {
        middleware: {
            on: {
                '*': function _(payload, next) {
                    var matches = payload && payload.sender && payload.sender.uuid === user.uuid;
                    next(!matches, payload);
                }
            }
        }
    };
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (chat) {

    return {
        middleware: {
            on: {
                '*': function _(payload, next) {

                    // restore chat in payload
                    if (!payload.chat) {
                        payload.chat = chat;
                    }

                    next(null, payload);
                }
            }
        }
    };
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = __webpack_require__(26);
var Session = __webpack_require__(100);
/**
 Represents the client connection as a special {@link User} with write permissions.
 Has the ability to update it's state on the network. An instance of
 {@link Me} is returned by the ```ChatEngine.connect()```
 method.

 @class Me
 @extends User
 @extends Emitter
 @extends RootEmitter
 @param {String} uuid The uuid of this user
 */

var Me = function (_User) {
    _inherits(Me, _User);

    function Me(chatEngine, uuid) {
        var _ret;

        _classCallCheck(this, Me);

        var _this = _possibleConstructorReturn(this, (Me.__proto__ || Object.getPrototypeOf(Me)).call(this, chatEngine, uuid));

        // call the User constructor


        _this.chatEngine = chatEngine;

        /**
         * Link sessions between multiple identical instances of ChatEngine. Returns {@link Session} when ```enableSync: true``` supplied to ```ChatEngine.create()```..
         * @see Session
         * @type {Boolean}
         */
        _this.session = false;

        _this.name = 'Me';

        if (_this.chatEngine.ceConfig.enableSync) {
            _this.session = new Session(chatEngine);
        }

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Update {@link Me}'s state in a {@link Chat}. All other {@link User}s
     * will be notified of this change via ```$.state```.
     * Retrieve state at any time with {@link User#state}.
     * @param {Object} state The new state for {@link Me}
     * @param {Chat} chat An instance of the {@link Chat} where state will be updated.
     * Defaults to ```ChatEngine.global```.
     * @fires Chat#event:$"."state
     * @example
     * // update state
     * me.update({value: true});
     */


    _createClass(Me, [{
        key: 'update',
        value: function update(state) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


            // assign state values locally before broadcasting them over the network
            this.assign(state);

            // publish the update over the global channel
            this.chatEngine.global.setState(state, callback);
        }

        /**
         * assign updates from network
         * @private
         */

    }, {
        key: 'assign',
        value: function assign(state) {

            // run the root update function
            _get(Me.prototype.__proto__ || Object.getPrototypeOf(Me.prototype), 'assign', this).call(this, state);
        }
    }]);

    return Me;
}(User);

module.exports = Me;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emitter = __webpack_require__(1);

/**
Automatically created by supplying ```enableSync: true``` in ```ChatEngineCore.create```.
Access via {@link Me#session}.

Used to synchronize ChatEngine sessions between desktop and mobile, duplicate windows, etc.
Sessions are the same when identical instance of {@link ChatEngine} and {@link Me} connects to ChatEngine.
Should not be created directly.
@class Session
@extends Emitter
@extends RootEmitter
*/

var Session = function (_Emitter) {
    _inherits(Session, _Emitter);

    function Session(chatEngine) {
        _classCallCheck(this, Session);

        var _this = _possibleConstructorReturn(this, (Session.__proto__ || Object.getPrototypeOf(Session)).call(this, chatEngine));

        _this.name = 'Session';

        _this.chatEngine = chatEngine;

        /**
         * Stores a map of {@link Chat} objects that this {@link Me} has joined across all clients.
         * @type {Object}
         */
        _this.chats = {};

        /**
         * The {@link Chat} that syncs session between instances.
         * @type {this}
         */
        _this.sync = null;

        return _this;
    }

    /**
     * Forwards sync events from other instances into callback functions
     * @private
     */


    _createClass(Session, [{
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            this.sync = new this.chatEngine.Chat([this.chatEngine.global.channel, 'user', this.chatEngine.me.uuid, 'me.', 'sync'].join('#'), false, this.chatEngine.ceConfig.enableSync, {}, 'system');

            // subscribe to the events on our sync chat and forward them
            this.sync.on('$.session.notify.chat.join', function (payload) {
                _this2.onJoin(payload.data.subject);
            });

            this.sync.on('$.session.notify.chat.leave', function (payload) {
                _this2.onleave(payload.data.subject);
            });
        }

        /**
         * Uses PubNub channel groups to restore a session for this uuid
         * @private
         */

    }, {
        key: 'restore',
        value: function restore() {
            var _this3 = this;

            // these are custom groups that separate custom chats from system chats
            // for better fitlering
            var groups = ['custom', 'system'];

            // loop through the groups
            groups.forEach(function (group) {

                // generate the channel group string for PubNub using the current uuid
                var channelGroup = [_this3.chatEngine.ceConfig.globalChannel, _this3.chatEngine.me.uuid, group].join('#');

                // ask pubnub for a list of channels for this group
                _this3.chatEngine.pubnub.channelGroups.listChannels({
                    channelGroup: channelGroup
                }, function (status, response) {

                    if (status.error) {
                        _this3.chatEngine.throwError(_this3.chatEngine, '_emit', 'sync', new Error('There was a problem restoring your session from PubNub servers.'), { status: status });
                    } else {

                        // loop through the returned channels
                        response.channels.forEach(function (channel) {

                            // call the same callback as if we were notified about them
                            _this3.onJoin({
                                channel: channel,
                                private: _this3.chatEngine.parseChannel(channel).private,
                                group: group
                            });

                            /**
                            Fired when session has been restored at boot. Fired once per
                            session group.
                            @event Me#$"."session"."group"."restored
                            */
                            _this3.trigger('$.group.restored', { group: group });
                        });
                    }
                });
            });
        }

        /**
         * Callback fired when another instance has joined a chat
         * @private
         */

    }, {
        key: 'join',
        value: function join(chat) {

            // don't rebroadcast chats in session we've already heard about
            if (!this.chats[chat.group] || !this.chats[chat.group][chat.channel]) {
                this.sync.emit('$.session.notify.chat.join', { subject: chat.objectify() });
            }
        }

        /**
         * Callback fired when another instance has left a chat
         * @private
         */

    }, {
        key: 'leave',
        value: function leave(chat) {
            this.sync.emit('$.session.notify.chat.leave', { subject: chat.objectify() });
        }

        /**
        Stores {@link Chat} within ```ChatEngine.session``` keyed based on the ```chat.group``` property.
        @param {Object} chat JSON object representing {@link Chat}. Originally supplied via {@link Chat#objectify}.
        @private
        */

    }, {
        key: 'onJoin',
        value: function onJoin(chat) {

            // create the chat group if it doesn't exist
            this.chats[chat.group] = this.chats[chat.group] || {};

            // check the chat exists within the global list but is not grouped
            var existingChat = this.chatEngine.chats[chat.channel];

            // if it exists
            if (existingChat) {

                // assign it to the group
                this.chats[chat.group][chat.channel] = existingChat;
            } else {

                // otherwise, try to recreate it with the server information
                this.chats[chat.group][chat.channel] = new this.chatEngine.Chat(chat.channel, chat.private, false, chat.meta, chat.group);

                /**
                Fired when another identical instance of {@link ChatEngine} and {@link Me} joins a {@link Chat} that this instance of {@link ChatEngine} is unaware of.
                Used to synchronize ChatEngine sessions between desktop and mobile, duplicate windows, etc.
                ChatEngine stores sessions on the server side identified by {@link User#uuid}.
                @event Me#$"."session"."chat"."join
                @example
                *
                * // Logged in as "Ian" in first window
                * ChatEngine.me.session.on('$.chat.join', (data) => {
                *     console.log('I joined a new chat in a second window!', data.chat);
                * });
                *
                * // Logged in as "Ian" in second window
                * new ChatEngine.Chat('another-chat');
                */
                this.trigger('$.chat.join', { chat: this.chats[chat.group][chat.channel] });
            }
        }

        /**
        Removes {@link Chat} within this.chats
        @private
        */

    }, {
        key: 'onleave',
        value: function onleave(chat) {

            if (this.chats[chat.group] && this.chats[chat.group][chat.channel]) {

                chat = this.chats[chat.group][chat.channel] || chat;

                /**
                * Fired when another identical instance of {@link ChatEngine} with an identical {@link Me} leaves a {@link Chat} via {@link Chat#leave}.
                * @event Me#$"."session"."chat"."leave
                */

                delete this.chatEngine.chats[chat.channel];
                delete this.chats[chat.group][chat.channel];
            }

            this.trigger('$.chat.leave', { chat: chat });
        }
    }]);

    return Session;
}(Emitter);

module.exports = Session;

/***/ })
/******/ ]);
});