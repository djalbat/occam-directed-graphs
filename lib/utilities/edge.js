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
    removeEdgeFromEdges: function() {
        return removeEdgeFromEdges;
    },
    checkEdgesIncludesEdge: function() {
        return checkEdgesIncludesEdge;
    },
    filterEdgesBySourceVertexName: function() {
        return filterEdgesBySourceVertexName;
    },
    filterEdgesByTargetVertexName: function() {
        return filterEdgesByTargetVertexName;
    }
});
var _necessary = require("necessary");
var prune = _necessary.arrayUtilities.prune;
var remove = prune; ///
function removeEdgeFromEdges(edge, edges) {
    var edgeA = edge; ///
    remove(edges, function(edge) {
        var edgeB = edge, matches = edgeA.match(edgeB);
        if (!matches) {
            return true;
        }
    });
}
function checkEdgesIncludesEdge(edges, edge) {
    var edgeA = edge, edgesIncludesEdge = edges.some(function(edge) {
        var edgeB = edge, matches = edgeA.match(edgeB);
        if (matches) {
            return true;
        }
    });
    return edgesIncludesEdge;
}
function filterEdgesBySourceVertexName(edges, sourceVertexName) {
    edges = edges.filter(function(edge) {
        var matches = edge.matchSourceVertexName(sourceVertexName);
        if (matches) {
            return true;
        }
    });
    return edges;
}
function filterEdgesByTargetVertexName(edges, targetVertexName) {
    edges = edges.filter(function(edge) {
        var matches = edge.matchTargetVertexName(targetVertexName);
        if (matches) {
            return true;
        }
    });
    return edges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWRnZUZyb21FZGdlcyhlZGdlLCBlZGdlcykge1xuICBjb25zdCBlZGdlQSA9IGVkZ2U7IC8vL1xuXG4gIHJlbW92ZShlZGdlcywgKGVkZ2UpID0+IHtcbiAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHsgLy8vXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlcywgZWRnZSkge1xuICBjb25zdCBlZGdlQSA9IGVkZ2UsIC8vL1xuICAgICAgICBlZGdlc0luY2x1ZGVzRWRnZSA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZWRnZXNJbmNsdWRlc0VkZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJFZGdlc0J5U291cmNlVmVydGV4TmFtZShlZGdlcywgc291cmNlVmVydGV4TmFtZSkge1xuICBlZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRWRnZXNCeVRhcmdldFZlcnRleE5hbWUoZWRnZXMsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgZWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cbiJdLCJuYW1lcyI6WyJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsImZpbHRlckVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZmlsdGVyRWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJwcnVuZSIsImFycmF5VXRpbGl0aWVzIiwicmVtb3ZlIiwiZWRnZSIsImVkZ2VzIiwiZWRnZUEiLCJlZGdlQiIsIm1hdGNoZXMiLCJtYXRjaCIsImVkZ2VzSW5jbHVkZXNFZGdlIiwic29tZSIsInNvdXJjZVZlcnRleE5hbWUiLCJmaWx0ZXIiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwibWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLG1CQUFtQjtlQUFuQkE7O0lBYUFDLHNCQUFzQjtlQUF0QkE7O0lBY0FDLDZCQUE2QjtlQUE3QkE7O0lBWUFDLDZCQUE2QjtlQUE3QkE7Ozt5QkE3Q2U7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQ7QUFFUixJQUFNRSxTQUFTRixPQUFRLEdBQUc7QUFFbkIsU0FBU0osb0JBQW9CTyxJQUFJLEVBQUVDLEtBQUs7SUFDN0MsSUFBTUMsUUFBUUYsTUFBTSxHQUFHO0lBRXZCRCxPQUFPRSxPQUFPLFNBQUNEO1FBQ2IsSUFBTUcsUUFBUUgsTUFDUkksVUFBVUYsTUFBTUcsTUFBTUY7UUFFNUIsSUFBSSxDQUFDQyxTQUFTO1lBQ1osT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVPLFNBQVNWLHVCQUF1Qk8sS0FBSyxFQUFFRCxJQUFJO0lBQ2hELElBQU1FLFFBQVFGLE1BQ1JNLG9CQUFvQkwsTUFBTU0sS0FBSyxTQUFDUDtRQUM5QixJQUFNRyxRQUFRSCxNQUNSSSxVQUFVRixNQUFNRyxNQUFNRjtRQUU1QixJQUFJQyxTQUFTO1lBQ1gsT0FBTztRQUNUO0lBQ0Y7SUFFTixPQUFPRTtBQUNUO0FBRU8sU0FBU1gsOEJBQThCTSxLQUFLLEVBQUVPLGdCQUFnQjtJQUNuRVAsUUFBUUEsTUFBTVEsT0FBTyxTQUFDVDtRQUNwQixJQUFNSSxVQUFVSixLQUFLVSxzQkFBc0JGO1FBRTNDLElBQUlKLFNBQVM7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTTCw4QkFBOEJLLEtBQUssRUFBRVUsZ0JBQWdCO0lBQ25FVixRQUFRQSxNQUFNUSxPQUFPLFNBQUNUO1FBQ3BCLElBQU1JLFVBQVVKLEtBQUtZLHNCQUFzQkQ7UUFFM0MsSUFBSVAsU0FBUztZQUNYLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9