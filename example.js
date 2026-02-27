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
    function compare(arrayA, arrayB, callback) {
      var coupled = false;
      var arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        arrayB = _to_consumable_array(arrayB);
        coupled = arrayA.every(function(elementA, index) {
          var elementB = extract(arrayB, function(elementB2) {
            var result = callback(elementA, elementB2);
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
      arrayB = _to_consumable_array(arrayB);
      var correlates = arrayA.every(function(elementA) {
        var elementB = extract(arrayB, function(elementB2) {
          var result = callback(elementA, elementB2);
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
      var _loop = function() {
        var arrayALength2 = arrayA.length;
        if (arrayALength2 === 0) {
          return "break";
        }
        var resolved2 = false;
        arrayA.forEach(function(elementA) {
          var passed = callback(elementA);
          if (passed) {
            var elementB = elementA;
            arrayB.push(elementB);
            resolved2 = true;
          }
        });
        if (!resolved2) {
          return "break";
        }
        filter(arrayA, function(elementA) {
          var arrayBIncludesElementA = arrayB.includes(elementA);
          if (!arrayBIncludesElementA) {
            return true;
          }
        });
      };
      var resolved;
      arrayA = _to_consumable_array(arrayA);
      for (; ; ) {
        var _ret = _loop();
        if (_ret === "break")
          break;
      }
      var arrayALength = arrayA.length;
      resolved = arrayALength === 0;
      return resolved;
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
          if (!passed) {
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
    function reverse(array) {
      array = _to_consumable_array(array).reverse();
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
    function forwardsFindIndex(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
    }
    function backwardsFindIndex(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
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
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }
      var concatenatedPath;
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      concatenatedPath = "".concat(path, "/").concat(relativePath);
      var remainingAArgumentsLength = remainingArguments.length;
      if (remainingAArgumentsLength > 0) {
        var _$path = concatenatedPath, _$relativePath = remainingArguments.shift();
        concatenatedPath = concatenatePaths.apply(void 0, [
          _$path,
          _$relativePath
        ].concat(_to_consumable_array(remainingArguments)));
      }
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
      var count = -1;
      function next() {
        count++;
        var index = count;
        operation(next, done, context, index);
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
      if (length === 0) {
        done();
        return;
      }
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
      if (length === 0) {
        done();
        return;
      }
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
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function get(host, uri, query, headers, responseType, callback) {
      if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType;
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function post(host, uri, query, content, headers, responseType, callback) {
      if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType;
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function request(host, uri, query, method, content, headers, responseType, callback) {
      var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      if (responseType !== null) {
        Object.assign(xmlHttpRequest, {
          responseType
        });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0ZXguanMiLCAic3JjL2N5Y2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2xldmVscy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2hlYWRlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMva2V5Q29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvZW5jb2RpbmdzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzQ29kZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29udGVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c01lc3NhZ2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3BhdGguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2Jyb3dzZXIuanMiLCAic3JjL3V0aWxpdGllcy9zZWFyY2guanMiLCAic3JjL3ZlcnRleC5qcyIsICJzcmMvdXRpbGl0aWVzL2luZGV4LmpzIiwgInNyYy9kaXJlY3RlZEdyYXBoLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZTtcbiAgICB0aGlzLnRhcmdldFZlcnRleE5hbWUgPSB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKSAmJiAodGhpcy50YXJnZXRWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkgfHwgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5zb3VyY2VWZXJ0ZXhOYW1lID09PSBzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpIHsgIC8vL1xuICB2ZXJ0ZXhlcy5zb3J0KChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4KSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhJbmRleCA9IGZpcnN0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSBzZWNvbmRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdFZlcnRleEluZGV4IDwgc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgIGlmIChmaXJzdFZlcnRleEluZGV4ID4gc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiArMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE5hbWVzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMoc291cmNlVmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICAgICAgc291cmNlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVBfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQVwiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQVJfQ0hBUkFDVEVSID0gXCJ8XCI7XG5leHBvcnQgY29uc3QgSEFUX0NIQVJBQ1RFUiA9IFwiXlwiO1xuZXhwb3J0IGNvbnN0IFBMVVNfQ0hBUkFDVEVSID0gXCIrXCI7XG5leHBvcnQgY29uc3QgREFTSF9DSEFSQUNURVIgPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBET1dOX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0JcIjtcbmV4cG9ydCBjb25zdCBMRUZUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0RcIjtcbmV4cG9ydCBjb25zdCBSSUdIVF9DSEFSQUNURVIgPSBcIlx1MDAxYltDXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IERPTExBUl9DSEFSQUNURVIgPSBcIiRcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0NfQ0hBUkFDVEVSID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9DSEFSQUNURVIgPSBcIlxcdTAwMWJcIjtcbmV4cG9ydCBjb25zdCBBU1RFUklTS19DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRF9DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBCQUNLVElDS19ERUxJTUlURVIgPSBcImBcIjtcbmV4cG9ydCBjb25zdCBORVdfTElORV9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBCQUNLU0xBU0hfQ0hBUkFDVEVSID0gXCJcXFxcXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiP1wiO1xuZXhwb3J0IGNvbnN0IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSID0gXCIvXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKFwiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIilcIjtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcbmV4cG9ydCBjb25zdCBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiIVwiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIntcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJ9XCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIltcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiXVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVQX0NIQVJBQ1RFUixcbiAgRVRYX0NIQVJBQ1RFUixcbiAgQkFSX0NIQVJBQ1RFUixcbiAgSEFUX0NIQVJBQ1RFUixcbiAgUExVU19DSEFSQUNURVIsXG4gIERBU0hfQ0hBUkFDVEVSLFxuICBET1dOX0NIQVJBQ1RFUixcbiAgTEVGVF9DSEFSQUNURVIsXG4gIFJJR0hUX0NIQVJBQ1RFUixcbiAgU1BBQ0VfQ0hBUkFDVEVSLFxuICBDT01NQV9DSEFSQUNURVIsXG4gIENPTE9OX0NIQVJBQ1RFUixcbiAgUEVSSU9EX0NIQVJBQ1RFUixcbiAgRE9MTEFSX0NIQVJBQ1RFUixcbiAgQ1RSTF9DX0NIQVJBQ1RFUixcbiAgRVNDQVBFX0NIQVJBQ1RFUixcbiAgQVNURVJJU0tfQ0hBUkFDVEVSLFxuICBXSUxEQ0FSRF9DSEFSQUNURVIsXG4gIEJBQ0tUSUNLX0RFTElNSVRFUixcbiAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICBBTVBFUlNBTkRfQ0hBUkFDVEVSLFxuICBCQUNLU0xBU0hfQ0hBUkFDVEVSLFxuICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUixcbiAgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIsXG4gIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVJcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX0NPREUgPSAwO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfQ09ERSA9IDIwMDtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX0NPREUgPSAzMDI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUgPSAyMDE7XG5leHBvcnQgY29uc3QgQ09ORkxJQ1RfNDA5X1NUQVRVU19DT0RFID0gNDA5O1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUgPSAzMDM7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSA9IDQwMztcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFID0gNDA0O1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFID0gMjA0O1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSA9IDUwMjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUgPSA0MDA7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSA9IDQwMTtcbmV4cG9ydCBjb25zdCBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX0NPREUgPSA0MDY7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfQ09ERSA9IDQwNTtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSA9IDUwMztcbmV4cG9ydCBjb25zdCBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX0NPREUgPSA0MjI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfQ09ERSxcbiAgT0tfMjAwX1NUQVRVU19DT0RFLFxuICBGT1VORF8zMDJfU1RBVFVTX0NPREUsXG4gIENSRUFURURfMjAxX1NUQVRVU19DT0RFLFxuICBDT05GTElDVF80MDlfU1RBVFVTX0NPREUsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSxcbiAgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX0NPREUsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfTUVTU0FHRSA9IFwiXCI7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19NRVNTQUdFID0gXCJPS1wiO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSA9IFwiRm91bmRcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSA9IFwiQ3JlYXRlZFwiO1xuZXhwb3J0IGNvbnN0IENPTkZMSUNUXzQwOV9TVEFUVVNfTUVTU0FHRSA9IFwiQ29uZmxpY3RcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgQWNjZXB0YWJsZVwiO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UgPSBcIlJlcXVlc3QgdGltZW91dFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSA9IFwiVG9vIG1hbnkgcmVxdWVzdHNcIjtcbmV4cG9ydCBjb25zdCBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19NRVNTQUdFID0gXCJNZXRob2Qgbm90IGFsbG93ZWRcIjtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiO1xuZXhwb3J0IGNvbnN0IFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfTUVTU0FHRSA9IFwiVW5wcm9jZXNzYWJsZSBFbnRpdHlcIjtcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFID0gXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX01FU1NBR0UsXG4gIE9LXzIwMF9TVEFUVVNfTUVTU0FHRSxcbiAgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSxcbiAgQ09ORkxJQ1RfNDA5X1NUQVRVU19NRVNTQUdFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19NRVNTQUdFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVSTyA9IFwiMFwiO1xuZXhwb3J0IGNvbnN0IERBVEEgPSBcImRhdGFcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE5VTUJFUiA9IFwibnVtYmVyXCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFQgPSBcImRlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVCA9IFwiRU5WSVJPTk1FTlRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IERPVUJMRV9TUEFDRSA9IFwiICBcIjtcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0pTT04gPSBcInBhY2thZ2UuanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY291cGxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gWyAgLy8vXG4gICAgICAuLi5hcnJheUJcbiAgICBdO1xuXG4gICAgY291cGxlZCA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3VwbGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhcnJheUEuZm9yRWFjaCgoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gWyBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5QiBdLFxuICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5QSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVsZXRlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGFycmF5ID0gWyAvLy9cbiAgICAuLi5hcnJheVxuICBdLnJldmVyc2UoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIG1hdGNoLFxuICBjb21wYXJlLFxuICBjb3JyZWxhdGUsXG4gIHJlc29sdmUsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2gsXG4gIGZvcndhcmRzRmluZEluZGV4LFxuICBiYWNrd2FyZHNGaW5kSW5kZXhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGNvbmNhdGVuYXRlZFBhdGg7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICBjb25zdCByZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID0gcmVtYWluaW5nQXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAocmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVkUGF0aCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuXG4gICAgY29uY2F0ZW5hdGVkUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbihzdHJpbmcpIHtcbiAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBzdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgIGxlbmd0aCsrXG4gIH1cblxuICByZXR1cm4gbGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyY21wKHN0cmluZ0EsIHN0cmluZ0IpIHtcbiAgbGV0IGRpZmZlcmVuY2U7XG5cbiAgY29uc3QgaXRlcmF0b3JBID0gc3RyaW5nQVtTeW1ib2wuaXRlcmF0b3JdKCksIC8vL1xuICAgICAgICBpdGVyYXRvckIgPSBzdHJpbmdCW1N5bWJvbC5pdGVyYXRvcl0oKTsgLy8vXG5cbiAgbGV0IGNoYXJhY3RlckEgPSBpdGVyYXRvckEubmV4dCgpLFxuICAgICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCksXG4gICAgICBjb2RlUG9pbnRBLFxuICAgICAgY29kZVBvaW50QjtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvZGVQb2ludEEgPSBjaGFyYWN0ZXJBLnZhbHVlID8gLy8vXG4gICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQS52YWx1ZS5jb2RlUG9pbnRBdCgwKSA6XG4gICAgICAgICAgICAgICAgICAgICAwO1xuICAgIGNvZGVQb2ludEIgPSBjaGFyYWN0ZXJCLnZhbHVlID8gLy8vXG4gICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQi52YWx1ZS5jb2RlUG9pbnRBdCgwKSA6XG4gICAgICAgICAgICAgICAgICAgICAwO1xuXG4gICAgZGlmZmVyZW5jZSA9IGNvZGVQb2ludEIgLSBjb2RlUG9pbnRBO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXJBLmRvbmUgfHwgY2hhcmFjdGVyQi5kb25lKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKTtcbiAgICBjaGFyYWN0ZXJCID0gaXRlcmF0b3JCLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBkaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihzdHJpbmcsIHNlYXJjaFN0cmluZykge1xuICBsZXQgaW5kZXggPSAtMSxcbiAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3Qgc2VhcmNoU3RyaW5nTGVuZ3RoID0gc3RybGVuKHNlYXJjaFN0cmluZyk7XG5cbiAgaWYgKHNlYXJjaFN0cmluZ0xlbmd0aCA+IDApIHtcbiAgICBsZXQgY2hhcmFjdGVyO1xuXG4gICAgY29uc3QgaXRlcmF0b3IgPSBzdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICAgIHNlYXJjaEl0ZXJhdG9yID0gc2VhcmNoU3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hDaGFyYWN0ZXIgPSBzZWFyY2hJdGVyYXRvci5uZXh0KCk7XG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBpbmRleCsrO1xuXG4gICAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgICAgaWYgKGNoYXJhY3Rlci52YWx1ZSA9PT0gc2VhcmNoQ2hhcmFjdGVyLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBzZWFyY2hTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgICAgIHN1YlN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQpLFxuICAgICAgICAgICAgICBkaWZmZXJlbmNlID0gc3RyY21wKHN1YlN0cmluZywgc2VhcmNoU3RyaW5nKTtcblxuICAgICAgICBpZiAoZGlmZmVyZW5jZSA9PT0gMCkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICBpbmRleCA9IC0xO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCA9IEluZmluaXR5KSB7XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBzdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICBjaGFyYWN0ZXJzID0gW107XG5cbiAgbGV0IGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICB3aGlsZSAoIWNoYXJhY3Rlci5kb25lKSB7XG4gICAgaWYgKGluZGV4ID09PSBlbmQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSBzdGFydCkge1xuICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlci52YWx1ZSk7IC8vL1xuICAgIH1cblxuICAgIGluZGV4KytcblxuICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IHN1YnN0cmluZyA9IGNoYXJhY3RlcnMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdWJzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RyY21wLFxuICBzdHJsZW4sXG4gIGluZGV4T2YsXG4gIHN1YnN0cmluZ1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGUoanNvbiwgbWlncmF0aW9uTWFwLCBsYXRlc3RWZXJzaW9uKSB7XG4gIGxldCB7IHZlcnNpb24gfSA9IGpzb247XG5cbiAgd2hpbGUgKHZlcnNpb24gIT09IGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBtaWdyYXRlRnVuY3Rpb24gPSBtaWdyYXRpb25NYXBbdmVyc2lvbl07XG5cbiAgICBqc29uID0gbWlncmF0ZUZ1bmN0aW9uKGpzb24pO1xuXG4gICAgKHsgdmVyc2lvbiB9ID0ganNvbik7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWdyYXRlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudDsgIC8vL1xyXG5cclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZXJhdGlvbnMuZm9yRWFjaCgob3BlcmF0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkob3BlcmF0aW9uLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IEFDQ0VQVF9IRUFERVIsIENPTlRFTlRfVFlQRV9IRUFERVIgfSBmcm9tIFwiLi4vaGVhZGVyc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG5cbiAgICByZXNwb25zZVR5cGUgPSBudWxsO1xuXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZXNwb25zZVR5cGUgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSByZXNwb25zZVR5cGU7ICAvLy9cblxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gU1RSSU5HKSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBoZWFkZXJzOyAvLy9cblxuICAgICAgaGVhZGVycyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG5cbiAgICByZXNwb25zZVR5cGUgPSBudWxsO1xuXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZXNwb25zZVR5cGUgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSByZXNwb25zZVR5cGU7ICAvLy9cblxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gU1RSSU5HKSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBoZWFkZXJzOyAvLy9cblxuICAgICAgaGVhZGVycyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSksXG4gICAgICAgIGFjY2VwdCA9IGhlYWRlcnNbQUNDRVBUX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKGNvbnRlbnRUeXBlID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgIGNvbnN0IGpzb24gPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gICAgY29udGVudCA9IGpzb25TdHJpbmc7ICAvLy9cbiAgfVxuXG4gIGlmIChyZXNwb25zZVR5cGUgIT09IG51bGwpIHtcbiAgICBPYmplY3QuYXNzaWduKHhtbEh0dHBSZXF1ZXN0LCB7XG4gICAgICByZXNwb25zZVR5cGVcbiAgICB9KTtcbiAgfVxuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2UgfSA9IHhtbEh0dHBSZXF1ZXN0LFxuICAgICAgICAgIHN0YXR1c0NvZGUgPSBzdGF0dXM7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlO1xuXG4gICAgICBpZiAoYWNjZXB0ID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgICBjb250ZW50ID0ganNvbjsgIC8vL1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGNvbnRlbnQsIHN0YXR1c0NvZGUpO1xuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFRfSEVBREVSLCBhY2NlcHQpO1xuICB9XG5cbiAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihDT05URU5UX1RZUEVfSEVBREVSLCBjb250ZW50VHlwZSk7XG4gIH1cblxuICAoY29udGVudCAhPT0gbnVsbCkgP1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoY29udGVudCkgOlxuICAgICAgeG1sSHR0cFJlcXVlc3Quc2VuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcmVxdWVzdFxufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCkge1xuICBjb25zdCBuYW1lID0gQUNDRVBUX0hFQURFUiwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGFjY2VwdDsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VFlwZSkge1xuICBjb25zdCBuYW1lID0gQ09OVEVOVF9UWVBFX0hFQURFUiwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGNvbnRlbnRUWXBlOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWV0aG9kcyB9IGZyb20gXCIuL21ldGhvZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZGVycyB9IGZyb20gXCIuL2hlYWRlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5Q29kZXMgfSBmcm9tIFwiLi9rZXlDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbmNvZGluZ3MgfSBmcm9tIFwiLi9lbmNvZGluZ3NcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhcmFjdGVycyB9IGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzQ29kZXMgfSBmcm9tIFwiLi9zdGF0dXNDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250ZW50VHlwZXMgfSBmcm9tIFwiLi9jb250ZW50VHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzTWVzc2FnZXMgfSBmcm9tIFwiLi9zdGF0dXNNZXNzYWdlc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIGlmICghdGVybWluYXRlKSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4ucHJlZGVjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4SW5kZXggPSBwcmVkZWNlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IHByZWRlY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4uc3VjY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCwgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9zZWFyY2hcIjtcblxuY29uc3QgeyBsYXN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGlzVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUodmVydGV4KSB7XG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKHZlcnRleCksXG4gICAgICAgICAgbGFzdEZvcndhcmRzUmVhY2hhYmxlVmVydGV4ID0gbGFzdChmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKSxcbiAgICAgICAgICB2ZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSA9ICh2ZXJ0ZXggPT09IGxhc3RGb3J3YXJkc1JlYWNoYWJsZVZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4Rm9yd2FyZHNSZWFjaGFibGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgcmV0cmlldmVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCA9IHRhaWwoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHJldHJpZXZlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcygpLFxuICAgICAgICAgIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzVGFpbCA9IHRhaWwoYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybWluYXRlID0gKHZlcnRleEEgPT09IHZlcnRleEIpO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyh2ZXJ0ZXggPSBudWxsKSB7XG4gICAgY29uc3QgdmVydGV4QSA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybWluYXRlID0gKHZlcnRleEEgPT09IHZlcnRleEIpO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXM7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckluZGV4ZXMoaW5kZXhlcykgeyAgLy8vXG4gIGluZGV4ZXMuc29ydCgoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXgpID0+IHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RJbmRleCA8IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RJbmRleCA+IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleGVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpIHtcbiAgICAgICAgdmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCkge1xuICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCByZWFjaGFibGVWZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLmJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVhY2hhYmxlSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXMocmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHJlYWNoYWJsZUluZGV4ZXMpO1xuXG4gICAgcmVhY2hhYmxlVmVydGV4ZXMuZm9yRWFjaCgocmVhY2hhYmxlVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVhY2hhYmxlSW5kZXggPSByZWFjaGFibGVJbmRleGVzW2luZGV4XTtcblxuICAgICAgaW5kZXggPSByZWFjaGFibGVJbmRleDsgLy8vXG5cbiAgICAgIHJlYWNoYWJsZVZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZ2V0Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICBlZGdlcyA9IGN5Y2xpY0VkZ2VzOyAgLy8vXG5cbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRnZSB9IGZyb20gXCIuL2VkZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3ljbGUgfSBmcm9tIFwiLi9jeWNsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZXJ0ZXggfSBmcm9tIFwiLi92ZXJ0ZXhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2RpcmVjdGVkR3JhcGhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWRnZSwgRGlyZWN0ZWRHcmFwaCB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuY29uc3QgZWRnZTEgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vZWFzeS13aXRoLXN0eWxlXCIsIFwiLi9lYXN5LWxheW91dFwiKSxcbiAgICAgIGVkZ2UyID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL3dpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktd2l0aC1zdHlsZVwiKSxcbiAgICAgIGVkZ2UzID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoXCIuL2Vhc3ktbGF5b3V0XCIsIFwiLi9vY2NhbS1sZXhlcnNcIiksXG4gICAgICBlZGdlNCA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKFwiLi9lYXN5LXdpdGgtc3R5bGVcIiwgXCIuL2Vhc3ktbGF5b3V0XCIpLFxuICAgICAgZWRnZTUgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShcIi4vb2NjYW0tbGV4ZXJzXCIsIFwiLi93aXRoLXN0eWxlXCIpO1xuXG5jb25zdCBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tTm90aGluZygpO1xuXG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTEpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UyKTtcbmRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlMyk7XG5kaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZTQpO1xuZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2U1KTtcblxuZGlyZWN0ZWRHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoXCIuL29jY2FtLWxleGVyc1wiKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQTs7Ozs7bUNBRUEsV0FBQTs7O2VBQXFCOzs7QUFBTixxQkFBTTtNQUNuQixZQUFZLGtCQUFrQixrQkFBa0I7QUFDOUMsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxtQkFBbUI7O01BRzFCLHNCQUFzQjtBQUNwQixlQUFPLEtBQUs7O01BR2Qsc0JBQXNCO0FBQ3BCLGVBQU8sS0FBSzs7TUFHZCxNQUFNLE1BQU07QUFDVixjQUFNLG1CQUFtQixLQUFLLHVCQUN4QixtQkFBbUIsS0FBSyx1QkFDeEIsVUFBWSxLQUFLLHFCQUFxQixvQkFBc0IsS0FBSyxxQkFBcUI7QUFFNUYsZUFBTzs7TUFHVCxnQkFBZ0IsWUFBWTtBQUMxQixjQUFNLFVBQVksS0FBSyxxQkFBcUIsY0FBZ0IsS0FBSyxxQkFBcUI7QUFFdEYsZUFBTzs7TUFHVCxzQkFBc0Isa0JBQWtCO0FBQ3RDLGNBQU0sVUFBVyxLQUFLLHFCQUFxQjtBQUUzQyxlQUFPOztNQUdULHNCQUFzQixrQkFBa0I7QUFDdEMsY0FBTSxVQUFXLEtBQUsscUJBQXFCO0FBRTNDLGVBQU87O01BR1QsaUJBQWlCLGtCQUFrQixrQkFBa0I7QUFDbkQsY0FBTSxVQUFZLEtBQUsscUJBQXFCLG9CQUFzQixLQUFLLHFCQUFxQjtBQUU1RixlQUFPOzthQUdGLHdDQUF3QyxrQkFBa0Isa0JBQWtCO0FBQ2pGLGNBQU0sT0FBTyxJQUFJLEtBQUssa0JBQWtCO0FBRXhDLGVBQU87Ozs7OztBQ25EWDs7Ozs7Ozs7Ozs7OztVQUVnQixnQkFBQTtlQUFBOztVQWlCQSwwQkFBQTtlQUFBOzs7QUFqQlQsMkJBQXVCLFVBQVE7QUFDcEMsZUFBUyxLQUFLLENBQUMsYUFBYSxpQkFBQTtBQUMxQixjQUFNLG1CQUFtQixZQUFZLFlBQy9CLG9CQUFvQixhQUFhO0FBRXZDLFlBQUksT0FBTzttQkFFQSxtQkFBbUIsbUJBQW1CO0FBQy9DLGlCQUFP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
