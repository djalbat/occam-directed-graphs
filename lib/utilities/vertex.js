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
    orderVertices: function() {
        return orderVertices;
    },
    vertexNamesFromVertices: function() {
        return vertexNamesFromVertices;
    },
    forwardsDepthFirstSearch: function() {
        return forwardsDepthFirstSearch;
    }
});
function orderVertices(vertices) {
    vertices.sort(function(firstVertex, secondVertex) {
        var firstVertexIndex = firstVertex.getIndex(), secondVertexIndex = secondVertex.getIndex();
        if (false) {
        ///
        } else if (firstVertexIndex < secondVertexIndex) {
            return -1;
        } else if (firstVertexIndex > secondVertexIndex) {
            return +1;
        }
    });
    var orderedVertices = vertices; ///
    return orderedVertices;
}
function vertexNamesFromVertices(vertices) {
    var vertexNames = vertices.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
    });
    return vertexNames;
}
function forwardsDepthFirstSearch(vertex, callback) {
    var getPredecessorVertices = function getPredecessorVertices() {
        var predecessorVertices = [];
        return predecessorVertices;
    };
    var visitedVertices = [];
    retrieveForwardsVisitedVertices(vertex, function(visitedVertex, getPredecessorVertices) {
        var terminate = callback(visitedVertex, getPredecessorVertices); ///
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
        var visitedVertex = vertex; ///
        terminate = callback(visitedVertex, getPredecessorVertices);
        if (terminate !== true) {
            visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                terminate = retrieveForwardsVisitedVertices(immediateSuccessorVertex, callback, function() {
                    var predecessorVertices = getPredecessorVertices();
                    var immediatePredecessorVertex = vertex, predecessorVertex = immediatePredecessorVertex; ///
                    predecessorVertices = predecessorVertices.concat(predecessorVertex);
                    return predecessorVertices;
                });
                return terminate;
            });
        }
    }
    return terminate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcykgeyAgLy8vXG4gIHZlcnRpY2VzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gdmVydGljZXM7ICAvLy9cblxuICByZXR1cm4gb3JkZXJlZFZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXModmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpOyAgLy8vXG5cbiAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH0sIGdldFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpKTtcblxuICByZXR1cm4gdmlzaXRlZFZlcnRpY2VzO1xuXG4gIGZ1bmN0aW9uIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXModmVydGV4LCBjYWxsYmFjaywgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgaWYgKHZlcnRleC52aXNpdGVkID09PSBmYWxzZSkge1xuICAgIHZlcnRleC52aXNpdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgdGVybWluYXRlID0gcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsIGNhbGxiYWNrLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCk7XG5cbiAgICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMuY29uY2F0KHByZWRlY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJvcmRlclZlcnRpY2VzIiwidmVydGV4TmFtZXNGcm9tVmVydGljZXMiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0aWNlcyIsInNvcnQiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsImZpcnN0VmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInNlY29uZFZlcnRleEluZGV4Iiwib3JkZXJlZFZlcnRpY2VzIiwidmVydGV4TmFtZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImNhbGxiYWNrIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGljZXMiLCJyZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzIiwidmlzaXRlZFZlcnRleCIsInRlcm1pbmF0ZSIsInB1c2giLCJmb3JFYWNoIiwicmVzZXRWaXNpdGVkIiwidmlzaXRlZCIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4IiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLGFBQWE7ZUFBYkE7O0lBbUJBQyx1QkFBdUI7ZUFBdkJBOztJQVVBQyx3QkFBd0I7ZUFBeEJBOzs7QUE3QlQsU0FBU0YsY0FBY0csUUFBUTtJQUNwQ0EsU0FBU0MsS0FBSyxTQUFDQyxhQUFhQztRQUMxQixJQUFNQyxtQkFBbUJGLFlBQVlHLFlBQy9CQyxvQkFBb0JILGFBQWFFO1FBRXZDLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlELG1CQUFtQkUsbUJBQW1CO1lBQy9DLE9BQU8sQ0FBQztRQUNWLE9BQVEsSUFBSUYsbUJBQW1CRSxtQkFBbUI7WUFDaEQsT0FBTyxDQUFDO1FBQ1Y7SUFDRjtJQUVBLElBQU1DLGtCQUFrQlAsVUFBVyxHQUFHO0lBRXRDLE9BQU9PO0FBQ1Q7QUFFTyxTQUFTVCx3QkFBd0JFLFFBQVE7SUFDOUMsSUFBTVEsY0FBY1IsU0FBU1MsSUFBSSxTQUFDQztRQUNoQyxJQUFNQyxhQUFhRCxPQUFPRTtRQUUxQixPQUFPRDtJQUNUO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNULHlCQUF5QlcsTUFBTSxFQUFFRyxRQUFRO1FBZTlDQyx5QkFBVCxTQUFTQTtRQUNQLElBQU1DLHNCQUFzQixFQUFFO1FBRTlCLE9BQU9BO0lBQ1Q7SUFsQkEsSUFBTUMsa0JBQWtCLEVBQUU7SUFFMUJDLGdDQUFnQ1AsUUFBUSxTQUFDUSxlQUFlSjtRQUN0RCxJQUFNSyxZQUFZTixTQUFTSyxlQUFlSix5QkFBMEIsR0FBRztRQUV2RUUsZ0JBQWdCSSxLQUFLRjtRQUVyQixPQUFPQztJQUNULEdBQUdMO0lBRUhFLGdCQUFnQkssUUFBUSxTQUFDSDtlQUFrQkEsY0FBY0k7O0lBRXpELE9BQU9OO0FBT1Q7QUFFQSxTQUFTQyxnQ0FBZ0NQLE1BQU0sRUFBRUcsUUFBUSxFQUFFQyxzQkFBc0I7SUFDL0UsSUFBSUssWUFBWTtJQUVoQixJQUFJVCxPQUFPYSxZQUFZLE9BQU87UUFDNUJiLE9BQU9hLFVBQVU7UUFFakIsSUFBTUwsZ0JBQWdCUixRQUFTLEdBQUc7UUFFbENTLFlBQVlOLFNBQVNLLGVBQWVKO1FBRXBDLElBQUlLLGNBQWMsTUFBTTtZQUN0QkQsY0FBY00sNkJBQTZCLFNBQUNDO2dCQUMxQ04sWUFBWUYsZ0NBQWdDUSwwQkFBMEJaLFVBQVU7b0JBQzlFLElBQUlFLHNCQUFzQkQ7b0JBRTFCLElBQU1ZLDZCQUE2QmhCLFFBQzdCaUIsb0JBQW9CRCw0QkFBNEIsR0FBRztvQkFFekRYLHNCQUFzQkEsb0JBQW9CYSxPQUFPRDtvQkFFakQsT0FBT1o7Z0JBQ1Q7Z0JBRUEsT0FBT0k7WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=