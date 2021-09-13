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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIiwiZmlyc3QiLCJDeWNsZSIsImNvbnN0cnVjdG9yIiwidmVydGV4TmFtZXMiLCJnZXRWZXJ0ZXhOYW1lcyIsImZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXMiLCJ2ZXJ0ZXhOYW1lIiwicGFydGlhbEN5Y2xlIiwic3VjY2Vzc29yVmVydGljZXMiLCJzbGljZSIsInN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdWNjZXNzb3JWZXJ0ZXgiLCJmaXJzdFN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXROYW1lIiwiY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwic2hpZnQiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJwcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiY29uY2F0IiwiY3ljbGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRUYsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELEdBQUssQ0FBRyxLQUFLLEdBSmtCLFVBQVcsZ0JBSWxDLEtBQUs7SUFFUSxLQUFLLGlCQUFYLFFBQVE7YUFBRixLQUFLLENBQ1osV0FBVzs4QkFESixLQUFLO1FBRXRCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVzs7aUJBRmIsS0FBSzs7WUFLeEIsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekIsQ0FBQzs7OztZQUVNLEdBQThDLEdBQTlDLDhDQUE4QzttQkFBckQsUUFBUSxDQUFELDhDQUE4QyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztnQkFDbEcsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxHQUFLLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbkQsR0FBSyxDQUFDLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDLE1BQU07Z0JBRXhELEVBQUUsRUFBRSx1QkFBdUIsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDaEMsR0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsR0FDOUMsd0JBQXdCLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxJQUN2RCwwQkFBMEIsR0FBRyxZQUFZLENBQUMsbUJBQW1CO29CQUVuRSxFQUFFLEVBQUUsd0JBQXdCLEtBQUssMEJBQTBCLEVBQUUsQ0FBQzt3QkFDNUQsaUJBQWlCLENBQUMsS0FBSztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELEdBQUssQ0FBQywwQkFBMEIsR0FBRyxZQUFZLENBQUMsNkJBQTZCLElBQ3ZFLDBCQUEwQixHQUFHLFlBQVksQ0FBQyw2QkFBNkIsSUFDdkUsc0JBQXNCLEdBQUcsWUFBWSxDQUFDLHlCQUF5QixJQUMvRCxvQkFBb0IsT0EvQlUsT0FBb0IsMEJBK0JILGlCQUFpQixHQUNoRSxXQUFXLEdBQUksVUFBVSxLQUFLLDBCQUEwQixHQUN4QyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQywwQkFBMEIsSUFDcEcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixHQUNySixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXO2dCQUVuQyxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztXQWxDa0IsS0FBSzs7a0JBQUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGljZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE5hbWVzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5zbGljZSgpOyAgLy8vXG4gICAgXG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXNMZW5ndGggPSBzdWNjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKHN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RTdWNjZXNzb3JWZXJ0ZXggPSBmaXJzdChzdWNjZXNzb3JWZXJ0aWNlcyksXG4gICAgICAgICAgICBmaXJzdFN1Y2Nlc3NvclZlcnRleE5hbWUgPSBmaXJzdFN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdFN1Y2Nlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0Q3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBwYXJ0aWFsQ3ljbGUuZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gKHZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLmNvbmNhdChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkuY29uY2F0KHByZWRlY2Vzc29yVmVydGV4TmFtZXMpLmNvbmNhdChjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdLmNvbmNhdChwcmVkZWNlc3NvclZlcnRleE5hbWVzKS5jb25jYXQoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUpLmNvbmNhdChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkuY29uY2F0KHN1Y2Nlc3NvclZlcnRleE5hbWVzKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG59XG4iXX0=