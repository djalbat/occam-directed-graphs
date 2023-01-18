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
    edgesFromVertexLiterals: function() {
        return edgesFromVertexLiterals;
    },
    checkEdgesIncludesEdge: function() {
        return checkEdgesIncludesEdge;
    },
    removeEdgeFromEdges: function() {
        return removeEdgeFromEdges;
    },
    edgesBySourceVertexName: function() {
        return edgesBySourceVertexName;
    },
    edgesByTargetVertexName: function() {
        return edgesByTargetVertexName;
    }
});
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
    var edge1 = edge, edgesIncludesEdge = edges.some(function(edge) {
        var edge2 = edge, matches = edge1.match(edge2);
        if (matches) {
            return true;
        }
    });
    return edgesIncludesEdge;
}
function removeEdgeFromEdges(edge, edges) {
    var edge1 = edge; ///
    remove(edges, function(edge) {
        var edge2 = edge, matches = edge1.match(edge2);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgZWRnZXMgPSBbXTtcblxuICB2ZXJ0ZXhMaXRlcmFscy5mb3JFYWNoKCh2ZXJ0ZXhMaXRlcmFsKSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCBlZGdlcykge1xuICBjb25zdCBlZGdlMSA9IGVkZ2UsIC8vL1xuICAgICAgICBlZGdlc0luY2x1ZGVzRWRnZSA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlZGdlMiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlMS5tYXRjaChlZGdlMik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZWRnZXNJbmNsdWRlc0VkZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgIGNvbnN0IGVkZ2UyID0gZWRnZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IGVkZ2UxLm1hdGNoKGVkZ2UyKTtcblxuICAgIGlmICghbWF0Y2hlcykgeyAvLy9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cbiJdLCJuYW1lcyI6WyJlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwiZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInBydW5lIiwiYXJyYXlVdGlsaXRpZXMiLCJyZW1vdmUiLCJ2ZXJ0ZXhMaXRlcmFscyIsImVkZ2VzIiwiZm9yRWFjaCIsInZlcnRleExpdGVyYWwiLCJmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50IiwiZmlyc3QiLCJzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCIsInNlY29uZCIsImFuY2VzdG9yVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lIiwiYW5jZXN0b3JWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4TmFtZSIsInRhcmdldFZlcnRleE5hbWUiLCJlZGdlIiwiRWRnZSIsInB1c2giLCJlZGdlMSIsImVkZ2VzSW5jbHVkZXNFZGdlIiwic29tZSIsImVkZ2UyIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlsdGVyIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwibWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLHVCQUF1QjtlQUF2QkE7O0lBcUJBQyxzQkFBc0I7ZUFBdEJBOztJQWNBQyxtQkFBbUI7ZUFBbkJBOztJQWFBQyx1QkFBdUI7ZUFBdkJBOztJQVlBQyx1QkFBdUI7ZUFBdkJBOzs7eUJBbEVlO0FBRS9CLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsU0FBU0YsT0FBUSxHQUFHO0FBRW5CLFNBQVNMLHdCQUF3QlEsY0FBYyxFQUFFO0lBQ3RELElBQU1DLFFBQVEsRUFBRTtJQUVoQkQsZUFBZUUsT0FBTyxDQUFDLFNBQUNDLGVBQWtCO1FBQ3hDLElBQU1DLDRCQUE0QkMsTUFBTUYsZ0JBQ2xDRyw2QkFBNkJDLE9BQU9KLGdCQUNwQ0ssc0JBQXNCRiw0QkFDdEJHLGFBQWFMLDJCQUEyQixHQUFHO1FBRWpESSxvQkFBb0JOLE9BQU8sQ0FBQyxTQUFDUSxvQkFBdUI7WUFDbEQsSUFBTUMsbUJBQW1CRCxvQkFDbkJFLG1CQUFtQkgsWUFDbkJJLE9BQU8sSUFBSUMsS0FBS0gsa0JBQWtCQztZQUV4Q1gsTUFBTWMsSUFBSSxDQUFDRjtRQUNiO0lBQ0Y7SUFFQSxPQUFPWjtBQUNUO0FBRU8sU0FBU1IsdUJBQXVCb0IsSUFBSSxFQUFFWixLQUFLLEVBQUU7SUFDbEQsSUFBTWUsUUFBUUgsTUFDUkksb0JBQW9CaEIsTUFBTWlCLElBQUksQ0FBQyxTQUFDTCxNQUFTO1FBQ3ZDLElBQU1NLFFBQVFOLE1BQ1JPLFVBQVVKLE1BQU1LLEtBQUssQ0FBQ0Y7UUFFNUIsSUFBSUMsU0FBUztZQUNYLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVOLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTdkIsb0JBQW9CbUIsSUFBSSxFQUFFWixLQUFLLEVBQUU7SUFDL0MsSUFBTWUsUUFBUUgsTUFBTSxHQUFHO0lBRXZCZCxPQUFPRSxPQUFPLFNBQUNZLE1BQVM7UUFDdEIsSUFBTU0sUUFBUU4sTUFDUk8sVUFBVUosTUFBTUssS0FBSyxDQUFDRjtRQUU1QixJQUFJLENBQUNDLFNBQVM7WUFDWixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRjtBQUVPLFNBQVN6Qix3QkFBd0JnQixnQkFBZ0IsRUFBRVYsS0FBSyxFQUFFO0lBQy9EQSxRQUFRQSxNQUFNcUIsTUFBTSxDQUFDLFNBQUNULE1BQVM7UUFDN0IsSUFBTU8sVUFBVVAsS0FBS1UscUJBQXFCLENBQUNaO1FBRTNDLElBQUlTLFNBQVM7WUFDWCxPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPbkI7QUFDVDtBQUVPLFNBQVNMLHdCQUF3QmdCLGdCQUFnQixFQUFFWCxLQUFLLEVBQUU7SUFDL0RBLFFBQVFBLE1BQU1xQixNQUFNLENBQUMsU0FBQ1QsTUFBUztRQUM3QixJQUFNTyxVQUFVUCxLQUFLVyxxQkFBcUIsQ0FBQ1o7UUFFM0MsSUFBSVEsU0FBUztZQUNYLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVBLE9BQU9uQjtBQUNUIn0=