(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

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
    var Edge = class {
      constructor(sourceVertexName, targetVertexName) {
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
      }
      getSourceVertexName() {
        return this.sourceVertexName;
      }
      getTargetVertexName() {
        return this.targetVertexName;
      }
      match(edge) {
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), matches = this.sourceVertexName === sourceVertexName && this.targetVertexName === targetVertexName;
        return matches;
      }
      matchVertexName(vertexName) {
        const matches = this.sourceVertexName === vertexName || this.targetVertexName === vertexName;
        return matches;
      }
      matchSourceVertexName(sourceVertexName) {
        const matches = this.sourceVertexName === sourceVertexName;
        return matches;
      }
      matchTargetVertexName(targetVertexName) {
        const matches = this.targetVertexName === targetVertexName;
        return matches;
      }
      matchVertexNames(sourceVertexName, targetVertexName) {
        const matches = this.sourceVertexName === sourceVertexName && this.targetVertexName === targetVertexName;
        return matches;
      }
      static fromSourceVertexAndTargetVertex(sourceVertex, targetVertex) {
        const sourceVertexName = sourceVertex.getName(), targetVertexName = targetVertex.getName(), edge = new Edge(sourceVertexName, targetVertexName);
        return edge;
      }
      static fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
        const edge = new Edge(sourceVertexName, targetVertexName);
        return edge;
      }
    };
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get orderVertexes() {
        return orderVertexes;
      },
      get vertexNamesFromVertexes() {
        return vertexNamesFromVertexes;
      }
    });
    function orderVertexes(vertexes) {
      vertexes.sort((firstVertex, secondVertex) => {
        const firstVertexIndex = firstVertex.getIndex(), secondVertexIndex = secondVertex.getIndex();
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
      const vertexNames = vertexes.map((vertex) => {
        const vertexName = vertex.getName();
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
    var Cycle = class {
      constructor(vertexNames) {
        this.vertexNames = vertexNames;
      }
      getVertexNames() {
        return this.vertexNames;
      }
      static fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes) {
        const vertexes = [
          ...predecessorVertexes,
          sourceVertex
        ], vertexNames = (0, _vertex.vertexNamesFromVertexes)(vertexes), cycle = new Cycle(vertexNames);
        return cycle;
      }
    };
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DEBUG_LEVEL() {
        return DEBUG_LEVEL;
      },
      get ERROR_LEVEL() {
        return ERROR_LEVEL;
      },
      get FATAL_LEVEL() {
        return FATAL_LEVEL;
      },
      get INFO_LEVEL() {
        return INFO_LEVEL;
      },
      get TRACE_LEVEL() {
        return TRACE_LEVEL;
      },
      get WARNING_LEVEL() {
        return WARNING_LEVEL;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DELETE_METHOD() {
        return DELETE_METHOD;
      },
      get GET_METHOD() {
        return GET_METHOD;
      },
      get OPTIONS_METHOD() {
        return OPTIONS_METHOD;
      },
      get PATCH_METHOD() {
        return PATCH_METHOD;
      },
      get POST_METHOD() {
        return POST_METHOD;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ACCEPT_HEADER() {
        return ACCEPT_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_HEADERS_HEADER() {
        return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_METHODS_HEADER() {
        return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_ORIGIN_HEADER() {
        return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      },
      get ACCESS_CONTROL_REQUEST_METHOD_HEADER() {
        return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      },
      get AUTHORIZATION_HEADER() {
        return AUTHORIZATION_HEADER;
      },
      get CACHE_CONTROL_HEADER() {
        return CACHE_CONTROL_HEADER;
      },
      get CONTENT_DISPOSITION_HEADER() {
        return CONTENT_DISPOSITION_HEADER;
      },
      get CONTENT_LENGTH_HEADER() {
        return CONTENT_LENGTH_HEADER;
      },
      get CONTENT_TYPE_HEADER() {
        return CONTENT_TYPE_HEADER;
      },
      get LOCATION_HEADER() {
        return LOCATION_HEADER;
      },
      get PRAGMA_HEADER() {
        return PRAGMA_HEADER;
      },
      get TRANSFER_ENCODING_HEADER() {
        return TRANSFER_ENCODING_HEADER;
      },
      get USER_AGENT_HEADER() {
        return USER_AGENT_HEADER;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ARROW_DOWN_KEY_CODE() {
        return ARROW_DOWN_KEY_CODE;
      },
      get ARROW_LEFT_KEY_CODE() {
        return ARROW_LEFT_KEY_CODE;
      },
      get ARROW_RIGHT_KEY_CODE() {
        return ARROW_RIGHT_KEY_CODE;
      },
      get ARROW_UP_KEY_CODE() {
        return ARROW_UP_KEY_CODE;
      },
      get BACKSPACE_KEY_CODE() {
        return BACKSPACE_KEY_CODE;
      },
      get DELETE_KEY_CODE() {
        return DELETE_KEY_CODE;
      },
      get ENTER_KEY_CODE() {
        return ENTER_KEY_CODE;
      },
      get ESCAPE_KEY_CODE() {
        return ESCAPE_KEY_CODE;
      },
      get SHIFT_KEY_CODE() {
        return SHIFT_KEY_CODE;
      },
      get TAB_KEY_CODE() {
        return TAB_KEY_CODE;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BASE64_ENCODING() {
        return BASE64_ENCODING;
      },
      get UTF8_ENCODING() {
        return UTF8_ENCODING;
      },
      get UTF_8_ENCODING() {
        return UTF_8_ENCODING;
      },
      get default() {
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

  // node_modules/necessary/lib/jsonTypes.js
  var require_jsonTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ARRAY_JSON_TYPE() {
        return ARRAY_JSON_TYPE;
      },
      get BOOLEAN_JSON_TYPE() {
        return BOOLEAN_JSON_TYPE;
      },
      get NUMBER_JSON_TYPE() {
        return NUMBER_JSON_TYPE;
      },
      get OBJECT_JSON_TYPE() {
        return OBJECT_JSON_TYPE;
      },
      get PRIMITIVE_JSON_TYPE() {
        return PRIMITIVE_JSON_TYPE;
      },
      get STRING_JSON_TYPE() {
        return STRING_JSON_TYPE;
      },
      get default() {
        return _default;
      }
    });
    var ARRAY_JSON_TYPE = "array";
    var OBJECT_JSON_TYPE = "object";
    var STRING_JSON_TYPE = "string";
    var NUMBER_JSON_TYPE = "number";
    var BOOLEAN_JSON_TYPE = "boolean";
    var PRIMITIVE_JSON_TYPE = "primitive";
    var _default = {
      ARRAY_JSON_TYPE,
      OBJECT_JSON_TYPE,
      STRING_JSON_TYPE,
      NUMBER_JSON_TYPE,
      BOOLEAN_JSON_TYPE,
      PRIMITIVE_JSON_TYPE
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get AMPERSAND_CHARACTER() {
        return AMPERSAND_CHARACTER;
      },
      get ASTERISK_CHARACTER() {
        return ASTERISK_CHARACTER;
      },
      get BACKSLASH_CHARACTER() {
        return BACKSLASH_CHARACTER;
      },
      get BACKSPACE_CHARACTER() {
        return BACKSPACE_CHARACTER;
      },
      get BACKTICK_DELIMITER() {
        return BACKTICK_DELIMITER;
      },
      get BAR_CHARACTER() {
        return BAR_CHARACTER;
      },
      get CARRIAGE_RETURN_CHARACTER() {
        return CARRIAGE_RETURN_CHARACTER;
      },
      get CLOSING_BRACKET_CHARACTER() {
        return CLOSING_BRACKET_CHARACTER;
      },
      get CLOSING_CURLY_BRACKET_CHARACTER() {
        return CLOSING_CURLY_BRACKET_CHARACTER;
      },
      get CLOSING_SQUARE_BRACKET_CHARACTER() {
        return CLOSING_SQUARE_BRACKET_CHARACTER;
      },
      get COLON_CHARACTER() {
        return COLON_CHARACTER;
      },
      get COMMA_CHARACTER() {
        return COMMA_CHARACTER;
      },
      get CTRL_C_CHARACTER() {
        return CTRL_C_CHARACTER;
      },
      get DASH_CHARACTER() {
        return DASH_CHARACTER;
      },
      get DOLLAR_CHARACTER() {
        return DOLLAR_CHARACTER;
      },
      get DOWN_CHARACTER() {
        return DOWN_CHARACTER;
      },
      get ESCAPE_CHARACTER() {
        return ESCAPE_CHARACTER;
      },
      get ETX_CHARACTER() {
        return ETX_CHARACTER;
      },
      get EXCLAMATION_MARK_CHARACTER() {
        return EXCLAMATION_MARK_CHARACTER;
      },
      get FORWARD_SLASH_CHARACTER() {
        return FORWARD_SLASH_CHARACTER;
      },
      get HAT_CHARACTER() {
        return HAT_CHARACTER;
      },
      get LEFT_CHARACTER() {
        return LEFT_CHARACTER;
      },
      get NEW_LINE_CHARACTER() {
        return NEW_LINE_CHARACTER;
      },
      get OPENING_BRACKET_CHARACTER() {
        return OPENING_BRACKET_CHARACTER;
      },
      get OPENING_CURLY_BRACKET_CHARACTER() {
        return OPENING_CURLY_BRACKET_CHARACTER;
      },
      get OPENING_SQUARE_BRACKET_CHARACTER() {
        return OPENING_SQUARE_BRACKET_CHARACTER;
      },
      get PERIOD_CHARACTER() {
        return PERIOD_CHARACTER;
      },
      get PLUS_CHARACTER() {
        return PLUS_CHARACTER;
      },
      get QUESTION_MARK_CHARACTER() {
        return QUESTION_MARK_CHARACTER;
      },
      get RIGHT_CHARACTER() {
        return RIGHT_CHARACTER;
      },
      get SPACE_CHARACTER() {
        return SPACE_CHARACTER;
      },
      get UP_CHARACTER() {
        return UP_CHARACTER;
      },
      get WILDCARD_CHARACTER() {
        return WILDCARD_CHARACTER;
      },
      get default() {
        return _default;
      }
    });
    var UP_CHARACTER = "[A";
    var ETX_CHARACTER = "";
    var BAR_CHARACTER = "|";
    var HAT_CHARACTER = "^";
    var PLUS_CHARACTER = "+";
    var DASH_CHARACTER = "-";
    var DOWN_CHARACTER = "[B";
    var LEFT_CHARACTER = "[D";
    var RIGHT_CHARACTER = "[C";
    var SPACE_CHARACTER = " ";
    var COMMA_CHARACTER = ",";
    var COLON_CHARACTER = ":";
    var PERIOD_CHARACTER = ".";
    var DOLLAR_CHARACTER = "$";
    var CTRL_C_CHARACTER = "^C";
    var ESCAPE_CHARACTER = "";
    var ASTERISK_CHARACTER = "*";
    var WILDCARD_CHARACTER = "*";
    var BACKTICK_DELIMITER = "`";
    var NEW_LINE_CHARACTER = "\n";
    var AMPERSAND_CHARACTER = "&";
    var BACKSLASH_CHARACTER = "\\";
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    var QUESTION_MARK_CHARACTER = "?";
    var FORWARD_SLASH_CHARACTER = "/";
    var OPENING_BRACKET_CHARACTER = "(";
    var CLOSING_BRACKET_CHARACTER = ")";
    var CARRIAGE_RETURN_CHARACTER = "\r";
    var EXCLAMATION_MARK_CHARACTER = "!";
    var OPENING_CURLY_BRACKET_CHARACTER = "{";
    var CLOSING_CURLY_BRACKET_CHARACTER = "}";
    var OPENING_SQUARE_BRACKET_CHARACTER = "[";
    var CLOSING_SQUARE_BRACKET_CHARACTER = "]";
    var _default = {
      UP_CHARACTER,
      ETX_CHARACTER,
      BAR_CHARACTER,
      HAT_CHARACTER,
      PLUS_CHARACTER,
      DASH_CHARACTER,
      DOWN_CHARACTER,
      LEFT_CHARACTER,
      RIGHT_CHARACTER,
      SPACE_CHARACTER,
      COMMA_CHARACTER,
      COLON_CHARACTER,
      PERIOD_CHARACTER,
      DOLLAR_CHARACTER,
      CTRL_C_CHARACTER,
      ESCAPE_CHARACTER,
      ASTERISK_CHARACTER,
      WILDCARD_CHARACTER,
      BACKTICK_DELIMITER,
      NEW_LINE_CHARACTER,
      AMPERSAND_CHARACTER,
      BACKSLASH_CHARACTER,
      BACKSPACE_CHARACTER,
      QUESTION_MARK_CHARACTER,
      FORWARD_SLASH_CHARACTER,
      OPENING_BRACKET_CHARACTER,
      CLOSING_BRACKET_CHARACTER,
      CARRIAGE_RETURN_CHARACTER,
      EXCLAMATION_MARK_CHARACTER,
      OPENING_CURLY_BRACKET_CHARACTER,
      CLOSING_CURLY_BRACKET_CHARACTER,
      OPENING_SQUARE_BRACKET_CHARACTER,
      CLOSING_SQUARE_BRACKET_CHARACTER
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BAD_GATEWAY_502_STATUS_CODE() {
        return BAD_GATEWAY_502_STATUS_CODE;
      },
      get BAD_REQUEST_400_STATUS_CODE() {
        return BAD_REQUEST_400_STATUS_CODE;
      },
      get CONFLICT_409_STATUS_CODE() {
        return CONFLICT_409_STATUS_CODE;
      },
      get CREATED_201_STATUS_CODE() {
        return CREATED_201_STATUS_CODE;
      },
      get FORBIDDEN_403_STATUS_CODE() {
        return FORBIDDEN_403_STATUS_CODE;
      },
      get FOUND_302_STATUS_CODE() {
        return FOUND_302_STATUS_CODE;
      },
      get INTERNAL_SERVER_ERROR_500_STATUS_CODE() {
        return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      },
      get METHOD_NOT_ALLOWED_405_STATUS_CODE() {
        return METHOD_NOT_ALLOWED_405_STATUS_CODE;
      },
      get NOT_ACCEPTABLE_406_STATUS_CODE() {
        return NOT_ACCEPTABLE_406_STATUS_CODE;
      },
      get NOT_FOUND_404_STATUS_CODE() {
        return NOT_FOUND_404_STATUS_CODE;
      },
      get NO_CONTENT_204_STATUS_CODE() {
        return NO_CONTENT_204_STATUS_CODE;
      },
      get OK_200_STATUS_CODE() {
        return OK_200_STATUS_CODE;
      },
      get REQUEST_TIMEOUT_408_STATUS_CODE() {
        return REQUEST_TIMEOUT_408_STATUS_CODE;
      },
      get SEE_OTHER_303_STATUS_CODE() {
        return SEE_OTHER_303_STATUS_CODE;
      },
      get SERVICE_UNAVAILABLE_503_STATUS_CODE() {
        return SERVICE_UNAVAILABLE_503_STATUS_CODE;
      },
      get TOO_MANY_REQUESTS_429_STATUS_CODE() {
        return TOO_MANY_REQUESTS_429_STATUS_CODE;
      },
      get UNAUTHORIZED_401_STATUS_CODE() {
        return UNAUTHORIZED_401_STATUS_CODE;
      },
      get UNPROCESSABLE_ENTITY_422_STATUS_CODE() {
        return UNPROCESSABLE_ENTITY_422_STATUS_CODE;
      },
      get ZERO_0_STATUS_CODE() {
        return ZERO_0_STATUS_CODE;
      },
      get default() {
        return _default;
      }
    });
    var ZERO_0_STATUS_CODE = 0;
    var OK_200_STATUS_CODE = 200;
    var FOUND_302_STATUS_CODE = 302;
    var CREATED_201_STATUS_CODE = 201;
    var CONFLICT_409_STATUS_CODE = 409;
    var SEE_OTHER_303_STATUS_CODE = 303;
    var FORBIDDEN_403_STATUS_CODE = 403;
    var NOT_FOUND_404_STATUS_CODE = 404;
    var NO_CONTENT_204_STATUS_CODE = 204;
    var BAD_GATEWAY_502_STATUS_CODE = 502;
    var BAD_REQUEST_400_STATUS_CODE = 400;
    var UNAUTHORIZED_401_STATUS_CODE = 401;
    var NOT_ACCEPTABLE_406_STATUS_CODE = 406;
    var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
    var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
    var METHOD_NOT_ALLOWED_405_STATUS_CODE = 405;
    var SERVICE_UNAVAILABLE_503_STATUS_CODE = 503;
    var UNPROCESSABLE_ENTITY_422_STATUS_CODE = 422;
    var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
    var _default = {
      ZERO_0_STATUS_CODE,
      OK_200_STATUS_CODE,
      FOUND_302_STATUS_CODE,
      CREATED_201_STATUS_CODE,
      CONFLICT_409_STATUS_CODE,
      SEE_OTHER_303_STATUS_CODE,
      FORBIDDEN_403_STATUS_CODE,
      NOT_FOUND_404_STATUS_CODE,
      NO_CONTENT_204_STATUS_CODE,
      BAD_GATEWAY_502_STATUS_CODE,
      BAD_REQUEST_400_STATUS_CODE,
      UNAUTHORIZED_401_STATUS_CODE,
      NOT_ACCEPTABLE_406_STATUS_CODE,
      REQUEST_TIMEOUT_408_STATUS_CODE,
      TOO_MANY_REQUESTS_429_STATUS_CODE,
      METHOD_NOT_ALLOWED_405_STATUS_CODE,
      SERVICE_UNAVAILABLE_503_STATUS_CODE,
      UNPROCESSABLE_ENTITY_422_STATUS_CODE,
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE() {
        return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get APPLICATION_JSON_CONTENT_TYPE() {
        return APPLICATION_JSON_CONTENT_TYPE;
      },
      get APPLICATION_OCTET_STREAM_CONTENT_TYPE() {
        return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
      },
      get APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE() {
        return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE() {
        return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      },
      get TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE() {
        return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get TEXT_HTML_CONTENT_TYPE() {
        return TEXT_HTML_CONTENT_TYPE;
      },
      get TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE() {
        return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get TEXT_PLAIN_CONTENT_TYPE() {
        return TEXT_PLAIN_CONTENT_TYPE;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BAD_GATEWAY_502_STATUS_MESSAGE() {
        return BAD_GATEWAY_502_STATUS_MESSAGE;
      },
      get BAD_REQUEST_400_STATUS_MESSAGE() {
        return BAD_REQUEST_400_STATUS_MESSAGE;
      },
      get CONFLICT_409_STATUS_MESSAGE() {
        return CONFLICT_409_STATUS_MESSAGE;
      },
      get CREATED_201_STATUS_MESSAGE() {
        return CREATED_201_STATUS_MESSAGE;
      },
      get FORBIDDEN_403_STATUS_MESSAGE() {
        return FORBIDDEN_403_STATUS_MESSAGE;
      },
      get FOUND_302_STATUS_MESSAGE() {
        return FOUND_302_STATUS_MESSAGE;
      },
      get INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE() {
        return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      },
      get METHOD_NOT_ALLOWED_405_STATUS_MESSAGE() {
        return METHOD_NOT_ALLOWED_405_STATUS_MESSAGE;
      },
      get NOT_ACCEPTABLE_406_STATUS_MESSAGE() {
        return NOT_ACCEPTABLE_406_STATUS_MESSAGE;
      },
      get NOT_FOUND_404_STATUS_MESSAGE() {
        return NOT_FOUND_404_STATUS_MESSAGE;
      },
      get NO_CONTENT_204_STATUS_MESSAGE() {
        return NO_CONTENT_204_STATUS_MESSAGE;
      },
      get OK_200_STATUS_MESSAGE() {
        return OK_200_STATUS_MESSAGE;
      },
      get REQUEST_TIMEOUT_408_STATUS_MESSAGE() {
        return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
      },
      get SEE_OTHER_303_STATUS_MESSAGE() {
        return SEE_OTHER_303_STATUS_MESSAGE;
      },
      get SERVICE_UNAVAILABLE_503_STATUS_MESSAGE() {
        return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
      },
      get TOO_MANY_REQUESTS_429_STATUS_MESSAGE() {
        return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      },
      get UNAUTHORIZED_401_STATUS_MESSAGE() {
        return UNAUTHORIZED_401_STATUS_MESSAGE;
      },
      get UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE() {
        return UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE;
      },
      get ZERO_0_STATUS_MESSAGE() {
        return ZERO_0_STATUS_MESSAGE;
      },
      get default() {
        return _default;
      }
    });
    var ZERO_0_STATUS_MESSAGE = "";
    var OK_200_STATUS_MESSAGE = "OK";
    var FOUND_302_STATUS_MESSAGE = "Found";
    var CREATED_201_STATUS_MESSAGE = "Created";
    var CONFLICT_409_STATUS_MESSAGE = "Conflict";
    var SEE_OTHER_303_STATUS_MESSAGE = "See other";
    var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
    var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
    var NO_CONTENT_204_STATUS_MESSAGE = "No content";
    var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
    var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
    var UNAUTHORIZED_401_STATUS_MESSAGE = "Unauthorized";
    var NOT_ACCEPTABLE_406_STATUS_MESSAGE = "Not Acceptable";
    var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
    var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
    var METHOD_NOT_ALLOWED_405_STATUS_MESSAGE = "Method not allowed";
    var SERVICE_UNAVAILABLE_503_STATUS_MESSAGE = "Service unavailable";
    var UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE = "Unprocessable Entity";
    var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
    var _default = {
      ZERO_0_STATUS_MESSAGE,
      OK_200_STATUS_MESSAGE,
      FOUND_302_STATUS_MESSAGE,
      CREATED_201_STATUS_MESSAGE,
      CONFLICT_409_STATUS_MESSAGE,
      SEE_OTHER_303_STATUS_MESSAGE,
      FORBIDDEN_403_STATUS_MESSAGE,
      NOT_FOUND_404_STATUS_MESSAGE,
      NO_CONTENT_204_STATUS_MESSAGE,
      BAD_GATEWAY_502_STATUS_MESSAGE,
      BAD_REQUEST_400_STATUS_MESSAGE,
      UNAUTHORIZED_401_STATUS_MESSAGE,
      NOT_ACCEPTABLE_406_STATUS_MESSAGE,
      REQUEST_TIMEOUT_408_STATUS_MESSAGE,
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
      METHOD_NOT_ALLOWED_405_STATUS_MESSAGE,
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE,
      UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE,
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DATA() {
        return DATA;
      },
      get DEFAULT() {
        return DEFAULT;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get ENVIRONMENT() {
        return ENVIRONMENT;
      },
      get ERROR() {
        return ERROR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get OBJECT_OBJECT() {
        return OBJECT_OBJECT;
      },
      get PACKAGE_JSON() {
        return PACKAGE_JSON;
      },
      get STRING() {
        return STRING;
      },
      get ZERO() {
        return ZERO;
      }
    });
    var ZERO = "0";
    var DATA = "data";
    var ERROR = "error";
    var STRING = "string";
    var DEFAULT = "default";
    var FUNCTION = "function";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
    var PACKAGE_JSON = "package.json";
    var OBJECT_OBJECT = "[object Object]";
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get augment() {
        return augment;
      },
      get back() {
        return back;
      },
      get backwardsEvery() {
        return backwardsEvery;
      },
      get backwardsFind() {
        return backwardsFind;
      },
      get backwardsFindIndex() {
        return backwardsFindIndex;
      },
      get backwardsForEach() {
        return backwardsForEach;
      },
      get backwardsReduce() {
        return backwardsReduce;
      },
      get backwardsSome() {
        return backwardsSome;
      },
      get clear() {
        return clear;
      },
      get clone() {
        return clone;
      },
      get combine() {
        return combine;
      },
      get compare() {
        return compare;
      },
      get compress() {
        return compress;
      },
      get concat() {
        return concat;
      },
      get copy() {
        return copy;
      },
      get correlate() {
        return correlate;
      },
      get default() {
        return _default;
      },
      get each() {
        return each;
      },
      get eighth() {
        return eighth;
      },
      get eighthLast() {
        return eighthLast;
      },
      get extract() {
        return extract;
      },
      get fifth() {
        return fifth;
      },
      get fifthLast() {
        return fifthLast;
      },
      get filter() {
        return filter;
      },
      get find() {
        return find;
      },
      get first() {
        return first;
      },
      get firstLast() {
        return firstLast;
      },
      get forwardsEvery() {
        return forwardsEvery;
      },
      get forwardsFind() {
        return forwardsFind;
      },
      get forwardsFindIndex() {
        return forwardsFindIndex;
      },
      get forwardsForEach() {
        return forwardsForEach;
      },
      get forwardsReduce() {
        return forwardsReduce;
      },
      get forwardsSome() {
        return forwardsSome;
      },
      get fourth() {
        return fourth;
      },
      get fourthLast() {
        return fourthLast;
      },
      get front() {
        return front;
      },
      get head() {
        return head;
      },
      get intersection() {
        return intersection;
      },
      get last() {
        return last;
      },
      get leftDifference() {
        return leftDifference;
      },
      get match() {
        return match;
      },
      get merge() {
        return merge;
      },
      get ninth() {
        return ninth;
      },
      get ninthLast() {
        return ninthLast;
      },
      get one() {
        return one;
      },
      get patch() {
        return patch;
      },
      get prune() {
        return prune;
      },
      get push() {
        return push;
      },
      get replace() {
        return replace;
      },
      get resolve() {
        return resolve;
      },
      get reverse() {
        return reverse;
      },
      get rightDifference() {
        return rightDifference;
      },
      get second() {
        return second;
      },
      get secondLast() {
        return secondLast;
      },
      get separate() {
        return separate;
      },
      get seventh() {
        return seventh;
      },
      get seventhLast() {
        return seventhLast;
      },
      get sixth() {
        return sixth;
      },
      get sixthLast() {
        return sixthLast;
      },
      get splice() {
        return splice;
      },
      get tail() {
        return tail;
      },
      get tenth() {
        return tenth;
      },
      get third() {
        return third;
      },
      get thirdLast() {
        return thirdLast;
      },
      get union() {
        return union;
      },
      get unshift() {
        return unshift;
      },
      get zip() {
        return zip;
      }
    });
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
      return array.slice(-1);
    }
    function front(array) {
      return array.slice(0, -1);
    }
    function push(arrayA, arrayB) {
      return Array.prototype.push.apply(arrayA, arrayB);
    }
    function unshift(arrayA, arrayB) {
      return Array.prototype.unshift.apply(arrayA, arrayB);
    }
    function merge(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function concat(arrayA, elementOrArray2) {
      const arrayB = Array.isArray(elementOrArray2) ? elementOrArray2 : [
        elementOrArray2
      ];
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function splice(arrayA, start, deleteCount = Infinity, arrayB = []) {
      return Array.prototype.splice.call(arrayA, start, deleteCount, ...arrayB);
    }
    function clear(array) {
      const start = 0;
      return Array.prototype.splice.call(array, start);
    }
    function clone(array) {
      const start = 0;
      return Array.prototype.slice.call(array, start);
    }
    function reverse(array) {
      const start = 0;
      return Array.prototype.slice.call(array, start).reverse();
    }
    function copy(arrayA, arrayB) {
      const start = 0, deleteCount = arrayB.length;
      Array.prototype.splice.call(arrayA, start, deleteCount, ...arrayB);
    }
    function filter(array, callback) {
      const deletedElements = [], arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (!passed) {
          const start = index, deleteCount = 1, deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop();
          deletedElements.unshift(deletedElement);
        }
      }
      return deletedElements;
    }
    function prune(array, callback) {
      let deletedElement = void 0;
      Array.prototype.some.call(array, (element, index) => {
        const passed = callback(element, index);
        if (!passed) {
          const start = index, deleteCount = 1;
          deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop();
          return true;
        }
      });
      return deletedElement;
    }
    function extract(array, callback) {
      let deletedElement = void 0;
      Array.prototype.some.call(array, (element, index) => {
        const passed = callback(element, index);
        if (passed) {
          const start = index, deleteCount = 1;
          deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop();
          return true;
        }
      });
      return deletedElement;
    }
    function compress(array, callback) {
      let indexB = 0, arrayLength = array.length;
      while (indexB < arrayLength) {
        const elementB = array[indexB];
        for (let indexA = arrayLength - 1; indexA > indexB; indexA--) {
          const elementA = array[indexA], passed = callback(elementA, elementB);
          if (!passed) {
            const start = indexA, deleteCount = 1;
            Array.prototype.splice.call(array, start, deleteCount);
          }
        }
        indexB++;
        arrayLength = array.length;
      }
    }
    function one(array, callback) {
      let found = false;
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          if (!found) {
            found = true;
          } else {
            found = false;
            break;
          }
        }
      }
      return found;
    }
    function each(array, callback) {
      let found = false;
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          found = true;
        } else {
          found = false;
          break;
        }
      }
      return found;
    }
    function find(array, callback) {
      const elements = [], arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          elements.push(element);
        }
      }
      return elements;
    }
    function patch(arrayA, elementB, callback) {
      let found = false;
      const arrayALength = arrayA.length;
      for (let index = 0; index < arrayALength; index++) {
        const elementA = arrayA[index], passed = callback(elementA, index);
        if (passed) {
          Array.prototype.push.call(arrayA, elementB);
          found = true;
          break;
        }
      }
      return found;
    }
    function replace(arrayA, elementB, callback) {
      let found = false;
      const arrayALength = arrayA.length;
      for (let index = 0; index < arrayALength; index++) {
        const elementA = arrayA[index], passed = callback(elementA, index);
        if (passed) {
          const start = index, deleteCount = 1;
          Array.prototype.splice.call(arrayA, start, deleteCount, elementB);
          found = true;
          break;
        }
      }
      return found;
    }
    function zip(arrayA, arrayB, callback) {
      const array = Array.prototype.map.call(arrayA, (elementA, index) => {
        const elementB = arrayB[index], element = callback(elementA, elementB, index);
        return element;
      });
      return array;
    }
    function match(arrayA, arrayB, callback) {
      let matches = false;
      const arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        matches = Array.prototype.every.call(arrayA, (elementA, index) => {
          const elementB = arrayB[index], passed = callback(elementA, elementB, index);
          if (passed) {
            return true;
          }
        });
      }
      return matches;
    }
    function compare(arrayA, arrayB, callback) {
      let compares = false;
      const arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        arrayB = clone(arrayB);
        compares = Array.prototype.every.call(arrayA, (elementA) => {
          const elementB = extract(arrayB, (elementB2) => {
            const passed = callback(elementA, elementB2);
            if (passed) {
              return true;
            }
          });
          if (elementB !== void 0) {
            return true;
          }
        });
      }
      return compares;
    }
    function correlate(arrayA, arrayB, callback) {
      let correlates;
      arrayB = clone(arrayB);
      correlates = Array.prototype.every.call(arrayA, (elementA) => {
        const elementB = extract(arrayB, (elementB2) => {
          const passed = callback(elementA, elementB2);
          if (passed) {
            return true;
          }
        });
        if (elementB !== void 0) {
          return true;
        }
      });
      return correlates;
    }
    function resolve(arrayA, arrayB, callback) {
      let resolved;
      arrayA = clone(arrayA);
      for (; ; ) {
        const arrayALength2 = arrayA.length;
        if (arrayALength2 === 0) {
          break;
        }
        let resolved2 = false;
        Array.prototype.forEach.call(arrayA, (elementA) => {
          const passed = callback(elementA);
          if (passed) {
            const elementB = elementA;
            Array.prototype.push.call(arrayB, elementB);
            resolved2 = true;
          }
        });
        if (!resolved2) {
          break;
        }
        filter(arrayA, (elementA) => {
          const arrayBIncludesElementA = Array.prototype.includes.call(arrayB, elementA);
          if (!arrayBIncludesElementA) {
            return true;
          }
        });
      }
      const arrayALength = arrayA.length;
      resolved = arrayALength === 0;
      return resolved;
    }
    function combine(arrayA, arrayB, callback) {
      arrayA = Array.prototype.slice.call(arrayA);
      arrayB = Array.prototype.slice.call(arrayB);
      const array = [
        ...arrayA,
        ...arrayB
      ];
      compress(array, callback);
      return array;
    }
    function augment(arrayA, arrayB, callback) {
      const arrayBLength = arrayB.length;
      for (let index = 0; index < arrayBLength; index++) {
        const element = arrayB[index], passed = callback(element, index);
        if (passed) {
          Array.prototype.push.call(arrayA, element);
        }
      }
    }
    function separate(array, arrayA, arrayB, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          Array.prototype.push.call(arrayA, element);
        } else {
          Array.prototype.push.call(arrayB, element);
        }
      }
    }
    function union(arrayA, arrayB, callback) {
      arrayA = Array.prototype.slice.call(arrayA);
      arrayB = Array.prototype.slice.call(arrayB);
      const combinedArray = [
        ...arrayA,
        ...arrayB
      ];
      const array = [], combinedArrayLength = combinedArray.length;
      for (let index = 0; index < combinedArrayLength; index++) {
        let found = false;
        const arrayLength = array.length, combinedElement = combinedArray[index];
        for (let arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++) {
          const element = array[arrayIndex], passed = callback(element, combinedElement);
          if (passed) {
            found = true;
            break;
          }
        }
        if (!found) {
          Array.prototype.push.call(array, combinedElement);
        }
      }
      return array;
    }
    function intersection(arrayA, arrayB, callback) {
      const array = [], arrayALength = arrayA.length;
      for (let indexA = 0; indexA < arrayALength; indexA++) {
        let found = false;
        const elementA = arrayA[indexA], arrayBLength = arrayB.length;
        for (let indexB = 0; indexB < arrayBLength; indexB++) {
          const elementB = arrayB[indexB], passed = callback(elementA, elementB);
          if (passed) {
            found = true;
            break;
          }
        }
        if (found) {
          Array.prototype.push.call(array, elementA);
        }
      }
      return array;
    }
    function leftDifference(arrayA, arrayB, callback) {
      const array = [], arrayALength = arrayA.length;
      for (let indexA = 0; indexA < arrayALength; indexA++) {
        let found = false;
        const elementA = arrayA[indexA], arrayBLength = arrayB.length;
        for (let indexB = 0; indexB < arrayBLength; indexB++) {
          const elementB = arrayB[indexB], passed = callback(elementA, elementB);
          if (passed) {
            found = true;
            break;
          }
        }
        if (!found) {
          Array.prototype.push.call(array, elementA);
        }
      }
      return array;
    }
    function rightDifference(arrayA, arrayB, callback) {
      const array = [], arrayBLength = arrayB.length;
      for (let indexB = 0; indexB < arrayBLength; indexB++) {
        let found = false;
        const elementB = arrayB[indexB], arrayALength = arrayA.length;
        for (let indexA = 0; indexA < arrayALength; indexA++) {
          const elementA = arrayA[indexA], passed = callback(elementA, elementB);
          if (passed) {
            found = true;
            break;
          }
        }
        if (!found) {
          Array.prototype.push.call(array, elementB);
        }
      }
      return array;
    }
    function forwardsFind(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return void 0;
    }
    function backwardsFind(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return void 0;
    }
    function forwardsSome(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      let value = initialValue;
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      let value = initialValue;
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function forwardsForEach(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index];
        callback(element, index);
      }
    }
    function forwardsFindIndex(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
    }
    function backwardsFindIndex(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
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
      merge,
      clear,
      copy,
      zip,
      match,
      compare,
      correlate,
      resolve,
      one,
      each,
      find,
      clone,
      replace,
      splice,
      filter,
      prune,
      extract,
      patch,
      compress,
      combine,
      reverse,
      augment,
      separate,
      union,
      intersection,
      leftDifference,
      rightDifference,
      forwardsFind,
      backwardsFind,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach,
      forwardsFindIndex,
      backwardsFindIndex
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get bottommostNameFromPath() {
        return bottommostNameFromPath;
      },
      get combinePaths() {
        return combinePaths;
      },
      get concatenatePaths() {
        return concatenatePaths;
      },
      get default() {
        return _default;
      },
      get isPathAbsolutePath() {
        return isPathAbsolutePath;
      },
      get isPathName() {
        return isPathName;
      },
      get isPathRelativePath() {
        return isPathRelativePath;
      },
      get isPathTopmostName() {
        return isPathTopmostName;
      },
      get isTopmostNameInAbsolutePath() {
        return isTopmostNameInAbsolutePath;
      },
      get pathWithoutBottommostNameFromPath() {
        return pathWithoutBottommostNameFromPath;
      },
      get pathWithoutTopmostDirectoryNameFromPath() {
        return pathWithoutTopmostDirectoryNameFromPath;
      },
      get topmostDirectoryNameFromPath() {
        return topmostDirectoryNameFromPath;
      },
      get topmostDirectoryPathFromPath() {
        return topmostDirectoryPathFromPath;
      }
    });
    var _constants = require_constants();
    var _array = require_array();
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
      const pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      const pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      const pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      const pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      const regExp = new RegExp(`^${topmostName}(?:\\/.+)?$`), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      let combinedPath = null;
      const pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      let lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
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
        const combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath, ...remainingArguments) {
      let concatenatedPath;
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      concatenatedPath = `${path}/${relativePath}`;
      const remainingAArgumentsLength = remainingArguments.length;
      if (remainingAArgumentsLength > 0) {
        const path2 = concatenatedPath, relativePath2 = remainingArguments.shift();
        concatenatedPath = concatenatePaths(path2, relativePath2, ...remainingArguments);
      }
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      let bottommostName = null;
      const matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      const matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      let topmostDirectoryName = null;
      const matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      let pathWithoutBottommostName = null;
      const matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      let pathWithoutTopmostDirectoryName = null;
      const matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
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

  // node_modules/necessary/lib/utilities/json.js
  var require_json = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get isArray() {
        return isArray;
      },
      get isBoolean() {
        return isBoolean;
      },
      get isNull() {
        return isNull;
      },
      get isNumber() {
        return isNumber;
      },
      get isObject() {
        return isObject;
      },
      get isPrimitive() {
        return isPrimitive;
      },
      get isString() {
        return isString;
      },
      get typeOf() {
        return typeOf;
      }
    });
    var _constants = require_constants();
    var _jsonTypes = require_jsonTypes();
    function typeOf(json) {
      let type;
      const array = isArray(json), object = isObject(json), primitive = isPrimitive(json);
      if (false) {
      } else if (array) {
        type = _jsonTypes.ARRAY_JSON_TYPE;
      } else if (object) {
        type = _jsonTypes.OBJECT_JSON_TYPE;
      } else if (primitive) {
        type = _jsonTypes.PRIMITIVE_JSON_TYPE;
      }
      return type;
    }
    function isNull(json) {
      const _null = json === null;
      return _null;
    }
    function isArray(json) {
      const array = Array.isArray(json);
      return array;
    }
    function isObject(json) {
      const object = Object.prototype.toString.call(json) === _constants.OBJECT_OBJECT;
      return object;
    }
    function isString(json) {
      const string = typeof json === _jsonTypes.STRING_JSON_TYPE;
      return string;
    }
    function isNumber(json) {
      const number = typeof json === _jsonTypes.NUMBER_JSON_TYPE;
      return number;
    }
    function isBoolean(json) {
      const boolean = typeof json === _jsonTypes.BOOLEAN_JSON_TYPE;
      return boolean;
    }
    function isPrimitive(json) {
      const _null = isNull(json), string = isString(json), number = isNumber(json), boolean = isBoolean(json), primitive = _null || string || number || boolean;
      return primitive;
    }
    var _default = {
      typeOf,
      isNull,
      isArray,
      isObject,
      isString,
      isNumber,
      isBoolean,
      isPrimitive
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get hostnameFromHost() {
        return hostnameFromHost;
      },
      get overwrite() {
        return overwrite;
      },
      get portFromHost() {
        return portFromHost;
      },
      get queryStringFromQuery() {
        return queryStringFromQuery;
      },
      get secureFromHost() {
        return secureFromHost;
      },
      get underwrite() {
        return underwrite;
      },
      get urlFromHostURIAndQuery() {
        return urlFromHostURIAndQuery;
      }
    });
    var _array = require_array();
    var _constants = require_constants();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      const lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find((existingName2) => {
        const existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName !== null) {
        headers[existingName] = value;
      }
    }
    function underwrite(headers, name, value) {
      const lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find((existingName2) => {
        const existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName === null) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      let port;
      const matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
      if (index === -1) {
        const secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        const start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      const secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      const matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      const names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce((queryString2, name, index) => {
        const value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString2 += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
        return queryString2;
      }, _constants.EMPTY_STRING);
      return queryString;
    }
    function urlFromHostURIAndQuery(host, uri, query) {
      const queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? `${host}${uri}` : `${host}${uri}?${queryString}`;
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get indexOf() {
        return indexOf;
      },
      get isStringUpperCase() {
        return isStringUpperCase;
      },
      get strcmp() {
        return strcmp;
      },
      get strlen() {
        return strlen;
      },
      get substring() {
        return substring;
      }
    });
    function strlen(string) {
      let length = 0;
      for (const _ of string) {
        length++;
      }
      return length;
    }
    function strcmp(stringA, stringB) {
      let difference = 0;
      let naiveIndexA = 0, naiveIndexB = 0;
      const stringANaiveLength = stringA.length, stringBNaiveLength = stringB.length;
      while (naiveIndexA < stringANaiveLength || naiveIndexB < stringBNaiveLength) {
        const codePointA = naiveIndexA < stringANaiveLength ? stringA.codePointAt(naiveIndexA) : 0, codePointB = naiveIndexB < stringBNaiveLength ? stringB.codePointAt(naiveIndexB) : 0;
        difference = codePointA - codePointB;
        if (difference !== 0) {
          break;
        }
        naiveIndexA += codePointA > 65535 ? 2 : 1;
        naiveIndexB += codePointB > 65535 ? 2 : 1;
      }
      return difference;
    }
    function indexOf(string, searchString) {
      let index = -1;
      const searchStringLength = searchString.length;
      if (searchStringLength > 0) {
        const outerNaiveIndex = string.indexOf(searchString);
        if (outerNaiveIndex > -1) {
          index = 0;
          let innerNaiveIndex = 0;
          while (innerNaiveIndex < outerNaiveIndex) {
            const charCode = string.charCodeAt(innerNaiveIndex);
            innerNaiveIndex += charCode >= 55296 && charCode <= 56319 ? 2 : 1;
            index++;
          }
        }
      }
      return index;
    }
    function substring(string, start, end = Infinity) {
      const stringNaiveLength = string.length;
      let index = 0, naiveIndex = 0, naiveStart = stringNaiveLength, naiveEnd = stringNaiveLength;
      while (naiveIndex < stringNaiveLength) {
        if (index === start) {
          naiveStart = naiveIndex;
        }
        if (index === end) {
          naiveEnd = naiveIndex;
          break;
        }
        const charCode = string.charCodeAt(naiveIndex);
        naiveIndex += charCode >= 55296 && charCode <= 56319 ? 2 : 1;
        index++;
      }
      if (index === start) {
        naiveStart = naiveIndex;
      }
      if (index === end) {
        naiveEnd = naiveIndex;
      }
      const substring1 = string.substring(naiveStart, naiveEnd);
      return substring1;
    }
    function isStringUpperCase(string) {
      const upperCaseString = string.toUpperCase(), stringUpperCase = string === upperCaseString;
      return stringUpperCase;
    }
    var _default = {
      strcmp,
      strlen,
      indexOf,
      substring,
      isStringUpperCase
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get migrate() {
        return migrate;
      }
    });
    function migrate(json, migrationMap, latestVersion) {
      let {version} = json;
      while (version !== latestVersion) {
        const migrateFunction = migrationMap[version];
        json = migrateFunction(json);
        ({version} = json);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get backwardsForEach() {
        return backwardsForEach;
      },
      get default() {
        return _default;
      },
      get eventually() {
        return eventually;
      },
      get forEach() {
        return forEach;
      },
      get forwardsForEach() {
        return forwardsForEach;
      },
      get repeatedly() {
        return repeatedly;
      },
      get sequence() {
        return sequence;
      },
      get whilst() {
        return whilst;
      }
    });
    function whilst(operation, done, context) {
      function next(index2) {
        operation(() => {
          next(index2 + 1);
        }, done, context, index2);
      }
      const index = 0;
      next(index);
    }
    function forEach(array, operation, done, context) {
      const length = array.length;
      function next(index2) {
        if (index2 === length) {
          done();
          return;
        }
        const element = array[index2];
        operation(element, () => {
          next(index2 + 1);
        }, done, context, index2);
      }
      const index = 0;
      next(index);
    }
    function sequence(operations, done, context) {
      const length = operations.length;
      function next(index2) {
        if (index2 === length) {
          done();
          return;
        }
        const operation = operations[index2];
        operation(() => {
          next(index2 + 1);
        }, done, context, index2);
      }
      const index = 0;
      next(index);
    }
    function eventually(operations, done, context) {
      const length = operations.length;
      if (length === 0) {
        done();
        return;
      }
      let count = 0;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        }
      }
      operations.forEach((operation, index) => {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      if (length === 0) {
        done();
        return;
      }
      let count = 0;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        }
      }
      for (let index = 0; index < length; index++) {
        operation(next, done, context, index);
      }
    }
    function forwardsForEach(array, operation, done, context) {
      const length = array.length;
      function next(index2) {
        if (index2 === length) {
          done();
          return;
        }
        const element = array[index2];
        operation(element, () => {
          next(index2 + 1);
        }, done, context, index2);
      }
      const index = 0;
      next(index);
    }
    function backwardsForEach(array, operation, done, context) {
      const length = array.length;
      function next(index2) {
        if (index2 === -1) {
          done();
          return;
        }
        const element = array[index2];
        operation(element, () => {
          next(index2 - 1);
        }, done, context, index2);
      }
      const index = length - 1;
      next(index);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get get() {
        return get;
      },
      get post() {
        return post;
      },
      get request() {
        return request;
      }
    });
    var _constants = require_constants();
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _headers = require_headers();
    var _http = require_http();
    function get(host, uri, query, headers, responseType, callback) {
      if (typeof headers === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if (typeof responseType === _constants.FUNCTION) {
        callback = responseType;
        if (typeof headers === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      const method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function post(host, uri, query, content, headers, responseType, callback) {
      if (typeof headers === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if (typeof responseType === _constants.FUNCTION) {
        callback = responseType;
        if (typeof headers === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      const method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function request(host, uri, query, method, content, headers, responseType, callback) {
      const url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        const json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      if (responseType !== null) {
        Object.assign(xmlHttpRequest, {
          responseType
        });
      }
      xmlHttpRequest.onreadystatechange = () => {
        const {readyState, status, response} = xmlHttpRequest, statusCode = status;
        if (readyState == 4) {
          let content2 = response;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              const jsonString = content2, json = JSON.parse(jsonString);
              content2 = json;
            } catch (error) {
              content2 = null;
            }
          }
          callback(content2, statusCode);
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
      const name = _headers.ACCEPT_HEADER, value = accept;
      (0, _http.underwrite)(headers, name, value);
    }
    function underwriteContentTypeHeader(headers, contentTYpe) {
      const name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ajaxUtilities() {
        return _ajax.default;
      },
      get arrayUtilities() {
        return _array.default;
      },
      get asynchronousUtilities() {
        return _asynchronous.default;
      },
      get characters() {
        return _characters.default;
      },
      get contentTypes() {
        return _contentTypes.default;
      },
      get encodings() {
        return _encodings.default;
      },
      get headers() {
        return _headers.default;
      },
      get httpUtilities() {
        return _http.default;
      },
      get jsonTypes() {
        return _jsonTypes.default;
      },
      get jsonUtilities() {
        return _json.default;
      },
      get keyCodes() {
        return _keyCodes.default;
      },
      get levels() {
        return _levels.default;
      },
      get methods() {
        return _methods.default;
      },
      get pathUtilities() {
        return _path.default;
      },
      get statusCodes() {
        return _statusCodes.default;
      },
      get statusMessages() {
        return _statusMessages.default;
      },
      get stringUtilities() {
        return _string.default;
      },
      get versionUtilities() {
        return _version.default;
      }
    });
    var _levels = /* @__PURE__ */ _interop_require_default(require_levels());
    var _methods = /* @__PURE__ */ _interop_require_default(require_methods());
    var _headers = /* @__PURE__ */ _interop_require_default(require_headers());
    var _keyCodes = /* @__PURE__ */ _interop_require_default(require_keyCodes());
    var _encodings = /* @__PURE__ */ _interop_require_default(require_encodings());
    var _jsonTypes = /* @__PURE__ */ _interop_require_default(require_jsonTypes());
    var _characters = /* @__PURE__ */ _interop_require_default(require_characters());
    var _statusCodes = /* @__PURE__ */ _interop_require_default(require_statusCodes());
    var _contentTypes = /* @__PURE__ */ _interop_require_default(require_contentTypes());
    var _statusMessages = /* @__PURE__ */ _interop_require_default(require_statusMessages());
    var _path = /* @__PURE__ */ _interop_require_default(require_path());
    var _json = /* @__PURE__ */ _interop_require_default(require_json());
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get backwardsDepthFirstSearch() {
        return backwardsDepthFirstSearch;
      },
      get forwardsDepthFirstSearch() {
        return forwardsDepthFirstSearch;
      }
    });
    function forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes = []) {
      let terminate = false;
      const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
      if (!visitedVertexesIncludesVertex) {
        const visitedVertex = vertex;
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, predecessorVertexes);
        if (!terminate) {
          const predecessorVertex = vertex;
          predecessorVertexes = [
            ...predecessorVertexes,
            predecessorVertex
          ];
          terminate = vertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
            const vertex2 = immediateSuccessorVertex, vertexIndex = vertex2.getIndex(), predecessorVertexIndex = predecessorVertex.getIndex();
            if (vertexIndex > predecessorVertexIndex) {
              const terminate2 = forwardsDepthFirstSearch(vertex2, callback, visitedVertexes, predecessorVertexes);
              if (terminate2) {
                return true;
              }
            }
          });
        }
      }
      return terminate;
    }
    function backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes = []) {
      let terminate = false;
      const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
      if (!visitedVertexesIncludesVertex) {
        const visitedVertex = vertex;
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, successorVertexes);
        if (!terminate) {
          const successorVertex = vertex;
          successorVertexes = [
            ...successorVertexes,
            successorVertex
          ];
          terminate = vertex.someImmediatePredecessorVertex((immediatePredecessorVertex) => {
            const vertex2 = immediatePredecessorVertex, vertexIndex = vertex2.getIndex(), successorVertexIndex = successorVertex.getIndex();
            if (vertexIndex < successorVertexIndex) {
              const terminate2 = backwardsDepthFirstSearch(vertex2, callback, visitedVertexes, successorVertexes);
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
    var {last, tail} = _necessary.arrayUtilities;
    var Vertex = class {
      constructor(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes) {
        this.name = name;
        this.index = index;
        this.immediateSuccessorVertexes = immediateSuccessorVertexes;
        this.immediatePredecessorVertexes = immediatePredecessorVertexes;
      }
      getName() {
        return this.name;
      }
      getIndex() {
        return this.index;
      }
      getImmediateSuccessorVertexes() {
        return this.immediateSuccessorVertexes;
      }
      getImmediatePredecessorVertexes() {
        return this.immediatePredecessorVertexes;
      }
      isStranded() {
        const immediateSuccessorVertexesLength = this.immediateSuccessorVertexes.length, immediatePredecessorVertexesLength = this.immediatePredecessorVertexes.length, stranded = immediateSuccessorVertexesLength === 0 && immediatePredecessorVertexesLength === 0;
        return stranded;
      }
      isVertexForwardsReachable(vertex) {
        const forwardsReachableVertexes = this.retrieveForwardsReachableVertexes(vertex), lastForwardsReachableVertex = last(forwardsReachableVertexes), vertexForwardsReachable = vertex === lastForwardsReachableVertex;
        return vertexForwardsReachable;
      }
      isEdgePresentBySourceVertex(sourceVertex) {
        const sourceVertexImmediatePredecessorVertex = this.isVertexImmediatePredecessorVertex(sourceVertex), edgePresent = sourceVertexImmediatePredecessorVertex;
        return edgePresent;
      }
      isEdgePresentByTargetVertex(targetVertex) {
        const targetVertexImmediateSuccessorVertex = this.isVertexImmediateSuccessorVertex(targetVertex), edgePresent = targetVertexImmediateSuccessorVertex;
        return edgePresent;
      }
      retrieveSuccessorVertexNames() {
        const forwardsReachableVertexes = this.retrieveForwardsReachableVertexes(), forwardsReachableVertexesTail = tail(forwardsReachableVertexes), successorVertexes = forwardsReachableVertexesTail, successorVertexNames = (0, _vertex.vertexNamesFromVertexes)(successorVertexes);
        return successorVertexNames;
      }
      retrievePredecessorVertexNames() {
        const backwardsReachableVertexes = this.retrieveBackwardsReachableVertexes(), backwardsReachableVertexesTail = tail(backwardsReachableVertexes), predecessorVertexes = backwardsReachableVertexesTail, predecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(predecessorVertexes);
        return predecessorVertexNames;
      }
      retrieveForwardsReachableVertexes(vertex = null) {
        const vertexA = vertex, visitedVertexes = this.forwardsDepthFirstSearch((vertex2) => {
          const vertexB = vertex2, terminate = vertexA === vertexB;
          if (terminate) {
            return true;
          }
        }), forwardsReachableVertexes = visitedVertexes;
        return forwardsReachableVertexes;
      }
      retrieveBackwardsReachableVertexes(vertex = null) {
        const vertexA = vertex, visitedVertexes = this.backwardsDepthFirstSearch((vertex2) => {
          const vertexB = vertex2, terminate = vertexA === vertexB;
          if (terminate) {
            return true;
          }
        }), backwardsReachableVertexes = visitedVertexes;
        return backwardsReachableVertexes;
      }
      isVertexImmediateSuccessorVertex(vertex) {
        const vertexImmediateSuccessorVertex = this.immediateSuccessorVertexes.includes(vertex);
        return vertexImmediateSuccessorVertex;
      }
      isVertexImmediatePredecessorVertex(vertex) {
        const vertexImmediatePredecessorVertex = this.immediatePredecessorVertexes.includes(vertex);
        return vertexImmediatePredecessorVertex;
      }
      getImmediateSuccessorVertexNames() {
        const immediateSuccessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(this.immediateSuccessorVertexes);
        return immediateSuccessorVertexNames;
      }
      getImmediatePredecessorVertexNames() {
        const immediatePredecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(this.immediatePredecessorVertexes);
        return immediatePredecessorVertexNames;
      }
      setName(name) {
        this.name = name;
      }
      setIndex(index) {
        this.index = index;
      }
      setImmediateSuccessorVertexes(immediateSuccessorVertexes) {
        this.immediateSuccessorVertexes = immediateSuccessorVertexes;
      }
      setImmediatePredecessorVertexes(immediatePredecessorVertexes) {
        this.immediatePredecessorVertexes = immediatePredecessorVertexes;
      }
      decrementIndex() {
        this.index--;
      }
      addImmediateSuccessorVertex(immediateSuccessorVertex) {
        this.immediateSuccessorVertexes.push(immediateSuccessorVertex);
      }
      addImmediatePredecessorVertex(immediatePredecessorVertex) {
        this.immediatePredecessorVertexes.push(immediatePredecessorVertex);
      }
      removeImmediateSuccessorVertex(immediateSuccessorVertex) {
        const index = this.immediateSuccessorVertexes.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
        this.immediateSuccessorVertexes.splice(start, deleteCount);
      }
      removeImmediatePredecessorVertex(immediatePredecessorVertex) {
        const index = this.immediatePredecessorVertexes.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
        this.immediatePredecessorVertexes.splice(start, deleteCount);
      }
      forwardsDepthFirstSearch(callback) {
        const vertex = this, visitedVertexes = [];
        (0, _search.forwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
        return visitedVertexes;
      }
      backwardsDepthFirstSearch(callback) {
        const vertex = this, visitedVertexes = [];
        (0, _search.backwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
        return visitedVertexes;
      }
      someImmediateSuccessorVertex(callback) {
        return this.immediateSuccessorVertexes.some(callback);
      }
      someImmediatePredecessorVertex(callback) {
        return this.immediatePredecessorVertexes.some(callback);
      }
      forEachImmediateSuccessorVertex(callback) {
        this.immediateSuccessorVertexes.forEach(callback);
      }
      forEachImmediatePredecessorVertex(callback) {
        this.immediatePredecessorVertexes.forEach(callback);
      }
      static fromNameAndIndex(name, index) {
        const immediateSuccessorVertexes = [], immediatePredecessorVertexes = [], dependencyVertex = new Vertex(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes);
        return dependencyVertex;
      }
    };
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get indexesFromVertexes() {
        return indexesFromVertexes;
      },
      get orderIndexes() {
        return orderIndexes;
      }
    });
    function orderIndexes(indexes) {
      indexes.sort((firstIndex, secondIndex) => {
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
      const indexes = vertexes.map((vertex) => {
        const index = vertex.getIndex();
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var {first} = _necessary.arrayUtilities;
    var DirectedGraph = class {
      constructor(vertexMap) {
        this.vertexMap = vertexMap;
      }
      getVertexNap() {
        return this.vertexMap;
      }
      getVertexes() {
        const vertexMapValues = Object.values(this.vertexMap), vertexes = vertexMapValues;
        return vertexes;
      }
      getVertexNames() {
        const vertexMapKeys = Object.keys(this.vertexMap), vertexNames = vertexMapKeys;
        return vertexNames;
      }
      getOrderedVertexNames() {
        const vertexes = this.getVertexes();
        (0, _vertex1.orderVertexes)(vertexes);
        const orderedVertexes = vertexes, orderedVertexNames = (0, _vertex1.vertexNamesFromVertexes)(orderedVertexes);
        return orderedVertexNames;
      }
      getVertexByVertexName(vertexName) {
        const vertexPresent = this.isVertexPresentByVertexName(vertexName), vertex = vertexPresent ? this.vertexMap[vertexName] : null;
        return vertex;
      }
      getEdgesBySourceVertexName(sourceVertexName) {
        const edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
        if (sourceVertex !== null) {
          const immediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(), immediateSuccessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediateSuccessorVertexes), targetVertexNames = immediateSuccessorVertexNames;
          targetVertexNames.forEach((targetVertexName) => {
            const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            edges.push(edge);
          });
        }
        return edges;
      }
      getEdgesByTargetVertexName(targetVertexName) {
        const edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
        if (targetVertex !== null) {
          const immediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes(), immediatePredecessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediatePredecessorVertexes), sourceVertexNames = immediatePredecessorVertexNames;
          sourceVertexNames.forEach((sourceVertexName) => {
            const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            edges.push(edge);
          });
        }
        return edges;
      }
      getFirstCycle() {
        let firstCycle = null;
        const cyclesPresent = this.areCyclesPresent();
        if (cyclesPresent) {
          const cyclicEdges = this.getCyclicEdges(), firstCyclicEdge = first(cyclicEdges), sourceVertexName = firstCyclicEdge.getSourceVertexName(), targetVertexName = firstCyclicEdge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
          targetVertex.forwardsDepthFirstSearch((vertex, predecessorVertexes) => {
            let terminate = false;
            if (vertex === sourceVertex) {
              terminate = true;
              const cycle = _cycle.default.fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes);
              firstCycle = cycle;
            }
            return terminate;
          });
        }
        return firstCycle;
      }
      getCyclicEdges() {
        const cyclicEdges = [], vertexes = this.getVertexes();
        vertexes.forEach((vertex) => {
          const sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex();
          vertex.forEachImmediateSuccessorVertex((immediateSuccessorVertex) => {
            const targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
            if (targetVertexIndex < sourceVertexIndex) {
              const sourceVertexName = sourceVertex.getName(), targetVertexName = targetVertex.getName(), edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), cyclicEdge = edge;
              cyclicEdges.push(cyclicEdge);
            }
          });
          sourceVertex;
        });
        return cyclicEdges;
      }
      areCyclesPresent() {
        const vertexes = this.getVertexes(), cyclesPresent = vertexes.some((vertex) => {
          const sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex(), cyclicEdgePresent = vertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
            const targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
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
      isEdgePresent(edge) {
        let edgePresent = false;
        const sourceVertexName = edge.getSourceVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName);
        if (sourceVertex !== null) {
          const targetVertexName = edge.getTargetVertexName(), targetVertex = this.getVertexByVertexName(targetVertexName);
          if (targetVertex !== null) {
            edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
          }
        }
        return edgePresent;
      }
      isVertexPresentByVertexName(vertexName) {
        const vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName), vertexPresent = vertexNamesIncludesVertexName;
        return vertexPresent;
      }
      getImmediateSuccessorVertexNamesByVertexName(vertexName) {
        const vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
        return immediateSuccessorVertexNames;
      }
      getImmediatePredecessorVertexNamesByVertexName(vertexName) {
        const vertex = this.getVertexByVertexName(vertexName), immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();
        return immediatePredecessorVertexNames;
      }
      isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
        const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), edgePresent = this.isEdgePresent(edge);
        return edgePresent;
      }
      addVertexByVertexName(vertexName) {
        const vertexPresent = this.isVertexPresentByVertexName(vertexName);
        if (!vertexPresent) {
          const vertexNames = this.getVertexNames(), vertexNamesLength = vertexNames.length, name = vertexName, index = vertexNamesLength, vertex2 = _vertex.default.fromNameAndIndex(name, index);
          this.setVertexByVertexName(vertexName, vertex2);
        }
        const vertex = this.getVertexByVertexName(vertexName);
        return vertex;
      }
      removeVertexByVertexName(vertexName) {
        const vertexPresent = this.isVertexPresentByVertexName(vertexName);
        if (!vertexPresent) {
          return;
        }
        const vertex = this.getVertexByVertexName(vertexName);
        vertex.forEachImmediateSuccessorVertex((immediateSuccessVertex) => {
          const immediatePredecessorVertex = vertex;
          immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
        });
        vertex.forEachImmediatePredecessorVertex((immediatePredecessorVertex) => {
          const immediateSuccessVertex = vertex;
          immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
        });
        this.deleteVertexByVertexName(vertexName);
        const vertexes = this.getVertexes(), deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex();
        vertexes.forEach((vertex2) => {
          const vertexIndex = vertex2.getIndex();
          if (vertexIndex > deletedVertexIndex) {
            vertex2.decrementIndex();
          }
        });
        this.filterCyclicEdges();
      }
      addVertexesByVertexNames(vertexNames) {
        vertexNames.forEach((vertexName) => {
          this.addVertexByVertexName(vertexName);
        });
      }
      removeVertexesByVertexNames(vertexNames) {
        vertexNames.forEach((vertexName) => {
          this.removeVertexByVertexName(vertexName);
        });
      }
      addEdge(edge) {
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
        if (sourceVertexName === targetVertexName) {
          return;
        }
        const sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
        if (edgePresent) {
          return;
        }
        const sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex();
        if (sourceVertexIndex > targetVertexIndex) {
          this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
        }
        const immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex;
        immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
        immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
      }
      addEdges(edges) {
        edges.forEach((edge) => {
          this.addEdge(edge);
        });
      }
      removeEdge(edge, removeStrandedVertexes) {
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
        if (!edgePresent) {
          return;
        }
        sourceVertex.removeImmediateSuccessorVertex(targetVertex);
        targetVertex.removeImmediatePredecessorVertex(sourceVertex);
        if (removeStrandedVertexes) {
          const sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
          if (sourceVertexStranded) {
            this.removeVertexByVertexName(sourceVertexName);
          }
          if (targetVertexStranded) {
            this.removeVertexByVertexName(targetVertexName);
          }
        }
        this.filterCyclicEdges();
      }
      removeEdges(edges, removeStrandedVertexes = false) {
        edges.forEach((edge) => {
          this.removeEdge(edge, removeStrandedVertexes);
        });
      }
      removeAllEdgesAndVertexes() {
        this.vertexMap = {};
      }
      addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
        const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
        this.addEdge(edge);
      }
      reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
        const sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
        if (sourceVertexForwardsReachable) {
          return;
        }
        const forwardsReachableVertexes = targetVertex.retrieveForwardsReachableVertexes(), backwardsReachableVertexes = sourceVertex.retrieveBackwardsReachableVertexes();
        (0, _vertex1.orderVertexes)(backwardsReachableVertexes);
        (0, _vertex1.orderVertexes)(forwardsReachableVertexes);
        const reachableVertexes = [
          ...backwardsReachableVertexes,
          ...forwardsReachableVertexes
        ], reachableIndexes = (0, _index.indexesFromVertexes)(reachableVertexes);
        (0, _index.orderIndexes)(reachableIndexes);
        reachableVertexes.forEach((reachableVertex, index) => {
          const reachableIndex = reachableIndexes[index];
          index = reachableIndex;
          reachableVertex.setIndex(index);
        });
      }
      filterCyclicEdges() {
        const cyclicEdges = this.getCyclicEdges(), edges = cyclicEdges;
        edges.forEach((edge) => {
          const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
          if (!sourceVertexForwardsReachable) {
            this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
          }
        });
      }
      setVertexByVertexName(vertexName, vertex) {
        this.vertexMap[vertexName] = vertex;
      }
      deleteVertexByVertexName(vertexName) {
        delete this.vertexMap[vertexName];
      }
      static fromNothing() {
        const vertexMap = {}, directedGraph = new DirectedGraph(vertexMap);
        return directedGraph;
      }
    };
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get Cycle() {
        return _cycle.default;
      },
      get DirectedGraph() {
        return _directedGraph.default;
      },
      get Edge() {
        return _edge.default;
      },
      get Vertex() {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2xldmVscy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2hlYWRlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMva2V5Q29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvZW5jb2RpbmdzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2pzb25UeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3ZlcnNpb24uanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgInNyYy91dGlsaXRpZXMvc2VhcmNoLmpzIiwgInNyYy92ZXJ0ZXguanMiLCAic3JjL3V0aWxpdGllcy9pbmRleC5qcyIsICJzcmMvZGlyZWN0ZWRHcmFwaC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0U291cmNlVmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIG1hdGNoKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHx8ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHNvdXJjZVZlcnRleE5hbWUpICYmICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpKTtcbiAgICBcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHRhcmdldFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gbmV3IEVkZ2Uoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcykgeyAgLy8vXG4gIHZlcnRleGVzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModmVydGV4ZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGV4TmFtZXMpIHtcbiAgICB0aGlzLnZlcnRleE5hbWVzID0gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLnByZWRlY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModmVydGV4ZXMpLFxuICAgICAgICAgIGN5Y2xlID0gbmV3IEN5Y2xlKHZlcnRleE5hbWVzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVFJBQ0VfTEVWRUwgPSBcInRyYWNlXCI7XG5leHBvcnQgY29uc3QgREVCVUdfTEVWRUwgPSBcImRlYnVnXCI7XG5leHBvcnQgY29uc3QgSU5GT19MRVZFTCA9IFwiaW5mb1wiO1xuZXhwb3J0IGNvbnN0IFdBUk5JTkdfTEVWRUwgPSBcIndhcm5pbmdcIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9MRVZFTCA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBGQVRBTF9MRVZFTCA9IFwiZmF0YWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUUkFDRV9MRVZFTCxcbiAgREVCVUdfTEVWRUwsXG4gIElORk9fTEVWRUwsXG4gIFdBUk5JTkdfTEVWRUwsXG4gIEVSUk9SX0xFVkVMLFxuICBGQVRBTF9MRVZFTFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5leHBvcnQgY29uc3QgUEFUQ0hfTUVUSE9EID0gXCJQQVRDSFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NRVRIT0QgPSBcIkRFTEVURVwiO1xuZXhwb3J0IGNvbnN0IE9QVElPTlNfTUVUSE9EID0gXCJPUFRJT05TXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgR0VUX01FVEhPRCxcbiAgUE9TVF9NRVRIT0QsXG4gIFBBVENIX01FVEhPRCxcbiAgREVMRVRFX01FVEhPRCxcbiAgT1BUSU9OU19NRVRIT0Rcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQUkFHTUFfSEVBREVSID0gXCJwcmFnbWFcIjtcbmV4cG9ydCBjb25zdCBBQ0NFUFRfSEVBREVSID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9IRUFERVIgPSBcImxvY2F0aW9uXCI7XG5leHBvcnQgY29uc3QgVVNFUl9BR0VOVF9IRUFERVIgPSBcInVzZXItYWdlbnRcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEVfSEVBREVSID0gXCJjb250ZW50LXR5cGVcIjtcbmV4cG9ydCBjb25zdCBBVVRIT1JJWkFUSU9OX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IGNvbnN0IENBQ0hFX0NPTlRST0xfSEVBREVSID0gXCJjYWNoZS1jb250cm9sXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9MRU5HVEhfSEVBREVSID0gXCJjb250ZW50LWxlbmd0aFwiO1xuZXhwb3J0IGNvbnN0IFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUiA9IFwidHJhbnNmZXItZW5jb2RpbmdcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9IFwiY29udGVudC1kaXNwb3NpdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1tZXRob2RzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LWhlYWRlcnNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJBR01BX0hFQURFUixcbiAgQUNDRVBUX0hFQURFUixcbiAgTE9DQVRJT05fSEVBREVSLFxuICBVU0VSX0FHRU5UX0hFQURFUixcbiAgQ09OVEVOVF9UWVBFX0hFQURFUixcbiAgQVVUSE9SSVpBVElPTl9IRUFERVIsXG4gIENBQ0hFX0NPTlRST0xfSEVBREVSLFxuICBDT05URU5UX0xFTkdUSF9IRUFERVIsXG4gIFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSXG59OyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRBQl9LRVlfQ09ERSA9IDk7XG5leHBvcnQgY29uc3QgU0hJRlRfS0VZX0NPREUgPSAxNjtcbmV4cG9ydCBjb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuZXhwb3J0IGNvbnN0IERFTEVURV9LRVlfQ09ERSA9IDQ2O1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9LRVlfQ09ERSA9IDg7XG5leHBvcnQgY29uc3QgQVJST1dfVVBfS0VZX0NPREUgPSAzODtcbmV4cG9ydCBjb25zdCBBUlJPV19ET1dOX0tFWV9DT0RFID0gNDA7XG5leHBvcnQgY29uc3QgQVJST1dfTEVGVF9LRVlfQ09ERSA9IDM3O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1JJR0hUX0tFWV9DT0RFID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEFCX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERSxcbiAgRU5URVJfS0VZX0NPREUsXG4gIEVTQ0FQRV9LRVlfQ09ERSxcbiAgREVMRVRFX0tFWV9DT0RFLFxuICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gIEFSUk9XX1VQX0tFWV9DT0RFLFxuICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICBBUlJPV19SSUdIVF9LRVlfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBVVEZfOF9FTkNPRElORyA9IFwidXRmLThcIjtcbmV4cG9ydCBjb25zdCBCQVNFNjRfRU5DT0RJTkcgPSBcImJhc2U2NFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVURjhfRU5DT0RJTkcsXG4gIFVURl84X0VOQ09ESU5HLFxuICBCQVNFNjRfRU5DT0RJTkdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBUlJBWV9KU09OX1RZUEUgPSBcImFycmF5XCI7XG5leHBvcnQgY29uc3QgT0JKRUNUX0pTT05fVFlQRSA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgU1RSSU5HX0pTT05fVFlQRSA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgTlVNQkVSX0pTT05fVFlQRSA9IFwibnVtYmVyXCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTl9KU09OX1RZUEUgPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBQUklNSVRJVkVfSlNPTl9UWVBFID0gXCJwcmltaXRpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBUlJBWV9KU09OX1RZUEUsXG4gIE9CSkVDVF9KU09OX1RZUEUsXG4gIFNUUklOR19KU09OX1RZUEUsXG4gIE5VTUJFUl9KU09OX1RZUEUsXG4gIEJPT0xFQU5fSlNPTl9UWVBFLFxuICBQUklNSVRJVkVfSlNPTl9UWVBFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVBfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQVwiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQVJfQ0hBUkFDVEVSID0gXCJ8XCI7XG5leHBvcnQgY29uc3QgSEFUX0NIQVJBQ1RFUiA9IFwiXlwiO1xuZXhwb3J0IGNvbnN0IFBMVVNfQ0hBUkFDVEVSID0gXCIrXCI7XG5leHBvcnQgY29uc3QgREFTSF9DSEFSQUNURVIgPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBET1dOX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0JcIjtcbmV4cG9ydCBjb25zdCBMRUZUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0RcIjtcbmV4cG9ydCBjb25zdCBSSUdIVF9DSEFSQUNURVIgPSBcIlx1MDAxYltDXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IERPTExBUl9DSEFSQUNURVIgPSBcIiRcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0NfQ0hBUkFDVEVSID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9DSEFSQUNURVIgPSBcIlxcdTAwMWJcIjtcbmV4cG9ydCBjb25zdCBBU1RFUklTS19DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRF9DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBCQUNLVElDS19ERUxJTUlURVIgPSBcImBcIjtcbmV4cG9ydCBjb25zdCBORVdfTElORV9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBCQUNLU0xBU0hfQ0hBUkFDVEVSID0gXCJcXFxcXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiP1wiO1xuZXhwb3J0IGNvbnN0IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSID0gXCIvXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKFwiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIilcIjtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcbmV4cG9ydCBjb25zdCBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiIVwiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIntcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJ9XCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIltcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiXVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVQX0NIQVJBQ1RFUixcbiAgRVRYX0NIQVJBQ1RFUixcbiAgQkFSX0NIQVJBQ1RFUixcbiAgSEFUX0NIQVJBQ1RFUixcbiAgUExVU19DSEFSQUNURVIsXG4gIERBU0hfQ0hBUkFDVEVSLFxuICBET1dOX0NIQVJBQ1RFUixcbiAgTEVGVF9DSEFSQUNURVIsXG4gIFJJR0hUX0NIQVJBQ1RFUixcbiAgU1BBQ0VfQ0hBUkFDVEVSLFxuICBDT01NQV9DSEFSQUNURVIsXG4gIENPTE9OX0NIQVJBQ1RFUixcbiAgUEVSSU9EX0NIQVJBQ1RFUixcbiAgRE9MTEFSX0NIQVJBQ1RFUixcbiAgQ1RSTF9DX0NIQVJBQ1RFUixcbiAgRVNDQVBFX0NIQVJBQ1RFUixcbiAgQVNURVJJU0tfQ0hBUkFDVEVSLFxuICBXSUxEQ0FSRF9DSEFSQUNURVIsXG4gIEJBQ0tUSUNLX0RFTElNSVRFUixcbiAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICBBTVBFUlNBTkRfQ0hBUkFDVEVSLFxuICBCQUNLU0xBU0hfQ0hBUkFDVEVSLFxuICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUixcbiAgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIsXG4gIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVJcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX0NPREUgPSAwO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfQ09ERSA9IDIwMDtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX0NPREUgPSAzMDI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUgPSAyMDE7XG5leHBvcnQgY29uc3QgQ09ORkxJQ1RfNDA5X1NUQVRVU19DT0RFID0gNDA5O1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUgPSAzMDM7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSA9IDQwMztcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFID0gNDA0O1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFID0gMjA0O1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSA9IDUwMjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUgPSA0MDA7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSA9IDQwMTtcbmV4cG9ydCBjb25zdCBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX0NPREUgPSA0MDY7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfQ09ERSA9IDQwNTtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSA9IDUwMztcbmV4cG9ydCBjb25zdCBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX0NPREUgPSA0MjI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfQ09ERSxcbiAgT0tfMjAwX1NUQVRVU19DT0RFLFxuICBGT1VORF8zMDJfU1RBVFVTX0NPREUsXG4gIENSRUFURURfMjAxX1NUQVRVU19DT0RFLFxuICBDT05GTElDVF80MDlfU1RBVFVTX0NPREUsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSxcbiAgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX0NPREUsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfTUVTU0FHRSA9IFwiXCI7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19NRVNTQUdFID0gXCJPS1wiO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSA9IFwiRm91bmRcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSA9IFwiQ3JlYXRlZFwiO1xuZXhwb3J0IGNvbnN0IENPTkZMSUNUXzQwOV9TVEFUVVNfTUVTU0FHRSA9IFwiQ29uZmxpY3RcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgQWNjZXB0YWJsZVwiO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UgPSBcIlJlcXVlc3QgdGltZW91dFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSA9IFwiVG9vIG1hbnkgcmVxdWVzdHNcIjtcbmV4cG9ydCBjb25zdCBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19NRVNTQUdFID0gXCJNZXRob2Qgbm90IGFsbG93ZWRcIjtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiO1xuZXhwb3J0IGNvbnN0IFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfTUVTU0FHRSA9IFwiVW5wcm9jZXNzYWJsZSBFbnRpdHlcIjtcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFID0gXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX01FU1NBR0UsXG4gIE9LXzIwMF9TVEFUVVNfTUVTU0FHRSxcbiAgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSxcbiAgQ09ORkxJQ1RfNDA5X1NUQVRVU19NRVNTQUdFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19NRVNTQUdFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVSTyA9IFwiMFwiO1xuZXhwb3J0IGNvbnN0IERBVEEgPSBcImRhdGFcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFQgPSBcImRlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVCA9IFwiRU5WSVJPTk1FTlRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfSlNPTiA9IFwicGFja2FnZS5qc29uXCI7XG5leHBvcnQgY29uc3QgT0JKRUNUX09CSkVDVCA9IFwiW29iamVjdCBPYmplY3RdXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5QSwgYXJyYXlCKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5QSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5QiA9IEFycmF5LmlzQXJyYXkoZWxlbWVudE9yQXJyYXkyKSA/XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG5cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIHN0YXJ0KS5yZXZlcnNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5QSwgYXJyYXlCKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUIubGVuZ3RoOyAgLy8vXG5cbiAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXSxcbiAgICAgICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudCA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KS5wb3AoKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZGVsZXRlZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCkucG9wKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4QiA9IDAsXG4gICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXhCIDwgYXJyYXlMZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4Ql07XG5cbiAgICBmb3IgKGxldCBpbmRleEEgPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4QSA+IGluZGV4QjsgaW5kZXhBLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXhBLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleEIrKztcblxuICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdLFxuICAgICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHppcChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJyYXlBLCAoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgIGVsZW1lbnQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIsIGluZGV4KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgbWF0Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwgKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIsIGluZGV4KTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IGNvbXBhcmVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBjbG9uZShhcnJheUIpOyAvLy9cblxuICAgIGNvbXBhcmVzID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwoYXJyYXlBLChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3JyZWxhdGVzO1xuXG4gIGFycmF5QiA9IGNsb25lKGFycmF5Qik7IC8vL1xuXG4gIGNvcnJlbGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuZXZlcnkuY2FsbChhcnJheUEsKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gY2xvbmUoYXJyYXlBKTsgLy8vXG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheUIsIGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMuY2FsbChhcnJheUIsIGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5QSk7ICAvLy9cbiAgYXJyYXlCID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlCKTsgIC8vL1xuXG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Qkxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlBLCBlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlCLCBlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUEpOyAgLy8vXG4gIGFycmF5QiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5Qik7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZEFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICBjb21iaW5lZEFycmF5TGVuZ3RoID0gY29tYmluZWRBcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbWJpbmVkQXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGNvbWJpbmVkRWxlbWVudCA9IGNvbWJpbmVkQXJyYXlbaW5kZXhdO1xuXG4gICAgZm9yIChsZXQgYXJyYXlJbmRleCA9IDA7IGFycmF5SW5kZXggPCBhcnJheUxlbmd0aDsgYXJyYXlJbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbYXJyYXlJbmRleF0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBjb21iaW5lZEVsZW1lbnQpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5LCBjb21iaW5lZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleEEgPSAwOyBpbmRleEEgPCBhcnJheUFMZW5ndGg7IGluZGV4QSsrKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5QVtpbmRleEFdLFxuICAgICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleEIgPSAwOyBpbmRleEIgPCBhcnJheUJMZW5ndGg7IGluZGV4QisrKSB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleEJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5LCBlbGVtZW50QSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgIGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXhBID0gMDsgaW5kZXhBIDwgYXJyYXlBTGVuZ3RoOyBpbmRleEErKykge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhBXSxcbiAgICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXhCID0gMDsgaW5kZXhCIDwgYXJyYXlCTGVuZ3RoOyBpbmRleEIrKykge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhCXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXksIGVsZW1lbnRBKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXhCID0gMDsgaW5kZXhCIDwgYXJyYXlCTGVuZ3RoOyBpbmRleEIrKykge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhCXSxcbiAgICAgICAgICBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXhBID0gMDsgaW5kZXhBIDwgYXJyYXlBTGVuZ3RoOyBpbmRleEErKykge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXksIGVsZW1lbnRCKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBtZXJnZSxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIHppcCxcbiAgbWF0Y2gsXG4gIGNvbXBhcmUsXG4gIGNvcnJlbGF0ZSxcbiAgcmVzb2x2ZSxcbiAgb25lLFxuICBlYWNoLFxuICBmaW5kLFxuICBjbG9uZSxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIHJldmVyc2UsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICB1bmlvbixcbiAgaW50ZXJzZWN0aW9uLFxuICBsZWZ0RGlmZmVyZW5jZSxcbiAgcmlnaHREaWZmZXJlbmNlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaCxcbiAgZm9yd2FyZHNGaW5kSW5kZXgsXG4gIGJhY2t3YXJkc0ZpbmRJbmRleFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLywgRU1QVFlfU1RSSU5HKS5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgLy8vXG5cbiAgY29uc3QgcGF0aE5hbWUgPSAoL1xcLy8udGVzdChwYXRoKSA9PT0gZmFsc2UpO1xuXG4gIHJldHVybiBwYXRoTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3ROYW1lKHBhdGgpIHtcbiAgY29uc3QgcGF0aE5hbWUgPSBpc1BhdGhOYW1lKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoVG9wbW9zdE5hbWUgPSAocGF0aE5hbWUgJiYgcGF0aEFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSAhL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoQWJzb2x1dGVQYXRoID0gL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgodG9wbW9zdE5hbWUsIGFic29sdXRlUGF0aCkge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGggPSByZWdFeHAudGVzdChhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBjb21iaW5lZFBhdGggPSBudWxsO1xuXG4gIGNvbnN0IHBhdGhOYW1lcyA9IHBhdGguc3BsaXQoL1xcLy8pLFxuICAgICAgICByZWxhdGl2ZVBhdGhOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgvXFwvLyk7XG5cbiAgbGV0IGxhc3RQYXRoTmFtZSxcbiAgICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi5cIikge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuLlwiKSAmJiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgICBwYXRoTmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gICAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tYmluZWRQYXRoTmFtZXMgPSBbXS5jb25jYXQocGF0aE5hbWVzKS5jb25jYXQocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gICAgY29tYmluZWRQYXRoID0gY29tYmluZWRQYXRoTmFtZXMuam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgY29uY2F0ZW5hdGVkUGF0aDtcblxuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIGNvbnN0IHJlbWFpbmluZ0FBcmd1bWVudHNMZW5ndGggPSByZW1haW5pbmdBcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChyZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZWRQYXRoLCAgLy8vXG4gICAgICAgICAgcmVsYXRpdmVQYXRoID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG5cbiAgICBjb25jYXRlbmF0ZWRQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgT0JKRUNUX09CSkVDVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFSUkFZX0pTT05fVFlQRSxcbiAgICAgICAgIE9CSkVDVF9KU09OX1RZUEUsXG4gICAgICAgICBTVFJJTkdfSlNPTl9UWVBFLFxuICAgICAgICAgTlVNQkVSX0pTT05fVFlQRSxcbiAgICAgICAgIEJPT0xFQU5fSlNPTl9UWVBFLFxuICAgICAgICAgUFJJTUlUSVZFX0pTT05fVFlQRSB9IGZyb20gXCIuLi9qc29uVHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZihqc29uKSB7XG4gIGxldCB0eXBlO1xuXG4gIGNvbnN0IGFycmF5ID0gaXNBcnJheShqc29uKSxcbiAgICAgICAgb2JqZWN0ID0gaXNPYmplY3QoanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlKGpzb24pO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGFycmF5KSB7XG4gICAgdHlwZSA9IEFSUkFZX0pTT05fVFlQRTtcbiAgfSBlbHNlIGlmIChvYmplY3QpIHtcbiAgICB0eXBlID0gT0JKRUNUX0pTT05fVFlQRTtcbiAgfSBlbHNlIGlmIChwcmltaXRpdmUpIHtcbiAgICB0eXBlID0gUFJJTUlUSVZFX0pTT05fVFlQRTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKGpzb24pIHtcbiAgY29uc3QgX251bGwgPSAoanNvbiA9PT0gbnVsbCk7XG5cbiAgcmV0dXJuIF9udWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShqc29uKSB7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShqc29uKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChqc29uKSB7XG4gIGNvbnN0IG9iamVjdCA9IChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoanNvbikgPT09IE9CSkVDVF9PQkpFQ1QpO1xuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhqc29uKSB7XG4gIGNvbnN0IHN0cmluZyA9ICh0eXBlb2YganNvbiA9PT0gU1RSSU5HX0pTT05fVFlQRSk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGpzb24pIHtcbiAgY29uc3QgbnVtYmVyID0gKHR5cGVvZiBqc29uID09PSBOVU1CRVJfSlNPTl9UWVBFKTtcblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKGpzb24pIHtcbiAgY29uc3QgYm9vbGVhbiA9ICh0eXBlb2YganNvbiA9PT0gQk9PTEVBTl9KU09OX1RZUEUpO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUoanNvbikge1xuICBjb25zdCBfbnVsbCA9IGlzTnVsbChqc29uKSxcbiAgICAgICAgc3RyaW5nID0gaXNTdHJpbmcoanNvbiksXG4gICAgICAgIG51bWJlciA9IGlzTnVtYmVyKGpzb24pLFxuICAgICAgICBib29sZWFuID0gaXNCb29sZWFuKGpzb24pLFxuICAgICAgICBwcmltaXRpdmUgPSAoX251bGwgfHwgc3RyaW5nIHx8IG51bWJlciB8fCBib29sZWFuKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVPZixcbiAgaXNOdWxsLFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzUHJpbWl0aXZlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT0xPTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgIT09IG51bGwpIHtcbiAgICBoZWFkZXJzW2V4aXN0aW5nTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lID09PSBudWxsKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhxdWVyeSksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W25hbWVdLFxuICAgICAgICAgICAgICAgIGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgYW1wZXJzYW5kT3JOb3RoaW5nID0gKGluZGV4ICE9PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNUEVSU0FORF9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5LFxuICB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuKHN0cmluZykge1xuICBsZXQgbGVuZ3RoID0gMDtcblxuICBmb3IgKGNvbnN0IF8gb2Ygc3RyaW5nKSB7XG4gICAgbGVuZ3RoKys7XG4gIH1cblxuICByZXR1cm4gbGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyY21wKHN0cmluZ0EsIHN0cmluZ0IpIHtcbiAgbGV0IGRpZmZlcmVuY2UgPSAwO1xuXG4gIGxldCBuYWl2ZUluZGV4QSA9IDAsXG4gICAgICBuYWl2ZUluZGV4QiA9IDA7XG5cbiAgY29uc3Qgc3RyaW5nQU5haXZlTGVuZ3RoID0gc3RyaW5nQS5sZW5ndGgsXG4gICAgICAgIHN0cmluZ0JOYWl2ZUxlbmd0aCA9IHN0cmluZ0IubGVuZ3RoO1xuXG4gIHdoaWxlICgobmFpdmVJbmRleEEgPCBzdHJpbmdBTmFpdmVMZW5ndGgpIHx8IChuYWl2ZUluZGV4QiA8IHN0cmluZ0JOYWl2ZUxlbmd0aCkpIHtcbiAgICBjb25zdCBjb2RlUG9pbnRBID0gKG5haXZlSW5kZXhBIDwgc3RyaW5nQU5haXZlTGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nQS5jb2RlUG9pbnRBdChuYWl2ZUluZGV4QSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICBjb2RlUG9pbnRCID0gKG5haXZlSW5kZXhCIDwgc3RyaW5nQk5haXZlTGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nQi5jb2RlUG9pbnRBdChuYWl2ZUluZGV4QikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSAoY29kZVBvaW50QSAtIGNvZGVQb2ludEIpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG5haXZlSW5kZXhBICs9IChjb2RlUG9pbnRBID4gMHhGRkZGKSA/XG4gICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAxO1xuXG4gICAgbmFpdmVJbmRleEIgKz0gKGNvZGVQb2ludEIgPiAweEZGRkYpID9cbiAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgIDE7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTE7XG5cbiAgY29uc3Qgc2VhcmNoU3RyaW5nTGVuZ3RoID0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcblxuICBpZiAoc2VhcmNoU3RyaW5nTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG91dGVyTmFpdmVJbmRleCA9IHN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZyk7XG5cbiAgICBpZiAob3V0ZXJOYWl2ZUluZGV4ID4gLTEpIHtcbiAgICAgIGluZGV4ID0gMDtcblxuICAgICAgbGV0IGlubmVyTmFpdmVJbmRleCA9IDA7XG5cbiAgICAgIHdoaWxlIChpbm5lck5haXZlSW5kZXggPCBvdXRlck5haXZlSW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbm5lck5haXZlSW5kZXgpO1xuXG4gICAgICAgIGlubmVyTmFpdmVJbmRleCArPSAoKGNoYXJDb2RlID49IDB4RDgwMCkgJiYgKGNoYXJDb2RlIDw9IDB4REJGRikpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBjb25zdCBzdHJpbmdOYWl2ZUxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIG5haXZlSW5kZXggPSAwLFxuICAgICAgbmFpdmVTdGFydCA9IHN0cmluZ05haXZlTGVuZ3RoLCAvLy9cbiAgICAgIG5haXZlRW5kID0gc3RyaW5nTmFpdmVMZW5ndGg7IC8vL1xuXG4gIHdoaWxlIChuYWl2ZUluZGV4IDwgc3RyaW5nTmFpdmVMZW5ndGgpIHtcbiAgICBpZiAoaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgICBuYWl2ZVN0YXJ0ID0gbmFpdmVJbmRleDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBuYWl2ZUVuZCA9IG5haXZlSW5kZXg7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChuYWl2ZUluZGV4KTtcblxuICAgIG5haXZlSW5kZXggKz0gKChjaGFyQ29kZSA+PSAweEQ4MDApICYmIChjaGFyQ29kZSA8PSAweERCRkYpKSA/XG4gICAgICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgICAgIDE7XG5cbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSBzdGFydCkge1xuICAgIG5haXZlU3RhcnQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gIH1cblxuICBpZiAoaW5kZXggPT09IGVuZCkge1xuICAgIG5haXZlRW5kID0gbmFpdmVJbmRleDsgIC8vL1xuICB9XG5cbiAgY29uc3Qgc3Vic3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhuYWl2ZVN0YXJ0LCBuYWl2ZUVuZCk7XG5cbiAgcmV0dXJuIHN1YnN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nVXBwZXJDYXNlKHN0cmluZykge1xuICBjb25zdCB1cHBlckNhc2VTdHJpbmcgPSBzdHJpbmcudG9VcHBlckNhc2UoKSxcbiAgICAgICAgc3RyaW5nVXBwZXJDYXNlID0gKHN0cmluZyA9PT0gdXBwZXJDYXNlU3RyaW5nKTtcblxuICByZXR1cm4gc3RyaW5nVXBwZXJDYXNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmcsXG4gIGlzU3RyaW5nVXBwZXJDYXNlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pIHtcbiAgbGV0IHsgdmVyc2lvbiB9ID0ganNvbjtcblxuICB3aGlsZSAodmVyc2lvbiAhPT0gbGF0ZXN0VmVyc2lvbikge1xuICAgIGNvbnN0IG1pZ3JhdGVGdW5jdGlvbiA9IG1pZ3JhdGlvbk1hcFt2ZXJzaW9uXTtcblxuICAgIGpzb24gPSBtaWdyYXRlRnVuY3Rpb24oanNvbik7XG5cbiAgICAoeyB2ZXJzaW9uIH0gPSBqc29uKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGZ1bmN0aW9uIG5leHQoaW5kZXgpIHtcclxuICAgIG9wZXJhdGlvbigoKSA9PiB7XHJcbiAgICAgIG5leHQoaW5kZXggKyAxKTtcclxuICAgIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gMDtcclxuXHJcbiAgbmV4dChpbmRleCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgZnVuY3Rpb24gbmV4dChpbmRleCkge1xyXG4gICAgaWYgKGluZGV4ID09PSBsZW5ndGgpIHtcclxuICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgb3BlcmF0aW9uKGVsZW1lbnQsICgpID0+IHtcclxuICAgICAgbmV4dChpbmRleCArIDEpO1xyXG4gICAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kZXggPSAwO1xyXG5cclxuICBuZXh0KGluZGV4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KGluZGV4KSB7XHJcbiAgICBpZiAoaW5kZXggPT09IGxlbmd0aCkge1xyXG4gICAgICBkb25lKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XHJcblxyXG4gICAgb3BlcmF0aW9uKCgpID0+IHtcclxuICAgICAgbmV4dChpbmRleCArIDEpO1xyXG4gICAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kZXggPSAwO1xyXG5cclxuICBuZXh0KGluZGV4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoO1xyXG5cclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShvcGVyYXRpb24sIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgIG9wZXJhdGlvbihlbGVtZW50LCAoKSA9PiB7XHJcbiAgICAgIG5leHQoaW5kZXggKyAxKTtcclxuICAgIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gMDtcclxuXHJcbiAgbmV4dChpbmRleCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgZnVuY3Rpb24gbmV4dChpbmRleCkge1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICBkb25lKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICBvcGVyYXRpb24oZWxlbWVudCwgKCkgPT4ge1xyXG4gICAgICBuZXh0KGluZGV4IC0gMSk7XHJcbiAgICB9LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmRleCA9IGxlbmd0aCAtIDE7XHJcblxyXG4gIG5leHQoaW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cblxuICAgIHJlc3BvbnNlVHlwZSA9IG51bGw7XG5cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IHJlc3BvbnNlVHlwZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBTVFJJTkcpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IGhlYWRlcnM7IC8vL1xuXG4gICAgICBoZWFkZXJzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudCA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cblxuICAgIHJlc3BvbnNlVHlwZSA9IG51bGw7XG5cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IHJlc3BvbnNlVHlwZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBTVFJJTkcpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IGhlYWRlcnM7IC8vL1xuXG4gICAgICBoZWFkZXJzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5hc3NpZ24oeG1sSHR0cFJlcXVlc3QsIHtcbiAgICAgIHJlc3BvbnNlVHlwZVxuICAgIH0pO1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxldmVscyB9IGZyb20gXCIuL2xldmVsc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXRob2RzIH0gZnJvbSBcIi4vbWV0aG9kc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoZWFkZXJzIH0gZnJvbSBcIi4vaGVhZGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlDb2RlcyB9IGZyb20gXCIuL2tleUNvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVuY29kaW5ncyB9IGZyb20gXCIuL2VuY29kaW5nc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc29uVHlwZXMgfSBmcm9tIFwiLi9qc29uVHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhcmFjdGVycyB9IGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzQ29kZXMgfSBmcm9tIFwiLi9zdGF0dXNDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250ZW50VHlwZXMgfSBmcm9tIFwiLi9jb250ZW50VHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzTWVzc2FnZXMgfSBmcm9tIFwiLi9zdGF0dXNNZXNzYWdlc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc29uVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvblV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBbXSkge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnByZWRlY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHByZWRlY2Vzc29yVmVydGV4XG4gICAgICBdO1xuXG4gICAgICB0ZXJtaW5hdGUgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleEluZGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPiBwcmVkZWNlc3NvclZlcnRleEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdGVybWluYXRlID0gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgc3VjY2Vzc29yVmVydGV4ZXMgPSBbXSkge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnN1Y2Nlc3NvclZlcnRleGVzLFxuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHZlcnRleEluZGV4IDwgc3VjY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2gsIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvc2VhcmNoXCI7XG5cbmNvbnN0IHsgbGFzdCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApICYmIChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBpc1ZlcnRleEZvcndhcmRzUmVhY2hhYmxlKHZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB0aGlzLnJldHJpZXZlRm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyh2ZXJ0ZXgpLFxuICAgICAgICAgIGxhc3RGb3J3YXJkc1JlYWNoYWJsZVZlcnRleCA9IGxhc3QoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyksXG4gICAgICAgICAgdmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSAodmVydGV4ID09PSBsYXN0Rm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEZvcndhcmRzUmVhY2hhYmxlO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIHJldHJpZXZlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCksXG4gICAgICAgICAgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwgPSB0YWlsKGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB0aGlzLnJldHJpZXZlQmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwgPSB0YWlsKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXNUYWlsLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgcmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKHZlcnRleCA9IG51bGwpIHtcbiAgICBjb25zdCB2ZXJ0ZXhBID0gdmVydGV4LCAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcztcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHZpc2l0ZWRWZXJ0ZXhlczsgIC8vL1xuXG4gICAgcmV0dXJuIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzO1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICBhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIHJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuaW5kZXhPZihpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMsICAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSBbXTtcblxuICAgIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lWZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeVZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJJbmRleGVzKGluZGV4ZXMpIHsgIC8vL1xuICBpbmRleGVzLnNvcnQoKGZpcnN0SW5kZXgsIHNlY29uZEluZGV4KSA9PiB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0SW5kZXggPCBzZWNvbmRJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0SW5kZXggPiBzZWNvbmRJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhlc0Zyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCBpbmRleGVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9KTtcblxuICByZXR1cm4gaW5kZXhlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBDeWNsZSBmcm9tIFwiLi9jeWNsZVwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgb3JkZXJJbmRleGVzLCBpbmRleGVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2luZGV4XCI7XG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXApIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleE5hcCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhNYXA7XG4gIH1cblxuICBnZXRWZXJ0ZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhlcyA9IHZlcnRleE1hcFZhbHVlczsgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4ZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBLZXlzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TWFwS2V5czsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgLy8vXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMob3JkZXJlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiBvcmRlcmVkVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0ZXhQcmVzZW50ID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZXMgPSBbXSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gc291cmNlVmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgdGFyZ2V0VmVydGV4TmFtZXMuZm9yRWFjaCgodGFyZ2V0VmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgc291cmNlVmVydGV4TmFtZXMuZm9yRWFjaCgoc291cmNlVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuXG4gICAgY29uc3QgY3ljbGVzUHJlc2VudCA9IHRoaXMuYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gdGhpcy5nZXRDeWNsaWNFZGdlcygpLFxuICAgICAgICAgICAgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QoY3ljbGljRWRnZXMpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGZpcnN0Q3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGZpcnN0Q3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpOyAgLy8vXG5cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gY3ljbGU7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHRhcmdldFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgICBjeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc291cmNlVmVydGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGljRWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSB2ZXJ0ZXhlcy5zb21lKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgIGN5Y2xpY0VkZ2VQcmVzZW50ID0gdmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VmVydGV4SW5kZXggPCBzb3VyY2VWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGN5Y2xpY0VkZ2VQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgaWYgKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KSB7XG4gICAgICAgIHZlcnRleC5kZWNyZW1lbnRJbmRleCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgYWRkVmVydGV4ZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpIHtcbiAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKCFlZGdlUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlID0gdGFyZ2V0VmVydGV4LmlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUoc291cmNlVmVydGV4KTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCksXG4gICAgICAgICAgYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlclZlcnRleGVzKGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgY29uc3QgcmVhY2hhYmxlVmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5iYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyxcbiAgICAgICAgICAgIC4uLmZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlYWNoYWJsZUluZGV4ZXMgPSBpbmRleGVzRnJvbVZlcnRleGVzKHJlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVySW5kZXhlcyhyZWFjaGFibGVJbmRleGVzKTtcblxuICAgIHJlYWNoYWJsZVZlcnRleGVzLmZvckVhY2goKHJlYWNoYWJsZVZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJlYWNoYWJsZUluZGV4ID0gcmVhY2hhYmxlSW5kZXhlc1tpbmRleF07XG5cbiAgICAgIGluZGV4ID0gcmVhY2hhYmxlSW5kZXg7IC8vL1xuXG4gICAgICByZWFjaGFibGVWZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgZWRnZXMgPSBjeWNsaWNFZGdlczsgIC8vL1xuXG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlID0gdGFyZ2V0VmVydGV4LmlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUoc291cmNlVmVydGV4KTtcblxuICAgICAgaWYgKCFzb3VyY2VWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSkge1xuICAgICAgICB0aGlzLnJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaCh2ZXJ0ZXhNYXApO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkZ2UgfSBmcm9tIFwiLi9lZGdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN5Y2xlIH0gZnJvbSBcIi4vY3ljbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVydGV4IH0gZnJvbSBcIi4vdmVydGV4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9kaXJlY3RlZEdyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVkZ2UsIERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IGVkZ2UxID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL2Vhc3ktd2l0aC1zdHlsZVwiLCBcIi4vZWFzeS1sYXlvdXRcIiksXG4gICAgICBlZGdlMiA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi93aXRoLXN0eWxlXCIsIFwiLi9lYXN5LXdpdGgtc3R5bGVcIiksXG4gICAgICBlZGdlMyA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi9lYXN5LWxheW91dFwiLCBcIi4vb2NjYW0tbGV4ZXJzXCIpLFxuICAgICAgZWRnZTQgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKSxcbiAgICAgIGVkZ2U1ID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL29jY2FtLWxleGVyc1wiLCBcIi4vd2l0aC1zdHlsZVwiKTtcblxuY29uc3QgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UxKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlMik7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTMpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2U0KTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlNSk7XG5cbmRpcmVjdGVkR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKFwiLi9vY2NhbS1sZXhlcnNcIik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUE7Ozs7O21DQUVBLFdBQUE7OztlQUFxQjs7O0FBQU4scUJBQU07TUFDbkIsWUFBWSxrQkFBa0Isa0JBQWtCO0FBQzlDLGFBQUssbUJBQW1CO0FBQ3hCLGFBQUssbUJBQW1COztNQUcxQixzQkFBc0I7QUFDcEIsZUFBTyxLQUFLOztNQUdkLHNCQUFzQjtBQUNwQixlQUFPLEtBQUs7O01BR2QsTUFBTSxNQUFNO0FBQ1YsY0FBTSxtQkFBbUIsS0FBSyx1QkFDeEIsbUJBQW1CLEtBQUssdUJBQ3hCLFVBQVksS0FBSyxxQkFBcUIsb0JBQXNCLEtBQUsscUJBQXFCO0FBRTVGLGVBQU87O01BR1QsZ0JBQWdCLFlBQVk7QUFDMUIsY0FBTSxVQUFZLEtBQUsscUJBQXFCLGNBQWdCLEtBQUsscUJBQXFCO0FBRXRGLGVBQU87O01BR1Qsc0JBQXNCLGtCQUFrQjtBQUN0QyxjQUFNLFVBQVcsS0FBSyxxQkFBcUI7QUFFM0MsZUFBTzs7TUFHVCxzQkFBc0Isa0JBQWtCO0FBQ3RDLGNBQU0sVUFBVyxLQUFLLHFCQUFxQjtBQUUzQyxlQUFPOztNQUdULGlCQUFpQixrQkFBa0Isa0JBQWtCO0FBQ25ELGNBQU0sVUFBWSxLQUFLLHFCQUFxQixvQkFBc0IsS0FBSyxxQkFBcUI7QUFFNUYsZUFBTzs7YUFHRixnQ0FBZ0MsY0FBYyxjQUFjO0FBQ2pFLGNBQU0sbUJBQW1CLGFBQWEsV0FDaEMsbUJBQW1CLGFBQWEsV0FDaEMsT0FBTyxJQUFJLEtBQUssa0JBQWtCO0FBRXhDLGVBQU87O2FBR0Ysd0NBQXdDLGtCQUFrQixrQkFBa0I7QUFDakYsY0FBTSxPQUFPLElBQUksS0FBSyxrQkFBa0I7QUFFeEMsZUFBTzs7Ozs7O0FDM0RYOzs7Ozs7Ozs7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
