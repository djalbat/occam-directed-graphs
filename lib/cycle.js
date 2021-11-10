"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _vertex = require("./utilities/vertex");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var first = _necessary.arrayUtilities.first;
var Cycle = /*#__PURE__*/ function() {
    function Cycle(vertexNames) {
        _classCallCheck(this, Cycle);
        this.vertexNames = vertexNames;
    }
    _createClass(Cycle, [
        {
            key: "getVertexNames",
            value: function getVertexNames() {
                return this.vertexNames;
            }
        }
    ], [
        {
            key: "fromVertexNamePartialCycleAndSuccessorVertices",
            value: function fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices) {
                successorVertices = successorVertices.slice(); ///
                var successorVerticesLength = successorVertices.length;
                if (successorVerticesLength > 0) {
                    var firstSuccessorVertex = first(successorVertices), firstSuccessorVertexName = firstSuccessorVertex.getName(), cyclicEdgeTargetVertexName = partialCycle.getTargetVertexName();
                    if (firstSuccessorVertexName === cyclicEdgeTargetVertexName) {
                        successorVertices.shift();
                    }
                }
                var cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(), cyclicEdgeTargetVertexName = partialCycle.getCyclicEdgeTargetVertexName(), predecessorVertexNames = partialCycle.getPredecessorVertexNames(), successorVertexNames = (0, _vertex).vertexNamesFromVertices(successorVertices), vertexNames = vertexName === cyclicEdgeTargetVertexName ? [].concat(cyclicEdgeTargetVertexName).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) : [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName).concat(successorVertexNames), cycle = new Cycle(vertexNames);
                return cycle;
            }
        }
    ]);
    return Cycle;
}();
exports.default = Cycle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhOYW1lcykge1xuICAgIHRoaXMudmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuc2xpY2UoKTsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID0gc3VjY2Vzc29yVmVydGljZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChzdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VjY2Vzc29yVmVydGV4ID0gZmlyc3Qoc3VjY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgICAgZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gcGFydGlhbEN5Y2xlLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9ICh2ZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleE5hbWVzKS5jb25jYXQoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcykuY29uY2F0KGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChzdWNjZXNzb3JWZXJ0ZXhOYW1lcyksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGV4TmFtZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRUYsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELEdBQUssQ0FBRyxLQUFLLEdBSmtCLFVBQVcsZ0JBSWxDLEtBQUs7SUFFUSxLQUFLO2FBQUwsS0FBSyxDQUNaLFdBQVc7OEJBREosS0FBSzthQUVqQixXQUFXLEdBQUcsV0FBVzs7aUJBRmIsS0FBSzs7WUFLeEIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxHQUFHLENBQUM7NEJBQ0osV0FBVztZQUN6QixDQUFDOzs7O1lBRU0sR0FBOEMsR0FBOUMsOENBQThDOzRCQUE5Qyw4Q0FBOEMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLENBQUM7Z0JBQ2xHLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLEtBQUssR0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5ELEdBQUssQ0FBQyx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNO2dCQUV4RCxFQUFFLEVBQUUsdUJBQXVCLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ2hDLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEdBQzlDLHdCQUF3QixHQUFHLG9CQUFvQixDQUFDLE9BQU8sSUFDdkQsMEJBQTBCLEdBQUcsWUFBWSxDQUFDLG1CQUFtQjtvQkFFbkUsRUFBRSxFQUFFLHdCQUF3QixLQUFLLDBCQUEwQixFQUFFLENBQUM7d0JBQzVELGlCQUFpQixDQUFDLEtBQUs7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxHQUFLLENBQUMsMEJBQTBCLEdBQUcsWUFBWSxDQUFDLDZCQUE2QixJQUN2RSwwQkFBMEIsR0FBRyxZQUFZLENBQUMsNkJBQTZCLElBQ3ZFLHNCQUFzQixHQUFHLFlBQVksQ0FBQyx5QkFBeUIsSUFDL0Qsb0JBQW9CLE9BL0JVLE9BQW9CLDBCQStCSCxpQkFBaUIsR0FDaEUsV0FBVyxHQUFJLFVBQVUsS0FBSywwQkFBMEIsTUFDckMsTUFBTSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsMEJBQTBCLE9BQ2pHLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsR0FDckosS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVzt1QkFFNUIsS0FBSztZQUNkLENBQUM7OztXQWxDa0IsS0FBSzs7a0JBQUwsS0FBSyJ9