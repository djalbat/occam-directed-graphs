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
function forwardsDepthFirstSearch(vertex, callback, visitedVertexes) {
    var predecessorVertexes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var terminate = true;
    var visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
    if (!visitedVertexesIncludesVertex) {
        var visitedVertex = vertex; ///
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, predecessorVertexes);
        if (!terminate) {
            var predecessorVertex = vertex; ///
            predecessorVertexes = _to_consumable_array(predecessorVertexes).concat([
                predecessorVertex
            ]);
            terminate = vertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                var _$vertex = immediateSuccessorVertex, terminate = forwardsDepthFirstSearch(_$vertex, callback, visitedVertexes, predecessorVertexes);
                if (terminate) {
                    return true;
                }
            });
        }
    }
    return terminate;
}
function backwardsDepthFirstSearch(vertex, callback, visitedVertexes) {
    var successorVertexes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var terminate = true;
    var visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
    if (!visitedVertexesIncludesVertex) {
        var visitedVertex = vertex; ///
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, successorVertexes);
        if (!terminate) {
            var successorVertex = vertex; ///
            successorVertexes = _to_consumable_array(successorVertexes).concat([
                successorVertex
            ]);
            terminate = vertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                var _$vertex = immediatePredecessorVertex, terminate = backwardsDepthFirstSearch(_$vertex, callback, visitedVertexes, successorVertexes);
                if (terminate) {
                    return true;
                }
            });
        }
    }
    return terminate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmlzaXRlZFZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKCF2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7IC8vL1xuXG4gICAgdmlzaXRlZFZlcnRleGVzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBbIC8vL1xuICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICBwcmVkZWNlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYXRlID0gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHN1Y2Nlc3NvclZlcnRleGVzID0gW10pIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnN1Y2Nlc3NvclZlcnRleGVzLFxuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuIl0sIm5hbWVzIjpbImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXgiLCJjYWxsYmFjayIsInZpc2l0ZWRWZXJ0ZXhlcyIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ0ZXJtaW5hdGUiLCJ2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCIsImluY2x1ZGVzIiwidmlzaXRlZFZlcnRleCIsInB1c2giLCJwcmVkZWNlc3NvclZlcnRleCIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleCIsInNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLHdCQUF3QjtlQUF4QkE7O0lBa0NBQyx5QkFBeUI7ZUFBekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbENULFNBQVNELHlCQUF5QkUsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGVBQWU7UUFBRUMsc0JBQUFBLGlFQUFzQixFQUFFO0lBQ2xHLElBQUlDLFlBQVk7SUFFaEIsSUFBTUMsZ0NBQWdDSCxnQkFBZ0JJLFNBQVNOO0lBRS9ELElBQUksQ0FBQ0ssK0JBQStCO1FBQ2xDLElBQU1FLGdCQUFnQlAsUUFBUSxHQUFHO1FBRWpDRSxnQkFBZ0JNLEtBQUtEO1FBRXJCSCxZQUFZSCxTQUFTRCxRQUFRRztRQUU3QixJQUFJLENBQUNDLFdBQVc7WUFDZCxJQUFNSyxvQkFBb0JULFFBQVMsR0FBRztZQUV0Q0csc0JBQXNCLEFBQ3BCLHFCQUFHQSw0QkFEaUI7Z0JBRXBCTTthQUNEO1lBRURMLFlBQVlKLE9BQU9VLDZCQUE2QixTQUFDQztnQkFDL0MsSUFBTVgsV0FBU1csMEJBQ1RQLFlBQVlOLHlCQUF5QkUsVUFBUUMsVUFBVUMsaUJBQWlCQztnQkFFOUUsSUFBSUMsV0FBVztvQkFDYixPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNMLDBCQUEwQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGVBQWU7UUFBRVUsb0JBQUFBLGlFQUFvQixFQUFFO0lBQ2pHLElBQUlSLFlBQVk7SUFFaEIsSUFBTUMsZ0NBQWdDSCxnQkFBZ0JJLFNBQVNOO0lBRS9ELElBQUksQ0FBQ0ssK0JBQStCO1FBQ2xDLElBQU1FLGdCQUFnQlAsUUFBUSxHQUFHO1FBRWpDRSxnQkFBZ0JNLEtBQUtEO1FBRXJCSCxZQUFZSCxTQUFTRCxRQUFRWTtRQUU3QixJQUFJLENBQUNSLFdBQVc7WUFDZCxJQUFNUyxrQkFBa0JiLFFBQVMsR0FBRztZQUVwQ1ksb0JBQW9CLEFBQ2xCLHFCQUFHQSwwQkFEZTtnQkFFbEJDO2FBQ0Q7WUFFRFQsWUFBWUosT0FBT2MsK0JBQStCLFNBQUNDO2dCQUNqRCxJQUFNZixXQUFTZSw0QkFDVFgsWUFBWUwsMEJBQTBCQyxVQUFRQyxVQUFVQyxpQkFBaUJVO2dCQUUvRSxJQUFJUixXQUFXO29CQUNiLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=