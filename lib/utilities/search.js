"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get backwardsDepthFirstSearch () {
        return backwardsDepthFirstSearch;
    },
    get forwardsDepthFirstSearch () {
        return forwardsDepthFirstSearch;
    }
});
function forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes = []) {
    let terminate = false;
    const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
    if (!visitedVertexesIncludesVertex) {
        const visitedVertex = vertex; ///
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, predecessorVertexes);
        if (!terminate) {
            const predecessorVertex = vertex; ///
            predecessorVertexes = [
                ...predecessorVertexes,
                predecessorVertex
            ];
            terminate = vertex.someImmediateSuccessorVertex((immediateSuccessorVertex)=>{
                const vertex = immediateSuccessorVertex, vertexIndex = vertex.getIndex(), predecessorVertexIndex = predecessorVertex.getIndex();
                if (vertexIndex > predecessorVertexIndex) {
                    const terminate = forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes);
                    if (terminate) {
                        return true;
                    }
                }
            });
        }
    }
    return terminate;
}
function backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes = []) {
    let terminate = false;
    const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);
    if (!visitedVertexesIncludesVertex) {
        const visitedVertex = vertex; ///
        visitedVertexes.push(visitedVertex);
        terminate = callback(vertex, successorVertexes);
        if (!terminate) {
            const successorVertex = vertex; ///
            successorVertexes = [
                ...successorVertexes,
                successorVertex
            ];
            terminate = vertex.someImmediatePredecessorVertex((immediatePredecessorVertex)=>{
                const vertex = immediatePredecessorVertex, vertexIndex = vertex.getIndex(), successorVertexIndex = successorVertex.getIndex();
                if (vertexIndex < successorVertexIndex) {
                    const terminate = backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes);
                    if (terminate) {
                        return true;
                    }
                }
            });
        }
    }
    return terminate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcywgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIGlmICghdGVybWluYXRlKSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4ucHJlZGVjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhcbiAgICAgIF07XG5cbiAgICAgIHRlcm1pbmF0ZSA9IHZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4SW5kZXggPSBwcmVkZWNlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IHByZWRlY2Vzc29yVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyA9IFtdKSB7XG4gIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdCB2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZpc2l0ZWRWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gIGlmICghdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdmVydGV4OyAvLy9cblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgdGVybWluYXRlID0gY2FsbGJhY2sodmVydGV4LCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gWyAvLy9cbiAgICAgICAgLi4uc3VjY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodmVydGV4SW5kZXggPCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG4iXSwibmFtZXMiOlsiYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInZlcnRleCIsImNhbGxiYWNrIiwidmlzaXRlZFZlcnRleGVzIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsInZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJ2aXNpdGVkVmVydGV4IiwicHVzaCIsInByZWRlY2Vzc29yVmVydGV4Iiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJwcmVkZWNlc3NvclZlcnRleEluZGV4Iiwic3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5Q2dCQTtlQUFBQTs7UUF2Q0FDO2VBQUFBOzs7QUFBVCxTQUFTQSx5QkFBeUJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLHNCQUFzQixFQUFFO0lBQ2xHLElBQUlDLFlBQVk7SUFFaEIsTUFBTUMsZ0NBQWdDSCxnQkFBZ0JJLFFBQVEsQ0FBQ047SUFFL0QsSUFBSSxDQUFDSywrQkFBK0I7UUFDbEMsTUFBTUUsZ0JBQWdCUCxRQUFRLEdBQUc7UUFFakNFLGdCQUFnQk0sSUFBSSxDQUFDRDtRQUVyQkgsWUFBWUgsU0FBU0QsUUFBUUc7UUFFN0IsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsTUFBTUssb0JBQW9CVCxRQUFTLEdBQUc7WUFFdENHLHNCQUFzQjttQkFDakJBO2dCQUNITTthQUNEO1lBRURMLFlBQVlKLE9BQU9VLDRCQUE0QixDQUFDLENBQUNDO2dCQUMvQyxNQUFNWCxTQUFTVywwQkFDVEMsY0FBY1osT0FBT2EsUUFBUSxJQUM3QkMseUJBQXlCTCxrQkFBa0JJLFFBQVE7Z0JBRXpELElBQUlELGNBQWNFLHdCQUF3QjtvQkFDeEMsTUFBTVYsWUFBWUwseUJBQXlCQyxRQUFRQyxVQUFVQyxpQkFBaUJDO29CQUU5RSxJQUFJQyxXQUFXO3dCQUNiLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU04sMEJBQTBCRSxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFYSxvQkFBb0IsRUFBRTtJQUNqRyxJQUFJWCxZQUFZO0lBRWhCLE1BQU1DLGdDQUFnQ0gsZ0JBQWdCSSxRQUFRLENBQUNOO0lBRS9ELElBQUksQ0FBQ0ssK0JBQStCO1FBQ2xDLE1BQU1FLGdCQUFnQlAsUUFBUSxHQUFHO1FBRWpDRSxnQkFBZ0JNLElBQUksQ0FBQ0Q7UUFFckJILFlBQVlILFNBQVNELFFBQVFlO1FBRTdCLElBQUksQ0FBQ1gsV0FBVztZQUNkLE1BQU1ZLGtCQUFrQmhCLFFBQVMsR0FBRztZQUVwQ2Usb0JBQW9CO21CQUNmQTtnQkFDSEM7YUFDRDtZQUVEWixZQUFZSixPQUFPaUIsOEJBQThCLENBQUMsQ0FBQ0M7Z0JBQ2pELE1BQU1sQixTQUFTa0IsNEJBQ1ROLGNBQWNaLE9BQU9hLFFBQVEsSUFDN0JNLHVCQUF1QkgsZ0JBQWdCSCxRQUFRO2dCQUVyRCxJQUFJRCxjQUFjTyxzQkFBc0I7b0JBQ3RDLE1BQU1mLFlBQVlOLDBCQUEwQkUsUUFBUUMsVUFBVUMsaUJBQWlCYTtvQkFFL0UsSUFBSVgsV0FBVzt3QkFDYixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9