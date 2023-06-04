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
    orderVertexes: function() {
        return orderVertexes;
    },
    vertexNamesFromVertexes: function() {
        return vertexNamesFromVertexes;
    }
});
function orderVertexes(vertexes) {
    vertexes.sort(function(firstVertex, secondVertex) {
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
    var orderedVertexes = vertexes; ///
    return orderedVertexes;
}
function vertexNamesFromVertexes(vertexes) {
    var vertexNames = vertexes.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
    });
    return vertexNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcykgeyAgLy8vXG4gIHZlcnRleGVzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzOyAgLy8vXG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG4iXSwibmFtZXMiOlsib3JkZXJWZXJ0ZXhlcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwidmVydGV4ZXMiLCJzb3J0IiwiZmlyc3RWZXJ0ZXgiLCJzZWNvbmRWZXJ0ZXgiLCJmaXJzdFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJzZWNvbmRWZXJ0ZXhJbmRleCIsIm9yZGVyZWRWZXJ0ZXhlcyIsInZlcnRleE5hbWVzIiwibWFwIiwidmVydGV4IiwidmVydGV4TmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsYUFBYTtlQUFiQTs7SUFxQkFDLHVCQUF1QjtlQUF2QkE7OztBQXJCVCxTQUFTRCxjQUFjRSxRQUFRO0lBQ3BDQSxTQUFTQyxLQUFLLFNBQUNDLGFBQWFDO1FBQzFCLElBQU1DLG1CQUFtQkYsWUFBWUcsWUFDL0JDLG9CQUFvQkgsYUFBYUU7UUFFdkMsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSUQsbUJBQW1CRSxtQkFBbUI7WUFDL0MsT0FBTyxDQUFDO1FBQ1YsT0FBUSxJQUFJRixtQkFBbUJFLG1CQUFtQjtZQUNoRCxPQUFPLENBQUM7UUFDVixPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFNQyxrQkFBa0JQLFVBQVcsR0FBRztJQUV0QyxPQUFPTztBQUNUO0FBRU8sU0FBU1Isd0JBQXdCQyxRQUFRO0lBQzlDLElBQU1RLGNBQWNSLFNBQVNTLElBQUksU0FBQ0M7UUFDaEMsSUFBTUMsYUFBYUQsT0FBT0U7UUFFMUIsT0FBT0Q7SUFDVDtJQUVBLE9BQU9IO0FBQ1QifQ==