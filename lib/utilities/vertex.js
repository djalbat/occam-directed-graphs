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
        } else {
            return 0;
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
    var visited = vertex.isVisited();
    if (visited === false) {
        var visited1 = true;
        vertex.setVisited(visited1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcykgeyAgLy8vXG4gIHZlcnRpY2VzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IHZlcnRpY2VzOyAgLy8vXG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaykge1xuICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTsgIC8vL1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICB2aXNpdGVkVmVydGljZXMuZm9yRWFjaCgodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgIHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCk7XG4gIH0pO1xuXG4gIHJldHVybiB2aXNpdGVkVmVydGljZXM7XG5cbiAgZnVuY3Rpb24gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gW107XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyh2ZXJ0ZXgsIGNhbGxiYWNrLCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkID0gdmVydGV4LmlzVmlzaXRlZCgpO1xuXG4gIGlmICh2aXNpdGVkID09PSBmYWxzZSkge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgdmVydGV4LnNldFZpc2l0ZWQodmlzaXRlZCk7XG5cbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgIGxldCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iXSwibmFtZXMiOlsib3JkZXJWZXJ0aWNlcyIsInZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmVydGljZXMiLCJzb3J0IiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJmaXJzdFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJzZWNvbmRWZXJ0ZXhJbmRleCIsIm9yZGVyZWRWZXJ0aWNlcyIsInZlcnRleE5hbWVzIiwibWFwIiwidmVydGV4IiwidmVydGV4TmFtZSIsImdldE5hbWUiLCJjYWxsYmFjayIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRpY2VzIiwicmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJ0ZXJtaW5hdGUiLCJwdXNoIiwiZm9yRWFjaCIsInJlc2V0VmlzaXRlZCIsInZpc2l0ZWQiLCJpc1Zpc2l0ZWQiLCJzZXRWaXNpdGVkIiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXgiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsYUFBYTtlQUFiQTs7SUFxQkFDLHVCQUF1QjtlQUF2QkE7O0lBVUFDLHdCQUF3QjtlQUF4QkE7OztBQS9CVCxTQUFTRixjQUFjRyxRQUFRO0lBQ3BDQSxTQUFTQyxLQUFLLFNBQUNDLGFBQWFDO1FBQzFCLElBQU1DLG1CQUFtQkYsWUFBWUcsWUFDL0JDLG9CQUFvQkgsYUFBYUU7UUFFdkMsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSUQsbUJBQW1CRSxtQkFBbUI7WUFDL0MsT0FBTyxDQUFDO1FBQ1YsT0FBUSxJQUFJRixtQkFBbUJFLG1CQUFtQjtZQUNoRCxPQUFPLENBQUM7UUFDVixPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFNQyxrQkFBa0JQLFVBQVcsR0FBRztJQUV0QyxPQUFPTztBQUNUO0FBRU8sU0FBU1Qsd0JBQXdCRSxRQUFRO0lBQzlDLElBQU1RLGNBQWNSLFNBQVNTLElBQUksU0FBQ0M7UUFDaEMsSUFBTUMsYUFBYUQsT0FBT0U7UUFFMUIsT0FBT0Q7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTVCx5QkFBeUJXLE1BQU0sRUFBRUcsUUFBUTtRQWlCOUNDLHlCQUFULFNBQVNBO1FBQ1AsSUFBTUMsc0JBQXNCLEVBQUU7UUFFOUIsT0FBT0E7SUFDVDtJQXBCQSxJQUFNQyxrQkFBa0IsRUFBRTtJQUUxQkMsZ0NBQWdDUCxRQUFRLFNBQUNRLGVBQWVKO1FBQ3RELElBQU1LLFlBQVlOLFNBQVNLLGVBQWVKLHlCQUEwQixHQUFHO1FBRXZFRSxnQkFBZ0JJLEtBQUtGO1FBRXJCLE9BQU9DO0lBQ1QsR0FBR0w7SUFFSEUsZ0JBQWdCSyxRQUFRLFNBQUNIO1FBQ3ZCQSxjQUFjSTtJQUNoQjtJQUVBLE9BQU9OO0FBT1Q7QUFFQSxTQUFTQyxnQ0FBZ0NQLE1BQU0sRUFBRUcsUUFBUSxFQUFFQyxzQkFBc0I7SUFDL0UsSUFBSUssWUFBWTtJQUVoQixJQUFNSSxVQUFVYixPQUFPYztJQUV2QixJQUFJRCxZQUFZLE9BQU87UUFDckIsSUFBTUEsV0FBVTtRQUVoQmIsT0FBT2UsV0FBV0Y7UUFFbEIsSUFBTUwsZ0JBQWdCUixRQUFTLEdBQUc7UUFFbENTLFlBQVlOLFNBQVNLLGVBQWVKO1FBRXBDLElBQUlLLGNBQWMsTUFBTTtZQUN0QkQsY0FBY1EsNkJBQTZCLFNBQUNDO2dCQUMxQ1IsWUFBWUYsZ0NBQWdDVSwwQkFBMEJkLFVBQVU7b0JBQzlFLElBQUlFLHNCQUFzQkQ7b0JBRTFCLElBQU1jLDZCQUE2QmxCLFFBQzdCbUIsb0JBQW9CRCw0QkFBNEIsR0FBRztvQkFFekRiLHNCQUFzQkEsb0JBQW9CZSxPQUFPRDtvQkFFakQsT0FBT2Q7Z0JBQ1Q7Z0JBRUEsT0FBT0k7WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=