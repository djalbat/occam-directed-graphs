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
      get BOOLEAN() {
        return BOOLEAN;
      },
      get DATA() {
        return DATA;
      },
      get DEFAULT() {
        return DEFAULT;
      },
      get DOUBLE_SPACE() {
        return DOUBLE_SPACE;
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
      get NUMBER() {
        return NUMBER;
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
    var NUMBER = "number";
    var BOOLEAN = "boolean";
    var DEFAULT = "default";
    var FUNCTION = "function";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
    var DOUBLE_SPACE = "  ";
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
      get last() {
        return last;
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
      get unshift() {
        return unshift;
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
      const arrayB = elementOrArray2 instanceof Array ? elementOrArray2 : [
        elementOrArray2
      ];
      push(arrayA, arrayB);
    }
    function clear(array) {
      const start = 0;
      return array.splice(start);
    }
    function copy(arrayA, arrayB) {
      const start = 0, deleteCount = arrayB.length;
      splice(arrayA, start, deleteCount, arrayB);
    }
    function merge(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function match(arrayA, arrayB, callback) {
      let matches = false;
      const arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        matches = arrayA.every((elementA, index) => {
          const elementB = arrayB[index], passed = callback(elementA, elementB, index);
          if (passed) {
            return true;
          }
        });
      }
      return matches;
    }
    function compare(arrayA, arrayB, callback) {
      let coupled = false;
      const arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        arrayB = [
          ...arrayB
        ];
        coupled = arrayA.every((elementA, index) => {
          const elementB = extract(arrayB, (elementB2) => {
            const result = callback(elementA, elementB2);
            if (result) {
              return true;
            }
          }) || null;
          if (elementB !== null) {
            return true;
          }
        });
      }
      return coupled;
    }
    function correlate(arrayA, arrayB, callback) {
      arrayB = [
        ...arrayB
      ];
      const correlates = arrayA.every((elementA) => {
        const elementB = extract(arrayB, (elementB2) => {
          const result = callback(elementA, elementB2);
          if (result) {
            return true;
          }
        }) || null;
        if (elementB !== null) {
          return true;
        }
      });
      return correlates;
    }
    function resolve(arrayA, arrayB, callback) {
      let resolved;
      arrayA = [
        ...arrayA
      ];
      for (; ; ) {
        const arrayALength2 = arrayA.length;
        if (arrayALength2 === 0) {
          break;
        }
        let resolved2 = false;
        arrayA.forEach((elementA) => {
          const passed = callback(elementA);
          if (passed) {
            const elementB = elementA;
            arrayB.push(elementB);
            resolved2 = true;
          }
        });
        if (!resolved2) {
          break;
        }
        filter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);
          if (!arrayBIncludesElementA) {
            return true;
          }
        });
      }
      const arrayALength = arrayA.length;
      resolved = arrayALength === 0;
      return resolved;
    }
    function find(array, callback) {
      const elements = [];
      forwardsForEach(array, (element, index) => {
        const passed = callback(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function replace(array, element, callback) {
      let start;
      const found = array.some((element2, index) => {
        const passed = callback(element2, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        const deleteCount = 1;
        array.splice(start, deleteCount, element);
      }
      return found;
    }
    function splice(arrayA, start, deleteCount = Infinity, arrayB = []) {
      const args = [
        start,
        deleteCount,
        ...arrayB
      ], deletedElements = Array.prototype.splice.apply(arrayA, args);
      return deletedElements;
    }
    function filter(array, callback) {
      const deletedElements = [];
      backwardsForEach(array, (element, index) => {
        const passed = callback(element, index);
        if (!passed) {
          const start = index, deleteCount = 1, deletedElements2 = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements2);
          deletedElements2.unshift(firstDeletedElement);
        }
      });
      return deletedElements;
    }
    function prune(array, callback) {
      let deletedElement = void 0;
      array.some((element, index) => {
        const passed = callback(element, index);
        if (!passed) {
          const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function extract(array, callback) {
      let deletedElement = void 0;
      array.some((element, index) => {
        const passed = callback(element, index);
        if (passed) {
          const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function patch(array, element, callback) {
      const found = array.some((element2, index) => {
        const passed = callback(element2, index);
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
      let index1 = 0, length = array.length;
      while (index1 < length) {
        const elementB = array[index1];
        for (let index2 = length - 1; index2 > index1; index2--) {
          const elementA = array[index2], passed = callback(elementA, elementB);
          if (!passed) {
            const start = index2, deleteCount = 1;
            array.splice(start, deleteCount);
          }
        }
        index1++;
        length = array.length;
      }
    }
    function combine(arrayA, arrayB, callback) {
      const array = [
        ...arrayA,
        ...arrayB
      ];
      compress(array, callback);
      return array;
    }
    function reverse(array) {
      array = [
        ...array
      ].reverse();
      return array;
    }
    function augment(arrayA, arrayB, callback) {
      arrayB.forEach((element, index) => {
        const passed = callback(element, index);
        if (passed) {
          arrayA.push(element);
        }
      });
    }
    function separate(array, arrayA, arrayB, callback) {
      array.forEach((element, index) => {
        const passed = callback(element, index);
        passed ? arrayA.push(element) : arrayB.push(element);
      });
    }
    function forwardsFind(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function backwardsFind(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
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
      clear,
      copy,
      merge,
      match,
      compare,
      correlate,
      resolve,
      find,
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
      let count = -1;
      function next() {
        count++;
        const index = count;
        operation(next, done, context, index);
      }
      next();
    }
    function forEach(array, operation, done, context) {
      const length = array.length;
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(operations, done, context) {
      const length = operations.length;
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, operation = operations[index];
          operation(next, done, context, index);
        }
      }
      next();
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
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, operation, done, context) {
      const length = array.length;
      let count = length;
      function next() {
        count--;
        const terminate = count === -1;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2xldmVscy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2hlYWRlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMva2V5Q29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvZW5jb2RpbmdzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzQ29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29udGVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c01lc3NhZ2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3BhdGguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2Jyb3dzZXIuanMiLCAic3JjL3V0aWxpdGllcy9zZWFyY2guanMiLCAic3JjL3ZlcnRleC5qcyIsICJzcmMvdXRpbGl0aWVzL2luZGV4LmpzIiwgInNyYy9kaXJlY3RlZEdyYXBoLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKSAmJiAodGhpcy50YXJnZXRWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkgfHwgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpIHsgIC8vL1xuICB2ZXJ0ZXhlcy5zb3J0KChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4KSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhJbmRleCA9IGZpcnN0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSBzZWNvbmRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdFZlcnRleEluZGV4IDwgc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgIGlmIChmaXJzdFZlcnRleEluZGV4ID4gc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiArMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE5hbWVzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMoc291cmNlVmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICAgICAgc291cmNlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVBfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQVwiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQVJfQ0hBUkFDVEVSID0gXCJ8XCI7XG5leHBvcnQgY29uc3QgSEFUX0NIQVJBQ1RFUiA9IFwiXlwiO1xuZXhwb3J0IGNvbnN0IFBMVVNfQ0hBUkFDVEVSID0gXCIrXCI7XG5leHBvcnQgY29uc3QgREFTSF9DSEFSQUNURVIgPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBET1dOX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0JcIjtcbmV4cG9ydCBjb25zdCBMRUZUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0RcIjtcbmV4cG9ydCBjb25zdCBSSUdIVF9DSEFSQUNURVIgPSBcIlx1MDAxYltDXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IERPTExBUl9DSEFSQUNURVIgPSBcIiRcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0NfQ0hBUkFDVEVSID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9DSEFSQUNURVIgPSBcIlxcdTAwMWJcIjtcbmV4cG9ydCBjb25zdCBBU1RFUklTS19DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRF9DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBCQUNLVElDS19ERUxJTUlURVIgPSBcImBcIjtcbmV4cG9ydCBjb25zdCBORVdfTElORV9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBCQUNLU0xBU0hfQ0hBUkFDVEVSID0gXCJcXFxcXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiP1wiO1xuZXhwb3J0IGNvbnN0IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSID0gXCIvXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKFwiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIilcIjtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcbmV4cG9ydCBjb25zdCBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiIVwiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIntcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJ9XCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIltcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiXVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVQX0NIQVJBQ1RFUixcbiAgRVRYX0NIQVJBQ1RFUixcbiAgQkFSX0NIQVJBQ1RFUixcbiAgSEFUX0NIQVJBQ1RFUixcbiAgUExVU19DSEFSQUNURVIsXG4gIERBU0hfQ0hBUkFDVEVSLFxuICBET1dOX0NIQVJBQ1RFUixcbiAgTEVGVF9DSEFSQUNURVIsXG4gIFJJR0hUX0NIQVJBQ1RFUixcbiAgU1BBQ0VfQ0hBUkFDVEVSLFxuICBDT01NQV9DSEFSQUNURVIsXG4gIENPTE9OX0NIQVJBQ1RFUixcbiAgUEVSSU9EX0NIQVJBQ1RFUixcbiAgRE9MTEFSX0NIQVJBQ1RFUixcbiAgQ1RSTF9DX0NIQVJBQ1RFUixcbiAgRVNDQVBFX0NIQVJBQ1RFUixcbiAgQVNURVJJU0tfQ0hBUkFDVEVSLFxuICBXSUxEQ0FSRF9DSEFSQUNURVIsXG4gIEJBQ0tUSUNLX0RFTElNSVRFUixcbiAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICBBTVBFUlNBTkRfQ0hBUkFDVEVSLFxuICBCQUNLU0xBU0hfQ0hBUkFDVEVSLFxuICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUixcbiAgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIsXG4gIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVJcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX0NPREUgPSAwO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfQ09ERSA9IDIwMDtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX0NPREUgPSAzMDI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUgPSAyMDE7XG5leHBvcnQgY29uc3QgQ09ORkxJQ1RfNDA5X1NUQVRVU19DT0RFID0gNDA5O1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUgPSAzMDM7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSA9IDQwMztcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFID0gNDA0O1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFID0gMjA0O1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSA9IDUwMjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUgPSA0MDA7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSA9IDQwMTtcbmV4cG9ydCBjb25zdCBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX0NPREUgPSA0MDY7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfQ09ERSA9IDQwNTtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSA9IDUwMztcbmV4cG9ydCBjb25zdCBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX0NPREUgPSA0MjI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfQ09ERSxcbiAgT0tfMjAwX1NUQVRVU19DT0RFLFxuICBGT1VORF8zMDJfU1RBVFVTX0NPREUsXG4gIENSRUFURURfMjAxX1NUQVRVU19DT0RFLFxuICBDT05GTElDVF80MDlfU1RBVFVTX0NPREUsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSxcbiAgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX0NPREUsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfTUVTU0FHRSA9IFwiXCI7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19NRVNTQUdFID0gXCJPS1wiO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSA9IFwiRm91bmRcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSA9IFwiQ3JlYXRlZFwiO1xuZXhwb3J0IGNvbnN0IENPTkZMSUNUXzQwOV9TVEFUVVNfTUVTU0FHRSA9IFwiQ29uZmxpY3RcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgQWNjZXB0YWJsZVwiO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UgPSBcIlJlcXVlc3QgdGltZW91dFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSA9IFwiVG9vIG1hbnkgcmVxdWVzdHNcIjtcbmV4cG9ydCBjb25zdCBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19NRVNTQUdFID0gXCJNZXRob2Qgbm90IGFsbG93ZWRcIjtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiO1xuZXhwb3J0IGNvbnN0IFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfTUVTU0FHRSA9IFwiVW5wcm9jZXNzYWJsZSBFbnRpdHlcIjtcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFID0gXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX01FU1NBR0UsXG4gIE9LXzIwMF9TVEFUVVNfTUVTU0FHRSxcbiAgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSxcbiAgQ09ORkxJQ1RfNDA5X1NUQVRVU19NRVNTQUdFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19NRVNTQUdFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVSTyA9IFwiMFwiO1xuZXhwb3J0IGNvbnN0IERBVEEgPSBcImRhdGFcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE5VTUJFUiA9IFwibnVtYmVyXCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFQgPSBcImRlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVCA9IFwiRU5WSVJPTk1FTlRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IERPVUJMRV9TUEFDRSA9IFwiICBcIjtcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0pTT04gPSBcInBhY2thZ2UuanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY291cGxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gWyAgLy8vXG4gICAgICAuLi5hcnJheUJcbiAgICBdO1xuXG4gICAgY291cGxlZCA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3VwbGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhcnJheUEuZm9yRWFjaCgoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gWyBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5QiBdLFxuICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5QSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVsZXRlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGFycmF5ID0gWyAvLy9cbiAgICAuLi5hcnJheVxuICBdLnJldmVyc2UoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIG1hdGNoLFxuICBjb21wYXJlLFxuICBjb3JyZWxhdGUsXG4gIHJlc29sdmUsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2gsXG4gIGZvcndhcmRzRmluZEluZGV4LFxuICBiYWNrd2FyZHNGaW5kSW5kZXhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGNvbmNhdGVuYXRlZFBhdGg7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICBjb25zdCByZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID0gcmVtYWluaW5nQXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAocmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVkUGF0aCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuXG4gICAgY29uY2F0ZW5hdGVkUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGZvciAoY29uc3QgXyBvZiBzdHJpbmcpIHtcbiAgICBsZW5ndGgrKztcbiAgfVxuXG4gIHJldHVybiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQikge1xuICBsZXQgZGlmZmVyZW5jZSA9IDA7XG5cbiAgbGV0IG5haXZlSW5kZXhBID0gMCxcbiAgICAgIG5haXZlSW5kZXhCID0gMDtcblxuICBjb25zdCBzdHJpbmdBTmFpdmVMZW5ndGggPSBzdHJpbmdBLmxlbmd0aCxcbiAgICAgICAgc3RyaW5nQk5haXZlTGVuZ3RoID0gc3RyaW5nQi5sZW5ndGg7XG5cbiAgd2hpbGUgKChuYWl2ZUluZGV4QSA8IHN0cmluZ0FOYWl2ZUxlbmd0aCkgfHwgKG5haXZlSW5kZXhCIDwgc3RyaW5nQk5haXZlTGVuZ3RoKSkge1xuICAgIGNvbnN0IGNvZGVQb2ludEEgPSAobmFpdmVJbmRleEEgPCBzdHJpbmdBTmFpdmVMZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdBLmNvZGVQb2ludEF0KG5haXZlSW5kZXhBKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIGNvZGVQb2ludEIgPSAobmFpdmVJbmRleEIgPCBzdHJpbmdCTmFpdmVMZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdCLmNvZGVQb2ludEF0KG5haXZlSW5kZXhCKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwO1xuXG4gICAgZGlmZmVyZW5jZSA9IChjb2RlUG9pbnRBIC0gY29kZVBvaW50Qik7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmFpdmVJbmRleEEgKz0gKGNvZGVQb2ludEEgPiAweEZGRkYpID9cbiAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgIDE7XG5cbiAgICBuYWl2ZUluZGV4QiArPSAoY29kZVBvaW50QiA+IDB4RkZGRikgP1xuICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgMTtcbiAgfVxuXG4gIHJldHVybiBkaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihzdHJpbmcsIHNlYXJjaFN0cmluZykge1xuICBsZXQgaW5kZXggPSAtMTtcblxuICBjb25zdCBzZWFyY2hTdHJpbmdMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgb3V0ZXJOYWl2ZUluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VhcmNoU3RyaW5nKTtcblxuICAgIGlmIChvdXRlck5haXZlSW5kZXggPiAtMSkge1xuICAgICAgaW5kZXggPSAwO1xuXG4gICAgICBsZXQgaW5uZXJOYWl2ZUluZGV4ID0gMDtcblxuICAgICAgd2hpbGUgKGlubmVyTmFpdmVJbmRleCA8IG91dGVyTmFpdmVJbmRleCkge1xuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGlubmVyTmFpdmVJbmRleCk7XG5cbiAgICAgICAgaW5uZXJOYWl2ZUluZGV4ICs9ICgoY2hhckNvZGUgPj0gMHhEODAwKSAmJiAoY2hhckNvZGUgPD0gMHhEQkZGKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IHN0cmluZ05haXZlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICBsZXQgaW5kZXggPSAwLFxuICAgICAgbmFpdmVJbmRleCA9IDAsXG4gICAgICBuYWl2ZVN0YXJ0ID0gc3RyaW5nTmFpdmVMZW5ndGgsIC8vL1xuICAgICAgbmFpdmVFbmQgPSBzdHJpbmdOYWl2ZUxlbmd0aDsgLy8vXG5cbiAgd2hpbGUgKG5haXZlSW5kZXggPCBzdHJpbmdOYWl2ZUxlbmd0aCkge1xuICAgIGlmIChpbmRleCA9PT0gc3RhcnQpIHtcbiAgICAgIG5haXZlU3RhcnQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSBlbmQpIHtcbiAgICAgIG5haXZlRW5kID0gbmFpdmVJbmRleDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KG5haXZlSW5kZXgpO1xuXG4gICAgbmFpdmVJbmRleCArPSAoKGNoYXJDb2RlID49IDB4RDgwMCkgJiYgKGNoYXJDb2RlIDw9IDB4REJGRikpID9cbiAgICAgICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgbmFpdmVTdGFydCA9IG5haXZlSW5kZXg7ICAvLy9cbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgbmFpdmVFbmQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKG5haXZlU3RhcnQsIG5haXZlRW5kKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlKGpzb24sIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbikge1xuICBsZXQgeyB2ZXJzaW9uIH0gPSBqc29uO1xuXG4gIHdoaWxlICh2ZXJzaW9uICE9PSBsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgbWlncmF0ZUZ1bmN0aW9uID0gbWlncmF0aW9uTWFwW3ZlcnNpb25dO1xuXG4gICAganNvbiA9IG1pZ3JhdGVGdW5jdGlvbihqc29uKTtcblxuICAgICh7IHZlcnNpb24gfSA9IGpzb24pO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlncmF0ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3Qob3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQ7ICAvLy9cclxuXHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUeXBlKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICBpZiAocmVzcG9uc2VUeXBlICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmFzc2lnbih4bWxIdHRwUmVxdWVzdCwge1xuICAgICAgcmVzcG9uc2VUeXBlXG4gICAgfSk7XG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYXJhY3RlcnMgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c0NvZGVzIH0gZnJvbSBcIi4vc3RhdHVzQ29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudFR5cGVzIH0gZnJvbSBcIi4vY29udGVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c01lc3NhZ2VzIH0gZnJvbSBcIi4vc3RhdHVzTWVzc2FnZXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvblV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBbXSkge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnByZWRlY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHByZWRlY2Vzc29yVmVydGV4XG4gICAgICBdO1xuXG4gICAgICB0ZXJtaW5hdGUgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleEluZGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPiBwcmVkZWNlc3NvclZlcnRleEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdGVybWluYXRlID0gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgc3VjY2Vzc29yVmVydGV4ZXMgPSBbXSkge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnN1Y2Nlc3NvclZlcnRleGVzLFxuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHZlcnRleEluZGV4IDwgc3VjY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2gsIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvc2VhcmNoXCI7XG5cbmNvbnN0IHsgbGFzdCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApICYmIChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBpc1ZlcnRleEZvcndhcmRzUmVhY2hhYmxlKHZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB0aGlzLnJldHJpZXZlRm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyh2ZXJ0ZXgpLFxuICAgICAgICAgIGxhc3RGb3J3YXJkc1JlYWNoYWJsZVZlcnRleCA9IGxhc3QoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyksXG4gICAgICAgICAgdmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSAodmVydGV4ID09PSBsYXN0Rm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEZvcndhcmRzUmVhY2hhYmxlO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIHJldHJpZXZlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCksXG4gICAgICAgICAgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwgPSB0YWlsKGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB0aGlzLnJldHJpZXZlQmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwgPSB0YWlsKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXNUYWlsLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgcmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKHZlcnRleCA9IG51bGwpIHtcbiAgICBjb25zdCB2ZXJ0ZXhBID0gdmVydGV4LCAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcztcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHZpc2l0ZWRWZXJ0ZXhlczsgIC8vL1xuXG4gICAgcmV0dXJuIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzO1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICBhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIHJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuaW5kZXhPZihpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMsICAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSBbXTtcblxuICAgIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lWZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeVZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJJbmRleGVzKGluZGV4ZXMpIHsgIC8vL1xuICBpbmRleGVzLnNvcnQoKGZpcnN0SW5kZXgsIHNlY29uZEluZGV4KSA9PiB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0SW5kZXggPCBzZWNvbmRJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0SW5kZXggPiBzZWNvbmRJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhlc0Zyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCBpbmRleGVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9KTtcblxuICByZXR1cm4gaW5kZXhlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBDeWNsZSBmcm9tIFwiLi9jeWNsZVwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgb3JkZXJJbmRleGVzLCBpbmRleGVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2luZGV4XCI7XG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXApIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleE5hcCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhNYXA7XG4gIH1cblxuICBnZXRWZXJ0ZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhlcyA9IHZlcnRleE1hcFZhbHVlczsgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4ZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBLZXlzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TWFwS2V5czsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgLy8vXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMob3JkZXJlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiBvcmRlcmVkVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0ZXhQcmVzZW50ID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZXMgPSBbXSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gc291cmNlVmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgdGFyZ2V0VmVydGV4TmFtZXMuZm9yRWFjaCgodGFyZ2V0VmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgc291cmNlVmVydGV4TmFtZXMuZm9yRWFjaCgoc291cmNlVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuXG4gICAgY29uc3QgY3ljbGVzUHJlc2VudCA9IHRoaXMuYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gdGhpcy5nZXRDeWNsaWNFZGdlcygpLFxuICAgICAgICAgICAgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QoY3ljbGljRWRnZXMpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGZpcnN0Q3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGZpcnN0Q3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpOyAgLy8vXG5cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gY3ljbGU7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHRhcmdldFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgICBjeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc291cmNlVmVydGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGljRWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSB2ZXJ0ZXhlcy5zb21lKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgIGN5Y2xpY0VkZ2VQcmVzZW50ID0gdmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VmVydGV4SW5kZXggPCBzb3VyY2VWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGN5Y2xpY0VkZ2VQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgaWYgKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KSB7XG4gICAgICAgIHZlcnRleC5kZWNyZW1lbnRJbmRleCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgYWRkVmVydGV4ZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpIHtcbiAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKCFlZGdlUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlID0gdGFyZ2V0VmVydGV4LmlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUoc291cmNlVmVydGV4KTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCksXG4gICAgICAgICAgYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlclZlcnRleGVzKGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgY29uc3QgcmVhY2hhYmxlVmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5iYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyxcbiAgICAgICAgICAgIC4uLmZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlYWNoYWJsZUluZGV4ZXMgPSBpbmRleGVzRnJvbVZlcnRleGVzKHJlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVySW5kZXhlcyhyZWFjaGFibGVJbmRleGVzKTtcblxuICAgIHJlYWNoYWJsZVZlcnRleGVzLmZvckVhY2goKHJlYWNoYWJsZVZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJlYWNoYWJsZUluZGV4ID0gcmVhY2hhYmxlSW5kZXhlc1tpbmRleF07XG5cbiAgICAgIGluZGV4ID0gcmVhY2hhYmxlSW5kZXg7IC8vL1xuXG4gICAgICByZWFjaGFibGVWZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgZWRnZXMgPSBjeWNsaWNFZGdlczsgIC8vL1xuXG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlID0gdGFyZ2V0VmVydGV4LmlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUoc291cmNlVmVydGV4KTtcblxuICAgICAgaWYgKCFzb3VyY2VWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSkge1xuICAgICAgICB0aGlzLnJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaCh2ZXJ0ZXhNYXApO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkZ2UgfSBmcm9tIFwiLi9lZGdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN5Y2xlIH0gZnJvbSBcIi4vY3ljbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVydGV4IH0gZnJvbSBcIi4vdmVydGV4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9kaXJlY3RlZEdyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVkZ2UsIERpcmVjdGVkR3JhcGggfSBmcm9tIFwiLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IGVkZ2UxID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL2Vhc3ktd2l0aC1zdHlsZVwiLCBcIi4vZWFzeS1sYXlvdXRcIiksXG4gICAgICBlZGdlMiA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi93aXRoLXN0eWxlXCIsIFwiLi9lYXN5LXdpdGgtc3R5bGVcIiksXG4gICAgICBlZGdlMyA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi9lYXN5LWxheW91dFwiLCBcIi4vb2NjYW0tbGV4ZXJzXCIpLFxuICAgICAgZWRnZTQgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKSxcbiAgICAgIGVkZ2U1ID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL29jY2FtLWxleGVyc1wiLCBcIi4vd2l0aC1zdHlsZVwiKTtcblxuY29uc3QgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UxKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlMik7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTMpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2U0KTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlNSk7XG5cbmRpcmVjdGVkR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKFwiLi9vY2NhbS1sZXhlcnNcIik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUE7Ozs7O21DQUVBLFdBQUE7OztlQUFxQjs7O0FBQU4scUJBQU07TUFDbkIsWUFBWSxrQkFBa0Isa0JBQWtCO0FBQzlDLGFBQUssbUJBQW1CO0FBQ3hCLGFBQUssbUJBQW1COztNQUcxQixzQkFBc0I7QUFDcEIsZUFBTyxLQUFLOztNQUdkLHNCQUFzQjtBQUNwQixlQUFPLEtBQUs7O01BR2QsTUFBTSxNQUFNO0FBQ1YsY0FBTSxtQkFBbUIsS0FBSyx1QkFDeEIsbUJBQW1CLEtBQUssdUJBQ3hCLFVBQVksS0FBSyxxQkFBcUIsb0JBQXNCLEtBQUsscUJBQXFCO0FBRTVGLGVBQU87O01BR1QsZ0JBQWdCLFlBQVk7QUFDMUIsY0FBTSxVQUFZLEtBQUsscUJBQXFCLGNBQWdCLEtBQUsscUJBQXFCO0FBRXRGLGVBQU87O01BR1Qsc0JBQXNCLGtCQUFrQjtBQUN0QyxjQUFNLFVBQVcsS0FBSyxxQkFBcUI7QUFFM0MsZUFBTzs7TUFHVCxzQkFBc0Isa0JBQWtCO0FBQ3RDLGNBQU0sVUFBVyxLQUFLLHFCQUFxQjtBQUUzQyxlQUFPOztNQUdULGlCQUFpQixrQkFBa0Isa0JBQWtCO0FBQ25ELGNBQU0sVUFBWSxLQUFLLHFCQUFxQixvQkFBc0IsS0FBSyxxQkFBcUI7QUFFNUYsZUFBTzs7YUFHRix3Q0FBd0Msa0JBQWtCLGtCQUFrQjtBQUNqRixjQUFNLE9BQU8sSUFBSSxLQUFLLGtCQUFrQjtBQUV4QyxlQUFPOzs7Ozs7QUNuRFg7Ozs7Ozs7Ozs7Ozs7VUFFZ0IsZ0JBQUE7ZUFBQTs7VUFpQkEsMEJBQUE7ZUFBQTs7O0FBakJULDJCQUF1QixVQUFRO0FBQ3BDLGVBQVMsS0FBSyxDQUFDLGFBQWEsaUJBQUE7QUFDMUIsY0FBTSxtQkFBbUIsWUFBWSxZQUMvQixvQkFBb0IsYUFBYTtBQUV2QyxZQUFJLE9BQU87bUJBRUEsbUJBQW1CLG1CQUFtQjtBQUMvQyxpQkFBTzttQkFDRyxtQkFBbUIsbUJBQW1CO0FBQ2hELGlCQUFPO2VBQ0Y7QUFDTCxpQkFBTzs7OztBQUtOLHFDQUFpQyxVQUFRO0FBQzlDLFlBQU0sY0FBYyxTQUFTLElBQUksQ0FBQyxXQUFBO0FBQ2hDLGNBQU0sYUFBYSxPQUFPO0FBRTFCLGVBQU87O0FBR1QsYUFBTzs7Ozs7QUMxQlQ7Ozs7O21DQUlBLFdBQUE7OztlQUFxQjs7OztBQUFOLHNCQUFNO01BQ25CLFlBQVksYUFBYTtBQUN2QixhQUFLLGNBQWM7O01BR3JCLGlCQUFpQjtBQUNmLGVBQU8sS0FBSzs7YUFHUCx1Q0FBdUMsY0FBYyxxQkFBcUI7QUFDL0UsY0FBTSxXQUFXO2FBQ047VUFDSDtXQUVGLGNBQWMsSUFBQSxRQUFBLHlCQUF3QixXQUN0QyxRQUFRLElBQUksTUFBTTtBQUV4QixlQUFPOzs7Ozs7QUNyQlg7Ozs7Ozs7Ozs7Ozs7VUFHYSxjQUFBO2VBQUE7O1VBR0EsY0FBQTtlQUFBOztVQUNBLGNBQUE7ZUFBQTs7VUFIQSxhQUFBO2VBQUE7O1VBRkEsY0FBQTtlQUFBOztVQUdBLGdCQUFBO2VBQUE7O1VBSWIsVUFBQTtlQUFBOzs7QUFQTyxRQUFNLGNBQWM7QUFDcEIsUUFBTSxjQUFjO0FBQ3BCLFFBQU0sYUFBYTtBQUNuQixRQUFNLGdCQUFnQjtBQUN0QixRQUFNLGNBQWM7QUFDcEIsUUFBTSxjQUFjO1FBRTNCLFdBQWU7TUFDYjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7Ozs7O0FDZkY7Ozs7Ozs7Ozs7Ozs7VUFLYSxnQkFBQTtlQUFBOztVQUhBLGFBQUE7ZUFBQTs7VUFJQSxpQkFBQTtlQUFBOztVQUZBLGVBQUE7ZUFBQTs7VUFEQSxjQUFBO2VBQUE7O1VBS2IsVUFBQTtlQUFBOzs7QUFOTyxRQUFNLGFBQWE7QUFDbkIsUUFBTSxjQUFjO0FBQ3BCLFFBQU0sZUFBZTtBQUNyQixRQUFNLGdCQUFnQjtBQUN0QixRQUFNLGlCQUFpQjtRQUU5QixXQUFlO01BQ2I7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7QUNiRjs7Ozs7Ozs7Ozs7OztVQUdhLGdCQUFBO2VBQUE7O1VBV0Esc0NBQUE7ZUFBQTs7VUFEQSxzQ0FBQTtlQUFBOztVQURBLHFDQUFBO2VBQUE7O1VBR0EsdUNBQUE7ZUFBQTs7VUFSQSx1QkFBQTtlQUFBOztVQUNBLHVCQUFBO2VBQUE7O1VBR0EsNkJBQUE7ZUFBQTs7VUFGQSx3QkFBQTtlQUFBOztVQUhBLHNCQUFBO2VBQUE7O1VBRkEsa0JBQUE7ZUFBQTs7VUFGQSxnQkFBQTtlQUFBOztVQVFBLDJCQUFBO2VBQUE7O1VBTEEsb0JBQUE7ZUFBQTs7VUFZYixVQUFBO2VBQUE7OztBQWZPLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sb0JBQW9CO0FBQzFCLFFBQU0sc0JBQXNCO0FBQzVCLFFBQU0sdUJBQXVCO0FBQzdCLFFBQU0sdUJBQXVCO0FBQzdCLFFBQU0sd0JBQXdCO0FBQzlCLFFBQU0sMkJBQTJCO0FBQ2pDLFFBQU0sNkJBQTZCO0FBQ25DLFFBQU0scUNBQXFDO0FBQzNDLFFBQU0sc0NBQXNDO0FBQzVDLFFBQU0sc0NBQXNDO0FBQzVDLFFBQU0sdUNBQXVDO1FBRXBELFdBQWU7TUFDYjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOzs7OztBQy9CRjs7Ozs7Ozs7Ozs7OztVQVNhLHNCQUFBO2VBQUE7O1VBQ0Esc0JBQUE7ZUFBQTs7VUFDQSx1QkFBQTtlQUFBOztVQUhBLG9CQUFBO2VBQUE7O1VBREEscUJBQUE7ZUFBQTs7VUFEQSxrQkFBQTtlQUFBOztVQUZBLGlCQUFBO2VBQUE7O1VBQ0Esa0JBQUE7ZUFBQTs7VUFGQSxpQkFBQTtlQUFBOztVQURBLGVBQUE7ZUFBQTs7VUFXYixVQUFBO2VBQUE7OztBQVhPLFFBQU0sZUFBZTtBQUNyQixRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGtCQUFrQjtBQUN4QixRQUFNLGtCQUFrQjtBQUN4QixRQUFNLHFCQUFxQjtBQUMzQixRQUFNLG9CQUFvQjtBQUMxQixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLHVCQUF1QjtRQUVwQyxXQUFlO01BQ2I7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7Ozs7O0FDdkJGOzs7Ozs7Ozs7Ozs7O1VBSWEsa0JBQUE7ZUFBQTs7VUFGQSxnQkFBQTtlQUFBOztVQUNBLGlCQUFBO2VBQUE7O1VBR2IsVUFBQTtlQUFBOzs7QUFKTyxRQUFNLGdCQUFnQjtBQUN0QixRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGtCQUFrQjtRQUUvQixXQUFlO01BQ2I7TUFDQTtNQUNBOzs7OztBQ1RGOzs7Ozs7Ozs7Ozs7O1VBc0JhLHNCQUFBO2VBQUE7O1VBSkEscUJBQUE7ZUFBQTs7VUFLQSxzQkFBQTtlQUFBOztVQUNBLHNCQUFBO2VBQUE7O1VBSkEscUJBQUE7ZUFBQTs7VUFoQkEsZ0JBQUE7ZUFBQTs7VUF5QkEsNEJBQUE7ZUFBQTs7VUFEQSw0QkFBQTtlQUFBOztVQUlBLGtDQUFBO2VBQUE7O1VBRUEsbUNBQUE7ZUFBQTs7VUFyQkEsa0JBQUE7ZUFBQTs7VUFEQSxrQkFBQTtlQUFBOztVQUlBLG1CQUFBO2VBQUE7O1VBVEEsaUJBQUE7ZUFBQTs7VUFRQSxtQkFBQTtlQUFBOztVQVBBLGlCQUFBO2VBQUE7O1VBU0EsbUJBQUE7ZUFBQTs7VUFkQSxnQkFBQTtlQUFBOztVQTJCQSw2QkFBQTtlQUFBOztVQUpBLDBCQUFBO2VBQUE7O1VBckJBLGdCQUFBO2VBQUE7O1VBSUEsaUJBQUE7ZUFBQTs7VUFZQSxxQkFBQTtlQUFBOztVQU1BLDRCQUFBO2VBQUE7O1VBSUEsa0NBQUE7ZUFBQTs7VUFFQSxtQ0FBQTtlQUFBOztVQW5CQSxtQkFBQTtlQUFBOztVQVJBLGlCQUFBO2VBQUE7O1VBbUJBLDBCQUFBO2VBQUE7O1VBZkEsa0JBQUE7ZUFBQTs7VUFDQSxrQkFBQTtlQUFBOztVQVRBLGVBQUE7ZUFBQTs7VUFpQkEscUJBQUE7ZUFBQTs7VUFpQmIsVUFBQTtlQUFBOzs7QUFsQ08sUUFBTSxlQUFlO0FBQ3JCLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0scUJBQXFCO0FBQzNCLFFBQU0scUJBQXFCO0FBQzNCLFFBQU0scUJBQXFCO0FBQzNCLFFBQU0scUJBQXFCO0FBQzNCLFFBQU0sc0JBQXNCO0FBQzVCLFFBQU0sc0JBQXNCO0FBQzVCLFFBQU0sc0JBQXNCLE9BQU8sYUFBYTtBQUNoRCxRQUFNLDBCQUEwQjtBQUNoQyxRQUFNLDBCQUEwQjtBQUNoQyxRQUFNLDRCQUE0QjtBQUNsQyxRQUFNLDRCQUE0QjtBQUNsQyxRQUFNLDRCQUE0QjtBQUNsQyxRQUFNLDZCQUE2QjtBQUNuQyxRQUFNLGtDQUFrQztBQUN4QyxRQUFNLGtDQUFrQztBQUN4QyxRQUFNLG1DQUFtQztBQUN6QyxRQUFNLG1DQUFtQztRQUVoRCxXQUFlO01BQ2I7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOzs7OztBQ3JFRjs7Ozs7Ozs7Ozs7OztVQVdhLDhCQUFBO2VBQUE7O1VBQ0EsOEJBQUE7ZUFBQTs7VUFOQSwyQkFBQTtlQUFBOztVQURBLDBCQUFBO2VBQUE7O1VBR0EsNEJBQUE7ZUFBQTs7VUFKQSx3QkFBQTtlQUFBOztVQWdCQSx3Q0FBQTtlQUFBOztVQUhBLHFDQUFBO2VBQUE7O1VBSEEsaUNBQUE7ZUFBQTs7VUFMQSw0QkFBQTtlQUFBOztVQUNBLDZCQUFBO2VBQUE7O1VBUEEscUJBQUE7ZUFBQTs7VUFZQSxrQ0FBQTtlQUFBOztVQVJBLDRCQUFBO2VBQUE7O1VBV0Esc0NBQUE7ZUFBQTs7VUFGQSxvQ0FBQTtlQUFBOztVQUhBLCtCQUFBO2VBQUE7O1VBTUEsdUNBQUE7ZUFBQTs7VUFqQkEscUJBQUE7ZUFBQTs7VUFxQmIsVUFBQTtlQUFBOzs7QUFyQk8sUUFBTSxxQkFBcUI7QUFDM0IsUUFBTSxxQkFBcUI7QUFDM0IsUUFBTSx3QkFBd0I7QUFDOUIsUUFBTSwwQkFBMEI7QUFDaEMsUUFBTSwyQkFBMkI7QUFDakMsUUFBTSw0QkFBNEI7QUFDbEMsUUFBTSw0QkFBNEI7QUFDbEMsUUFBTSw0QkFBNEI7QUFDbEMsUUFBTSw2QkFBNkI7QUFDbkMsUUFBTSw4QkFBOEI7QUFDcEMsUUFBTSw4QkFBOEI7QUFDcEMsUUFBTSwrQkFBK0I7QUFDckMsUUFBTSxpQ0FBaUM7QUFDdkMsUUFBTSxrQ0FBa0M7QUFDeEMsUUFBTSxvQ0FBb0M7QUFDMUMsUUFBTSxxQ0FBcUM7QUFDM0MsUUFBTSxzQ0FBc0M7QUFDNUMsUUFBTSx1Q0FBdUM7QUFDN0MsUUFBTSx3Q0FBd0M7UUFHckQsV0FBZTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOzs7OztBQzFDRjs7Ozs7Ozs7Ozs7OztVQVNhLDhDQUFBO2VBQUE7O1VBTEEsZ0NBQUE7ZUFBQTs7VUFHQSx3Q0FBQTtlQUFBOztVQUdBLDREQUFBO2VBQUE7O1VBRkEsOENBQUE7ZUFBQTs7VUFIQSx1Q0FBQTtlQUFBOztVQUhBLHlCQUFBO2VBQUE7O1VBSUEsd0NBQUE7ZUFBQTs7VUFIQSwwQkFBQTtlQUFBOztVQVNiLFVBQUE7ZUFBQTs7O0FBVk8sUUFBTSx5QkFBeUI7QUFDL0IsUUFBTSwwQkFBMEI7QUFDaEMsUUFBTSxnQ0FBZ0M7QUFDdEMsUUFBTSx1Q0FBdUM7QUFDN0MsUUFBTSx3Q0FBd0M7QUFDOUMsUUFBTSx3Q0FBd0M7QUFDOUMsUUFBTSw4Q0FBOEM7QUFDcEQsUUFBTSw4Q0FBOEM7QUFDcEQsUUFBTSw0REFBNEQ7UUFFekUsV0FBZTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7QUNyQkY7Ozs7Ozs7Ozs7Ozs7VUFXYSxpQ0FBQTtlQUFBOztVQUNBLGlDQUFBO2VBQUE7O1VBTkEsOEJBQUE7ZUFBQTs7VUFEQSw2QkFBQTtlQUFBOztVQUdBLCtCQUFBO2VBQUE7O1VBSkEsMkJBQUE7ZUFBQTs7VUFnQkEsMkNBQUE7ZUFBQTs7VUFIQSx3Q0FBQTtlQUFBOztVQUhBLG9DQUFBO2VBQUE7O1VBTEEsK0JBQUE7ZUFBQTs7VUFDQSxnQ0FBQTtlQUFBOztVQVBBLHdCQUFBO2VBQUE7O1VBWUEscUNBQUE7ZUFBQTs7VUFSQSwrQkFBQTtlQUFBOztVQVdBLHlDQUFBO2VBQUE7O1VBRkEsdUNBQUE7ZUFBQTs7VUFIQSxrQ0FBQTtlQUFBOztVQU1BLDBDQUFBO2VBQUE7O1VBakJBLHdCQUFBO2VBQUE7O1VBb0JiLFVBQUE7ZUFBQTs7O0FBcEJPLFFBQU0sd0JBQXdCO0FBQzlCLFFBQU0sd0JBQXdCO0FBQzlCLFFBQU0sMkJBQTJCO0FBQ2pDLFFBQU0sNkJBQTZCO0FBQ25DLFFBQU0sOEJBQThCO0FBQ3BDLFFBQU0sK0JBQStCO0FBQ3JDLFFBQU0sK0JBQStCO0FBQ3JDLFFBQU0sK0JBQStCO0FBQ3JDLFFBQU0sZ0NBQWdDO0FBQ3RDLFFBQU0saUNBQWlDO0FBQ3ZDLFFBQU0saUNBQWlDO0FBQ3ZDLFFBQU0sa0NBQWtDO0FBQ3hDLFFBQU0sb0NBQW9DO0FBQzFDLFFBQU0scUNBQXFDO0FBQzNDLFFBQU0sdUNBQXVDO0FBQzdDLFFBQU0sd0NBQXdDO0FBQzlDLFFBQU0seUNBQXlDO0FBQy9DLFFBQU0sMENBQTBDO0FBQ2hELFFBQU0sMkNBQTJDO1FBRXhELFdBQWU7TUFDYjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7QUN6Q0Y7Ozs7Ozs7Ozs7Ozs7VUFPYSxVQUFBO2VBQUE7O1VBSkEsT0FBQTtlQUFBOztVQUtBLFVBQUE7ZUFBQTs7VUFJQSxlQUFBO2VBQUE7O1VBREEsZUFBQTtlQUFBOztVQURBLGNBQUE7ZUFBQTs7VUFOQSxRQUFBO2VBQUE7O1VBS0EsV0FBQTtlQUFBOztVQUhBLFNBQUE7ZUFBQTs7VUFPQSxlQUFBO2VBQUE7O1VBUkEsU0FBQTtlQUFBOztVQUhBLE9BQUE7ZUFBQTs7O0FBQU4sUUFBTSxPQUFPO0FBQ2IsUUFBTSxPQUFPO0FBQ2IsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFdBQVc7QUFDakIsUUFBTSxjQUFjO0FBQ3BCLFFBQU0sZUFBZTtBQUNyQixRQUFNLGVBQWU7QUFDckIsUUFBTSxlQUFlOzs7O0FDYjVCOzs7Ozs7Ozs7Ozs7O1VBeVdnQixVQUFBO2VBQUE7O1VBM1RBLE9BQUE7ZUFBQTs7VUEwWkEsaUJBQUE7ZUFBQTs7VUE1REEsZ0JBQUE7ZUFBQTs7VUEwSUEscUJBQUE7ZUFBQTs7VUF6QkEsbUJBQUE7ZUFBQTs7VUF4QkEsa0JBQUE7ZUFBQTs7VUEzREEsZ0JBQUE7ZUFBQTs7VUE1V0EsUUFBQTtlQUFBOztVQXdSQSxVQUFBO2VBQUE7O1VBclBBLFVBQUE7ZUFBQTs7VUE0TkEsV0FBQTtlQUFBOztVQXZRQSxTQUFBO2VBQUE7O1VBY0EsT0FBQTtlQUFBOztVQTBEQSxZQUFBO2VBQUE7O1VBdWFoQixVQUFBO2VBQUE7O1VBcmhCZ0IsU0FBQTtlQUFBOztVQW9CQSxhQUFBO2VBQUE7O1VBbVBBLFVBQUE7ZUFBQTs7VUE3UUEsUUFBQTtlQUFBOztVQW9CQSxZQUFBO2VBQUE7O1VBaU5BLFNBQUE7ZUFBQTs7VUEzQ0EsT0FBQTtlQUFBOztVQWxNQSxRQUFBO2VBQUE7O1VBb0JBLFlBQUE7ZUFBQTs7VUFtYUEsZ0JBQUE7ZUFBQTs7VUE1REEsZUFBQTtlQUFBOztVQTBJQSxvQkFBQTtlQUFBOztVQXBCQSxrQkFBQTtlQUFBOztVQTVCQSxpQkFBQTtlQUFBOztVQTVEQSxlQUFBO2VBQUE7O1VBblpBLFNBQUE7ZUFBQTs7VUFvQkEsYUFBQTtlQUFBOztVQW9CQSxRQUFBO2VBQUE7O1VBTkEsT0FBQTtlQUFBOztVQUZBLE9BQUE7ZUFBQTs7VUFxQ0EsUUFBQTtlQUFBOztVQUZBLFFBQUE7ZUFBQTs7VUF6REEsUUFBQTtlQUFBOztVQW9CQSxZQUFBO2VBQUE7O1VBc1FBLFFBQUE7ZUFBQTs7VUExQ0EsUUFBQTtlQUFBOztVQWhOQSxPQUFBO2VBQUE7O1VBZ0tBLFVBQUE7ZUFBQTs7VUE5REEsVUFBQTtlQUFBOztVQTZNQSxVQUFBO2VBQUE7O1VBN1ZBLFNBQUE7ZUFBQTs7VUFvQkEsYUFBQTtlQUFBOztVQTJWQSxXQUFBO2VBQUE7O1VBcldBLFVBQUE7ZUFBQTs7VUFvQkEsY0FBQTtlQUFBOztVQXRCQSxRQUFBO2VBQUE7O1VBb0JBLFlBQUE7ZUFBQTs7VUF3TUEsU0FBQTtlQUFBOztVQTVMQSxPQUFBO2VBQUE7O1VBeEJBLFFBQUE7ZUFBQTs7VUFkQSxRQUFBO2VBQUE7O1VBb0JBLFlBQUE7ZUFBQTs7VUEwQkEsVUFBQTtlQUFBOzs7QUFsRFQsbUJBQWUsT0FBSztBQUFJLGFBQU8sTUFBTTs7QUFFckMsb0JBQWdCLE9BQUs7QUFBSSxhQUFPLE1BQU07O0FBRXRDLG1CQUFlLE9BQUs7QUFBSSxhQUFPLE1BQU07O0FBRXJDLG9CQUFnQixPQUFLO0FBQUksYUFBTyxNQUFNOztBQUV0QyxtQkFBZSxPQUFLO0FBQUksYUFBTyxNQUFNOztBQUVyQyxtQkFBZSxPQUFLO0FBQUksYUFBTyxNQUFNOztBQUVyQyxxQkFBaUIsT0FBSztBQUFJLGFBQU8sTUFBTTs7QUFFdkMsb0JBQWdCLE9BQUs7QUFBSSxhQUFPLE1BQU07O0FBRXRDLG1CQUFlLE9BQUs7QUFBSSxhQUFPLE1BQU07O0FBRXJDLG1CQUFlLE9BQUs7QUFBSSxhQUFPLE1BQU07O0FBRXJDLHVCQUFtQixPQUFLO0FBQUksYUFBTyxNQUFNLE1BQU0sU0FBUzs7QUFFeEQsd0JBQW9CLE9BQUs7QUFBSSxhQUFPLE1BQU0sTUFBTSxTQUFTOztBQUV6RCx1QkFBbUIsT0FBSztBQUFJLGFBQU8sTUFBTSxNQUFNLFNBQVM7O0FBRXhELHdCQUFvQixPQUFLO0FBQUksYUFBTyxNQUFNLE1BQU0sU0FBUzs7QUFFekQsdUJBQW1CLE9BQUs7QUFBSSxhQUFPLE1BQU0sTUFBTSxTQUFTOztBQUV4RCx1QkFBbUIsT0FBSztBQUFJLGFBQU8sTUFBTSxNQUFNLFNBQVM7O0FBRXhELHlCQUFxQixPQUFLO0FBQUksYUFBTyxNQUFNLE1BQU0sU0FBUzs7QUFFMUQsd0JBQW9CLE9BQUs7QUFBSSxhQUFPLE1BQU0sTUFBTSxTQUFTOztBQUV6RCx1QkFBbUIsT0FBSztBQUFJLGFBQU8sTUFBTSxNQUFNLFNBQVM7O0FBRXhELGtCQUFjLE9BQUs7QUFBSSxhQUFPLE1BQU0sTUFBTSxTQUFTOztBQUVuRCxrQkFBYyxPQUFLO0FBQUksYUFBTyxNQUFNLE1BQU0sR0FBRzs7QUFFN0Msa0JBQWMsT0FBSztBQUFJLGFBQU8sTUFBTSxNQUFNOztBQUUxQyxrQkFBYyxPQUFLO0FBQUksYUFBTyxNQUFNLE1BQU0sTUFBTSxTQUFTOztBQUV6RCxtQkFBZSxPQUFLO0FBQUksYUFBTyxNQUFNLE1BQU0sR0FBRyxLQUFLLElBQUksR0FBRyxNQUFNLFNBQVM7O0FBRXpFLGtCQUFjLFFBQVEsUUFBTTtBQUFJLFlBQU0sVUFBVSxLQUFLLE1BQU0sUUFBUTs7QUFFbkUscUJBQWlCLFFBQVEsUUFBTTtBQUFJLFlBQU0sVUFBVSxRQUFRLE1BQU0sUUFBUTs7QUFFekUsb0JBQWdCLFFBQVEsaUJBQWU7QUFDNUMsWUFBTSxTQUFVLDJCQUEyQixRQUN6QixrQkFDQztRQUFFOztBQUVyQixXQUFLLFFBQVE7O0FBR1IsbUJBQWUsT0FBSztBQUN6QixZQUFNLFFBQVE7QUFFZCxhQUFPLE1BQU0sT0FBTzs7QUFHZixrQkFBYyxRQUFRLFFBQU07QUFDakMsWUFBTSxRQUFRLEdBQ1IsY0FBYyxPQUFPO0FBRTNCLGFBQU8sUUFBUSxPQUFPLGFBQWE7O0FBRzlCLG1CQUFlLFFBQVEsUUFBTTtBQUFJLFlBQU0sVUFBVSxLQUFLLE1BQU0sUUFBUTs7QUFFcEUsbUJBQWUsUUFBUSxRQUFRLFVBQVE7QUFDNUMsVUFBSSxVQUFVO0FBRWQsWUFBTSxlQUFlLE9BQU8sUUFDdEIsZUFBZSxPQUFPO0FBRTVCLFVBQUksaUJBQWlCLGNBQWM7QUFDakMsa0JBQVUsT0FBTyxNQUFNLENBQUMsVUFBVSxVQUFBO0FBQ2hDLGdCQUFNLFdBQVcsT0FBTyxRQUNsQixTQUFTLFNBQVMsVUFBVSxVQUFVO0FBRTVDLGNBQUksUUFBUTtBQUNWLG1CQUFPOzs7O0FBS2IsYUFBTzs7QUFHRixxQkFBaUIsUUFBUSxRQUFRLFVBQVE7QUFDOUMsVUFBSSxVQUFVO0FBRWQsWUFBTSxlQUFlLE9BQU8sUUFDdEIsZUFBZSxPQUFPO0FBRTVCLFVBQUksaUJBQWlCLGNBQWM7QUFDakMsaUJBQVM7YUFDSjs7QUFHTCxrQkFBVSxPQUFPLE1BQU0sQ0FBQyxVQUFVLFVBQUE7QUFDaEMsZ0JBQU0sV0FBVyxRQUFRLFFBQVEsQ0FBQyxjQUFBO0FBQ2hDLGtCQUFNLFNBQVMsU0FBUyxVQUFVO0FBRWxDLGdCQUFJLFFBQVE7QUFDVixxQkFBTzs7Z0JBRUw7QUFFTixjQUFJLGFBQWEsTUFBTTtBQUNyQixtQkFBTzs7OztBQUtiLGFBQU87O0FBR0YsdUJBQW1CLFFBQVEsUUFBUSxVQUFRO0FBQ2hELGVBQVM7V0FDSjs7QUFHTCxZQUFNLGFBQWEsT0FBTyxNQUFNLENBQUMsYUFBQTtBQUMvQixjQUFNLFdBQVcsUUFBUSxRQUFRLENBQUMsY0FBQTtBQUNoQyxnQkFBTSxTQUFTLFNBQVMsVUFBVTtBQUVsQyxjQUFJLFFBQVE7QUFDVixtQkFBTzs7Y0FFTDtBQUVOLFlBQUksYUFBYSxNQUFNO0FBQ3JCLGlCQUFPOzs7QUFJWCxhQUFPOztBQUdGLHFCQUFpQixRQUFRLFFBQVEsVUFBUTtBQUM5QyxVQUFJO0FBRUosZUFBUztXQUNKOztBQUdMLGlCQUFTO0FBQ1AsY0FBTSxnQkFBZSxPQUFPO0FBRTVCLFlBQUksa0JBQWlCLEdBQUc7QUFDdEI7O0FBR0YsWUFBSSxZQUFXO0FBRWYsZUFBTyxRQUFRLENBQUMsYUFBQTtBQUNkLGdCQUFNLFNBQVMsU0FBUztBQUV4QixjQUFJLFFBQVE7QUFDVixrQkFBTSxXQUFXO0FBRWpCLG1CQUFPLEtBQUs7QUFFWix3QkFBVzs7O0FBSWYsWUFBSSxDQUFDLFdBQVU7QUFDYjs7QUFHRixlQUFPLFFBQVEsQ0FBQyxhQUFBO0FBQ2QsZ0JBQU0seUJBQXlCLE9BQU8sU0FBUztBQUUvQyxjQUFJLENBQUMsd0JBQXdCO0FBQzNCLG1CQUFPOzs7O0FBS2IsWUFBTSxlQUFlLE9BQU87QUFFNUIsaUJBQVksaUJBQWlCO0FBRTdCLGFBQU87O0FBR0Ysa0JBQWMsT0FBTyxVQUFRO0FBQ2xDLFlBQU0sV0FBVztBQUVqQixzQkFBZ0IsT0FBTyxDQUFDLFNBQVMsVUFBQTtBQUMvQixjQUFNLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUksUUFBUTtBQUNWLG1CQUFTLEtBQUs7OztBQUlsQixhQUFPOztBQUdGLHFCQUFpQixPQUFPLFNBQVMsVUFBUTtBQUM5QyxVQUFJO0FBRUosWUFBTSxRQUFRLE1BQU0sS0FBSyxDQUFDLFVBQVMsVUFBQTtBQUNqQyxjQUFNLFNBQVMsU0FBUyxVQUFTO0FBRWpDLFlBQUksUUFBUTtBQUNWLGtCQUFRO0FBRVIsaUJBQU87OztBQUlYLFVBQUksT0FBTztBQUNULGNBQU0sY0FBYztBQUVwQixjQUFNLE9BQU8sT0FBTyxhQUFhOztBQUduQyxhQUFPOztBQUdGLG9CQUFnQixRQUFRLE9BQU8sY0FBYyxVQUFVLFNBQVMsSUFBRTtBQUN2RSxZQUFNLE9BQU87UUFBRTtRQUFPO1dBQWdCO1NBQ2hDLGtCQUFrQixNQUFNLFVBQVUsT0FBTyxNQUFNLFFBQVE7QUFFN0QsYUFBTzs7QUFHRixvQkFBZ0IsT0FBTyxVQUFRO0FBQ3BDLFlBQU0sa0JBQWtCO0FBRXhCLHVCQUFpQixPQUFPLENBQUMsU0FBUyxVQUFBO0FBQ2hDLGNBQU0sU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxDQUFDLFFBQVE7QUFDWCxnQkFBTSxRQUFRLE9BQ1IsY0FBYyxHQUNkLG1CQUFrQixNQUFNLE9BQU8sT0FBTyxjQUN0QyxzQkFBc0IsTUFBTTtBQUVsQywyQkFBZ0IsUUFBUTs7O0FBSTVCLGFBQU87O0FBR0YsbUJBQWUsT0FBTyxVQUFRO0FBQ25DLFVBQUksaUJBQWlCO0FBRXJCLFlBQU0sS0FBSyxDQUFDLFNBQVMsVUFBQTtBQUNuQixjQUFNLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUksQ0FBQyxRQUFRO0FBQ1gsZ0JBQU0sUUFBUSxPQUNSLGNBQWMsR0FDZCxrQkFBa0IsTUFBTSxPQUFPLE9BQU8sY0FDdEMsc0JBQXNCLE1BQU07QUFFbEMsMkJBQWlCO0FBRWpCLGlCQUFPOzs7QUFJWCxhQUFPOztBQUdGLHFCQUFpQixPQUFPLFVBQVE7QUFDckMsVUFBSSxpQkFBaUI7QUFFckIsWUFBTSxLQUFLLENBQUMsU0FBUyxVQUFBO0FBQ25CLGNBQU0sU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxRQUFRO0FBQ1YsZ0JBQU0sUUFBUSxPQUNSLGNBQWMsR0FDZCxrQkFBa0IsTUFBTSxPQUFPLE9BQU8sY0FDdEMsc0JBQXNCLE1BQU07QUFFbEMsMkJBQWlCO0FBRWpCLGlCQUFPOzs7QUFJWCxhQUFPOztBQUdGLG1CQUFlLE9BQU8sU0FBUyxVQUFRO0FBQzVDLFlBQU0sUUFBUSxNQUFNLEtBQUssQ0FBQyxVQUFTLFVBQUE7QUFDakMsY0FBTSxTQUFTLFNBQVMsVUFBUztBQUVqQyxZQUFJLFFBQVE7QUFDVixpQkFBTzs7O0FBS1gsVUFBSSxPQUFPO0FBQ1QsY0FBTSxLQUFLOztBQUdiLGFBQU87O0FBR0Ysc0JBQWtCLE9BQU8sVUFBUTtBQUN0QyxVQUFJLFNBQVMsR0FDVCxTQUFTLE1BQU07QUFFbkIsYUFBTyxTQUFTLFFBQVE7QUFDdEIsY0FBTSxXQUFXLE1BQU07QUFFdkIsaUJBQVMsU0FBUyxTQUFTLEdBQUcsU0FBUyxRQUFRLFVBQVU7QUFDdkQsZ0JBQU0sV0FBVyxNQUFNLFNBQ2pCLFNBQVMsU0FBUyxVQUFVO0FBRWxDLGNBQUksQ0FBQyxRQUFRO0FBQ1gsa0JBQU0sUUFBUSxRQUNSLGNBQWM7QUFFcEIsa0JBQU0sT0FBTyxPQUFPOzs7QUFJeEI7QUFFQSxpQkFBUyxNQUFNOzs7QUFJWixxQkFBaUIsUUFBUSxRQUFRLFVBQVE7QUFDOUMsWUFBTSxRQUFRO1dBQ1Q7V0FDQTs7QUFHTCxlQUFTLE9BQU87QUFFaEIsYUFBTzs7QUFHRixxQkFBaUIsT0FBSztBQUMzQixjQUFRO1dBQ0g7UUFDSDtBQUVGLGFBQU87O0FBR0YscUJBQWlCLFFBQVEsUUFBUSxVQUFRO0FBQzlDLGFBQU8sUUFBUSxDQUFDLFNBQVMsVUFBQTtBQUN2QixjQUFNLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUksUUFBUTtBQUNWLGlCQUFPLEtBQUs7Ozs7QUFLWCxzQkFBa0IsT0FBTyxRQUFRLFFBQVEsVUFBUTtBQUN0RCxZQUFNLFFBQVEsQ0FBQyxTQUFTLFVBQUE7QUFDdEIsY0FBTSxTQUFTLFNBQVMsU0FBUztBQUVqQyxpQkFDRSxPQUFPLEtBQUssV0FDVixPQUFPLEtBQUs7OztBQUliLDBCQUFzQixPQUFPLFVBQVE7QUFDMUMsWUFBTSxjQUFjLE1BQU07QUFFMUIsZUFBUyxRQUFRLEdBQUcsUUFBUSxhQUFhLFNBQVM7QUFDaEQsY0FBTSxVQUFVLE1BQU0sUUFDaEIsU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxRQUFRO0FBQ1YsaUJBQU87OztBQUlYLGFBQU87O0FBR0YsMkJBQXVCLE9BQU8sVUFBUTtBQUMzQyxZQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsY0FBYyxHQUFHLFNBQVMsR0FBRyxTQUFTO0FBQ3JELGNBQU0sVUFBVSxNQUFNLFFBQ2hCLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUksUUFBUTtBQUNWLGlCQUFPOzs7QUFJWCxhQUFPOztBQUdGLDBCQUFzQixPQUFPLFVBQVE7QUFDMUMsWUFBTSxjQUFjLE1BQU07QUFFMUIsZUFBUyxRQUFRLEdBQUcsUUFBUSxhQUFhLFNBQVM7QUFDaEQsY0FBTSxVQUFVLE1BQU0sUUFDaEIsU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxRQUFRO0FBQ1YsaUJBQU87OztBQUlYLGFBQU87O0FBR0YsMkJBQXVCLE9BQU8sVUFBUTtBQUMzQyxZQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsY0FBYyxHQUFHLFNBQVMsR0FBRyxTQUFTO0FBQ3JELGNBQU0sVUFBVSxNQUFNLFFBQ2hCLFNBQVMsU0FBUyxTQUFTO0FBRWpDLFlBQUksUUFBUTtBQUNWLGlCQUFPOzs7QUFJWCxhQUFPOztBQUdGLDJCQUF1QixPQUFPLFVBQVE7QUFDM0MsWUFBTSxjQUFjLE1BQU07QUFFMUIsZUFBUyxRQUFRLEdBQUcsUUFBUSxhQUFhLFNBQVM7QUFDaEQsY0FBTSxVQUFVLE1BQU0sUUFDaEIsU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxDQUFDLFFBQVE7QUFDWCxpQkFBTzs7O0FBSVgsYUFBTzs7QUFHRiw0QkFBd0IsT0FBTyxVQUFRO0FBQzVDLFlBQU0sY0FBYyxNQUFNO0FBRTFCLGVBQVMsUUFBUSxjQUFjLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDckQsY0FBTSxVQUFVLE1BQU0sUUFDaEIsU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxDQUFDLFFBQVE7QUFDWCxpQkFBTzs7O0FBSVgsYUFBTzs7QUFHRiw0QkFBd0IsT0FBTyxVQUFVLGNBQVk7QUFDMUQsVUFBSSxRQUFRO0FBRVosWUFBTSxjQUFjLE1BQU07QUFFMUIsZUFBUyxRQUFRLEdBQUcsUUFBUSxhQUFhLFNBQVM7QUFDaEQsY0FBTSxVQUFVLE1BQU07QUFFdEIsZ0JBQVEsU0FBUyxPQUFPLFNBQVM7O0FBR25DLGFBQU87O0FBR0YsNkJBQXlCLE9BQU8sVUFBVSxjQUFZO0FBQzNELFVBQUksUUFBUTtBQUVaLFlBQU0sY0FBYyxNQUFNO0FBRTFCLGVBQVMsUUFBUSxjQUFjLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDckQsY0FBTSxVQUFVLE1BQU07QUFFdEIsZ0JBQVEsU0FBUyxPQUFPLFNBQVM7O0FBR25DLGFBQU87O0FBR0YsNkJBQXlCLE9BQU8sVUFBUTtBQUM3QyxZQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsR0FBRyxRQUFRLGFBQWEsU0FBUztBQUNoRCxjQUFNLFVBQVUsTUFBTTtBQUV0QixpQkFBUyxTQUFTOzs7QUFJZiw4QkFBMEIsT0FBTyxVQUFRO0FBQzlDLFlBQU0sY0FBYyxNQUFNO0FBRTFCLGVBQVMsUUFBUSxjQUFjLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDckQsY0FBTSxVQUFVLE1BQU07QUFFdEIsaUJBQVMsU0FBUzs7O0FBSWYsK0JBQTJCLE9BQU8sVUFBUTtBQUMvQyxZQUFNLGNBQWMsTUFBTTtBQUUxQixlQUFTLFFBQVEsR0FBRyxRQUFRLGFBQWEsU0FBUztBQUNoRCxjQUFNLFVBQVUsTUFBTSxRQUNoQixTQUFTLFNBQVMsU0FBUztBQUVqQyxZQUFJLFFBQVE7QUFDVixpQkFBTzs7O0FBSVgsYUFBTzs7QUFHRixnQ0FBNEIsT0FBTyxVQUFRO0FBQ2hELFlBQU0sY0FBYyxNQUFNO0FBRTFCLGVBQVMsUUFBUSxjQUFjLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDckQsY0FBTSxVQUFVLE1BQU0sUUFDaEIsU0FBUyxTQUFTLFNBQVM7QUFFakMsWUFBSSxRQUFRO0FBQ1YsaUJBQU87OztBQUlYLGFBQU87O1FBR1QsV0FBZTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7QUM5bEJGOzs7Ozs7Ozs7Ozs7O1VBNEZnQix5QkFBQTtlQUFBOztVQXBEQSxlQUFBO2VBQUE7O1VBaUNBLG1CQUFBO2VBQUE7O1VBbUZoQixVQUFBO2VBQUE7O1VBaklnQixxQkFBQTtlQUFBOztVQXRCQSxhQUFBO2VBQUE7O1VBZ0JBLHFCQUFBO2VBQUE7O1VBUkEsb0JBQUE7ZUFBQTs7VUFvQkEsOEJBQUE7ZUFBQTs7VUErRkEsb0NBQUE7ZUFBQTs7VUFjQSwwQ0FBQTtlQUFBOztVQTVCQSwrQkFBQTtlQUFBOztVQVJBLCtCQUFBO2VBQUE7Ozs7O0FBckdULHdCQUFvQixNQUFJO0FBQzdCLGFBQU8sS0FBSyxRQUFRLE9BQU8sV0FBQSxjQUFjLFFBQVEsT0FBTyxXQUFBO0FBRXhELFlBQU0sV0FBWSxLQUFLLEtBQUssVUFBVTtBQUV0QyxhQUFPOztBQUdGLCtCQUEyQixNQUFJO0FBQ3BDLFlBQU0sV0FBVyxXQUFXLE9BQ3RCLG1CQUFtQixtQkFBbUIsT0FDdEMsa0JBQW1CLFlBQVk7QUFFckMsYUFBTzs7QUFHRixnQ0FBNEIsTUFBSTtBQUNyQyxZQUFNLG1CQUFtQixDQUFDLE1BQU0sS0FBSztBQUVyQyxhQUFPOztBQUdGLGdDQUE0QixNQUFJO0FBQ3JDLFlBQU0sbUJBQW1CLE1BQU0sS0FBSztBQUVwQyxhQUFPOztBQUdGLHlDQUFxQyxhQUFhLGNBQVk7QUFDbkUsWUFBTSxTQUFTLElBQUksT0FBTyxJQUFJLDJCQUN4Qiw0QkFBNEIsT0FBTyxLQUFLO0FBRTlDLGFBQU87O0FBR0YsMEJBQXNCLE1BQU0sY0FBWTtBQUM3QyxVQUFJLGVBQWU7QUFFbkIsWUFBTSxZQUFZLEtBQUssTUFBTSxPQUN2QixvQkFBb0IsYUFBYSxNQUFNO0FBRTdDLFVBQUksY0FDQSx3QkFBd0IsSUFBQSxPQUFBLE9BQU07QUFFbEMsVUFBSSwwQkFBMEIsS0FBSztBQUNqQywwQkFBa0I7O0FBR3BCLDhCQUF3QixJQUFBLE9BQUEsT0FBTTtBQUM5QixxQkFBZSxJQUFBLE9BQUEsTUFBSztBQUVwQixhQUFRLDBCQUEwQixRQUFVLGlCQUFpQixRQUFZO0FBQ3ZFLDBCQUFrQjtBQUNsQixrQkFBVTtBQUVWLGdDQUF3QixJQUFBLE9BQUEsT0FBTTtBQUM5Qix1QkFBZSxJQUFBLE9BQUEsTUFBSzs7QUFHdEIsVUFBSSxpQkFBaUIsUUFBVztBQUM5QixjQUFNLG9CQUFvQixHQUFHLE9BQU8sV0FBVyxPQUFPO0FBRXRELHVCQUFlLGtCQUFrQixLQUFLOztBQUd4QyxhQUFPOztBQUdGLDhCQUEwQixNQUFNLGlCQUFpQixvQkFBa0I7QUFDeEUsVUFBSTtBQUVKLGFBQU8sS0FBSyxRQUFRLE9BQU8sV0FBQTtBQUUzQix5QkFBbUIsR0FBRyxRQUFRO0FBRTlCLFlBQU0sNEJBQTRCLG1CQUFtQjtBQUVyRCxVQUFJLDRCQUE0QixHQUFHO0FBQ2pDLGNBQU0sUUFBTyxrQkFDUCxnQkFBZSxtQkFBbUI7QUFFeEMsMkJBQW1CLGlCQUFpQixPQUFNLGVBQUEsR0FBaUI7O0FBRzdELGFBQU87O0FBR0Ysb0NBQWdDLE1BQUk7QUFDekMsVUFBSSxpQkFBaUI7QUFFckIsWUFBTSxVQUFVLEtBQUssTUFBTTtBQUUzQixVQUFJLFlBQVksTUFBTTtBQUNwQixjQUFNLGNBQWMsSUFBQSxPQUFBLFFBQU87QUFFM0IseUJBQWlCOztBQUduQixhQUFPOztBQUdGLDBDQUFzQyxNQUFJO0FBQy9DLFlBQU0sVUFBVSxLQUFLLE1BQU0sc0JBQ3JCLGNBQWMsSUFBQSxPQUFBLFFBQU8sVUFDckIsdUJBQXVCO0FBRTdCLGFBQU87O0FBR0YsMENBQXNDLE1BQUk7QUFDL0MsVUFBSSx1QkFBdUI7QUFFM0IsWUFBTSxVQUFVLEtBQUssTUFBTTtBQUUzQixVQUFJLFlBQVksTUFBTTtBQUNwQixjQUFNLGNBQWMsSUFBQSxPQUFBLFFBQU87QUFFM0IsK0JBQXVCOztBQUd6QixhQUFPOztBQUdGLCtDQUEyQyxNQUFJO0FBQ3BELFVBQUksNEJBQTRCO0FBRWhDLFlBQU0sVUFBVSxLQUFLLE1BQU07QUFFM0IsVUFBSSxZQUFZLE1BQU07QUFDcEIsY0FBTSxjQUFjLElBQUEsT0FBQSxRQUFPO0FBRTNCLG9DQUE0Qjs7QUFHOUIsYUFBTzs7QUFHRixxREFBaUQsTUFBSTtBQUMxRCxVQUFJLGtDQUFrQztBQUV0QyxZQUFNLFVBQVUsS0FBSyxNQUFNO0FBRTNCLFVBQUksWUFBWSxNQUFNO0FBQ3BCLGNBQU0sY0FBYyxJQUFBLE9BQUEsUUFBTztBQUUzQiwwQ0FBa0M7O0FBR3BDLGFBQU87O1FBR1QsV0FBZTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7QUN4S0Y7Ozs7Ozs7Ozs7Ozs7VUFzR0EsVUFBQTtlQUFBOztVQXJDZ0IsbUJBQUE7ZUFBQTs7VUEzREEsWUFBQTtlQUFBOztVQWdDQSxlQUFBO2VBQUE7O1VBbUNBLHVCQUFBO2VBQUE7O1VBZEEsaUJBQUE7ZUFBQTs7VUFyQ0EsYUFBQTtlQUFBOztVQXVFQSx5QkFBQTtlQUFBOzs7Ozs7QUF2RlQsdUJBQW1CLFNBQVMsTUFBTSxPQUFLO0FBQzVDLFlBQU0sZ0JBQWdCLEtBQUssZUFDckIsZ0JBQWdCLE9BQU8sb0JBQW9CLFVBQzNDLGVBQWUsY0FBYyxLQUFLLENBQUMsa0JBQUE7QUFDakMsY0FBTSx3QkFBd0IsY0FBYTtBQUUzQyxZQUFJLDBCQUEwQixlQUFlO0FBQzNDLGlCQUFPOztZQUVMO0FBRVosVUFBSSxpQkFBaUIsTUFBTTtBQUN6QixnQkFBUSxnQkFBZ0I7OztBQUlyQix3QkFBb0IsU0FBUyxNQUFNLE9BQUs7QUFDN0MsWUFBTSxnQkFBZ0IsS0FBSyxlQUNyQixnQkFBZ0IsT0FBTyxvQkFBb0IsVUFDM0MsZUFBZSxjQUFjLEtBQUssQ0FBQyxrQkFBQTtBQUNqQyxjQUFNLHdCQUF3QixjQUFhO0FBRTNDLFlBQUksMEJBQTBCLGVBQWU7QUFDM0MsaUJBQU87O1lBRUw7QUFFWixVQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGdCQUFRLFFBQVE7OztBQUliLDBCQUFzQixNQUFJO0FBQy9CLFVBQUk7QUFFSixZQUFNLFVBQVUsS0FBSyxNQUFNLHlCQUNyQixjQUFjLElBQUEsT0FBQSxRQUFPLFVBQ3JCLFFBQVEsWUFBWSxRQUFRLFlBQUE7QUFFbEMsVUFBSSxVQUFVLElBQUk7QUFDaEIsY0FBTSxTQUFTLGVBQWU7QUFFOUIsZUFBTyxTQUFTLE1BQU07YUFDakI7QUFDTCxjQUFNLFFBQVEsUUFBUSxHQUNoQixhQUFhLFlBQVksVUFBVTtBQUV6QyxlQUFPLE9BQU87O0FBR2hCLGFBQU87O0FBR0YsNEJBQXdCLE1BQUk7QUFDakMsWUFBTSxTQUFTLGNBQWMsS0FBSztBQUVsQyxhQUFPOztBQUdGLDhCQUEwQixNQUFJO0FBQ25DLFlBQU0sVUFBVSxLQUFLLE1BQU0sMEJBQ3JCLGNBQWMsSUFBQSxPQUFBLFFBQU8sVUFDckIsV0FBVztBQUVqQixhQUFPOztBQUdGLGtDQUE4QixPQUFLO0FBQ3hDLFlBQU0sUUFBUSxPQUFPLEtBQUssUUFDcEIsY0FBYyxNQUFNLFFBQ3BCLFlBQVksY0FBYyxHQUMxQixjQUFjLE1BQU0sT0FBTyxDQUFDLGNBQWEsTUFBTSxVQUFBO0FBQzdDLGNBQU0sUUFBUSxNQUFNLE9BQ2QsY0FBYyxtQkFBbUIsT0FDakMsZUFBZSxtQkFBbUIsUUFDbEMscUJBQXNCLFVBQVUsWUFDVCxZQUFBLHNCQUNFLFdBQUE7QUFFL0Isd0JBQWUsR0FBRyxlQUFlLGVBQWU7QUFFaEQsZUFBTztTQUNOLFdBQUE7QUFFVCxhQUFPOztBQUdGLG9DQUFnQyxNQUFNLEtBQUssT0FBSztBQUNyRCxZQUFNLGNBQWMscUJBQXFCLFFBQ25DLE1BQU8sZ0JBQWdCLFdBQUEsZUFDZixHQUFHLE9BQU8sUUFDUixHQUFHLE9BQU8sT0FBTztBQUVqQyxhQUFPOztRQUdULFdBQWU7TUFDYjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7Ozs7QUM3R0Y7Ozs7Ozs7Ozs7Ozs7VUFvSEEsVUFBQTtlQUFBOztVQXJFZ0IsVUFBQTtlQUFBOztVQW5DQSxTQUFBO2VBQUE7O1VBVkEsU0FBQTtlQUFBOztVQXlFQSxZQUFBO2VBQUE7OztBQXpFVCxvQkFBZ0IsUUFBTTtBQUMzQixVQUFJLFNBQVM7QUFFYixpQkFBVyxLQUFLLFFBQVE7QUFDdEI7O0FBR0YsYUFBTzs7QUFHRixvQkFBZ0IsU0FBUyxTQUFPO0FBQ3JDLFVBQUksYUFBYTtBQUVqQixVQUFJLGNBQWMsR0FDZCxjQUFjO0FBRWxCLFlBQU0scUJBQXFCLFFBQVEsUUFDN0IscUJBQXFCLFFBQVE7QUFFbkMsYUFBUSxjQUFjLHNCQUF3QixjQUFjLG9CQUFxQjtBQUMvRSxjQUFNLGFBQWMsY0FBYyxxQkFDYixRQUFRLFlBQVksZUFDbEIsR0FDakIsYUFBYyxjQUFjLHFCQUNiLFFBQVEsWUFBWSxlQUNsQjtBQUV2QixxQkFBYyxhQUFhO0FBRTNCLFlBQUksZUFBZSxHQUFHO0FBQ3BCOztBQUdGLHVCQUFnQixhQUFhLFFBQ2pCLElBQ0U7QUFFZCx1QkFBZ0IsYUFBYSxRQUNqQixJQUNFOztBQUdoQixhQUFPOztBQUdGLHFCQUFpQixRQUFRLGNBQVk7QUFDMUMsVUFBSSxRQUFRO0FBRVosWUFBTSxxQkFBcUIsYUFBYTtBQUV4QyxVQUFJLHFCQUFxQixHQUFHO0FBQzFCLGNBQU0sa0JBQWtCLE9BQU8sUUFBUTtBQUV2QyxZQUFJLGtCQUFrQixJQUFJO0FBQ3hCLGtCQUFRO0FBRVIsY0FBSSxrQkFBa0I7QUFFdEIsaUJBQU8sa0JBQWtCLGlCQUFpQjtBQUN4QyxrQkFBTSxXQUFXLE9BQU8sV0FBVztBQUVuQywrQkFBcUIsWUFBWSxTQUFZLFlBQVksUUFDcEMsSUFDRTtBQUV2Qjs7OztBQUtOLGFBQU87O0FBR0YsdUJBQW1CLFFBQVEsT0FBTyxNQUFNLFVBQVE7QUFDckQsWUFBTSxvQkFBb0IsT0FBTztBQUVqQyxVQUFJLFFBQVEsR0FDUixhQUFhLEdBQ2IsYUFBYSxtQkFDYixXQUFXO0FBRWYsYUFBTyxhQUFhLG1CQUFtQjtBQUNyQyxZQUFJLFVBQVUsT0FBTztBQUNuQix1QkFBYTs7QUFHZixZQUFJLFVBQVUsS0FBSztBQUNqQixxQkFBVztBQUVYOztBQUdGLGNBQU0sV0FBVyxPQUFPLFdBQVc7QUFFbkMsc0JBQWdCLFlBQVksU0FBWSxZQUFZLFFBQ3BDLElBQ0U7QUFFbEI7O0FBR0YsVUFBSSxVQUFVLE9BQU87QUFDbkIscUJBQWE7O0FBR2YsVUFBSSxVQUFVLEtBQUs7QUFDakIsbUJBQVc7O0FBR2IsWUFBTSxhQUFZLE9BQU8sVUFBVSxZQUFZO0FBRS9DLGFBQU87O1FBR1QsV0FBZTtNQUNiO01BQ0E7TUFDQTtNQUNBOzs7OztBQ3hIRjs7Ozs7Ozs7Ozs7OztVQWdCQSxVQUFBO2VBQUE7O1VBZGdCLFVBQUE7ZUFBQTs7O0FBQVQscUJBQWlCLE1BQU0sY0FBYyxlQUFhO0FBQ3ZELFVBQUksQ0FBRSxXQUFZO0FBRWxCLGFBQU8sWUFBWSxlQUFlO0FBQ2hDLGNBQU0sa0JBQWtCLGFBQWE7QUFFckMsZUFBTyxnQkFBZ0I7QUFFdEIsUUFBQSxFQUFFLFdBQVk7O0FBR2pCLGFBQU87O1FBR1QsV0FBZTtNQUNiOzs7OztBQ2pCRjs7Ozs7Ozs7Ozs7OztVQXVJZ0IsbUJBQUE7ZUFBQTs7VUF1QmhCLFVBQUE7ZUFBQTs7VUFoR2dCLGFBQUE7ZUFBQTs7VUE5Q0EsVUFBQTtlQUFBOztVQWdHQSxrQkFBQTtlQUFBOztVQXhCQSxhQUFBO2VBQUE7O1VBakRBLFdBQUE7ZUFBQTs7VUFyQ0EsU0FBQTtlQUFBOzs7QUFBVCxvQkFBZ0IsV0FBVyxNQUFNLFNBQU87QUFDN0MsVUFBSSxRQUFRO0FBRVosc0JBQVM7QUFDUDtBQUVBLGNBQU0sUUFBUTtBQUVkLGtCQUFVLE1BQU0sTUFBTSxTQUFTOztBQUdqQzs7QUFHSyxxQkFBaUIsT0FBTyxXQUFXLE1BQU0sU0FBTztBQUNyRCxZQUFNLFNBQVMsTUFBTTtBQUVyQixVQUFJLFFBQVE7QUFFWixzQkFBUztBQUNQO0FBRUEsY0FBTSxZQUFhLFVBQVU7QUFFN0IsWUFBSSxXQUFXO0FBQ2I7ZUFDSztBQUNMLGdCQUFNLFFBQVEsT0FDUixVQUFVLE1BQU07QUFFdEIsb0JBQVUsU0FBUyxNQUFNLE1BQU0sU0FBUzs7O0FBSTVDOztBQUdLLHNCQUFrQixZQUFZLE1BQU0sU0FBTztBQUNoRCxZQUFNLFNBQVMsV0FBVztBQUUxQixVQUFJLFFBQVE7QUFFWixzQkFBUztBQUNQO0FBRUEsY0FBTSxZQUFhLFVBQVU7QUFFN0IsWUFBSSxXQUFXO0FBQ2I7ZUFDSztBQUNMLGdCQUFNLFFBQVEsT0FDUixZQUFZLFdBQVc7QUFFN0Isb0JBQVUsTUFBTSxNQUFNLFNBQVM7OztBQUluQzs7QUFHSyx3QkFBb0IsWUFBWSxNQUFNLFNBQU87QUFDbEQsWUFBTSxTQUFTLFdBQVc7QUFFMUIsVUFBSSxXQUFXLEdBQUc7QUFDaEI7QUFFQTs7QUFHRixVQUFJLFFBQVE7QUFFWixzQkFBUztBQUNQO0FBRUEsY0FBTSxZQUFhLFVBQVU7QUFFN0IsWUFBSSxXQUFXO0FBQ2I7OztBQUlKLGlCQUFXLFFBQVEsQ0FBQyxXQUFXLFVBQUE7QUFDN0Isa0JBQVUsTUFBTSxNQUFNLFNBQVM7OztBQUk1Qix3QkFBb0IsV0FBVyxRQUFRLE1BQU0sU0FBTztBQUN6RCxVQUFJLFdBQVcsR0FBRztBQUNoQjtBQUVBOztBQUdGLFVBQUksUUFBUTtBQUVaLHNCQUFTO0FBQ1A7QUFFQSxjQUFNLFlBQWEsVUFBVTtBQUU3QixZQUFJLFdBQVc7QUFDYjs7O0FBSUosZUFBUyxRQUFRLEdBQUcsUUFBUSxRQUFRLFNBQVM7QUFDM0Msa0JBQVUsTUFBTSxNQUFNLFNBQVM7OztBQUk1Qiw2QkFBeUIsT0FBTyxXQUFXLE1BQU0sU0FBTztBQUM3RCxZQUFNLFNBQVMsTUFBTTtBQUVyQixVQUFJLFFBQVE7QUFFWixzQkFBUztBQUNQO0FBRUEsY0FBTSxZQUFhLFVBQVU7QUFFN0IsWUFBSSxXQUFXO0FBQ2I7ZUFDSztBQUNMLGdCQUFNLFFBQVEsT0FDUixVQUFVLE1BQU07QUFFdEIsb0JBQVUsU0FBUyxNQUFNLE1BQU0sU0FBUzs7O0FBSTVDOztBQUdLLDhCQUEwQixPQUFPLFdBQVcsTUFBTSxTQUFPO0FBQzlELFlBQU0sU0FBUyxNQUFNO0FBRXJCLFVBQUksUUFBUTtBQUVaLHNCQUFTO0FBQ1A7QUFFQSxjQUFNLFlBQWEsVUFBVTtBQUU3QixZQUFJLFdBQVc7QUFDYjtlQUNLO0FBQ0wsZ0JBQU0sUUFBUSxPQUNSLFVBQVUsTUFBTTtBQUV0QixvQkFBVSxTQUFTLE1BQU0sTUFBTSxTQUFTOzs7QUFJNUM7O1FBR0YsV0FBZTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOzs7OztBQ3JLRjs7Ozs7Ozs7Ozs7OztVQThIQSxVQUFBO2VBQUE7O1VBdEhnQixNQUFBO2VBQUE7O1VBOEJBLE9BQUE7ZUFBQTs7VUFnQ0EsVUFBQTtlQUFBOzs7Ozs7OztBQTlEVCxpQkFBYSxNQUFNLEtBQUssT0FBTyxTQUFTLGNBQWMsVUFBUTtBQUNuRSxVQUFJLE9BQU8sWUFBWSxXQUFBLFVBQVU7QUFDL0IsbUJBQVc7QUFFWCx1QkFBZTtBQUVmLGtCQUFVOztBQUdaLFVBQUksT0FBTyxpQkFBaUIsV0FBQSxVQUFVO0FBQ3BDLG1CQUFXO0FBRVgsWUFBSSxPQUFPLFlBQVksV0FBQSxRQUFRO0FBQzdCLHlCQUFlO0FBRWYsb0JBQVU7ZUFDTDtBQUNMLHlCQUFlOzs7QUFJbkIsWUFBTSxTQUFTLFNBQUEsWUFDVCxTQUFTLGNBQUEsK0JBQ1QsVUFBVTtBQUVoQiw2QkFBdUIsU0FBUztBQUVoQyxjQUFRLE1BQU0sS0FBSyxPQUFPLFFBQVEsU0FBUyxTQUFTLGNBQWM7O0FBRzdELGtCQUFjLE1BQU0sS0FBSyxPQUFPLFNBQVMsU0FBUyxjQUFjLFVBQVE7QUFDN0UsVUFBSSxPQUFPLFlBQVksV0FBQSxVQUFVO0FBQy9CLG1CQUFXO0FBRVgsdUJBQWU7QUFFZixrQkFBVTs7QUFHWixVQUFJLE9BQU8saUJBQWlCLFdBQUEsVUFBVTtBQUNwQyxtQkFBVztBQUVYLFlBQUksT0FBTyxZQUFZLFdBQUEsUUFBUTtBQUM3Qix5QkFBZTtBQUVmLG9CQUFVO2VBQ0w7QUFDTCx5QkFBZTs7O0FBSW5CLFlBQU0sU0FBUyxTQUFBLGFBQ1QsU0FBUyxjQUFBLCtCQUNULGNBQWMsY0FBQTtBQUVwQiw2QkFBdUIsU0FBUztBQUVoQyxrQ0FBNEIsU0FBUztBQUVyQyxjQUFRLE1BQU0sS0FBSyxPQUFPLFFBQVEsU0FBUyxTQUFTLGNBQWM7O0FBRzdELHFCQUFpQixNQUFNLEtBQUssT0FBTyxRQUFRLFNBQVMsU0FBUyxjQUFjLFVBQVE7QUFDeEYsWUFBTSxNQUFNLElBQUEsTUFBQSx3QkFBdUIsTUFBTSxLQUFLLFFBQ3hDLFNBQVMsUUFBUSxTQUFBLGtCQUFrQixNQUNuQyxjQUFjLFFBQVEsU0FBQSx3QkFBd0IsTUFDOUMsaUJBQWlCLElBQUk7QUFFM0IsVUFBSSxnQkFBZ0IsY0FBQSwrQkFBK0I7QUFDakQsY0FBTSxPQUFPLFNBQ1AsYUFBYSxLQUFLLFVBQVU7QUFFbEMsa0JBQVU7O0FBR1osVUFBSSxpQkFBaUIsTUFBTTtBQUN6QixlQUFPLE9BQU8sZ0JBQWdCO1VBQzVCOzs7QUFJSixxQkFBZSxxQkFBcUIsTUFBQTtBQUNsQyxjQUFNLENBQUUsWUFBWSxRQUFRLFlBQWEsZ0JBQ25DLGFBQWE7QUFFbkIsWUFBSSxjQUFjLEdBQUc7QUFDbkIsY0FBSSxXQUFVO0FBRWQsY0FBSSxXQUFXLGNBQUEsK0JBQStCO0FBQzVDLGdCQUFJO0FBQ0Ysb0JBQU0sYUFBYSxVQUNiLE9BQU8sS0FBSyxNQUFNO0FBRXhCLHlCQUFVO3FCQUNILE9BQVA7QUFDQSx5QkFBVTs7O0FBSWQsbUJBQVMsVUFBUzs7O0FBSXRCLHFCQUFlLEtBQUssUUFBUTtBQUU1QixVQUFJLFdBQVcsTUFBTTtBQUNuQix1QkFBZSxpQkFBaUIsU0FBQSxlQUFlOztBQUdqRCxVQUFJLGdCQUFnQixNQUFNO0FBQ3hCLHVCQUFlLGlCQUFpQixTQUFBLHFCQUFxQjs7QUFHdEQsa0JBQVksT0FDWCxlQUFlLEtBQUssV0FDbEIsZUFBZTs7UUFHckIsV0FBZTtNQUNiO01BQ0E7TUFDQTs7QUFHRixvQ0FBZ0MsU0FBUyxRQUFNO0FBQzdDLFlBQU0sT0FBTyxTQUFBLGVBQ1AsUUFBUTtBQUVkLE1BQUEsSUFBQSxNQUFBLFlBQVcsU0FBUyxNQUFNOztBQUc1Qix5Q0FBcUMsU0FBUyxhQUFXO0FBQ3ZELFlBQU0sT0FBTyxTQUFBLHFCQUNQLFFBQVE7QUFFZCxNQUFBLElBQUEsTUFBQSxZQUFXLFNBQVMsTUFBTTs7Ozs7QUMvSTVCOzs7Ozs7Ozs7Ozs7O1VBbUJvQixnQkFBQTtlQUFBLE1BQUE7O1VBTEEsaUJBQUE7ZUFBQSxPQUFBOztVQUdBLHdCQUFBO2VBQUEsY0FBQTs7VUFWQSxhQUFBO2VBQUEsWUFBQTs7VUFFQSxlQUFBO2VBQUEsY0FBQTs7VUFIQSxZQUFBO2VBQUEsV0FBQTs7VUFGQSxVQUFBO2VBQUEsU0FBQTs7VUFTQSxnQkFBQTtlQUFBLE1BQUE7O1VBUkEsV0FBQTtlQUFBLFVBQUE7O1VBSEEsU0FBQTtlQUFBLFFBQUE7O1VBQ0EsVUFBQTtlQUFBLFNBQUE7O1VBU0EsZ0JBQUE7ZUFBQSxNQUFBOztVQUpBLGNBQUE7ZUFBQSxhQUFBOztVQUVBLGlCQUFBO2VBQUEsZ0JBQUE7O1VBS0Esa0JBQUE7ZUFBQSxRQUFBOztVQUNBLG1CQUFBO2VBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJwQjs7Ozs7Ozs7Ozs7OztVQXlDZ0IsNEJBQUE7ZUFBQTs7VUF2Q0EsMkJBQUE7ZUFBQTs7O0FBQVQsc0NBQWtDLFFBQVEsVUFBVSxpQkFBaUIsc0JBQXNCLElBQUU7QUFDbEcsVUFBSSxZQUFZO0FBRWhCLFlBQU0sZ0NBQWdDLGdCQUFnQixTQUFTO0FBRS9ELFVBQUksQ0FBQywrQkFBK0I7QUFDbEMsY0FBTSxnQkFBZ0I7QUFFdEIsd0JBQWdCLEtBQUs7QUFFckIsb0JBQVksU0FBUyxRQUFRO0FBRTdCLFlBQUksQ0FBQyxXQUFXO0FBQ2QsZ0JBQU0sb0JBQW9CO0FBRTFCLGdDQUFzQjtlQUNqQjtZQUNIOztBQUdGLHNCQUFZLE9BQU8sNkJBQTZCLENBQUMsNkJBQUE7QUFDL0Msa0JBQU0sVUFBUywwQkFDVCxjQUFjLFFBQU8sWUFDckIseUJBQXlCLGtCQUFrQjtBQUVqRCxnQkFBSSxjQUFjLHdCQUF3QjtBQUN4QyxvQkFBTSxhQUFZLHlCQUF5QixTQUFRLFVBQVUsaUJBQWlCO0FBRTlFLGtCQUFJLFlBQVc7QUFDYix1QkFBTzs7Ozs7O0FBT2pCLGFBQU87O0FBR0YsdUNBQW1DLFFBQVEsVUFBVSxpQkFBaUIsb0JBQW9CLElBQUU7QUFDakcsVUFBSSxZQUFZO0FBRWhCLFlBQU0sZ0NBQWdDLGdCQUFnQixTQUFTO0FBRS9ELFVBQUksQ0FBQywrQkFBK0I7QUFDbEMsY0FBTSxnQkFBZ0I7QUFFdEIsd0JBQWdCLEtBQUs7QUFFckIsb0JBQVksU0FBUyxRQUFRO0FBRTdCLFlBQUksQ0FBQyxXQUFXO0FBQ2QsZ0JBQU0sa0JBQWtCO0FBRXhCLDhCQUFvQjtlQUNmO1lBQ0g7O0FBR0Ysc0JBQVksT0FBTywrQkFBK0IsQ0FBQywrQkFBQTtBQUNqRCxrQkFBTSxVQUFTLDRCQUNULGNBQWMsUUFBTyxZQUNyQix1QkFBdUIsZ0JBQWdCO0FBRTdDLGdCQUFJLGNBQWMsc0JBQXNCO0FBQ3RDLG9CQUFNLGFBQVksMEJBQTBCLFNBQVEsVUFBVSxpQkFBaUI7QUFFL0Usa0JBQUksWUFBVztBQUNiLHVCQUFPOzs7Ozs7QUFPakIsYUFBTzs7Ozs7QUM3RVQ7Ozs7O21DQVNBLFdBQUE7OztlQUFxQjs7Ozs7O0FBRnJCLFFBQU0sQ0FBRSxNQUFNLFFBQVMsV0FBQTtBQUVSLHVCQUFNO01BQ25CLFlBQVksTUFBTSxPQUFPLDRCQUE0Qiw4QkFBOEI7QUFDakYsYUFBSyxPQUFPO0FBQ1osYUFBSyxRQUFRO0FBQ2IsYUFBSyw2QkFBNkI7QUFDbEMsYUFBSywrQkFBK0I7O01BR3RDLFVBQVU7QUFDUixlQUFPLEtBQUs7O01BR2QsV0FBVztBQUNULGVBQU8sS0FBSzs7TUFHZCxnQ0FBZ0M7QUFDOUIsZUFBTyxLQUFLOztNQUdkLGtDQUFrQztBQUNoQyxlQUFPLEtBQUs7O01BR2QsYUFBYTtBQUNYLGNBQU0sbUNBQW1DLEtBQUssMkJBQTJCLFFBQ25FLHFDQUFxQyxLQUFLLDZCQUE2QixRQUN2RSxXQUFhLHFDQUFxQyxLQUFPLHVDQUF1QztBQUV0RyxlQUFPOztNQUdULDBCQUEwQixRQUFRO0FBQ2hDLGNBQU0sNEJBQTRCLEtBQUssa0NBQWtDLFNBQ25FLDhCQUE4QixLQUFLLDRCQUNuQywwQkFBMkIsV0FBVztBQUU1QyxlQUFPOztNQUdULDRCQUE0QixjQUFjO0FBQ3hDLGNBQU0seUNBQXlDLEtBQUssbUNBQW1DLGVBQ2pGLGNBQWM7QUFFcEIsZUFBTzs7TUFHVCw0QkFBNEIsY0FBYztBQUN4QyxjQUFNLHVDQUF1QyxLQUFLLGlDQUFpQyxlQUM3RSxjQUFjO0FBRXBCLGVBQU87O01BR1QsK0JBQStCO0FBQzdCLGNBQU0sNEJBQTRCLEtBQUsscUNBQ2pDLGdDQUFnQyxLQUFLLDRCQUNyQyxvQkFBb0IsK0JBQ3BCLHVCQUF1QixJQUFBLFFBQUEseUJBQXdCO0FBRXJELGVBQU87O01BR1QsaUNBQWlDO0FBQy9CLGNBQU0sNkJBQTZCLEtBQUssc0NBQ2xDLGlDQUFpQyxLQUFLLDZCQUN0QyxzQkFBc0IsZ0NBQ3RCLHlCQUF5QixJQUFBLFFBQUEseUJBQXdCO0FBRXZELGVBQU87O01BR1Qsa0NBQWtDLFNBQVMsTUFBTTtBQUMvQyxjQUFNLFVBQVUsUUFDVixrQkFBa0IsS0FBSyx5QkFBeUIsQ0FBQyxZQUFBO0FBQy9DLGdCQUFNLFVBQVUsU0FDVixZQUFhLFlBQVk7QUFFL0IsY0FBSSxXQUFXO0FBQ2IsbUJBQU87O1lBR1gsNEJBQTRCO0FBRWxDLGVBQU87O01BR1QsbUNBQW1DLFNBQVMsTUFBTTtBQUNoRCxjQUFNLFVBQVUsUUFDVixrQkFBa0IsS0FBSywwQkFBMEIsQ0FBQyxZQUFBO0FBQ2hELGdCQUFNLFVBQVUsU0FDVixZQUFhLFlBQVk7QUFFL0IsY0FBSSxXQUFXO0FBQ2IsbUJBQU87O1lBR1gsNkJBQTZCO0FBRW5DLGVBQU87O01BR1QsaUNBQWlDLFFBQVE7QUFDdkMsY0FBTSxpQ0FBaUMsS0FBSywyQkFBMkIsU0FBUztBQUVoRixlQUFPOztNQUdULG1DQUFtQyxRQUFRO0FBQ3pDLGNBQU0sbUNBQW1DLEtBQUssNkJBQTZCLFNBQVM7QUFFcEYsZUFBTzs7TUFHVCxtQ0FBbUM7QUFDakMsY0FBTSxnQ0FBZ0MsSUFBQSxRQUFBLHlCQUF3QixLQUFLO0FBRW5FLGVBQU87O01BR1QscUNBQXFDO0FBQ25DLGNBQU0sa0NBQWtDLElBQUEsUUFBQSx5QkFBd0IsS0FBSztBQUVyRSxlQUFPOztNQUdULFFBQVEsTUFBTTtBQUNaLGFBQUssT0FBTzs7TUFHZCxTQUFTLE9BQU87QUFDZCxhQUFLLFFBQVE7O01BR2YsOEJBQThCLDRCQUE0QjtBQUN4RCxhQUFLLDZCQUE2Qjs7TUFHcEMsZ0NBQWdDLDhCQUE4QjtBQUM1RCxhQUFLLCtCQUErQjs7TUFHdEMsaUJBQWlCO0FBQ2YsYUFBSzs7TUFHUCw0QkFBNEIsMEJBQTBCO0FBQ3BELGFBQUssMkJBQTJCLEtBQUs7O01BR3ZDLDhCQUE4Qiw0QkFBNEI7QUFDeEQsYUFBSyw2QkFBNkIsS0FBSzs7TUFHekMsK0JBQStCLDBCQUEwQjtBQUN2RCxjQUFNLFFBQVEsS0FBSywyQkFBMkIsUUFBUSwyQkFDaEQsUUFBUSxPQUNSLGNBQWM7QUFFcEIsYUFBSywyQkFBMkIsT0FBTyxPQUFPOztNQUdoRCxpQ0FBaUMsNEJBQTRCO0FBQzNELGNBQU0sUUFBUSxLQUFLLDZCQUE2QixRQUFRLDZCQUNsRCxRQUFRLE9BQ1IsY0FBYztBQUVwQixhQUFLLDZCQUE2QixPQUFPLE9BQU87O01BR2xELHlCQUF5QixVQUFVO0FBQ2pDLGNBQU0sU0FBUyxNQUNULGtCQUFrQjtBQUV4QixRQUFBLElBQUEsUUFBQSwwQkFBeUIsUUFBUSxVQUFVO0FBRTNDLGVBQU87O01BR1QsMEJBQTBCLFVBQVU7QUFDbEMsY0FBTSxTQUFTLE1BQ1Qsa0JBQWtCO0FBRXhCLFFBQUEsSUFBQSxRQUFBLDJCQUEwQixRQUFRLFVBQVU7QUFFNUMsZUFBTzs7TUFHVCw2QkFBNkIsVUFBVTtBQUNyQyxlQUFPLEtBQUssMkJBQTJCLEtBQUs7O01BRzlDLCtCQUErQixVQUFVO0FBQ3ZDLGVBQU8sS0FBSyw2QkFBNkIsS0FBSzs7TUFHaEQsZ0NBQWdDLFVBQVU7QUFDeEMsYUFBSywyQkFBMkIsUUFBUTs7TUFHMUMsa0NBQWtDLFVBQVU7QUFDMUMsYUFBSyw2QkFBNkIsUUFBUTs7YUFHckMsaUJBQWlCLE1BQU0sT0FBTztBQUNuQyxjQUFNLDZCQUE2QixJQUM3QiwrQkFBK0IsSUFDL0IsbUJBQW1CLElBQUksT0FBTyxNQUFNLE9BQU8sNEJBQTRCO0FBRTdFLGVBQU87Ozs7OztBQzFOWDs7Ozs7Ozs7Ozs7OztVQWdCZ0Isc0JBQUE7ZUFBQTs7VUFkQSxlQUFBO2VBQUE7OztBQUFULDBCQUFzQixTQUFPO0FBQ2xDLGNBQVEsS0FBSyxDQUFDLFlBQVksZ0JBQUE7QUFDeEIsWUFBSSxPQUFPO21CQUVBLGFBQWEsYUFBYTtBQUNuQyxpQkFBTzttQkFDRyxhQUFhLGFBQWE7QUFDcEMsaUJBQU87ZUFDRjtBQUNMLGlCQUFPOzs7O0FBS04saUNBQTZCLFVBQVE7QUFDMUMsWUFBTSxVQUFVLFNBQVMsSUFBSSxDQUFDLFdBQUE7QUFDNUIsY0FBTSxRQUFRLE9BQU87QUFFckIsZUFBTzs7QUFHVCxhQUFPOzs7OztBQ3ZCVDs7Ozs7bUNBYUEsV0FBQTs7O2VBQXFCOzs7Ozs7Ozs7Ozs7OztBQUZyQixRQUFNLENBQUUsU0FBVSxXQUFBO0FBRUgsOEJBQU07TUFDbkIsWUFBWSxXQUFXO0FBQ3JCLGFBQUssWUFBWTs7TUFHbkIsZUFBZTtBQUNiLGVBQU8sS0FBSzs7TUFHZCxjQUFjO0FBQ1osY0FBTSxrQkFBa0IsT0FBTyxPQUFPLEtBQUssWUFDckMsV0FBVztBQUVqQixlQUFPOztNQUdULGlCQUFpQjtBQUNmLGNBQU0sZ0JBQWdCLE9BQU8sS0FBSyxLQUFLLFlBQ2pDLGNBQWM7QUFFcEIsZUFBTzs7TUFHVCx3QkFBd0I7QUFDdEIsY0FBTSxXQUFXLEtBQUs7QUFFdEIsUUFBQSxJQUFBLFNBQUEsZUFBYztBQUVkLGNBQU0sa0JBQWtCLFVBQ2xCLHFCQUFxQixJQUFBLFNBQUEseUJBQXdCO0FBRW5ELGVBQU87O01BR1Qsc0JBQXNCLFlBQVk7QUFDaEMsY0FBTSxnQkFBZ0IsS0FBSyw0QkFBNEIsYUFDakQsU0FBUyxnQkFDRSxLQUFLLFVBQVUsY0FDYjtBQUVuQixlQUFPOztNQUdULDJCQUEyQixrQkFBa0I7QUFDM0MsY0FBTSxRQUFRLElBQ1IsZUFBZSxLQUFLLHNCQUFzQjtBQUVoRCxZQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGdCQUFNLDZCQUE2QixhQUFhLGlDQUMxQyxnQ0FBZ0MsSUFBQSxTQUFBLHlCQUF3Qiw2QkFDeEQsb0JBQW9CO0FBRTFCLDRCQUFrQixRQUFRLENBQUMscUJBQUE7QUFDekIsa0JBQU0sT0FBTyxNQUFBLFFBQUssd0NBQXdDLGtCQUFrQjtBQUU1RSxrQkFBTSxLQUFLOzs7QUFJZixlQUFPOztNQUdULDJCQUEyQixrQkFBa0I7QUFDM0MsY0FBTSxRQUFRLElBQ1IsZUFBZSxLQUFLLHNCQUFzQjtBQUVoRCxZQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGdCQUFNLCtCQUErQixhQUFhLG1DQUM1QyxrQ0FBa0MsSUFBQSxTQUFBLHlCQUF3QiwrQkFDMUQsb0JBQW9CO0FBRTFCLDRCQUFrQixRQUFRLENBQUMscUJBQUE7QUFDekIsa0JBQU0sT0FBTyxNQUFBLFFBQUssd0NBQXdDLGtCQUFrQjtBQUU1RSxrQkFBTSxLQUFLOzs7QUFJZixlQUFPOztNQUdULGdCQUFnQjtBQUNkLFlBQUksYUFBYTtBQUVqQixjQUFNLGdCQUFnQixLQUFLO0FBRTNCLFlBQUksZUFBZTtBQUNqQixnQkFBTSxjQUFjLEtBQUssa0JBQ25CLGtCQUFrQixNQUFNLGNBQ3hCLG1CQUFtQixnQkFBZ0IsdUJBQ25DLG1CQUFtQixnQkFBZ0IsdUJBQ25DLGVBQWUsS0FBSyxzQkFBc0IsbUJBQzFDLGVBQWUsS0FBSyxzQkFBc0I7QUFFaEQsdUJBQWEseUJBQXlCLENBQUMsUUFBUSx3QkFBQTtBQUM3QyxnQkFBSSxZQUFZO0FBRWhCLGdCQUFJLFdBQVcsY0FBYztBQUMzQiwwQkFBWTtBQUVaLG9CQUFNLFFBQVEsT0FBQSxRQUFNLHVDQUF1QyxjQUFjO0FBRXpFLDJCQUFhOztBQUdmLG1CQUFPOzs7QUFJWCxlQUFPOztNQUdULGlCQUFpQjtBQUNmLGNBQU0sY0FBYyxJQUNkLFdBQVcsS0FBSztBQUV0QixpQkFBUyxRQUFRLENBQUMsV0FBQTtBQUNoQixnQkFBTSxlQUFlLFFBQ2Ysb0JBQW9CLGFBQWE7QUFFdkMsaUJBQU8sZ0NBQWdDLENBQUMsNkJBQUE7QUFDdEMsa0JBQU0sZUFBZSwwQkFDZixvQkFBb0IsYUFBYTtBQUV2QyxnQkFBSSxvQkFBb0IsbUJBQW1CO0FBQ3pDLG9CQUFNLG1CQUFtQixhQUFhLFdBQ2hDLG1CQUFtQixhQUFhLFdBQ2hDLE9BQU8sTUFBQSxRQUFLLHdDQUF3QyxrQkFBa0IsbUJBQ3RFLGFBQWE7QUFFbkIsMEJBQVksS0FBSzs7O0FBSXJCOztBQUdGLGVBQU87O01BR1QsbUJBQW1CO0FBQ2pCLGNBQU0sV0FBVyxLQUFLLGVBQ2hCLGdCQUFnQixTQUFTLEtBQUssQ0FBQyxXQUFBO0FBQzdCLGdCQUFNLGVBQWUsUUFDZixvQkFBb0IsYUFBYSxZQUNqQyxvQkFBb0IsT0FBTyw2QkFBNkIsQ0FBQyw2QkFBQTtBQUN2RCxrQkFBTSxlQUFlLDBCQUNmLG9CQUFvQixhQUFhO0FBRXZDLGdCQUFJLG9CQUFvQixtQkFBbUI7QUFDekMscUJBQU87OztBQUlqQixjQUFJLG1CQUFtQjtBQUNyQixtQkFBTzs7O0FBSWpCLGVBQU87O01BR1QsY0FBYyxNQUFNO0FBQ2xCLFlBQUksY0FBYztBQUVsQixjQUFNLG1CQUFtQixLQUFLLHVCQUN4QixlQUFlLEtBQUssc0JBQXNCO0FBRWhELFlBQUksaUJBQWlCLE1BQU07QUFDekIsZ0JBQU0sbUJBQW1CLEtBQUssdUJBQ3hCLGVBQWUsS0FBSyxzQkFBc0I7QUFFaEQsY0FBSSxpQkFBaUIsTUFBTTtBQUN6QiwwQkFBYyxhQUFhLDRCQUE0Qjs7O0FBSTNELGVBQU87O01BR1QsNEJBQTRCLFlBQVk7QUFDdEMsY0FBTSxjQUFjLEtBQUssa0JBQ25CLGdDQUFnQyxZQUFZLFNBQVMsYUFDckQsZ0JBQWdCO0FBRXRCLGVBQU87O01BR1QsNkNBQTZDLFlBQVk7QUFDdkQsY0FBTSxTQUFTLEtBQUssc0JBQXNCLGFBQ3BDLGdDQUFnQyxPQUFPO0FBRTdDLGVBQU87O01BR1QsK0NBQStDLFlBQVk7QUFDekQsY0FBTSxTQUFTLEtBQUssc0JBQXNCLGFBQ3BDLGtDQUFrQyxPQUFPO0FBRS9DLGVBQU87O01BR1QsbURBQW1ELGtCQUFrQixrQkFBa0I7QUFDckYsY0FBTSxPQUFPLE1BQUEsUUFBSyx3Q0FBd0Msa0JBQWtCLG1CQUN0RSxjQUFjLEtBQUssY0FBYztBQUV2QyxlQUFPOztNQUdULHNCQUFzQixZQUFZO0FBQ2hDLGNBQU0sZ0JBQWdCLEtBQUssNEJBQTRCO0FBRXZELFlBQUksQ0FBQyxlQUFlO0FBQ2xCLGdCQUFNLGNBQWMsS0FBSyxrQkFDbkIsb0JBQW9CLFlBQVksUUFDaEMsT0FBTyxZQUNQLFFBQVEsbUJBQ1IsVUFBUyxRQUFBLFFBQU8saUJBQWlCLE1BQU07QUFFN0MsZUFBSyxzQkFBc0IsWUFBWTs7QUFHekMsY0FBTSxTQUFTLEtBQUssc0JBQXNCO0FBRTFDLGVBQU87O01BR1QseUJBQXlCLFlBQVk7QUFDbkMsY0FBTSxnQkFBZ0IsS0FBSyw0QkFBNEI7QUFFdkQsWUFBSSxDQUFDLGVBQWU7QUFDbEI7O0FBR0YsY0FBTSxTQUFTLEtBQUssc0JBQXNCO0FBRTFDLGVBQU8sZ0NBQWdDLENBQUMsMkJBQUE7QUFDdEMsZ0JBQU0sNkJBQTZCO0FBRW5DLGlDQUF1QixpQ0FBaUM7O0FBRzFELGVBQU8sa0NBQWtDLENBQUMsK0JBQUE7QUFDeEMsZ0JBQU0seUJBQXlCO0FBRS9CLHFDQUEyQiwrQkFBK0I7O0FBRzVELGFBQUsseUJBQXlCO0FBRTlCLGNBQU0sV0FBVyxLQUFLLGVBQ2hCLGdCQUFnQixRQUNoQixxQkFBcUIsY0FBYztBQUV6QyxpQkFBUyxRQUFRLENBQUMsWUFBQTtBQUNoQixnQkFBTSxjQUFjLFFBQU87QUFFM0IsY0FBSSxjQUFjLG9CQUFvQjtBQUNwQyxvQkFBTzs7O0FBSVgsYUFBSzs7TUFHUCx5QkFBeUIsYUFBYTtBQUNwQyxvQkFBWSxRQUFRLENBQUMsZUFBQTtBQUNuQixlQUFLLHNCQUFzQjs7O01BSS9CLDRCQUE0QixhQUFhO0FBQ3ZDLG9CQUFZLFFBQVEsQ0FBQyxlQUFBO0FBQ25CLGVBQUsseUJBQXlCOzs7TUFJbEMsUUFBUSxNQUFNO0FBQ1osY0FBTSxtQkFBbUIsS0FBSyx1QkFDeEIsbUJBQW1CLEtBQUs7QUFFOUIsWUFBSSxxQkFBcUIsa0JBQWtCO0FBQ3pDOztBQUdGLGNBQU0sZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsY0FBYyxhQUFhLDRCQUE0QjtBQUU3RCxZQUFJLGFBQWE7QUFDZjs7QUFHRixjQUFNLG9CQUFvQixhQUFhLFlBQ2pDLG9CQUFvQixhQUFhO0FBRXZDLFlBQUksb0JBQW9CLG1CQUFtQjtBQUN6QyxlQUFLLDZDQUE2QyxjQUFjOztBQUdsRSxjQUFNLDZCQUE2QixjQUM3QiwyQkFBMkI7QUFFakMsbUNBQTJCLDRCQUE0QjtBQUV2RCxpQ0FBeUIsOEJBQThCOztNQUd6RCxTQUFTLE9BQU87QUFDZCxjQUFNLFFBQVEsQ0FBQyxTQUFBO0FBQ2IsZUFBSyxRQUFROzs7TUFJakIsV0FBVyxNQUFNLHdCQUF3QjtBQUN2QyxjQUFNLG1CQUFtQixLQUFLLHVCQUN4QixtQkFBbUIsS0FBSyx1QkFDeEIsZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsY0FBYyxhQUFhLDRCQUE0QjtBQUU3RCxZQUFJLENBQUMsYUFBYTtBQUNoQjs7QUFHRixxQkFBYSwrQkFBK0I7QUFFNUMscUJBQWEsaUNBQWlDO0FBRTlDLFlBQUksd0JBQXdCO0FBQzFCLGdCQUFNLHVCQUF1QixhQUFhLGNBQ3BDLHVCQUF1QixhQUFhO0FBRTFDLGNBQUksc0JBQXNCO0FBQ3hCLGlCQUFLLHlCQUF5Qjs7QUFHaEMsY0FBSSxzQkFBc0I7QUFDeEIsaUJBQUsseUJBQXlCOzs7QUFJbEMsYUFBSzs7TUFHUCxZQUFZLE9BQU8seUJBQXlCLE9BQU87QUFDakQsY0FBTSxRQUFRLENBQUMsU0FBQTtBQUNiLGVBQUssV0FBVyxNQUFNOzs7TUFJMUIsNEJBQTRCO0FBQzFCLGFBQUssWUFBWTs7TUFHbkIsNkNBQTZDLGtCQUFrQixrQkFBa0I7QUFDL0UsY0FBTSxPQUFPLE1BQUEsUUFBSyx3Q0FBd0Msa0JBQWtCO0FBRTVFLGFBQUssUUFBUTs7TUFHZiw2Q0FBNkMsY0FBYyxjQUFjO0FBQ3ZFLGNBQU0sZ0NBQWdDLGFBQWEsMEJBQTBCO0FBRTdFLFlBQUksK0JBQStCO0FBQ2pDOztBQUdGLGNBQU0sNEJBQTRCLGFBQWEscUNBQ3pDLDZCQUE2QixhQUFhO0FBRWhELFFBQUEsSUFBQSxTQUFBLGVBQWM7QUFFZCxRQUFBLElBQUEsU0FBQSxlQUFjO0FBRWQsY0FBTSxvQkFBb0I7YUFDZjthQUNBO1dBRUwsbUJBQW1CLElBQUEsT0FBQSxxQkFBb0I7QUFFN0MsUUFBQSxJQUFBLE9BQUEsY0FBYTtBQUViLDBCQUFrQixRQUFRLENBQUMsaUJBQWlCLFVBQUE7QUFDMUMsZ0JBQU0saUJBQWlCLGlCQUFpQjtBQUV4QyxrQkFBUTtBQUVSLDBCQUFnQixTQUFTOzs7TUFJN0Isb0JBQW9CO0FBQ2xCLGNBQU0sY0FBYyxLQUFLLGtCQUNuQixRQUFRO0FBRWQsY0FBTSxRQUFRLENBQUMsU0FBQTtBQUNiLGdCQUFNLG1CQUFtQixLQUFLLHVCQUN4QixtQkFBbUIsS0FBSyx1QkFDeEIsZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsZUFBZSxLQUFLLHNCQUFzQixtQkFDMUMsZ0NBQWdDLGFBQWEsMEJBQTBCO0FBRTdFLGNBQUksQ0FBQywrQkFBK0I7QUFDbEMsaUJBQUssNkNBQTZDLGNBQWM7Ozs7TUFLdEUsc0JBQXNCLFlBQVksUUFBUTtBQUN4QyxhQUFLLFVBQVUsY0FBYzs7TUFHL0IseUJBQXlCLFlBQVk7QUFDbkMsZUFBTyxLQUFLLFVBQVU7O2FBR2pCLGNBQWM7QUFDbkIsY0FBTSxZQUFZLElBQ1osZ0JBQWdCLElBQUksY0FBYztBQUV4QyxlQUFPOzs7Ozs7QUNsYlg7Ozs7Ozs7Ozs7Ozs7VUFHb0IsUUFBQTtlQUFBLE9BQUE7O1VBRUEsZ0JBQUE7ZUFBQSxlQUFBOztVQUhBLE9BQUE7ZUFBQSxNQUFBOztVQUVBLFNBQUE7ZUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNKcEI7Ozs7OztBQUlBLFFBQU0sUUFBUSxPQUFBLEtBQUssd0NBQXdDLHFCQUFxQjtBQUFoRixRQUNNLFFBQVEsT0FBQSxLQUFLLHdDQUF3QyxnQkFBZ0I7QUFEM0UsUUFFTSxRQUFRLE9BQUEsS0FBSyx3Q0FBd0MsaUJBQWlCO0FBRjVFLFFBR00sUUFBUSxPQUFBLEtBQUssd0NBQXdDLHFCQUFxQjtBQUhoRixRQUlNLFFBQVEsT0FBQSxLQUFLLHdDQUF3QyxrQkFBa0I7QUFFN0UsUUFBTSxnQkFBZ0IsT0FBQSxjQUFjO0FBRXBDLGtCQUFjLFFBQVE7QUFDdEIsa0JBQWMsUUFBUTtBQUN0QixrQkFBYyxRQUFRO0FBQ3RCLGtCQUFjLFFBQVE7QUFDdEIsa0JBQWMsUUFBUTtBQUV0QixrQkFBYyx5QkFBeUI7OyIsCiAgIm5hbWVzIjogW10KfQo=
