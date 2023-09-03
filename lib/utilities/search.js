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
                var _$vertex = immediateSuccessorVertex, vertexIndex = _$vertex.getIndex(), predecessorVertexIndex = predecessorVertex.getIndex();
                if (vertexIndex > predecessorVertexIndex) {
                    var terminate = forwardsDepthFirstSearch(_$vertex, callback, visitedVertexes, predecessorVertexes);
                    if (terminate) {
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
                var _$vertex = immediatePredecessorVertex, vertexIndex = _$vertex.getIndex(), successorVertexIndex = successorVertex.getIndex();
                if (vertexIndex < successorVertexIndex) {
                    var terminate = backwardsDepthFirstSearch(_$vertex, callback, visitedVertexes, successorVertexes);
                    if (terminate) {
                        return true;
                    }
                }
            });
        }
    }
    return terminate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmlzaXRlZFZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKCF2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7IC8vL1xuXG4gICAgdmlzaXRlZFZlcnRleGVzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBbIC8vL1xuICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICBwcmVkZWNlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhJbmRleCA9IHByZWRlY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHZlcnRleEluZGV4ID4gcHJlZGVjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHN1Y2Nlc3NvclZlcnRleGVzID0gW10pIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnN1Y2Nlc3NvclZlcnRleGVzLFxuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHZlcnRleEluZGV4IDwgc3VjY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuIl0sIm5hbWVzIjpbImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXgiLCJjYWxsYmFjayIsInZpc2l0ZWRWZXJ0ZXhlcyIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ0ZXJtaW5hdGUiLCJ2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCIsImluY2x1ZGVzIiwidmlzaXRlZFZlcnRleCIsInB1c2giLCJwcmVkZWNlc3NvclZlcnRleCIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJ2ZXJ0ZXhJbmRleCIsImdldEluZGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhJbmRleCIsInN1Y2Nlc3NvclZlcnRleGVzIiwic3VjY2Vzc29yVmVydGV4Iiwic29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSx3QkFBd0I7ZUFBeEJBOztJQXVDQUMseUJBQXlCO2VBQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZDVCxTQUFTRCx5QkFBeUJFLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxlQUFlO1FBQUVDLHNCQUFBQSxpRUFBc0IsRUFBRTtJQUNsRyxJQUFJQyxZQUFZO0lBRWhCLElBQU1DLGdDQUFnQ0gsZ0JBQWdCSSxRQUFRLENBQUNOO0lBRS9ELElBQUksQ0FBQ0ssK0JBQStCO1FBQ2xDLElBQU1FLGdCQUFnQlAsUUFBUSxHQUFHO1FBRWpDRSxnQkFBZ0JNLElBQUksQ0FBQ0Q7UUFFckJILFlBQVlILFNBQVNELFFBQVFHO1FBRTdCLElBQUksQ0FBQ0MsV0FBVztZQUNkLElBQU1LLG9CQUFvQlQsUUFBUyxHQUFHO1lBRXRDRyxzQkFBc0IsQUFDcEIscUJBQUdBLDRCQURpQjtnQkFFcEJNO2FBQ0Q7WUFFREwsWUFBWUosT0FBT1UsNEJBQTRCLENBQUMsU0FBQ0M7Z0JBQy9DLElBQU1YLFdBQVNXLDBCQUNUQyxjQUFjWixTQUFPYSxRQUFRLElBQzdCQyx5QkFBeUJMLGtCQUFrQkksUUFBUTtnQkFFekQsSUFBSUQsY0FBY0Usd0JBQXdCO29CQUN4QyxJQUFNVixZQUFZTix5QkFBeUJFLFVBQVFDLFVBQVVDLGlCQUFpQkM7b0JBRTlFLElBQUlDLFdBQVc7d0JBQ2IsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTTCwwQkFBMEJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxlQUFlO1FBQUVhLG9CQUFBQSxpRUFBb0IsRUFBRTtJQUNqRyxJQUFJWCxZQUFZO0lBRWhCLElBQU1DLGdDQUFnQ0gsZ0JBQWdCSSxRQUFRLENBQUNOO0lBRS9ELElBQUksQ0FBQ0ssK0JBQStCO1FBQ2xDLElBQU1FLGdCQUFnQlAsUUFBUSxHQUFHO1FBRWpDRSxnQkFBZ0JNLElBQUksQ0FBQ0Q7UUFFckJILFlBQVlILFNBQVNELFFBQVFlO1FBRTdCLElBQUksQ0FBQ1gsV0FBVztZQUNkLElBQU1ZLGtCQUFrQmhCLFFBQVMsR0FBRztZQUVwQ2Usb0JBQW9CLEFBQ2xCLHFCQUFHQSwwQkFEZTtnQkFFbEJDO2FBQ0Q7WUFFRFosWUFBWUosT0FBT2lCLDhCQUE4QixDQUFDLFNBQUNDO2dCQUNqRCxJQUFNbEIsV0FBU2tCLDRCQUNUTixjQUFjWixTQUFPYSxRQUFRLElBQzdCTSx1QkFBdUJILGdCQUFnQkgsUUFBUTtnQkFFckQsSUFBSUQsY0FBY08sc0JBQXNCO29CQUN0QyxJQUFNZixZQUFZTCwwQkFBMEJDLFVBQVFDLFVBQVVDLGlCQUFpQmE7b0JBRS9FLElBQUlYLFdBQVc7d0JBQ2IsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==