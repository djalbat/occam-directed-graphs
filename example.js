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
    var Edge2 = /* @__PURE__ */ function() {
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
    exports.CONTENT_TYPE = exports.EMPTY_STRING = exports.ACCEPT = exports.CTRL_C = exports.ERROR = exports.UTF8 = void 0;
    var UTF8 = "utf8";
    exports.UTF8 = UTF8;
    var ERROR = "error";
    exports.ERROR = ERROR;
    var CTRL_C = "^C";
    exports.CTRL_C = CTRL_C;
    var ACCEPT = "accept";
    exports.ACCEPT = ACCEPT;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var CONTENT_TYPE = "content-type";
    exports.CONTENT_TYPE = CONTENT_TYPE;
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
    exports.back = back;
    exports.front = front;
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
    function back(array) {
      return array.slice(array.length - 1);
    }
    function front(array) {
      return array.slice(0, array.length - 1);
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
    function replace(array, element1, test) {
      var start;
      var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element1);
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
    function patch(array, element2, test) {
      var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element2);
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
      back,
      front,
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
    var _constants = require_constants();
    var _array = require_array();
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
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
      var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array).first(relativePathNames);
      lastPathName = (0, _array).last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
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

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CARRIAGE_RETURN_CHARACTER = exports.BACKSPACE_CHARACTER = exports.LINE_FEED_CHARACTER = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = exports.ETX_CHARACTER = void 0;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var COLON_CHARACTER = ":";
    exports.COLON_CHARACTER = COLON_CHARACTER;
    var AMPERSAND_CHARACTER = "&";
    exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
    var LINE_FEED_CHARACTER = "\n";
    exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.overwrite = overwrite;
    exports.underwrite = underwrite;
    exports.portFromHost = portFromHost;
    exports.secureFromHost = secureFromHost;
    exports.hostnameFromHost = hostnameFromHost;
    exports.queryStringFromQuery = queryStringFromQuery;
    exports.urlFromHostURIAndQuery = urlFromHostURIAndQuery;
    exports.default = void 0;
    var _array = require_array();
    var _constants = require_constants();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        if (lowerCaseOwnPropertyName === lowerCaseName) {
          headers[ownPropertyName] = value;
          return true;
        }
      });
      if (!overwritten) {
        headers[name] = value;
      }
    }
    function underwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        return lowerCaseOwnPropertyName;
      }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
      if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
      if (index === -1) {
        var secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        var start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      var secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString1 = names.reduce(function(queryString, name, index) {
        var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString;
      }, _constants.EMPTY_STRING);
      return queryString1;
    }
    function urlFromHostURIAndQuery(host, uri, query) {
      var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
    var _default = {
      overwrite,
      underwrite,
      portFromHost,
      secureFromHost,
      hostnameFromHost,
      queryStringFromQuery,
      urlFromHostURIAndQuery
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

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.POST_METHOD = exports.GET_METHOD = void 0;
    var GET_METHOD = "GET";
    exports.GET_METHOD = GET_METHOD;
    var POST_METHOD = "POST";
    exports.POST_METHOD = POST_METHOD;
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.APPLICATION_JSON_CONTENT_TYPE = void 0;
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
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
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _http = require_http();
    function get(host, uri, query, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, body = null;
      underwriteAccept(headers);
      request(host, uri, query, method, body, headers, callback);
    }
    function post(host, uri, query, body, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD;
      underwriteAccept(headers);
      underwriteContentType(headers);
      request(host, uri, query, method, body, headers, callback);
    }
    function request(host, uri, query, method, body1, headers, callback) {
      var url = (0, _http).urlFromHostURIAndQuery(host, uri, query), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = body1, jsonString = JSON.stringify(json);
        body1 = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
        if (readyState == 4) {
          var body = responseText;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = body, json2 = JSON.parse(jsonString2);
              body = json2;
            } catch (error) {
              body = null;
            }
            callback(body, status);
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
      body1 !== null ? xmlHttpRequest.send(body1) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function underwriteAccept(headers) {
      var name = _constants.ACCEPT, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentType(headers) {
      var name = _constants.CONTENT_TYPE, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      (0, _http).underwrite(headers, name, value);
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
      }
    });
    Object.defineProperty(exports, "httpUtilities", {
      enumerable: true,
      get: function() {
        return _http.default;
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
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
    var _path = _interopRequireDefault(require_path());
    var _http = _interopRequireDefault(require_http());
    var _array = _interopRequireDefault(require_array());
    var _asynchronous = _interopRequireDefault(require_asynchronous());
    var _ajax = _interopRequireDefault(require_ajax());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
    var Vertex = /* @__PURE__ */ function() {
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
            (0, _vertex).orderVertices(predecessorVertices);
            var orderedPredecessorVertices = predecessorVertices, orderedPredecessorVertexNames = (0, _vertex).vertexNamesFromVertices(orderedPredecessorVertices);
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
    var DirectedAcyclicGraph = /* @__PURE__ */ function() {
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
            (0, _vertex1).orderVertices(vertices);
            var orderedVertices = vertices, orderedVertexNames = (0, _vertex1).vertexNamesFromVertices(orderedVertices);
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
            var vertex1 = this.getVertexByVertexName(vertexName);
            return vertex1;
          }
        },
        {
          key: "removeVertexByVertexName",
          value: function removeVertexByVertexName(vertexName) {
            var removedEdges = null;
            var vertexPresent = this.isVertexPresentByVertexName(vertexName);
            if (vertexPresent) {
              removedEdges = [];
              var vertex2 = this.getVertexByVertexName(vertexName);
              vertex2.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
                var immediatePredecessorVertex = vertex2, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                removedEdges.push(removedEdge);
                immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
              });
              vertex2.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                var immediateSuccessVertex = vertex2, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                removedEdges.push(removedEdge);
                immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
              });
              this.deleteVertexByVertexName(vertexName);
              var deletedVertex = vertex2, deletedVertexIndex = deletedVertex.getIndex(), vertices = this.getVertices(), affectedVertices1 = vertices.reduce(function(affectedVertices, vertex) {
                var vertexIndex = vertex.getIndex(), vertexAffected = vertexIndex > deletedVertexIndex;
                if (vertexAffected) {
                  var affectedVertex = vertex;
                  affectedVertices.push(affectedVertex);
                }
                return affectedVertices;
              }, []);
              affectedVertices1.forEach(function(affectedVertex) {
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
        (0, _vertex1).orderVertices(backwardsAffectedVertices);
        (0, _vertex1).orderVertices(forwardsAffectedVertices);
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
    var _edge = _interopRequireDefault(require_edge());
    var _directedAcyclicGraph = _interopRequireDefault(require_directedAcyclicGraph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
    var Edge2 = /* @__PURE__ */ function() {
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
    var Vertex = /* @__PURE__ */ function() {
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
    var RemainingEdges = /* @__PURE__ */ function() {
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
    var Graph = /* @__PURE__ */ function() {
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
        var sourceVertex1 = vertexMap[sourceVertexName], targetVertex1 = vertexMap[targetVertexName], incomingEdge = edge, outgoingEdge = edge;
        sourceVertex1.addOutgoingEdge(outgoingEdge);
        targetVertex1.addIncomingEdge(incomingEdge);
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
      var vertexNames = Object.keys(vertexMap), startingVertexNames1 = vertexNames.reduce(function(startingVertexNames, vertexName) {
        var vertex = vertexMap[vertexName], vertexStarting = vertex.isStarting();
        if (vertexStarting) {
          var startingVertexName = vertexName;
          startingVertexNames.push(startingVertexName);
        }
        return startingVertexNames;
      }, []);
      return startingVertexNames1;
    }
  });

  // node_modules/occam-kahn/lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Graph", {
      enumerable: true,
      get: function() {
        return _graph.default;
      }
    });
    var _graph = _interopRequireDefault(require_graph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
      retrieveForwardsVisitedVertices(vertex, function(visitedVertex, getPredecessorVertices2) {
        var terminate = callback(visitedVertex, getPredecessorVertices2);
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
    var Cycle = /* @__PURE__ */ function() {
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
            var cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(), cyclicEdgeTargetVertexName1 = partialCycle.getCyclicEdgeTargetVertexName(), predecessorVertexNames = partialCycle.getPredecessorVertexNames(), successorVertexNames = (0, _vertex).vertexNamesFromVertices(successorVertices), vertexNames = vertexName === cyclicEdgeTargetVertexName1 ? [].concat(cyclicEdgeTargetVertexName1).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) : [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName1).concat(successorVertexNames), cycle = new Cycle2(vertexNames);
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
    var PartialCycle = /* @__PURE__ */ function() {
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
    function checkEdgesIncludesEdge(edge3, edges) {
      var edge1 = edge3, edgesIncludesEdge = edges.some(function(edge) {
        var edge2 = edge, matches = edge1.match(edge2);
        if (matches) {
          return true;
        }
      });
      return edgesIncludesEdge;
    }
    function removeEdgeFromEdges(edge4, edges) {
      var edge1 = edge4;
      remove(edges, function(edge) {
        var edge2 = edge, matches = edge1.match(edge2);
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
    var DirectedGraph = /* @__PURE__ */ function() {
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
            var _this = this;
            var firstCycle = null;
            var vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName), cyclicEdges = this.cyclicEdges.slice(), partialCycles = [], cycles = [];
            (0, _vertex).forwardsDepthFirstSearch(vertex, function(visitedVertex, getPredecessorVertices) {
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
              var targetVertexName = partialCycle.getTargetVertexName(), targetVertex = _this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);
              (0, _vertex).forwardsDepthFirstSearch(targetVertex, function(visitedVertex, getPredecessorVertices) {
                var visitedVertexName = visitedVertex.getName();
                if (visitedVertexName === vertexName) {
                  var predecessorVertices = getPredecessorVertices(), successorVertices = predecessorVertices, cycle = _cycle.default.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);
                  cycles.push(cycle);
                }
                var cyclesLength = cycles.length, terminate = cyclesLength > 0;
                return terminate;
              });
            });
            var cyclesLength1 = cycles.length;
            if (cyclesLength1 > 0) {
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
            var _this = this;
            vertexNames.forEach(function(vertexName) {
              return _this.addVertexByVertexName(vertexName);
            });
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
            var _this = this;
            vertexNames.forEach(function(vertexName) {
              return _this.removeVertexByVertexName(vertexName);
            });
          }
        },
        {
          key: "addEdge",
          value: function addEdge(edge) {
            var success = this.directedAcyclicGraph.addEdge(edge);
            if (!success) {
              var cyclicEdgesIncludesEdge = (0, _edge1).checkEdgesIncludesEdge(edge, this.cyclicEdges);
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
            var _this = this;
            edges.forEach(function(edge) {
              return _this.addEdge(edge);
            });
          }
        },
        {
          key: "removeEdge",
          value: function removeEdge(edge, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            var cyclicEdgesIncludesEdge = (0, _edge1).checkEdgesIncludesEdge(edge, this.cyclicEdges), edgePresent = this.directedAcyclicGraph.isEdgePresent(edge), edgeCyclic = cyclicEdgesIncludesEdge;
            if (false) {
            } else if (edgeCyclic) {
              var cyclicEdge = edge;
              (0, _edge1).removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
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
            var _this = this;
            edges.forEach(function(edge) {
              return _this.removeEdge(edge, removeStrandedVertices);
            });
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
            var cyclicEdges = (0, _edge1).edgesByTargetVertexName(targetVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
            this.removeEdges(cyclicEdges, removeStrandedVertices);
            this.removeEdges(edges, removeStrandedVertices);
          }
        },
        {
          key: "removeEdgesBySourceVertexName",
          value: function removeEdgesBySourceVertexName(sourceVertexName, param) {
            var removeStrandedVertices = param === void 0 ? false : param;
            var cyclicEdges = (0, _edge1).edgesBySourceVertexName(sourceVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
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
            var _this = this, _this1 = this;
            filter(this.cyclicEdges, function(cyclicEdge) {
              var sourceVertexName = cyclicEdge.getSourceVertexName(), targetVertexName = cyclicEdge.getTargetVertexName(), sourceVertexPresent = _this.isVertexPresentByVertexName(sourceVertexName), targetVertexPresent = _this.isVertexPresentByVertexName(targetVertexName);
              if (sourceVertexPresent && targetVertexPresent) {
                return true;
              }
            });
            filter(this.cyclicEdges, function(cyclicEdge) {
              var edge = cyclicEdge, success = _this1.directedAcyclicGraph.addEdge(edge);
              if (!success) {
                return true;
              }
            });
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
            var vertexNames = (0, _vertex).vertexNamesFromVertexLiterals(vertexLiterals), edges = (0, _edge1).edgesFromVertexLiterals(vertexLiterals), directedGraph2 = DirectedGraph2.fromVertexNamesAndEdges(vertexNames, edges);
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
              var orderedVertices = graph.getOrderedVertices(), cyclicEdges1 = [], directedAcyclicGraph1 = _occamPearceKelly.DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);
              directedGraph2 = new DirectedGraph2(cyclicEdges1, directedAcyclicGraph1);
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
    var _edge = _interopRequireDefault(require_edge2());
    var _directedGraph = _interopRequireDefault(require_directedGraph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL29jY2FtLXBlYXJjZS1rZWxseS9zcmMvZWRnZS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAibm9kZV9tb2R1bGVzL29jY2FtLXBlYXJjZS1rZWxseS9zcmMvdmVydGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL2RpcmVjdGVkQWN5Y2xpY0dyYXBoLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL2luZGV4LmpzIiwgInNyYy9lZGdlLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy9lZGdlLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy92ZXJ0ZXguanMiLCAibm9kZV9tb2R1bGVzL29jY2FtLWthaG4vc3JjL3JlbWFpbmluZ0VkZ2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy9ncmFwaC5qcyIsICJub2RlX21vZHVsZXMvb2NjYW0ta2Fobi9zcmMvaW5kZXguanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgInNyYy9wYXJ0aWFsQ3ljbGUuanMiLCAic3JjL3V0aWxpdGllcy9lZGdlLmpzIiwgInNyYy9kaXJlY3RlZEdyYXBoLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKSAmJiAodGhpcy50YXJnZXRWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkgfHwgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjggPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0MgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRSA9IFwiY29udGVudC10eXBlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgc3BsaWNlLFxuICByZXBsYWNlLFxuICBmaWx0ZXIsXG4gIGZpbmQsXG4gIHBydW5lLFxuICBwYXRjaCxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLywgRU1QVFlfU1RSSU5HKS5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgLy8vXG5cbiAgY29uc3QgcGF0aE5hbWUgPSAoL1xcLy8udGVzdChwYXRoKSA9PT0gZmFsc2UpO1xuXG4gIHJldHVybiBwYXRoTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3ROYW1lKHBhdGgpIHtcbiAgY29uc3QgcGF0aE5hbWUgPSBpc1BhdGhOYW1lKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoVG9wbW9zdE5hbWUgPSAocGF0aE5hbWUgJiYgcGF0aEFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSAhL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoQWJzb2x1dGVQYXRoID0gL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgodG9wbW9zdE5hbWUsIGFic29sdXRlUGF0aCkge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGggPSByZWdFeHAudGVzdChhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBjb21iaW5lZFBhdGggPSBudWxsO1xuXG4gIGNvbnN0IHBhdGhOYW1lcyA9IHBhdGguc3BsaXQoL1xcLy8pLFxuICAgICAgICByZWxhdGl2ZVBhdGhOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgvXFwvLyk7XG5cbiAgbGV0IGxhc3RQYXRoTmFtZSxcbiAgICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi5cIikge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuLlwiKSAmJiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgICBwYXRoTmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gICAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tYmluZWRQYXRoTmFtZXMgPSBbXS5jb25jYXQocGF0aE5hbWVzKS5jb25jYXQocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gICAgY29tYmluZWRQYXRoID0gY29tYmluZWRQYXRoTmFtZXMuam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25zdCBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBDT0xPTl9DSEFSQUNURVIgPSBcIjpcIjtcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkRfQ0hBUkFDVEVSID0gXCImXCI7XG5leHBvcnQgY29uc3QgTElORV9GRUVEX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBvd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksXG4gICAgICAgIGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIG92ZXJ3cml0dGVuID0gb3duUHJvcGVydHlOYW1lcy5zb21lKChvd25Qcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWUgPSBvd25Qcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbb3duUHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmICghb3ZlcndyaXR0ZW4pIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3Qgb3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLFxuICAgICAgICBsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzID0gb3duUHJvcGVydHlOYW1lcy5tYXAoKG93blByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9IG93blByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXNJbmNsdWRlc0xvd2VyY2FzZU5hbWUgPSBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzLmluY2x1ZGVzKGxvd2VyY2FzZU5hbWUpO1xuXG4gIGlmICghbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSkge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9ydEZyb21Ib3N0KGhvc3QpIHtcbiAgbGV0IHBvcnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpbmRleCA9IHNlY29uZE1hdGNoLmluZGV4T2YoQ09MT05fQ0hBUkFDVEVSKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY29uc3Qgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCk7XG5cbiAgICBwb3J0ID0gc2VjdXJlID8gNDQzIDogODA7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHBvcnRTdHJpbmcgPSBzZWNvbmRNYXRjaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gICAgcG9ydCA9IE51bWJlcihwb3J0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJlRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBzZWN1cmUgPSAvXmh0dHBzOlxcL1xcLy8udGVzdChob3N0KTtcblxuICByZXR1cm4gc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdG5hbWVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXjpcXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGhvc3RuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocXVlcnkpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZSgocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21RdWVyeSxcbiAgdXJsRnJvbUhvc3RVUklBbmRRdWVyeVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaywgaW5kZXgpID0+IHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBQ0NFUFQsIENPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBib2R5ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRDtcblxuICB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgYm9keSwgaGVhZGVycywgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSksXG4gICAgICAgIGFjY2VwdCA9IGhlYWRlcnNbQUNDRVBUXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gYm9keSwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGJvZHkgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgYm9keSA9IHJlc3BvbnNlVGV4dDtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gYm9keSwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgYm9keSA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBib2R5ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGJvZHksIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVCwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFLCBjb250ZW50VHlwZSk7XG4gIH1cblxuICAoYm9keSAhPT0gbnVsbCkgP1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoYm9keSkgOlxuICAgICAgeG1sSHR0cFJlcXVlc3Quc2VuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcmVxdWVzdFxufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVCwgIC8vL1xuICAgICAgICB2YWx1ZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRSwgIC8vL1xuICAgICAgICB2YWx1ZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclZlcnRpY2VzKHZlcnRpY2VzKSB7ICAvLy9cbiAgdmVydGljZXMuc29ydCgoZmlyc3RWZXJ0ZXgsIHNlY29uZFZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBmaXJzdFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gc2Vjb25kVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RWZXJ0ZXhJbmRleCA8IHNlY29uZFZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RWZXJ0ZXhJbmRleCA+IHNlY29uZFZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSB2ZXJ0aWNlczsgIC8vL1xuXG4gIHJldHVybiBvcmRlcmVkVmVydGljZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzLCBvcmRlclZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV0gPSBwcmVkZWNlc3NvclZlcnRleDtcblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCA9IHt9KSB7XG4gICAgdGhpcy5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHByZWRlY2Vzc29yVmVydGljZXMubWFwKChwcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLm1hcCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGV4TmFtZXMubWFwKChwcmVkZWNlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXhNYXBbcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB0aGlzLmdldFN1Y2Nlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gT2JqZWN0LmtleXMoc3VjY2Vzc29yVmVydGV4TWFwKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRleE5hbWVzLm1hcCgoc3VjY2Vzc29yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKHByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIHJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSAodmlzaXRlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcbiAgICAgIFxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0aGlzLmJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG4gIFxuICBpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlSW5jb21pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cbiAgICBcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpKTtcblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgcmVtb3ZlT3V0Z29pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpKTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMucHVzaChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRpY2VzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spIHtcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy52aXNpdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHRoaXM7ICAvLy9cblxuICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjayk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH1cblxuICByZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjaykge1xuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdGhpczsgIC8vL1xuXG4gICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB2aXNpdGVkVmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjayk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVzZXRWaXNpdGVkKCkge1xuICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmN5VmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3lWZXJ0ZXg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzLCBvcmRlclZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9ICh2ZXJ0aWNlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRleE1hcFZhbHVlczsgLy8vXG5cbiAgICByZXR1cm4gdmVydGljZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBLZXlzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TWFwS2V5czsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGVkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50ID0gKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkgJiYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSAhPT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgICAgXG4gICAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBpbnZhbGlkYXRpbmdFZGdlID0gKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpO1xuXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnZhbGlkYXRpbmdFZGdlID9cbiAgICAgICAgICAgICAgICAgICAgYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGljZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZVByZXNlbnQgPSB0aGlzLmlzRWRnZVByZXNlbnRCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXgucmVtb3ZlT3V0Z29pbmdFZGdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbmNvbWluZ0VkZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgcmVtb3ZlZEVkZ2VzID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZW1vdmVkRWRnZXMgPSBbXTtcblxuICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IG5ldyBFZGdlKHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSwgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5nZXROYW1lKCksICAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IG5ldyBFZGdlKHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSwgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjb25zdCBkZWxldGVkVmVydGV4ID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgYWZmZWN0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLnJlZHVjZSgoYWZmZWN0ZWRWZXJ0aWNlcywgdmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEFmZmVjdGVkID0gKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KTtcblxuICAgICAgICAgICAgICBpZiAodmVydGV4QWZmZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgYWZmZWN0ZWRWZXJ0aWNlcy5wdXNoKGFmZmVjdGVkVmVydGV4KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRpY2VzO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICBhZmZlY3RlZFZlcnRpY2VzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4KSA9PiBhZmZlY3RlZFZlcnRleC5kZWNyZW1lbnRJbmRleCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlZEVkZ2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gbmV3IERpcmVjdGVkQWN5Y2xpY0dyYXBoKHZlcnRleE1hcCk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgY29uc3QgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBuZXcgRGlyZWN0ZWRBY3ljbGljR3JhcGgodmVydGV4TWFwKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcykge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21PcmRlcmVkVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKTtcbiAgICBcbiAgICBhZGRFZGdlc1RvVmVydGljZXMob3JkZXJlZFZlcnRpY2VzLCB2ZXJ0ZXhNYXApO1xuICAgIFxuICAgIGNvbnN0IGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gbmV3IERpcmVjdGVkQWN5Y2xpY0dyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRpY2VzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKHNvdXJjZVZlcnRleCksXG4gICAgICAgIGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID0gbGFzdChmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMpLFxuICAgICAgICByZXN1bHRzSW5DeWNsZSA9IChsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcblxuICBpZiAoIXJlc3VsdHNJbkN5Y2xlKSB7XG4gICAgY29uc3QgYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMoKTtcblxuICAgIG9yZGVyVmVydGljZXMoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyk7XG5cbiAgICBvcmRlclZlcnRpY2VzKGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyk7XG5cbiAgICBjb25zdCBhZmZlY3RlZFZlcnRpY2VzID0gW10uY29uY2F0KGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMpLmNvbmNhdChmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMpLFxuICAgICAgICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcyA9IGFmZmVjdGVkVmVydGljZXMubWFwKChhZmZlY3RlZFZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRleEluZGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzLnNvcnQoKGluZGV4QSwgaW5kZXhCKSA9PiAoaW5kZXhBIC0gaW5kZXhCKSk7XG5cbiAgICBhZmZlY3RlZFZlcnRpY2VzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4SW5kaWNlc1tpbmRleF07XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4LnNldEluZGV4KGFmZmVjdGVkVmVydGV4SW5kZXgpO1xuICAgIH0pO1xuXG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gIGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuICBcbiAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfSk7XG4gIFxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcykge1xuICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcbiAgXG4gIG9yZGVyZWRWZXJ0aWNlcy5mb3JFYWNoKChvcmRlcmVkVmVydGV4LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBvcmRlcmVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gYWRkRWRnZXNUb1ZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcywgdmVydGV4TWFwKSB7XG4gIG9yZGVyZWRWZXJ0aWNlcy5mb3JFYWNoKChvcmRlcmVkVmVydGV4KSA9PiB7XG4gICAgb3JkZXJlZFZlcnRleC5mb3JFYWNoT3V0Z29pbmdFZGdlKChvdXRnb2luZ0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBvdXRnb2luZ0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IG91dGdvaW5nRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4TWFwW2ltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZV0sIC8vL1xuICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdmVydGV4TWFwW2ltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVdOyAvLy9cblxuICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkZ2UgfSBmcm9tIFwiLi9lZGdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIi4vZGlyZWN0ZWRBY3ljbGljR3JhcGhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWRnZSB9IGZyb20gXCJvY2NhbS1wZWFyY2Uta2VsbHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICB0aGlzLnNvdXJjZVZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lO1xuICAgIHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9IHRhcmdldFZlcnRleE5hbWU7XG4gIH1cblxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluY29taW5nRWRnZXMgPSBpbmNvbWluZ0VkZ2VzO1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcyA9IG91dGdvaW5nRWRnZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmNvbWluZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmluY29taW5nRWRnZXM7XG4gIH1cblxuICBnZXRPdXRnb2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm91dGdvaW5nRWRnZXM7XG4gIH1cbiAgXG4gIGlzU3RhcnRpbmcoKSB7XG4gICAgY29uc3QgaW5jb21pbmdFZGdlc0xlbmd0aCA9IHRoaXMuaW5jb21pbmdFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgc3RhcnRpbmcgPSAoaW5jb21pbmdFZGdlc0xlbmd0aCA9PT0gMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBzdGFydGluZztcbiAgfVxuICBcbiAgYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5wdXNoKGluY29taW5nRWRnZSk7XG4gIH1cblxuICBhZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLnB1c2gob3V0Z29pbmdFZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5jb21pbmdFZGdlcy5pbmRleE9mKGluY29taW5nRWRnZSk7XG4gICAgXG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBmb3JFYWNoSW5jb21pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaE91dGdvaW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBpbmNvbWluZ0VkZ2VzID0gW10sXG4gICAgICAgICAgb3V0Z29pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1haW5pbmdFZGdlcyB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzKSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBlZGdlc0xlbmd0aCA9IHRoaXMuZWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZWRnZXNMZW5ndGggIT09IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBmb3JFYWNoRWRnZUJ5VmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICB0aGlzLmVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgY2FsbGJhY2soc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5pbXBvcnQgUmVtYWluaW5nRWRnZXMgZnJvbSBcIi4vcmVtYWluaW5nRWRnZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvcihvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKSB7XG4gICAgdGhpcy5vcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGljZXM7XG4gICAgdGhpcy5yZW1haW5pbmdFZGdlcyA9IHJlbWFpbmluZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLm9yZGVyZWRWZXJ0aWNlcztcbiAgfVxuXG4gIGdldFJlbWFpbmluZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ0VkZ2VzO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHsgcmV0dXJuIHRoaXMucmVtYWluaW5nRWRnZXMuYXJlQ3ljbGVzUHJlc2VudCgpOyB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFsc0FuZFZlcnRleE1hcCh2ZXJ0ZXhMaXRlcmFscywgdmVydGV4TWFwKSxcbiAgICAgICAgICBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGljZXNGcm9tVmVydGV4TWFwQW5kRWRnZXModmVydGV4TWFwLCBlZGdlcyksXG4gICAgICAgICAgcmVtYWluaW5nRWRnZXMgPSBuZXcgUmVtYWluaW5nRWRnZXMoZWRnZXMpLFxuICAgICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKG9yZGVyZWRWZXJ0aWNlcywgcmVtYWluaW5nRWRnZXMpO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGVkZ2VzID0gZWRnZXMuc2xpY2UoKTsgIC8vL1xuXG4gICAgY29uc3QgdmVydGV4TWFwID0gdmVydGV4TWFwRnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGljZXNGcm9tVmVydGV4TWFwQW5kRWRnZXModmVydGV4TWFwLCBlZGdlcyksXG4gICAgICAgICAgcmVtYWluaW5nRWRnZXMgPSBuZXcgUmVtYWluaW5nRWRnZXMoZWRnZXMpLFxuICAgICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKG9yZGVyZWRWZXJ0aWNlcywgcmVtYWluaW5nRWRnZXMpO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcblxuICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgY29uc3QgdmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghc291cmNlVmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSA9IHNvdXJjZVZlcnRleDtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0gPSB0YXJnZXRWZXJ0ZXg7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4TWFwW3NvdXJjZVZlcnRleE5hbWVdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgb3V0Z29pbmdFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgc291cmNlVmVydGV4LmFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpO1xuXG4gICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG5cbiAgICBhbmNlc3RvclZlcnRleE5hbWVzLmZvckVhY2goKGFuY2VzdG9yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKCFhbmNlc3RvclZlcnRleEV4aXN0cykge1xuICAgICAgICBjb25zdCBhbmNlc3RvclZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZShhbmNlc3RvclZlcnRleE5hbWUpO1xuXG4gICAgICAgIHZlcnRleE1hcFthbmNlc3RvclZlcnRleE5hbWVdID0gYW5jZXN0b3JWZXJ0ZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzQW5kVmVydGV4TWFwKHZlcnRleExpdGVyYWxzLCB2ZXJ0ZXhNYXApIHtcbiAgY29uc3QgZWRnZXMgPSBbXTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIGluY29taW5nRWRnZSA9IGVkZ2UsICAvLy9cbiAgICAgICAgICAgIG91dGdvaW5nRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcblxuICAgICAgc291cmNlVmVydGV4LmFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpIHtcbiAgY29uc3Qgb3JkZXJlZFZlcnRleE5hbWVzID0gW10sXG4gICAgICAgIHN0YXJ0aW5nVmVydGV4TmFtZXMgPSBzdGFydGluZ1ZlcnRleE5hbWVzRnJvbVZlcnRleE1hcCh2ZXJ0ZXhNYXApLFxuICAgICAgICByZW1vdmVkRWRnZXMgPSBbXTtcblxuICBsZXQgc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA9IHN0YXJ0aW5nVmVydGV4TmFtZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChzdGFydGluZ1ZlcnRleE5hbWVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHN0YXJ0aW5nVmVydGV4TmFtZSA9IHN0YXJ0aW5nVmVydGV4TmFtZXMucG9wKCksXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWUgPSBzdGFydGluZ1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcy5wdXNoKG9yZGVyZWRWZXJ0ZXhOYW1lKTtcblxuICAgIGJhY2t3YXJkc0ZvckVhY2goZWRnZXMsIChlZGdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgZWRnZVN0YXJ0aW5nID0gKHNvdXJjZVZlcnRleE5hbWUgPT09IHN0YXJ0aW5nVmVydGV4TmFtZSk7IC8vL1xuXG4gICAgICBpZiAoZWRnZVN0YXJ0aW5nKSB7XG4gICAgICAgIGVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgICAgIGluY29taW5nRWRnZSA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleFN0YXJ0aW5nID0gdGFyZ2V0VmVydGV4LmlzU3RhcnRpbmcoKTtcblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RhcnRpbmcpIHtcbiAgICAgICAgICBjb25zdCBzdGFydGluZ1ZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzLnB1c2goc3RhcnRpbmdWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA9IHN0YXJ0aW5nVmVydGV4TmFtZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgZWRnZXNMZW5ndGggPSBlZGdlcy5sZW5ndGg7XG5cbiAgaWYgKGVkZ2VzTGVuZ3RoID09PSAwKSB7XG4gICAgcmVtb3ZlZEVkZ2VzLmZvckVhY2goKHJlbW92ZWRFZGdlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcmVtb3ZlZEVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgICAgaW5jb21pbmdFZGdlID0gcmVtb3ZlZEVkZ2U7IC8vL1xuICAgICAgXG4gICAgICB0YXJnZXRWZXJ0ZXguYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IG9yZGVyZWRWZXJ0ZXhOYW1lcy5tYXAoKG9yZGVyZWRWZXJ0ZXhOYW1lKSA9PiB2ZXJ0ZXhNYXBbb3JkZXJlZFZlcnRleE5hbWVdKTtcblxuICByZXR1cm4gb3JkZXJlZFZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBzdGFydGluZ1ZlcnRleE5hbWVzRnJvbVZlcnRleE1hcCh2ZXJ0ZXhNYXApIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyh2ZXJ0ZXhNYXApLFxuICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzID0gdmVydGV4TmFtZXMucmVkdWNlKChzdGFydGluZ1ZlcnRleE5hbWVzLCB2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGV4TWFwW3ZlcnRleE5hbWVdLFxuICAgICAgICAgICAgICAgIHZlcnRleFN0YXJ0aW5nID0gdmVydGV4LmlzU3RhcnRpbmcoKTtcblxuICAgICAgICAgIGlmICh2ZXJ0ZXhTdGFydGluZykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzLnB1c2goc3RhcnRpbmdWZXJ0ZXhOYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RhcnRpbmdWZXJ0ZXhOYW1lc1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIHN0YXJ0aW5nVmVydGV4TmFtZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JhcGggfSBmcm9tIFwiLi9ncmFwaFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVNYXAgPSB7fTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIHZlcnRleE5hbWVNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXhOYW1lO1xuICAgIH1cblxuICAgICAgY29uc3Qgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eShhbmNlc3RvclZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoIWFuY2VzdG9yVmVydGV4RXhpc3RzKSB7XG4gICAgICAgIHZlcnRleE5hbWVNYXBbYW5jZXN0b3JWZXJ0ZXhOYW1lXSA9IGFuY2VzdG9yVmVydGV4TmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdmVydGV4TmFtZU1hcEtleXMgPSBPYmplY3Qua2V5cyh2ZXJ0ZXhOYW1lTWFwKSxcbiAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lTWFwS2V5czsgIC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaykge1xuICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTsgIC8vL1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICB2aXNpdGVkVmVydGljZXMuZm9yRWFjaCgodmlzaXRlZFZlcnRleCkgPT4gdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKSk7XG5cbiAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcblxuICBmdW5jdGlvbiBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgY2FsbGJhY2ssIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGlmICh2ZXJ0ZXgudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICB2ZXJ0ZXgudmlzaXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgIGxldCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGV4TmFtZXMpIHtcbiAgICB0aGlzLnZlcnRleE5hbWVzID0gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHN1Y2Nlc3NvclZlcnRpY2VzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoc3VjY2Vzc29yVmVydGljZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFN1Y2Nlc3NvclZlcnRleCA9IGZpcnN0KHN1Y2Nlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICAgIGZpcnN0U3VjY2Vzc29yVmVydGV4TmFtZSA9IGZpcnN0U3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0U3VjY2Vzc29yVmVydGV4TmFtZSA9PT0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgICAgc3VjY2Vzc29yVmVydGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRDeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHBhcnRpYWxDeWNsZS5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhzdWNjZXNzb3JWZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSAodmVydGV4TmFtZSA9PT0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW10uY29uY2F0KGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKS5jb25jYXQocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcykuY29uY2F0KGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW10uY29uY2F0KHByZWRlY2Vzc29yVmVydGV4TmFtZXMpLmNvbmNhdChjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSkuY29uY2F0KGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKS5jb25jYXQoc3VjY2Vzc29yVmVydGV4TmFtZXMpLFxuICAgICAgICAgIGN5Y2xlID0gbmV3IEN5Y2xlKHZlcnRleE5hbWVzKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWFsQ3ljbGUge1xuICBjb25zdHJ1Y3RvcihwcmVkZWNlc3NvclZlcnRpY2VzLCBjeWNsaWNFZGdlKSB7XG4gICAgdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICB0aGlzLmN5Y2xpY0VkZ2UgPSBjeWNsaWNFZGdlO1xuICB9XG4gIFxuICBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2U7XG4gIH1cblxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzLm1hcCgocHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuICBcbiAgZ2V0Q3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMuc2xpY2UoKTsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPSBwcmVkZWNlc3NvclZlcnRpY2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RQcmVkZWNlc3NvclZlcnRleCA9IGZpcnN0KHByZWRlY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgICAgZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBmaXJzdFByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIGlmIChmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSA9PT0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnRpYWxDeWNsZSA9IG5ldyBQYXJ0aWFsQ3ljbGUocHJlZGVjZXNzb3JWZXJ0aWNlcywgY3ljbGljRWRnZSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnRpYWxDeWNsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBwcnVuZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJlbW92ZSA9IHBydW5lOyAgLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCBlZGdlcyA9IFtdO1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goKHZlcnRleExpdGVyYWwpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50ID0gZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcyA9IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG5cbiAgICBhbmNlc3RvclZlcnRleE5hbWVzLmZvckVhY2goKGFuY2VzdG9yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGFuY2VzdG9yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZSwgLy8vXG4gICAgICAgIGVkZ2VzSW5jbHVkZXNFZGdlID0gZWRnZXMuc29tZSgoZWRnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVkZ2UyID0gZWRnZSwgLy8vXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGVkZ2UxLm1hdGNoKGVkZ2UyKTtcblxuICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlZGdlc0luY2x1ZGVzRWRnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVkZ2VGcm9tRWRnZXMoZWRnZSwgZWRnZXMpIHtcbiAgY29uc3QgZWRnZTEgPSBlZGdlOyAvLy9cblxuICByZW1vdmUoZWRnZXMsIChlZGdlKSA9PiB7XG4gICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7IC8vL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMuZmlsdGVyKChlZGdlKSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gZWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCBlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRnZSB9IGZyb20gXCIuL2VkZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2RpcmVjdGVkR3JhcGhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuY29uc3QgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuZGlyZWN0ZWRHcmFwaC5hZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXMoW1xuICBcIi4vZWFzeS1sYXlvdXRcIixcbiAgXCIuL2Vhc3ktd2l0aC1zdHlsZVwiLFxuICBcIi4vb2NjYW0tbGV4ZXJzXCIsXG4gIFwiLi93aXRoLXN0eWxlXCJcbl0pO1xuXG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2VCeVZlcnRleE5hbWVzKFwiLi9lYXN5LXdpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktbGF5b3V0XCIpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhcIi4vd2l0aC1zdHlsZVwiLCBcIi4vZWFzeS13aXRoLXN0eWxlXCIpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhcIi4vZWFzeS1sYXlvdXRcIiwgXCIuL29jY2FtLWxleGVyc1wiKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZUJ5VmVydGV4TmFtZXMoXCIuL2Vhc3ktd2l0aC1zdHlsZVwiLCBcIi4vZWFzeS1sYXlvdXRcIik7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2VCeVZlcnRleE5hbWVzKFwiLi9vY2NhbS1sZXhlcnNcIiwgXCIuL3dpdGgtc3R5bGVcIik7XG5cbmRpcmVjdGVkR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKFwiLi9vY2NhbS1sZXhlcnNcIik7XG5cbmRlYnVnZ2VyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFcUIsUUFBTiwyQkFBUTtxQkFDVCxrQkFBa0Isa0JBQWdCOzhCQUQzQjtBQUVqQixhQUFLLG1CQUFtQjtBQUN4QixhQUFLLG1CQUFtQjs7bUJBSFAsT0FBSTs7VUFNdkIsS0FBQTtpQkFBQSwrQkFBc0I7QUFDcEIsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsK0JBQXNCO0FBQ3BCLG1CQUFPLEtB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
