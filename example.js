(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // node_modules/occam-pearce-kelly/lib/edge.js
  var require_edge = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Edge2 = function() {
      function Edge3(sourceVertexName, targetVertexName) {
        _classCallCheck(this, Edge3);
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
      }
      _createClass(Edge3, [
        {
          key: "getSourceVertexName",
          value: function getSourceVertexName() {
            return this.sourceVertexName;
          }
        },
        {
          key: "getTargetVertexName",
          value: function getTargetVertexName() {
            return this.targetVertexName;
          }
        },
        {
          key: "match",
          value: function match(edge) {
            var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), matches = this.sourceVertexName === sourceVertexName && this.targetVertexName === targetVertexName;
            return matches;
          }
        },
        {
          key: "matchVertexName",
          value: function matchVertexName(vertexName) {
            var matches = this.sourceVertexName === vertexName || this.targetVertexName === vertexName;
            return matches;
          }
        },
        {
          key: "matchSourceVertexName",
          value: function matchSourceVertexName(sourceVertexName) {
            var matches = this.sourceVertexName === sourceVertexName;
            return matches;
          }
        },
        {
          key: "matchTargetVertexName",
          value: function matchTargetVertexName(targetVertexName) {
            var matches = this.targetVertexName === targetVertexName;
            return matches;
          }
        },
        {
          key: "matchVertexNames",
          value: function matchVertexNames(sourceVertexName, targetVertexName) {
            var matches = this.sourceVertexName === sourceVertexName && this.targetVertexName === targetVertexName;
            return matches;
          }
        }
      ], [
        {
          key: "fromSourceVertexNameAndTargetVertexName",
          value: function fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
            var edge = new Edge3(sourceVertexName, targetVertexName);
            return edge;
          }
        }
      ]);
      return Edge3;
    }();
    exports.default = Edge2;
  });

  // node_modules/necessary/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BACKSPACE_CHARACTER = exports.ETX_CHARACTER = exports.DATA_EVENT = exports.CONTENT_TYPE = exports.DEFAULT_LOG_FILE_BASE_NAME = exports.TRACE = exports.POST = exports.CARRIAGE_RETURN_CHARACTER = exports.DEFAULT_ENCODING = exports.ERROR = exports.ACCEPT = exports.DEBUG = exports.DEFAULT_RC_BASE_EXTENSION = exports.DEFAULT_ATTEMPTS = exports.CTRL_C = exports.FATAL = exports.DEFAULT_INITIAL_ANSWER = exports.WARNING = exports.APPLICATION_JSON = exports.INFO = exports.GET = exports.LINE_FEED_CHARACTER = exports.DEFAULT_LOG_LEVEL = exports.DEFAULT_LOG_DIRECTORY_PATH = exports.UTF8_ENCODING = void 0;
    var TRACE = "TRACE";
    exports.TRACE = TRACE;
    var DEBUG = "DEBUG";
    exports.DEBUG = DEBUG;
    var INFO = "INFO";
    exports.INFO = INFO;
    var WARNING = "WARNING";
    exports.WARNING = WARNING;
    var ERROR = "ERROR";
    exports.ERROR = ERROR;
    var FATAL = "FATAL";
    exports.FATAL = FATAL;
    var DEFAULT_LOG_LEVEL = WARNING;
    exports.DEFAULT_LOG_LEVEL = DEFAULT_LOG_LEVEL;
    var DEFAULT_LOG_DIRECTORY_PATH = null;
    exports.DEFAULT_LOG_DIRECTORY_PATH = DEFAULT_LOG_DIRECTORY_PATH;
    var DEFAULT_LOG_FILE_BASE_NAME = "default";
    exports.DEFAULT_LOG_FILE_BASE_NAME = DEFAULT_LOG_FILE_BASE_NAME;
    var GET = "GET";
    exports.GET = GET;
    var POST = "POST";
    exports.POST = POST;
    var ACCEPT = "accept";
    exports.ACCEPT = ACCEPT;
    var CONTENT_TYPE = "content-type";
    exports.CONTENT_TYPE = CONTENT_TYPE;
    var APPLICATION_JSON = "application/json";
    exports.APPLICATION_JSON = APPLICATION_JSON;
    var CTRL_C = "^C";
    exports.CTRL_C = CTRL_C;
    var DATA_EVENT = "data";
    exports.DATA_EVENT = DATA_EVENT;
    var UTF8_ENCODING = "utf8";
    exports.UTF8_ENCODING = UTF8_ENCODING;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var DEFAULT_ATTEMPTS = 3;
    exports.DEFAULT_ATTEMPTS = DEFAULT_ATTEMPTS;
    var DEFAULT_ENCODING = UTF8_ENCODING;
    exports.DEFAULT_ENCODING = DEFAULT_ENCODING;
    var LINE_FEED_CHARACTER = "\n";
    exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var DEFAULT_INITIAL_ANSWER = "";
    exports.DEFAULT_INITIAL_ANSWER = DEFAULT_INITIAL_ANSWER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
    var DEFAULT_RC_BASE_EXTENSION = "";
    exports.DEFAULT_RC_BASE_EXTENSION = DEFAULT_RC_BASE_EXTENSION;
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.post = post;
    exports.request = request;
    exports.default = void 0;
    var _constants = require_constants();
    function get(host, uri, parameters, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _constants.GET, body = null;
      guaranteeAccept(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function post(host, uri, parameters, body, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _constants.POST;
      guaranteeAccept(headers);
      guaranteeContentType(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function request(host, uri, parameters, method, body, headers, callback) {
      var url = urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _constants.APPLICATION_JSON) {
        var json = body, jsonString = JSON.stringify(json);
        body = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
        if (readyState == 4) {
          var body1 = responseText;
          if (accept === _constants.APPLICATION_JSON) {
            try {
              var jsonString2 = body1, json2 = JSON.parse(jsonString2);
              body1 = json2;
            } catch (error) {
              body1 = null;
            }
            callback(body1, status);
          }
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
      }
      body !== null ? xmlHttpRequest.send(body) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function guarantee(headers, name, value) {
      var propertyNames = Object.getOwnPropertyNames(headers), names = propertyNames.map(function(propertyName) {
        var lowerCasePropertyName = propertyName.toLowerCase(), name1 = lowerCasePropertyName;
        return name1;
      }), namesIncludesName = names.includes(name);
      if (!namesIncludesName) {
        headers[name] = value;
      }
    }
    function guaranteeAccept(headers) {
      var name = _constants.ACCEPT, value = _constants.APPLICATION_JSON;
      guarantee(headers, name, value);
    }
    function guaranteeContentType(headers) {
      var name = _constants.CONTENT_TYPE, value = _constants.APPLICATION_JSON;
      guarantee(headers, name, value);
    }
    function queryStringFromParameters(parameters) {
      var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? "&" : "";
        queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString1;
      }, "");
      return queryString;
    }
    function urlFromHostURIAndParameters(host, uri, parameters) {
      var queryString = queryStringFromParameters(parameters), url = queryString === "" ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first2;
    exports.second = second2;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    exports.fifthLast = fifthLast;
    exports.fourthLast = fourthLast;
    exports.thirdLast = thirdLast;
    exports.secondLast = secondLast;
    exports.last = last;
    exports.head = head;
    exports.tail = tail;
    exports.push = push;
    exports.unshift = unshift;
    exports.concat = concat;
    exports.clear = clear;
    exports.copy = copy;
    exports.merge = merge;
    exports.splice = splice;
    exports.replace = replace;
    exports.filter = filter;
    exports.find = find;
    exports.prune = prune;
    exports.patch = patch;
    exports.augment = augment;
    exports.separate = separate;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    exports.forwardsEvery = forwardsEvery;
    exports.backwardsEvery = backwardsEvery;
    exports.forwardsReduce = forwardsReduce;
    exports.backwardsReduce = backwardsReduce;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function first2(array) {
      return array[0];
    }
    function second2(array) {
      return array[1];
    }
    function third(array) {
      return array[2];
    }
    function fourth(array) {
      return array[3];
    }
    function fifth(array) {
      return array[4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function last(array) {
      return array[array.length - 1];
    }
    function head(array) {
      return array.slice(0, 1);
    }
    function tail(array) {
      return array.slice(1);
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
    function concat(array1, elementOrArray2) {
      var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(array1, array2);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(array1, array2) {
      var start = 0, deleteCount = array2.length;
      splice(array1, start, deleteCount, array2);
    }
    function merge(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function splice(array1, start, param, param1) {
      var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
      var args = [
        start,
        deleteCount
      ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element, test) {
      var start;
      var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element);
      }
      return found;
    }
    function filter(array, test) {
      var filteredElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first2(deletedElements);
          filteredElements.unshift(firstDeletedElement);
        }
      });
      return filteredElements;
    }
    function find(array, test) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function prune(array, test) {
      var prunedElement = void 0;
      array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first2(deletedElements);
          prunedElement = firstDeletedElement;
          return true;
        }
      });
      return prunedElement;
    }
    function patch(array, element, test) {
      var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element);
      }
      return found;
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
    function separate(array, array1, array2, test) {
      array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
      });
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function forwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        callback(element, index);
      }
    }
    var _default = {
      first: first2,
      second: second2,
      third,
      fourth,
      fifth,
      fifthLast,
      fourthLast,
      thirdLast,
      secondLast,
      last,
      head,
      tail,
      push,
      unshift,
      concat,
      clear,
      copy,
      merge,
      splice,
      replace,
      filter,
      find,
      prune,
      patch,
      augment,
      separate,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPathName = isPathName;
    exports.isPathTopmostName = isPathTopmostName;
    exports.isPathRelativePath = isPathRelativePath;
    exports.isPathAbsolutePath = isPathAbsolutePath;
    exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
    exports.combinePaths = combinePaths;
    exports.concatenatePaths = concatenatePaths;
    exports.bottommostNameFromPath = bottommostNameFromPath;
    exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
    exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
    exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
    exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
    exports.default = void 0;
    var _array = require_array();
    function isPathName(path) {
      path = path.replace(/^\//, "").replace(/\/$/, "");
      var pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      var pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      var pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      var combinedPath = null;
      var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      var lastPathName, firstRelativePathName = _array.first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = _array.first(relativePathNames);
      lastPathName = _array.last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = _array.first(relativePathNames);
        lastPathName = _array.last(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, "");
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = _array.second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        pathWithoutTopmostDirectoryName = secondMatch;
      }
      return pathWithoutTopmostDirectoryName;
    }
    var _default = {
      isPathName,
      isPathTopmostName,
      isPathRelativePath,
      isPathAbsolutePath,
      isTopmostNameInAbsolutePath,
      combinePaths,
      concatenatePaths,
      bottommostNameFromPath,
      topmostDirectoryPathFromPath,
      topmostDirectoryNameFromPath,
      pathWithoutBottommostNameFromPath,
      pathWithoutTopmostDirectoryNameFromPath
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.whilst = whilst;
    exports.forEach = forEach;
    exports.sequence = sequence;
    exports.eventually = eventually;
    exports.repeatedly = repeatedly;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function whilst(callback, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = callback(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(callbacks, done, context) {
      var length = callbacks.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, callback = callbacks[index];
          callback(next, done, context, index);
        }
      }
      next();
    }
    function eventually(callbacks, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = callbacks.length;
      var count = 0;
      callbacks.forEach(function(callback, index) {
        callback(next, done, context, index);
      });
    }
    function repeatedly(callback, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        callback(next, done, context, index);
      }
    }
    function forwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    var _default = {
      whilst,
      forEach,
      sequence,
      eventually,
      repeatedly,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _ajax = _interopRequireDefault(require_ajax());
    var _path = _interopRequireDefault(require_path());
    var _array = _interopRequireDefault(require_array());
    var _asynchronous = _interopRequireDefault(require_asynchronous());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
      }
    });
    Object.defineProperty(exports, "arrayUtilities", {
      enumerable: true,
      get: function() {
        return _array.default;
      }
    });
    Object.defineProperty(exports, "asynchronousUtilities", {
      enumerable: true,
      get: function() {
        return _asynchronous.default;
      }
    });
  });

  // node_modules/occam-pearce-kelly/lib/utilities/vertex.js
  var require_vertex = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.vertexNamesFromVertices = vertexNamesFromVertices;
    exports.orderVertices = orderVertices;
    function vertexNamesFromVertices(vertices) {
      var vertexNames = vertices.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
      });
      return vertexNames;
    }
    function orderVertices(vertices) {
      vertices.sort(function(firstVertex, secondVertex) {
        var firstVertexIndex = firstVertex.getIndex(), secondVertexIndex = secondVertex.getIndex();
        if (false) {
        } else if (firstVertexIndex < secondVertexIndex) {
          return -1;
        } else if (firstVertexIndex > secondVertexIndex) {
          return 1;
        }
      });
      var orderedVertices = vertices;
      return orderedVertices;
    }
  });

  // node_modules/occam-pearce-kelly/lib/vertex.js
  var require_vertex2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _vertex = require_vertex();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Vertex = function() {
      function Vertex2(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices) {
        _classCallCheck(this, Vertex2);
        this.name = name;
        this.index = index;
        this.visited = visited;
        this.immediatePredecessorVertices = immediatePredecessorVertices;
        this.immediateSuccessorVertices = immediateSuccessorVertices;
      }
      _createClass(Vertex2, [
        {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        },
        {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        },
        {
          key: "isVisited",
          value: function isVisited() {
            return this.visited;
          }
        },
        {
          key: "isStranded",
          value: function isStranded() {
            var immediatePredecessorVerticesLength = this.immediatePredecessorVertices.length, immediateSuccessorVerticesLength = this.immediateSuccessorVertices.length, stranded = immediatePredecessorVerticesLength === 0 && immediateSuccessorVerticesLength === 0;
            return stranded;
          }
        },
        {
          key: "getImmediatePredecessorVertexNames",
          value: function getImmediatePredecessorVertexNames() {
            var immediatePredecessorVertexNames = this.immediatePredecessorVertices.map(function(immediatePredecessorVertex) {
              var immediatePredecessorVertexName = immediatePredecessorVertex.getName();
              return immediatePredecessorVertexName;
            });
            return immediatePredecessorVertexNames;
          }
        },
        {
          key: "getImmediateSuccessorVertexNames",
          value: function getImmediateSuccessorVertexNames() {
            var immediateSuccessorVertexNames = this.immediateSuccessorVertices.map(function(immediateSuccessorVertex) {
              var immediateSuccessorVertexName = immediateSuccessorVertex.getName();
              return immediateSuccessorVertexName;
            });
            return immediateSuccessorVertexNames;
          }
        },
        {
          key: "getImmediatePredecessorVertices",
          value: function getImmediatePredecessorVertices() {
            return this.immediatePredecessorVertices;
          }
        },
        {
          key: "getImmediateSuccessorVertices",
          value: function getImmediateSuccessorVertices() {
            return this.immediateSuccessorVertices;
          }
        },
        {
          key: "getPredecessorVertexMap",
          value: function getPredecessorVertexMap(param) {
            var predecessorVertexMap = param === void 0 ? {} : param;
            this.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
              var predecessorVertex = immediatePredecessorVertex, predecessorVertexName = predecessorVertex.getName();
              predecessorVertexMap[predecessorVertexName] = predecessorVertex;
              predecessorVertex.getPredecessorVertexMap(predecessorVertexMap);
            });
            return predecessorVertexMap;
          }
        },
        {
          key: "getSuccessorVertexMap",
          value: function getSuccessorVertexMap(param) {
            var successorVertexMap = param === void 0 ? {} : param;
            this.forEachImmediateSuccessorVertex(function(immediateSuccessorVertex) {
              var successorVertex = immediateSuccessorVertex, successorVertexName = successorVertex.getName();
              successorVertexMap[successorVertexName] = successorVertex;
              successorVertex.getSuccessorVertexMap(successorVertexMap);
            });
            return successorVertexMap;
          }
        },
        {
          key: "getPredecessorVertexNames",
          value: function getPredecessorVertexNames() {
            var predecessorVertices = this.getPredecessorVertices(), predecessorVertexNames = predecessorVertices.map(function(predecessorVertex) {
              var predecessorVertexName = predecessorVertex.getName();
              return predecessorVertexName;
            });
            return predecessorVertexNames;
          }
        },
        {
          key: "getSuccessorVertexNames",
          value: function getSuccessorVertexNames() {
            var successorVertices = this.getSuccessorVertices(), successorVertexNames = successorVertices.map(function(successorVertex) {
              var successorVertexName = successorVertex.getName();
              return successorVertexName;
            });
            return successorVertexNames;
          }
        },
        {
          key: "getPredecessorVertices",
          value: function getPredecessorVertices() {
            var predecessorVertexMap = this.getPredecessorVertexMap(), predecessorVertexNames = Object.keys(predecessorVertexMap), predecessorVertices = predecessorVertexNames.map(function(predecessorVertexName) {
              var predecessorVertex = predecessorVertexMap[predecessorVertexName];
              return predecessorVertex;
            });
            return predecessorVertices;
          }
        },
        {
          key: "getSuccessorVertices",
          value: function getSuccessorVertices() {
            var successorVertexMap = this.getSuccessorVertexMap(), successorVertexNames = Object.keys(successorVertexMap), successorVertices = successorVertexNames.map(function(successorVertexName) {
              var successorVertex = successorVertexMap[successorVertexName];
              return successorVertex;
            });
            return successorVertices;
          }
        },
        {
          key: "getOrderedPredecessorVertexNames",
          value: function getOrderedPredecessorVertexNames() {
            var predecessorVertices = this.getPredecessorVertices();
            _vertex.orderVertices(predecessorVertices);
            var orderedPredecessorVertices = predecessorVertices, orderedPredecessorVertexNames = _vertex.vertexNamesFromVertices(orderedPredecessorVertices);
            return orderedPredecessorVertexNames;
          }
        },
        {
          key: "retrieveForwardsAffectedVertices",
          value: function retrieveForwardsAffectedVertices(sourceVertex) {
            var forwardsAffectedVertices = this.forwardsDepthFirstSearch(function(visitedVertex) {
              var terminate = visitedVertex === sourceVertex;
              if (terminate) {
                return true;
              }
            });
            return forwardsAffectedVertices;
          }
        },
        {
          key: "retrieveBackwardsAffectedVertices",
          value: function retrieveBackwardsAffectedVertices() {
            var backwardsAffectedVertices = this.backwardsDepthFirstSearch(function(visitedVertex) {
              var terminate = false;
              if (terminate) {
                return true;
              }
            });
            return backwardsAffectedVertices;
          }
        },
        {
          key: "isVertexImmediatePredecessorVertex",
          value: function isVertexImmediatePredecessorVertex(vertex) {
            var vertexImmediatePredecessorVertex = this.immediatePredecessorVertices.includes(vertex);
            return vertexImmediatePredecessorVertex;
          }
        },
        {
          key: "isVertexImmediateSuccessorVertex",
          value: function isVertexImmediateSuccessorVertex(vertex) {
            var vertexImmediateSuccessorVertex = this.immediateSuccessorVertices.includes(vertex);
            return vertexImmediateSuccessorVertex;
          }
        },
        {
          key: "isEdgePresentBySourceVertex",
          value: function isEdgePresentBySourceVertex(sourceVertex) {
            var sourceVertexImmediatePredecessorVertex = this.isVertexImmediatePredecessorVertex(sourceVertex), edgePresent = sourceVertexImmediatePredecessorVertex;
            return edgePresent;
          }
        },
        {
          key: "isEdgePresentByTargetVertex",
          value: function isEdgePresentByTargetVertex(targetVertex) {
            var targetVertexImmediateSuccessorVertex = this.isVertexImmediateSuccessorVertex(targetVertex), edgePresent = targetVertexImmediateSuccessorVertex;
            return edgePresent;
          }
        },
        {
          key: "setName",
          value: function setName(name) {
            this.name = name;
          }
        },
        {
          key: "setIndex",
          value: function setIndex(index) {
            this.index = index;
          }
        },
        {
          key: "setVisited",
          value: function setVisited(visited) {
            this.visited = visited;
          }
        },
        {
          key: "decrementIndex",
          value: function decrementIndex() {
            this.index--;
          }
        },
        {
          key: "removeImmediatePredecessorVertex",
          value: function removeImmediatePredecessorVertex(immediatePredecessorVertex) {
            var index = this.immediatePredecessorVertices.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
            this.immediatePredecessorVertices.splice(start, deleteCount);
          }
        },
        {
          key: "removeImmediateSuccessorVertex",
          value: function removeImmediateSuccessorVertex(immediateSuccessorVertex) {
            var index = this.immediateSuccessorVertices.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
            this.immediateSuccessorVertices.splice(start, deleteCount);
          }
        },
        {
          key: "removeIncomingEdges",
          value: function removeIncomingEdges() {
            var immediateSuccessorVertex = this;
            this.immediatePredecessorVertices.forEach(function(immediatePredecessorVertex) {
              return immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
            });
            this.immediatePredecessorVertices = [];
          }
        },
        {
          key: "removeOutgoingEdges",
          value: function removeOutgoingEdges() {
            var immediatePredecessorVertex = this;
            this.immediateSuccessorVertices.forEach(function(immediateSuccessorVertex) {
              return immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
            });
            this.immediateSuccessorVertices = [];
          }
        },
        {
          key: "addImmediatePredecessorVertex",
          value: function addImmediatePredecessorVertex(immediatePredecessorVertex) {
            this.immediatePredecessorVertices.push(immediatePredecessorVertex);
          }
        },
        {
          key: "addImmediateSuccessorVertex",
          value: function addImmediateSuccessorVertex(immediateSuccessorVertex) {
            this.immediateSuccessorVertices.push(immediateSuccessorVertex);
          }
        },
        {
          key: "forwardsDepthFirstSearch",
          value: function forwardsDepthFirstSearch(callback) {
            var visitedVertices = [];
            this.retrieveForwardsVisitedVertices(function(visitedVertex) {
              var terminate = callback(visitedVertex);
              visitedVertices.push(visitedVertex);
              return terminate;
            });
            visitedVertices.forEach(function(visitedVertex) {
              return visitedVertex.resetVisited();
            });
            return visitedVertices;
          }
        },
        {
          key: "backwardsDepthFirstSearch",
          value: function backwardsDepthFirstSearch(callback) {
            var visitedVertices = [];
            this.retrieveBackwardsVisitedVertices(function(visitedVertex) {
              var terminate = callback(visitedVertex);
              visitedVertices.push(visitedVertex);
              return terminate;
            });
            visitedVertices.forEach(function(visitedVertex) {
              return visitedVertex.resetVisited();
            });
            return visitedVertices;
          }
        },
        {
          key: "retrieveForwardsVisitedVertices",
          value: function retrieveForwardsVisitedVertices(callback) {
            var terminate = false;
            if (this.visited === false) {
              this.visited = true;
              var visitedVertex = this;
              terminate = callback(visitedVertex);
              if (terminate !== true) {
                visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                  terminate = immediateSuccessorVertex.retrieveForwardsVisitedVertices(callback);
                  if (terminate) {
                    return true;
                  }
                });
              }
            }
            return terminate;
          }
        },
        {
          key: "retrieveBackwardsVisitedVertices",
          value: function retrieveBackwardsVisitedVertices(callback) {
            var terminate = false;
            if (this.visited === false) {
              this.visited = true;
              var visitedVertex = this;
              terminate = callback(visitedVertex);
              if (terminate !== true) {
                visitedVertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                  terminate = immediatePredecessorVertex.retrieveBackwardsVisitedVertices(callback);
                  if (terminate) {
                    return true;
                  }
                });
              }
            }
            return terminate;
          }
        },
        {
          key: "forEachImmediatePredecessorVertex",
          value: function forEachImmediatePredecessorVertex(callback) {
            this.immediatePredecessorVertices.forEach(callback);
          }
        },
        {
          key: "forEachImmediateSuccessorVertex",
          value: function forEachImmediateSuccessorVertex(callback) {
            this.immediateSuccessorVertices.forEach(callback);
          }
        },
        {
          key: "someImmediatePredecessorVertex",
          value: function someImmediatePredecessorVertex(callback) {
            this.immediatePredecessorVertices.some(callback);
          }
        },
        {
          key: "someImmediateSuccessorVertex",
          value: function someImmediateSuccessorVertex(callback) {
            this.immediateSuccessorVertices.some(callback);
          }
        },
        {
          key: "resetVisited",
          value: function resetVisited() {
            this.visited = false;
          }
        }
      ], [
        {
          key: "fromNameAndIndex",
          value: function fromNameAndIndex(name, index) {
            var visited = false, immediatePredecessorVertices = [], immediateSuccessorVertices = [], dependencyVertex = new Vertex2(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices);
            return dependencyVertex;
          }
        }
      ]);
      return Vertex2;
    }();
    exports.default = Vertex;
  });

  // node_modules/occam-pearce-kelly/lib/directedAcyclicGraph.js
  var require_directedAcyclicGraph = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _edge = _interopRequireDefault(require_edge());
    var _vertex = _interopRequireDefault(require_vertex2());
    var _vertex1 = require_vertex();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var last = _necessary.arrayUtilities.last;
    var DirectedAcyclicGraph = function() {
      function DirectedAcyclicGraph2(vertexMap) {
        _classCallCheck(this, DirectedAcyclicGraph2);
        this.vertexMap = vertexMap;
      }
      _createClass(DirectedAcyclicGraph2, [
        {
          key: "isEmpty",
          value: function isEmpty() {
            var vertices = this.getVertices(), verticesLength = vertices.length, empty = verticesLength === 0;
            return empty;
          }
        },
        {
          key: "getVertices",
          value: function getVertices() {
            var vertexMapValues = Object.values(this.vertexMap), vertices = vertexMapValues;
            return vertices;
          }
        },
        {
          key: "getVertexNames",
          value: function getVertexNames() {
            var vertexMapKeys = Object.keys(this.vertexMap), vertexNames = vertexMapKeys;
            return vertexNames;
          }
        },
        {
          key: "getVertexByVertexName",
          value: function getVertexByVertexName(vertexName) {
            var vertexPresent = this.isVertexPresentByVertexName(vertexName), vertex = vertexPresent ? this.vertexMap[vertexName] : null;
            return vertex;
          }
        },
        {
          key: "getImmediatePredecessorVertexNamesByVertexName",
          value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
            var vertex = this.getVertexByVertexName(vertexName), immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();
            return immediatePredecessorVertexNames;
          }
        },
        {
          key: "getImmediateSuccessorVertexNamesByVertexName",
          value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
            var vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
            return immediateSuccessorVertexNames;
          }
        },
        {
          key: "getPredecessorVertexNamesByVertexName",
          value: function getPredecessorVertexNamesByVertexName(vertexName) {
            var vertex = this.getVertexByVertexName(vertexName), predecessorVertexNames = vertex.getPredecessorVertexNames();
            return predecessorVertexNames;
          }
        },
        {
          key: "getSuccessorVertexNamesByVertexName",
          value: function getSuccessorVertexNamesByVertexName(vertexName) {
            var vertex = this.getVertexByVertexName(vertexName), successorVertexNames = vertex.getSuccessorVertexNames();
            return successorVertexNames;
          }
        },
        {
          key: "getEdgesByTargetVertexName",
          value: function getEdgesByTargetVertexName(targetVertexName) {
            var edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
            if (targetVertex !== null) {
              var immediatePredecessorVertexNames = targetVertex.getImmediatePredecessorVertexNames(), sourceVertexNames = immediatePredecessorVertexNames;
              sourceVertexNames.forEach(function(sourceVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                edges.push(edge);
              });
            }
            return edges;
          }
        },
        {
          key: "getEdgesBySourceVertexName",
          value: function getEdgesBySourceVertexName(sourceVertexName) {
            var edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
            if (sourceVertex !== null) {
              var immediateSuccessorVertexNames = sourceVertex.getImmediateSuccessorVertexNames(), targetVertexNames = immediateSuccessorVertexNames;
              targetVertexNames.forEach(function(targetVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                edges.push(edge);
              });
            }
            return edges;
          }
        },
        {
          key: "setVertexByVertexName",
          value: function setVertexByVertexName(vertexName, vertex) {
            this.vertexMap[vertexName] = vertex;
          }
        },
        {
          key: "deleteVertexByVertexName",
          value: function deleteVertexByVertexName(vertexName) {
            delete this.vertexMap[vertexName];
          }
        },
        {
          key: "isEdgePresent",
          value: function isEdgePresent(edge) {
            var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), edgePresent = this.isEdgePresentByVertexNames(sourceVertexName, targetVertexName);
            return edgePresent;
          }
        },
        {
          key: "isEdgePresentByVertexNames",
          value: function isEdgePresentByVertexNames(sourceVertexName, targetVertexName) {
            var edgePresent = false;
            var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexAndTargetVertexPresent = sourceVertex !== null && targetVertex !== null;
            if (sourceVertexAndTargetVertexPresent) {
              edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
            }
            return edgePresent;
          }
        },
        {
          key: "isVertexPresentByVertexName",
          value: function isVertexPresentByVertexName(vertexName) {
            var vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName), vertexPresent = vertexNamesIncludesVertexName;
            return vertexPresent;
          }
        },
        {
          key: "getOrderedVertexNames",
          value: function getOrderedVertexNames() {
            var vertices = this.getVertices();
            _vertex1.orderVertices(vertices);
            var orderedVertices = vertices, orderedVertexNames = _vertex1.vertexNamesFromVertices(orderedVertices);
            return orderedVertexNames;
          }
        },
        {
          key: "addEdge",
          value: function addEdge(edge) {
            var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), success = this.addEdgeByVertexNames(sourceVertexName, targetVertexName);
            return success;
          }
        },
        {
          key: "removeEdge",
          value: function removeEdge(edge) {
            var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
            this.removeEdgeByVertexNames(sourceVertexName, targetVertexName);
          }
        },
        {
          key: "addEdgeByVertexNames",
          value: function addEdgeByVertexNames(sourceVertexName, targetVertexName) {
            var success = false;
            if (sourceVertexName !== targetVertexName) {
              var sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
              if (edgePresent) {
                success = true;
              } else {
                var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex(), invalidatingEdge = sourceVertexIndex > targetVertexIndex;
                success = invalidatingEdge ? addInvalidatingEdgeByVertices(sourceVertex, targetVertex) : true;
                if (success) {
                  var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex;
                  immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
                  immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
                }
              }
            }
            return success;
          }
        },
        {
          key: "removeEdgeByVertexNames",
          value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
            var edgePresent = this.isEdgePresentByVertexNames(sourceVertexName, targetVertexName);
            if (edgePresent) {
              var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
              sourceVertex.removeImmediateSuccessorVertex(targetVertex);
              targetVertex.removeImmediatePredecessorVertex(sourceVertex);
            }
          }
        },
        {
          key: "removeEdgesBySourceVertexName",
          value: function removeEdgesBySourceVertexName(sourceVertexName) {
            var sourceVertexPresent = this.isVertexPresentByVertexName(sourceVertexName);
            if (sourceVertexPresent) {
              var sourceVertex = this.getVertexByVertexName(sourceVertexName);
              sourceVertex.removeOutgoingEdges();
            }
          }
        },
        {
          key: "removeEdgesByTargetVertexName",
          value: function removeEdgesByTargetVertexName(targetVertexName) {
            var targetVertexPresent = this.isVertexPresentByVertexName(targetVertexName);
            if (targetVertexPresent) {
              var targetVertex = this.getVertexByVertexName(targetVertexName);
              targetVertex.removeIncomingEdges();
            }
          }
        },
        {
          key: "addVertexByVertexName",
          value: function addVertexByVertexName(vertexName) {
            var vertexPresent = this.isVertexPresentByVertexName(vertexName);
            if (!vertexPresent) {
              var vertexNames = this.getVertexNames(), vertexNamesLength = vertexNames.length, name = vertexName, index = vertexNamesLength, vertex = _vertex.default.fromNameAndIndex(name, index);
              this.setVertexByVertexName(vertexName, vertex);
            }
            var vertex = this.getVertexByVertexName(vertexName);
            return vertex;
          }
        },
        {
          key: "removeVertexByVertexName",
          value: function removeVertexByVertexName(vertexName) {
            var removedEdges = null;
            var vertexPresent = this.isVertexPresentByVertexName(vertexName);
            if (vertexPresent) {
              removedEdges = [];
              var vertex = this.getVertexByVertexName(vertexName);
              vertex.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
                var immediatePredecessorVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                removedEdges.push(removedEdge);
                immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
              });
              vertex.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                var immediateSuccessVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                removedEdges.push(removedEdge);
                immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
              });
              this.deleteVertexByVertexName(vertexName);
              var deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex(), vertices = this.getVertices(), affectedVertices = vertices.reduce(function(affectedVertices1, vertex1) {
                var vertexIndex = vertex1.getIndex(), vertexAffected = vertexIndex > deletedVertexIndex;
                if (vertexAffected) {
                  var affectedVertex = vertex1;
                  affectedVertices1.push(affectedVertex);
                }
                return affectedVertices1;
              }, []);
              affectedVertices.forEach(function(affectedVertex) {
                return affectedVertex.decrementIndex();
              });
            }
            return removedEdges;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var vertexMap = {}, directedAcyclicGraph = new DirectedAcyclicGraph2(vertexMap);
            return directedAcyclicGraph;
          }
        },
        {
          key: "fromVertexNames",
          value: function fromVertexNames(vertexNames) {
            var vertexMap = vertexMapFromVertexNames(vertexNames);
            var directedAcyclicGraph = new DirectedAcyclicGraph2(vertexMap);
            return directedAcyclicGraph;
          }
        },
        {
          key: "fromOrderedVertices",
          value: function fromOrderedVertices(orderedVertices) {
            var vertexMap = vertexMapFromOrderedVertices(orderedVertices);
            addEdgesToVertices(orderedVertices, vertexMap);
            var directedAcyclicGraph = new DirectedAcyclicGraph2(vertexMap);
            return directedAcyclicGraph;
          }
        }
      ]);
      return DirectedAcyclicGraph2;
    }();
    exports.default = DirectedAcyclicGraph;
    function addInvalidatingEdgeByVertices(sourceVertex, targetVertex) {
      var success = false;
      var forwardsAffectedVertices = targetVertex.retrieveForwardsAffectedVertices(sourceVertex), lastForwardsAffectedVertex = last(forwardsAffectedVertices), resultsInCycle = lastForwardsAffectedVertex === sourceVertex;
      if (!resultsInCycle) {
        var backwardsAffectedVertices = sourceVertex.retrieveBackwardsAffectedVertices();
        _vertex1.orderVertices(backwardsAffectedVertices);
        _vertex1.orderVertices(forwardsAffectedVertices);
        var affectedVertices = [].concat(backwardsAffectedVertices).concat(forwardsAffectedVertices), affectedVertexIndices = affectedVertices.map(function(affectedVertex) {
          var affectedVertexIndex = affectedVertex.getIndex();
          return affectedVertexIndex;
        });
        affectedVertexIndices.sort(function(indexA, indexB) {
          return indexA - indexB;
        });
        affectedVertices.forEach(function(affectedVertex, index) {
          var affectedVertexIndex = affectedVertexIndices[index];
          affectedVertex.setIndex(affectedVertexIndex);
        });
        success = true;
      }
      return success;
    }
    function vertexMapFromVertexNames(vertexNames) {
      var vertexMap = {};
      vertexNames.forEach(function(vertexName, index) {
        var name = vertexName, vertex = _vertex.default.fromNameAndIndex(name, index);
        vertexMap[vertexName] = vertex;
      });
      return vertexMap;
    }
    function vertexMapFromOrderedVertices(orderedVertices) {
      var vertexMap = {};
      orderedVertices.forEach(function(orderedVertex, index) {
        var name = orderedVertex.getName(), vertex = _vertex.default.fromNameAndIndex(name, index), vertexName = name;
        vertexMap[vertexName] = vertex;
      });
      return vertexMap;
    }
    function addEdgesToVertices(orderedVertices, vertexMap) {
      orderedVertices.forEach(function(orderedVertex) {
        orderedVertex.forEachOutgoingEdge(function(outgoingEdge) {
          var sourceVertexName = outgoingEdge.getSourceVertexName(), targetVertexName = outgoingEdge.getTargetVertexName(), immediatePredecessorVertexName = sourceVertexName, immediateSuccessorVertexName = targetVertexName, immediatePredecessorVertex = vertexMap[immediatePredecessorVertexName], immediateSuccessorVertex = vertexMap[immediateSuccessorVertexName];
          immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
          immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
        });
      });
    }
  });

  // node_modules/occam-pearce-kelly/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _edge = _interopRequireDefault(require_edge());
    var _directedAcyclicGraph = _interopRequireDefault(require_directedAcyclicGraph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "Edge", {
      enumerable: true,
      get: function() {
        return _edge.default;
      }
    });
    Object.defineProperty(exports, "DirectedAcyclicGraph", {
      enumerable: true,
      get: function() {
        return _directedAcyclicGraph.default;
      }
    });
  });

  // lib/edge.js
  var require_edge2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamPearceKelly = require_lib();
    var _default = _occamPearceKelly.Edge;
    exports.default = _default;
  });

  // node_modules/occam-kahn/lib/edge.js
  var require_edge3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Edge2 = function() {
      function Edge3(sourceVertexName, targetVertexName) {
        _classCallCheck(this, Edge3);
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
      }
      _createClass(Edge3, [
        {
          key: "getSourceVertexName",
          value: function getSourceVertexName() {
            return this.sourceVertexName;
          }
        },
        {
          key: "getTargetVertexName",
          value: function getTargetVertexName() {
            return this.targetVertexName;
          }
        }
      ]);
      return Edge3;
    }();
    exports.default = Edge2;
  });

  // node_modules/occam-kahn/lib/vertex.js
  var require_vertex3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Vertex = function() {
      function Vertex2(name, incomingEdges, outgoingEdges) {
        _classCallCheck(this, Vertex2);
        this.name = name;
        this.incomingEdges = incomingEdges;
        this.outgoingEdges = outgoingEdges;
      }
      _createClass(Vertex2, [
        {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        },
        {
          key: "getIncomingEdges",
          value: function getIncomingEdges() {
            return this.incomingEdges;
          }
        },
        {
          key: "getOutgoingEdges",
          value: function getOutgoingEdges() {
            return this.outgoingEdges;
          }
        },
        {
          key: "isStarting",
          value: function isStarting() {
            var incomingEdgesLength = this.incomingEdges.length, starting = incomingEdgesLength === 0;
            return starting;
          }
        },
        {
          key: "addIncomingEdge",
          value: function addIncomingEdge(incomingEdge) {
            this.incomingEdges.push(incomingEdge);
          }
        },
        {
          key: "addOutgoingEdge",
          value: function addOutgoingEdge(outgoingEdge) {
            this.outgoingEdges.push(outgoingEdge);
          }
        },
        {
          key: "removeIncomingEdge",
          value: function removeIncomingEdge(incomingEdge) {
            var index = this.incomingEdges.indexOf(incomingEdge);
            this.incomingEdges.splice(index, 1);
          }
        },
        {
          key: "forEachIncomingEdge",
          value: function forEachIncomingEdge(callback) {
            this.incomingEdges.forEach(callback);
          }
        },
        {
          key: "forEachOutgoingEdge",
          value: function forEachOutgoingEdge(callback) {
            this.outgoingEdges.forEach(callback);
          }
        }
      ], [
        {
          key: "fromVertexName",
          value: function fromVertexName(vertexName) {
            var name = vertexName, incomingEdges = [], outgoingEdges = [], vertex = new Vertex2(name, incomingEdges, outgoingEdges);
            return vertex;
          }
        }
      ]);
      return Vertex2;
    }();
    exports.default = Vertex;
  });

  // node_modules/occam-kahn/lib/remainingEdges.js
  var require_remainingEdges = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var RemainingEdges = function() {
      function RemainingEdges2(edges) {
        _classCallCheck(this, RemainingEdges2);
        this.edges = edges;
      }
      _createClass(RemainingEdges2, [
        {
          key: "areCyclesPresent",
          value: function areCyclesPresent() {
            var edgesLength = this.edges.length, cyclesPresent = edgesLength !== 0;
            return cyclesPresent;
          }
        },
        {
          key: "forEachEdgeByVertexNames",
          value: function forEachEdgeByVertexNames(callback) {
            this.edges.forEach(function(edge) {
              var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
              callback(sourceVertexName, targetVertexName);
            });
          }
        }
      ]);
      return RemainingEdges2;
    }();
    exports.default = RemainingEdges;
  });

  // node_modules/occam-kahn/lib/graph.js
  var require_graph = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _edge = _interopRequireDefault(require_edge3());
    var _vertex = _interopRequireDefault(require_vertex3());
    var _remainingEdges = _interopRequireDefault(require_remainingEdges());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var first2 = _necessary.arrayUtilities.first;
    var second2 = _necessary.arrayUtilities.second;
    var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
    var Graph = function() {
      function Graph2(orderedVertices, remainingEdges) {
        _classCallCheck(this, Graph2);
        this.orderedVertices = orderedVertices;
        this.remainingEdges = remainingEdges;
      }
      _createClass(Graph2, [
        {
          key: "getOrderedVertices",
          value: function getOrderedVertices() {
            return this.orderedVertices;
          }
        },
        {
          key: "getRemainingEdges",
          value: function getRemainingEdges() {
            return this.remainingEdges;
          }
        },
        {
          key: "areCyclesPresent",
          value: function areCyclesPresent() {
            return this.remainingEdges.areCyclesPresent();
          }
        }
      ], [
        {
          key: "fromVertexLiterals",
          value: function fromVertexLiterals(vertexLiterals) {
            var vertexMap = vertexMapFromVertexLiterals(vertexLiterals), edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap), orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges), remainingEdges = new _remainingEdges.default(edges), graph = new Graph2(orderedVertices, remainingEdges);
            return graph;
          }
        },
        {
          key: "fromVertexNamesAndEdges",
          value: function fromVertexNamesAndEdges(vertexNames, edges) {
            edges = edges.slice();
            var vertexMap = vertexMapFromVertexNamesAndEdges(vertexNames, edges), orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges), remainingEdges = new _remainingEdges.default(edges), graph = new Graph2(orderedVertices, remainingEdges);
            return graph;
          }
        }
      ]);
      return Graph2;
    }();
    exports.default = Graph;
    function vertexMapFromVertexNamesAndEdges(vertexNames, edges) {
      var vertexMap = {};
      vertexNames.forEach(function(vertexName) {
        var vertexExists = vertexMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
          var vertex = _vertex.default.fromVertexName(vertexName);
          vertexMap[vertexName] = vertex;
        }
      });
      edges.forEach(function(edge) {
        var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertexExists = vertexMap.hasOwnProperty(sourceVertexName), targetVertexExists = vertexMap.hasOwnProperty(targetVertexName);
        if (!sourceVertexExists) {
          var sourceVertex = _vertex.default.fromVertexName(sourceVertexName);
          vertexMap[sourceVertexName] = sourceVertex;
        }
        if (!targetVertexExists) {
          var targetVertex = _vertex.default.fromVertexName(targetVertexName);
          vertexMap[targetVertexName] = targetVertex;
        }
        var sourceVertex = vertexMap[sourceVertexName], targetVertex = vertexMap[targetVertexName], incomingEdge = edge, outgoingEdge = edge;
        sourceVertex.addOutgoingEdge(outgoingEdge);
        targetVertex.addIncomingEdge(incomingEdge);
      });
      return vertexMap;
    }
    function vertexMapFromVertexLiterals(vertexLiterals) {
      var vertexMap = {};
      vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first2(vertexLiteral), vertexName = firstVertexLiteralElement, vertexExists = vertexMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
          var vertex = _vertex.default.fromVertexName(vertexName);
          vertexMap[vertexName] = vertex;
        }
        var secondVertexLiteralElement = second2(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement;
        ancestorVertexNames.forEach(function(ancestorVertexName) {
          var ancestorVertexExists = vertexMap.hasOwnProperty(ancestorVertexName);
          if (!ancestorVertexExists) {
            var ancestorVertex = _vertex.default.fromVertexName(ancestorVertexName);
            vertexMap[ancestorVertexName] = ancestorVertex;
          }
        });
      });
      return vertexMap;
    }
    function edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap) {
      var edges = [];
      vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first2(vertexLiteral), secondVertexLiteralElement = second2(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement, vertexName = firstVertexLiteralElement;
        ancestorVertexNames.forEach(function(ancestorVertexName) {
          var sourceVertexName = ancestorVertexName, targetVertexName = vertexName, sourceVertex = vertexMap[sourceVertexName], targetVertex = vertexMap[targetVertexName], edge = new _edge.default(sourceVertexName, targetVertexName), incomingEdge = edge, outgoingEdge = edge;
          edges.push(edge);
          sourceVertex.addOutgoingEdge(outgoingEdge);
          targetVertex.addIncomingEdge(incomingEdge);
        });
      });
      return edges;
    }
    function orderedVerticesFromVertexMapAndEdges(vertexMap, edges) {
      var orderedVertexNames = [], startingVertexNames = startingVertexNamesFromVertexMap(vertexMap), removedEdges = [];
      var startingVertexNamesLength = startingVertexNames.length;
      while (startingVertexNamesLength > 0) {
        var startingVertexName = startingVertexNames.pop(), orderedVertexName = startingVertexName;
        orderedVertexNames.push(orderedVertexName);
        backwardsForEach(edges, function(edge, index) {
          var sourceVertexName = edge.getSourceVertexName(), edgeStarting = sourceVertexName === startingVertexName;
          if (edgeStarting) {
            edges.splice(index, 1);
            var targetVertexName = edge.getTargetVertexName(), targetVertex = vertexMap[targetVertexName], incomingEdge = edge, removedEdge = edge;
            targetVertex.removeIncomingEdge(incomingEdge);
            removedEdges.push(removedEdge);
            var targetVertexStarting = targetVertex.isStarting();
            if (targetVertexStarting) {
              var startingVertexName1 = targetVertexName;
              startingVertexNames.push(startingVertexName1);
            }
          }
        });
        startingVertexNamesLength = startingVertexNames.length;
      }
      var edgesLength = edges.length;
      if (edgesLength === 0) {
        removedEdges.forEach(function(removedEdge) {
          var targetVertexName = removedEdge.getTargetVertexName(), targetVertex = vertexMap[targetVertexName], incomingEdge = removedEdge;
          targetVertex.addIncomingEdge(incomingEdge);
        });
      }
      var orderedVertices = orderedVertexNames.map(function(orderedVertexName2) {
        return vertexMap[orderedVertexName2];
      });
      return orderedVertices;
    }
    function startingVertexNamesFromVertexMap(vertexMap) {
      var vertexNames = Object.keys(vertexMap), startingVertexNames = vertexNames.reduce(function(startingVertexNames1, vertexName) {
        var vertex = vertexMap[vertexName], vertexStarting = vertex.isStarting();
        if (vertexStarting) {
          var startingVertexName2 = vertexName;
          startingVertexNames1.push(startingVertexName2);
        }
        return startingVertexNames1;
      }, []);
      return startingVertexNames;
    }
  });

  // node_modules/occam-kahn/lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _graph = _interopRequireDefault(require_graph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "Graph", {
      enumerable: true,
      get: function() {
        return _graph.default;
      }
    });
  });

  // lib/utilities/vertex.js
  var require_vertex4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.vertexNamesFromVertexLiterals = vertexNamesFromVertexLiterals;
    exports.vertexNamesFromVertices = vertexNamesFromVertices;
    exports.forwardsDepthFirstSearch = forwardsDepthFirstSearch;
    var _necessary = require_browser();
    var first2 = _necessary.arrayUtilities.first;
    var second2 = _necessary.arrayUtilities.second;
    function vertexNamesFromVertexLiterals(vertexLiterals) {
      var vertexNameMap = {};
      vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first2(vertexLiteral), vertexName = firstVertexLiteralElement, vertexExists = vertexNameMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
          vertexNameMap[vertexName] = vertexName;
        }
        var secondVertexLiteralElement = second2(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement;
        ancestorVertexNames.forEach(function(ancestorVertexName) {
          var ancestorVertexExists = vertexNameMap.hasOwnProperty(ancestorVertexName);
          if (!ancestorVertexExists) {
            vertexNameMap[ancestorVertexName] = ancestorVertexName;
          }
        });
      });
      var vertexNameMapKeys = Object.keys(vertexNameMap), vertexNames = vertexNameMapKeys;
      return vertexNames;
    }
    function vertexNamesFromVertices(vertices) {
      var vertexNames = vertices.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
      });
      return vertexNames;
    }
    function forwardsDepthFirstSearch(vertex, callback) {
      var getPredecessorVertices = function getPredecessorVertices2() {
        var predecessorVertices = [];
        return predecessorVertices;
      };
      var visitedVertices = [];
      retrieveForwardsVisitedVertices(vertex, function(visitedVertex, getPredecessorVertices1) {
        var terminate = callback(visitedVertex, getPredecessorVertices1);
        visitedVertices.push(visitedVertex);
        return terminate;
      }, getPredecessorVertices);
      visitedVertices.forEach(function(visitedVertex) {
        return visitedVertex.resetVisited();
      });
      return visitedVertices;
    }
    function retrieveForwardsVisitedVertices(vertex, callback, getPredecessorVertices) {
      var terminate = false;
      if (vertex.visited === false) {
        vertex.visited = true;
        var visitedVertex = vertex;
        terminate = callback(visitedVertex, getPredecessorVertices);
        if (terminate !== true) {
          visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
            terminate = retrieveForwardsVisitedVertices(immediateSuccessorVertex, callback, function() {
              var predecessorVertices = getPredecessorVertices();
              var immediatePredecessorVertex = vertex, predecessorVertex = immediatePredecessorVertex;
              predecessorVertices = predecessorVertices.concat(predecessorVertex);
              return predecessorVertices;
            });
            return terminate;
          });
        }
      }
      return terminate;
    }
  });

  // lib/cycle.js
  var require_cycle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _vertex = require_vertex4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var first2 = _necessary.arrayUtilities.first;
    var Cycle = function() {
      function Cycle2(vertexNames) {
        _classCallCheck(this, Cycle2);
        this.vertexNames = vertexNames;
      }
      _createClass(Cycle2, [
        {
          key: "getVertexNames",
          value: function getVertexNames() {
            return this.vertexNames;
          }
        }
      ], [
        {
          key: "fromVertexNamePartialCycleAndSuccessorVertices",
          value: function fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices) {
            successorVertices = successorVertices.slice();
            var successorVerticesLength = successorVertices.length;
            if (successorVerticesLength > 0) {
              var firstSuccessorVertex = first2(successorVertices), firstSuccessorVertexName = firstSuccessorVertex.getName(), cyclicEdgeTargetVertexName = partialCycle.getTargetVertexName();
              if (firstSuccessorVertexName === cyclicEdgeTargetVertexName) {
                successorVertices.shift();
              }
            }
            var cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(), cyclicEdgeTargetVertexName = partialCycle.getCyclicEdgeTargetVertexName(), predecessorVertexNames = partialCycle.getPredecessorVertexNames(), successorVertexNames = _vertex.vertexNamesFromVertices(successorVertices), vertexNames = vertexName === cyclicEdgeTargetVertexName ? [].concat(cyclicEdgeTargetVertexName).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) : [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName).concat(successorVertexNames), cycle = new Cycle2(vertexNames);
            return cycle;
          }
        }
      ]);
      return Cycle2;
    }();
    exports.default = Cycle;
  });

  // lib/partialCycle.js
  var require_partialCycle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var first2 = _necessary.arrayUtilities.first;
    var PartialCycle = function() {
      function PartialCycle2(predecessorVertices, cyclicEdge) {
        _classCallCheck(this, PartialCycle2);
        this.predecessorVertices = predecessorVertices;
        this.cyclicEdge = cyclicEdge;
      }
      _createClass(PartialCycle2, [
        {
          key: "getPredecessorVertices",
          value: function getPredecessorVertices() {
            return this.predecessorVertices;
          }
        },
        {
          key: "getCyclicEdge",
          value: function getCyclicEdge() {
            return this.cyclicEdge;
          }
        },
        {
          key: "getTargetVertexName",
          value: function getTargetVertexName() {
            var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName(), targetVertexName = cyclicEdgeTargetVertexName;
            return targetVertexName;
          }
        },
        {
          key: "getPredecessorVertexNames",
          value: function getPredecessorVertexNames() {
            var predecessorVertexNames = this.predecessorVertices.map(function(predecessorVertex) {
              var predecessorVertexName = predecessorVertex.getName();
              return predecessorVertexName;
            });
            return predecessorVertexNames;
          }
        },
        {
          key: "getCyclicEdgeSourceVertexName",
          value: function getCyclicEdgeSourceVertexName() {
            var cyclicEdgeSourceVertexName = this.cyclicEdge.getSourceVertexName();
            return cyclicEdgeSourceVertexName;
          }
        },
        {
          key: "getCyclicEdgeTargetVertexName",
          value: function getCyclicEdgeTargetVertexName() {
            var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName();
            return cyclicEdgeTargetVertexName;
          }
        }
      ], [
        {
          key: "fromCyclicEdgeAndPredecessorVertices",
          value: function fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices) {
            predecessorVertices = predecessorVertices.slice();
            var predecessorVerticesLength = predecessorVertices.length;
            if (predecessorVerticesLength > 0) {
              var firstPredecessorVertex = first2(predecessorVertices), firstPredecessorVertexName = firstPredecessorVertex.getName(), cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();
              if (firstPredecessorVertexName === cyclicEdgeTargetVertexName) {
                predecessorVertices.shift();
              }
            }
            var partialCycle = new PartialCycle2(predecessorVertices, cyclicEdge);
            return partialCycle;
          }
        }
      ]);
      return PartialCycle2;
    }();
    exports.default = PartialCycle;
  });

  // lib/utilities/edge.js
  var require_edge4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.edgesFromVertexLiterals = edgesFromVertexLiterals;
    exports.checkEdgesIncludesEdge = checkEdgesIncludesEdge;
    exports.removeEdgeFromEdges = removeEdgeFromEdges;
    exports.edgesBySourceVertexName = edgesBySourceVertexName;
    exports.edgesByTargetVertexName = edgesByTargetVertexName;
    var _necessary = require_browser();
    var prune = _necessary.arrayUtilities.prune;
    var remove = prune;
    function edgesFromVertexLiterals(vertexLiterals) {
      var edges = [];
      vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement, vertexName = firstVertexLiteralElement;
        ancestorVertexNames.forEach(function(ancestorVertexName) {
          var sourceVertexName = ancestorVertexName, targetVertexName = vertexName, edge = new Edge(sourceVertexName, targetVertexName);
          edges.push(edge);
        });
      });
      return edges;
    }
    function checkEdgesIncludesEdge(edge, edges) {
      var edge1 = edge, edgesIncludesEdge = edges.some(function(edge2) {
        var edge21 = edge2, matches = edge1.match(edge21);
        if (matches) {
          return true;
        }
      });
      return edgesIncludesEdge;
    }
    function removeEdgeFromEdges(edge, edges) {
      var edge1 = edge;
      remove(edges, function(edge2) {
        var edge21 = edge2, matches = edge1.match(edge21);
        if (!matches) {
          return true;
        }
      });
    }
    function edgesBySourceVertexName(sourceVertexName, edges) {
      edges = edges.filter(function(edge) {
        var matches = edge.matchSourceVertexName(sourceVertexName);
        if (matches) {
          return true;
        }
      });
      return edges;
    }
    function edgesByTargetVertexName(targetVertexName, edges) {
      edges = edges.filter(function(edge) {
        var matches = edge.matchTargetVertexName(targetVertexName);
        if (matches) {
          return true;
        }
      });
      return edges;
    }
  });

  // lib/directedGraph.js
  var require_directedGraph = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamKahn = require_lib2();
    var _necessary = require_browser();
    var _occamPearceKelly = require_lib();
    var _edge = _interopRequireDefault(require_edge2());
    var _cycle = _interopRequireDefault(require_cycle());
    var _partialCycle = _interopRequireDefault(require_partialCycle());
    var _vertex = require_vertex4();
    var _edge1 = require_edge4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var first2 = _necessary.arrayUtilities.first;
    var filter = _necessary.arrayUtilities.filter;
    var DirectedGraph = function() {
      function DirectedGraph2(cyclicEdges, directedAcyclicGraph) {
        _classCallCheck(this, DirectedGraph2);
        this.cyclicEdges = cyclicEdges;
        this.directedAcyclicGraph = directedAcyclicGraph;
      }
      _createClass(DirectedGraph2, [
        {
          key: "getCyclicEdges",
          value: function getCyclicEdges() {
            return this.cyclicEdges;
          }
        },
        {
          key: "getDirectedAcyclicGraph",
          value: function getDirectedAcyclicGraph() {
            return this.directedAcyclicGraph;
          }
        },
        {
          key: "getImmediatePredecessorVertexNamesByVertexName",
          value: function getImmediatePredecessorVertexNamesByVertexName(vertexName, param) {
            var includeCyclicEdges = param === void 0 ? false : param;
            var immediatePredecessorVertexNames = this.directedAcyclicGraph.getImmediatePredecessorVertexNamesByVertexName(vertexName);
            if (includeCyclicEdges) {
              this.cyclicEdges.forEach(function(cyclicEdge) {
                var cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();
                if (cyclicEdgeTargetVertexName === vertexName) {
                  var cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName(), immediatePredecessorVertexName = cyclicEdgeSourceVertexName;
                  immediatePredecessorVertexNames.push(immediatePredecessorVertexName);
                }
              });
            }
            return immediatePredecessorVertexNames;
          }
        },
        {
          key: "getImmediateSuccessorVertexNamesByVertexName",
          value: function getImmediateSuccessorVertexNamesByVertexName(vertexName, param) {
            var includeCyclicEdges = param === void 0 ? false : param;
            var immediateSuccessorVertexNames = this.directedAcyclicGraph.getImmediateSuccessorVertexNamesByVertexName(vertexName);
            if (includeCyclicEdges) {
              this.cyclicEdges.forEach(function(cyclicEdge) {
                var cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName();
                if (cyclicEdgeSourceVertexName === vertexName) {
                  var cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName(), immediateSuccessorVertexName = cyclicEdgeTargetVertexName;
                  immediateSuccessorVertexNames.push(immediateSuccessorVertexName);
                }
              });
            }
            return immediateSuccessorVertexNames;
          }
        },
        {
          key: "getPredecessorVertexNamesByVertexName",
          value: function getPredecessorVertexNamesByVertexName(vertexName) {
            return this.directedAcyclicGraph.getPredecessorVertexNamesByVertexName(vertexName);
          }
        },
        {
          key: "getSuccessorVertexNamesByVertexName",
          value: function getSuccessorVertexNamesByVertexName(vertexName) {
            return this.directedAcyclicGraph.getSuccessorVertexNamesByVertexName(vertexName);
          }
        },
        {
          key: "areCyclesPresentByVertexName",
          value: function areCyclesPresentByVertexName(vertexName) {
            var cyclesPresent = false;
            var vertexPresent = this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
            if (vertexPresent) {
              var firstCycle = this.getFirstCycleByVertexName(vertexName);
              cyclesPresent = firstCycle !== null;
            }
            return cyclesPresent;
          }
        },
        {
          key: "isVertexPresentByVertexName",
          value: function isVertexPresentByVertexName(vertexName) {
            return this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
          }
        },
        {
          key: "getFirstCycleByVertexName",
          value: function getFirstCycleByVertexName(vertexName) {
            var firstCycle = null;
            var vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName), cyclicEdges = this.cyclicEdges.slice(), partialCycles = [], cycles = [];
            _vertex.forwardsDepthFirstSearch(vertex, function(visitedVertex, getPredecessorVertices) {
              var visitedVertexName = visitedVertex.getName(), sourceVertexName = visitedVertexName;
              filter(cyclicEdges, function(cyclicEdge) {
                var matches = cyclicEdge.matchSourceVertexName(sourceVertexName);
                if (matches) {
                  var predecessorVertices = getPredecessorVertices(), partialCycle = _partialCycle.default.fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices);
                  partialCycles.push(partialCycle);
                } else {
                  return true;
                }
              });
              var cyclicEdgesLength = cyclicEdges.length, terminate = cyclicEdgesLength === 0;
              return terminate;
            });
            partialCycles.some(function(partialCycle) {
              var targetVertexName = partialCycle.getTargetVertexName(), targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);
              _vertex.forwardsDepthFirstSearch(targetVertex, function(visitedVertex, getPredecessorVertices) {
                var visitedVertexName = visitedVertex.getName();
                if (visitedVertexName === vertexName) {
                  var predecessorVertices = getPredecessorVertices(), successorVertices = predecessorVertices, cycle = _cycle.default.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);
                  cycles.push(cycle);
                }
                var cyclesLength2 = cycles.length, terminate = cyclesLength2 > 0;
                return terminate;
              });
            }.bind(this));
            var cyclesLength = cycles.length;
            if (cyclesLength > 0) {
              firstCycle = first2(cycles);
            }
            return firstCycle;
          }
        },
        {
          key: "getFirstCycle",
          value: function getFirstCycle() {
            var firstCyclicEdge = first2(this.cyclicEdges), cyclicEdge = firstCyclicEdge, sourceVertexName = cyclicEdge.getSourceVertexName(), vertexName = sourceVertexName, firstCycle = this.getFirstCycleByVertexName(vertexName);
            return firstCycle;
          }
        },
        {
          key: "getOrderedVertexNames",
          value: function getOrderedVertexNames() {
            return this.directedAcyclicGraph.getOrderedVertexNames();
          }
        },
        {
          key: "areCyclesPresent",
          value: function areCyclesPresent() {
            var cyclicEdgesLength = this.cyclicEdges.length, cyclesPresent = cyclicEdgesLength > 0;
            return cyclesPresent;
          }
        },
        {
          key: "addVertexByVertexName",
          value: function addVertexByVertexName(vertexName) {
            this.directedAcyclicGraph.addVertexByVertexName(vertexName);
          }
        },
        {
          key: "addVerticesByVertexNames",
          value: function addVerticesByVertexNames(vertexNames) {
            vertexNames.forEach(function(vertexName) {
              return this.addVertexByVertexName(vertexName);
            }.bind(this));
          }
        },
        {
          key: "removeVertexByVertexName",
          value: function removeVertexByVertexName(vertexName) {
            this.directedAcyclicGraph.removeVertexByVertexName(vertexName);
            this.filterCyclicEdges();
          }
        },
        {
          key: "removeVerticesByVertexNames",
          value: function removeVerticesByVertexNames(vertexNames) {
            vertexNames.forEach(function(vertexName) {
              return this.removeVertexByVertexName(vertexName);
            }.bind(this));
          }
        },
        {
          key: "addEdge",
          value: function addEdge(edge) {
            var success = this.directedAcyclicGraph.addEdge(edge);
            if (!success) {
              var cyclicEdgesIncludesEdge = _edge1.checkEdgesIncludesEdge(edge, this.cyclicEdges);
              if (!cyclicEdgesIncludesEdge) {
                var cyclicEdge = edge;
                this.cyclicEdges.push(cyclicEdge);
              }
            }
          }
        },
        {
          key: "addEdges",
          value: function addEdges(edges) {
            edges.forEach(function(edge) {
              return this.addEdge(edge);
            }.bind(this));
          }
        },
        {
          key: "removeEdge",
          value: function removeEdge(edge, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            var cyclicEdgesIncludesEdge = _edge1.checkEdgesIncludesEdge(edge, this.cyclicEdges), edgePresent = this.directedAcyclicGraph.isEdgePresent(edge), edgeCyclic = cyclicEdgesIncludesEdge;
            if (false) {
            } else if (edgeCyclic) {
              var cyclicEdge = edge;
              _edge1.removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
            } else if (edgePresent) {
              this.directedAcyclicGraph.removeEdge(edge);
              if (removeStrandedVertices) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.directedAcyclicGraph.getVertexByVertexName(sourceVertexName), targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName), sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
                if (sourceVertexStranded) {
                  this.directedAcyclicGraph.removeVertexByVertexName(sourceVertexName);
                }
                if (targetVertexStranded) {
                  this.directedAcyclicGraph.removeVertexByVertexName(targetVertexName);
                }
              }
            }
            this.filterCyclicEdges();
          }
        },
        {
          key: "removeEdges",
          value: function removeEdges(edges, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            edges.forEach(function(edge) {
              return this.removeEdge(edge, removeStrandedVertices);
            }.bind(this));
          }
        },
        {
          key: "addEdgeByVertexNames",
          value: function addEdgeByVertexNames(sourceVertexName, targetVertexName) {
            var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            this.addEdge(edge);
          }
        },
        {
          key: "removeEdgeByVertexNames",
          value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            this.removeEdge(edge, removeStrandedVertices);
          }
        },
        {
          key: "removeEdgesByTargetVertexName",
          value: function removeEdgesByTargetVertexName(targetVertexName, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            var cyclicEdges = _edge1.edgesByTargetVertexName(targetVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
            this.removeEdges(cyclicEdges, removeStrandedVertices);
            this.removeEdges(edges, removeStrandedVertices);
          }
        },
        {
          key: "removeEdgesBySourceVertexName",
          value: function removeEdgesBySourceVertexName(sourceVertexName, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            var cyclicEdges = _edge1.edgesBySourceVertexName(sourceVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
            this.removeEdges(cyclicEdges, removeStrandedVertices);
            this.removeEdges(edges, removeStrandedVertices);
          }
        },
        {
          key: "removeAllEdgesAndVertices",
          value: function removeAllEdgesAndVertices() {
            this.directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing();
            this.cyclicEdges = [];
          }
        },
        {
          key: "filterCyclicEdges",
          value: function filterCyclicEdges() {
            filter(this.cyclicEdges, function(cyclicEdge) {
              var sourceVertexName = cyclicEdge.getSourceVertexName(), targetVertexName = cyclicEdge.getTargetVertexName(), sourceVertexPresent = this.isVertexPresentByVertexName(sourceVertexName), targetVertexPresent = this.isVertexPresentByVertexName(targetVertexName);
              if (sourceVertexPresent && targetVertexPresent) {
                return true;
              }
            }.bind(this));
            filter(this.cyclicEdges, function(cyclicEdge) {
              var edge = cyclicEdge, success = this.directedAcyclicGraph.addEdge(edge);
              if (!success) {
                return true;
              }
            }.bind(this));
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var cyclicEdges = [], directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing(), directedGraph2 = new DirectedGraph2(cyclicEdges, directedAcyclicGraph);
            return directedGraph2;
          }
        },
        {
          key: "fromVertexLiterals",
          value: function fromVertexLiterals(vertexLiterals) {
            var vertexNames = _vertex.vertexNamesFromVertexLiterals(vertexLiterals), edges = _edge1.edgesFromVertexLiterals(vertexLiterals), directedGraph2 = DirectedGraph2.fromVertexNamesAndEdges(vertexNames, edges);
            return directedGraph2;
          }
        },
        {
          key: "fromVertexNamesAndEdges",
          value: function fromVertexNamesAndEdges(vertexNames, edges) {
            var directedGraph2;
            var graph = _occamKahn.Graph.fromVertexNamesAndEdges(vertexNames, edges), cyclesPresent = graph.areCyclesPresent();
            if (cyclesPresent) {
              var cyclicEdges = [], directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromVertexNames(vertexNames);
              directedGraph2 = new DirectedGraph2(cyclicEdges, directedAcyclicGraph);
              edges.forEach(function(edge) {
                return directedGraph2.addEdge(edge);
              });
            } else {
              var orderedVertices = graph.getOrderedVertices(), cyclicEdges = [], directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);
              directedGraph2 = new DirectedGraph2(cyclicEdges, directedAcyclicGraph);
            }
            return directedGraph2;
          }
        }
      ]);
      return DirectedGraph2;
    }();
    exports.default = DirectedGraph;
  });

  // lib/index.js
  var require_lib3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _edge = _interopRequireDefault(require_edge2());
    var _directedGraph = _interopRequireDefault(require_directedGraph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "Edge", {
      enumerable: true,
      get: function() {
        return _edge.default;
      }
    });
    Object.defineProperty(exports, "DirectedGraph", {
      enumerable: true,
      get: function() {
        return _directedGraph.default;
      }
    });
  });

  // lib/example.js
  "use strict";
  var _index = require_lib3();
  var directedGraph = _index.DirectedGraph.fromNothing();
  directedGraph.addVerticesByVertexNames([
    "./easy-layout",
    "./easy-with-style",
    "./occam-lexers",
    "./with-style"
  ]);
  directedGraph.addEdgeByVertexNames("./easy-with-style", "./easy-layout");
  directedGraph.addEdgeByVertexNames("./with-style", "./easy-with-style");
  directedGraph.addEdgeByVertexNames("./easy-layout", "./occam-lexers");
  directedGraph.addEdgeByVertexNames("./easy-with-style", "./easy-layout");
  directedGraph.addEdgeByVertexNames("./occam-lexers", "./with-style");
  directedGraph.removeVertexByVertexName("./occam-lexers");
  debugger;
})();
//# sourceMappingURL=example.js.map
