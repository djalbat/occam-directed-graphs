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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2xldmVscy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2hlYWRlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMva2V5Q29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvZW5jb2RpbmdzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2pzb25UeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3ZlcnNpb24uanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgInNyYy91dGlsaXRpZXMvc2VhcmNoLmpzIiwgInNyYy92ZXJ0ZXguanMiLCAic3JjL3V0aWxpdGllcy9pbmRleC5qcyIsICJzcmMvZGlyZWN0ZWRHcmFwaC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0U291cmNlVmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIG1hdGNoKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHx8ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHNvdXJjZVZlcnRleE5hbWUpICYmICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpKTtcbiAgICBcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclZlcnRleGVzKHZlcnRleGVzKSB7ICAvLy9cbiAgdmVydGV4ZXMuc29ydCgoZmlyc3RWZXJ0ZXgsIHNlY29uZFZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBmaXJzdFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gc2Vjb25kVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RWZXJ0ZXhJbmRleCA8IHNlY29uZFZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RWZXJ0ZXhJbmRleCA+IHNlY29uZFZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleGVzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4TmFtZSA9IHZlcnRleC5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhOYW1lcykge1xuICAgIHRoaXMudmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHZlcnRleGVzID0gW1xuICAgICAgICAgICAgLi4ucHJlZGVjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcyksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGV4TmFtZXMpO1xuXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUUkFDRV9MRVZFTCA9IFwidHJhY2VcIjtcbmV4cG9ydCBjb25zdCBERUJVR19MRVZFTCA9IFwiZGVidWdcIjtcbmV4cG9ydCBjb25zdCBJTkZPX0xFVkVMID0gXCJpbmZvXCI7XG5leHBvcnQgY29uc3QgV0FSTklOR19MRVZFTCA9IFwid2FybmluZ1wiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0xFVkVMID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IEZBVEFMX0xFVkVMID0gXCJmYXRhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRSQUNFX0xFVkVMLFxuICBERUJVR19MRVZFTCxcbiAgSU5GT19MRVZFTCxcbiAgV0FSTklOR19MRVZFTCxcbiAgRVJST1JfTEVWRUwsXG4gIEZBVEFMX0xFVkVMXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX01FVEhPRCA9IFwiR0VUXCI7XG5leHBvcnQgY29uc3QgUE9TVF9NRVRIT0QgPSBcIlBPU1RcIjtcbmV4cG9ydCBjb25zdCBQQVRDSF9NRVRIT0QgPSBcIlBBVENIXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX01FVEhPRCA9IFwiREVMRVRFXCI7XG5leHBvcnQgY29uc3QgT1BUSU9OU19NRVRIT0QgPSBcIk9QVElPTlNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBHRVRfTUVUSE9ELFxuICBQT1NUX01FVEhPRCxcbiAgUEFUQ0hfTUVUSE9ELFxuICBERUxFVEVfTUVUSE9ELFxuICBPUFRJT05TX01FVEhPRFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFBSQUdNQV9IRUFERVIgPSBcInByYWdtYVwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVF9IRUFERVIgPSBcImFjY2VwdFwiO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0hFQURFUiA9IFwibG9jYXRpb25cIjtcbmV4cG9ydCBjb25zdCBVU0VSX0FHRU5UX0hFQURFUiA9IFwidXNlci1hZ2VudFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9IRUFERVIgPSBcImNvbnRlbnQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fSEVBREVSID0gXCJhdXRob3JpemF0aW9uXCI7XG5leHBvcnQgY29uc3QgQ0FDSEVfQ09OVFJPTF9IRUFERVIgPSBcImNhY2hlLWNvbnRyb2xcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0xFTkdUSF9IRUFERVIgPSBcImNvbnRlbnQtbGVuZ3RoXCI7XG5leHBvcnQgY29uc3QgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSID0gXCJ0cmFuc2Zlci1lbmNvZGluZ1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gXCJjb250ZW50LWRpc3Bvc2l0aW9uXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW1ldGhvZHNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctaGVhZGVyc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1tZXRob2RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBQUkFHTUFfSEVBREVSLFxuICBBQ0NFUFRfSEVBREVSLFxuICBMT0NBVElPTl9IRUFERVIsXG4gIFVTRVJfQUdFTlRfSEVBREVSLFxuICBDT05URU5UX1RZUEVfSEVBREVSLFxuICBBVVRIT1JJWkFUSU9OX0hFQURFUixcbiAgQ0FDSEVfQ09OVFJPTF9IRUFERVIsXG4gIENPTlRFTlRfTEVOR1RIX0hFQURFUixcbiAgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVJcbn07IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEFCX0tFWV9DT0RFID0gOTtcbmV4cG9ydCBjb25zdCBTSElGVF9LRVlfQ09ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5leHBvcnQgY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG5leHBvcnQgY29uc3QgREVMRVRFX0tFWV9DT0RFID0gNDY7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0tFWV9DT0RFID0gODtcbmV4cG9ydCBjb25zdCBBUlJPV19VUF9LRVlfQ09ERSA9IDM4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX0RPV05fS0VZX0NPREUgPSA0MDtcbmV4cG9ydCBjb25zdCBBUlJPV19MRUZUX0tFWV9DT0RFID0gMzc7XG5leHBvcnQgY29uc3QgQVJST1dfUklHSFRfS0VZX0NPREUgPSAzOTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUQUJfS0VZX0NPREUsXG4gIFNISUZUX0tFWV9DT0RFLFxuICBFTlRFUl9LRVlfQ09ERSxcbiAgRVNDQVBFX0tFWV9DT0RFLFxuICBERUxFVEVfS0VZX0NPREUsXG4gIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgQVJST1dfVVBfS0VZX0NPREUsXG4gIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gIEFSUk9XX1JJR0hUX0tFWV9DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVRGOF9FTkNPRElORyA9IFwidXRmOFwiO1xuZXhwb3J0IGNvbnN0IFVURl84X0VOQ09ESU5HID0gXCJ1dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEJBU0U2NF9FTkNPRElORyA9IFwiYmFzZTY0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVRGOF9FTkNPRElORyxcbiAgVVRGXzhfRU5DT0RJTkcsXG4gIEJBU0U2NF9FTkNPRElOR1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFSUkFZX0pTT05fVFlQRSA9IFwiYXJyYXlcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1RfSlNPTl9UWVBFID0gXCJvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkdfSlNPTl9UWVBFID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBOVU1CRVJfSlNPTl9UWVBFID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOX0pTT05fVFlQRSA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IFBSSU1JVElWRV9KU09OX1RZUEUgPSBcInByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFSUkFZX0pTT05fVFlQRSxcbiAgT0JKRUNUX0pTT05fVFlQRSxcbiAgU1RSSU5HX0pTT05fVFlQRSxcbiAgTlVNQkVSX0pTT05fVFlQRSxcbiAgQk9PTEVBTl9KU09OX1RZUEUsXG4gIFBSSU1JVElWRV9KU09OX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVUF9DSEFSQUNURVIgPSBcIlx1MDAxYltBXCI7XG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IEJBUl9DSEFSQUNURVIgPSBcInxcIjtcbmV4cG9ydCBjb25zdCBIQVRfQ0hBUkFDVEVSID0gXCJeXCI7XG5leHBvcnQgY29uc3QgUExVU19DSEFSQUNURVIgPSBcIitcIjtcbmV4cG9ydCBjb25zdCBEQVNIX0NIQVJBQ1RFUiA9IFwiLVwiO1xuZXhwb3J0IGNvbnN0IERPV05fQ0hBUkFDVEVSID0gXCJcdTAwMWJbQlwiO1xuZXhwb3J0IGNvbnN0IExFRlRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbRFwiO1xuZXhwb3J0IGNvbnN0IFJJR0hUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0NcIjtcbmV4cG9ydCBjb25zdCBTUEFDRV9DSEFSQUNURVIgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDT01NQV9DSEFSQUNURVIgPSBcIixcIjtcbmV4cG9ydCBjb25zdCBDT0xPTl9DSEFSQUNURVIgPSBcIjpcIjtcbmV4cG9ydCBjb25zdCBQRVJJT0RfQ0hBUkFDVEVSID0gXCIuXCI7XG5leHBvcnQgY29uc3QgRE9MTEFSX0NIQVJBQ1RFUiA9IFwiJFwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQ19DSEFSQUNURVIgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgRVNDQVBFX0NIQVJBQ1RFUiA9IFwiXFx1MDAxYlwiO1xuZXhwb3J0IGNvbnN0IEFTVEVSSVNLX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tUSUNLX0RFTElNSVRFUiA9IFwiYFwiO1xuZXhwb3J0IGNvbnN0IE5FV19MSU5FX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTTEFTSF9DSEFSQUNURVIgPSBcIlxcXFxcIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IFFVRVNUSU9OX01BUktfQ0hBUkFDVEVSID0gXCI/XCI7XG5leHBvcnQgY29uc3QgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIgPSBcIi9cIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCIoXCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKVwiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSID0gXCIhXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwie1wiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIn1cIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiW1wiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVBfQ0hBUkFDVEVSLFxuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBIQVRfQ0hBUkFDVEVSLFxuICBQTFVTX0NIQVJBQ1RFUixcbiAgREFTSF9DSEFSQUNURVIsXG4gIERPV05fQ0hBUkFDVEVSLFxuICBMRUZUX0NIQVJBQ1RFUixcbiAgUklHSFRfQ0hBUkFDVEVSLFxuICBTUEFDRV9DSEFSQUNURVIsXG4gIENPTU1BX0NIQVJBQ1RFUixcbiAgQ09MT05fQ0hBUkFDVEVSLFxuICBQRVJJT0RfQ0hBUkFDVEVSLFxuICBET0xMQVJfQ0hBUkFDVEVSLFxuICBDVFJMX0NfQ0hBUkFDVEVSLFxuICBFU0NBUEVfQ0hBUkFDVEVSLFxuICBBU1RFUklTS19DSEFSQUNURVIsXG4gIFdJTERDQVJEX0NIQVJBQ1RFUixcbiAgQkFDS1RJQ0tfREVMSU1JVEVSLFxuICBORVdfTElORV9DSEFSQUNURVIsXG4gIEFNUEVSU0FORF9DSEFSQUNURVIsXG4gIEJBQ0tTTEFTSF9DSEFSQUNURVIsXG4gIEJBQ0tTUEFDRV9DSEFSQUNURVIsXG4gIFFVRVNUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUixcbiAgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUixcbiAgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIsXG4gIE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfQ09ERSA9IDA7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19DT0RFID0gMjAwO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfQ09ERSA9IDMwMjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSA9IDIwMTtcbmV4cG9ydCBjb25zdCBDT05GTElDVF80MDlfU1RBVFVTX0NPREUgPSA0MDk7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSA9IDMwMztcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19DT0RFID0gNDAzO1xuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUgPSA0MDQ7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUgPSAyMDQ7XG5leHBvcnQgY29uc3QgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19DT0RFID0gNTAyO1xuZXhwb3J0IGNvbnN0IEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSA9IDQwMDtcbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFID0gNDAxO1xuZXhwb3J0IGNvbnN0IE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfQ09ERSA9IDQwNjtcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFID0gNDA4O1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfQ09ERSA9IDQyOTtcbmV4cG9ydCBjb25zdCBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19DT0RFID0gNDA1O1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFID0gNTAzO1xuZXhwb3J0IGNvbnN0IFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfQ09ERSA9IDQyMjtcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFID0gNTAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19DT0RFLFxuICBPS18yMDBfU1RBVFVTX0NPREUsXG4gIEZPVU5EXzMwMl9TVEFUVVNfQ09ERSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUsXG4gIENPTkZMSUNUXzQwOV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFLFxuICBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX0NPREUsXG4gIFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX0NPREUsXG4gIFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfQ09ERSxcbiAgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfQ09ERSxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUsXG4gIFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfQ09ERSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBURVhUX0hUTUxfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gIFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19NRVNTQUdFID0gXCJcIjtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX01FU1NBR0UgPSBcIk9LXCI7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFID0gXCJGb3VuZFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19NRVNTQUdFID0gXCJDcmVhdGVkXCI7XG5leHBvcnQgY29uc3QgQ09ORkxJQ1RfNDA5X1NUQVRVU19NRVNTQUdFID0gXCJDb25mbGljdFwiO1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UgPSBcIlNlZSBvdGhlclwiO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UgPSBcIkZvcmJpZGRlblwiO1xuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UgPSBcIk5vdCBmb3VuZFwiO1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFID0gXCJObyBjb250ZW50XCI7XG5leHBvcnQgY29uc3QgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFID0gXCJCYWQgZ2F0ZXdheVwiO1xuZXhwb3J0IGNvbnN0IEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIHJlcXVlc3RcIjtcbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19NRVNTQUdFID0gXCJVbmF1dGhvcml6ZWRcIjtcbmV4cG9ydCBjb25zdCBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX01FU1NBR0UgPSBcIk5vdCBBY2NlcHRhYmxlXCI7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSA9IFwiUmVxdWVzdCB0aW1lb3V0XCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX01FU1NBR0UgPSBcIk1ldGhvZCBub3QgYWxsb3dlZFwiO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFID0gXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19NRVNTQUdFID0gXCJVbnByb2Nlc3NhYmxlIEVudGl0eVwiO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0UgPSBcIkludGVybmFsIHNlcnZlciBlcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfTUVTU0FHRSxcbiAgT0tfMjAwX1NUQVRVU19NRVNTQUdFLFxuICBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UsXG4gIENSRUFURURfMjAxX1NUQVRVU19NRVNTQUdFLFxuICBDT05GTElDVF80MDlfU1RBVFVTX01FU1NBR0UsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSxcbiAgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19NRVNTQUdFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19NRVNTQUdFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX01FU1NBR0UsXG4gIE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX01FU1NBR0UsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFLFxuICBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX01FU1NBR0UsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0Vcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPID0gXCIwXCI7XG5leHBvcnQgY29uc3QgREFUQSA9IFwiZGF0YVwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVCA9IFwiZGVmYXVsdFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UID0gXCJFTlZJUk9OTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgUEFDS0FHRV9KU09OID0gXCJwYWNrYWdlLmpzb25cIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1RfT0JKRUNUID0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2l4dGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs2XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbmludGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0TGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2l4dGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA2XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbmludGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoLTEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgLTEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gQXJyYXkuaXNBcnJheShlbGVtZW50T3JBcnJheTIpID9cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuXG4gIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheSwgc3RhcnQpLnJldmVyc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cblxuICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50cyA9IFtdLFxuICAgICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpO1xuXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChkZWxldGVkRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCkucG9wKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KS5wb3AoKTsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXhCID0gMCxcbiAgICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleEIgPCBhcnJheUxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXhCXTtcblxuICAgIGZvciAobGV0IGluZGV4QSA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXhBID4gaW5kZXhCOyBpbmRleEEtLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleEFdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleEEsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4QisrO1xuXG4gICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW10sXG4gICAgICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheUEsIGVsZW1lbnRCLCBjYWxsYmFjaykge1xuICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUFMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5QVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlBLCBlbGVtZW50Qik7XG5cbiAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheUEsIGVsZW1lbnRCLCBjYWxsYmFjaykge1xuICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUFMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5QVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50Qik7XG5cbiAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhcnJheUEsIChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleF0sXG4gICAgICAgICAgZWxlbWVudCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwoYXJyYXlBLCAoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleF0sXG4gICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY29tcGFyZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIGFycmF5QiA9IGNsb25lKGFycmF5Qik7IC8vL1xuXG4gICAgY29tcGFyZXMgPSBBcnJheS5wcm90b3R5cGUuZXZlcnkuY2FsbChhcnJheUEsKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZWxlbWVudEIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcnJlbGF0ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IGNvcnJlbGF0ZXM7XG5cbiAgYXJyYXlCID0gY2xvbmUoYXJyYXlCKTsgLy8vXG5cbiAgY29ycmVsYXRlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29ycmVsYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCByZXNvbHZlZDtcblxuICBhcnJheUEgPSBjbG9uZShhcnJheUEpOyAvLy9cblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICAgIGlmIChhcnJheUFMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QiwgZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcy5jYWxsKGFycmF5QiwgZWxlbWVudEEpO1xuXG4gICAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIHJlc29sdmVkID0gKGFycmF5QUxlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlBID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlBKTsgIC8vL1xuICBhcnJheUIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUIpOyAgLy8vXG5cbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlCTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5QltpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheUEsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlBLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheUIsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pb24oYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5QSk7ICAvLy9cbiAgYXJyYXlCID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlCKTsgIC8vL1xuXG4gIGNvbnN0IGNvbWJpbmVkQXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgIGNvbWJpbmVkQXJyYXlMZW5ndGggPSBjb21iaW5lZEFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tYmluZWRBcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgICAgY29tYmluZWRFbGVtZW50ID0gY29tYmluZWRBcnJheVtpbmRleF07XG5cbiAgICBmb3IgKGxldCBhcnJheUluZGV4ID0gMDsgYXJyYXlJbmRleCA8IGFycmF5TGVuZ3RoOyBhcnJheUluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVthcnJheUluZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGNvbWJpbmVkRWxlbWVudCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXksIGNvbWJpbmVkRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4QSA9IDA7IGluZGV4QSA8IGFycmF5QUxlbmd0aDsgaW5kZXhBKyspIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlBW2luZGV4QV0sXG4gICAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4QiA9IDA7IGluZGV4QiA8IGFycmF5Qkxlbmd0aDsgaW5kZXhCKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4Ql0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXksIGVsZW1lbnRBKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleEEgPSAwOyBpbmRleEEgPCBhcnJheUFMZW5ndGg7IGluZGV4QSsrKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5QVtpbmRleEFdLFxuICAgICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleEIgPSAwOyBpbmRleEIgPCBhcnJheUJMZW5ndGg7IGluZGV4QisrKSB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleEJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheSwgZWxlbWVudEEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleEIgPSAwOyBpbmRleEIgPCBhcnJheUJMZW5ndGg7IGluZGV4QisrKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleEJdLFxuICAgICAgICAgIGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleEEgPSAwOyBpbmRleEEgPCBhcnJheUFMZW5ndGg7IGluZGV4QSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5QVtpbmRleEFdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheSwgZWxlbWVudEIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIHNpeHRoLFxuICBzZXZlbnRoLFxuICBlaWdodGgsXG4gIG5pbnRoLFxuICBmaXJzdExhc3QsXG4gIHNlY29uZExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgZmlmdGhMYXN0LFxuICBzaXh0aExhc3QsXG4gIHNldmVudGhMYXN0LFxuICBlaWdodGhMYXN0LFxuICBuaW50aExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIG1lcmdlLFxuICBjbGVhcixcbiAgY29weSxcbiAgemlwLFxuICBtYXRjaCxcbiAgY29tcGFyZSxcbiAgY29ycmVsYXRlLFxuICByZXNvbHZlLFxuICBvbmUsXG4gIGVhY2gsXG4gIGZpbmQsXG4gIGNsb25lLFxuICByZXBsYWNlLFxuICBzcGxpY2UsXG4gIGZpbHRlcixcbiAgcHJ1bmUsXG4gIGV4dHJhY3QsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgcmV2ZXJzZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIHVuaW9uLFxuICBpbnRlcnNlY3Rpb24sXG4gIGxlZnREaWZmZXJlbmNlLFxuICByaWdodERpZmZlcmVuY2UsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoLFxuICBmb3J3YXJkc0ZpbmRJbmRleCxcbiAgYmFja3dhcmRzRmluZEluZGV4XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBjb25jYXRlbmF0ZWRQYXRoO1xuXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgY29uc3QgcmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKHJlbWFpbmluZ0FBcmd1bWVudHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlZFBhdGgsICAvLy9cbiAgICAgICAgICByZWxhdGl2ZVBhdGggPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcblxuICAgIGNvbmNhdGVuYXRlZFBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1RfT0JKRUNUIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQVJSQVlfSlNPTl9UWVBFLFxuICAgICAgICAgT0JKRUNUX0pTT05fVFlQRSxcbiAgICAgICAgIFNUUklOR19KU09OX1RZUEUsXG4gICAgICAgICBOVU1CRVJfSlNPTl9UWVBFLFxuICAgICAgICAgQk9PTEVBTl9KU09OX1RZUEUsXG4gICAgICAgICBQUklNSVRJVkVfSlNPTl9UWVBFIH0gZnJvbSBcIi4uL2pzb25UeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZU9mKGpzb24pIHtcbiAgbGV0IHR5cGU7XG5cbiAgY29uc3QgYXJyYXkgPSBpc0FycmF5KGpzb24pLFxuICAgICAgICBvYmplY3QgPSBpc09iamVjdChqc29uKSxcbiAgICAgICAgcHJpbWl0aXZlID0gaXNQcmltaXRpdmUoanNvbik7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoYXJyYXkpIHtcbiAgICB0eXBlID0gQVJSQVlfSlNPTl9UWVBFO1xuICB9IGVsc2UgaWYgKG9iamVjdCkge1xuICAgIHR5cGUgPSBPQkpFQ1RfSlNPTl9UWVBFO1xuICB9IGVsc2UgaWYgKHByaW1pdGl2ZSkge1xuICAgIHR5cGUgPSBQUklNSVRJVkVfSlNPTl9UWVBFO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoanNvbikge1xuICBjb25zdCBfbnVsbCA9IChqc29uID09PSBudWxsKTtcblxuICByZXR1cm4gX251bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KGpzb24pIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGpzb24pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGpzb24pIHtcbiAgY29uc3Qgb2JqZWN0ID0gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc29uKSA9PT0gT0JKRUNUX09CSkVDVCk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGpzb24pIHtcbiAgY29uc3Qgc3RyaW5nID0gKHR5cGVvZiBqc29uID09PSBTVFJJTkdfSlNPTl9UWVBFKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoanNvbikge1xuICBjb25zdCBudW1iZXIgPSAodHlwZW9mIGpzb24gPT09IE5VTUJFUl9KU09OX1RZUEUpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oanNvbikge1xuICBjb25zdCBib29sZWFuID0gKHR5cGVvZiBqc29uID09PSBCT09MRUFOX0pTT05fVFlQRSk7XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZShqc29uKSB7XG4gIGNvbnN0IF9udWxsID0gaXNOdWxsKGpzb24pLFxuICAgICAgICBzdHJpbmcgPSBpc1N0cmluZyhqc29uKSxcbiAgICAgICAgbnVtYmVyID0gaXNOdW1iZXIoanNvbiksXG4gICAgICAgIGJvb2xlYW4gPSBpc0Jvb2xlYW4oanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IChfbnVsbCB8fCBzdHJpbmcgfHwgbnVtYmVyIHx8IGJvb2xlYW4pO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZU9mLFxuICBpc051bGwsXG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNQcmltaXRpdmVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGZvciAoY29uc3QgXyBvZiBzdHJpbmcpIHtcbiAgICBsZW5ndGgrKztcbiAgfVxuXG4gIHJldHVybiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQikge1xuICBsZXQgZGlmZmVyZW5jZSA9IDA7XG5cbiAgbGV0IG5haXZlSW5kZXhBID0gMCxcbiAgICAgIG5haXZlSW5kZXhCID0gMDtcblxuICBjb25zdCBzdHJpbmdBTmFpdmVMZW5ndGggPSBzdHJpbmdBLmxlbmd0aCxcbiAgICAgICAgc3RyaW5nQk5haXZlTGVuZ3RoID0gc3RyaW5nQi5sZW5ndGg7XG5cbiAgd2hpbGUgKChuYWl2ZUluZGV4QSA8IHN0cmluZ0FOYWl2ZUxlbmd0aCkgfHwgKG5haXZlSW5kZXhCIDwgc3RyaW5nQk5haXZlTGVuZ3RoKSkge1xuICAgIGNvbnN0IGNvZGVQb2ludEEgPSAobmFpdmVJbmRleEEgPCBzdHJpbmdBTmFpdmVMZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdBLmNvZGVQb2ludEF0KG5haXZlSW5kZXhBKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIGNvZGVQb2ludEIgPSAobmFpdmVJbmRleEIgPCBzdHJpbmdCTmFpdmVMZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdCLmNvZGVQb2ludEF0KG5haXZlSW5kZXhCKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwO1xuXG4gICAgZGlmZmVyZW5jZSA9IChjb2RlUG9pbnRBIC0gY29kZVBvaW50Qik7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmFpdmVJbmRleEEgKz0gKGNvZGVQb2ludEEgPiAweEZGRkYpID9cbiAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgIDE7XG5cbiAgICBuYWl2ZUluZGV4QiArPSAoY29kZVBvaW50QiA+IDB4RkZGRikgP1xuICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgMTtcbiAgfVxuXG4gIHJldHVybiBkaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihzdHJpbmcsIHNlYXJjaFN0cmluZykge1xuICBsZXQgaW5kZXggPSAtMTtcblxuICBjb25zdCBzZWFyY2hTdHJpbmdMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgb3V0ZXJOYWl2ZUluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VhcmNoU3RyaW5nKTtcblxuICAgIGlmIChvdXRlck5haXZlSW5kZXggPiAtMSkge1xuICAgICAgaW5kZXggPSAwO1xuXG4gICAgICBsZXQgaW5uZXJOYWl2ZUluZGV4ID0gMDtcblxuICAgICAgd2hpbGUgKGlubmVyTmFpdmVJbmRleCA8IG91dGVyTmFpdmVJbmRleCkge1xuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGlubmVyTmFpdmVJbmRleCk7XG5cbiAgICAgICAgaW5uZXJOYWl2ZUluZGV4ICs9ICgoY2hhckNvZGUgPj0gMHhEODAwKSAmJiAoY2hhckNvZGUgPD0gMHhEQkZGKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IHN0cmluZ05haXZlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICBsZXQgaW5kZXggPSAwLFxuICAgICAgbmFpdmVJbmRleCA9IDAsXG4gICAgICBuYWl2ZVN0YXJ0ID0gc3RyaW5nTmFpdmVMZW5ndGgsIC8vL1xuICAgICAgbmFpdmVFbmQgPSBzdHJpbmdOYWl2ZUxlbmd0aDsgLy8vXG5cbiAgd2hpbGUgKG5haXZlSW5kZXggPCBzdHJpbmdOYWl2ZUxlbmd0aCkge1xuICAgIGlmIChpbmRleCA9PT0gc3RhcnQpIHtcbiAgICAgIG5haXZlU3RhcnQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSBlbmQpIHtcbiAgICAgIG5haXZlRW5kID0gbmFpdmVJbmRleDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KG5haXZlSW5kZXgpO1xuXG4gICAgbmFpdmVJbmRleCArPSAoKGNoYXJDb2RlID49IDB4RDgwMCkgJiYgKGNoYXJDb2RlIDw9IDB4REJGRikpID9cbiAgICAgICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgbmFpdmVTdGFydCA9IG5haXZlSW5kZXg7ICAvLy9cbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgbmFpdmVFbmQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKG5haXZlU3RhcnQsIG5haXZlRW5kKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdVcHBlckNhc2Uoc3RyaW5nKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZVN0cmluZyA9IHN0cmluZy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBzdHJpbmdVcHBlckNhc2UgPSAoc3RyaW5nID09PSB1cHBlckNhc2VTdHJpbmcpO1xuXG4gIHJldHVybiBzdHJpbmdVcHBlckNhc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RyY21wLFxuICBzdHJsZW4sXG4gIGluZGV4T2YsXG4gIHN1YnN0cmluZyxcbiAgaXNTdHJpbmdVcHBlckNhc2Vcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlKGpzb24sIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbikge1xuICBsZXQgeyB2ZXJzaW9uIH0gPSBqc29uO1xuXG4gIHdoaWxlICh2ZXJzaW9uICE9PSBsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgbWlncmF0ZUZ1bmN0aW9uID0gbWlncmF0aW9uTWFwW3ZlcnNpb25dO1xuXG4gICAganNvbiA9IG1pZ3JhdGVGdW5jdGlvbihqc29uKTtcblxuICAgICh7IHZlcnNpb24gfSA9IGpzb24pO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlncmF0ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3Qob3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgZnVuY3Rpb24gbmV4dChpbmRleCkge1xyXG4gICAgb3BlcmF0aW9uKCgpID0+IHtcclxuICAgICAgbmV4dChpbmRleCArIDEpO1xyXG4gICAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kZXggPSAwO1xyXG5cclxuICBuZXh0KGluZGV4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KGluZGV4KSB7XHJcbiAgICBpZiAoaW5kZXggPT09IGxlbmd0aCkge1xyXG4gICAgICBkb25lKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICBvcGVyYXRpb24oZWxlbWVudCwgKCkgPT4ge1xyXG4gICAgICBuZXh0KGluZGV4ICsgMSk7XHJcbiAgICB9LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmRleCA9IDA7XHJcblxyXG4gIG5leHQoaW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICBvcGVyYXRpb24oKCkgPT4ge1xyXG4gICAgICBuZXh0KGluZGV4ICsgMSk7XHJcbiAgICB9LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmRleCA9IDA7XHJcblxyXG4gIG5leHQoaW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7XHJcblxyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgZnVuY3Rpb24gbmV4dChpbmRleCkge1xyXG4gICAgaWYgKGluZGV4ID09PSBsZW5ndGgpIHtcclxuICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgb3BlcmF0aW9uKGVsZW1lbnQsICgpID0+IHtcclxuICAgICAgbmV4dChpbmRleCArIDEpO1xyXG4gICAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kZXggPSAwO1xyXG5cclxuICBuZXh0KGluZGV4KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KGluZGV4KSB7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgIG9wZXJhdGlvbihlbGVtZW50LCAoKSA9PiB7XHJcbiAgICAgIG5leHQoaW5kZXggLSAxKTtcclxuICAgIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gbGVuZ3RoIC0gMTtcclxuXHJcbiAgbmV4dChpbmRleCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUeXBlKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICBpZiAocmVzcG9uc2VUeXBlICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmFzc2lnbih4bWxIdHRwUmVxdWVzdCwge1xuICAgICAgcmVzcG9uc2VUeXBlXG4gICAgfSk7XG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzb25UeXBlcyB9IGZyb20gXCIuL2pzb25UeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFyYWN0ZXJzIH0gZnJvbSBcIi4vY2hhcmFjdGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNDb2RlcyB9IGZyb20gXCIuL3N0YXR1c0NvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnRUeXBlcyB9IGZyb20gXCIuL2NvbnRlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3N0YXR1c01lc3NhZ2VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzb25VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIGlmICghdGVybWluYXRlKSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4ucHJlZGVjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4SW5kZXggPSBwcmVkZWNlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IHByZWRlY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4uc3VjY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCwgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9zZWFyY2hcIjtcblxuY29uc3QgeyBsYXN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUodmVydGV4KSB7XG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKHZlcnRleCksXG4gICAgICAgICAgbGFzdEZvcndhcmRzUmVhY2hhYmxlVmVydGV4ID0gbGFzdChmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKSxcbiAgICAgICAgICB2ZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSA9ICh2ZXJ0ZXggPT09IGxhc3RGb3J3YXJkc1JlYWNoYWJsZVZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4Rm9yd2FyZHNSZWFjaGFibGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgcmV0cmlldmVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCA9IHRhaWwoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHJldHJpZXZlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcygpLFxuICAgICAgICAgIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCA9IHRhaWwoYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybWluYXRlID0gKHZlcnRleEEgPT09IHZlcnRleEIpO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyh2ZXJ0ZXggPSBudWxsKSB7XG4gICAgY29uc3QgdmVydGV4QSA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybWluYXRlID0gKHZlcnRleEEgPT09IHZlcnRleEIpO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXM7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckluZGV4ZXMoaW5kZXhlcykgeyAgLy8vXG4gIGluZGV4ZXMuc29ydCgoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXgpID0+IHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RJbmRleCA8IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RJbmRleCA+IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleGVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpIHtcbiAgICAgICAgdmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCkge1xuICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCByZWFjaGFibGVWZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLmJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVhY2hhYmxlSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXMocmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHJlYWNoYWJsZUluZGV4ZXMpO1xuXG4gICAgcmVhY2hhYmxlVmVydGV4ZXMuZm9yRWFjaCgocmVhY2hhYmxlVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVhY2hhYmxlSW5kZXggPSByZWFjaGFibGVJbmRleGVzW2luZGV4XTtcblxuICAgICAgaW5kZXggPSByZWFjaGFibGVJbmRleDsgLy8vXG5cbiAgICAgIHJlYWNoYWJsZVZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZ2V0Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICBlZGdlcyA9IGN5Y2xpY0VkZ2VzOyAgLy8vXG5cbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRnZSB9IGZyb20gXCIuL2VkZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3ljbGUgfSBmcm9tIFwiLi9jeWNsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZXJ0ZXggfSBmcm9tIFwiLi92ZXJ0ZXhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2RpcmVjdGVkR3JhcGhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWRnZSwgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuY29uc3QgZWRnZTEgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKSxcbiAgICAgIGVkZ2UyID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL3dpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktd2l0aC1zdHlsZVwiKSxcbiAgICAgIGVkZ2UzID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL2Vhc3ktbGF5b3V0XCIsIFwiLi9vY2NhbS1sZXhlcnNcIiksXG4gICAgICBlZGdlNCA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi9lYXN5LXdpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktbGF5b3V0XCIpLFxuICAgICAgZWRnZTUgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vb2NjYW0tbGV4ZXJzXCIsIFwiLi93aXRoLXN0eWxlXCIpO1xuXG5jb25zdCBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tTm90aGluZygpO1xuXG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTEpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UyKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlMyk7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTQpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2U1KTtcblxuZGlyZWN0ZWRHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoXCIuL29jY2FtLWxleGVyc1wiKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQTs7Ozs7bUNBRUEsV0FBQTs7O2VBQXFCOzs7QUFBTixxQkFBTTtNQUNuQixZQUFZLGtCQUFrQixrQkFBa0I7QUFDOUMsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxtQkFBbUI7O01BRzFCLHNCQUFz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
