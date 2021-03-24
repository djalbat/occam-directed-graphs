"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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
var PartialCycle = function() {
    function PartialCycle(predecessorVertices, cyclicEdge) {
        _classCallCheck(this, PartialCycle);
        this.predecessorVertices = predecessorVertices;
        this.cyclicEdge = cyclicEdge;
    }
    _createClass(PartialCycle, [
        {
            key: "getPredecessorVertices",
            value: function getPredecessorVertices() {
                return this.predecessorVertices;
            }
        },
        {
            key: "getCyclicEdge",
            value: function getCyclicEdge() {
                return this.cyclicEdge;
            }
        },
        {
            key: "getTargetVertexName",
            value: function getTargetVertexName() {
                var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName(), targetVertexName = cyclicEdgeTargetVertexName; ///
                return targetVertexName;
            }
        },
        {
            key: "getPredecessorVertexNames",
            value: function getPredecessorVertexNames() {
                var predecessorVertexNames = this.predecessorVertices.map(function(predecessorVertex) {
                    var predecessorVertexName = predecessorVertex.getName();
                    return predecessorVertexName;
                });
                return predecessorVertexNames;
            }
        },
        {
            key: "getCyclicEdgeSourceVertexName",
            value: function getCyclicEdgeSourceVertexName() {
                var cyclicEdgeSourceVertexName = this.cyclicEdge.getSourceVertexName();
                return cyclicEdgeSourceVertexName;
            }
        },
        {
            key: "getCyclicEdgeTargetVertexName",
            value: function getCyclicEdgeTargetVertexName() {
                var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName();
                return cyclicEdgeTargetVertexName;
            }
        }
    ], [
        {
            key: "fromCyclicEdgeAndPredecessorVertices",
            value: function fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices) {
                predecessorVertices = predecessorVertices.slice(); ///
                var predecessorVerticesLength = predecessorVertices.length;
                if (predecessorVerticesLength > 0) {
                    var firstPredecessorVertex = first(predecessorVertices), firstPredecessorVertexName = firstPredecessorVertex.getName(), cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();
                    if (firstPredecessorVertexName === cyclicEdgeTargetVertexName) {
                        predecessorVertices.shift();
                    }
                }
                var partialCycle = new PartialCycle(predecessorVertices, cyclicEdge);
                return partialCycle;
            }
        }
    ]);
    return PartialCycle;
}();
exports.default = PartialCycle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0aWFsQ3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGlhbEN5Y2xlIHtcbiAgY29uc3RydWN0b3IocHJlZGVjZXNzb3JWZXJ0aWNlcywgY3ljbGljRWRnZSkge1xuICAgIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5jeWNsaWNFZGdlID0gY3ljbGljRWRnZTtcbiAgfVxuICBcbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXggPSBmaXJzdChwcmVkZWNlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICAgIGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBpZiAoZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0aWFsQ3ljbGUgPSBuZXcgUGFydGlhbEN5Y2xlKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0aWFsQ3ljbGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsS0FBQSxHQUZBLFVBQUEsZ0JBRUEsS0FBQTtJQUVBLFlBQUE7YUFBQSxZQUFBLENBQ0EsbUJBQUEsRUFBQSxVQUFBOzhCQURBLFlBQUE7YUFFQSxtQkFBQSxHQUFBLG1CQUFBO2FBQ0EsVUFBQSxHQUFBLFVBQUE7O2lCQUhBLFlBQUE7O0FBTUEsZUFBQSxHQUFBLHNCQUFBOzRCQUFBLHNCQUFBOzRCQUNBLG1CQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQTs0QkFDQSxVQUFBOzs7O0FBR0EsZUFBQSxHQUFBLG1CQUFBOzRCQUFBLG1CQUFBO29CQUNBLDBCQUFBLFFBQUEsVUFBQSxDQUFBLG1CQUFBLElBQ0EsZ0JBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLGdCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLHlCQUFBOzRCQUFBLHlCQUFBO29CQUNBLHNCQUFBLFFBQUEsbUJBQUEsQ0FBQSxHQUFBLFVBQUEsaUJBQUE7d0JBQ0EscUJBQUEsR0FBQSxpQkFBQSxDQUFBLE9BQUE7MkJBRUEscUJBQUE7O3VCQUdBLHNCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLDZCQUFBOzRCQUFBLDZCQUFBO29CQUNBLDBCQUFBLFFBQUEsVUFBQSxDQUFBLG1CQUFBO3VCQUVBLDBCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLDZCQUFBOzRCQUFBLDZCQUFBO29CQUNBLDBCQUFBLFFBQUEsVUFBQSxDQUFBLG1CQUFBO3VCQUVBLDBCQUFBOzs7OztBQUdBLGVBQUEsR0FBQSxvQ0FBQTs0QkFBQSxvQ0FBQSxDQUFBLFVBQUEsRUFBQSxtQkFBQTtBQUNBLG1DQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUE7b0JBRUEseUJBQUEsR0FBQSxtQkFBQSxDQUFBLE1BQUE7b0JBRUEseUJBQUEsR0FBQSxDQUFBO3dCQUNBLHNCQUFBLEdBQUEsS0FBQSxDQUFBLG1CQUFBLEdBQ0EsMEJBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUEsSUFDQSwwQkFBQSxHQUFBLFVBQUEsQ0FBQSxtQkFBQTt3QkFFQSwwQkFBQSxLQUFBLDBCQUFBO0FBQ0EsMkNBQUEsQ0FBQSxLQUFBOzs7b0JBSUEsWUFBQSxPQUFBLFlBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUE7dUJBRUEsWUFBQTs7OztXQTVEQSxZQUFBOztrQkFBQSxZQUFBIn0=