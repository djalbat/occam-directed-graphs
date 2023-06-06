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
}
function vertexNamesFromVertexes(vertexes) {
    var vertexNames = vertexes.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
    });
    return vertexNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcykgeyAgLy8vXG4gIHZlcnRleGVzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModmVydGV4ZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJvcmRlclZlcnRleGVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJ2ZXJ0ZXhlcyIsInNvcnQiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsImZpcnN0VmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInNlY29uZFZlcnRleEluZGV4IiwidmVydGV4TmFtZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxhQUFhO2VBQWJBOztJQWlCQUMsdUJBQXVCO2VBQXZCQTs7O0FBakJULFNBQVNELGNBQWNFLFFBQVE7SUFDcENBLFNBQVNDLEtBQUssU0FBQ0MsYUFBYUM7UUFDMUIsSUFBTUMsbUJBQW1CRixZQUFZRyxZQUMvQkMsb0JBQW9CSCxhQUFhRTtRQUV2QyxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJRCxtQkFBbUJFLG1CQUFtQjtZQUMvQyxPQUFPLENBQUM7UUFDVixPQUFRLElBQUlGLG1CQUFtQkUsbUJBQW1CO1lBQ2hELE9BQU8sQ0FBQztRQUNWLE9BQU87WUFDTCxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBU1Asd0JBQXdCQyxRQUFRO0lBQzlDLElBQU1PLGNBQWNQLFNBQVNRLElBQUksU0FBQ0M7UUFDaEMsSUFBTUMsYUFBYUQsT0FBT0U7UUFFMUIsT0FBT0Q7SUFDVDtJQUVBLE9BQU9IO0FBQ1QifQ==