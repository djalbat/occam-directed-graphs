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
        visitedVertex.resetVisited();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcykgeyAgLy8vXG4gIHZlcnRpY2VzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gdmVydGljZXM7ICAvLy9cblxuICByZXR1cm4gb3JkZXJlZFZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXModmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpOyAgLy8vXG5cbiAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH0sIGdldFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcblxuICBmdW5jdGlvbiBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgY2FsbGJhY2ssIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGlmICh2ZXJ0ZXgudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICB2ZXJ0ZXgudmlzaXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgIGxldCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iXSwibmFtZXMiOlsib3JkZXJWZXJ0aWNlcyIsInZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmVydGljZXMiLCJzb3J0IiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJmaXJzdFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJzZWNvbmRWZXJ0ZXhJbmRleCIsIm9yZGVyZWRWZXJ0aWNlcyIsInZlcnRleE5hbWVzIiwibWFwIiwidmVydGV4IiwidmVydGV4TmFtZSIsImdldE5hbWUiLCJjYWxsYmFjayIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRpY2VzIiwicmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJ0ZXJtaW5hdGUiLCJwdXNoIiwiZm9yRWFjaCIsInJlc2V0VmlzaXRlZCIsInZpc2l0ZWQiLCJzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJwcmVkZWNlc3NvclZlcnRleCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxhQUFhO2VBQWJBOztJQW1CQUMsdUJBQXVCO2VBQXZCQTs7SUFVQUMsd0JBQXdCO2VBQXhCQTs7O0FBN0JULFNBQVNGLGNBQWNHLFFBQVE7SUFDcENBLFNBQVNDLEtBQUssU0FBQ0MsYUFBYUM7UUFDMUIsSUFBTUMsbUJBQW1CRixZQUFZRyxZQUMvQkMsb0JBQW9CSCxhQUFhRTtRQUV2QyxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJRCxtQkFBbUJFLG1CQUFtQjtZQUMvQyxPQUFPLENBQUM7UUFDVixPQUFRLElBQUlGLG1CQUFtQkUsbUJBQW1CO1lBQ2hELE9BQU8sQ0FBQztRQUNWO0lBQ0Y7SUFFQSxJQUFNQyxrQkFBa0JQLFVBQVcsR0FBRztJQUV0QyxPQUFPTztBQUNUO0FBRU8sU0FBU1Qsd0JBQXdCRSxRQUFRO0lBQzlDLElBQU1RLGNBQWNSLFNBQVNTLElBQUksU0FBQ0M7UUFDaEMsSUFBTUMsYUFBYUQsT0FBT0U7UUFFMUIsT0FBT0Q7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTVCx5QkFBeUJXLE1BQU0sRUFBRUcsUUFBUTtRQWlCOUNDLHlCQUFULFNBQVNBO1FBQ1AsSUFBTUMsc0JBQXNCLEVBQUU7UUFFOUIsT0FBT0E7SUFDVDtJQXBCQSxJQUFNQyxrQkFBa0IsRUFBRTtJQUUxQkMsZ0NBQWdDUCxRQUFRLFNBQUNRLGVBQWVKO1FBQ3RELElBQU1LLFlBQVlOLFNBQVNLLGVBQWVKLHlCQUEwQixHQUFHO1FBRXZFRSxnQkFBZ0JJLEtBQUtGO1FBRXJCLE9BQU9DO0lBQ1QsR0FBR0w7SUFFSEUsZ0JBQWdCSyxRQUFRLFNBQUNIO1FBQ3ZCQSxjQUFjSTtJQUNoQjtJQUVBLE9BQU9OO0FBT1Q7QUFFQSxTQUFTQyxnQ0FBZ0NQLE1BQU0sRUFBRUcsUUFBUSxFQUFFQyxzQkFBc0I7SUFDL0UsSUFBSUssWUFBWTtJQUVoQixJQUFJVCxPQUFPYSxZQUFZLE9BQU87UUFDNUJiLE9BQU9hLFVBQVU7UUFFakIsSUFBTUwsZ0JBQWdCUixRQUFTLEdBQUc7UUFFbENTLFlBQVlOLFNBQVNLLGVBQWVKO1FBRXBDLElBQUlLLGNBQWMsTUFBTTtZQUN0QkQsY0FBY00sNkJBQTZCLFNBQUNDO2dCQUMxQ04sWUFBWUYsZ0NBQWdDUSwwQkFBMEJaLFVBQVU7b0JBQzlFLElBQUlFLHNCQUFzQkQ7b0JBRTFCLElBQU1ZLDZCQUE2QmhCLFFBQzdCaUIsb0JBQW9CRCw0QkFBNEIsR0FBRztvQkFFekRYLHNCQUFzQkEsb0JBQW9CYSxPQUFPRDtvQkFFakQsT0FBT1o7Z0JBQ1Q7Z0JBRUEsT0FBT0k7WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=