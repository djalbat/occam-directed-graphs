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
    exports.firstLast = firstLast;
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
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
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
    function firstLast(array) {
      return array[array.length - 1];
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
    function splice(array1, start) {
      var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
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
      firstLast,
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
    function whilst(operation, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = operation(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, operation, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(operations, done, context) {
      var length = operations.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, operation = operations[index];
          operation(next, done, context, index);
        }
      }
      next();
    }
    function eventually(operations, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = operations.length;
      var count = 0;
      operations.forEach(function(operation, index) {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        operation(next, done, context, index);
      }
    }
    function forwardsForEach(array, operation, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, operation, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
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
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAccept(headers, accept);
      request(host, uri, query, method, headers, content, callback);
    }
    function post(host, uri, query, headers, content, callback) {
      if (callback === void 0) {
        callback = content;
        content = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAccept(headers, accept);
      underwriteContentType(headers, contentType);
      request(host, uri, query, method, headers, content, callback);
    }
    function request(host, uri, query, method, headers, content1, callback) {
      var url = (0, _http).urlFromHostURIAndQuery(host, uri, query), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content1, jsonString = JSON.stringify(json);
        content1 = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText, statusCode = status;
        if (readyState == 4) {
          var content = responseText;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = content, json2 = JSON.parse(jsonString2);
              content = json2;
            } catch (error) {
              content = null;
            }
            callback(content, statusCode);
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
      content1 !== null ? xmlHttpRequest.send(content1) : xmlHttpRequest.send();
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
          value: function getPredecessorVertexMap() {
            var predecessorVertexMap = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
          value: function getSuccessorVertexMap() {
            var successorVertexMap = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
          value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
            var includeCyclicEdges = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
          value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
            var includeCyclicEdges = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
          key: "getVertexNames",
          value: function getVertexNames() {
            return this.directedAcyclicGraph.getVertexNames();
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
          value: function removeEdge(edge) {
            var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
          value: function removeEdges(edges) {
            var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
          value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
            var removeStrandedVertices = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            this.removeEdge(edge, removeStrandedVertices);
          }
        },
        {
          key: "removeEdgesByTargetVertexName",
          value: function removeEdgesByTargetVertexName(targetVertexName) {
            var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var cyclicEdges = (0, _edge1).edgesByTargetVertexName(targetVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
            this.removeEdges(cyclicEdges, removeStrandedVertices);
            this.removeEdges(edges, removeStrandedVertices);
          }
        },
        {
          key: "removeEdgesBySourceVertexName",
          value: function removeEdgesBySourceVertexName(sourceVertexName) {
            var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
            var _this = this;
            filter(this.cyclicEdges, function(cyclicEdge) {
              var sourceVertexName = cyclicEdge.getSourceVertexName(), targetVertexName = cyclicEdge.getTargetVertexName(), sourceVertexPresent = _this.isVertexPresentByVertexName(sourceVertexName), targetVertexPresent = _this.isVertexPresentByVertexName(targetVertexName);
              if (sourceVertexPresent && targetVertexPresent) {
                return true;
              }
            });
            filter(this.cyclicEdges, function(cyclicEdge) {
              var edge = cyclicEdge, success = _this.directedAcyclicGraph.addEdge(edge);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL29jY2FtLXBlYXJjZS1rZWxseS9zcmMvZWRnZS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAibm9kZV9tb2R1bGVzL29jY2FtLXBlYXJjZS1rZWxseS9zcmMvdmVydGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL2RpcmVjdGVkQWN5Y2xpY0dyYXBoLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1wZWFyY2Uta2VsbHkvc3JjL2luZGV4LmpzIiwgInNyYy9lZGdlLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy9lZGdlLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy92ZXJ0ZXguanMiLCAibm9kZV9tb2R1bGVzL29jY2FtLWthaG4vc3JjL3JlbWFpbmluZ0VkZ2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9vY2NhbS1rYWhuL3NyYy9ncmFwaC5qcyIsICJub2RlX21vZHVsZXMvb2NjYW0ta2Fobi9zcmMvaW5kZXguanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgInNyYy9wYXJ0aWFsQ3ljbGUuanMiLCAic3JjL3V0aWxpdGllcy9lZGdlLmpzIiwgInNyYy9kaXJlY3RlZEdyYXBoLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKSAmJiAodGhpcy50YXJnZXRWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkgfHwgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjggPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0MgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRSA9IFwiY29udGVudC10eXBlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGZpcnN0TGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT0xPTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgb3ZlcndyaXR0ZW4gPSBvd25Qcm9wZXJ0eU5hbWVzLnNvbWUoKG93blByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9IG93blByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgaGVhZGVyc1tvd25Qcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKCFvdmVyd3JpdHRlbikge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBvd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksXG4gICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMgPSBvd25Qcm9wZXJ0eU5hbWVzLm1hcCgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSA9IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMuaW5jbHVkZXMobG93ZXJjYXNlTmFtZSk7XG5cbiAgaWYgKCFsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhxdWVyeSksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W25hbWVdLFxuICAgICAgICAgICAgICAgIGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgYW1wZXJzYW5kT3JOb3RoaW5nID0gKGluZGV4ICE9PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNUEVSU0FORF9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5LFxuICB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUNDRVBULCBDT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gY29udGVudDtcbiAgICBjb250ZW50ID0gaGVhZGVycztcbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0LFxuICAgICAgICAgIHN0YXR1c0NvZGUgPSBzdGF0dXM7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlVGV4dDtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGNvbnRlbnQsIHN0YXR1c0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFQsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRSwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVCwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGFjY2VwdDsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzLCBjb250ZW50VFlwZSkge1xuICBjb25zdCBuYW1lID0gQ09OVEVOVF9UWVBFLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyVmVydGljZXModmVydGljZXMpIHsgIC8vL1xuICB2ZXJ0aWNlcy5zb3J0KChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4KSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhJbmRleCA9IGZpcnN0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSBzZWNvbmRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdFZlcnRleEluZGV4IDwgc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgIGlmIChmaXJzdFZlcnRleEluZGV4ID4gc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiArMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IHZlcnRpY2VzOyAgLy8vXG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0aWNlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGljZXMsIG9yZGVyVmVydGljZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCB2aXNpdGVkLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdGVkO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID09PSAwKSAmJiAoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5tYXAoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5tYXAoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE1hcChwcmVkZWNlc3NvclZlcnRleE1hcCA9IHt9KSB7XG4gICAgdGhpcy5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LCAvLy9cbiAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhNYXBbcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXSA9IHByZWRlY2Vzc29yVmVydGV4O1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleC5nZXRQcmVkZWNlc3NvclZlcnRleE1hcChwcmVkZWNlc3NvclZlcnRleE1hcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhNYXA7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhNYXAoc3VjY2Vzc29yVmVydGV4TWFwID0ge30pIHtcbiAgICB0aGlzLmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWUgPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXhNYXBbc3VjY2Vzc29yVmVydGV4TmFtZV0gPSBzdWNjZXNzb3JWZXJ0ZXg7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0ZXhNYXAoc3VjY2Vzc29yVmVydGV4TWFwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhNYXA7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSB0aGlzLmdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRTdWNjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gc3VjY2Vzc29yVmVydGljZXMubWFwKChzdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleE5hbWUgPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB0aGlzLmdldFByZWRlY2Vzc29yVmVydGV4TWFwKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IE9iamVjdC5rZXlzKHByZWRlY2Vzc29yVmVydGV4TWFwKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBwcmVkZWNlc3NvclZlcnRleE1hcFtwcmVkZWNlc3NvclZlcnRleE5hbWVdO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleE1hcCA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGV4TWFwKCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhzdWNjZXNzb3JWZXJ0ZXhNYXApLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGV4TmFtZXMubWFwKChzdWNjZXNzb3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXggPSBzdWNjZXNzb3JWZXJ0ZXhNYXBbc3VjY2Vzc29yVmVydGV4TmFtZV07XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldE9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSB0aGlzLmdldFByZWRlY2Vzc29yVmVydGljZXMoKTtcblxuICAgIG9yZGVyVmVydGljZXMocHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICBvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKG9yZGVyZWRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIHJldHVybiBvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuICBcbiAgcmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGljZXMoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3QgZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gdGhpcy5mb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9ICh2aXNpdGVkVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpO1xuICAgICAgXG4gICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmb3J3YXJkc0FmZmVjdGVkVmVydGljZXM7XG4gIH1cblxuICByZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMoKSB7XG4gICAgY29uc3QgYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRoaXMuYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIHJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuaW5kZXhPZihpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuaW5kZXhPZihpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG4gIFxuICByZW1vdmVJbmNvbWluZ0VkZ2VzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXM7IC8vL1xuICAgIFxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkpO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzID0gW107XG4gIH1cblxuICByZW1vdmVPdXRnb2luZ0VkZ2VzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkpO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcygodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7ICAvLy9cblxuICAgICAgdmlzaXRlZFZlcnRpY2VzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICB2aXNpdGVkVmVydGljZXMuZm9yRWFjaCgodmlzaXRlZFZlcnRleCkgPT4gdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRpY2VzO1xuICB9XG5cbiAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcygodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7ICAvLy9cblxuICAgICAgdmlzaXRlZFZlcnRpY2VzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICB2aXNpdGVkVmVydGljZXMuZm9yRWFjaCgodmlzaXRlZFZlcnRleCkgPT4gdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRpY2VzO1xuICB9XG5cbiAgcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjaykge1xuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdGhpczsgIC8vL1xuXG4gICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB2aXNpdGVkVmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICBpZiAodGVybWluYXRlICE9PSB0cnVlKSB7XG4gICAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICByZXNldFZpc2l0ZWQoKSB7XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lWZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCB2aXNpdGVkLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeVZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGljZXMsIG9yZGVyVmVydGljZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkQWN5Y2xpY0dyYXBoIHtcbiAgY29uc3RydWN0b3IodmVydGV4TWFwKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKHZlcnRpY2VzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0ZXhQcmVzZW50ID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZXMgPSBbXSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0YXJnZXRWZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzOyAgLy8vXG5cbiAgICAgIHNvdXJjZVZlcnRleE5hbWVzLmZvckVhY2goKHNvdXJjZVZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZXMgPSBbXSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gc291cmNlVmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzOyAgLy8vXG5cbiAgICAgIHRhcmdldFZlcnRleE5hbWVzLmZvckVhY2goKHRhcmdldFZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBzZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH1cblxuICBkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXTtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmlzRWRnZVByZXNlbnRCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICAgIFxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQgPSAoc291cmNlVmVydGV4ICE9PSBudWxsKSAmJiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZXMuaW5jbHVkZXModmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4UHJlc2VudCA9IHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4UHJlc2VudDtcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKTtcblxuICAgIG9yZGVyVmVydGljZXModmVydGljZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gdmVydGljZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lICE9PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICBcbiAgICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIGludmFsaWRhdGluZ0VkZ2UgPSAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgc3VjY2VzcyA9IGludmFsaWRhdGluZ0VkZ2UgP1xuICAgICAgICAgICAgICAgICAgICBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHNvdXJjZVZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGFyZ2V0VmVydGV4OyAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgIHNvdXJjZVZlcnRleC5yZW1vdmVPdXRnb2luZ0VkZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUluY29taW5nRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCByZW1vdmVkRWRnZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgICBhZmZlY3RlZFZlcnRpY2VzID0gdmVydGljZXMucmVkdWNlKChhZmZlY3RlZFZlcnRpY2VzLCB2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QWZmZWN0ZWQgPSAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmICh2ZXJ0ZXhBZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhZmZlY3RlZFZlcnRpY2VzLnB1c2goYWZmZWN0ZWRWZXJ0ZXgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGljZXM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIGFmZmVjdGVkVmVydGljZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IGFmZmVjdGVkVmVydGV4LmRlY3JlbWVudEluZGV4KCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVkRWRnZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBuZXcgRGlyZWN0ZWRBY3ljbGljR3JhcGgodmVydGV4TWFwKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICBjb25zdCBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IG5ldyBEaXJlY3RlZEFjeWNsaWNHcmFwaCh2ZXJ0ZXhNYXApO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21PcmRlcmVkVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0gdmVydGV4TWFwRnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpO1xuICAgIFxuICAgIGFkZEVkZ2VzVG9WZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMsIHZlcnRleE1hcCk7XG4gICAgXG4gICAgY29uc3QgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBuZXcgRGlyZWN0ZWRBY3ljbGljR3JhcGgodmVydGV4TWFwKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGljZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICBjb25zdCBmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGljZXMoc291cmNlVmVydGV4KSxcbiAgICAgICAgbGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPSBsYXN0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyksXG4gICAgICAgIHJlc3VsdHNJbkN5Y2xlID0gKGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpO1xuXG4gIGlmICghcmVzdWx0c0luQ3ljbGUpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gc291cmNlVmVydGV4LnJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyhiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKTtcblxuICAgIG9yZGVyVmVydGljZXMoZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKTtcblxuICAgIGNvbnN0IGFmZmVjdGVkVmVydGljZXMgPSBbXS5jb25jYXQoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcykuY29uY2F0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyksXG4gICAgICAgICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzID0gYWZmZWN0ZWRWZXJ0aWNlcy5tYXAoKGFmZmVjdGVkVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4SW5kZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICBhZmZlY3RlZFZlcnRleEluZGljZXMuc29ydCgoaW5kZXhBLCBpbmRleEIpID0+IChpbmRleEEgLSBpbmRleEIpKTtcblxuICAgIGFmZmVjdGVkVmVydGljZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzW2luZGV4XTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0ZXguc2V0SW5kZXgoYWZmZWN0ZWRWZXJ0ZXhJbmRleCk7XG4gICAgfSk7XG5cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG4gIFxuICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgdmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9KTtcbiAgXG4gIHJldHVybiB2ZXJ0ZXhNYXA7XG59XG5cbmZ1bmN0aW9uIHZlcnRleE1hcEZyb21PcmRlcmVkVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKSB7XG4gIGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuICBcbiAgb3JkZXJlZFZlcnRpY2VzLmZvckVhY2goKG9yZGVyZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IG9yZGVyZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgdmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiBhZGRFZGdlc1RvVmVydGljZXMob3JkZXJlZFZlcnRpY2VzLCB2ZXJ0ZXhNYXApIHtcbiAgb3JkZXJlZFZlcnRpY2VzLmZvckVhY2goKG9yZGVyZWRWZXJ0ZXgpID0+IHtcbiAgICBvcmRlcmVkVmVydGV4LmZvckVhY2hPdXRnb2luZ0VkZ2UoKG91dGdvaW5nRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IG91dGdvaW5nRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gb3V0Z29pbmdFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lLFxuICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXhNYXBbaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXSwgLy8vXG4gICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXhNYXBbaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZV07IC8vL1xuXG4gICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRnZSB9IGZyb20gXCIuL2VkZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSBmcm9tIFwiLi9kaXJlY3RlZEFjeWNsaWNHcmFwaFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFZGdlIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGdldFNvdXJjZVZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlVmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0VGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluY29taW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jb21pbmdFZGdlcztcbiAgfVxuXG4gIGdldE91dGdvaW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0Z29pbmdFZGdlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBhZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnB1c2goaW5jb21pbmdFZGdlKTtcbiAgfVxuXG4gIGFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMucHVzaChvdXRnb2luZ0VkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hJbmNvbWluZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoT3V0Z29pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBvdXRnb2luZ0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbWFpbmluZ0VkZ2VzIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGVkZ2VzTGVuZ3RoID0gdGhpcy5lZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChlZGdlc0xlbmd0aCAhPT0gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGZvckVhY2hFZGdlQnlWZXJ0ZXhOYW1lcyhjYWxsYmFjaykge1xuICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBjYWxsYmFjayhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcbmltcG9ydCBSZW1haW5pbmdFZGdlcyBmcm9tIFwiLi9yZW1haW5pbmdFZGdlc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKG9yZGVyZWRWZXJ0aWNlcywgcmVtYWluaW5nRWRnZXMpIHtcbiAgICB0aGlzLm9yZGVyZWRWZXJ0aWNlcyA9IG9yZGVyZWRWZXJ0aWNlcztcbiAgICB0aGlzLnJlbWFpbmluZ0VkZ2VzID0gcmVtYWluaW5nRWRnZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJlZFZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0UmVtYWluaW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nRWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkgeyByZXR1cm4gdGhpcy5yZW1haW5pbmdFZGdlcy5hcmVDeWNsZXNQcmVzZW50KCk7IH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0gdmVydGV4TWFwRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzQW5kVmVydGV4TWFwKHZlcnRleExpdGVyYWxzLCB2ZXJ0ZXhNYXApLFxuICAgICAgICAgIG9yZGVyZWRWZXJ0aWNlcyA9IG9yZGVyZWRWZXJ0aWNlc0Zyb21WZXJ0ZXhNYXBBbmRFZGdlcyh2ZXJ0ZXhNYXAsIGVkZ2VzKSxcbiAgICAgICAgICByZW1haW5pbmdFZGdlcyA9IG5ldyBSZW1haW5pbmdFZGdlcyhlZGdlcyksXG4gICAgICAgICAgZ3JhcGggPSBuZXcgR3JhcGgob3JkZXJlZFZlcnRpY2VzLCByZW1haW5pbmdFZGdlcyk7XG5cbiAgICByZXR1cm4gZ3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgZWRnZXMgPSBlZGdlcy5zbGljZSgpOyAgLy8vXG5cbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIG9yZGVyZWRWZXJ0aWNlcyA9IG9yZGVyZWRWZXJ0aWNlc0Zyb21WZXJ0ZXhNYXBBbmRFZGdlcyh2ZXJ0ZXhNYXAsIGVkZ2VzKSxcbiAgICAgICAgICByZW1haW5pbmdFZGdlcyA9IG5ldyBSZW1haW5pbmdFZGdlcyhlZGdlcyksXG4gICAgICAgICAgZ3JhcGggPSBuZXcgR3JhcGgob3JkZXJlZFZlcnRpY2VzLCByZW1haW5pbmdFZGdlcyk7XG5cbiAgICByZXR1cm4gZ3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gIGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuXG4gIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gICAgfVxuICB9KTtcblxuICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCFzb3VyY2VWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3NvdXJjZVZlcnRleE5hbWVdID0gc291cmNlVmVydGV4O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0VmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSA9IHRhcmdldFZlcnRleDtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgIGluY29taW5nRWRnZSA9IGVkZ2UsICAvLy9cbiAgICAgICAgICBvdXRnb2luZ0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICBzb3VyY2VWZXJ0ZXguYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSk7XG5cbiAgICB0YXJnZXRWZXJ0ZXguYWRkSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSk7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhNYXA7XG59XG5cbmZ1bmN0aW9uIHZlcnRleE1hcEZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcyA9IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaCgoYW5jZXN0b3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICBjb25zdCBhbmNlc3RvclZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eShhbmNlc3RvclZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoIWFuY2VzdG9yVmVydGV4RXhpc3RzKSB7XG4gICAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgICAgdmVydGV4TWFwW2FuY2VzdG9yVmVydGV4TmFtZV0gPSBhbmNlc3RvclZlcnRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHNBbmRWZXJ0ZXhNYXAodmVydGV4TGl0ZXJhbHMsIHZlcnRleE1hcCkge1xuICBjb25zdCBlZGdlcyA9IFtdO1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goKHZlcnRleExpdGVyYWwpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50ID0gZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcyA9IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG5cbiAgICBhbmNlc3RvclZlcnRleE5hbWVzLmZvckVhY2goKGFuY2VzdG9yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGFuY2VzdG9yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdmVydGV4TWFwW3NvdXJjZVZlcnRleE5hbWVdLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgaW5jb21pbmdFZGdlID0gZWRnZSwgIC8vL1xuICAgICAgICAgICAgb3V0Z29pbmdFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXguYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSk7XG5cbiAgICAgIHRhcmdldFZlcnRleC5hZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBvcmRlcmVkVmVydGljZXNGcm9tVmVydGV4TWFwQW5kRWRnZXModmVydGV4TWFwLCBlZGdlcykge1xuICBjb25zdCBvcmRlcmVkVmVydGV4TmFtZXMgPSBbXSxcbiAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcyA9IHN0YXJ0aW5nVmVydGV4TmFtZXNGcm9tVmVydGV4TWFwKHZlcnRleE1hcCksXG4gICAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gIGxldCBzdGFydGluZ1ZlcnRleE5hbWVzTGVuZ3RoID0gc3RhcnRpbmdWZXJ0ZXhOYW1lcy5sZW5ndGg7XG5cbiAgd2hpbGUgKHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc3RhcnRpbmdWZXJ0ZXhOYW1lID0gc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wb3AoKSxcbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZSA9IHN0YXJ0aW5nVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgb3JkZXJlZFZlcnRleE5hbWVzLnB1c2gob3JkZXJlZFZlcnRleE5hbWUpO1xuXG4gICAgYmFja3dhcmRzRm9yRWFjaChlZGdlcywgKGVkZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBlZGdlU3RhcnRpbmcgPSAoc291cmNlVmVydGV4TmFtZSA9PT0gc3RhcnRpbmdWZXJ0ZXhOYW1lKTsgLy8vXG5cbiAgICAgIGlmIChlZGdlU3RhcnRpbmcpIHtcbiAgICAgICAgZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgICAgaW5jb21pbmdFZGdlID0gZWRnZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4U3RhcnRpbmcgPSB0YXJnZXRWZXJ0ZXguaXNTdGFydGluZygpO1xuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdGFydGluZykge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nVmVydGV4TmFtZSA9IHRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIHN0YXJ0aW5nVmVydGV4TmFtZXMucHVzaChzdGFydGluZ1ZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFydGluZ1ZlcnRleE5hbWVzTGVuZ3RoID0gc3RhcnRpbmdWZXJ0ZXhOYW1lcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBlZGdlc0xlbmd0aCA9IGVkZ2VzLmxlbmd0aDtcblxuICBpZiAoZWRnZXNMZW5ndGggPT09IDApIHtcbiAgICByZW1vdmVkRWRnZXMuZm9yRWFjaCgocmVtb3ZlZEVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSByZW1vdmVkRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSByZW1vdmVkRWRnZTsgLy8vXG4gICAgICBcbiAgICAgIHRhcmdldFZlcnRleC5hZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRleE5hbWVzLm1hcCgob3JkZXJlZFZlcnRleE5hbWUpID0+IHZlcnRleE1hcFtvcmRlcmVkVmVydGV4TmFtZV0pO1xuXG4gIHJldHVybiBvcmRlcmVkVmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0aW5nVmVydGV4TmFtZXNGcm9tVmVydGV4TWFwKHZlcnRleE1hcCkge1xuICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IE9iamVjdC5rZXlzKHZlcnRleE1hcCksXG4gICAgICAgIHN0YXJ0aW5nVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lcy5yZWR1Y2UoKHN0YXJ0aW5nVmVydGV4TmFtZXMsIHZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0sXG4gICAgICAgICAgICAgICAgdmVydGV4U3RhcnRpbmcgPSB2ZXJ0ZXguaXNTdGFydGluZygpO1xuXG4gICAgICAgICAgaWYgKHZlcnRleFN0YXJ0aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgIHN0YXJ0aW5nVmVydGV4TmFtZXMucHVzaChzdGFydGluZ1ZlcnRleE5hbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdGFydGluZ1ZlcnRleE5hbWVzXG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gc3RhcnRpbmdWZXJ0ZXhOYW1lcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmFwaCB9IGZyb20gXCIuL2dyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgdmVydGV4TmFtZU1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goKHZlcnRleExpdGVyYWwpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50ID0gZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleEV4aXN0cyA9IHZlcnRleE5hbWVNYXAuaGFzT3duUHJvcGVydHkodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleEV4aXN0cykge1xuICAgICAgdmVydGV4TmFtZU1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleE5hbWU7XG4gICAgfVxuXG4gICAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG5cbiAgICBhbmNlc3RvclZlcnRleE5hbWVzLmZvckVhY2goKGFuY2VzdG9yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgdmVydGV4TmFtZU1hcFthbmNlc3RvclZlcnRleE5hbWVdID0gYW5jZXN0b3JWZXJ0ZXhOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB2ZXJ0ZXhOYW1lTWFwS2V5cyA9IE9iamVjdC5rZXlzKHZlcnRleE5hbWVNYXApLFxuICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVNYXBLZXlzOyAgLy8vXG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXModmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpOyAgLy8vXG5cbiAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH0sIGdldFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpKTtcblxuICByZXR1cm4gdmlzaXRlZFZlcnRpY2VzO1xuXG4gIGZ1bmN0aW9uIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXModmVydGV4LCBjYWxsYmFjaywgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgaWYgKHZlcnRleC52aXNpdGVkID09PSBmYWxzZSkge1xuICAgIHZlcnRleC52aXNpdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgdGVybWluYXRlID0gcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsIGNhbGxiYWNrLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCk7XG5cbiAgICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMuY29uY2F0KHByZWRlY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhOYW1lcykge1xuICAgIHRoaXMudmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuc2xpY2UoKTsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID0gc3VjY2Vzc29yVmVydGljZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChzdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VjY2Vzc29yVmVydGV4ID0gZmlyc3Qoc3VjY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgICAgZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gcGFydGlhbEN5Y2xlLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9ICh2ZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleE5hbWVzKS5jb25jYXQoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcykuY29uY2F0KGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChzdWNjZXNzb3JWZXJ0ZXhOYW1lcyksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGV4TmFtZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpYWxDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpIHtcbiAgICB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgIHRoaXMuY3ljbGljRWRnZSA9IGN5Y2xpY0VkZ2U7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZTtcbiAgfVxuXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMubWFwKChwcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG4gIFxuICBnZXRDeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICBwcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5zbGljZSgpOyAgLy8vXG4gICAgXG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHByZWRlY2Vzc29yVmVydGljZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFByZWRlY2Vzc29yVmVydGV4ID0gZmlyc3QocHJlZGVjZXNzb3JWZXJ0aWNlcyksXG4gICAgICAgICAgICBmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgaWYgKGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBwcmVkZWNlc3NvclZlcnRpY2VzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFydGlhbEN5Y2xlID0gbmV3IFBhcnRpYWxDeWNsZShwcmVkZWNlc3NvclZlcnRpY2VzLCBjeWNsaWNFZGdlKTtcbiAgICBcbiAgICByZXR1cm4gcGFydGlhbEN5Y2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHBydW5lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVtb3ZlID0gcHJ1bmU7ICAvLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IGVkZ2VzID0gW107XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaCgoYW5jZXN0b3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gYW5jZXN0b3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBlZGdlID0gbmV3IEVkZ2Uoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgZWRnZXMpIHtcbiAgY29uc3QgZWRnZTEgPSBlZGdlLCAvLy9cbiAgICAgICAgZWRnZXNJbmNsdWRlc0VkZ2UgPSBlZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzSW5jbHVkZXNFZGdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWRnZUZyb21FZGdlcyhlZGdlLCBlZGdlcykge1xuICBjb25zdCBlZGdlMSA9IGVkZ2U7IC8vL1xuXG4gIHJlbW92ZShlZGdlcywgKGVkZ2UpID0+IHtcbiAgICBjb25zdCBlZGdlMiA9IGVkZ2UsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBlZGdlMS5tYXRjaChlZGdlMik7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHsgLy8vXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMuZmlsdGVyKChlZGdlKSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gZWRnZS5tYXRjaFRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdyYXBoIH0gZnJvbSBcIm9jY2FtLWthaG5cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSBmcm9tIFwib2NjYW0tcGVhcmNlLWtlbGx5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBDeWNsZSBmcm9tIFwiLi9jeWNsZVwiO1xuaW1wb3J0IFBhcnRpYWxDeWNsZSBmcm9tIFwiLi9wYXJ0aWFsQ3ljbGVcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCByZW1vdmVFZGdlRnJvbUVkZ2VzLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWRnZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKSB7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuXG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZXM7XG4gIH1cblxuICBnZXREaXJlY3RlZEFjeWNsaWNHcmFwaCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgaW5jbHVkZUN5Y2xpY0VkZ2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgaW5jbHVkZUN5Y2xpY0VkZ2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoaW5jbHVkZUN5Y2xpY0VkZ2VzKSB7XG4gICAgICB0aGlzLmN5Y2xpY0VkZ2VzLmZvckVhY2goKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcblxuICAgICAgICBpZiAoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBjb25zdCBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdCh0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBjeWNsaWNFZGdlID0gZmlyc3RDeWNsaWNFZGdlLCAvLy9cbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4TmFtZXMoKTsgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLmFkZEVkZ2UoZWRnZSkpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQgJiYgdGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGxldCBkaXJlY3RlZEdyYXBoO1xuXG4gICAgY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSBncmFwaC5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldE9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkZ2UgfSBmcm9tIFwiLi9lZGdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9kaXJlY3RlZEdyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbmRpcmVjdGVkR3JhcGguYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKFtcbiAgXCIuL2Vhc3ktbGF5b3V0XCIsXG4gIFwiLi9lYXN5LXdpdGgtc3R5bGVcIixcbiAgXCIuL29jY2FtLWxleGVyc1wiLFxuICBcIi4vd2l0aC1zdHlsZVwiXG5dKTtcblxuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZUJ5VmVydGV4TmFtZXMoXCIuL3dpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktd2l0aC1zdHlsZVwiKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZUJ5VmVydGV4TmFtZXMoXCIuL2Vhc3ktbGF5b3V0XCIsIFwiLi9vY2NhbS1sZXhlcnNcIik7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2VCeVZlcnRleE5hbWVzKFwiLi9lYXN5LXdpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktbGF5b3V0XCIpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhcIi4vb2NjYW0tbGV4ZXJzXCIsIFwiLi93aXRoLXN0eWxlXCIpO1xuXG5kaXJlY3RlZEdyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShcIi4vb2NjYW0tbGV4ZXJzXCIpO1xuXG5kZWJ1Z2dlclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCLFFBQU4sMkJBQVE7cUJBQ1Qsa0JBQWtCLGtCQUFnQjs4QkFEM0I7QUFFakIsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxtQkFBbUI7O21CQUhQLE9BQUk7O1VBTXZCLEtBQUE7aUJBQUEsK0JBQXNCO0FBQ3BCLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLCtCQUFzQjtBQUNwQixtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxlQUFNLE1BQU07QUFDVixnQkFBTSxtQkFBbUIsS0FBSyx1QkFDeEIsbUJBQW1CLEtBQUssdUJBQ3hCLFVBQVksS0FBSyxxQkFBcUIsb0JBQXNCLEtBQUsscUJBQXFCO0FBRTVGLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSx5QkFBZ0IsWUFBWTtBQUMxQixnQkFBTSxVQUFZLEtBQUsscUJBQXFCLGNBQWdCLEtBQUsscUJBQXFCO0FBRXRGLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSwrQkFBc0Isa0JBQWtCO0FBQ3RDLGdCQUFNLFVBQVcsS0FBSyxxQkFBcUI7QUFFM0MsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLCtCQUFzQixrQkFBa0I7QUFDdEMsZ0JBQU0sVUFBVyxLQUFLLHFCQUFxQjtBQUUzQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsMEJBQWlCLGtCQUFrQixrQkFBa0I7QUFDbkQsZ0JBQU0sVUFBWSxLQUFLLHFCQUFxQixvQkFBc0IsS0FBSyxxQkFBcUI7QUFF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
