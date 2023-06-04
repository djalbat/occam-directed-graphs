"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Cycle;
    }
});
var _necessary = require("necessary");
var _vertex = require("./utilities/vertex");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var first = _necessary.arrayUtilities.first;
var Cycle = /*#__PURE__*/ function() {
    function Cycle(vertexNames) {
        _class_call_check(this, Cycle);
        this.vertexNames = vertexNames;
    }
    _create_class(Cycle, [
        {
            key: "getVertexNames",
            value: function getVertexNames() {
                return this.vertexNames;
            }
        }
    ], [
        {
            key: "fromVertexNamePartialCycleAndSuccessorVertexes",
            value: function fromVertexNamePartialCycleAndSuccessorVertexes(vertexName, partialCycle, successorVertexes) {
                successorVertexes = successorVertexes.slice(); ///
                var successorVertexesLength = successorVertexes.length;
                if (successorVertexesLength > 0) {
                    var firstSuccessorVertex = first(successorVertexes), firstSuccessorVertexName = firstSuccessorVertex.getName(), cyclicEdgeTargetVertexName = partialCycle.getTargetVertexName();
                    if (firstSuccessorVertexName === cyclicEdgeTargetVertexName) {
                        successorVertexes.shift();
                    }
                }
                var cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(), cyclicEdgeTargetVertexName1 = partialCycle.getCyclicEdgeTargetVertexName(), predecessorVertexNames = partialCycle.getPredecessorVertexNames(), successorVertexNames = (0, _vertex.vertexNamesFromVertexes)(successorVertexes), vertexNames = vertexName === cyclicEdgeTargetVertexName1 ? [].concat(cyclicEdgeTargetVertexName1).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) : [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName1).concat(successorVertexNames), cycle = new Cycle(vertexNames);
                return cycle;
            }
        }
    ]);
    return Cycle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhOYW1lcykge1xuICAgIHRoaXMudmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gc3VjY2Vzc29yVmVydGV4ZXMuc2xpY2UoKTsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleGVzTGVuZ3RoID0gc3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VjY2Vzc29yVmVydGV4ID0gZmlyc3Qoc3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gcGFydGlhbEN5Y2xlLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHN1Y2Nlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9ICh2ZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleE5hbWVzKS5jb25jYXQoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcykuY29uY2F0KGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChzdWNjZXNzb3JWZXJ0ZXhOYW1lcyksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGV4TmFtZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDeWNsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhOYW1lcyIsImdldFZlcnRleE5hbWVzIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0ZXhlcyIsInZlcnRleE5hbWUiLCJwYXJ0aWFsQ3ljbGUiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsInNsaWNlIiwic3VjY2Vzc29yVmVydGV4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1Y2Nlc3NvclZlcnRleCIsImZpcnN0U3VjY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJzaGlmdCIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0Q3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJnZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyIsImNvbmNhdCIsImN5Y2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTtzQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQ7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2FBQU1BLE1BQ1BHLFdBQVc7Z0NBREpIO1FBRWpCLElBQUksQ0FBQ0csY0FBY0E7O2tCQUZGSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwrQ0FBK0NDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUI7Z0JBQy9GQSxvQkFBb0JBLGtCQUFrQkMsU0FBVSxHQUFHO2dCQUVuRCxJQUFNQywwQkFBMEJGLGtCQUFrQkc7Z0JBRWxELElBQUlELDBCQUEwQixHQUFHO29CQUMvQixJQUFNRSx1QkFBdUJYLE1BQU1PLG9CQUM3QkssMkJBQTJCRCxxQkFBcUJFLFdBQ2hEQyw2QkFBNkJSLGFBQWFTO29CQUVoRCxJQUFJSCw2QkFBNkJFLDRCQUE0Qjt3QkFDM0RQLGtCQUFrQlM7b0JBQ3BCO2dCQUNGO2dCQUVBLElBQU1DLDZCQUE2QlgsYUFBYVksaUNBQzFDSiw4QkFBNkJSLGFBQWFhLGlDQUMxQ0MseUJBQXlCZCxhQUFhZSw2QkFDdENDLHVCQUF1QkMsSUFBQUEsaUNBQXdCaEIsb0JBQy9DTCxjQUFjLEFBQUNHLGVBQWVTLDhCQUNkLEVBQUUsQ0FBQ1UsT0FBT1YsNkJBQTRCVSxPQUFPSix3QkFBd0JJLE9BQU9QLDhCQUMxRSxFQUFFLENBQUNPLE9BQU9KLHdCQUF3QkksT0FBT1AsNEJBQTRCTyxPQUFPViw2QkFBNEJVLE9BQU9GLHVCQUNqSUcsUUFBUSxJQS9CRzFCLE1BK0JPRztnQkFFeEIsT0FBT3VCO1lBQ1Q7OztXQWxDbUIxQiJ9