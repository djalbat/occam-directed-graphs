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
    exports.CONTENT_LENGTH = exports.CONTENT_TYPE = exports.EMPTY_STRING = exports.ACCEPT = exports.CTRL_C = exports.ERROR = exports.UTF8 = void 0;
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
    var CONTENT_LENGTH = "content-length";
    exports.CONTENT_LENGTH = CONTENT_LENGTH;
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
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _http = require_http();
    var _constants = require_constants();
    function get(host, uri, query, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var body = null, method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAccept(headers, accept);
      request(host, uri, query, method, headers, body, callback);
    }
    function post(host, uri, query, headers, body, callback) {
      if (callback === void 0) {
        callback = body;
        body = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAccept(headers, accept);
      underwriteContentType(headers, contentType);
      request(host, uri, query, method, headers, body, callback);
    }
    function request(host, uri, query, method, headers, body1, callback) {
      var url = (0, _http).urlFromHostURIAndQuery(host, uri, query), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = body1, jsonString = JSON.stringify(json), content = jsonString, contentLength = content.length;
        underwriteContentLength(headers, contentLength);
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
    function underwriteAccept(headers, accept) {
      var name = _constants.ACCEPT, value = accept;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentType(headers, contentTYpe) {
      var name = _constants.CONTENT_TYPE, value = contentTYpe;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentLength(headers, contentLength) {
      var name = _constants.CONTENT_LENGTH, value = contentLength;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL29jY2FtLXBlYXJjZS1rZWxseS9zcmMvZWRnZS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAibm9kZV9tb2R1bGVzL29jY2FtLXBlYXJjZS1rZWxseS9zcmMvdmVydGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL2RpcmVjdGVkQWN5Y2xpY0dyYXBoLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL2luZGV4LmpzIiwgInNyYy9lZGdlLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy9lZGdlLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy92ZXJ0ZXguanMiLCAibm9kZV9tb2R1bGVzL29jY2FtLWthaG4vc3JjL3JlbWFpbmluZ0VkZ2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy9ncmFwaC5qcyIsICJub2RlX21vZHVsZXMvb2NjYW0ta2Fobi9zcmMvaW5kZXguanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgInNyYy9wYXJ0aWFsQ3ljbGUuanMiLCAic3JjL3V0aWxpdGllcy9lZGdlLmpzIiwgInNyYy9kaXJlY3RlZEdyYXBoLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKSAmJiAodGhpcy50YXJnZXRWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkgfHwgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjggPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0MgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRSA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9MRU5HVEggPSAnY29udGVudC1sZW5ndGgnO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IExJTkVfRkVFRF9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3Qgb3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLFxuICAgICAgICBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBvdmVyd3JpdHRlbiA9IG93blByb3BlcnR5TmFtZXMuc29tZSgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAobG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICBoZWFkZXJzW293blByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoIW92ZXJ3cml0dGVuKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcyA9IG93blByb3BlcnR5TmFtZXMubWFwKChvd25Qcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWUgPSBvd25Qcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lID0gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcy5pbmNsdWRlcyhsb3dlcmNhc2VOYW1lKTtcblxuICBpZiAoIWxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXNJbmNsdWRlc0xvd2VyY2FzZU5hbWUpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2ssIGluZGV4KSA9PiB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5pbXBvcnQgeyBBQ0NFUFQsIENPTlRFTlRfVFlQRSwgQ09OVEVOVF9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSBudWxsLFxuICAgICAgICBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGJvZHksIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgYm9keSwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGJvZHk7XG4gICAgYm9keSA9IGhlYWRlcnM7XG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGUoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgYm9keSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVdIHx8IG51bGwsXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKGNvbnRlbnRUeXBlID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgIGNvbnN0IGpzb24gPSBib2R5LCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nLCAvLy9cbiAgICAgICAgICBjb250ZW50TGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG5cbiAgICB1bmRlcndyaXRlQ29udGVudExlbmd0aChoZWFkZXJzLCBjb250ZW50TGVuZ3RoKTtcblxuICAgIGJvZHkgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgYm9keSA9IHJlc3BvbnNlVGV4dDtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gYm9keSwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgYm9keSA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBib2R5ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGJvZHksIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVCwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFLCBjb250ZW50VHlwZSk7XG4gIH1cblxuICAoYm9keSAhPT0gbnVsbCkgP1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoYm9keSkgOlxuICAgICAgeG1sSHR0cFJlcXVlc3Quc2VuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcmVxdWVzdFxufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMsIGFjY2VwdCkge1xuICBjb25zdCBuYW1lID0gQUNDRVBULCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50TGVuZ3RoKGhlYWRlcnMsIGNvbnRlbnRMZW5ndGgpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfTEVOR1RILCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudExlbmd0aDsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4TmFtZSA9IHZlcnRleC5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcykgeyAgLy8vXG4gIHZlcnRpY2VzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gdmVydGljZXM7ICAvLy9cblxuICByZXR1cm4gb3JkZXJlZFZlcnRpY2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcywgb3JkZXJWZXJ0aWNlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHZpc2l0ZWQsIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNWaXNpdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0ZWQ7XG4gIH1cblxuICBpc1N0cmFuZGVkKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgc3RyYW5kZWQgPSAoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPT09IDApICYmIChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9PT0gMCkpO1xuXG4gICAgcmV0dXJuIHN0cmFuZGVkO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLm1hcCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLm1hcCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TWFwKHByZWRlY2Vzc29yVmVydGV4TWFwID0ge30pIHtcbiAgICB0aGlzLmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleE1hcFtwcmVkZWNlc3NvclZlcnRleE5hbWVdID0gcHJlZGVjZXNzb3JWZXJ0ZXg7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4LmdldFByZWRlY2Vzc29yVmVydGV4TWFwKHByZWRlY2Vzc29yVmVydGV4TWFwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE1hcChzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZSA9IHN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4LmdldFN1Y2Nlc3NvclZlcnRleE1hcChzdWNjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLm1hcCgocHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXMgPSB0aGlzLmdldFN1Y2Nlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5tYXAoKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IHN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE1hcCA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gT2JqZWN0LmtleXMocHJlZGVjZXNzb3JWZXJ0ZXhNYXApLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRleE5hbWVzLm1hcCgocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV07XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRTdWNjZXNzb3JWZXJ0ZXhNYXAoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IE9iamVjdC5rZXlzKHN1Y2Nlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0ZXhOYW1lcy5tYXAoKHN1Y2Nlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyhwcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRQcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgIG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMob3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG4gIFxuICByZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYXRlID0gKHZpc2l0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG4gICAgICBcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRWaXNpdGVkKHZpc2l0ZWQpIHtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICB9XG5cbiAgZGVjcmVtZW50SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleC0tO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5pbmRleE9mKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbiAgXG4gIHJlbW92ZUluY29taW5nRWRnZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpczsgLy8vXG4gICAgXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmZvckVhY2goKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSk7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgfVxuXG4gIHJlbW92ZU91dGdvaW5nRWRnZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSk7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzID0gW107XG4gIH1cblxuICBhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTsgIC8vL1xuXG4gICAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGljZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRpY2VzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRpY2VzKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTsgIC8vL1xuXG4gICAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGljZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICBpZiAodGVybWluYXRlICE9PSB0cnVlKSB7XG4gICAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgdGVybWluYXRlID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spIHtcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy52aXNpdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHRoaXM7ICAvLy9cblxuICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgdGVybWluYXRlID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlc2V0VmlzaXRlZCgpIHtcbiAgICB0aGlzLnZpc2l0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIHZpc2l0ZWQsIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcywgb3JkZXJWZXJ0aWNlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRBY3ljbGljR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXApIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHZlcnRleE1hcDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAodmVydGljZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRhcmdldFZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgc291cmNlVmVydGV4TmFtZXMuZm9yRWFjaCgoc291cmNlVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgdGFyZ2V0VmVydGV4TmFtZXMuZm9yRWFjaCgodGFyZ2V0VmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCA9IChzb3VyY2VWZXJ0ZXggIT09IG51bGwpICYmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSB2ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKTtcblxuICAgIHJldHVybiBvcmRlcmVkVmVydGV4TmFtZXM7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleE5hbWUgIT09IHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICAgIFxuICAgICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgaW52YWxpZGF0aW5nRWRnZSA9IChzb3VyY2VWZXJ0ZXhJbmRleCA+IHRhcmdldFZlcnRleEluZGV4KTtcblxuICAgICAgICBzdWNjZXNzID0gaW52YWxpZGF0aW5nRWRnZSA/XG4gICAgICAgICAgICAgICAgICAgIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRpY2VzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSA6XG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgc291cmNlVmVydGV4LnJlbW92ZU91dGdvaW5nRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW5jb21pbmdFZGdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHJlbW92ZWRFZGdlcyA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgcmVtb3ZlZEVkZ2VzID0gW107XG5cbiAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBuZXcgRWRnZShyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLCAgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBuZXcgRWRnZShyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY29uc3QgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICBkZWxldGVkVmVydGV4SW5kZXggPSBkZWxldGVkVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICAgIGFmZmVjdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5yZWR1Y2UoKGFmZmVjdGVkVmVydGljZXMsIHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBZmZlY3RlZCA9ICh2ZXJ0ZXhJbmRleCA+IGRlbGV0ZWRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgICAgICAgaWYgKHZlcnRleEFmZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgICAgICAgICAgIGFmZmVjdGVkVmVydGljZXMucHVzaChhZmZlY3RlZFZlcnRleCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0aWNlcztcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0aWNlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCkgPT4gYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZWRFZGdlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IG5ldyBEaXJlY3RlZEFjeWNsaWNHcmFwaCh2ZXJ0ZXhNYXApO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0gdmVydGV4TWFwRnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgIGNvbnN0IGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gbmV3IERpcmVjdGVkQWN5Y2xpY0dyYXBoKHZlcnRleE1hcCk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG4gICAgXG4gICAgYWRkRWRnZXNUb1ZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcywgdmVydGV4TWFwKTtcbiAgICBcbiAgICBjb25zdCBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IG5ldyBEaXJlY3RlZEFjeWNsaWNHcmFwaCh2ZXJ0ZXhNYXApO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICBsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9IGxhc3QoZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKSxcbiAgICAgICAgcmVzdWx0c0luQ3ljbGUgPSAobGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgaWYgKCFyZXN1bHRzSW5DeWNsZSkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyhmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMpO1xuXG4gICAgY29uc3QgYWZmZWN0ZWRWZXJ0aWNlcyA9IFtdLmNvbmNhdChiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKS5jb25jYXQoZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKSxcbiAgICAgICAgICBhZmZlY3RlZFZlcnRleEluZGljZXMgPSBhZmZlY3RlZFZlcnRpY2VzLm1hcCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0ZXhJbmRleDtcbiAgICAgICAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcy5zb3J0KChpbmRleEEsIGluZGV4QikgPT4gKGluZGV4QSAtIGluZGV4QikpO1xuXG4gICAgYWZmZWN0ZWRWZXJ0aWNlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleEluZGljZXNbaW5kZXhdO1xuXG4gICAgICBhZmZlY3RlZFZlcnRleC5zZXRJbmRleChhZmZlY3RlZFZlcnRleEluZGV4KTtcbiAgICB9KTtcblxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmZ1bmN0aW9uIHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcbiAgXG4gIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG4gIFxuICBvcmRlcmVkVmVydGljZXMuZm9yRWFjaCgob3JkZXJlZFZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gb3JkZXJlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGFkZEVkZ2VzVG9WZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMsIHZlcnRleE1hcCkge1xuICBvcmRlcmVkVmVydGljZXMuZm9yRWFjaCgob3JkZXJlZFZlcnRleCkgPT4ge1xuICAgIG9yZGVyZWRWZXJ0ZXguZm9yRWFjaE91dGdvaW5nRWRnZSgob3V0Z29pbmdFZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gb3V0Z29pbmdFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBvdXRnb2luZ0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IHRhcmdldFZlcnRleE5hbWUsXG4gICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleE1hcFtpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVdLCAvLy9cbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleE1hcFtpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lXTsgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGdlIH0gZnJvbSBcIi4vZWRnZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCIuL2RpcmVjdGVkQWN5Y2xpY0dyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVkZ2UgfSBmcm9tIFwib2NjYW0tcGVhcmNlLWtlbGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IEVkZ2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG5cbiAgZ2V0U291cmNlVmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleE5hbWU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzID0gaW5jb21pbmdFZGdlcztcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMgPSBvdXRnb2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5jb21pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNvbWluZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0T3V0Z29pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRnb2luZ0VkZ2VzO1xuICB9XG4gIFxuICBpc1N0YXJ0aW5nKCkge1xuICAgIGNvbnN0IGluY29taW5nRWRnZXNMZW5ndGggPSB0aGlzLmluY29taW5nRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0aW5nID0gKGluY29taW5nRWRnZXNMZW5ndGggPT09IDApOyAvLy9cbiAgICBcbiAgICByZXR1cm4gc3RhcnRpbmc7XG4gIH1cbiAgXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cblxuICByZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluY29taW5nRWRnZXMuaW5kZXhPZihpbmNvbWluZ0VkZ2UpO1xuICAgIFxuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZm9yRWFjaEluY29taW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hPdXRnb2luZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5jb21pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIG91dGdvaW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtYWluaW5nRWRnZXMge1xuICBjb25zdHJ1Y3RvcihlZGdlcykge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgZWRnZXNMZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGVkZ2VzTGVuZ3RoICE9PSAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZm9yRWFjaEVkZ2VCeVZlcnRleE5hbWVzKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIGNhbGxiYWNrKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuaW1wb3J0IFJlbWFpbmluZ0VkZ2VzIGZyb20gXCIuL3JlbWFpbmluZ0VkZ2VzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3Iob3JkZXJlZFZlcnRpY2VzLCByZW1haW5pbmdFZGdlcykge1xuICAgIHRoaXMub3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzO1xuICAgIHRoaXMucmVtYWluaW5nRWRnZXMgPSByZW1haW5pbmdFZGdlcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcmVkVmVydGljZXM7XG4gIH1cblxuICBnZXRSZW1haW5pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7IHJldHVybiB0aGlzLnJlbWFpbmluZ0VkZ2VzLmFyZUN5Y2xlc1ByZXNlbnQoKTsgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHNBbmRWZXJ0ZXhNYXAodmVydGV4TGl0ZXJhbHMsIHZlcnRleE1hcCksXG4gICAgICAgICAgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpLFxuICAgICAgICAgIHJlbWFpbmluZ0VkZ2VzID0gbmV3IFJlbWFpbmluZ0VkZ2VzKGVkZ2VzKSxcbiAgICAgICAgICBncmFwaCA9IG5ldyBHcmFwaChvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBlZGdlcyA9IGVkZ2VzLnNsaWNlKCk7ICAvLy9cblxuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpLFxuICAgICAgICAgIHJlbWFpbmluZ0VkZ2VzID0gbmV3IFJlbWFpbmluZ0VkZ2VzKGVkZ2VzKSxcbiAgICAgICAgICBncmFwaCA9IG5ldyBHcmFwaChvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG5cbiAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4ge1xuICAgIGNvbnN0IHZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXNvdXJjZVZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0gPSBzb3VyY2VWZXJ0ZXg7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdID0gdGFyZ2V0VmVydGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgaW5jb21pbmdFZGdlID0gZWRnZSwgIC8vL1xuICAgICAgICAgIG91dGdvaW5nRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgIHNvdXJjZVZlcnRleC5hZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKTtcblxuICAgIHRhcmdldFZlcnRleC5hZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goKHZlcnRleExpdGVyYWwpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50ID0gZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB2ZXJ0ZXhNYXBbYW5jZXN0b3JWZXJ0ZXhOYW1lXSA9IGFuY2VzdG9yVmVydGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFsc0FuZFZlcnRleE1hcCh2ZXJ0ZXhMaXRlcmFscywgdmVydGV4TWFwKSB7XG4gIGNvbnN0IGVkZ2VzID0gW107XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaCgoYW5jZXN0b3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gYW5jZXN0b3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0sXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgICBlZGdlID0gbmV3IEVkZ2Uoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgICBvdXRnb2luZ0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG5cbiAgICAgIHNvdXJjZVZlcnRleC5hZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIG9yZGVyZWRWZXJ0aWNlc0Zyb21WZXJ0ZXhNYXBBbmRFZGdlcyh2ZXJ0ZXhNYXAsIGVkZ2VzKSB7XG4gIGNvbnN0IG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IFtdLFxuICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzID0gc3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSxcbiAgICAgICAgcmVtb3ZlZEVkZ2VzID0gW107XG5cbiAgbGV0IHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPSBzdGFydGluZ1ZlcnRleE5hbWVzLmxlbmd0aDtcblxuICB3aGlsZSAoc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzdGFydGluZ1ZlcnRleE5hbWUgPSBzdGFydGluZ1ZlcnRleE5hbWVzLnBvcCgpLFxuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lID0gc3RhcnRpbmdWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICBvcmRlcmVkVmVydGV4TmFtZXMucHVzaChvcmRlcmVkVmVydGV4TmFtZSk7XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGVkZ2VzLCAoZWRnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIGVkZ2VTdGFydGluZyA9IChzb3VyY2VWZXJ0ZXhOYW1lID09PSBzdGFydGluZ1ZlcnRleE5hbWUpOyAvLy9cblxuICAgICAgaWYgKGVkZ2VTdGFydGluZykge1xuICAgICAgICBlZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhTdGFydGluZyA9IHRhcmdldFZlcnRleC5pc1N0YXJ0aW5nKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0YXJ0aW5nKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRpbmdWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wdXNoKHN0YXJ0aW5nVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPSBzdGFydGluZ1ZlcnRleE5hbWVzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGVkZ2VzTGVuZ3RoID0gZWRnZXMubGVuZ3RoO1xuXG4gIGlmIChlZGdlc0xlbmd0aCA9PT0gMCkge1xuICAgIHJlbW92ZWRFZGdlcy5mb3JFYWNoKChyZW1vdmVkRWRnZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHJlbW92ZWRFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIGluY29taW5nRWRnZSA9IHJlbW92ZWRFZGdlOyAvLy9cbiAgICAgIFxuICAgICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGV4TmFtZXMubWFwKChvcmRlcmVkVmVydGV4TmFtZSkgPT4gdmVydGV4TWFwW29yZGVyZWRWZXJ0ZXhOYW1lXSk7XG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gc3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gT2JqZWN0LmtleXModmVydGV4TWFwKSxcbiAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzLnJlZHVjZSgoc3RhcnRpbmdWZXJ0ZXhOYW1lcywgdmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTdGFydGluZyA9IHZlcnRleC5pc1N0YXJ0aW5nKCk7XG5cbiAgICAgICAgICBpZiAodmVydGV4U3RhcnRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nVmVydGV4TmFtZSA9IHZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wdXNoKHN0YXJ0aW5nVmVydGV4TmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXJ0aW5nVmVydGV4TmFtZXNcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBzdGFydGluZ1ZlcnRleE5hbWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyYXBoIH0gZnJvbSBcIi4vZ3JhcGhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCB2ZXJ0ZXhOYW1lTWFwID0ge307XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICB2ZXJ0ZXhOYW1lTWFwW3ZlcnRleE5hbWVdID0gdmVydGV4TmFtZTtcbiAgICB9XG5cbiAgICAgIGNvbnN0IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcyA9IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaCgoYW5jZXN0b3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICBjb25zdCBhbmNlc3RvclZlcnRleEV4aXN0cyA9IHZlcnRleE5hbWVNYXAuaGFzT3duUHJvcGVydHkoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKCFhbmNlc3RvclZlcnRleEV4aXN0cykge1xuICAgICAgICB2ZXJ0ZXhOYW1lTWFwW2FuY2VzdG9yVmVydGV4TmFtZV0gPSBhbmNlc3RvclZlcnRleE5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHZlcnRleE5hbWVNYXBLZXlzID0gT2JqZWN0LmtleXModmVydGV4TmFtZU1hcCksXG4gICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TmFtZU1hcEtleXM7ICAvLy9cblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4TmFtZSA9IHZlcnRleC5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdmlzaXRlZFZlcnRpY2VzID0gW107XG5cbiAgcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyk7ICAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgfSwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gIHJldHVybiB2aXNpdGVkVmVydGljZXM7XG5cbiAgZnVuY3Rpb24gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gW107XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyh2ZXJ0ZXgsIGNhbGxiYWNrLCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBpZiAodmVydGV4LnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgdmVydGV4LnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICBpZiAodGVybWluYXRlICE9PSB0cnVlKSB7XG4gICAgICB2aXNpdGVkVmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICB0ZXJtaW5hdGUgPSByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgICBsZXQgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKTtcblxuICAgICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5jb25jYXQocHJlZGVjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGljZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE5hbWVzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5zbGljZSgpOyAgLy8vXG4gICAgXG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXNMZW5ndGggPSBzdWNjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKHN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RTdWNjZXNzb3JWZXJ0ZXggPSBmaXJzdChzdWNjZXNzb3JWZXJ0aWNlcyksXG4gICAgICAgICAgICBmaXJzdFN1Y2Nlc3NvclZlcnRleE5hbWUgPSBmaXJzdFN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdFN1Y2Nlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0Q3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBwYXJ0aWFsQ3ljbGUuZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gKHZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLmNvbmNhdChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkuY29uY2F0KHByZWRlY2Vzc29yVmVydGV4TmFtZXMpLmNvbmNhdChjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleE5hbWVzKS5jb25jYXQoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUpLmNvbmNhdChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkuY29uY2F0KHN1Y2Nlc3NvclZlcnRleE5hbWVzKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGlhbEN5Y2xlIHtcbiAgY29uc3RydWN0b3IocHJlZGVjZXNzb3JWZXJ0aWNlcywgY3ljbGljRWRnZSkge1xuICAgIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5jeWNsaWNFZGdlID0gY3ljbGljRWRnZTtcbiAgfVxuICBcbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXggPSBmaXJzdChwcmVkZWNlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICAgIGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBpZiAoZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0aWFsQ3ljbGUgPSBuZXcgUGFydGlhbEN5Y2xlKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0aWFsQ3ljbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgZWRnZXMgPSBbXTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCBlZGdlcykge1xuICBjb25zdCBlZGdlMSA9IGVkZ2UsIC8vL1xuICAgICAgICBlZGdlc0luY2x1ZGVzRWRnZSA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlZGdlMiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlMS5tYXRjaChlZGdlMik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZWRnZXNJbmNsdWRlc0VkZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgIGNvbnN0IGVkZ2UyID0gZWRnZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IGVkZ2UxLm1hdGNoKGVkZ2UyKTtcblxuICAgIGlmICghbWF0Y2hlcykgeyAvLy9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwib2NjYW0ta2FoblwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCJvY2NhbS1wZWFyY2Uta2VsbHlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgUGFydGlhbEN5Y2xlIGZyb20gXCIuL3BhcnRpYWxDeWNsZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscywgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuaW1wb3J0IHsgZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG5cbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlcztcbiAgfVxuXG4gIGdldERpcmVjdGVkQWN5Y2xpY0dyYXBoKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCBpbmNsdWRlQ3ljbGljRWRnZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoaW5jbHVkZUN5Y2xpY0VkZ2VzKSB7XG4gICAgICB0aGlzLmN5Y2xpY0VkZ2VzLmZvckVhY2goKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgICBpZiAoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCBpbmNsdWRlQ3ljbGljRWRnZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlKCkge1xuICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBmaXJzdEN5Y2xpY0VkZ2UsIC8vL1xuICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLmFkZEVkZ2UoZWRnZSkpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQgJiYgdGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGxldCBkaXJlY3RlZEdyYXBoO1xuXG4gICAgY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSBncmFwaC5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldE9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkZ2UgfSBmcm9tIFwiLi9lZGdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9kaXJlY3RlZEdyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbmRpcmVjdGVkR3JhcGguYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKFtcbiAgXCIuL2Vhc3ktbGF5b3V0XCIsXG4gIFwiLi9lYXN5LXdpdGgtc3R5bGVcIixcbiAgXCIuL29jY2FtLWxleGVyc1wiLFxuICBcIi4vd2l0aC1zdHlsZVwiXG5dKTtcblxuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZUJ5VmVydGV4TmFtZXMoXCIuL3dpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktd2l0aC1zdHlsZVwiKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZUJ5VmVydGV4TmFtZXMoXCIuL2Vhc3ktbGF5b3V0XCIsIFwiLi9vY2NhbS1sZXhlcnNcIik7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2VCeVZlcnRleE5hbWVzKFwiLi9lYXN5LXdpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktbGF5b3V0XCIpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhcIi4vb2NjYW0tbGV4ZXJzXCIsIFwiLi93aXRoLXN0eWxlXCIpO1xuXG5kaXJlY3RlZEdyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShcIi4vb2NjYW0tbGV4ZXJzXCIpO1xuXG5kZWJ1Z2dlclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCLFFBQU4sMkJBQVE7cUJBQ1Qsa0JBQWtCLGtCQUFnQjs4QkFEM0I7QUFFakIsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxtQkFBbUI7O21CQUhQLE9BQUk7O1VBTXZCLEtBQUE7aUJBQUEsK0JBQXNCO0FBQ3BCLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLCtCQUFzQjtBQUNwQixtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxlQUFNLE1BQU07QUFDVixnQkFBTSxtQkFBbUIsS0FBSyx1QkFDeEIsbUJBQW1CLEtBQUssdUJBQ3hCLFVBQVksS0FBSyxxQkFBcUIsb0JBQXNCLEtBQUsscUJBQXFCO0FBRTVGLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSx5QkFBZ0IsWUFBWTtBQUMxQixnQkFBTSxVQUFZLEtBQUsscUJBQXFCLGNBQWdCLEtBQUsscUJBQXFCO0FBRXRGLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwrQkFBc0Isa0JBQWtCO0FBQ3RDLGdCQUFNLFVBQVcsS0FBSyxxQkFBcUI7QUFFM0MsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLCtCQUFzQixrQkFBa0I7QUFDdEMsZ0JBQU0sVUFBVyxLQUFLLHFCQUFxQjtBQUUzQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsMEJBQWlCLGtCQUFrQixrQkFBa0I7QUFDbkQsZ0JBQU0sVUFBWSxLQUFLLHFCQUFxQixvQkFBc0IsS0FBSyxxQkFBcUI7QUFFNUYsbUJBQU87Ozs7O1VBR0YsS0FBQTtpQkFBUCxpREFBK0Msa0JBQWtCLGtCQUFrQjtBQUNqRixnQkFBTSxPQUFPLElBQUksTUFBSyxrQkFBa0I7QUFFeEMsbUJBQU87Ozs7YUFqRFU7O3NCQUFBOzs7O0FDRnJCOzs7Ozs7QUFFTyxRQUFNLE9BQU87WUFBUCxPQUFBO0FBQ04sUUFBTSxRQUFRO1lBQVIsUUFBQTtBQUNOLFFBQU0sU0FBUztZQUFULFNBQUE7QUFDTixRQUFNLFNBQVM7WUFBVCxTQUFBO0FBQ04sUUFBTSxlQUFlO1lBQWYsZUFBQTtBQUNOLFFBQU0sZUFBZTtZQUFmLGVBQUE7QUFDTixRQUFNLGlCQUFpQjtZQUFqQixpQkFBQTs7OztBQ1JiOzs7OztZQUVnQixRQUFBO1lBRUEsU0FBQTtZQUVBLFFBQUE7WUFFQSxTQUFBO1lBRUEsUUFBQTtZQUVBLFlBQUE7WUFFQSxhQUFBO1lBRUEsWUFBQTtZQUVBLGFBQUE7WUFFQSxPQUFBO1lBRUEsT0FBQTtZQUVBLE9BQUE7WUFFQSxPQUFBO1lBRUEsUUFBQTtZQUVBLE9BQUE7WUFFQSxVQUFBO1lBRUEsU0FBQTtZQVFBLFFBQUE7WUFNQSxPQUFBO1lBT0EsUUFBQTtZQUVBLFNBQUE7WUFPQSxVQUFBO1lBc0JBLFNBQUE7WUFtQkEsT0FBQTtZQWNBLFFBQUE7WUFxQkEsUUFBQTtZQWlCQSxVQUFBO1lBVUEsV0FBQTtZQVVBLGVBQUE7WUFlQSxnQkFBQTtZQWVBLGdCQUFBO1lBZUEsaUJBQUE7WUFlQSxpQkFBQTtZQVVBLGtCQUFBO1lBVUEsa0JBQUE7WUFVQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXpRTSxPQUFPO0FBQUUsYUFBTyxNQUFNOztxQkFFckIsT0FBTztBQUFFLGFBQU8sTUFBTTs7bUJBRXZCLE9BQU87QUFBRSxhQUFPLE1BQU07O29CQUVyQixPQUFPO0FBQUUsYUFBTyxNQUFNOzttQkFFdkIsT0FBTztBQUFFLGFBQU8sTUFBTTs7dUJBRWxCLE9BQU87QUFBRSxhQUFPLE1BQU0sTUFBTSxTQUFTOzt3QkFFcEMsT0FBTztBQUFFLGFBQU8sTUFBTSxNQUFNLFNBQVM7O3VCQUV0QyxPQUFPO0FBQUUsYUFBTyxNQUFNLE1BQU0sU0FBUzs7d0JBRXBDLE9BQU87QUFBRSxhQUFPLE1BQU0sTUFBTSxTQUFTOztrQkFFM0MsT0FBTztBQUFFLGFBQU8sTUFBTSxNQUFNLFNBQVM7O2tCQUVyQyxPQUFPO0FBQUUsYUFBTyxNQUFNLE1BQU0sR0FBRzs7a0JBRS9CLE9BQU87QUFBRSxhQUFPLE1BQU0sTUFBTTs7a0JBRTVCLE9BQU87QUFBRSxhQUFPLE1BQU0sTUFBTSxNQUFNLFNBQVM7O21CQUUxQyxPQUFPO0FBQUUsYUFBTyxNQUFNLE1BQU0sR0FBRyxNQUFNLFNBQVM7O2tCQUUvQyxRQUFRLFFBQVE7QUFBRSxZQUFNLFVBQVUsS0FBSyxNQUFNLFFBQVE7O3FCQUVsRCxRQUFRLFFBQVE7QUFBRSxZQUFNLFVBQVUsUUFBUSxNQUFNLFFBQVE7O29CQUV6RCxRQUFRLGlCQUFpQjtBQUM5QyxVQUFNLFNBQVUsWUFBQSxpQkFBMkIsU0FDekIsa0JBQ0M7UUFBQzs7QUFFcEIsV0FBSyxRQUFROzttQkFHTyxPQUFPO0FBQzNCLFVBQU0sUUFBUTtBQUVkLGFBQU8sTUFBTSxPQUFPOztrQkFHRCxRQUFRLFFBQVE7QUFDbkMsVUFBTSxRQUFRLEdBQ1IsY0FBYyxPQUFPO0FBRTNCLGFBQU8sUUFBUSxPQUFPLGFBQWE7O21CQUdmLFFBQVEsUUFBUTtBQUFFLFlBQU0sVUFBVSxLQUFLLE1BQU0sUUFBUTs7b0JBRXBELFFBQVEsT0FBTyxPQUF3QixRQUFhO1VBQXJDLGNBQUEsVUFBc0IsU0FBUixXQUFkLE9BQXdCLFNBQUEsV0FBVyxTQUFGLEtBQVQ7QUFDNUQsVUFBTSxPQUFPO1FBQUM7UUFBTztRQUFSLE9BQStCLG1CQUFQLFVBQy9CLG9CQUFvQixNQUFNLFVBQVUsT0FBTyxNQUFNLFFBQVE7QUFFL0QsYUFBTzs7cUJBR2UsT0FBTyxVQUFTLE1BQU07QUFDNUMsVUFBSTtBQUVKLFVBQU0sUUFBUSxNQUFNLEtBQUssU0FBQyxTQUFTLE9BQVU7QUFDM0MsWUFBTSxTQUFTLEtBQUssU0FBUztBQUU3QixZQUFJLFFBQVE7QUFDVixrQkFBUTtBQUVSLGlCQUFPOzs7QUFJWCxVQUFJLE9BQU87QUFDVCxZQUFNLGNBQWM7QUFFcEIsY0FBTSxPQUFPLE9BQU8sYUFBYTs7QUFHbkMsYUFBTzs7b0JBR2MsT0FBTyxNQUFNO0FBQ2xDLFVBQU0sbUJBQW1CO0FBRXpCLHVCQUFpQixPQUFPLFNBQUMsU0FBUyxPQUFVO0FBQzFDLFlBQU0sU0FBUyxLQUFLLFNBQVM7QUFFN0IsWUFBRSxDQUFHLFFBQVE7QUFDWCxjQUFNLFFBQVEsT0FDUixjQUFjLEdBQ2Qsa0JBQWtCLE1BQU0sT0FBTyxPQUFPLGNBQ3RDLHNCQUFzQixPQUFNO0FBRWxDLDJCQUFpQixRQUFROzs7QUFJN0IsYUFBTzs7a0JBR1ksT0FBTyxNQUFNO0FBQ2hDLFVBQU0sV0FBVztBQUVqQixzQkFBZ0IsT0FBTyxTQUFDLFNBQVMsT0FBVTtBQUN6QyxZQUFNLFNBQVMsS0FBSyxTQUFTO0FBRTdCLFlBQUksUUFBUTtBQUNWLG1CQUFTLEtBQUs7OztBQUlsQixhQUFPOzttQkFHYSxPQUFPLE1BQU07QUFDakMsVUFBSSxnQkFBZ0I7QUFFcEIsWUFBTSxLQUFLLFNBQUMsU0FBUyxPQUFVO0FBQzdCLFlBQU0sU0FBUyxLQUFLLFNBQVM7QUFFN0IsWUFBRSxDQUFHLFFBQVE7QUFDWCxjQUFNLFFBQVEsT0FDUixjQUFjLEdBQ2Qsa0JBQWtCLE1BQU0sT0FBTyxPQUFPLGNBQ3RDLHNCQUFzQixPQUFNO0FBRWxDLDBCQUFnQjtBQUVoQixpQkFBTzs7O0FBSVgsYUFBTzs7bUJBR2EsT0FBTyxVQUFTLE1BQU07QUFDMUMsVUFBTSxRQUFRLE1BQU0sS0FBSyxTQUFDLFNBQVMsT0FBVTtBQUMzQyxZQUFNLFNBQVMsS0FBSyxTQUFTO0FBRTdCLFlBQUksUUFBUTtBQUNWLGlCQUFPOzs7QUFLWCxVQUFJLE9BQU87QUFDVCxjQUFNLEtBQUs7O0FBR2IsYUFBTzs7cUJBR2UsUUFBUSxRQUFRLE1BQU07QUFDNUMsYUFBTyxRQUFRLFNBQUMsU0FBUyxPQUFVO0FBQ2pDLFlBQU0sU0FBUyxLQUFLLFNBQVM7QUFFN0IsWUFBSSxRQUFRO0FBQ1YsaUJBQU8sS0FBSzs7OztzQkFLTyxPQUFPLFFBQVEsUUFBUSxNQUFNO0FBQ3BELFlBQU0sUUFBUSxTQUFDLFNBQVMsT0FBVTtBQUNoQyxZQUFNLFNBQVMsS0FBSyxTQUFTO0FBRTdCLGlCQUNFLE9BQU8sS0FBSyxXQUNWLE9BQU8sS0FBSzs7OzBCQUlTLE9BQU8sVUFBVTtBQUM1QyxVQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsR0FBRyxRQUFRLGFBQWEsU0FBUztBQUNoRCxZQUFNLFVBQVUsTUFBTSxRQUNoQixTQUFTLFNBQVMsU0FBUztBQUVqQyxZQUFJLFFBQVE7QUFDVixpQkFBTzs7O0FBSVgsYUFBTzs7MkJBR3FCLE9BQU8sVUFBVTtBQUM3QyxVQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsY0FBYyxHQUFHLFNBQVMsR0FBRyxTQUFTO0FBQ3JELFlBQU0sVUFBVSxNQUFNLFFBQ2hCLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUksUUFBUTtBQUNWLGlCQUFPOzs7QUFJWCxhQUFPOzsyQkFHcUIsT0FBTyxVQUFVO0FBQzdDLFVBQU0sY0FBYyxNQUFNO0FBRTFCLGVBQVMsUUFBUSxHQUFHLFFBQVEsYUFBYSxTQUFTO0FBQ2hELFlBQU0sVUFBVSxNQUFNLFFBQ2hCLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUUsQ0FBRyxRQUFRO0FBQ1gsaUJBQU87OztBQUlYLGFBQU87OzRCQUdzQixPQUFPLFVBQVU7QUFDOUMsVUFBTSxjQUFjLE1BQU07QUFFMUIsZUFBUyxRQUFRLGNBQWMsR0FBRyxTQUFTLEdBQUcsU0FBUztBQUNyRCxZQUFNLFVBQVUsTUFBTSxRQUNoQixTQUFTLFNBQVMsU0FBUztBQUVqQyxZQUFFLENBQUcsUUFBUTtBQUNYLGlCQUFPOzs7QUFJWCxhQUFPOzs0QkFHc0IsT0FBTyxVQUFVLGNBQWM7QUFDNUQsVUFBSSxRQUFRO0FBRVosc0JBQWdCLE9BQU8sU0FBQyxTQUFTLE9BQVU7QUFDekMsZ0JBQVEsU0FBUyxPQUFPLFNBQVM7O0FBR25DLGFBQU87OzZCQUd1QixPQUFPLFVBQVUsY0FBYztBQUM3RCxVQUFJLFFBQVE7QUFFWix1QkFBaUIsT0FBTyxTQUFDLFNBQVMsT0FBVTtBQUMxQyxnQkFBUSxTQUFTLE9BQU8sU0FBUzs7QUFHbkMsYUFBTzs7NkJBR3VCLE9BQU8sVUFBVTtBQUMvQyxVQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsR0FBRyxRQUFRLGFBQWEsU0FBUztBQUNoRCxZQUFNLFVBQVUsTUFBTTtBQUV0QixpQkFBUyxTQUFTOzs7OEJBSVcsT0FBTyxVQUFVO0FBQ2hELFVBQU0sY0FBYyxNQUFNO0FBRTFCLGVBQVMsUUFBUSxjQUFjLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDckQsWUFBTSxVQUFVLE1BQU07QUFFdEIsaUJBQVMsU0FBUzs7O21CQUlQO01BQ2IsT0FBQTtNQUNBLFFBQUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7O0FDelRGOzs7OztZQUtnQixhQUFBO1lBUUEsb0JBQUE7WUFRQSxxQkFBQTtZQU1BLHFCQUFBO1lBTUEsOEJBQUE7WUFPQSxlQUFBO1lBaUNBLG1CQUFBO1lBUUEseUJBQUE7WUFjQSwrQkFBQTtZQVFBLCtCQUFBO1lBY0Esb0NBQUE7WUFjQSwwQ0FBQTs7QUFqSWEsUUFBQSxhQUFjO0FBQ1AsUUFBQSxTQUFvQjt3QkFFN0IsTUFBTTtBQUMvQixhQUFPLEtBQUssUUFBTyxPQUpRLFdBQWMsY0FJQSxRQUFPLE9BSnJCLFdBQWM7QUFNekMsVUFBTSxXQUFRLEtBQVMsS0FBSyxVQUFVO0FBRXRDLGFBQU87OytCQUd5QixNQUFNO0FBQ3RDLFVBQU0sV0FBVyxXQUFXLE9BQ3RCLG1CQUFtQixtQkFBbUIsT0FDdEMsa0JBQW1CLFlBQVk7QUFFckMsYUFBTzs7Z0NBRzBCLE1BQU07QUFDdkMsVUFBTSxtQkFBZ0IsQ0FBQSxNQUFVLEtBQUs7QUFFckMsYUFBTzs7Z0NBRzBCLE1BQU07QUFDdkMsVUFBTSxtQkFBZ0IsTUFBUyxLQUFLO0FBRXBDLGFBQU87O3lDQUdtQyxhQUFhLGNBQWM7QUFDckUsVUFBTSxTQUFTLElBQUksT0FBUSxJQUFlLE9BQVosYUFBWSxpQkFDcEMsNEJBQTRCLE9BQU8sS0FBSztBQUU5QyxhQUFPOzswQkFHb0IsTUFBTSxjQUFjO0FBQy9DLFVBQUksZUFBZTtBQUVuQixVQUFNLFlBQVksS0FBSyxNQUFLLE9BQ3RCLG9CQUFvQixhQUFhLE1BQUs7QUFFNUMsVUFBSSxjQUNBLHdCQUFxQixJQTVDUyxRQUFvQixNQTRDcEI7QUFFbEMsVUFBSSwwQkFBMEIsS0FBSztBQUNqQywwQkFBa0I7O0FBR3BCLDhCQUFxQixJQWxEYSxRQUFvQixNQWtEeEI7QUFDOUIscUJBQVksSUFuRHNCLFFBQW9CLEtBbURsQzthQUVaLDBCQUEwQixRQUFVLGlCQUFpQixRQUFZO0FBQ3ZFLDBCQUFrQjtBQUNsQixrQkFBVTtBQUVWLGdDQUFxQixJQXpEVyxRQUFvQixNQXlEdEI7QUFDOUIsdUJBQVksSUExRG9CLFFBQW9CLEtBMERoQzs7QUFHdEIsVUFBSSxpQkFBaUIsUUFBVztBQUM5QixZQUFNLG9CQUFvQixHQUFHLE9BQU8sV0FBVyxPQUFPO0FBRXRELHVCQUFlLGtCQUFrQixLQUFLOztBQUd4QyxhQUFPOzs4QkFHd0IsTUFBTSxjQUFjO0FBQ25ELGFBQU8sS0FBSyxRQUFPLE9BeEVRLFdBQWM7QUEwRXpDLFVBQU0sbUJBQW9CLEdBQVUsT0FBUixNQUFLLEtBQWdCLE9BQWI7QUFFcEMsYUFBTzs7b0NBRzhCLE1BQU07QUFDM0MsVUFBSSxpQkFBaUI7QUFFckIsVUFBTSxVQUFVLEtBQUssTUFBSztBQUUxQixVQUFJLFlBQVksTUFBTTtBQUNwQixZQUFNLGNBQVcsSUFwRmUsUUFBb0IsT0FvRnpCO0FBRTNCLHlCQUFpQjs7QUFHbkIsYUFBTzs7MENBR29DLE1BQU07QUFDakQsVUFBTSxVQUFVLEtBQUssTUFBSyxzQkFDcEIsY0FBVyxJQTlGaUIsUUFBb0IsT0E4RjNCLFVBQ3JCLHVCQUF1QjtBQUU3QixhQUFPOzswQ0FHb0MsTUFBTTtBQUNqRCxVQUFJLHVCQUF1QjtBQUUzQixVQUFNLFVBQVUsS0FBSyxNQUFLO0FBRTFCLFVBQUksWUFBWSxNQUFNO0FBQ3BCLFlBQU0sY0FBVyxJQTFHZSxRQUFvQixPQTBHekI7QUFFM0IsK0JBQXVCOztBQUd6QixhQUFPOzsrQ0FHeUMsTUFBTTtBQUN0RCxVQUFJLDRCQUE0QjtBQUVoQyxVQUFNLFVBQVUsS0FBSyxNQUFLO0FBRTFCLFVBQUksWUFBWSxNQUFNO0FBQ3BCLFlBQU0sY0FBVyxJQXhIZSxRQUFvQixPQXdIekI7QUFFM0Isb0NBQTRCOztBQUc5QixhQUFPOztxREFHK0MsTUFBTTtBQUM1RCxVQUFJLGtDQUFrQztBQUV0QyxVQUFNLFVBQVUsS0FBSyxNQUFLO0FBRTFCLFVBQUksWUFBWSxNQUFNO0FBQ3BCLFlBQU0sY0FBVyxJQXRJZSxRQUFvQixPQXNJekI7QUFFM0IsMENBQWtDOztBQUdwQyxhQUFPOzttQkFHTTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7O0FDN0pGOzs7Ozs7QUFFTyxRQUFNLGdCQUFnQjtZQUFoQixnQkFBQTtBQUNOLFFBQU0sa0JBQWtCO1lBQWxCLGtCQUFBO0FBQ04sUUFBTSxzQkFBc0I7WUFBdEIsc0JBQUE7QUFDTixRQUFNLHNCQUFzQjtZQUF0QixzQkFBQTtBQUNOLFFBQU0sc0JBQXNCLE9BQU8sYUFBYTtZQUExQyxzQkFBQTtBQUNOLFFBQU0sNEJBQTRCO1lBQTVCLDRCQUFBOzs7O0FDUGI7Ozs7O1lBTWdCLFlBQUE7WUFrQkEsYUFBQTtZQWVBLGVBQUE7WUFxQkEsaUJBQUE7WUFNQSxtQkFBQTtZQVFBLHVCQUFBO1lBb0JBLHlCQUFBOztBQTVGTyxRQUFBLFNBQW9CO0FBQ2QsUUFBQSxhQUFjO0FBQ1UsUUFBQSxjQUFlO3VCQUUxQyxTQUFTLE1BQU0sT0FBTztBQUM5QyxVQUFNLG1CQUFtQixPQUFPLG9CQUFvQixVQUM5QyxnQkFBZ0IsS0FBSyxlQUNyQixjQUFjLGlCQUFpQixLQUFLLFNBQUMsaUJBQW9CO0FBQ3ZELFlBQU0sMkJBQTJCLGdCQUFnQjtBQUVqRCxZQUFJLDZCQUE2QixlQUFlO0FBQzlDLGtCQUFRLG1CQUFtQjtBQUUzQixpQkFBTzs7O0FBSWpCLFVBQUUsQ0FBRyxhQUFhO0FBQ2hCLGdCQUFRLFFBQVE7Ozt3QkFJTyxTQUFTLE1BQU0sT0FBTztBQUMvQyxVQUFNLG1CQUFtQixPQUFPLG9CQUFvQixVQUM5QyxnQkFBZ0IsS0FBSyxlQUNyQiw0QkFBNEIsaUJBQWlCLElBQUksU0FBQyxpQkFBb0I7QUFDcEUsWUFBTSwyQkFBMkIsZ0JBQWdCO0FBRWpELGVBQU87VUFFVCxpREFBaUQsMEJBQTBCLFNBQVM7QUFFMUYsVUFBRSxDQUFHLGdEQUFnRDtBQUNuRCxnQkFBUSxRQUFROzs7MEJBSVMsTUFBTTtBQUNqQyxVQUFJO0FBRUosVUFBTSxVQUFVLEtBQUssTUFBSyx5QkFDcEIsY0FBVyxJQXpDSSxRQUFvQixPQXlDZCxVQUNyQixRQUFRLFlBQVksUUF4Q3lCLFlBQWU7QUEwQ2xFLFVBQUksVUFBSyxJQUFTO0FBQ2hCLFlBQU0sU0FBUyxlQUFlO0FBRTlCLGVBQU8sU0FBUyxNQUFNO2FBQ2pCO0FBQ0wsWUFBTSxRQUFRLFFBQVEsR0FDaEIsYUFBYSxZQUFZLFVBQVU7QUFFekMsZUFBTyxPQUFPOztBQUdoQixhQUFPOzs0QkFHc0IsTUFBTTtBQUNuQyxVQUFNLFNBQU0sY0FBaUIsS0FBSztBQUVsQyxhQUFPOzs4QkFHd0IsTUFBTTtBQUNyQyxVQUFNLFVBQVUsS0FBSyxNQUFLLDBCQUNwQixjQUFXLElBbEVJLFFBQW9CLE9Ba0VkLFVBQ3JCLFdBQVc7QUFFakIsYUFBTzs7a0NBRzRCLE9BQU87QUFDMUMsVUFBTSxRQUFRLE9BQU8sS0FBSyxRQUNwQixjQUFjLE1BQU0sUUFDcEIsWUFBWSxjQUFjLEdBQzFCLGVBQWMsTUFBTSxPQUFPLFNBQUMsYUFBYSxNQUFNLE9BQVU7QUFDdkQsWUFBTSxRQUFRLE1BQU0sT0FDZCxjQUFjLG1CQUFtQixPQUNqQyxlQUFlLG1CQUFtQixRQUNsQyxxQkFBc0IsVUFBVSxZQTlFSyxZQUFlLHNCQUR2QyxXQUFjO0FBbUZqQyx1QkFBZ0IsR0FBaUIsT0FBZixhQUFZLEtBQWtCLE9BQWYsY0FBa0MsT0FBbkI7QUFFaEQsZUFBTztTQXJGWSxXQUFjO0FBd0Z6QyxhQUFPOztvQ0FHOEIsTUFBTSxLQUFLLE9BQU87QUFDdkQsVUFBTSxjQUFjLHFCQUFxQixRQUNuQyxNQUFPLGdCQTdGYyxXQUFjLGVBOEYxQixHQUFTLE9BQVAsTUFBVyxPQUFKLE9BQ1AsR0FBUyxPQUFQLE1BQWMsT0FBUCxLQUFJLEtBQWUsT0FBWjtBQUVqQyxhQUFPOzttQkFHTTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOzs7Ozs7QUM5R0Y7Ozs7O1lBRWdCLFNBQUE7WUFpQkEsVUFBQTtZQXVCQSxXQUFBO1lBdUJBLGFBQUE7WUFvQkEsYUFBQTtZQWtCQSxrQkFBQTtZQXVCQSxtQkFBQTs7b0JBNUhPLFVBQVUsTUFBTSxTQUFTO0FBQzlDLFVBQUksUUFBSztzQkFFTztBQUNkO0FBRUEsWUFBTSxRQUFRLE9BQ1IsWUFBWSxTQUFTLE1BQU0sTUFBTSxTQUFTO0FBRWhELFlBQUksV0FBVztBQUNiOzs7QUFJSjs7cUJBR3NCLE9BQU8sVUFBVSxNQUFNLFNBQVM7QUFDdEQsVUFBTSxTQUFTLE1BQU07QUFFckIsVUFBSSxRQUFLO3NCQUVPO0FBQ2Q7QUFFQSxZQUFNLFlBQWEsVUFBVTtBQUU3QixZQUFJLFdBQVc7QUFDYjtlQUNLO0FBQ0wsY0FBTSxRQUFRLE9BQ1IsVUFBVSxNQUFNO0FBRXRCLG1CQUFTLFNBQVMsTUFBTSxNQUFNLFNBQVM7OztBQUkzQzs7c0JBR3VCLFdBQVcsTUFBTSxTQUFTO0FBQ2pELFVBQU0sU0FBUyxVQUFVO0FBRXpCLFVBQUksUUFBSztzQkFFTztBQUNkO0FBRUEsWUFBTSxZQUFhLFVBQVU7QUFFN0IsWUFBSSxXQUFXO0FBQ2I7ZUFDSztBQUNMLGNBQU0sUUFBUSxPQUNSLFdBQVcsVUFBVTtBQUUzQixtQkFBUyxNQUFNLE1BQU0sU0FBUzs7O0FBSWxDOzt3QkFHeUIsV0FBVyxNQUFNLFNBQVM7VUFLMUMsT0FBVCxpQkFBZ0I7QUFDZDtBQUVBLFlBQU0sWUFBYSxVQUFVO0FBRTdCLFlBQUksV0FBVztBQUNiOzs7QUFWSixVQUFNLFNBQVMsVUFBVTtBQUV6QixVQUFJLFFBQVE7QUFZWixnQkFBVSxRQUFRLFNBQUMsVUFBVSxPQUFVO0FBQ3JDLGlCQUFTLE1BQU0sTUFBTSxTQUFTOzs7d0JBSVAsVUFBVSxRQUFRLE1BQU0sU0FBUztVQUdqRCxPQUFULGlCQUFnQjtBQUNkO0FBRUEsWUFBTSxZQUFhLFVBQVU7QUFFN0IsWUFBSSxXQUFXO0FBQ2I7OztBQVJKLFVBQUksUUFBUTtBQVlaLGVBQVMsUUFBUSxHQUFHLFFBQVEsUUFBUSxTQUFTO0FBQzNDLGlCQUFTLE1BQU0sTUFBTSxTQUFTOzs7NkJBSUYsT0FBTyxVQUFVLE1BQU0sU0FBUztBQUM5RCxVQUFNLFNBQVMsTUFBTTtBQUVyQixVQUFJLFFBQUs7c0JBRU87QUFDZDtBQUVBLFlBQU0sWUFBYSxVQUFVO0FBRTdCLFlBQUksV0FBVztBQUNiO2VBQ0s7QUFDTCxjQUFNLFFBQVEsT0FDUixVQUFVLE1BQU07QUFFdEIsbUJBQVMsU0FBUyxNQUFNLE1BQU0sU0FBUzs7O0FBSTNDOzs4QkFHK0IsT0FBTyxVQUFVLE1BQU0sU0FBUztBQUMvRCxVQUFNLFNBQVMsTUFBTTtBQUVyQixVQUFJLFFBQVE7c0JBRUk7QUFDZDtBQUVBLFlBQU0sWUFBYSxVQUFLO0FBRXhCLFlBQUksV0FBVztBQUNiO2VBQ0s7QUFDTCxjQUFNLFFBQVEsT0FDUixVQUFVLE1BQU07QUFFdEIsbUJBQVMsU0FBUyxNQUFNLE1BQU0sU0FBUzs7O0FBSTNDOzttQkFHYTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOzs7Ozs7QUM1SkY7Ozs7OztBQUVPLFFBQU0sYUFBYTtZQUFiLGFBQUE7QUFDTixRQUFNLGNBQWM7WUFBZCxjQUFBOzs7O0FDSGI7Ozs7OztBQUVPLFFBQU0sZ0NBQWdDO1lBQWhDLGdDQUFBOzs7O0FDRmI7Ozs7O1lBT2dCLE1BQUE7WUFlQSxPQUFBO1lBa0JBLFVBQUE7O0FBdEN3QixRQUFBLFdBQVk7QUFDTixRQUFBLGdCQUFpQjtBQUNaLFFBQUEsUUFBbUI7QUFDakIsUUFBQSxhQUFjO2lCQUUvQyxNQUFNLEtBQUssT0FBTyxTQUFTLFVBQVU7QUFDdkQsVUFBSSxhQUFhLFFBQVc7QUFDMUIsbUJBQVc7QUFDWCxrQkFBVTs7QUFHWixVQUFNLE9BQU8sTUFDUCxTQVpnQyxTQUFZLFlBYTVDLFNBWnNDLGNBQWlCO0FBYzdELHVCQUFpQixTQUFTO0FBRTFCLGNBQVEsTUFBTSxLQUFLLE9BQU8sUUFBUSxTQUFTLE1BQU07O2tCQUc5QixNQUFNLEtBQUssT0FBTyxTQUFTLE1BQU0sVUFBVTtBQUM5RCxVQUFJLGFBQWEsUUFBVztBQUMxQixtQkFBVztBQUNYLGVBQU87QUFDUCxrQkFBVTs7QUFHWixVQUFNLFNBM0JnQyxTQUFZLGFBNEI1QyxTQTNCc0MsY0FBaUIsK0JBNEJ2RCxjQTVCc0MsY0FBaUI7QUE4QjdELHVCQUFpQixTQUFTO0FBRTFCLDRCQUFzQixTQUFTO0FBRS9CLGNBQVEsTUFBTSxLQUFLLE9BQU8sUUFBUSxTQUFTLE1BQU07O3FCQUczQixNQUFNLEtBQUssT0FBTyxRQUFRLFNBQVMsT0FBTSxVQUFVO0FBQ3pFLFVBQU0sTUFBRyxJQXJDd0MsT0FBbUIsdUJBcUNqQyxNQUFNLEtBQUssUUFDeEMsU0FBUyxRQXJDb0MsV0FBYyxXQXFDL0IsTUFDNUIsY0FBYyxRQXRDK0IsV0FBYyxpQkFzQ3BCLE1BQ3ZDLGlCQUFpQixJQUFJO0FBRTNCLFVBQUksZ0JBM0N3QyxjQUFpQiwrQkEyQ1Y7QUFDakQsWUFBTSxPQUFPLE9BQ1AsYUFBYSxLQUFLLFVBQVUsT0FDNUIsVUFBVSxZQUNWLGdCQUFnQixRQUFRO0FBRTlCLGdDQUF3QixTQUFTO0FBRWpDLGdCQUFPOztBQUdULHFCQUFlLHFCQUFxQixXQUFNO0FBQ3hDLFlBQVEsYUFBcUMsZUFBckMsWUFBWSxTQUF5QixlQUF6QixRQUFRLGVBQWlCLGVBQWpCO0FBRTVCLFlBQUksY0FBYyxHQUFHO0FBQ25CLGNBQUksT0FBTztBQUVYLGNBQUksV0E1RG9DLGNBQWlCLCtCQTREWDtBQUM1QyxnQkFBSTtBQUNGLGtCQUFNLGNBQWEsTUFDYixRQUFPLEtBQUssTUFBTTtBQUV4QixxQkFBTztxQkFDQSxPQUFQO0FBQ0EscUJBQU87O0FBR1QscUJBQVMsTUFBTTs7OztBQUtyQixxQkFBZSxLQUFLLFFBQVE7QUFFNUIsVUFBSSxXQUFXLE1BQU07QUFDbkIsdUJBQWUsaUJBNUVrQyxXQUFjLFFBNEV2Qjs7QUFHMUMsVUFBSSxnQkFBZ0IsTUFBTTtBQUN4Qix1QkFBZSxpQkFoRmtDLFdBQWMsY0FnRmpCOztBQUcvQyxnQkFBUyxPQUNSLGVBQWUsS0FBSyxTQUNsQixlQUFlOzttQkFHTjtNQUNiO01BQ0E7TUFDQTs7OzhCQUd3QixTQUFTLFFBQVE7QUFDekMsVUFBTSxPQS9GNkMsV0FBYyxRQWdHM0QsUUFBUTtVQWpHbUMsT0FBbUIsV0FtR3pELFNBQVMsTUFBTTs7bUNBR0csU0FBUyxhQUFhO0FBQ25ELFVBQU0sT0F0RzZDLFdBQWMsY0F1RzNELFFBQVE7VUF4R21DLE9BQW1CLFdBMEd6RCxTQUFTLE1BQU07O3FDQUdLLFNBQVMsZUFBZTtBQUN2RCxVQUFNLE9BN0c2QyxXQUFjLGdCQThHM0QsUUFBUTtVQS9HbUMsT0FBbUIsV0FpSHpELFNBQVMsTUFBTTs7Ozs7QUNySDVCOzs7OzttQ0FFb0IsaUJBQWE7OztxQkFBeEI7OzttQ0FDVyxpQkFBYTs7O3FCQUF4Qjs7O21DQUNXLGtCQUFjOzs7c0JBQXpCOzs7bUNBQ1cseUJBQXFCOzs7NkJBQWhDOzs7bUNBRVcsaUJBQWE7OztxQkFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVDs7Ozs7WUFFZ0IsMEJBQUE7WUFVQSxnQkFBQTtxQ0FWd0IsVUFBVTtBQUNoRCxVQUFNLGNBQWMsU0FBUyxJQUFJLFNBQUMsUUFBVztBQUMzQyxZQUFNLGFBQWEsT0FBTztBQUUxQixlQUFPOztBQUdULGFBQU87OzJCQUdxQixVQUFVO0FBQ3RDLGVBQVMsS0FBSyxTQUFDLGFBQWEsY0FBaUI7QUFDM0MsWUFBTSxtQkFBbUIsWUFBWSxZQUMvQixvQkFBb0IsYUFBYTtBQUV2QyxZQUFJLE9BQU87bUJBRUEsbUJBQW1CLG1CQUFtQjtBQUMvQyxpQkFBTTttQkFDSSxtQkFBbUIsbUJBQW1CO0FBQ2hELGlCQUFNOzs7QUFJVixVQUFNLGtCQUFrQjtBQUV4QixhQUFPOzs7OztBQzVCVDs7Ozs7O0FBRXVELFFBQUEsVUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXRELFNBQU4sMkJBQVE7dUJBQ1QsTUFBTSxPQUFPLFNBQVMsOEJBQThCLDRCQUEwQjs4QkFEdkU7QUFFakIsYUFBSyxPQUFPO0FBQ1osYUFBSyxRQUFRO0FBQ2IsYUFBSyxVQUFVO0FBQ2YsYUFBSywrQkFBK0I7QUFDcEMsYUFBSyw2QkFBNkI7O21CQU5qQixTQUFNOztVQVN6QixLQUFBO2lCQUFBLG1CQUFVO0FBQ1IsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsb0JBQVc7QUFDVCxtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxxQkFBWTtBQUNWLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLHNCQUFhO0FBQ1gsZ0JBQU0scUNBQXFDLEtBQUssNkJBQTZCLFFBQ3ZFLG1DQUFtQyxLQUFLLDJCQUEyQixRQUNuRSxXQUFhLHVDQUF1QyxLQUFPLHFDQUFxQztBQUV0RyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsOENBQXFDO0FBQ25DLGdCQUFNLGtDQUFrQyxLQUFLLDZCQUE2QixJQUFJLFNBQUMsNEJBQStCO0FBQzVHLGtCQUFNLGlDQUFpQywyQkFBMkI7QUFFbEUscUJBQU87O0FBR1QsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDRDQUFtQztBQUNqQyxnQkFBTSxnQ0FBZ0MsS0FBSywyQkFBMkIsSUFBSSxTQUFDLDBCQUE2QjtBQUN0RyxrQkFBTSwrQkFBK0IseUJBQXlCO0FBRTlELHFCQUFPOztBQUdULG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwyQ0FBa0M7QUFDaEMsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEseUNBQWdDO0FBQzlCLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLGlDQUF3QixPQUEyQjtnQkFBM0IsdUJBQUEsVUFBeUIsU0FBRixLQUF2QjtBQUN0QixpQkFBSyxrQ0FBa0MsU0FBQyw0QkFBK0I7QUFDckUsa0JBQU0sb0JBQW9CLDRCQUNwQix3QkFBd0Isa0JBQWtCO0FBRWhELG1DQUFxQix5QkFBeUI7QUFFOUMsZ0NBQWtCLHdCQUF3Qjs7QUFHNUMsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLCtCQUFzQixPQUF5QjtnQkFBekIscUJBQUEsVUFBdUIsU0FBRixLQUFyQjtBQUNwQixpQkFBSyxnQ0FBZ0MsU0FBQywwQkFBNkI7QUFDakUsa0JBQU0sa0JBQWtCLDBCQUNsQixzQkFBc0IsZ0JBQWdCO0FBRTVDLGlDQUFtQix1QkFBdUI7QUFFMUMsOEJBQWdCLHNCQUFzQjs7QUFHeEMsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHFDQUE0QjtBQUMxQixnQkFBTSxzQkFBc0IsS0FBSywwQkFDM0IseUJBQXlCLG9CQUFvQixJQUFJLFNBQUMsbUJBQXNCO0FBQ3RFLGtCQUFNLHdCQUF3QixrQkFBa0I7QUFFaEQscUJBQU87O0FBR2YsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLG1DQUEwQjtBQUN4QixnQkFBTSxvQkFBb0IsS0FBSyx3QkFDekIsdUJBQXVCLGtCQUFrQixJQUFJLFNBQUMsaUJBQW9CO0FBQ2hFLGtCQUFNLHNCQUFzQixnQkFBZ0I7QUFFNUMscUJBQU87O0FBR2YsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLGtDQUF5QjtBQUN2QixnQkFBTSx1QkFBdUIsS0FBSywyQkFDNUIseUJBQXlCLE9BQU8sS0FBSyx1QkFDckMsc0JBQXNCLHVCQUF1QixJQUFJLFNBQUMsdUJBQTBCO0FBQzFFLGtCQUFNLG9CQUFvQixxQkFBcUI7QUFFL0MscUJBQU87O0FBR2YsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLGdDQUF1QjtBQUNyQixnQkFBTSxxQkFBcUIsS0FBSyx5QkFDMUIsdUJBQXVCLE9BQU8sS0FBSyxxQkFDbkMsb0JBQW9CLHFCQUFxQixJQUFJLFNBQUMscUJBQXdCO0FBQ3BFLGtCQUFNLGtCQUFrQixtQkFBbUI7QUFFM0MscUJBQU87O0FBR2YsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDRDQUFtQztBQUNqQyxnQkFBTSxzQkFBc0IsS0FBSztnQkFwSWtCLFNBQW9CLGNBc0l6RDtBQUVkLGdCQUFNLDZCQUE2QixxQkFDN0IsZ0NBQTZCLElBeklnQixTQUFvQix3QkF5SVQ7QUFFOUQsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDBDQUFpQyxjQUFjO0FBQzdDLGdCQUFNLDJCQUEyQixLQUFLLHlCQUF5QixTQUFDLGVBQWtCO0FBQ2hGLGtCQUFNLFlBQWEsa0JBQWtCO0FBRXJDLGtCQUFJLFdBQVc7QUFDYix1QkFBTzs7O0FBSVgsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDZDQUFvQztBQUNsQyxnQkFBTSw0QkFBNEIsS0FBSywwQkFBMEIsU0FBQyxlQUFrQjtBQUNsRixrQkFBTSxZQUFZO0FBRWxCLGtCQUFJLFdBQVc7QUFDYix1QkFBTzs7O0FBSVgsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDRDQUFtQyxRQUFRO0FBQ3pDLGdCQUFNLG1DQUFtQyxLQUFLLDZCQUE2QixTQUFTO0FBRXBGLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwwQ0FBaUMsUUFBUTtBQUN2QyxnQkFBTSxpQ0FBaUMsS0FBSywyQkFBMkIsU0FBUztBQUVoRixtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEscUNBQTRCLGNBQWM7QUFDeEMsZ0JBQU0seUNBQXlDLEtBQUssbUNBQW1DLGVBQ2pGLGNBQWM7QUFFcEIsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHFDQUE0QixjQUFjO0FBQ3hDLGdCQUFNLHVDQUF1QyxLQUFLLGlDQUFpQyxlQUM3RSxjQUFjO0FBRXBCLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSxpQkFBUSxNQUFNO0FBQ1osaUJBQUssT0FBTzs7OztVQUdkLEtBQUE7aUJBQUEsa0JBQVMsT0FBTztBQUNkLGlCQUFLLFFBQVE7Ozs7VUFHZixLQUFBO2lCQUFBLG9CQUFXLFNBQVM7QUFDbEIsaUJBQUssVUFBVTs7OztVQUdqQixLQUFBO2lCQUFBLDBCQUFpQjtBQUNmLGlCQUFLOzs7O1VBR1AsS0FBQTtpQkFBQSwwQ0FBaUMsNEJBQTRCO0FBQzNELGdCQUFNLFFBQVEsS0FBSyw2QkFBNkIsUUFBUSw2QkFDbEQsUUFBUSxPQUNSLGNBQWM7QUFFcEIsaUJBQUssNkJBQTZCLE9BQU8sT0FBTzs7OztVQUdsRCxLQUFBO2lCQUFBLHdDQUErQiwwQkFBMEI7QUFDdkQsZ0JBQU0sUUFBUSxLQUFLLDJCQUEyQixRQUFRLDJCQUNoRCxRQUFRLE9BQ1IsY0FBYztBQUVwQixpQkFBSywyQkFBMkIsT0FBTyxPQUFPOzs7O1VBR2hELEtBQUE7aUJBQUEsK0JBQXNCO0FBQ3BCLGdCQUFNLDJCQUEyQjtBQUVqQyxpQkFBSyw2QkFBNkIsUUFBUSxTQUFDLDRCQUEwQjtBQUFLLHFCQUFBLDJCQUEyQiwrQkFBK0I7O0FBRXBJLGlCQUFLLCtCQUErQjs7OztVQUd0QyxLQUFBO2lCQUFBLCtCQUFzQjtBQUNwQixnQkFBTSw2QkFBNkI7QUFFbkMsaUJBQUssMkJBQTJCLFFBQVEsU0FBQywwQkFBd0I7QUFBSyxxQkFBQSx5QkFBeUIsK0JBQStCOztBQUU5SCxpQkFBSyw2QkFBNkI7Ozs7VUFHcEMsS0FBQTtpQkFBQSx1Q0FBOEIsNEJBQTRCO0FBQ3hELGlCQUFLLDZCQUE2QixLQUFLOzs7O1VBR3pDLEtBQUE7aUJBQUEscUNBQTRCLDBCQUEwQjtBQUNwRCxpQkFBSywyQkFBMkIsS0FBSzs7OztVQUd2QyxLQUFBO2lCQUFBLGtDQUF5QixVQUFVO0FBQ2pDLGdCQUFNLGtCQUFrQjtBQUV4QixpQkFBSyxnQ0FBZ0MsU0FBQyxlQUFrQjtBQUN0RCxrQkFBTSxZQUFZLFNBQVM7QUFFM0IsOEJBQWdCLEtBQUs7QUFFckIscUJBQU87O0FBR1QsNEJBQWdCLFFBQVEsU0FBQyxlQUFhO0FBQUsscUJBQUEsY0FBYzs7QUFFekQsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLG1DQUEwQixVQUFVO0FBQ2xDLGdCQUFNLGtCQUFrQjtBQUV4QixpQkFBSyxpQ0FBaUMsU0FBQyxlQUFrQjtBQUN2RCxrQkFBTSxZQUFZLFNBQVM7QUFFM0IsOEJBQWdCLEtBQUs7QUFFckIscUJBQU87O0FBR1QsNEJBQWdCLFFBQVEsU0FBQyxlQUFhO0FBQUsscUJBQUEsY0FBYzs7QUFFekQsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHlDQUFnQyxVQUFVO0FBQ3hDLGdCQUFJLFlBQVk7QUFFaEIsZ0JBQUksS0FBSyxZQUFZLE9BQU87QUFDMUIsbUJBQUssVUFBVTtBQUVmLGtCQUFNLGdCQUFnQjtBQUV0QiwwQkFBWSxTQUFTO0FBRXJCLGtCQUFJLGNBQWMsTUFBTTtBQUN0Qiw4QkFBYyw2QkFBNkIsU0FBQywwQkFBNkI7QUFDdkUsOEJBQVkseUJBQXlCLGdDQUFnQztBQUVyRSxzQkFBSSxXQUFXO0FBQ2IsMkJBQU87Ozs7O0FBTWYsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDBDQUFpQyxVQUFVO0FBQ3pDLGdCQUFJLFlBQVk7QUFFaEIsZ0JBQUksS0FBSyxZQUFZLE9BQU87QUFDMUIsbUJBQUssVUFBVTtBQUVmLGtCQUFNLGdCQUFnQjtBQUV0QiwwQkFBWSxTQUFTO0FBRXJCLGtCQUFJLGNBQWMsTUFBTTtBQUN0Qiw4QkFBYywrQkFBK0IsU0FBQyw0QkFBK0I7QUFDM0UsOEJBQVksMkJBQTJCLGlDQUFpQztBQUV4RSxzQkFBSSxXQUFXO0FBQ2IsMkJBQU87Ozs7O0FBTWYsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDJDQUFrQyxVQUFVO0FBQzFDLGlCQUFLLDZCQUE2QixRQUFROzs7O1VBRzVDLEtBQUE7aUJBQUEseUNBQWdDLFVBQVU7QUFDeEMsaUJBQUssMkJBQTJCLFFBQVE7Ozs7VUFHMUMsS0FBQTtpQkFBQSx3Q0FBK0IsVUFBVTtBQUN2QyxpQkFBSyw2QkFBNkIsS0FBSzs7OztVQUd6QyxLQUFBO2lCQUFBLHNDQUE2QixVQUFVO0FBQ3JDLGlCQUFLLDJCQUEyQixLQUFLOzs7O1VBR3ZDLEtBQUE7aUJBQUEsd0JBQWU7QUFDYixpQkFBSyxVQUFVOzs7OztVQUdWLEtBQUE7aUJBQVAsMEJBQXdCLE1BQU0sT0FBTztBQUNuQyxnQkFBTSxVQUFVLE9BQ1YsK0JBQStCLElBQy9CLDZCQUE2QixJQUM3QixtQkFBbUIsSUFBSSxRQUFPLE1BQU0sT0FBTyxTQUFTLDhCQUE4QjtBQUV4RixtQkFBTzs7OzthQWhXVTs7c0JBQUE7Ozs7QUNKckI7Ozs7OztBQUUrQixRQUFBLGFBQVc7QUFFekIsUUFBQSxRQUFRLHVCQUFBO0FBQ04sUUFBQSxVQUFVLHVCQUFBO0FBRTBCLFFBQUEsV0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsUUFBUSxPQVB1QixXQUFXLGVBT2xDO1FBRWEsdUJBQU4sMkJBQVE7cUNBQ1QsV0FBUzs4QkFERjtBQUVqQixhQUFLLFlBQVk7O21CQUZBLHVCQUFvQjs7VUFLdkMsS0FBQTtpQkFBQSxtQkFBVTtBQUNSLGdCQUFNLFdBQVcsS0FBSyxlQUNoQixpQkFBaUIsU0FBUyxRQUMxQixRQUFTLG1CQUFtQjtBQUVsQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsdUJBQWM7QUFDWixnQkFBTSxrQkFBa0IsT0FBTyxPQUFPLEtBQUssWUFDckMsV0FBVztBQUVqQixtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsMEJBQWlCO0FBQ2YsZ0JBQU0sZ0JBQWdCLE9BQU8sS0FBSyxLQUFLLFlBQ2pDLGNBQWM7QUFFcEIsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLCtCQUFzQixZQUFZO0FBQ2hDLGdCQUFNLGdCQUFnQixLQUFLLDRCQUE0QixhQUNqRCxTQUFTLGdCQUNFLEtBQUssVUFBVSxjQUNiO0FBRW5CLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSx3REFBK0MsWUFBWTtBQUN6RCxnQkFBTSxTQUFTLEtBQUssc0JBQXNCLGFBQ3BDLGtDQUFrQyxPQUFPO0FBRS9DLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSxzREFBNkMsWUFBWTtBQUN2RCxnQkFBTSxTQUFTLEtBQUssc0JBQXNCLGFBQ3BDLGdDQUFnQyxPQUFPO0FBRTdDLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwrQ0FBc0MsWUFBWTtBQUNoRCxnQkFBTSxTQUFTLEtBQUssc0JBQXNCLGFBQ3BDLHlCQUF5QixPQUFPO0FBRXRDLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSw2Q0FBb0MsWUFBWTtBQUM5QyxnQkFBTSxTQUFTLEtBQUssc0JBQXNCLGFBQ3BDLHVCQUF1QixPQUFPO0FBRXBDLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSxvQ0FBMkIsa0JBQWtCO0FBQzNDLGdCQUFNLFFBQVEsSUFDUixlQUFlLEtBQUssc0JBQXNCO0FBRWhELGdCQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGtCQUFNLGtDQUFrQyxhQUFhLHNDQUMvQyxvQkFBb0I7QUFFMUIsZ0NBQWtCLFFBQVEsU0FBQyxrQkFBcUI7QUFDOUMsb0JBQU0sT0FoRkcsTUFBUSxRQWdGQyx3Q0FBd0Msa0JBQWtCO0FBRTVFLHNCQUFNLEtBQUs7OztBQUlmLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSxvQ0FBMkIsa0JBQWtCO0FBQzNDLGdCQUFNLFFBQVEsSUFDUixlQUFlLEtBQUssc0JBQXNCO0FBRWhELGdCQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGtCQUFNLGdDQUFnQyxhQUFhLG9DQUM3QyxvQkFBb0I7QUFFMUIsZ0NBQWtCLFFBQVEsU0FBQyxrQkFBcUI7QUFDOUMsb0JBQU0sT0FsR0csTUFBUSxRQWtHQyx3Q0FBd0Msa0JBQWtCO0FBRTVFLHNCQUFNLEtBQUs7OztBQUlmLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwrQkFBc0IsWUFBWSxRQUFRO0FBQ3hDLGlCQUFLLFVBQVUsY0FBYzs7OztVQUcvQixLQUFBO2lCQUFBLGtDQUF5QixZQUFZO0FBQ25DLG1CQUFPLEtBQUssVUFBVTs7OztVQUd4QixLQUFBO2lCQUFBLHVCQUFjLE1BQU07QUFDbEIsZ0JBQU0sbUJBQW1CLEtBQUssdUJBQ3hCLG1CQUFtQixLQUFLLHVCQUN4QixjQUFjLEtBQUssMkJBQTJCLGtCQUFrQjtBQUV0RSxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsb0NBQTJCLGtCQUFrQixrQkFBa0I7QUFDN0QsZ0JBQUksY0FBYztBQUVsQixnQkFBTSxlQUFlLEtBQUssc0JBQXNCLG1CQUMxQyxlQUFlLEtBQUssc0JBQXNCLG1CQUMxQyxxQ0FBc0MsaUJBQWlCLFFBQVUsaUJBQWlCO0FBRXhGLGdCQUFJLG9DQUFvQztBQUN0Qyw0QkFBYyxhQUFhLDRCQUE0Qjs7QUFHekQsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHFDQUE0QixZQUFZO0FBQ3RDLGdCQUFNLGNBQWMsS0FBSyxrQkFDbkIsZ0NBQWdDLFlBQVksU0FBUyxhQUNyRCxnQkFBZ0I7QUFFdEIsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLGlDQUF3QjtBQUN0QixnQkFBTSxXQUFXLEtBQUs7Z0JBL0k2QixVQUFvQixjQWlKekQ7QUFFZCxnQkFBTSxrQkFBa0IsVUFDbEIscUJBQWtCLElBcEoyQixVQUFvQix3QkFvSnBCO0FBRW5ELG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSxpQkFBUSxNQUFNO0FBQ1osZ0JBQU0sbUJBQW1CLEtBQUssdUJBQ3hCLG1CQUFtQixLQUFLLHVCQUN4QixVQUFVLEtBQUsscUJBQXFCLGtCQUFrQjtBQUU1RCxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsb0JBQVcsTUFBTTtBQUNmLGdCQUFNLG1CQUFtQixLQUFLLHVCQUN4QixtQkFBbUIsS0FBSztBQUU5QixpQkFBSyx3QkFBd0Isa0JBQWtCOzs7O1VBR2pELEtBQUE7aUJBQUEsOEJBQXFCLGtCQUFrQixrQkFBa0I7QUFDdkQsZ0JBQUksVUFBVTtBQUVkLGdCQUFJLHFCQUFxQixrQkFBa0I7QUFDekMsa0JBQU0sZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsY0FBYyxhQUFhLDRCQUE0QjtBQUU3RCxrQkFBSSxhQUFhO0FBQ2YsMEJBQVU7cUJBQ0w7QUFDTCxvQkFBTSxvQkFBb0IsYUFBYSxZQUNqQyxvQkFBb0IsYUFBYSxZQUNqQyxtQkFBb0Isb0JBQW9CO0FBRTlDLDBCQUFVLG1CQUNFLDhCQUE4QixjQUFjLGdCQUMxQztBQUVkLG9CQUFJLFNBQVM7QUFDWCxzQkFBTSw2QkFBNkIsY0FDN0IsMkJBQTJCO0FBRWpDLDZDQUEyQiw0QkFBNEI7QUFFdkQsMkNBQXlCLDhCQUE4Qjs7OztBQUs3RCxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsaUNBQXdCLGtCQUFrQixrQkFBa0I7QUFDMUQsZ0JBQU0sY0FBYyxLQUFLLDJCQUEyQixrQkFBa0I7QUFFdEUsZ0JBQUksYUFBYTtBQUNmLGtCQUFNLGVBQWUsS0FBSyxzQkFBc0IsbUJBQzFDLGVBQWUsS0FBSyxzQkFBc0I7QUFFaEQsMkJBQWEsK0JBQStCO0FBQzVDLDJCQUFhLGlDQUFpQzs7Ozs7VUFJbEQsS0FBQTtpQkFBQSx1Q0FBOEIsa0JBQWtCO0FBQzlDLGdCQUFNLHNCQUFzQixLQUFLLDRCQUE0QjtBQUU3RCxnQkFBSSxxQkFBcUI7QUFDdkIsa0JBQU0sZUFBZSxLQUFLLHNCQUFzQjtBQUVoRCwyQkFBYTs7Ozs7VUFJakIsS0FBQTtpQkFBQSx1Q0FBOEIsa0JBQWtCO0FBQzlDLGdCQUFNLHNCQUFzQixLQUFLLDRCQUE0QjtBQUU3RCxnQkFBSSxxQkFBcUI7QUFDdkIsa0JBQU0sZUFBZSxLQUFLLHNCQUFzQjtBQUVoRCwyQkFBYTs7Ozs7VUFJakIsS0FBQTtpQkFBQSwrQkFBc0IsWUFBWTtBQUNoQyxnQkFBTSxnQkFBZ0IsS0FBSyw0QkFBNEI7QUFFdkQsZ0JBQUUsQ0FBRyxlQUFlO0FBQ2xCLGtCQUFNLGNBQWMsS0FBSyxrQkFDbkIsb0JBQW9CLFlBQVksUUFDaEMsT0FBTyxZQUNQLFFBQVEsbUJBQ1IsU0FuUE8sUUFBVSxRQW1QRCxpQkFBaUIsTUFBTTtBQUU3QyxtQkFBSyxzQkFBc0IsWUFBWTs7QUFHekMsZ0JBQU0sVUFBUyxLQUFLLHNCQUFzQjtBQUUxQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsa0NBQXlCLFlBQVk7QUFDbkMsZ0JBQUksZUFBZTtBQUVuQixnQkFBTSxnQkFBZ0IsS0FBSyw0QkFBNEI7QUFFdkQsZ0JBQUksZUFBZTtBQUNqQiw2QkFBZTtBQUVmLGtCQUFNLFVBQVMsS0FBSyxzQkFBc0I7QUFFMUMsc0JBQU8sZ0NBQWdDLFNBQUMsd0JBQTJCO0FBQ2pFLG9CQUFNLDZCQUE2QixTQUM3QixpQ0FBaUMsMkJBQTJCLFdBQzVELDZCQUE2Qix1QkFBdUIsV0FDcEQsOEJBQThCLGdDQUM5Qiw4QkFBOEIsNEJBQzlCLGNBQWMsSUE5UVgsTUFBUSxRQThRWSw2QkFBNkI7QUFFMUQsNkJBQWEsS0FBSztBQUVsQix1Q0FBdUIsaUNBQWlDOztBQUcxRCxzQkFBTyxrQ0FBa0MsU0FBQyw0QkFBK0I7QUFDdkUsb0JBQU0seUJBQXlCLFNBQ3pCLGlDQUFpQywyQkFBMkIsV0FDNUQsNkJBQTZCLHVCQUF1QixXQUNwRCw4QkFBOEIsZ0NBQzlCLDhCQUE4Qiw0QkFDOUIsY0FBYyxJQTNSWCxNQUFRLFFBMlJZLDZCQUE2QjtBQUUxRCw2QkFBYSxLQUFLO0FBRWxCLDJDQUEyQiwrQkFBK0I7O0FBRzVELG1CQUFLLHlCQUF5QjtBQUU5QixrQkFBTSxnQkFBZ0IsU0FDaEIscUJBQXFCLGNBQWMsWUFDbkMsV0FBVyxLQUFLLGVBQ2hCLG9CQUFtQixTQUFTLE9BQU8sU0FBQyxrQkFBa0IsUUFBVztBQUMvRCxvQkFBTSxjQUFjLE9BQU8sWUFDckIsaUJBQWtCLGNBQWM7QUFFdEMsb0JBQUksZ0JBQWdCO0FBQ2xCLHNCQUFNLGlCQUFpQjtBQUV2QixtQ0FBaUIsS0FBSzs7QUFHeEIsdUJBQU87aUJBQ047QUFFVCxnQ0FBaUIsUUFBUSxTQUFDLGdCQUFjO0FBQUssdUJBQUEsZUFBZTs7O0FBRzlELG1CQUFPOzs7OztVQUdGLEtBQUE7aUJBQVAsdUJBQXFCO0FBQ25CLGdCQUFNLFlBQVksSUFDWix1QkFBdUIsSUFBSSxzQkFBcUI7QUFFdEQsbUJBQU87Ozs7VUFHRixLQUFBO2lCQUFQLHlCQUF1QixhQUFhO0FBQ2xDLGdCQUFNLFlBQVkseUJBQXlCO0FBRTNDLGdCQUFNLHVCQUF1QixJQUFJLHNCQUFxQjtBQUV0RCxtQkFBTzs7OztVQUdGLEtBQUE7aUJBQVAsNkJBQTJCLGlCQUFpQjtBQUMxQyxnQkFBTSxZQUFZLDZCQUE2QjtBQUUvQywrQkFBbUIsaUJBQWlCO0FBRXBDLGdCQUFNLHVCQUF1QixJQUFJLHNCQUFxQjtBQUV0RCxtQkFBTzs7OzthQXpVVTs7c0JBQUE7MkNBNlVrQixjQUFjLGNBQWM7QUFDakUsVUFBSSxVQUFVO0FBRWQsVUFBTSwyQkFBMkIsYUFBYSxpQ0FBaUMsZUFDekUsNkJBQTZCLEtBQUssMkJBQ2xDLGlCQUFrQiwrQkFBK0I7QUFFdkQsVUFBRSxDQUFHLGdCQUFnQjtBQUNuQixZQUFNLDRCQUE0QixhQUFhO1lBelZJLFVBQW9CLGNBMlZ6RDtZQTNWcUMsVUFBb0IsY0E2VnpEO0FBRWQsWUFBTSxtQkFBbUIsR0FBRyxPQUFPLDJCQUEyQixPQUFPLDJCQUMvRCx3QkFBd0IsaUJBQWlCLElBQUksU0FBQyxnQkFBbUI7QUFDL0QsY0FBTSxzQkFBc0IsZUFBZTtBQUUzQyxpQkFBTzs7QUFHZiw4QkFBc0IsS0FBSyxTQUFDLFFBQVEsUUFBTTtBQUFLLGlCQUFDLFNBQVM7O0FBRXpELHlCQUFpQixRQUFRLFNBQUMsZ0JBQWdCLE9BQVU7QUFDbEQsY0FBTSxzQkFBc0Isc0JBQXNCO0FBRWxELHlCQUFlLFNBQVM7O0FBRzFCLGtCQUFVOztBQUdaLGFBQU87O3NDQUd5QixhQUFhO0FBQzdDLFVBQU0sWUFBWTtBQUVsQixrQkFBWSxRQUFRLFNBQUMsWUFBWSxPQUFVO0FBQ3pDLFlBQU0sT0FBTyxZQUNQLFNBM1hTLFFBQVUsUUEyWEgsaUJBQWlCLE1BQU07QUFFN0Msa0JBQVUsY0FBYzs7QUFHMUIsYUFBTzs7MENBRzZCLGlCQUFpQjtBQUNyRCxVQUFNLFlBQVk7QUFFbEIsc0JBQWdCLFFBQVEsU0FBQyxlQUFlLE9BQVU7QUFDaEQsWUFBTSxPQUFPLGNBQWMsV0FDckIsU0F4WVMsUUFBVSxRQXdZSCxpQkFBaUIsTUFBTSxRQUN2QyxhQUFhO0FBRW5CLGtCQUFVLGNBQWM7O0FBRzFCLGFBQU87O2dDQUdtQixpQkFBaUIsV0FBVztBQUN0RCxzQkFBZ0IsUUFBUSxTQUFDLGVBQWtCO0FBQ3pDLHNCQUFjLG9CQUFvQixTQUFDLGNBQWlCO0FBQ2xELGNBQU0sbUJBQW1CLGFBQWEsdUJBQ2hDLG1CQUFtQixhQUFhLHVCQUNoQyxpQ0FBaUMsa0JBQ2pDLCtCQUErQixrQkFDL0IsNkJBQTZCLFVBQVUsaUNBQ3ZDLDJCQUEyQixVQUFVO0FBRTNDLHFDQUEyQiw0QkFBNEI7QUFFdkQsbUNBQXlCLDhCQUE4Qjs7Ozs7OztBQ2xhN0Q7Ozs7O21DQUVvQixRQUFJOzs7cUJBQWY7OzttQ0FDVyx3QkFBb0I7OztxQ0FBL0I7Ozs7Ozs7Ozs7Ozs7QUNIVDs7Ozs7O0FBRXFCLFFBQUEsb0JBQW9CO21CQUFwQixrQkFBb0I7Ozs7O0FDRnpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCLFFBQU4sMkJBQVE7cUJBQ1Qsa0JBQWtCLGtCQUFnQjs4QkFEM0I7QUFFakIsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxtQkFBbUI7O21CQUhQLE9BQUk7O1VBTXZCLEtBQUE7aUJBQUEsK0JBQXNCO0FBQ3BCLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLCtCQUFzQjtBQUNwQixtQkFBTyxLQUFLOzs7O2FBWEs7O3NCQUFBOzs7O0FDRnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCLFNBQU4sMkJBQVE7dUJBQ1QsTUFBTSxlQUFlLGVBQWE7OEJBRDNCO0FBRWpCLGFBQUssT0FBTztBQUNaLGFBQUssZ0JBQWdCO0FBQ3JCLGFBQUssZ0JBQWdCOzttQkFKSixTQUFNOztVQU96QixLQUFBO2lCQUFBLG1CQUFVO0FBQ1IsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsNEJBQW1CO0FBQ2pCLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLDRCQUFtQjtBQUNqQixtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxzQkFBYTtBQUNYLGdCQUFNLHNCQUFzQixLQUFLLGNBQWMsUUFDekMsV0FBWSx3QkFBd0I7QUFFMUMsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHlCQUFnQixjQUFjO0FBQzVCLGlCQUFLLGNBQWMsS0FBSzs7OztVQUcxQixLQUFBO2lCQUFBLHlCQUFnQixjQUFjO0FBQzVCLGlCQUFLLGNBQWMsS0FBSzs7OztVQUcxQixLQUFBO2lCQUFBLDRCQUFtQixjQUFjO0FBQy9CLGdCQUFNLFFBQVEsS0FBSyxjQUFjLFFBQVE7QUFFekMsaUJBQUssY0FBYyxPQUFPLE9BQU87Ozs7VUFHbkMsS0FBQTtpQkFBQSw2QkFBb0IsVUFBVTtBQUM1QixpQkFBSyxjQUFjLFFBQVE7Ozs7VUFHN0IsS0FBQTtpQkFBQSw2QkFBb0IsVUFBVTtBQUM1QixpQkFBSyxjQUFjLFFBQVE7Ozs7O1VBR3RCLEtBQUE7aUJBQVAsd0JBQXNCLFlBQVk7QUFDaEMsZ0JBQU0sT0FBTyxZQUNQLGdCQUFnQixJQUNoQixnQkFBZ0IsSUFDaEIsU0FBUyxJQUFJLFFBQU8sTUFBTSxlQUFlO0FBRS9DLG1CQUFPOzs7O2FBdERVOztzQkFBQTs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVxQixpQkFBTiwyQkFBUTsrQkFDVCxPQUFLOzhCQURFO0FBRWpCLGFBQUssUUFBUTs7bUJBRkksaUJBQWM7O1VBS2pDLEtBQUE7aUJBQUEsNEJBQW1CO0FBQ2pCLGdCQUFNLGNBQWMsS0FBSyxNQUFNLFFBQ3pCLGdCQUFpQixnQkFBZ0I7QUFFdkMsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLGtDQUF5QixVQUFVO0FBQ2pDLGlCQUFLLE1BQU0sUUFBUSxTQUFDLE1BQVM7QUFDM0Isa0JBQU0sbUJBQW1CLEtBQUssdUJBQ3hCLG1CQUFtQixLQUFLO0FBRTlCLHVCQUFTLGtCQUFrQjs7Ozs7YUFqQlo7O3NCQUFBOzs7O0FDRnJCOzs7Ozs7QUFFK0IsUUFBQSxhQUFXO0FBRXpCLFFBQUEsUUFBUSx1QkFBQTtBQUNOLFFBQUEsVUFBVSx1QkFBQTtBQUNGLFFBQUEsa0JBQWtCLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLFFBQVEsU0FOdUIsV0FBVyxlQU1sQztBQUFSLFFBQWUsVUFOZ0IsV0FBVyxlQU0zQjtBQUFmLFFBQXVCLG1CQU5RLFdBQVcsZUFNbkI7UUFFRixRQUFOLDJCQUFRO3NCQUNULGlCQUFpQixnQkFBYzs4QkFEeEI7QUFFakIsYUFBSyxrQkFBa0I7QUFDdkIsYUFBSyxpQkFBaUI7O21CQUhMLFFBQUs7O1VBTXhCLEtBQUE7aUJBQUEsOEJBQXFCO0FBQ25CLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLDZCQUFvQjtBQUNsQixtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSw0QkFBbUI7QUFBRSxtQkFBTyxLQUFLLGVBQWU7Ozs7O1VBRXpDLEtBQUE7aUJBQVAsNEJBQTBCLGdCQUFnQjtBQUN4QyxnQkFBTSxZQUFZLDRCQUE0QixpQkFDeEMsUUFBUSxvQ0FBb0MsZ0JBQWdCLFlBQzVELGtCQUFrQixxQ0FBcUMsV0FBVyxRQUNsRSxpQkFBaUIsSUF4QkEsZ0JBQWtCLFFBd0JDLFFBQ3BDLFFBQVEsSUFBSSxPQUFNLGlCQUFpQjtBQUV6QyxtQkFBTzs7OztVQUdGLEtBQUE7aUJBQVAsaUNBQStCLGFBQWEsT0FBTztBQUNqRCxvQkFBUSxNQUFNO0FBRWQsZ0JBQU0sWUFBWSxpQ0FBaUMsYUFBYSxRQUMxRCxrQkFBa0IscUNBQXFDLFdBQVcsUUFDbEUsaUJBQWlCLElBbkNBLGdCQUFrQixRQW1DQyxRQUNwQyxRQUFRLElBQUksT0FBTSxpQkFBaUI7QUFFekMsbUJBQU87Ozs7YUFsQ1U7O3NCQUFBOzhDQXNDcUIsYUFBYSxPQUFPO0FBQzVELFVBQU0sWUFBWTtBQUVsQixrQkFBWSxRQUFRLFNBQUMsWUFBZTtBQUNsQyxZQUFNLGVBQWUsVUFBVSxlQUFlO0FBRTlDLFlBQUUsQ0FBRyxjQUFjO0FBQ2pCLGNBQU0sU0FsRE8sUUFBVSxRQWtERCxlQUFlO0FBRXJDLG9CQUFVLGNBQWM7OztBQUk1QixZQUFNLFFBQVEsU0FBQyxNQUFTO0FBQ3RCLFlBQU0sbUJBQW1CLEtBQUssdUJBQ3hCLG1CQUFtQixLQUFLLHVCQUN4QixxQkFBcUIsVUFBVSxlQUFlLG1CQUM5QyxxQkFBcUIsVUFBVSxlQUFlO0FBRXBELFlBQUUsQ0FBRyxvQkFBb0I7QUFDdkIsY0FBTSxlQS9ETyxRQUFVLFFBK0RLLGVBQWU7QUFFM0Msb0JBQVUsb0JBQW9COztBQUdoQyxZQUFFLENBQUcsb0JBQW9CO0FBQ3ZCLGNBQU0sZUFyRU8sUUFBVSxRQXFFSyxlQUFlO0FBRTNDLG9CQUFVLG9CQUFvQjs7QUFHaEMsWUFBTSxnQkFBZSxVQUFVLG1CQUN6QixnQkFBZSxVQUFVLG1CQUN6QixlQUFlLE1BQ2YsZUFBZTtBQUVyQixzQkFBYSxnQkFBZ0I7QUFFN0Isc0JBQWEsZ0JBQWdCOztBQUcvQixhQUFPOzt5Q0FHNEIsZ0JBQWdCO0FBQ25ELFVBQU0sWUFBWTtBQUVsQixxQkFBZSxRQUFRLFNBQUMsZUFBa0I7QUFDeEMsWUFBTSw0QkFBNEIsT0FBTSxnQkFDbEMsYUFBYSwyQkFDYixlQUFlLFVBQVUsZUFBZTtBQUU5QyxZQUFFLENBQUcsY0FBYztBQUNqQixjQUFNLFNBaEdPLFFBQVUsUUFnR0QsZUFBZTtBQUVyQyxvQkFBVSxjQUFjOztBQUcxQixZQUFNLDZCQUE2QixRQUFPLGdCQUNwQyxzQkFBc0I7QUFFNUIsNEJBQW9CLFFBQVEsU0FBQyxvQkFBdUI7QUFDbEQsY0FBTSx1QkFBdUIsVUFBVSxlQUFlO0FBRXRELGNBQUUsQ0FBRyxzQkFBc0I7QUFDekIsZ0JBQU0saUJBNUdLLFFBQVUsUUE0R1MsZUFBZTtBQUU3QyxzQkFBVSxzQkFBc0I7Ozs7QUFLdEMsYUFBTzs7aURBR29DLGdCQUFnQixXQUFXO0FBQ3RFLFVBQU0sUUFBUTtBQUVkLHFCQUFlLFFBQVEsU0FBQyxlQUFrQjtBQUN4QyxZQUFNLDRCQUE0QixPQUFNLGdCQUNsQyw2QkFBNkIsUUFBTyxnQkFDcEMsc0JBQXNCLDRCQUN0QixhQUFhO0FBRW5CLDRCQUFvQixRQUFRLFNBQUMsb0JBQXVCO0FBQ2xELGNBQU0sbUJBQW1CLG9CQUNuQixtQkFBbUIsWUFDbkIsZUFBZSxVQUFVLG1CQUN6QixlQUFlLFVBQVUsbUJBQ3pCLE9BQU8sSUFySUYsTUFBUSxRQXFJRyxrQkFBa0IsbUJBQ2xDLGVBQWUsTUFDZixlQUFlO0FBRXJCLGdCQUFNLEtBQUs7QUFFWCx1QkFBYSxnQkFBZ0I7QUFFN0IsdUJBQWEsZ0JBQWdCOzs7QUFJakMsYUFBTzs7a0RBR3FDLFdBQVcsT0FBTztBQUM5RCxVQUFNLHFCQUFxQixJQUNyQixzQkFBc0IsaUNBQWlDLFlBQ3ZELGVBQWU7QUFFckIsVUFBSSw0QkFBNEIsb0JBQW9CO2FBRTdDLDRCQUE0QixHQUFHO0FBQ3BDLFlBQU0scUJBQXFCLG9CQUFvQixPQUN6QyxvQkFBb0I7QUFFMUIsMkJBQW1CLEtBQUs7QUFFeEIseUJBQWlCLE9BQU8sU0FBQyxNQUFNLE9BQVU7QUFDdkMsY0FBTSxtQkFBbUIsS0FBSyx1QkFDeEIsZUFBZ0IscUJBQXFCO0FBRTNDLGNBQUksY0FBYztBQUNoQixrQkFBTSxPQUFPLE9BQU87QUFFcEIsZ0JBQU0sbUJBQW1CLEtBQUssdUJBQ3hCLGVBQWUsVUFBVSxtQkFDekIsZUFBZSxNQUNmLGNBQWM7QUFFcEIseUJBQWEsbUJBQW1CO0FBRWhDLHlCQUFhLEtBQUs7QUFFbEIsZ0JBQU0sdUJBQXVCLGFBQWE7QUFFMUMsZ0JBQUksc0JBQXNCO0FBQ3hCLGtCQUFNLHNCQUFxQjtBQUUzQixrQ0FBb0IsS0FBSzs7OztBQUsvQixvQ0FBNEIsb0JBQW9COztBQUdsRCxVQUFNLGNBQWMsTUFBTTtBQUUxQixVQUFJLGdCQUFnQixHQUFHO0FBQ3JCLHFCQUFhLFFBQVEsU0FBQyxhQUFnQjtBQUNwQyxjQUFNLG1CQUFtQixZQUFZLHVCQUMvQixlQUFlLFVBQVUsbUJBQ3pCLGVBQWU7QUFFckIsdUJBQWEsZ0JBQWdCOzs7QUFJakMsVUFBTSxrQkFBa0IsbUJBQW1CLElBQUksU0FBQyxvQkFBaUI7QUFBSyxlQUFBLFVBQVU7O0FBRWhGLGFBQU87OzhDQUdpQyxXQUFXO0FBQ25ELFVBQU0sY0FBYyxPQUFPLEtBQUssWUFDMUIsdUJBQXNCLFlBQVksT0FBTyxTQUFDLHFCQUFxQixZQUFlO0FBQzVFLFlBQU0sU0FBUyxVQUFVLGFBQ25CLGlCQUFpQixPQUFPO0FBRTlCLFlBQUksZ0JBQWdCO0FBQ2xCLGNBQU0scUJBQXFCO0FBRTNCLDhCQUFvQixLQUFLOztBQUczQixlQUFPO1NBQ047QUFFVCxhQUFPOzs7OztBQ2xPVDs7Ozs7bUNBRW9CLFNBQUs7OztzQkFBaEI7Ozs7Ozs7Ozs7OztBQ0ZUOzs7OztZQU1nQixnQ0FBQTtZQThCQSwwQkFBQTtZQVVBLDJCQUFBO0FBNUNlLFFBQUEsYUFBVztBQUUxQyxRQUFRLFNBRnVCLFdBQVcsZUFFbEM7QUFBUixRQUFlLFVBRmdCLFdBQVcsZUFFM0I7MkNBRStCLGdCQUFnQjtBQUM1RCxVQUFNLGdCQUFnQjtBQUV0QixxQkFBZSxRQUFRLFNBQUMsZUFBa0I7QUFDeEMsWUFBTSw0QkFBNEIsT0FBTSxnQkFDbEMsYUFBYSwyQkFDYixlQUFlLGNBQWMsZUFBZTtBQUVsRCxZQUFFLENBQUcsY0FBYztBQUNqQix3QkFBYyxjQUFjOztBQUc1QixZQUFNLDZCQUE2QixRQUFPLGdCQUNwQyxzQkFBc0I7QUFFOUIsNEJBQW9CLFFBQVEsU0FBQyxvQkFBdUI7QUFDbEQsY0FBTSx1QkFBdUIsY0FBYyxlQUFlO0FBRTFELGNBQUUsQ0FBRyxzQkFBc0I7QUFDekIsMEJBQWMsc0JBQXNCOzs7O0FBSzFDLFVBQU0sb0JBQW9CLE9BQU8sS0FBSyxnQkFDaEMsY0FBYztBQUVwQixhQUFPOztxQ0FHK0IsVUFBVTtBQUNoRCxVQUFNLGNBQWMsU0FBUyxJQUFJLFNBQUMsUUFBVztBQUMzQyxZQUFNLGFBQWEsT0FBTztBQUUxQixlQUFPOztBQUdULGFBQU87O3NDQUdnQyxRQUFRLFVBQVU7VUFlaEQseUJBQVQsbUNBQWtDO0FBQ2hDLFlBQU0sc0JBQXNCO0FBRTVCLGVBQU87O0FBakJULFVBQU0sa0JBQWtCO0FBRXhCLHNDQUFnQyxRQUFRLFNBQUMsZUFBZSx5QkFBMkI7QUFDakYsWUFBTSxZQUFZLFNBQVMsZUFBZTtBQUUxQyx3QkFBZ0IsS0FBSztBQUVyQixlQUFPO1NBQ047QUFFSCxzQkFBZ0IsUUFBUSxTQUFDLGVBQWE7QUFBSyxlQUFBLGNBQWM7O0FBRXpELGFBQU87OzZDQVNnQyxRQUFRLFVBQVUsd0JBQXdCO0FBQ2pGLFVBQUksWUFBWTtBQUVoQixVQUFJLE9BQU8sWUFBWSxPQUFPO0FBQzVCLGVBQU8sVUFBVTtBQUVqQixZQUFNLGdCQUFnQjtBQUV0QixvQkFBWSxTQUFTLGVBQWU7QUFFcEMsWUFBSSxjQUFjLE1BQU07QUFDdEIsd0JBQWMsNkJBQTZCLFNBQUMsMEJBQTZCO0FBQ3ZFLHdCQUFZLGdDQUFnQywwQkFBMEIsVUFBVSxXQUFNO0FBQ3BGLGtCQUFJLHNCQUFzQjtBQUUxQixrQkFBTSw2QkFBNkIsUUFDN0Isb0JBQW9CO0FBRTFCLG9DQUFzQixvQkFBb0IsT0FBTztBQUVqRCxxQkFBTzs7QUFHVCxtQkFBTzs7OztBQUtiLGFBQU87Ozs7O0FDaEdUOzs7Ozs7QUFFK0IsUUFBQSxhQUFXO0FBRUYsUUFBQSxVQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsUUFBUSxTQUp1QixXQUFXLGVBSWxDO1FBRWEsUUFBTiwyQkFBUTtzQkFDVCxhQUFXOzhCQURKO0FBRWpCLGFBQUssY0FBYzs7bUJBRkYsUUFBSzs7VUFLeEIsS0FBQTtpQkFBQSwwQkFBaUI7QUFDZixtQkFBTyxLQUFLOzs7OztVQUdQLEtBQUE7aUJBQVAsd0RBQXNELFlBQVksY0FBYyxtQkFBbUI7QUFDakcsZ0NBQW9CLGtCQUFrQjtBQUV0QyxnQkFBTSwwQkFBMEIsa0JBQWtCO0FBRWxELGdCQUFJLDBCQUEwQixHQUFHO0FBQy9CLGtCQUFNLHVCQUF1QixPQUFNLG9CQUM3QiwyQkFBMkIscUJBQXFCLFdBQ2hELDZCQUE2QixhQUFhO0FBRWhELGtCQUFJLDZCQUE2Qiw0QkFBNEI7QUFDM0Qsa0NBQWtCOzs7QUFJdEIsZ0JBQU0sNkJBQTZCLGFBQWEsaUNBQzFDLDhCQUE2QixhQUFhLGlDQUMxQyx5QkFBeUIsYUFBYSw2QkFDdEMsdUJBQW9CLElBL0JVLFNBQW9CLHdCQStCSCxvQkFDL0MsY0FBZSxlQUFlLDhCQUNkLEdBQUcsT0FBTyw2QkFBNEIsT0FBTyx3QkFBd0IsT0FBTyw4QkFDMUUsR0FBRyxPQUFPLHdCQUF3QixPQUFPLDRCQUE0QixPQUFPLDZCQUE0QixPQUFPLHVCQUNqSSxRQUFRLElBQUksT0FBTTtBQUV4QixtQkFBTzs7OzthQWpDVTs7c0JBQUE7Ozs7QUNSckI7Ozs7OztBQUUrQixRQUFBLGFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLFFBQVEsU0FGdUIsV0FBVyxlQUVsQztRQUVhLGVBQU4sMkJBQVE7NkJBQ1QscUJBQXFCLFlBQVU7OEJBRHhCO0FBRWpCLGFBQUssc0JBQXNCO0FBQzNCLGFBQUssYUFBYTs7bUJBSEQsZUFBWTs7VUFNL0IsS0FBQTtpQkFBQSxrQ0FBeUI7QUFDdkIsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEseUJBQWdCO0FBQ2QsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsK0JBQXNCO0FBQ3BCLGdCQUFNLDZCQUE2QixLQUFLLFdBQVcsdUJBQzdDLG1CQUFtQjtBQUV6QixtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEscUNBQTRCO0FBQzFCLGdCQUFNLHlCQUF5QixLQUFLLG9CQUFvQixJQUFJLFNBQUMsbUJBQXNCO0FBQ2pGLGtCQUFNLHdCQUF3QixrQkFBa0I7QUFFaEQscUJBQU87O0FBR1QsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHlDQUFnQztBQUM5QixnQkFBTSw2QkFBNkIsS0FBSyxXQUFXO0FBRW5ELG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSx5Q0FBZ0M7QUFDOUIsZ0JBQU0sNkJBQTZCLEtBQUssV0FBVztBQUVuRCxtQkFBTzs7Ozs7VUFHRixLQUFBO2lCQUFQLDhDQUE0QyxZQUFZLHFCQUFxQjtBQUMzRSxrQ0FBc0Isb0JBQW9CO0FBRTFDLGdCQUFNLDRCQUE0QixvQkFBb0I7QUFFdEQsZ0JBQUksNEJBQTRCLEdBQUc7QUFDakMsa0JBQU0seUJBQXlCLE9BQU0sc0JBQy9CLDZCQUE2Qix1QkFBdUIsV0FDcEQsNkJBQTZCLFdBQVc7QUFFOUMsa0JBQUksK0JBQStCLDRCQUE0QjtBQUM3RCxvQ0FBb0I7OztBQUl4QixnQkFBTSxlQUFlLElBQUksY0FBYSxxQkFBcUI7QUFFM0QsbUJBQU87Ozs7YUE1RFU7O3NCQUFBOzs7O0FDTnJCOzs7OztZQVFnQiwwQkFBQTtZQXFCQSx5QkFBQTtZQWNBLHNCQUFBO1lBYUEsMEJBQUE7WUFZQSwwQkFBQTtBQWxFZSxRQUFBLGFBQVc7QUFFMUMsUUFBUSxRQUZ1QixXQUFXLGVBRWxDO0FBRVIsUUFBTSxTQUFTO3FDQUV5QixnQkFBZ0I7QUFDdEQsVUFBTSxRQUFRO0FBRWQscUJBQWUsUUFBUSxTQUFDLGVBQWtCO0FBQ3hDLFlBQU0sNEJBQTRCLE1BQU0sZ0JBQ2xDLDZCQUE2QixPQUFPLGdCQUNwQyxzQkFBc0IsNEJBQ3RCLGFBQWE7QUFFbkIsNEJBQW9CLFFBQVEsU0FBQyxvQkFBdUI7QUFDbEQsY0FBTSxtQkFBbUIsb0JBQ25CLG1CQUFtQixZQUNuQixPQUFPLElBQUksS0FBSyxrQkFBa0I7QUFFeEMsZ0JBQU0sS0FBSzs7O0FBSWYsYUFBTzs7b0NBRzhCLE9BQU0sT0FBTztBQUNsRCxVQUFNLFFBQVEsT0FDUixvQkFBb0IsTUFBTSxLQUFLLFNBQUMsTUFBUztBQUN2QyxZQUFNLFFBQVEsTUFDUixVQUFVLE1BQU0sTUFBTTtBQUU1QixZQUFJLFNBQVM7QUFDWCxpQkFBTzs7O0FBSWpCLGFBQU87O2lDQUcyQixPQUFNLE9BQU87QUFDL0MsVUFBTSxRQUFRO0FBRWQsYUFBTyxPQUFPLFNBQUMsTUFBUztBQUN0QixZQUFNLFFBQVEsTUFDUixVQUFVLE1BQU0sTUFBTTtBQUU1QixZQUFFLENBQUcsU0FBUztBQUNaLGlCQUFPOzs7O3FDQUsyQixrQkFBa0IsT0FBTztBQUMvRCxjQUFRLE1BQU0sT0FBTyxTQUFDLE1BQVM7QUFDN0IsWUFBTSxVQUFVLEtBQUssc0JBQXNCO0FBRTNDLFlBQUksU0FBUztBQUNYLGlCQUFPOzs7QUFJWCxhQUFPOztxQ0FHK0Isa0JBQWtCLE9BQU87QUFDL0QsY0FBUSxNQUFNLE9BQU8sU0FBQyxNQUFTO0FBQzdCLFlBQU0sVUFBVSxLQUFLLHNCQUFzQjtBQUUzQyxZQUFJLFNBQVM7QUFDWCxpQkFBTzs7O0FBSVgsYUFBTzs7Ozs7QUM3RVQ7Ozs7OztBQUVzQixRQUFBLGFBQVk7QUFDSCxRQUFBLGFBQVc7QUFDTCxRQUFBLG9CQUFvQjtBQUV4QyxRQUFBLFFBQVEsdUJBQUE7QUFDUCxRQUFBLFNBQVMsdUJBQUE7QUFDRixRQUFBLGdCQUFnQix1QkFBQTtBQUUrQixRQUFBLFVBQW9CO0FBQzJDLFFBQUEsU0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekosUUFBUSxTQVZ1QixXQUFXLGVBVWxDO0FBQVIsUUFBZSxTQVZnQixXQUFXLGVBVTNCO1FBRU0sZ0JBQU4sMkJBQVE7OEJBQ1QsYUFBYSxzQkFBb0I7OEJBRDFCO0FBRWpCLGFBQUssY0FBYztBQUVuQixhQUFLLHVCQUF1Qjs7bUJBSlgsZ0JBQWE7O1VBT2hDLEtBQUE7aUJBQUEsMEJBQWlCO0FBQ2YsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsbUNBQTBCO0FBQ3hCLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLHdEQUErQyxZQUFZLE9BQTRCO2dCQUE1QixxQkFBQSxVQUEwQixTQUFMLFFBQXJCO0FBQ3pELGdCQUFNLGtDQUFrQyxLQUFLLHFCQUFxQiwrQ0FBK0M7QUFFakgsZ0JBQUksb0JBQW9CO0FBQ3RCLG1CQUFLLFlBQVksUUFBUSxTQUFDLFlBQWU7QUFDdkMsb0JBQU0sNkJBQTZCLFdBQVc7QUFFOUMsb0JBQUksK0JBQStCLFlBQVk7QUFDN0Msc0JBQU0sNkJBQTZCLFdBQVcsdUJBQ3hDLGlDQUFpQztBQUV2QyxrREFBZ0MsS0FBSzs7OztBQUszQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsc0RBQTZDLFlBQVksT0FBNEI7Z0JBQTVCLHFCQUFBLFVBQTBCLFNBQUwsUUFBckI7QUFDdkQsZ0JBQU0sZ0NBQWdDLEtBQUsscUJBQXFCLDZDQUE2QztBQUU3RyxnQkFBSSxvQkFBb0I7QUFDdEIsbUJBQUssWUFBWSxRQUFRLFNBQUMsWUFBZTtBQUN2QyxvQkFBTSw2QkFBNkIsV0FBVztBQUU5QyxvQkFBSSwrQkFBK0IsWUFBWTtBQUM3QyxzQkFBTSw2QkFBNkIsV0FBVyx1QkFDeEMsK0JBQStCO0FBRXJDLGdEQUE4QixLQUFLOzs7O0FBS3pDLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwrQ0FBc0MsWUFBWTtBQUFFLG1CQUFPLEtBQUsscUJBQXFCLHNDQUFzQzs7OztVQUUzSCxLQUFBO2lCQUFBLDZDQUFvQyxZQUFZO0FBQUUsbUJBQU8sS0FBSyxxQkFBcUIsb0NBQW9DOzs7O1VBRXZILEtBQUE7aUJBQUEsc0NBQTZCLFlBQVk7QUFDdkMsZ0JBQUksZ0JBQWdCO0FBRXBCLGdCQUFNLGdCQUFnQixLQUFLLHFCQUFxQiw0QkFBNEI7QUFFNUUsZ0JBQUksZUFBZTtBQUNqQixrQkFBTSxhQUFhLEtBQUssMEJBQTBCO0FBRWxELDhCQUFpQixlQUFlOztBQUdsQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEscUNBQTRCLFlBQVk7QUFBRSxtQkFBTyxLQUFLLHFCQUFxQiw0QkFBNEI7Ozs7VUFFdkcsS0FBQTtpQkFBQSxtQ0FBMEIsWUFBWTs7QUFDcEMsZ0JBQUksYUFBYTtBQUVqQixnQkFBTSxTQUFTLEtBQUsscUJBQXFCLHNCQUFzQixhQUN6RCxjQUFjLEtBQUssWUFBWSxTQUMvQixnQkFBZ0IsSUFDaEIsU0FBUztnQkFwRnFELFNBQW9CLHlCQXNGL0QsUUFBUSxTQUFDLGVBQWUsd0JBQTJCO0FBQzFFLGtCQUFNLG9CQUFvQixjQUFjLFdBQ2xDLG1CQUFtQjtBQUV6QixxQkFBTyxhQUFhLFNBQUMsWUFBZTtBQUNsQyxvQkFBTSxVQUFVLFdBQVcsc0JBQXNCO0FBRWpELG9CQUFJLFNBQVM7QUFDWCxzQkFBTSxzQkFBc0IsMEJBQ3RCLGVBakdTLGNBQWdCLFFBaUdJLHFDQUFxQyxZQUFZO0FBRXBGLGdDQUFjLEtBQUs7dUJBQ2Q7QUFDTCx5QkFBTzs7O0FBSVgsa0JBQU0sb0JBQW9CLFlBQVksUUFDaEMsWUFBYSxzQkFBc0I7QUFFekMscUJBQU87O0FBR1QsMEJBQWMsS0FBSyxTQUFDLGNBQWlCO0FBQ25DLGtCQUFNLG1CQUFtQixhQUFhLHVCQUNoQyxlQUFZLE1BQVEscUJBQXFCLHNCQUFzQjtrQkEvR0gsU0FBb0IseUJBaUg3RCxjQUFjLFNBQUMsZUFBZSx3QkFBMkI7QUFDaEYsb0JBQU0sb0JBQW9CLGNBQWM7QUFFeEMsb0JBQUksc0JBQXNCLFlBQVk7QUFDcEMsc0JBQU0sc0JBQXNCLDBCQUN0QixvQkFBb0IscUJBQ3BCLFFBMUhFLE9BQVMsUUEwSEcsK0NBQStDLFlBQVksY0FBYztBQUU3Rix5QkFBTyxLQUFLOztBQUdkLG9CQUFNLGVBQWUsT0FBTyxRQUN0QixZQUFhLGVBQWU7QUFFbEMsdUJBQU87OztBQUlYLGdCQUFNLGdCQUFlLE9BQU87QUFFNUIsZ0JBQUksZ0JBQWUsR0FBRztBQUNwQiwyQkFBYSxPQUFNOztBQUdyQixtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEseUJBQWdCO0FBQ2QsZ0JBQU0sa0JBQWtCLE9BQU0sS0FBSyxjQUM3QixhQUFhLGlCQUNiLG1CQUFtQixXQUFXLHVCQUM5QixhQUFhLGtCQUNiLGFBQWEsS0FBSywwQkFBMEI7QUFFbEQsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLGlDQUF3QjtBQUFFLG1CQUFPLEtBQUsscUJBQXFCOzs7O1VBRTNELEtBQUE7aUJBQUEsNEJBQW1CO0FBQ2pCLGdCQUFNLG9CQUFvQixLQUFLLFlBQVksUUFDckMsZ0JBQWlCLG9CQUFvQjtBQUUzQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsK0JBQXNCLFlBQVk7QUFBRSxpQkFBSyxxQkFBcUIsc0JBQXNCOzs7O1VBRXBGLEtBQUE7aUJBQUEsa0NBQXlCLGFBQWE7O0FBQ3BDLHdCQUFZLFFBQVEsU0FBQyxZQUFVO0FBQUsscUJBQU0sTUFBRCxzQkFBc0I7Ozs7O1VBR2pFLEtBQUE7aUJBQUEsa0NBQXlCLFlBQVk7QUFDbkMsaUJBQUsscUJBQXFCLHlCQUF5QjtBQUVuRCxpQkFBSzs7OztVQUdQLEtBQUE7aUJBQUEscUNBQTRCLGFBQWE7O0FBQ3ZDLHdCQUFZLFFBQVEsU0FBQyxZQUFVO0FBQUsscUJBQU0sTUFBRCx5QkFBeUI7Ozs7O1VBR3BFLEtBQUE7aUJBQUEsaUJBQVEsTUFBTTtBQUNaLGdCQUFNLFVBQVUsS0FBSyxxQkFBcUIsUUFBUTtBQUVsRCxnQkFBRSxDQUFHLFNBQVM7QUFDWixrQkFBTSwwQkFBdUIsSUFsTG9HLFFBQWtCLHVCQWtMNUYsTUFBTSxLQUFLO0FBRWxFLGtCQUFFLENBQUcseUJBQXlCO0FBQzVCLG9CQUFNLGFBQWE7QUFFbkIscUJBQUssWUFBWSxLQUFLOzs7Ozs7VUFLNUIsS0FBQTtpQkFBQSxrQkFBUyxPQUFPOztBQUNkLGtCQUFNLFFBQVEsU0FBQyxNQUFJO0FBQUsscUJBQU0sTUFBRCxRQUFROzs7OztVQUd2QyxLQUFBO2lCQUFBLG9CQUFXLE1BQU0sT0FBZ0M7Z0JBQWhDLHlCQUFBLFVBQThCLFNBQUwsUUFBekI7QUFDZixnQkFBTSwwQkFBdUIsSUFqTXNHLFFBQWtCLHVCQWlNOUYsTUFBTSxLQUFLLGNBQzVELGNBQWMsS0FBSyxxQkFBcUIsY0FBYyxPQUN0RCxhQUFhO0FBRW5CLGdCQUFJLE9BQU87dUJBRUEsWUFBWTtBQUNyQixrQkFBTSxhQUFhO2tCQXhNOEcsUUFBa0Isb0JBME0vSCxZQUFZLEtBQUs7dUJBQzVCLGFBQWE7QUFDdEIsbUJBQUsscUJBQXFCLFdBQVc7QUFFckMsa0JBQUksd0JBQXdCO0FBQzFCLG9CQUFNLG1CQUFtQixLQUFLLHVCQUN4QixtQkFBbUIsS0FBSyx1QkFDeEIsZUFBZSxLQUFLLHFCQUFxQixzQkFBc0IsbUJBQy9ELGVBQWUsS0FBSyxxQkFBcUIsc0JBQXNCLG1CQUMvRCx1QkFBdUIsYUFBYSxjQUNwQyx1QkFBdUIsYUFBYTtBQUUxQyxvQkFBSSxzQkFBc0I7QUFDeEIsdUJBQUsscUJBQXFCLHlCQUF5Qjs7QUFHckQsb0JBQUksc0JBQXNCO0FBQ3hCLHVCQUFLLHFCQUFxQix5QkFBeUI7Ozs7QUFLekQsaUJBQUs7Ozs7VUFHUCxLQUFBO2lCQUFBLHFCQUFZLE9BQU8sT0FBZ0M7Z0JBQWhDLHlCQUFBLFVBQThCLFNBQUwsUUFBekI7O0FBQ2pCLGtCQUFNLFFBQVEsU0FBQyxNQUFJO0FBQUsscUJBQU0sTUFBRCxXQUFXLE1BQU07Ozs7O1VBR2hELEtBQUE7aUJBQUEsOEJBQXFCLGtCQUFrQixrQkFBa0I7QUFDdkQsZ0JBQU0sT0E3T08sTUFBUSxRQTZPSCx3Q0FBd0Msa0JBQWtCO0FBRTVFLGlCQUFLLFFBQVE7Ozs7VUFHZixLQUFBO2lCQUFBLGlDQUF3QixrQkFBa0Isa0JBQWtCLE9BQWdDO2dCQUFoQyx5QkFBQSxVQUE4QixTQUFMLFFBQXpCO0FBQzFELGdCQUFNLE9BblBPLE1BQVEsUUFtUEgsd0NBQXdDLGtCQUFrQjtBQUU1RSxpQkFBSyxXQUFXLE1BQU07Ozs7VUFHeEIsS0FBQTtpQkFBQSx1Q0FBOEIsa0JBQWtCLE9BQWdDO2dCQUFoQyx5QkFBQSxVQUE4QixTQUFMLFFBQXpCO0FBQzlDLGdCQUFNLGNBQVcsSUFwUGtILFFBQWtCLHdCQW9Qekcsa0JBQWtCLEtBQUssY0FDN0QsUUFBUSxLQUFLLHFCQUFxQiwyQkFBMkI7QUFFbkUsaUJBQUssWUFBWSxhQUFhO0FBRTlCLGlCQUFLLFlBQVksT0FBTzs7OztVQUcxQixLQUFBO2lCQUFBLHVDQUE4QixrQkFBa0IsT0FBZ0M7Z0JBQWhDLHlCQUFBLFVBQThCLFNBQUwsUUFBekI7QUFDOUMsZ0JBQU0sY0FBVyxJQTdQa0gsUUFBa0Isd0JBNlB6RyxrQkFBa0IsS0FBSyxjQUM3RCxRQUFRLEtBQUsscUJBQXFCLDJCQUEyQjtBQUVuRSxpQkFBSyxZQUFZLGFBQWE7QUFFOUIsaUJBQUssWUFBWSxPQUFPOzs7O1VBRzFCLEtBQUE7aUJBQUEscUNBQTRCO0FBQzFCLGlCQUFLLHVCQTdRNEIsa0JBQW9CLHFCQTZRSjtBQUVqRCxpQkFBSyxjQUFjOzs7O1VBR3JCLEtBQUE7aUJBQUEsNkJBQW9COztBQUNsQixtQkFBTyxLQUFLLGFBQWEsU0FBQyxZQUFlO0FBQ3ZDLGtCQUFNLG1CQUFtQixXQUFXLHVCQUM5QixtQkFBbUIsV0FBVyx1QkFDOUIsc0JBQW1CLE1BQVEsNEJBQTRCLG1CQUN2RCxzQkFBbUIsTUFBUSw0QkFBNEI7QUFFN0Qsa0JBQUksdUJBQXVCLHFCQUFxQjtBQUM5Qyx1QkFBTzs7O0FBSVgsbUJBQU8sS0FBSyxhQUFhLFNBQUMsWUFBZTtBQUN2QyxrQkFBTSxPQUFPLFlBQ1AsVUFBTyxPQUFRLHFCQUFxQixRQUFRO0FBRWxELGtCQUFFLENBQUcsU0FBUztBQUNaLHVCQUFPOzs7Ozs7O1VBS04sS0FBQTtpQkFBUCx1QkFBcUI7QUFDbkIsZ0JBQU0sY0FBYyxJQUNkLHVCQTFTMkIsa0JBQW9CLHFCQTBTSCxlQUM1QyxpQkFBZ0IsSUFBSSxlQUFjLGFBQWE7QUFFckQsbUJBQU87Ozs7VUFHRixLQUFBO2lCQUFQLDRCQUEwQixnQkFBZ0I7QUFDeEMsZ0JBQU0sY0FBVyxJQTNTbUQsU0FBb0IsOEJBMlN0QyxpQkFDNUMsUUFBSyxJQTNTd0gsUUFBa0Isd0JBMlMvRyxpQkFDaEMsaUJBQWdCLGVBQWMsd0JBQXdCLGFBQWE7QUFFekUsbUJBQU87Ozs7VUFHRixLQUFBO2lCQUFQLGlDQUErQixhQUFhLE9BQU87QUFDakQsZ0JBQUk7QUFFSixnQkFBTSxRQTdUWSxXQUFZLE1BNlRWLHdCQUF3QixhQUFhLFFBQ25ELGdCQUFnQixNQUFNO0FBRTVCLGdCQUFJLGVBQWU7QUFDakIsa0JBQU0sY0FBYyxJQUNkLHVCQWhVeUIsa0JBQW9CLHFCQWdVRCxnQkFBZ0I7QUFFbEUsK0JBQWdCLElBQUksZUFBYyxhQUFhO0FBRS9DLG9CQUFNLFFBQVEsU0FBQyxNQUFJO0FBQUssdUJBQUEsZUFBYyxRQUFROzttQkFDekM7QUFDTCxrQkFBTSxrQkFBa0IsTUFBTSxzQkFDeEIsZUFBYyxJQUNkLHdCQXhVeUIsa0JBQW9CLHFCQXdVRCxvQkFBb0I7QUFFdEUsK0JBQWdCLElBQUksZUFBYyxjQUFhOztBQUdqRCxtQkFBTzs7OzthQWxVVTs7c0JBQUE7Ozs7QUNmckI7Ozs7O21DQUVvQixRQUFJOzs7cUJBQWY7OzttQ0FDVyxpQkFBYTs7OzhCQUF4Qjs7Ozs7Ozs7Ozs7OztBQ0hUO0FBRThCLE1BQUEsU0FBUztBQUV2QyxNQUFNLGdCQUZ3QixPQUFTLGNBRUg7QUFFcEMsZ0JBQWMseUJBQXlCO0lBQ3JDO0lBQ0E7SUFDQTtJQUNBOztBQUdGLGdCQUFjLHFCQUFxQixxQkFBcUI7QUFDeEQsZ0JBQWMscUJBQXFCLGdCQUFnQjtBQUNuRCxnQkFBYyxxQkFBcUIsaUJBQWlCO0FBQ3BELGdCQUFjLHFCQUFxQixxQkFBcUI7QUFDeEQsZ0JBQWMscUJBQXFCLGtCQUFrQjtBQUVyRCxnQkFBYyx5QkFBeUI7QUFFdkM7IiwKICAibmFtZXMiOiBbXQp9Cg==
