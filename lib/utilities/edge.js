"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edgesFromVertexLiterals = edgesFromVertexLiterals;
exports.checkEdgesIncludesEdge = checkEdgesIncludesEdge;
exports.removeEdgeFromEdges = removeEdgeFromEdges;
exports.edgesBySourceVertexName = edgesBySourceVertexName;
exports.edgesByTargetVertexName = edgesByTargetVertexName;
var _necessary = require("necessary");
var prune = _necessary.arrayUtilities.prune;
var remove = prune; ///
function edgesFromVertexLiterals(vertexLiterals) {
    var edges = [];
    vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement, vertexName = firstVertexLiteralElement; ///
        ancestorVertexNames.forEach(function(ancestorVertexName) {
            var sourceVertexName = ancestorVertexName, targetVertexName = vertexName, edge = new Edge(sourceVertexName, targetVertexName);
            edges.push(edge);
        });
    });
    return edges;
}
function checkEdgesIncludesEdge(edge, edges) {
    var edge1 = edge, edgesIncludesEdge = edges.some(function(edge2) {
        var edge21 = edge2, matches = edge1.match(edge21);
        if (matches) {
            return true;
        }
    });
    return edgesIncludesEdge;
}
function removeEdgeFromEdges(edge, edges) {
    var edge1 = edge; ///
    remove(edges, function(edge2) {
        var edge21 = edge2, matches = edge1.match(edge21);
        if (!matches) {
            return true;
        }
    });
}
function edgesBySourceVertexName(sourceVertexName, edges) {
    edges = edges.filter(function(edge) {
        var matches = edge.matchSourceVertexName(sourceVertexName);
        if (matches) {
            return true;
        }
    });
    return edges;
}
function edgesByTargetVertexName(targetVertexName, edges) {
    edges = edges.filter(function(edge) {
        var matches = edge.matchTargetVertexName(targetVertexName);
        if (matches) {
            return true;
        }
    });
    return edges;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgZWRnZXMgPSBbXTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCBlZGdlcykge1xuICBjb25zdCBlZGdlMSA9IGVkZ2UsIC8vL1xuICAgICAgICBlZGdlc0luY2x1ZGVzRWRnZSA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlZGdlMiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlMS5tYXRjaChlZGdlMik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZWRnZXNJbmNsdWRlc0VkZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgIGNvbnN0IGVkZ2UyID0gZWRnZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IGVkZ2UxLm1hdGNoKGVkZ2UyKTtcblxuICAgIGlmICghbWF0Y2hlcykgeyAvLy9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O1FBUUEsdUJBQUEsR0FBQSx1QkFBQTtRQXFCQSxzQkFBQSxHQUFBLHNCQUFBO1FBY0EsbUJBQUEsR0FBQSxtQkFBQTtRQWFBLHVCQUFBLEdBQUEsdUJBQUE7UUFZQSx1QkFBQSxHQUFBLHVCQUFBO0lBbEVBLFVBQUE7SUFFQSxLQUFBLEdBRkEsVUFBQSxnQkFFQSxLQUFBO0lBRUEsTUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtTQUVBLHVCQUFBLENBQUEsY0FBQTtRQUNBLEtBQUE7QUFFQSxrQkFBQSxDQUFBLE9BQUEsVUFBQSxhQUFBO1lBQ0EseUJBQUEsR0FBQSxLQUFBLENBQUEsYUFBQSxHQUNBLDBCQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsR0FDQSxtQkFBQSxHQUFBLDBCQUFBLEVBQ0EsVUFBQSxHQUFBLHlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSwyQkFBQSxDQUFBLE9BQUEsVUFBQSxrQkFBQTtnQkFDQSxnQkFBQSxHQUFBLGtCQUFBLEVBQ0EsZ0JBQUEsR0FBQSxVQUFBLEVBQ0EsSUFBQSxPQUFBLElBQUEsQ0FBQSxnQkFBQSxFQUFBLGdCQUFBO0FBRUEsaUJBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQTs7O1dBSUEsS0FBQTs7U0FHQSxzQkFBQSxDQUFBLElBQUEsRUFBQSxLQUFBO1FBQ0EsS0FBQSxHQUFBLElBQUEsRUFDQSxpQkFBQSxHQUFBLEtBQUEsQ0FBQSxJQUFBLFVBQUEsS0FBQTtZQUNBLE1BQUEsR0FBQSxLQUFBLEVBQ0EsT0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQTtZQUVBLE9BQUE7bUJBQ0EsSUFBQTs7O1dBSUEsaUJBQUE7O1NBR0EsbUJBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQTtRQUNBLEtBQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSxVQUFBLENBQUEsS0FBQSxXQUFBLEtBQUE7WUFDQSxNQUFBLEdBQUEsS0FBQSxFQUNBLE9BQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLE1BQUE7YUFFQSxPQUFBO21CQUNBLElBQUE7Ozs7U0FLQSx1QkFBQSxDQUFBLGdCQUFBLEVBQUEsS0FBQTtBQUNBLFNBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxVQUFBLElBQUE7WUFDQSxPQUFBLEdBQUEsSUFBQSxDQUFBLHFCQUFBLENBQUEsZ0JBQUE7WUFFQSxPQUFBO21CQUNBLElBQUE7OztXQUlBLEtBQUE7O1NBR0EsdUJBQUEsQ0FBQSxnQkFBQSxFQUFBLEtBQUE7QUFDQSxTQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsVUFBQSxJQUFBO1lBQ0EsT0FBQSxHQUFBLElBQUEsQ0FBQSxxQkFBQSxDQUFBLGdCQUFBO1lBRUEsT0FBQTttQkFDQSxJQUFBOzs7V0FJQSxLQUFBIn0=