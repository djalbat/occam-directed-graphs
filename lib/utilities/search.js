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
    get depthFirstSearch () {
        return depthFirstSearch;
    },
    get forwardsDepthFirstSearch () {
        return forwardsDepthFirstSearch;
    }
});
function depthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes = []) {
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
                const vertex = immediateSuccessorVertex; ///
                const terminate = depthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes);
                if (terminate) {
                    return true;
                }
            });
        }
    }
    return terminate;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBbXSkge1xuICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3QgdmlzaXRlZFZlcnRleGVzSW5jbHVkZXNWZXJ0ZXggPSB2aXNpdGVkVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAoIXZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHZlcnRleDsgLy8vXG5cbiAgICB2aXNpdGVkVmVydGV4ZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFsgLy8vXG4gICAgICAgIC4uLnByZWRlY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgIHByZWRlY2Vzc29yVmVydGV4XG4gICAgICBdO1xuXG4gICAgICB0ZXJtaW5hdGUgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGRlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzLCBwcmVkZWNlc3NvclZlcnRleGVzID0gW10pIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmlzaXRlZFZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKCF2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7IC8vL1xuXG4gICAgdmlzaXRlZFZlcnRleGVzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBbIC8vL1xuICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICBwcmVkZWNlc3NvclZlcnRleFxuICAgICAgXTtcblxuICAgICAgdGVybWluYXRlID0gdmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhJbmRleCA9IHByZWRlY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHZlcnRleEluZGV4ID4gcHJlZGVjZXNzb3JWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHN1Y2Nlc3NvclZlcnRleGVzID0gW10pIHtcbiAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmlzaXRlZFZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKCF2aXNpdGVkVmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7IC8vL1xuXG4gICAgdmlzaXRlZFZlcnRleGVzLnB1c2godmlzaXRlZFZlcnRleCk7XG5cbiAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2ZXJ0ZXgsIHN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIGlmICghdGVybWluYXRlKSB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBbIC8vL1xuICAgICAgICAuLi5zdWNjZXNzb3JWZXJ0ZXhlcyxcbiAgICAgICAgc3VjY2Vzc29yVmVydGV4XG4gICAgICBdO1xuXG4gICAgICB0ZXJtaW5hdGUgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXhJbmRleCA8IHN1Y2Nlc3NvclZlcnRleEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdGVybWluYXRlID0gYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMsIHN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiZGVwdGhGaXJzdFNlYXJjaCIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInZlcnRleCIsImNhbGxiYWNrIiwidmlzaXRlZFZlcnRleGVzIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsInZpc2l0ZWRWZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJ2aXNpdGVkVmVydGV4IiwicHVzaCIsInByZWRlY2Vzc29yVmVydGV4Iiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJwcmVkZWNlc3NvclZlcnRleEluZGV4Iiwic3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE0RWdCQTtlQUFBQTs7UUExRUFDO2VBQUFBOztRQW1DQUM7ZUFBQUE7OztBQW5DVCxTQUFTRCxpQkFBaUJFLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLHNCQUFzQixFQUFFO0lBQzFGLElBQUlDLFlBQVk7SUFFaEIsTUFBTUMsZ0NBQWdDSCxnQkFBZ0JJLFFBQVEsQ0FBQ047SUFFL0QsSUFBSSxDQUFDSywrQkFBK0I7UUFDbEMsTUFBTUUsZ0JBQWdCUCxRQUFRLEdBQUc7UUFFakNFLGdCQUFnQk0sSUFBSSxDQUFDRDtRQUVyQkgsWUFBWUgsU0FBU0QsUUFBUUc7UUFFN0IsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsTUFBTUssb0JBQW9CVCxRQUFTLEdBQUc7WUFFdENHLHNCQUFzQjttQkFDakJBO2dCQUNITTthQUNEO1lBRURMLFlBQVlKLE9BQU9VLDRCQUE0QixDQUFDLENBQUNDO2dCQUMvQyxNQUFNWCxTQUFTVywwQkFBMkIsR0FBRztnQkFFN0MsTUFBTVAsWUFBWU4saUJBQWlCRSxRQUFRQyxVQUFVQyxpQkFBaUJDO2dCQUV0RSxJQUFJQyxXQUFXO29CQUNiLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU0wseUJBQXlCQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxzQkFBc0IsRUFBRTtJQUNsRyxJQUFJQyxZQUFZO0lBRWhCLE1BQU1DLGdDQUFnQ0gsZ0JBQWdCSSxRQUFRLENBQUNOO0lBRS9ELElBQUksQ0FBQ0ssK0JBQStCO1FBQ2xDLE1BQU1FLGdCQUFnQlAsUUFBUSxHQUFHO1FBRWpDRSxnQkFBZ0JNLElBQUksQ0FBQ0Q7UUFFckJILFlBQVlILFNBQVNELFFBQVFHO1FBRTdCLElBQUksQ0FBQ0MsV0FBVztZQUNkLE1BQU1LLG9CQUFvQlQsUUFBUyxHQUFHO1lBRXRDRyxzQkFBc0I7bUJBQ2pCQTtnQkFDSE07YUFDRDtZQUVETCxZQUFZSixPQUFPVSw0QkFBNEIsQ0FBQyxDQUFDQztnQkFDL0MsTUFBTVgsU0FBU1csMEJBQ1RDLGNBQWNaLE9BQU9hLFFBQVEsSUFDN0JDLHlCQUF5Qkwsa0JBQWtCSSxRQUFRO2dCQUV6RCxJQUFJRCxjQUFjRSx3QkFBd0I7b0JBQ3hDLE1BQU1WLFlBQVlMLHlCQUF5QkMsUUFBUUMsVUFBVUMsaUJBQWlCQztvQkFFOUUsSUFBSUMsV0FBVzt3QkFDYixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNQLDBCQUEwQkcsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRWEsb0JBQW9CLEVBQUU7SUFDakcsSUFBSVgsWUFBWTtJQUVoQixNQUFNQyxnQ0FBZ0NILGdCQUFnQkksUUFBUSxDQUFDTjtJQUUvRCxJQUFJLENBQUNLLCtCQUErQjtRQUNsQyxNQUFNRSxnQkFBZ0JQLFFBQVEsR0FBRztRQUVqQ0UsZ0JBQWdCTSxJQUFJLENBQUNEO1FBRXJCSCxZQUFZSCxTQUFTRCxRQUFRZTtRQUU3QixJQUFJLENBQUNYLFdBQVc7WUFDZCxNQUFNWSxrQkFBa0JoQixRQUFTLEdBQUc7WUFFcENlLG9CQUFvQjttQkFDZkE7Z0JBQ0hDO2FBQ0Q7WUFFRFosWUFBWUosT0FBT2lCLDhCQUE4QixDQUFDLENBQUNDO2dCQUNqRCxNQUFNbEIsU0FBU2tCLDRCQUNUTixjQUFjWixPQUFPYSxRQUFRLElBQzdCTSx1QkFBdUJILGdCQUFnQkgsUUFBUTtnQkFFckQsSUFBSUQsY0FBY08sc0JBQXNCO29CQUN0QyxNQUFNZixZQUFZUCwwQkFBMEJHLFFBQVFDLFVBQVVDLGlCQUFpQmE7b0JBRS9FLElBQUlYLFdBQVc7d0JBQ2IsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==