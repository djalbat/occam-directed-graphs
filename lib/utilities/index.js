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
    orderIndexes: function() {
        return orderIndexes;
    },
    indexesFromVertexes: function() {
        return indexesFromVertexes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckluZGV4ZXMoaW5kZXhlcykgeyAgLy8vXG4gIGluZGV4ZXMuc29ydCgoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXgpID0+IHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RJbmRleCA8IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlICBpZiAoZmlyc3RJbmRleCA+IHNlY29uZEluZGV4KSB7XG4gICAgICByZXR1cm4gKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleGVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleGVzO1xufVxuIl0sIm5hbWVzIjpbIm9yZGVySW5kZXhlcyIsImluZGV4ZXNGcm9tVmVydGV4ZXMiLCJpbmRleGVzIiwic29ydCIsImZpcnN0SW5kZXgiLCJzZWNvbmRJbmRleCIsInZlcnRleGVzIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJnZXRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxZQUFZO2VBQVpBOztJQWNBQyxtQkFBbUI7ZUFBbkJBOzs7QUFkVCxTQUFTRCxhQUFhRSxPQUFPO0lBQ2xDQSxRQUFRQyxJQUFJLENBQUMsU0FBQ0MsWUFBWUM7UUFDeEIsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSUQsYUFBYUMsYUFBYTtZQUNuQyxPQUFPLENBQUM7UUFDVixPQUFRLElBQUlELGFBQWFDLGFBQWE7WUFDcEMsT0FBTyxDQUFDO1FBQ1YsT0FBTztZQUNMLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTSixvQkFBb0JLLFFBQVE7SUFDMUMsSUFBTUosVUFBVUksU0FBU0MsR0FBRyxDQUFDLFNBQUNDO1FBQzVCLElBQU1DLFFBQVFELE9BQU9FLFFBQVE7UUFFN0IsT0FBT0Q7SUFDVDtJQUVBLE9BQU9QO0FBQ1QifQ==