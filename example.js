(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/edge.js
  var require_edge = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Edge;
      }
    });
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Edge = /* @__PURE__ */ function() {
      function Edge2(sourceVertexName, targetVertexName) {
        _class_call_check(this, Edge2);
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
      }
      _create_class(Edge2, [
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
            var edge = new Edge2(sourceVertexName, targetVertexName);
            return edge;
          }
        }
      ]);
      return Edge2;
    }();
  });

  // lib/utilities/vertex.js
  var require_vertex = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      orderVertexes: function() {
        return orderVertexes;
      },
      vertexNamesFromVertexes: function() {
        return vertexNamesFromVertexes;
      }
    });
    function orderVertexes(vertexes) {
      vertexes.sort(function(firstVertex, secondVertex) {
        var firstVertexIndex = firstVertex.getIndex(), secondVertexIndex = secondVertex.getIndex();
        if (false) {
        } else if (firstVertexIndex < secondVertexIndex) {
          return -1;
        } else if (firstVertexIndex > secondVertexIndex) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    function vertexNamesFromVertexes(vertexes) {
      var vertexNames = vertexes.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
      });
      return vertexNames;
    }
  });

  // lib/cycle.js
  var require_cycle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Cycle;
      }
    });
    var _vertex = require_vertex();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    var Cycle = /* @__PURE__ */ function() {
      function Cycle2(vertexNames) {
        _class_call_check(this, Cycle2);
        this.vertexNames = vertexNames;
      }
      _create_class(Cycle2, [
        {
          key: "getVertexNames",
          value: function getVertexNames() {
            return this.vertexNames;
          }
        }
      ], [
        {
          key: "fromSourceVertexAndPredecessorVertexes",
          value: function fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes) {
            var vertexes = _to_consumable_array(predecessorVertexes).concat([
              sourceVertex
            ]), vertexNames = (0, _vertex.vertexNamesFromVertexes)(vertexes), cycle = new Cycle2(vertexNames);
            return cycle;
          }
        }
      ]);
      return Cycle2;
    }();
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      DEBUG_LEVEL: function() {
        return DEBUG_LEVEL;
      },
      ERROR_LEVEL: function() {
        return ERROR_LEVEL;
      },
      FATAL_LEVEL: function() {
        return FATAL_LEVEL;
      },
      INFO_LEVEL: function() {
        return INFO_LEVEL;
      },
      TRACE_LEVEL: function() {
        return TRACE_LEVEL;
      },
      WARNING_LEVEL: function() {
        return WARNING_LEVEL;
      },
      default: function() {
        return _default;
      }
    });
    var TRACE_LEVEL = "trace";
    var DEBUG_LEVEL = "debug";
    var INFO_LEVEL = "info";
    var WARNING_LEVEL = "warning";
    var ERROR_LEVEL = "error";
    var FATAL_LEVEL = "fatal";
    var _default = {
      TRACE_LEVEL,
      DEBUG_LEVEL,
      INFO_LEVEL,
      WARNING_LEVEL,
      ERROR_LEVEL,
      FATAL_LEVEL
    };
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      DELETE_METHOD: function() {
        return DELETE_METHOD;
      },
      GET_METHOD: function() {
        return GET_METHOD;
      },
      OPTIONS_METHOD: function() {
        return OPTIONS_METHOD;
      },
      PATCH_METHOD: function() {
        return PATCH_METHOD;
      },
      POST_METHOD: function() {
        return POST_METHOD;
      },
      default: function() {
        return _default;
      }
    });
    var GET_METHOD = "GET";
    var POST_METHOD = "POST";
    var PATCH_METHOD = "PATCH";
    var DELETE_METHOD = "DELETE";
    var OPTIONS_METHOD = "OPTIONS";
    var _default = {
      GET_METHOD,
      POST_METHOD,
      PATCH_METHOD,
      DELETE_METHOD,
      OPTIONS_METHOD
    };
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ACCEPT_HEADER: function() {
        return ACCEPT_HEADER;
      },
      ACCESS_CONTROL_ALLOW_HEADERS_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      },
      ACCESS_CONTROL_ALLOW_METHODS_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      },
      ACCESS_CONTROL_ALLOW_ORIGIN_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      },
      ACCESS_CONTROL_REQUEST_METHOD_HEADER: function() {
        return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      },
      AUTHORIZATION_HEADER: function() {
        return AUTHORIZATION_HEADER;
      },
      CACHE_CONTROL_HEADER: function() {
        return CACHE_CONTROL_HEADER;
      },
      CONTENT_DISPOSITION_HEADER: function() {
        return CONTENT_DISPOSITION_HEADER;
      },
      CONTENT_LENGTH_HEADER: function() {
        return CONTENT_LENGTH_HEADER;
      },
      CONTENT_TYPE_HEADER: function() {
        return CONTENT_TYPE_HEADER;
      },
      LOCATION_HEADER: function() {
        return LOCATION_HEADER;
      },
      PRAGMA_HEADER: function() {
        return PRAGMA_HEADER;
      },
      TRANSFER_ENCODING_HEADER: function() {
        return TRANSFER_ENCODING_HEADER;
      },
      USER_AGENT_HEADER: function() {
        return USER_AGENT_HEADER;
      },
      default: function() {
        return _default;
      }
    });
    var PRAGMA_HEADER = "pragma";
    var ACCEPT_HEADER = "accept";
    var LOCATION_HEADER = "location";
    var USER_AGENT_HEADER = "user-agent";
    var CONTENT_TYPE_HEADER = "content-type";
    var AUTHORIZATION_HEADER = "authorization";
    var CACHE_CONTROL_HEADER = "cache-control";
    var CONTENT_LENGTH_HEADER = "content-length";
    var TRANSFER_ENCODING_HEADER = "transfer-encoding";
    var CONTENT_DISPOSITION_HEADER = "content-disposition";
    var ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
    var ACCESS_CONTROL_ALLOW_METHODS_HEADER = "access-control-allow-methods";
    var ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "access-control-allow-headers";
    var ACCESS_CONTROL_REQUEST_METHOD_HEADER = "access-control-request-method";
    var _default = {
      PRAGMA_HEADER,
      ACCEPT_HEADER,
      LOCATION_HEADER,
      USER_AGENT_HEADER,
      CONTENT_TYPE_HEADER,
      AUTHORIZATION_HEADER,
      CACHE_CONTROL_HEADER,
      CONTENT_LENGTH_HEADER,
      TRANSFER_ENCODING_HEADER,
      CONTENT_DISPOSITION_HEADER,
      ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
      ACCESS_CONTROL_ALLOW_METHODS_HEADER,
      ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
      ACCESS_CONTROL_REQUEST_METHOD_HEADER
    };
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ARROW_DOWN_KEY_CODE: function() {
        return ARROW_DOWN_KEY_CODE;
      },
      ARROW_LEFT_KEY_CODE: function() {
        return ARROW_LEFT_KEY_CODE;
      },
      ARROW_RIGHT_KEY_CODE: function() {
        return ARROW_RIGHT_KEY_CODE;
      },
      ARROW_UP_KEY_CODE: function() {
        return ARROW_UP_KEY_CODE;
      },
      BACKSPACE_KEY_CODE: function() {
        return BACKSPACE_KEY_CODE;
      },
      DELETE_KEY_CODE: function() {
        return DELETE_KEY_CODE;
      },
      ENTER_KEY_CODE: function() {
        return ENTER_KEY_CODE;
      },
      ESCAPE_KEY_CODE: function() {
        return ESCAPE_KEY_CODE;
      },
      SHIFT_KEY_CODE: function() {
        return SHIFT_KEY_CODE;
      },
      TAB_KEY_CODE: function() {
        return TAB_KEY_CODE;
      },
      default: function() {
        return _default;
      }
    });
    var TAB_KEY_CODE = 9;
    var SHIFT_KEY_CODE = 16;
    var ENTER_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;
    var DELETE_KEY_CODE = 46;
    var BACKSPACE_KEY_CODE = 8;
    var ARROW_UP_KEY_CODE = 38;
    var ARROW_DOWN_KEY_CODE = 40;
    var ARROW_LEFT_KEY_CODE = 37;
    var ARROW_RIGHT_KEY_CODE = 39;
    var _default = {
      TAB_KEY_CODE,
      SHIFT_KEY_CODE,
      ENTER_KEY_CODE,
      ESCAPE_KEY_CODE,
      DELETE_KEY_CODE,
      BACKSPACE_KEY_CODE,
      ARROW_UP_KEY_CODE,
      ARROW_DOWN_KEY_CODE,
      ARROW_LEFT_KEY_CODE,
      ARROW_RIGHT_KEY_CODE
    };
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      BASE64_ENCODING: function() {
        return BASE64_ENCODING;
      },
      UTF8_ENCODING: function() {
        return UTF8_ENCODING;
      },
      UTF_8_ENCODING: function() {
        return UTF_8_ENCODING;
      },
      default: function() {
        return _default;
      }
    });
    var UTF8_ENCODING = "utf8";
    var UTF_8_ENCODING = "utf-8";
    var BASE64_ENCODING = "base64";
    var _default = {
      UTF8_ENCODING,
      UTF_8_ENCODING,
      BASE64_ENCODING
    };
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      AMPERSAND_CHARACTER: function() {
        return AMPERSAND_CHARACTER;
      },
      BACKSPACE_CHARACTER: function() {
        return BACKSPACE_CHARACTER;
      },
      BACKTICK_DELIMITER: function() {
        return BACKTICK_DELIMITER;
      },
      BAR_CHARACTER: function() {
        return BAR_CHARACTER;
      },
      CARRIAGE_RETURN_CHARACTER: function() {
        return CARRIAGE_RETURN_CHARACTER;
      },
      COLON_CHARACTER: function() {
        return COLON_CHARACTER;
      },
      COMMA_CHARACTER: function() {
        return COMMA_CHARACTER;
      },
      CTRL_C_CHARACTER: function() {
        return CTRL_C_CHARACTER;
      },
      DASH_CHARACTER: function() {
        return DASH_CHARACTER;
      },
      DOWN_CHARACTER: function() {
        return DOWN_CHARACTER;
      },
      ETX_CHARACTER: function() {
        return ETX_CHARACTER;
      },
      EXCLAMATION_MARK_CHARACTER: function() {
        return EXCLAMATION_MARK_CHARACTER;
      },
      FORWARD_SLASH_CHARACTER: function() {
        return FORWARD_SLASH_CHARACTER;
      },
      LEFT_CHARACTER: function() {
        return LEFT_CHARACTER;
      },
      NEW_LINE_CHARACTER: function() {
        return NEW_LINE_CHARACTER;
      },
      PERIOD_CHARACTER: function() {
        return PERIOD_CHARACTER;
      },
      RIGHT_CHARACTER: function() {
        return RIGHT_CHARACTER;
      },
      SPACE_CHARACTER: function() {
        return SPACE_CHARACTER;
      },
      UP_CHARACTER: function() {
        return UP_CHARACTER;
      },
      WILDCARD_CHARACTER: function() {
        return WILDCARD_CHARACTER;
      },
      default: function() {
        return _default;
      }
    });
    var UP_CHARACTER = "[A";
    var ETX_CHARACTER = "";
    var BAR_CHARACTER = "|";
    var DASH_CHARACTER = "-";
    var DOWN_CHARACTER = "[B";
    var LEFT_CHARACTER = "[D";
    var RIGHT_CHARACTER = "[C";
    var SPACE_CHARACTER = " ";
    var COMMA_CHARACTER = ",";
    var COLON_CHARACTER = ":";
    var PERIOD_CHARACTER = ".";
    var CTRL_C_CHARACTER = "^C";
    var WILDCARD_CHARACTER = "*";
    var BACKTICK_DELIMITER = "`";
    var NEW_LINE_CHARACTER = "\n";
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    var AMPERSAND_CHARACTER = "&";
    var FORWARD_SLASH_CHARACTER = "/";
    var CARRIAGE_RETURN_CHARACTER = "\r";
    var EXCLAMATION_MARK_CHARACTER = "!";
    var _default = {
      UP_CHARACTER,
      ETX_CHARACTER,
      BAR_CHARACTER,
      DASH_CHARACTER,
      DOWN_CHARACTER,
      LEFT_CHARACTER,
      RIGHT_CHARACTER,
      SPACE_CHARACTER,
      COMMA_CHARACTER,
      COLON_CHARACTER,
      PERIOD_CHARACTER,
      CTRL_C_CHARACTER,
      WILDCARD_CHARACTER,
      BACKTICK_DELIMITER,
      NEW_LINE_CHARACTER,
      AMPERSAND_CHARACTER,
      BACKSPACE_CHARACTER,
      FORWARD_SLASH_CHARACTER,
      CARRIAGE_RETURN_CHARACTER,
      EXCLAMATION_MARK_CHARACTER
    };
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      BAD_GATEWAY_502_STATUS_CODE: function() {
        return BAD_GATEWAY_502_STATUS_CODE;
      },
      BAD_REQUEST_400_STATUS_CODE: function() {
        return BAD_REQUEST_400_STATUS_CODE;
      },
      CREATED_201_STATUS_CODE: function() {
        return CREATED_201_STATUS_CODE;
      },
      FORBIDDEN_403_STATUS_CODE: function() {
        return FORBIDDEN_403_STATUS_CODE;
      },
      FOUND_302_STATUS_CODE: function() {
        return FOUND_302_STATUS_CODE;
      },
      INTERNAL_SERVER_ERROR_500_STATUS_CODE: function() {
        return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      },
      NOT_FOUND_404_STATUS_CODE: function() {
        return NOT_FOUND_404_STATUS_CODE;
      },
      NO_CONTENT_204_STATUS_CODE: function() {
        return NO_CONTENT_204_STATUS_CODE;
      },
      OK_200_STATUS_CODE: function() {
        return OK_200_STATUS_CODE;
      },
      REQUEST_TIMEOUT_408_STATUS_CODE: function() {
        return REQUEST_TIMEOUT_408_STATUS_CODE;
      },
      SEE_OTHER_303_STATUS_CODE: function() {
        return SEE_OTHER_303_STATUS_CODE;
      },
      SERVICE_UNAVAILABLE_503_STATUS_CODE: function() {
        return SERVICE_UNAVAILABLE_503_STATUS_CODE;
      },
      TOO_MANY_REQUESTS_429_STATUS_CODE: function() {
        return TOO_MANY_REQUESTS_429_STATUS_CODE;
      },
      UNAUTHORIZED_401_STATUS_CODE: function() {
        return UNAUTHORIZED_401_STATUS_CODE;
      },
      ZERO_0_STATUS_CODE: function() {
        return ZERO_0_STATUS_CODE;
      },
      default: function() {
        return _default;
      }
    });
    var ZERO_0_STATUS_CODE = 0;
    var OK_200_STATUS_CODE = 200;
    var FOUND_302_STATUS_CODE = 302;
    var CREATED_201_STATUS_CODE = 201;
    var SEE_OTHER_303_STATUS_CODE = 303;
    var FORBIDDEN_403_STATUS_CODE = 403;
    var NOT_FOUND_404_STATUS_CODE = 404;
    var NO_CONTENT_204_STATUS_CODE = 204;
    var BAD_GATEWAY_502_STATUS_CODE = 502;
    var BAD_REQUEST_400_STATUS_CODE = 400;
    var UNAUTHORIZED_401_STATUS_CODE = 401;
    var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
    var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
    var SERVICE_UNAVAILABLE_503_STATUS_CODE = 503;
    var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
    var _default = {
      ZERO_0_STATUS_CODE,
      OK_200_STATUS_CODE,
      FOUND_302_STATUS_CODE,
      CREATED_201_STATUS_CODE,
      SEE_OTHER_303_STATUS_CODE,
      FORBIDDEN_403_STATUS_CODE,
      NOT_FOUND_404_STATUS_CODE,
      NO_CONTENT_204_STATUS_CODE,
      BAD_GATEWAY_502_STATUS_CODE,
      BAD_REQUEST_400_STATUS_CODE,
      UNAUTHORIZED_401_STATUS_CODE,
      REQUEST_TIMEOUT_408_STATUS_CODE,
      TOO_MANY_REQUESTS_429_STATUS_CODE,
      SERVICE_UNAVAILABLE_503_STATUS_CODE,
      INTERNAL_SERVER_ERROR_500_STATUS_CODE
    };
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      },
      APPLICATION_JSON_CONTENT_TYPE: function() {
        return APPLICATION_JSON_CONTENT_TYPE;
      },
      APPLICATION_OCTET_STREAM_CONTENT_TYPE: function() {
        return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
      },
      APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      },
      APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE: function() {
        return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      },
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      },
      TEXT_HTML_CONTENT_TYPE: function() {
        return TEXT_HTML_CONTENT_TYPE;
      },
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      },
      TEXT_PLAIN_CONTENT_TYPE: function() {
        return TEXT_PLAIN_CONTENT_TYPE;
      },
      default: function() {
        return _default;
      }
    });
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
    var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
    var APPLICATION_OCTET_STREAM_CONTENT_TYPE = "application/octet-stream";
    var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
    var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
    var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
    var _default = {
      TEXT_HTML_CONTENT_TYPE,
      TEXT_PLAIN_CONTENT_TYPE,
      APPLICATION_JSON_CONTENT_TYPE,
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
      APPLICATION_OCTET_STREAM_CONTENT_TYPE,
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
      APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
      APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE
    };
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      BAD_GATEWAY_502_STATUS_MESSAGE: function() {
        return BAD_GATEWAY_502_STATUS_MESSAGE;
      },
      BAD_REQUEST_400_STATUS_MESSAGE: function() {
        return BAD_REQUEST_400_STATUS_MESSAGE;
      },
      CREATED_201_STATUS_MESSAGE: function() {
        return CREATED_201_STATUS_MESSAGE;
      },
      FORBIDDEN_403_STATUS_MESSAGE: function() {
        return FORBIDDEN_403_STATUS_MESSAGE;
      },
      FOUND_302_STATUS_MESSAGE: function() {
        return FOUND_302_STATUS_MESSAGE;
      },
      INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE: function() {
        return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      },
      NOT_FOUND_404_STATUS_MESSAGE: function() {
        return NOT_FOUND_404_STATUS_MESSAGE;
      },
      NO_CONTENT_204_STATUS_MESSAGE: function() {
        return NO_CONTENT_204_STATUS_MESSAGE;
      },
      OK_200_STATUS_MESSAGE: function() {
        return OK_200_STATUS_MESSAGE;
      },
      REQUEST_TIMEOUT_408_STATUS_MESSAGE: function() {
        return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
      },
      SEE_OTHER_303_STATUS_MESSAGE: function() {
        return SEE_OTHER_303_STATUS_MESSAGE;
      },
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE: function() {
        return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
      },
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE: function() {
        return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      },
      UNAUTHORIZED_401_STATUS_MESSAGE: function() {
        return UNAUTHORIZED_401_STATUS_MESSAGE;
      },
      ZERO_0_STATUS_MESSAGE: function() {
        return ZERO_0_STATUS_MESSAGE;
      },
      default: function() {
        return _default;
      }
    });
    var ZERO_0_STATUS_MESSAGE = "";
    var OK_200_STATUS_MESSAGE = "OK";
    var FOUND_302_STATUS_MESSAGE = "Found";
    var CREATED_201_STATUS_MESSAGE = "Created";
    var SEE_OTHER_303_STATUS_MESSAGE = "See other";
    var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
    var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
    var NO_CONTENT_204_STATUS_MESSAGE = "No content";
    var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
    var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
    var UNAUTHORIZED_401_STATUS_MESSAGE = "Unauthorized";
    var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
    var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
    var SERVICE_UNAVAILABLE_503_STATUS_MESSAGE = "Service unavailable";
    var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
    var _default = {
      ZERO_0_STATUS_MESSAGE,
      OK_200_STATUS_MESSAGE,
      FOUND_302_STATUS_MESSAGE,
      CREATED_201_STATUS_MESSAGE,
      SEE_OTHER_303_STATUS_MESSAGE,
      FORBIDDEN_403_STATUS_MESSAGE,
      NOT_FOUND_404_STATUS_MESSAGE,
      NO_CONTENT_204_STATUS_MESSAGE,
      BAD_GATEWAY_502_STATUS_MESSAGE,
      BAD_REQUEST_400_STATUS_MESSAGE,
      UNAUTHORIZED_401_STATUS_MESSAGE,
      REQUEST_TIMEOUT_408_STATUS_MESSAGE,
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE,
      INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE
    };
  });

  // node_modules/necessary/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      BOOLEAN: function() {
        return BOOLEAN;
      },
      DATA: function() {
        return DATA;
      },
      DEFAULT: function() {
        return DEFAULT;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      ENVIRONMENT: function() {
        return ENVIRONMENT;
      },
      ERROR: function() {
        return ERROR;
      },
      NUMBER: function() {
        return NUMBER;
      },
      PACKAGE_JSON: function() {
        return PACKAGE_JSON;
      },
      STRING: function() {
        return STRING;
      },
      ZERO: function() {
        return ZERO;
      }
    });
    var ZERO = "0";
    var DATA = "data";
    var ERROR = "error";
    var STRING = "string";
    var NUMBER = "number";
    var BOOLEAN = "boolean";
    var DEFAULT = "default";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
    var PACKAGE_JSON = "package.json";
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      augment: function() {
        return augment;
      },
      back: function() {
        return back;
      },
      backwardsEvery: function() {
        return backwardsEvery;
      },
      backwardsFind: function() {
        return backwardsFind;
      },
      backwardsForEach: function() {
        return backwardsForEach;
      },
      backwardsReduce: function() {
        return backwardsReduce;
      },
      backwardsSome: function() {
        return backwardsSome;
      },
      clear: function() {
        return clear;
      },
      combine: function() {
        return combine;
      },
      compress: function() {
        return compress;
      },
      concat: function() {
        return concat;
      },
      copy: function() {
        return copy;
      },
      default: function() {
        return _default;
      },
      eighth: function() {
        return eighth;
      },
      eighthLast: function() {
        return eighthLast;
      },
      extract: function() {
        return extract;
      },
      fifth: function() {
        return fifth;
      },
      fifthLast: function() {
        return fifthLast;
      },
      filter: function() {
        return filter;
      },
      find: function() {
        return find;
      },
      first: function() {
        return first;
      },
      firstLast: function() {
        return firstLast;
      },
      forwardsEvery: function() {
        return forwardsEvery;
      },
      forwardsFind: function() {
        return forwardsFind;
      },
      forwardsForEach: function() {
        return forwardsForEach;
      },
      forwardsReduce: function() {
        return forwardsReduce;
      },
      forwardsSome: function() {
        return forwardsSome;
      },
      fourth: function() {
        return fourth;
      },
      fourthLast: function() {
        return fourthLast;
      },
      front: function() {
        return front;
      },
      head: function() {
        return head;
      },
      last: function() {
        return last;
      },
      match: function() {
        return match;
      },
      merge: function() {
        return merge;
      },
      ninth: function() {
        return ninth;
      },
      ninthLast: function() {
        return ninthLast;
      },
      patch: function() {
        return patch;
      },
      prune: function() {
        return prune;
      },
      push: function() {
        return push;
      },
      replace: function() {
        return replace;
      },
      second: function() {
        return second;
      },
      secondLast: function() {
        return secondLast;
      },
      separate: function() {
        return separate;
      },
      seventh: function() {
        return seventh;
      },
      seventhLast: function() {
        return seventhLast;
      },
      sixth: function() {
        return sixth;
      },
      sixthLast: function() {
        return sixthLast;
      },
      splice: function() {
        return splice;
      },
      tail: function() {
        return tail;
      },
      tenth: function() {
        return tenth;
      },
      third: function() {
        return third;
      },
      thirdLast: function() {
        return thirdLast;
      },
      unshift: function() {
        return unshift;
      }
    });
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function second(array) {
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
    function sixth(array) {
      return array[5];
    }
    function seventh(array) {
      return array[6];
    }
    function eighth(array) {
      return array[7];
    }
    function ninth(array) {
      return array[8];
    }
    function tenth(array) {
      return array[9];
    }
    function firstLast(array) {
      return array[array.length - 1];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function sixthLast(array) {
      return array[array.length - 6];
    }
    function seventhLast(array) {
      return array[array.length - 7];
    }
    function eighthLast(array) {
      return array[array.length - 8];
    }
    function ninthLast(array) {
      return array[array.length - 9];
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
      return array.slice(0, Math.max(1, array.length - 1));
    }
    function push(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function unshift(arrayA, arrayB) {
      Array.prototype.unshift.apply(arrayA, arrayB);
    }
    function concat(arrayA, elementOrArray2) {
      var arrayB = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(arrayA, arrayB);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(arrayA, arrayB) {
      var start = 0, deleteCount = arrayB.length;
      splice(arrayA, start, deleteCount, arrayB);
    }
    function merge(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function match(arrayA, arrayB, callback) {
      var matches = false;
      var arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        matches = arrayA.every(function(elementA, index) {
          var elementB = arrayB[index], passed = callback(elementA, elementB, index);
          if (passed) {
            return true;
          }
        });
      }
      return matches;
    }
    function find(array, callback) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function replace(array, element, callback) {
      var start;
      var found = array.some(function(element2, index) {
        var passed = callback(element2, index);
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
    function splice(arrayA, start) {
      var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, arrayB = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var args = [
        start,
        deleteCount
      ].concat(_to_consumable_array(arrayB)), deletedElements = Array.prototype.splice.apply(arrayA, args);
      return deletedElements;
    }
    function filter(array, callback) {
      var deletedElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements2 = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements2);
          deletedElements2.unshift(firstDeletedElement);
        }
      });
      return deletedElements;
    }
    function prune(array, callback) {
      var deletedElement = void 0;
      array.some(function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function extract(array, callback) {
      var deletedElement = void 0;
      array.some(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function patch(array, element, callback) {
      var found = array.some(function(element2, index) {
        var passed = callback(element2, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element);
      }
      return found;
    }
    function compress(array, callback) {
      var index1 = 0, length = array.length;
      while (index1 < length) {
        var elementB = array[index1];
        for (var index2 = length - 1; index2 > index1; index2--) {
          var elementA = array[index2], passed = callback(elementA, elementB);
          if (passed) {
            var start = index2, deleteCount = 1;
            array.splice(start, deleteCount);
          }
        }
        index1++;
        length = array.length;
      }
    }
    function combine(arrayA, arrayB, callback) {
      var array = _to_consumable_array(arrayA).concat(_to_consumable_array(arrayB));
      compress(array, callback);
      return array;
    }
    function augment(arrayA, arrayB, callback) {
      arrayB.forEach(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          arrayA.push(element);
        }
      });
    }
    function separate(array, arrayA, arrayB, callback) {
      array.forEach(function(element, index) {
        var passed = callback(element, index);
        passed ? arrayA.push(element) : arrayB.push(element);
      });
    }
    function forwardsFind(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function backwardsFind(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        value = callback(value, element, index);
      }
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
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      firstLast,
      secondLast,
      thirdLast,
      fourthLast,
      fifthLast,
      sixthLast,
      seventhLast,
      eighthLast,
      ninthLast,
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
      match,
      find,
      replace,
      splice,
      filter,
      prune,
      extract,
      patch,
      compress,
      combine,
      augment,
      separate,
      forwardsFind,
      backwardsFind,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      bottommostNameFromPath: function() {
        return bottommostNameFromPath;
      },
      combinePaths: function() {
        return combinePaths;
      },
      concatenatePaths: function() {
        return concatenatePaths;
      },
      default: function() {
        return _default;
      },
      isPathAbsolutePath: function() {
        return isPathAbsolutePath;
      },
      isPathName: function() {
        return isPathName;
      },
      isPathRelativePath: function() {
        return isPathRelativePath;
      },
      isPathTopmostName: function() {
        return isPathTopmostName;
      },
      isTopmostNameInAbsolutePath: function() {
        return isTopmostNameInAbsolutePath;
      },
      pathWithoutBottommostNameFromPath: function() {
        return pathWithoutBottommostNameFromPath;
      },
      pathWithoutTopmostDirectoryNameFromPath: function() {
        return pathWithoutTopmostDirectoryNameFromPath;
      },
      topmostDirectoryNameFromPath: function() {
        return topmostDirectoryNameFromPath;
      },
      topmostDirectoryPathFromPath: function() {
        return topmostDirectoryPathFromPath;
      }
    });
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
      var lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array.first)(relativePathNames);
      lastPathName = (0, _array.last)(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array.first)(relativePathNames);
        lastPathName = (0, _array.last)(pathNames);
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
        var secondMatch = (0, _array.second)(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
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
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      hostnameFromHost: function() {
        return hostnameFromHost;
      },
      overwrite: function() {
        return overwrite;
      },
      portFromHost: function() {
        return portFromHost;
      },
      queryStringFromQuery: function() {
        return queryStringFromQuery;
      },
      secureFromHost: function() {
        return secureFromHost;
      },
      underwrite: function() {
        return underwrite;
      },
      urlFromHostURIAndQuery: function() {
        return urlFromHostURIAndQuery;
      }
    });
    var _array = require_array();
    var _constants = require_constants();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
        var existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName !== null) {
        headers[existingName] = value;
      }
    }
    function underwrite(headers, name, value) {
      var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
        var existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName === null) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
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
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString2, name, index) {
        var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString2 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString2;
      }, _constants.EMPTY_STRING);
      return queryString;
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
  });

  // node_modules/necessary/lib/utilities/string.js
  var require_string = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      indexOf: function() {
        return indexOf;
      },
      strcmp: function() {
        return strcmp;
      },
      strlen: function() {
        return strlen;
      },
      substring: function() {
        return substring;
      }
    });
    var _constants = require_constants();
    function strlen(string) {
      var length = 0;
      var iterator = string[Symbol.iterator]();
      var character = iterator.next();
      while (!character.done) {
        character = iterator.next();
        length++;
      }
      return length;
    }
    function strcmp(stringA, stringB) {
      var difference;
      var iteratorA = stringA[Symbol.iterator](), iteratorB = stringB[Symbol.iterator]();
      var characterA = iteratorA.next(), characterB = iteratorB.next(), codePointA, codePointB;
      while (true) {
        codePointA = characterA.value ? characterA.value.codePointAt(0) : 0;
        codePointB = characterB.value ? characterB.value.codePointAt(0) : 0;
        difference = codePointB - codePointA;
        if (difference !== 0) {
          break;
        }
        if (characterA.done || characterB.done) {
          break;
        }
        characterA = iteratorA.next();
        characterB = iteratorB.next();
      }
      return difference;
    }
    function indexOf(string, searchString) {
      var index = -1, found = false;
      var searchStringLength = strlen(searchString);
      if (searchStringLength > 0) {
        var character;
        var iterator = string[Symbol.iterator](), searchIterator = searchString[Symbol.iterator](), searchCharacter = searchIterator.next();
        character = iterator.next();
        index++;
        while (!character.done) {
          if (character.value === searchCharacter.value) {
            var start = index, end = start + searchStringLength, subString = substring(string, start, end), difference = strcmp(subString, searchString);
            if (difference === 0) {
              found = true;
              break;
            }
          }
          character = iterator.next();
          index++;
        }
      }
      if (!found) {
        index = -1;
      }
      return index;
    }
    function substring(string, start) {
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
      var index = 0;
      var iterator = string[Symbol.iterator](), characters = [];
      var character = iterator.next();
      while (!character.done) {
        if (index === end) {
          break;
        }
        if (index >= start) {
          characters.push(character.value);
        }
        index++;
        character = iterator.next();
      }
      var _$substring = characters.join(_constants.EMPTY_STRING);
      return _$substring;
    }
    var _default = {
      strcmp,
      strlen,
      indexOf,
      substring
    };
  });

  // node_modules/necessary/lib/utilities/version.js
  var require_version = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      migrate: function() {
        return migrate;
      }
    });
    function migrate(json, migrationMap, latestVersion) {
      var version = json.version;
      while (version !== latestVersion) {
        var migrateFunction = migrationMap[version];
        json = migrateFunction(json);
        version = json.version;
      }
      return json;
    }
    var _default = {
      migrate
    };
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      backwardsForEach: function() {
        return backwardsForEach;
      },
      default: function() {
        return _default;
      },
      eventually: function() {
        return eventually;
      },
      forEach: function() {
        return forEach;
      },
      forwardsForEach: function() {
        return forwardsForEach;
      },
      repeatedly: function() {
        return repeatedly;
      },
      sequence: function() {
        return sequence;
      },
      whilst: function() {
        return whilst;
      }
    });
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
      var length = operations.length;
      var count = 0;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      }
      operations.forEach(function(operation, index) {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      var count = 0;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      }
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
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      get: function() {
        return get;
      },
      post: function() {
        return post;
      },
      request: function() {
        return request;
      }
    });
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _headers = require_headers();
    var _http = require_http();
    function get(host, uri, query, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, headers, content, callback);
    }
    function post(host, uri, query, headers, content, callback) {
      if (callback === void 0) {
        callback = content;
        content = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, headers, content, callback);
    }
    function request(host, uri, query, method, headers, content, callback) {
      var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
        if (readyState == 4) {
          var _$content = response;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = _$content, json2 = JSON.parse(jsonString2);
              _$content = json2;
            } catch (error) {
              _$content = null;
            }
          }
          callback(_$content, statusCode);
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
      }
      content !== null ? xmlHttpRequest.send(content) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    function underwriteAcceptHeader(headers, accept) {
      var name = _headers.ACCEPT_HEADER, value = accept;
      (0, _http.underwrite)(headers, name, value);
    }
    function underwriteContentTypeHeader(headers, contentTYpe) {
      var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
      (0, _http.underwrite)(headers, name, value);
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ajaxUtilities: function() {
        return _ajax.default;
      },
      arrayUtilities: function() {
        return _array.default;
      },
      asynchronousUtilities: function() {
        return _asynchronous.default;
      },
      characters: function() {
        return _characters.default;
      },
      contentTypes: function() {
        return _contentTypes.default;
      },
      encodings: function() {
        return _encodings.default;
      },
      headers: function() {
        return _headers.default;
      },
      httpUtilities: function() {
        return _http.default;
      },
      keyCodes: function() {
        return _keyCodes.default;
      },
      levels: function() {
        return _levels.default;
      },
      methods: function() {
        return _methods.default;
      },
      pathUtilities: function() {
        return _path.default;
      },
      statusCodes: function() {
        return _statusCodes.default;
      },
      statusMessages: function() {
        return _statusMessages.default;
      },
      stringUtilities: function() {
        return _string.default;
      },
      versionUtilities: function() {
        return _version.default;
      }
    });
    var _levels = /* @__PURE__ */ _interop_require_default(require_levels());
    var _methods = /* @__PURE__ */ _interop_require_default(require_methods());
    var _headers = /* @__PURE__ */ _interop_require_default(require_headers());
    var _keyCodes = /* @__PURE__ */ _interop_require_default(require_keyCodes());
    var _encodings = /* @__PURE__ */ _interop_require_default(require_encodings());
    var _characters = /* @__PURE__ */ _interop_require_default(require_characters());
    var _statusCodes = /* @__PURE__ */ _interop_require_default(require_statusCodes());
    var _contentTypes = /* @__PURE__ */ _interop_require_default(require_contentTypes());
    var _statusMessages = /* @__PURE__ */ _interop_require_default(require_statusMessages());
    var _path = /* @__PURE__ */ _interop_require_default(require_path());
    var _http = /* @__PURE__ */ _interop_require_default(require_http());
    var _array = /* @__PURE__ */ _interop_require_default(require_array());
    var _string = /* @__PURE__ */ _interop_require_default(require_string());
    var _version = /* @__PURE__ */ _interop_require_default(require_version());
    var _asynchronous = /* @__PURE__ */ _interop_require_default(require_asynchronous());
    var _ajax = /* @__PURE__ */ _interop_require_default(require_ajax());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/utilities/search.js
  var require_search = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      backwardsDepthFirstSearch: function() {
        return backwardsDepthFirstSearch;
      },
      forwardsDepthFirstSearch: function() {
        return forwardsDepthFirstSearch;
      }
    });
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function forwardsDepthFirstSearch(vertex, callback, visitedVertexes) {
      var predecessorVertexes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var terminate = false;
      var visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
      if (!visitedVertexesIncludesVertex) {
        var visitedVertex = vertex;
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, predecessorVertexes);
        if (!terminate) {
          var predecessorVertex = vertex;
          predecessorVertexes = _to_consumable_array(predecessorVertexes).concat([
            predecessorVertex
          ]);
          terminate = vertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
            var _$vertex = immediateSuccessorVertex, vertexIndex = _$vertex.getIndex(), predecessorVertexIndex = predecessorVertex.getIndex();
            if (vertexIndex > predecessorVertexIndex) {
              var terminate2 = forwardsDepthFirstSearch(_$vertex, callback, visitedVertexes, predecessorVertexes);
              if (terminate2) {
                return true;
              }
            }
          });
        }
      }
      return terminate;
    }
    function backwardsDepthFirstSearch(vertex, callback, visitedVertexes) {
      var successorVertexes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var terminate = false;
      var visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
      if (!visitedVertexesIncludesVertex) {
        var visitedVertex = vertex;
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, successorVertexes);
        if (!terminate) {
          var successorVertex = vertex;
          successorVertexes = _to_consumable_array(successorVertexes).concat([
            successorVertex
          ]);
          terminate = vertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
            var _$vertex = immediatePredecessorVertex, vertexIndex = _$vertex.getIndex(), successorVertexIndex = successorVertex.getIndex();
            if (vertexIndex < successorVertexIndex) {
              var terminate2 = backwardsDepthFirstSearch(_$vertex, callback, visitedVertexes, successorVertexes);
              if (terminate2) {
                return true;
              }
            }
          });
        }
      }
      return terminate;
    }
  });

  // lib/vertex.js
  var require_vertex2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Vertex;
      }
    });
    var _necessary = require_browser();
    var _vertex = require_vertex();
    var _search = require_search();
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var last = _necessary.arrayUtilities.last;
    var tail = _necessary.arrayUtilities.tail;
    var Vertex = /* @__PURE__ */ function() {
      function Vertex2(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes) {
        _class_call_check(this, Vertex2);
        this.name = name;
        this.index = index;
        this.immediateSuccessorVertexes = immediateSuccessorVertexes;
        this.immediatePredecessorVertexes = immediatePredecessorVertexes;
      }
      _create_class(Vertex2, [
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
          key: "getImmediateSuccessorVertexes",
          value: function getImmediateSuccessorVertexes() {
            return this.immediateSuccessorVertexes;
          }
        },
        {
          key: "getImmediatePredecessorVertexes",
          value: function getImmediatePredecessorVertexes() {
            return this.immediatePredecessorVertexes;
          }
        },
        {
          key: "isStranded",
          value: function isStranded() {
            var immediateSuccessorVertexesLength = this.immediateSuccessorVertexes.length, immediatePredecessorVertexesLength = this.immediatePredecessorVertexes.length, stranded = immediateSuccessorVertexesLength === 0 && immediatePredecessorVertexesLength === 0;
            return stranded;
          }
        },
        {
          key: "isVertexForwardsReachable",
          value: function isVertexForwardsReachable(vertex) {
            var forwardsReachableVertexes = this.retrieveForwardsReachableVertexes(vertex), lastForwardsReachableVertex = last(forwardsReachableVertexes), vertexForwardsReachable = vertex === lastForwardsReachableVertex;
            return vertexForwardsReachable;
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
          key: "retrieveSuccessorVertexNames",
          value: function retrieveSuccessorVertexNames() {
            var forwardsReachableVertexes = this.retrieveForwardsReachableVertexes(), forwardsReachableVertexesTail = tail(forwardsReachableVertexes), successorVertexes = forwardsReachableVertexesTail, successorVertexNames = (0, _vertex.vertexNamesFromVertexes)(successorVertexes);
            return successorVertexNames;
          }
        },
        {
          key: "retrievePredecessorVertexNames",
          value: function retrievePredecessorVertexNames() {
            var backwardsReachableVertexes = this.retrieveBackwardsReachableVertexes(), backwardsReachableVertexesTail = tail(backwardsReachableVertexes), predecessorVertexes = backwardsReachableVertexesTail, predecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(predecessorVertexes);
            return predecessorVertexNames;
          }
        },
        {
          key: "retrieveForwardsReachableVertexes",
          value: function retrieveForwardsReachableVertexes() {
            var vertex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            var vertexA = vertex, visitedVertexes = this.forwardsDepthFirstSearch(function(vertex2) {
              var vertexB = vertex2, terminate = vertexA === vertexB;
              if (terminate) {
                return true;
              }
            }), forwardsReachableVertexes = visitedVertexes;
            return forwardsReachableVertexes;
          }
        },
        {
          key: "retrieveBackwardsReachableVertexes",
          value: function retrieveBackwardsReachableVertexes() {
            var vertex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            var vertexA = vertex, visitedVertexes = this.backwardsDepthFirstSearch(function(vertex2) {
              var vertexB = vertex2, terminate = vertexA === vertexB;
              if (terminate) {
                return true;
              }
            }), backwardsReachableVertexes = visitedVertexes;
            return backwardsReachableVertexes;
          }
        },
        {
          key: "isVertexImmediateSuccessorVertex",
          value: function isVertexImmediateSuccessorVertex(vertex) {
            var vertexImmediateSuccessorVertex = this.immediateSuccessorVertexes.includes(vertex);
            return vertexImmediateSuccessorVertex;
          }
        },
        {
          key: "isVertexImmediatePredecessorVertex",
          value: function isVertexImmediatePredecessorVertex(vertex) {
            var vertexImmediatePredecessorVertex = this.immediatePredecessorVertexes.includes(vertex);
            return vertexImmediatePredecessorVertex;
          }
        },
        {
          key: "getImmediateSuccessorVertexNames",
          value: function getImmediateSuccessorVertexNames() {
            var immediateSuccessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(this.immediateSuccessorVertexes);
            return immediateSuccessorVertexNames;
          }
        },
        {
          key: "getImmediatePredecessorVertexNames",
          value: function getImmediatePredecessorVertexNames() {
            var immediatePredecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(this.immediatePredecessorVertexes);
            return immediatePredecessorVertexNames;
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
          key: "setImmediateSuccessorVertexes",
          value: function setImmediateSuccessorVertexes(immediateSuccessorVertexes) {
            this.immediateSuccessorVertexes = immediateSuccessorVertexes;
          }
        },
        {
          key: "setImmediatePredecessorVertexes",
          value: function setImmediatePredecessorVertexes(immediatePredecessorVertexes) {
            this.immediatePredecessorVertexes = immediatePredecessorVertexes;
          }
        },
        {
          key: "decrementIndex",
          value: function decrementIndex() {
            this.index--;
          }
        },
        {
          key: "addImmediateSuccessorVertex",
          value: function addImmediateSuccessorVertex(immediateSuccessorVertex) {
            this.immediateSuccessorVertexes.push(immediateSuccessorVertex);
          }
        },
        {
          key: "addImmediatePredecessorVertex",
          value: function addImmediatePredecessorVertex(immediatePredecessorVertex) {
            this.immediatePredecessorVertexes.push(immediatePredecessorVertex);
          }
        },
        {
          key: "removeImmediateSuccessorVertex",
          value: function removeImmediateSuccessorVertex(immediateSuccessorVertex) {
            var index = this.immediateSuccessorVertexes.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
            this.immediateSuccessorVertexes.splice(start, deleteCount);
          }
        },
        {
          key: "removeImmediatePredecessorVertex",
          value: function removeImmediatePredecessorVertex(immediatePredecessorVertex) {
            var index = this.immediatePredecessorVertexes.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
            this.immediatePredecessorVertexes.splice(start, deleteCount);
          }
        },
        {
          key: "forwardsDepthFirstSearch",
          value: function forwardsDepthFirstSearch(callback) {
            var vertex = this, visitedVertexes = [];
            (0, _search.forwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
            return visitedVertexes;
          }
        },
        {
          key: "backwardsDepthFirstSearch",
          value: function backwardsDepthFirstSearch(callback) {
            var vertex = this, visitedVertexes = [];
            (0, _search.backwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
            return visitedVertexes;
          }
        },
        {
          key: "someImmediateSuccessorVertex",
          value: function someImmediateSuccessorVertex(callback) {
            return this.immediateSuccessorVertexes.some(callback);
          }
        },
        {
          key: "someImmediatePredecessorVertex",
          value: function someImmediatePredecessorVertex(callback) {
            return this.immediatePredecessorVertexes.some(callback);
          }
        },
        {
          key: "forEachImmediateSuccessorVertex",
          value: function forEachImmediateSuccessorVertex(callback) {
            this.immediateSuccessorVertexes.forEach(callback);
          }
        },
        {
          key: "forEachImmediatePredecessorVertex",
          value: function forEachImmediatePredecessorVertex(callback) {
            this.immediatePredecessorVertexes.forEach(callback);
          }
        }
      ], [
        {
          key: "fromNameAndIndex",
          value: function fromNameAndIndex(name, index) {
            var immediateSuccessorVertexes = [], immediatePredecessorVertexes = [], dependencyVertex = new Vertex2(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes);
            return dependencyVertex;
          }
        }
      ]);
      return Vertex2;
    }();
  });

  // lib/utilities/index.js
  var require_utilities = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      indexesFromVertexes: function() {
        return indexesFromVertexes;
      },
      orderIndexes: function() {
        return orderIndexes;
      }
    });
    function orderIndexes(indexes) {
      indexes.sort(function(firstIndex, secondIndex) {
        if (false) {
        } else if (firstIndex < secondIndex) {
          return -1;
        } else if (firstIndex > secondIndex) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    function indexesFromVertexes(vertexes) {
      var indexes = vertexes.map(function(vertex) {
        var index = vertex.getIndex();
        return index;
      });
      return indexes;
    }
  });

  // lib/directedGraph.js
  var require_directedGraph = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return DirectedGraph;
      }
    });
    var _necessary = require_browser();
    var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
    var _cycle = /* @__PURE__ */ _interop_require_default(require_cycle());
    var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex2());
    var _index = require_utilities();
    var _vertex1 = require_vertex();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    var first = _necessary.arrayUtilities.first;
    var DirectedGraph = /* @__PURE__ */ function() {
      function DirectedGraph2(vertexMap) {
        _class_call_check(this, DirectedGraph2);
        this.vertexMap = vertexMap;
      }
      _create_class(DirectedGraph2, [
        {
          key: "getVertexNap",
          value: function getVertexNap() {
            return this.vertexMap;
          }
        },
        {
          key: "getVertexes",
          value: function getVertexes() {
            var vertexMapValues = Object.values(this.vertexMap), vertexes = vertexMapValues;
            return vertexes;
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
          key: "getOrderedVertexNames",
          value: function getOrderedVertexNames() {
            var vertexes = this.getVertexes();
            (0, _vertex1.orderVertexes)(vertexes);
            var orderedVertexes = vertexes, orderedVertexNames = (0, _vertex1.vertexNamesFromVertexes)(orderedVertexes);
            return orderedVertexNames;
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
          key: "getEdgesBySourceVertexName",
          value: function getEdgesBySourceVertexName(sourceVertexName) {
            var edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
            if (sourceVertex !== null) {
              var immediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(), immediateSuccessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediateSuccessorVertexes), targetVertexNames = immediateSuccessorVertexNames;
              targetVertexNames.forEach(function(targetVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                edges.push(edge);
              });
            }
            return edges;
          }
        },
        {
          key: "getEdgesByTargetVertexName",
          value: function getEdgesByTargetVertexName(targetVertexName) {
            var edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
            if (targetVertex !== null) {
              var immediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes(), immediatePredecessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediatePredecessorVertexes), sourceVertexNames = immediatePredecessorVertexNames;
              sourceVertexNames.forEach(function(sourceVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                edges.push(edge);
              });
            }
            return edges;
          }
        },
        {
          key: "getFirstCycle",
          value: function getFirstCycle() {
            var firstCycle = null;
            var cyclesPresent = this.areCyclesPresent();
            if (cyclesPresent) {
              var cyclicEdges = this.getCyclicEdges(), firstCyclicEdge = first(cyclicEdges), sourceVertexName = firstCyclicEdge.getSourceVertexName(), targetVertexName = firstCyclicEdge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
              targetVertex.forwardsDepthFirstSearch(function(vertex, predecessorVertexes) {
                var terminate = false;
                if (vertex === sourceVertex) {
                  terminate = true;
                  var cycle = _cycle.default.fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes);
                  firstCycle = cycle;
                }
                return terminate;
              });
            }
            return firstCycle;
          }
        },
        {
          key: "getCyclicEdges",
          value: function getCyclicEdges() {
            var cyclicEdges = [], vertexes = this.getVertexes();
            vertexes.forEach(function(vertex) {
              var sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex();
              vertex.forEachImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                var targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
                if (targetVertexIndex < sourceVertexIndex) {
                  var sourceVertexName = sourceVertex.getName(), targetVertexName = targetVertex.getName(), edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), cyclicEdge = edge;
                  cyclicEdges.push(cyclicEdge);
                }
              });
              sourceVertex;
            });
            return cyclicEdges;
          }
        },
        {
          key: "areCyclesPresent",
          value: function areCyclesPresent() {
            var vertexes = this.getVertexes(), cyclesPresent = vertexes.some(function(vertex) {
              var sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex(), cyclicEdgePresent = vertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                var targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
                if (targetVertexIndex < sourceVertexIndex) {
                  return true;
                }
              });
              if (cyclicEdgePresent) {
                return true;
              }
            });
            return cyclesPresent;
          }
        },
        {
          key: "isEdgePresent",
          value: function isEdgePresent(edge) {
            var edgePresent = false;
            var sourceVertexName = edge.getSourceVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName);
            if (sourceVertex !== null) {
              var targetVertexName = edge.getTargetVertexName(), targetVertex = this.getVertexByVertexName(targetVertexName);
              if (targetVertex !== null) {
                edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
              }
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
          key: "getImmediateSuccessorVertexNamesByVertexName",
          value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
            var vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
            return immediateSuccessorVertexNames;
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
          key: "isEdgePresentBySourceVertexNameAndTargetVertexName",
          value: function isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
            var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), edgePresent = this.isEdgePresent(edge);
            return edgePresent;
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
            var vertexPresent = this.isVertexPresentByVertexName(vertexName);
            if (!vertexPresent) {
              return;
            }
            var vertex = this.getVertexByVertexName(vertexName);
            vertex.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
              var immediatePredecessorVertex = vertex;
              immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
            });
            vertex.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
              var immediateSuccessVertex = vertex;
              immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
            });
            this.deleteVertexByVertexName(vertexName);
            var vertexes = this.getVertexes(), deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex();
            vertexes.forEach(function(vertex2) {
              var vertexIndex = vertex2.getIndex();
              if (vertexIndex > deletedVertexIndex) {
                vertex2.decrementIndex();
              }
            });
            this.filterCyclicEdges();
          }
        },
        {
          key: "addVertexesByVertexNames",
          value: function addVertexesByVertexNames(vertexNames) {
            var _this = this;
            vertexNames.forEach(function(vertexName) {
              _this.addVertexByVertexName(vertexName);
            });
          }
        },
        {
          key: "removeVertexesByVertexNames",
          value: function removeVertexesByVertexNames(vertexNames) {
            var _this = this;
            vertexNames.forEach(function(vertexName) {
              _this.removeVertexByVertexName(vertexName);
            });
          }
        },
        {
          key: "addEdge",
          value: function addEdge(edge) {
            var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
            if (sourceVertexName === targetVertexName) {
              return;
            }
            var sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
            if (edgePresent) {
              return;
            }
            var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex();
            if (sourceVertexIndex > targetVertexIndex) {
              this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
            }
            var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex;
            immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
            immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
          }
        },
        {
          key: "addEdges",
          value: function addEdges(edges) {
            var _this = this;
            edges.forEach(function(edge) {
              _this.addEdge(edge);
            });
          }
        },
        {
          key: "removeEdge",
          value: function removeEdge(edge, removeStrandedVertexes) {
            var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
            if (!edgePresent) {
              return;
            }
            sourceVertex.removeImmediateSuccessorVertex(targetVertex);
            targetVertex.removeImmediatePredecessorVertex(sourceVertex);
            if (removeStrandedVertexes) {
              var sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
              if (sourceVertexStranded) {
                this.removeVertexByVertexName(sourceVertexName);
              }
              if (targetVertexStranded) {
                this.removeVertexByVertexName(targetVertexName);
              }
            }
            this.filterCyclicEdges();
          }
        },
        {
          key: "removeEdges",
          value: function removeEdges(edges) {
            var _this = this;
            var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            edges.forEach(function(edge) {
              _this.removeEdge(edge, removeStrandedVertexes);
            });
          }
        },
        {
          key: "removeAllEdgesAndVertexes",
          value: function removeAllEdgesAndVertexes() {
            this.vertexMap = {};
          }
        },
        {
          key: "addEdgeBySourceVertexNameAndTargetVertexName",
          value: function addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
            var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            this.addEdge(edge);
          }
        },
        {
          key: "reorderVertexesBySourceVertexAndTargetVertex",
          value: function reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
            var sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
            if (sourceVertexForwardsReachable) {
              return;
            }
            var forwardsReachableVertexes = targetVertex.retrieveForwardsReachableVertexes(), backwardsReachableVertexes = sourceVertex.retrieveBackwardsReachableVertexes();
            (0, _vertex1.orderVertexes)(backwardsReachableVertexes);
            (0, _vertex1.orderVertexes)(forwardsReachableVertexes);
            var reachableVertexes = _to_consumable_array(backwardsReachableVertexes).concat(_to_consumable_array(forwardsReachableVertexes)), reachableIndexes = (0, _index.indexesFromVertexes)(reachableVertexes);
            (0, _index.orderIndexes)(reachableIndexes);
            reachableVertexes.forEach(function(reachableVertex, index) {
              var reachableIndex = reachableIndexes[index];
              index = reachableIndex;
              reachableVertex.setIndex(index);
            });
          }
        },
        {
          key: "filterCyclicEdges",
          value: function filterCyclicEdges() {
            var _this = this;
            var cyclicEdges = this.getCyclicEdges(), edges = cyclicEdges;
            edges.forEach(function(edge) {
              var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = _this.getVertexByVertexName(sourceVertexName), targetVertex = _this.getVertexByVertexName(targetVertexName), sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
              if (!sourceVertexForwardsReachable) {
                _this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
              }
            });
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
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var vertexMap = {}, directedGraph = new DirectedGraph2(vertexMap);
            return directedGraph;
          }
        }
      ]);
      return DirectedGraph2;
    }();
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      Cycle: function() {
        return _cycle.default;
      },
      DirectedGraph: function() {
        return _directedGraph.default;
      },
      Edge: function() {
        return _edge.default;
      },
      Vertex: function() {
        return _vertex.default;
      }
    });
    var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
    var _cycle = /* @__PURE__ */ _interop_require_default(require_cycle());
    var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex2());
    var _directedGraph = /* @__PURE__ */ _interop_require_default(require_directedGraph());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example.js
  var require_example = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _index = require_lib();
    var edge1 = _index.Edge.fromSourceVertexNameAndTargetVertexName("./easy-with-style", "./easy-layout");
    var edge2 = _index.Edge.fromSourceVertexNameAndTargetVertexName("./with-style", "./easy-with-style");
    var edge3 = _index.Edge.fromSourceVertexNameAndTargetVertexName("./easy-layout", "./occam-lexers");
    var edge4 = _index.Edge.fromSourceVertexNameAndTargetVertexName("./easy-with-style", "./easy-layout");
    var edge5 = _index.Edge.fromSourceVertexNameAndTargetVertexName("./occam-lexers", "./with-style");
    var directedGraph = _index.DirectedGraph.fromNothing();
    directedGraph.addEdge(edge1);
    directedGraph.addEdge(edge2);
    directedGraph.addEdge(edge3);
    directedGraph.addEdge(edge4);
    directedGraph.addEdge(edge5);
    directedGraph.removeVertexByVertexName("./occam-lexers");
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2xldmVscy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2hlYWRlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMva2V5Q29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvZW5jb2RpbmdzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzQ29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29udGVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c01lc3NhZ2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3BhdGguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2Jyb3dzZXIuanMiLCAic3JjL3V0aWxpdGllcy9zZWFyY2guanMiLCAic3JjL3ZlcnRleC5qcyIsICJzcmMvdXRpbGl0aWVzL2luZGV4LmpzIiwgInNyYy9kaXJlY3RlZEdyYXBoLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKSAmJiAodGhpcy50YXJnZXRWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkgfHwgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpIHsgIC8vL1xuICB2ZXJ0ZXhlcy5zb3J0KChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4KSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhJbmRleCA9IGZpcnN0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSBzZWNvbmRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdFZlcnRleEluZGV4IDwgc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgIGlmIChmaXJzdFZlcnRleEluZGV4ID4gc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiArMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE5hbWVzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMoc291cmNlVmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICAgICAgc291cmNlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVBfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQVwiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQVJfQ0hBUkFDVEVSID0gXCJ8XCI7XG5leHBvcnQgY29uc3QgREFTSF9DSEFSQUNURVIgPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBET1dOX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0JcIjtcbmV4cG9ydCBjb25zdCBMRUZUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0RcIjtcbmV4cG9ydCBjb25zdCBSSUdIVF9DSEFSQUNURVIgPSBcIlx1MDAxYltDXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQ19DSEFSQUNURVIgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkRfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgQkFDS1RJQ0tfREVMSU1JVEVSID0gXCJgXCI7XG5leHBvcnQgY29uc3QgTkVXX0xJTkVfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiA9IFwiL1wiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSID0gXCIhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVBfQ0hBUkFDVEVSLFxuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBEQVNIX0NIQVJBQ1RFUixcbiAgRE9XTl9DSEFSQUNURVIsXG4gIExFRlRfQ0hBUkFDVEVSLFxuICBSSUdIVF9DSEFSQUNURVIsXG4gIFNQQUNFX0NIQVJBQ1RFUixcbiAgQ09NTUFfQ0hBUkFDVEVSLFxuICBDT0xPTl9DSEFSQUNURVIsXG4gIFBFUklPRF9DSEFSQUNURVIsXG4gIENUUkxfQ19DSEFSQUNURVIsXG4gIFdJTERDQVJEX0NIQVJBQ1RFUixcbiAgQkFDS1RJQ0tfREVMSU1JVEVSLFxuICBORVdfTElORV9DSEFSQUNURVIsXG4gIEFNUEVSU0FORF9DSEFSQUNURVIsXG4gIEJBQ0tTUEFDRV9DSEFSQUNURVIsXG4gIEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSLFxuICBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSLFxuICBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfQ09ERSA9IDA7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19DT0RFID0gMjAwO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfQ09ERSA9IDMwMjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSA9IDIwMTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSA9IFwiUmVxdWVzdCB0aW1lb3V0XCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFID0gXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBcIjBcIjtcbmV4cG9ydCBjb25zdCBEQVRBID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBOVU1CRVIgPSBcIm51bWJlclwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUID0gXCJkZWZhdWx0XCI7XG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlQgPSBcIkVOVklST05NRU5UXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0pTT04gPSBcInBhY2thZ2UuanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gWyBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5QiBdLFxuICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5QSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVsZXRlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDIsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgxKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Qi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIG1hdGNoLFxuICBmaW5kLFxuICByZXBsYWNlLFxuICBzcGxpY2UsXG4gIGZpbHRlcixcbiAgcHJ1bmUsXG4gIGV4dHJhY3QsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT0xPTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgIT09IG51bGwpIHtcbiAgICBoZWFkZXJzW2V4aXN0aW5nTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lID09PSBudWxsKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhxdWVyeSksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W25hbWVdLFxuICAgICAgICAgICAgICAgIGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgYW1wZXJzYW5kT3JOb3RoaW5nID0gKGluZGV4ICE9PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNUEVSU0FORF9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5LFxuICB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKTtcblxuICBsZXQgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBsZW5ndGgrK1xuICB9XG5cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IGl0ZXJhdG9yQSA9IHN0cmluZ0FbU3ltYm9sLml0ZXJhdG9yXSgpLCAvLy9cbiAgICAgICAgaXRlcmF0b3JCID0gc3RyaW5nQltTeW1ib2wuaXRlcmF0b3JdKCk7IC8vL1xuXG4gIGxldCBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKSxcbiAgICAgIGNoYXJhY3RlckIgPSBpdGVyYXRvckIubmV4dCgpLFxuICAgICAgY29kZVBvaW50QSxcbiAgICAgIGNvZGVQb2ludEI7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2RlUG9pbnRBID0gY2hhcmFjdGVyQS52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckEudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICBjb2RlUG9pbnRCID0gY2hhcmFjdGVyQi52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckIudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSBjb2RlUG9pbnRCIC0gY29kZVBvaW50QTtcblxuICAgIGlmIChkaWZmZXJlbmNlICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyQS5kb25lIHx8IGNoYXJhY3RlckIuZG9uZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyQSA9IGl0ZXJhdG9yQS5uZXh0KCk7XG4gICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTEsXG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHNlYXJjaFN0cmluZ0xlbmd0aCA9IHN0cmxlbihzZWFyY2hTdHJpbmcpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgbGV0IGNoYXJhY3RlcjtcblxuICAgIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hJdGVyYXRvciA9IHNlYXJjaFN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgc2VhcmNoQ2hhcmFjdGVyID0gc2VhcmNoSXRlcmF0b3IubmV4dCgpO1xuXG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09IHNlYXJjaENoYXJhY3Rlci52YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2VhcmNoU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgICAgICBzdWJTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kKSxcbiAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHN0cmNtcChzdWJTdHJpbmcsIHNlYXJjaFN0cmluZyk7XG5cbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPT09IDApIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgaW5kZXggPSAtMTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgY2hhcmFjdGVycyA9IFtdO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gc3RhcnQpIHtcbiAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIudmFsdWUpOyAvLy9cbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlKGpzb24sIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbikge1xuICBsZXQgeyB2ZXJzaW9uIH0gPSBqc29uO1xuXG4gIHdoaWxlICh2ZXJzaW9uICE9PSBsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgbWlncmF0ZUZ1bmN0aW9uID0gbWlncmF0aW9uTWFwW3ZlcnNpb25dO1xuXG4gICAganNvbiA9IG1pZ3JhdGVGdW5jdGlvbihqc29uKTtcblxuICAgICh7IHZlcnNpb24gfSA9IGpzb24pO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlncmF0ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3Qob3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShvcGVyYXRpb24sIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IEFDQ0VQVF9IRUFERVIsIENPTlRFTlRfVFlQRV9IRUFERVIgfSBmcm9tIFwiLi4vaGVhZGVyc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudCA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBjb250ZW50O1xuICAgIGNvbnRlbnQgPSBoZWFkZXJzO1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUeXBlKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSksXG4gICAgICAgIGFjY2VwdCA9IGhlYWRlcnNbQUNDRVBUX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKGNvbnRlbnRUeXBlID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgIGNvbnN0IGpzb24gPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gICAgY29udGVudCA9IGpzb25TdHJpbmc7ICAvLy9cbiAgfVxuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2UgfSA9IHhtbEh0dHBSZXF1ZXN0LFxuICAgICAgICAgIHN0YXR1c0NvZGUgPSBzdGF0dXM7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlO1xuXG4gICAgICBpZiAoYWNjZXB0ID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgICBjb250ZW50ID0ganNvbjsgIC8vL1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGNvbnRlbnQsIHN0YXR1c0NvZGUpO1xuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFRfSEVBREVSLCBhY2NlcHQpO1xuICB9XG5cbiAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihDT05URU5UX1RZUEVfSEVBREVSLCBjb250ZW50VHlwZSk7XG4gIH1cblxuICAoY29udGVudCAhPT0gbnVsbCkgP1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoY29udGVudCkgOlxuICAgICAgeG1sSHR0cFJlcXVlc3Quc2VuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcmVxdWVzdFxufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCkge1xuICBjb25zdCBuYW1lID0gQUNDRVBUX0hFQURFUiwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGFjY2VwdDsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VFlwZSkge1xuICBjb25zdCBuYW1lID0gQ09OVEVOVF9UWVBFX0hFQURFUiwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGNvbnRlbnRUWXBlOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWV0aG9kcyB9IGZyb20gXCIuL21ldGhvZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZGVycyB9IGZyb20gXCIuL2hlYWRlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5Q29kZXMgfSBmcm9tIFwiLi9rZXlDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbmNvZGluZ3MgfSBmcm9tIFwiLi9lbmNvZGluZ3NcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhcmFjdGVycyB9IGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzQ29kZXMgfSBmcm9tIFwiLi9zdGF0dXNDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250ZW50VHlwZXMgfSBmcm9tIFwiLi9jb250ZW50VHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzTWVzc2FnZXMgfSBmcm9tIFwiLi9zdGF0dXNNZXNzYWdlc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIGlmICghdGVybWluYXRlKSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4ucHJlZGVjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4SW5kZXggPSBwcmVkZWNlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IHByZWRlY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4uc3VjY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCwgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9zZWFyY2hcIjtcblxuY29uc3QgeyBsYXN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUodmVydGV4KSB7XG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKHZlcnRleCksXG4gICAgICAgICAgbGFzdEZvcndhcmRzUmVhY2hhYmxlVmVydGV4ID0gbGFzdChmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKSxcbiAgICAgICAgICB2ZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSA9ICh2ZXJ0ZXggPT09IGxhc3RGb3J3YXJkc1JlYWNoYWJsZVZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4Rm9yd2FyZHNSZWFjaGFibGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgcmV0cmlldmVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCA9IHRhaWwoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHJldHJpZXZlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcygpLFxuICAgICAgICAgIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCA9IHRhaWwoYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybWluYXRlID0gKHZlcnRleEEgPT09IHZlcnRleEIpO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyh2ZXJ0ZXggPSBudWxsKSB7XG4gICAgY29uc3QgdmVydGV4QSA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybWluYXRlID0gKHZlcnRleEEgPT09IHZlcnRleEIpO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXM7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckluZGV4ZXMoaW5kZXhlcykgeyAgLy8vXG4gIGluZGV4ZXMuc29ydCgoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXgpID0+IHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RJbmRleCA8IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RJbmRleCA+IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleGVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpIHtcbiAgICAgICAgdmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCkge1xuICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCByZWFjaGFibGVWZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLmJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVhY2hhYmxlSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXMocmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHJlYWNoYWJsZUluZGV4ZXMpO1xuXG4gICAgcmVhY2hhYmxlVmVydGV4ZXMuZm9yRWFjaCgocmVhY2hhYmxlVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVhY2hhYmxlSW5kZXggPSByZWFjaGFibGVJbmRleGVzW2luZGV4XTtcblxuICAgICAgaW5kZXggPSByZWFjaGFibGVJbmRleDsgLy8vXG5cbiAgICAgIHJlYWNoYWJsZVZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZ2V0Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICBlZGdlcyA9IGN5Y2xpY0VkZ2VzOyAgLy8vXG5cbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRnZSB9IGZyb20gXCIuL2VkZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3ljbGUgfSBmcm9tIFwiLi9jeWNsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZXJ0ZXggfSBmcm9tIFwiLi92ZXJ0ZXhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2RpcmVjdGVkR3JhcGhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWRnZSwgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuY29uc3QgZWRnZTEgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKSxcbiAgICAgIGVkZ2UyID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL3dpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktd2l0aC1zdHlsZVwiKSxcbiAgICAgIGVkZ2UzID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL2Vhc3ktbGF5b3V0XCIsIFwiLi9vY2NhbS1sZXhlcnNcIiksXG4gICAgICBlZGdlNCA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi9lYXN5LXdpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktbGF5b3V0XCIpLFxuICAgICAgZWRnZTUgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vb2NjYW0tbGV4ZXJzXCIsIFwiLi93aXRoLXN0eWxlXCIpO1xuXG5jb25zdCBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tTm90aGluZygpO1xuXG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTEpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UyKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlMyk7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTQpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2U1KTtcblxuZGlyZWN0ZWRHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoXCIuL29jY2FtLWxleGVyc1wiKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixRQUFNLE9BQU4sMkJBQUE7cUJBQ0Qsa0JBQWtCLGtCQUFnQjtnQ0FEM0I7QUFFakIsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxtQkFBbUI7O29CQUhQLE9BQUE7O1VBTW5CLEtBQUE7aUJBQUEsK0JB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
