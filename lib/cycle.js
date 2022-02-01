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
                var cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(), cyclicEdgeTargetVertexName1 = partialCycle.getCyclicEdgeTargetVertexName(), predecessorVertexNames = partialCycle.getPredecessorVertexNames(), successorVertexNames = (0, _vertex).vertexNamesFromVertices(successorVertices), vertexNames = vertexName === cyclicEdgeTargetVertexName1 ? [].concat(cyclicEdgeTargetVertexName1).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) : [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName1).concat(successorVertexNames), cycle = new Cycle(vertexNames);
                return cycle;
            }
        }
    ]);
    return Cycle;
}();
exports.default = Cycle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhOYW1lcykge1xuICAgIHRoaXMudmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuc2xpY2UoKTsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID0gc3VjY2Vzc29yVmVydGljZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChzdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VjY2Vzc29yVmVydGV4ID0gZmlyc3Qoc3VjY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgICAgZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RTdWNjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gcGFydGlhbEN5Y2xlLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9ICh2ZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleE5hbWVzKS5jb25jYXQoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcykuY29uY2F0KGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKS5jb25jYXQoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpLmNvbmNhdChzdWNjZXNzb3JWZXJ0ZXhOYW1lcyksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGV4TmFtZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiQ3ljbGUiLCJ2ZXJ0ZXhOYW1lcyIsImdldFZlcnRleE5hbWVzIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsInZlcnRleE5hbWUiLCJwYXJ0aWFsQ3ljbGUiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsInNsaWNlIiwic3VjY2Vzc29yVmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1Y2Nlc3NvclZlcnRleCIsImZpcnN0U3VjY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJzaGlmdCIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0Q3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJnZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic3VjY2Vzc29yVmVydGV4TmFtZXMiLCJjb25jYXQiLCJjeWNsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBVyxDQUFYLFVBQVc7QUFFRixHQUFvQixDQUFwQixPQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsR0FBSyxDQUFHQSxLQUFLLEdBSmtCLFVBQVcsZ0JBSWxDQSxLQUFLO0lBRVFDLEtBQUssaUJBQVgsUUFBUTthQUFGQSxLQUFLLENBQ1pDLFdBQVc7O1FBQ3JCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXOzs7O1lBR2hDQyxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUNELFdBQVc7WUFDekIsQ0FBQzs7OztZQUVNRSxHQUE4QyxFQUE5Q0EsQ0FBOEM7bUJBQXJELFFBQVEsQ0FBREEsOENBQThDLENBQUNDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNsR0EsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDQyxLQUFLLEdBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuRCxHQUFLLENBQUNDLHVCQUF1QixHQUFHRixpQkFBaUIsQ0FBQ0csTUFBTTtnQkFFeEQsRUFBRSxFQUFFRCx1QkFBdUIsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDaEMsR0FBSyxDQUFDRSxvQkFBb0IsR0FBR1gsS0FBSyxDQUFDTyxpQkFBaUIsR0FDOUNLLHdCQUF3QixHQUFHRCxvQkFBb0IsQ0FBQ0UsT0FBTyxJQUN2REMsMEJBQTBCLEdBQUdSLFlBQVksQ0FBQ1MsbUJBQW1CO29CQUVuRSxFQUFFLEVBQUVILHdCQUF3QixLQUFLRSwwQkFBMEIsRUFBRSxDQUFDO3dCQUM1RFAsaUJBQWlCLENBQUNTLEtBQUs7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxHQUFLLENBQUNDLDBCQUEwQixHQUFHWCxZQUFZLENBQUNZLDZCQUE2QixJQUN2RUosMkJBQTBCLEdBQUdSLFlBQVksQ0FBQ2EsNkJBQTZCLElBQ3ZFQyxzQkFBc0IsR0FBR2QsWUFBWSxDQUFDZSx5QkFBeUIsSUFDL0RDLG9CQUFvQixPQS9CVSxPQUFvQiwwQkErQkhmLGlCQUFpQixHQUNoRUwsV0FBVyxHQUFJRyxVQUFVLEtBQUtTLDJCQUEwQixHQUN4QyxDQUFDLENBQUMsQ0FBQ1MsTUFBTSxDQUFDVCwyQkFBMEIsRUFBRVMsTUFBTSxDQUFDSCxzQkFBc0IsRUFBRUcsTUFBTSxDQUFDTiwwQkFBMEIsSUFDcEcsQ0FBQyxDQUFDLENBQUNNLE1BQU0sQ0FBQ0gsc0JBQXNCLEVBQUVHLE1BQU0sQ0FBQ04sMEJBQTBCLEVBQUVNLE1BQU0sQ0FBQ1QsMkJBQTBCLEVBQUVTLE1BQU0sQ0FBQ0Qsb0JBQW9CLEdBQ3JKRSxLQUFLLEdBQUcsR0FBRyxDQUFDdkIsS0FBSyxDQUFDQyxXQUFXO2dCQUVuQyxNQUFNLENBQUNzQixLQUFLO1lBQ2QsQ0FBQzs7Ozs7a0JBbENrQnZCLEtBQUsifQ==