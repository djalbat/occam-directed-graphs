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
    var terminate = false;
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
    var terminate = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIGlmICghdGVybWluYXRlKSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4ucHJlZGVjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4SW5kZXggPSBwcmVkZWNlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IHByZWRlY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4uc3VjY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iXSwibmFtZXMiOlsiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInZlcnRleCIsImNhbGxiYWNrIiwidmlzaXRlZFZlcnRleGVzIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsInZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJ2aXNpdGVkVmVydGV4IiwicHVzaCIsInByZWRlY2Vzc29yVmVydGV4Iiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJwcmVkZWNlc3NvclZlcnRleEluZGV4Iiwic3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLHdCQUF3QjtlQUF4QkE7O0lBdUNBQyx5QkFBeUI7ZUFBekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdkNULFNBQVNELHlCQUF5QkUsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGVBQWU7UUFBRUMsc0JBQUFBLGlFQUFzQixFQUFFO0lBQ2xHLElBQUlDLFlBQVk7SUFFaEIsSUFBTUMsZ0NBQWdDSCxnQkFBZ0JJLFFBQVEsQ0FBQ047SUFFL0QsSUFBSSxDQUFDSywrQkFBK0I7UUFDbEMsSUFBTUUsZ0JBQWdCUCxRQUFRLEdBQUc7UUFFakNFLGdCQUFnQk0sSUFBSSxDQUFDRDtRQUVyQkgsWUFBWUgsU0FBU0QsUUFBUUc7UUFFN0IsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsSUFBTUssb0JBQW9CVCxRQUFTLEdBQUc7WUFFdENHLHNCQUFzQixBQUNwQixxQkFBR0EsNEJBRGlCO2dCQUVwQk07YUFDRDtZQUVETCxZQUFZSixPQUFPVSw0QkFBNEIsQ0FBQyxTQUFDQztnQkFDL0MsSUFBTVgsV0FBU1csMEJBQ1RDLGNBQWNaLFNBQU9hLFFBQVEsSUFDN0JDLHlCQUF5Qkwsa0JBQWtCSSxRQUFRO2dCQUV6RCxJQUFJRCxjQUFjRSx3QkFBd0I7b0JBQ3hDLElBQU1WLFlBQVlOLHlCQUF5QkUsVUFBUUMsVUFBVUMsaUJBQWlCQztvQkFFOUUsSUFBSUMsV0FBVzt3QkFDYixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNMLDBCQUEwQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGVBQWU7UUFBRWEsb0JBQUFBLGlFQUFvQixFQUFFO0lBQ2pHLElBQUlYLFlBQVk7SUFFaEIsSUFBTUMsZ0NBQWdDSCxnQkFBZ0JJLFFBQVEsQ0FBQ047SUFFL0QsSUFBSSxDQUFDSywrQkFBK0I7UUFDbEMsSUFBTUUsZ0JBQWdCUCxRQUFRLEdBQUc7UUFFakNFLGdCQUFnQk0sSUFBSSxDQUFDRDtRQUVyQkgsWUFBWUgsU0FBU0QsUUFBUWU7UUFFN0IsSUFBSSxDQUFDWCxXQUFXO1lBQ2QsSUFBTVksa0JBQWtCaEIsUUFBUyxHQUFHO1lBRXBDZSxvQkFBb0IsQUFDbEIscUJBQUdBLDBCQURlO2dCQUVsQkM7YUFDRDtZQUVEWixZQUFZSixPQUFPaUIsOEJBQThCLENBQUMsU0FBQ0M7Z0JBQ2pELElBQU1sQixXQUFTa0IsNEJBQ1ROLGNBQWNaLFNBQU9hLFFBQVEsSUFDN0JNLHVCQUF1QkgsZ0JBQWdCSCxRQUFRO2dCQUVyRCxJQUFJRCxjQUFjTyxzQkFBc0I7b0JBQ3RDLElBQU1mLFlBQVlMLDBCQUEwQkMsVUFBUUMsVUFBVUMsaUJBQWlCYTtvQkFFL0UsSUFBSVgsV0FBVzt3QkFDYixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9