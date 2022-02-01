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
var PartialCycle = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0aWFsQ3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGlhbEN5Y2xlIHtcbiAgY29uc3RydWN0b3IocHJlZGVjZXNzb3JWZXJ0aWNlcywgY3ljbGljRWRnZSkge1xuICAgIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5jeWNsaWNFZGdlID0gY3ljbGljRWRnZTtcbiAgfVxuICBcbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXggPSBmaXJzdChwcmVkZWNlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICAgIGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBpZiAoZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0aWFsQ3ljbGUgPSBuZXcgUGFydGlhbEN5Y2xlKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0aWFsQ3ljbGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsIlBhcnRpYWxDeWNsZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsImdldEN5Y2xpY0VkZ2UiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJtYXAiLCJwcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJnZXRDeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwiZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzIiwic2xpY2UiLCJwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcmVkZWNlc3NvclZlcnRleCIsImZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwic2hpZnQiLCJwYXJ0aWFsQ3ljbGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUx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