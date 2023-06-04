"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    forwardsDepthFirstSearch: function() {
        return forwardsDepthFirstSearch;
    },
    backwardsDepthFirstSearch: function() {
        return backwardsDepthFirstSearch;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function forwardsDepthFirstSearch(vertex, callback) {
    var visitedVertexes = [];
    retrieveForwardsVisitedVertexes(vertex, function(visitedVertex, predecessorVertexes) {
        var terminate = callback(visitedVertex, predecessorVertexes); ///
        visitedVertexes.push(visitedVertex);
        return terminate;
    });
    visitedVertexes.forEach(function(visitedVertex) {
        visitedVertex.resetVisited();
    });
    return visitedVertexes;
}
function backwardsDepthFirstSearch(vertex, callback) {
    var visitedVertexes = [];
    retrieveBackwardsVisitedVertexes(vertex, function(visitedVertex, successorVertexes) {
        var terminate = callback(visitedVertex, successorVertexes); ///
        visitedVertexes.push(visitedVertex);
        return terminate;
    });
    visitedVertexes.forEach(function(visitedVertex) {
        visitedVertex.resetVisited();
    });
    return visitedVertexes;
}
function retrieveForwardsVisitedVertexes(vertex, callback) {
    var predecessorVertexes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var terminate = false;
    var visited = vertex.isVisited();
    if (visited === false) {
        var visited1 = true;
        vertex.setVisited(visited1);
        var visitedVertex = vertex; ///
        terminate = callback(visitedVertex, predecessorVertexes);
        if (terminate !== true) {
            visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                var predecessorVertex = vertex; ///
                predecessorVertexes = _to_consumable_array(predecessorVertexes).concat([
                    predecessorVertex
                ]);
                terminate = retrieveForwardsVisitedVertexes(immediateSuccessorVertex, callback, predecessorVertexes);
                return terminate;
            });
        }
    }
    return terminate;
}
function retrieveBackwardsVisitedVertexes(vertex, callback) {
    var successorVertexes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var terminate = false;
    var visited = vertex.isVisited();
    if (visited === false) {
        var visited1 = true;
        vertex.setVisited(visited1);
        var visitedVertex = vertex; ///
        terminate = callback(visitedVertex, successorVertexes);
        if (terminate !== true) {
            visitedVertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                var successorVertex = vertex; ///
                successorVertexes = _to_consumable_array(successorVertexes).concat([
                    successorVertex
                ]);
                terminate = retrieveForwardsVisitedVertexes(immediatePredecessorVertex, callback, successorVertexes);
                return terminate;
            });
        }
    }
    return terminate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSA9PiB7XG4gICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgfSk7XG5cbiAgdmlzaXRlZFZlcnRleGVzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpO1xuICB9KTtcblxuICByZXR1cm4gdmlzaXRlZFZlcnRleGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gIHJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIHN1Y2Nlc3NvclZlcnRleGVzKSA9PiB7XG4gICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCwgc3VjY2Vzc29yVmVydGV4ZXMpOyAgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH0pO1xuXG4gIHZpc2l0ZWRWZXJ0ZXhlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyh2ZXJ0ZXgsIGNhbGxiYWNrLCBwcmVkZWNlc3NvclZlcnRleGVzID0gW10pIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZpc2l0ZWQgPSB2ZXJ0ZXguaXNWaXNpdGVkKCk7XG5cbiAgaWYgKHZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IHRydWU7XG5cbiAgICB2ZXJ0ZXguc2V0VmlzaXRlZCh2aXNpdGVkKTtcblxuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4XG4gICAgICAgIF07XG5cbiAgICAgICAgdGVybWluYXRlID0gcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsIGNhbGxiYWNrLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXModmVydGV4LCBjYWxsYmFjaywgc3VjY2Vzc29yVmVydGV4ZXMgPSBbXSkge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3QgdmlzaXRlZCA9IHZlcnRleC5pc1Zpc2l0ZWQoKTtcblxuICBpZiAodmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHZlcnRleC5zZXRWaXNpdGVkKHZpc2l0ZWQpO1xuXG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCwgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgICAuLi5zdWNjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhcbiAgICAgICAgXTtcblxuICAgICAgICB0ZXJtaW5hdGUgPSByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LCBjYWxsYmFjaywgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuIl0sIm5hbWVzIjpbImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXgiLCJjYWxsYmFjayIsInZpc2l0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJ2aXNpdGVkVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsInB1c2giLCJmb3JFYWNoIiwicmVzZXRWaXNpdGVkIiwicmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsInZpc2l0ZWQiLCJpc1Zpc2l0ZWQiLCJzZXRWaXNpdGVkIiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4Iiwic29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsd0JBQXdCO2VBQXhCQTs7SUFrQkFDLHlCQUF5QjtlQUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQlQsU0FBU0QseUJBQXlCRSxNQUFNLEVBQUVDLFFBQVE7SUFDdkQsSUFBTUMsa0JBQWtCLEVBQUU7SUFFMUJDLGdDQUFnQ0gsUUFBUSxTQUFDSSxlQUFlQztRQUN0RCxJQUFNQyxZQUFZTCxTQUFTRyxlQUFlQyxzQkFBdUIsR0FBRztRQUVwRUgsZ0JBQWdCSyxLQUFLSDtRQUVyQixPQUFPRTtJQUNUO0lBRUFKLGdCQUFnQk0sUUFBUSxTQUFDSjtRQUN2QkEsY0FBY0s7SUFDaEI7SUFFQSxPQUFPUDtBQUNUO0FBRU8sU0FBU0gsMEJBQTBCQyxNQUFNLEVBQUVDLFFBQVE7SUFDeEQsSUFBTUMsa0JBQWtCLEVBQUU7SUFFMUJRLGlDQUFpQ1YsUUFBUSxTQUFDSSxlQUFlTztRQUN2RCxJQUFNTCxZQUFZTCxTQUFTRyxlQUFlTyxvQkFBcUIsR0FBRztRQUVsRVQsZ0JBQWdCSyxLQUFLSDtRQUVyQixPQUFPRTtJQUNUO0lBRUFKLGdCQUFnQk0sUUFBUSxTQUFDSjtRQUN2QkEsY0FBY0s7SUFDaEI7SUFFQSxPQUFPUDtBQUNUO0FBRUEsU0FBU0MsZ0NBQWdDSCxNQUFNLEVBQUVDLFFBQVE7UUFBRUksc0JBQUFBLGlFQUFzQixFQUFFO0lBQ2pGLElBQUlDLFlBQVk7SUFFaEIsSUFBTU0sVUFBVVosT0FBT2E7SUFFdkIsSUFBSUQsWUFBWSxPQUFPO1FBQ3JCLElBQU1BLFdBQVU7UUFFaEJaLE9BQU9jLFdBQVdGO1FBRWxCLElBQU1SLGdCQUFnQkosUUFBUyxHQUFHO1FBRWxDTSxZQUFZTCxTQUFTRyxlQUFlQztRQUVwQyxJQUFJQyxjQUFjLE1BQU07WUFDdEJGLGNBQWNXLDZCQUE2QixTQUFDQztnQkFDMUMsSUFBTUMsb0JBQW9CakIsUUFBUyxHQUFHO2dCQUV0Q0ssc0JBQXNCLEFBQ3BCLHFCQUFHQSw0QkFEaUI7b0JBRXBCWTtpQkFDRDtnQkFFRFgsWUFBWUgsZ0NBQWdDYSwwQkFBMEJmLFVBQVVJO2dCQUVoRixPQUFPQztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSSxpQ0FBaUNWLE1BQU0sRUFBRUMsUUFBUTtRQUFFVSxvQkFBQUEsaUVBQW9CLEVBQUU7SUFDaEYsSUFBSUwsWUFBWTtJQUVoQixJQUFNTSxVQUFVWixPQUFPYTtJQUV2QixJQUFJRCxZQUFZLE9BQU87UUFDckIsSUFBTUEsV0FBVTtRQUVoQlosT0FBT2MsV0FBV0Y7UUFFbEIsSUFBTVIsZ0JBQWdCSixRQUFTLEdBQUc7UUFFbENNLFlBQVlMLFNBQVNHLGVBQWVPO1FBRXBDLElBQUlMLGNBQWMsTUFBTTtZQUN0QkYsY0FBY2MsK0JBQStCLFNBQUNDO2dCQUM1QyxJQUFNQyxrQkFBa0JwQixRQUFTLEdBQUc7Z0JBRXBDVyxvQkFBb0IsQUFDbEIscUJBQUdBLDBCQURlO29CQUVsQlM7aUJBQ0Q7Z0JBRURkLFlBQVlILGdDQUFnQ2dCLDRCQUE0QmxCLFVBQVVVO2dCQUVsRixPQUFPTDtZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==