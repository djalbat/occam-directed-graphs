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
    vertexNamesFromVertexLiterals: function() {
        return vertexNamesFromVertexLiterals;
    },
    vertexNamesFromVertices: function() {
        return vertexNamesFromVertices;
    },
    forwardsDepthFirstSearch: function() {
        return forwardsDepthFirstSearch;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
function vertexNamesFromVertexLiterals(vertexLiterals) {
    var vertexNameMap = {};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVNYXAgPSB7fTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIHZlcnRleE5hbWVNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXhOYW1lO1xuICAgIH1cblxuICAgICAgY29uc3Qgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eShhbmNlc3RvclZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoIWFuY2VzdG9yVmVydGV4RXhpc3RzKSB7XG4gICAgICAgIHZlcnRleE5hbWVNYXBbYW5jZXN0b3JWZXJ0ZXhOYW1lXSA9IGFuY2VzdG9yVmVydGV4TmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdmVydGV4TmFtZU1hcEtleXMgPSBPYmplY3Qua2V5cyh2ZXJ0ZXhOYW1lTWFwKSxcbiAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lTWFwS2V5czsgIC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaykge1xuICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTsgIC8vL1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICB2aXNpdGVkVmVydGljZXMuZm9yRWFjaCgodmlzaXRlZFZlcnRleCkgPT4gdmlzaXRlZFZlcnRleC5yZXNldFZpc2l0ZWQoKSk7XG5cbiAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcblxuICBmdW5jdGlvbiBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKHZlcnRleCwgY2FsbGJhY2ssIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGlmICh2ZXJ0ZXgudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICB2ZXJ0ZXgudmlzaXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgIGxldCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleCA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iXSwibmFtZXMiOlsidmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ2ZXJ0ZXhMaXRlcmFscyIsInZlcnRleE5hbWVNYXAiLCJmb3JFYWNoIiwidmVydGV4TGl0ZXJhbCIsImZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4RXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCIsImFuY2VzdG9yVmVydGV4TmFtZXMiLCJhbmNlc3RvclZlcnRleE5hbWUiLCJhbmNlc3RvclZlcnRleEV4aXN0cyIsInZlcnRleE5hbWVNYXBLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInZlcnRleE5hbWVzIiwidmVydGljZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJnZXROYW1lIiwiY2FsbGJhY2siLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0aWNlcyIsInJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4IiwidGVybWluYXRlIiwicHVzaCIsInJlc2V0VmlzaXRlZCIsInZpc2l0ZWQiLCJzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJwcmVkZWNlc3NvclZlcnRleCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7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