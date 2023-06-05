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
function checkEdgesIncludesEdge(edges, edge) {
    var edgeA = edge, edgesIncludesEdge = edges.some(function(edge) {
        var edgeB = edge, matches = edgeA.match(edgeB);
        if (matches) {
            return true;
        }
    });
    return edgesIncludesEdge;
}
function removeEdgeFromEdges(edge, edges) {
    var edgeA = edge; ///
    remove(edges, function(edge) {
        var edgeB = edge, matches = edgeA.match(edgeB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlcywgZWRnZSkge1xuICBjb25zdCBlZGdlQSA9IGVkZ2UsIC8vL1xuICAgICAgICBlZGdlc0luY2x1ZGVzRWRnZSA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZWRnZXNJbmNsdWRlc0VkZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2VBID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgIGNvbnN0IGVkZ2VCID0gZWRnZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IGVkZ2VBLm1hdGNoKGVkZ2VCKTtcblxuICAgIGlmICghbWF0Y2hlcykgeyAvLy9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cbiJdLCJuYW1lcyI6WyJjaGVja0VkZ2VzSW5jbHVkZXNFZGdlIiwicmVtb3ZlRWRnZUZyb21FZGdlcyIsImVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJwcnVuZSIsImFycmF5VXRpbGl0aWVzIiwicmVtb3ZlIiwiZWRnZXMiLCJlZGdlIiwiZWRnZUEiLCJlZGdlc0luY2x1ZGVzRWRnZSIsInNvbWUiLCJlZGdlQiIsIm1hdGNoZXMiLCJtYXRjaCIsInNvdXJjZVZlcnRleE5hbWUiLCJmaWx0ZXIiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwibWF0Y2hUYXJnZXRWZXJ0ZXhOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLHNCQUFzQjtlQUF0QkE7O0lBY0FDLG1CQUFtQjtlQUFuQkE7O0lBYUFDLHVCQUF1QjtlQUF2QkE7O0lBWUFDLHVCQUF1QjtlQUF2QkE7Ozt5QkE3Q2U7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQ7QUFFUixJQUFNRSxTQUFTRixPQUFRLEdBQUc7QUFFbkIsU0FBU0osdUJBQXVCTyxLQUFLLEVBQUVDLElBQUk7SUFDaEQsSUFBTUMsUUFBUUQsTUFDUkUsb0JBQW9CSCxNQUFNSSxLQUFLLFNBQUNIO1FBQzlCLElBQU1JLFFBQVFKLE1BQ1JLLFVBQVVKLE1BQU1LLE1BQU1GO1FBRTVCLElBQUlDLFNBQVM7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVOLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTVCxvQkFBb0JPLElBQUksRUFBRUQsS0FBSztJQUM3QyxJQUFNRSxRQUFRRCxNQUFNLEdBQUc7SUFFdkJGLE9BQU9DLE9BQU8sU0FBQ0M7UUFDYixJQUFNSSxRQUFRSixNQUNSSyxVQUFVSixNQUFNSyxNQUFNRjtRQUU1QixJQUFJLENBQUNDLFNBQVM7WUFDWixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBU1gsd0JBQXdCYSxnQkFBZ0IsRUFBRVIsS0FBSztJQUM3REEsUUFBUUEsTUFBTVMsT0FBTyxTQUFDUjtRQUNwQixJQUFNSyxVQUFVTCxLQUFLUyxzQkFBc0JGO1FBRTNDLElBQUlGLFNBQVM7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTSix3QkFBd0JlLGdCQUFnQixFQUFFWCxLQUFLO0lBQzdEQSxRQUFRQSxNQUFNUyxPQUFPLFNBQUNSO1FBQ3BCLElBQU1LLFVBQVVMLEtBQUtXLHNCQUFzQkQ7UUFFM0MsSUFBSUwsU0FBUztZQUNYLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT047QUFDVCJ9