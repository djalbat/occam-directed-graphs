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
    indexesFromVertexes: function() {
        return indexesFromVertexes;
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
}
function indexesFromVertexes(vertexes) {
    var indexes = vertexes.map(function(vertex) {
        var index = vertex.getIndex();
        return index;
    });
    return indexes;
}
function vertexNamesFromVertexes(vertexes) {
    var vertexNames = vertexes.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
    });
    return vertexNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcykgeyAgLy8vXG4gIHZlcnRleGVzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhlc0Zyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCBpbmRleGVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9KTtcblxuICByZXR1cm4gaW5kZXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4ZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG4iXSwibmFtZXMiOlsib3JkZXJWZXJ0ZXhlcyIsImluZGV4ZXNGcm9tVmVydGV4ZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyIsInZlcnRleGVzIiwic29ydCIsImZpcnN0VmVydGV4Iiwic2Vjb25kVmVydGV4IiwiZmlyc3RWZXJ0ZXhJbmRleCIsImdldEluZGV4Iiwic2Vjb25kVmVydGV4SW5kZXgiLCJpbmRleGVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJ2ZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLGFBQWE7ZUFBYkE7O0lBaUJBQyxtQkFBbUI7ZUFBbkJBOztJQVVBQyx1QkFBdUI7ZUFBdkJBOzs7QUEzQlQsU0FBU0YsY0FBY0csUUFBUTtJQUNwQ0EsU0FBU0MsS0FBSyxTQUFDQyxhQUFhQztRQUMxQixJQUFNQyxtQkFBbUJGLFlBQVlHLFlBQy9CQyxvQkFBb0JILGFBQWFFO1FBRXZDLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlELG1CQUFtQkUsbUJBQW1CO1lBQy9DLE9BQU8sQ0FBQztRQUNWLE9BQVEsSUFBSUYsbUJBQW1CRSxtQkFBbUI7WUFDaEQsT0FBTyxDQUFDO1FBQ1YsT0FBTztZQUNMLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTUixvQkFBb0JFLFFBQVE7SUFDMUMsSUFBTU8sVUFBVVAsU0FBU1EsSUFBSSxTQUFDQztRQUM1QixJQUFNQyxRQUFRRCxPQUFPSjtRQUVyQixPQUFPSztJQUNUO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNSLHdCQUF3QkMsUUFBUTtJQUM5QyxJQUFNVyxjQUFjWCxTQUFTUSxJQUFJLFNBQUNDO1FBQ2hDLElBQU1HLGFBQWFILE9BQU9JO1FBRTFCLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUIn0=