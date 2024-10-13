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
    indexesFromVertexes: function() {
        return indexesFromVertexes;
    },
    orderIndexes: function() {
        return orderIndexes;
    }
});
function orderIndexes(indexes) {
    indexes.sort(function(firstIndex, secondIndex) {
        if (false) {
        ///
        } else if (firstIndex < secondIndex) {
            return -1;
        } else if (firstIndex > secondIndex) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckluZGV4ZXMoaW5kZXhlcykgeyAgLy8vXG4gIGluZGV4ZXMuc29ydCgoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXgpID0+IHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RJbmRleCA8IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RJbmRleCA+IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleGVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleGVzO1xufVxuIl0sIm5hbWVzIjpbImluZGV4ZXNGcm9tVmVydGV4ZXMiLCJvcmRlckluZGV4ZXMiLCJpbmRleGVzIiwic29ydCIsImZpcnN0SW5kZXgiLCJzZWNvbmRJbmRleCIsInZlcnRleGVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJnZXRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0JnQkEsbUJBQW1CO2VBQW5CQTs7SUFkQUMsWUFBWTtlQUFaQTs7O0FBQVQsU0FBU0EsYUFBYUMsT0FBTztJQUNsQ0EsUUFBUUMsSUFBSSxDQUFDLFNBQUNDLFlBQVlDO1FBQ3hCLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlELGFBQWFDLGFBQWE7WUFDbkMsT0FBTyxDQUFDO1FBQ1YsT0FBUSxJQUFJRCxhQUFhQyxhQUFhO1lBQ3BDLE9BQU8sQ0FBQztRQUNWLE9BQU87WUFDTCxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRU8sU0FBU0wsb0JBQW9CTSxRQUFRO0lBQzFDLElBQU1KLFVBQVVJLFNBQVNDLEdBQUcsQ0FBQyxTQUFDQztRQUM1QixJQUFNQyxRQUFRRCxPQUFPRSxRQUFRO1FBRTdCLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPUDtBQUNUIn0=