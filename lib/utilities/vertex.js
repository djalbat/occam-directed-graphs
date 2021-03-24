"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vertexNamesFromVertexLiterals = vertexNamesFromVertexLiterals;
exports.vertexNamesFromVertices = vertexNamesFromVertices;
exports.forwardsDepthFirstSearch = forwardsDepthFirstSearch;
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
function vertexNamesFromVertexLiterals(vertexLiterals) {
    var vertexNameMap = {
    };
    vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), vertexName = firstVertexLiteralElement, vertexExists = vertexNameMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
            vertexNameMap[vertexName] = vertexName;
        }
        var secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement; ///
        ancestorVertexNames.forEach(function(ancestorVertexName) {
            var ancestorVertexExists = vertexNameMap.hasOwnProperty(ancestorVertexName);
            if (!ancestorVertexExists) {
                vertexNameMap[ancestorVertexName] = ancestorVertexName;
            }
        });
    });
    var vertexNameMapKeys = Object.keys(vertexNameMap), vertexNames = vertexNameMapKeys; ///
    return vertexNames;
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
    retrieveForwardsVisitedVertices(vertex, function(visitedVertex, getPredecessorVertices1) {
        var terminate = callback(visitedVertex, getPredecessorVertices1); ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVNYXAgPSB7fTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIHZlcnRleE5hbWVNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXhOYW1lO1xuICAgIH1cblxuICAgICAgY29uc3Qgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eShhbmNlc3RvclZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoIWFuY2VzdG9yVmVydGV4RXhpc3RzKSB7XG4gICAgICAgIHZlcnRleE5hbWVNYXBbYW5jZXN0b3JWZXJ0ZXhOYW1lXSA9IGFuY2VzdG9yVmVydGV4TmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdmVydGV4TmFtZU1hcEtleXMgPSBPYmplY3Qua2V5cyh2ZXJ0ZXhOYW1lTWFwKSxcbiAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lTWFwS2V5czsgIC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaykge1xuICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTsgIC8vL1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICB2aXNpdGVkVmVydGljZXMuZm9yRWFjaCgodmlzaXRlZFZlcnRleCkgPT4gdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKSk7XG5cbiAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcblxuICBmdW5jdGlvbiBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgY2FsbGJhY2ssIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGlmICh2ZXJ0ZXgudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICB2ZXJ0ZXgudmlzaXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgIGxldCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztRQU1BLDZCQUFBLEdBQUEsNkJBQUE7UUE4QkEsdUJBQUEsR0FBQSx1QkFBQTtRQVVBLHdCQUFBLEdBQUEsd0JBQUE7SUE1Q0EsVUFBQTtJQUVBLEtBQUEsR0FGQSxVQUFBLGdCQUVBLEtBQUEsRUFBQSxNQUFBLEdBRkEsVUFBQSxnQkFFQSxNQUFBO1NBRUEsNkJBQUEsQ0FBQSxjQUFBO1FBQ0EsYUFBQTs7QUFFQSxrQkFBQSxDQUFBLE9BQUEsVUFBQSxhQUFBO1lBQ0EseUJBQUEsR0FBQSxLQUFBLENBQUEsYUFBQSxHQUNBLFVBQUEsR0FBQSx5QkFBQSxFQUNBLFlBQUEsR0FBQSxhQUFBLENBQUEsY0FBQSxDQUFBLFVBQUE7YUFFQSxZQUFBO0FBQ0EseUJBQUEsQ0FBQSxVQUFBLElBQUEsVUFBQTs7WUFHQSwwQkFBQSxHQUFBLE1BQUEsQ0FBQSxhQUFBLEdBQ0EsbUJBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsMkJBQUEsQ0FBQSxPQUFBLFVBQUEsa0JBQUE7Z0JBQ0Esb0JBQUEsR0FBQSxhQUFBLENBQUEsY0FBQSxDQUFBLGtCQUFBO2lCQUVBLG9CQUFBO0FBQ0EsNkJBQUEsQ0FBQSxrQkFBQSxJQUFBLGtCQUFBOzs7O1FBS0EsaUJBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsR0FDQSxXQUFBLEdBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtXQUVBLFdBQUE7O1NBR0EsdUJBQUEsQ0FBQSxRQUFBO1FBQ0EsV0FBQSxHQUFBLFFBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQTtZQUNBLFVBQUEsR0FBQSxNQUFBLENBQUEsT0FBQTtlQUVBLFVBQUE7O1dBR0EsV0FBQTs7U0FHQSx3QkFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBO1FBZUEsc0JBQUEsWUFBQSxzQkFBQTtZQUNBLG1CQUFBO2VBRUEsbUJBQUE7O1FBakJBLGVBQUE7QUFFQSxtQ0FBQSxDQUFBLE1BQUEsV0FBQSxhQUFBLEVBQUEsdUJBQUE7WUFDQSxTQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsRUFBQSx1QkFBQSxFQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsdUJBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQTtlQUVBLFNBQUE7T0FDQSxzQkFBQTtBQUVBLG1CQUFBLENBQUEsT0FBQSxVQUFBLGFBQUE7ZUFBQSxhQUFBLENBQUEsWUFBQTs7V0FFQSxlQUFBOztTQVNBLCtCQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxzQkFBQTtRQUNBLFNBQUEsR0FBQSxLQUFBO1FBRUEsTUFBQSxDQUFBLE9BQUEsS0FBQSxLQUFBO0FBQ0EsY0FBQSxDQUFBLE9BQUEsR0FBQSxJQUFBO1lBRUEsYUFBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLGlCQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsRUFBQSxzQkFBQTtZQUVBLFNBQUEsS0FBQSxJQUFBO0FBQ0EseUJBQUEsQ0FBQSw0QkFBQSxVQUFBLHdCQUFBO0FBQ0EseUJBQUEsR0FBQSwrQkFBQSxDQUFBLHdCQUFBLEVBQUEsUUFBQTt3QkFDQSxtQkFBQSxHQUFBLHNCQUFBO3dCQUVBLDBCQUFBLEdBQUEsTUFBQSxFQUNBLGlCQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLHVDQUFBLEdBQUEsbUJBQUEsQ0FBQSxNQUFBLENBQUEsaUJBQUE7MkJBRUEsbUJBQUE7O3VCQUdBLFNBQUE7Ozs7V0FLQSxTQUFBIn0=