"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var PartialCycle = /*#__PURE__*/function () {
  function PartialCycle(predecessorVertices, cyclicEdge) {
    _classCallCheck(this, PartialCycle);

    this.predecessorVertices = predecessorVertices;
    this.cyclicEdge = cyclicEdge;
  }

  _createClass(PartialCycle, [{
    key: "getPredecessorVertices",
    value: function getPredecessorVertices() {
      return this.predecessorVertices;
    }
  }, {
    key: "getCyclicEdge",
    value: function getCyclicEdge() {
      return this.cyclicEdge;
    }
  }, {
    key: "getTargetVertexName",
    value: function getTargetVertexName() {
      var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName(),
          targetVertexName = cyclicEdgeTargetVertexName; ///

      return targetVertexName;
    }
  }, {
    key: "getPredecessorVertexNames",
    value: function getPredecessorVertexNames() {
      var predecessorVertexNames = this.predecessorVertices.map(function (predecessorVertex) {
        var predecessorVertexName = predecessorVertex.getName();
        return predecessorVertexName;
      });
      return predecessorVertexNames;
    }
  }, {
    key: "getCyclicEdgeSourceVertexName",
    value: function getCyclicEdgeSourceVertexName() {
      var cyclicEdgeSourceVertexName = this.cyclicEdge.getSourceVertexName();
      return cyclicEdgeSourceVertexName;
    }
  }, {
    key: "getCyclicEdgeTargetVertexName",
    value: function getCyclicEdgeTargetVertexName() {
      var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName();
      return cyclicEdgeTargetVertexName;
    }
  }], [{
    key: "fromCyclicEdgeAndPredecessorVertices",
    value: function fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices) {
      predecessorVertices = predecessorVertices.slice(); ///

      var predecessorVerticesLength = predecessorVertices.length;

      if (predecessorVerticesLength > 0) {
        var firstPredecessorVertex = first(predecessorVertices),
            firstPredecessorVertexName = firstPredecessorVertex.getName(),
            cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();

        if (firstPredecessorVertexName === cyclicEdgeTargetVertexName) {
          predecessorVertices.shift();
        }
      }

      var partialCycle = new PartialCycle(predecessorVertices, cyclicEdge);
      return partialCycle;
    }
  }]);

  return PartialCycle;
}();

exports["default"] = PartialCycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxDeWNsZS5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUGFydGlhbEN5Y2xlIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsIm1hcCIsInByZWRlY2Vzc29yVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInNsaWNlIiwicHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXgiLCJmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSIsInNoaWZ0IiwicGFydGlhbEN5Y2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLFk7QUFDbkIsd0JBQVlDLG1CQUFaLEVBQWlDQyxVQUFqQyxFQUE2QztBQUFBOztBQUMzQyxTQUFLRCxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLRCxtQkFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNQywwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR0YsMEJBRHpCLENBRG9CLENBRWtDOztBQUV0RCxhQUFPRSxnQkFBUDtBQUNEOzs7Z0RBRTJCO0FBQzFCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtMLG1CQUFMLENBQXlCTSxHQUF6QixDQUE2QixVQUFTQyxpQkFBVCxFQUE0QjtBQUN0RixZQUFNQyxxQkFBcUIsR0FBR0QsaUJBQWlCLENBQUNFLE9BQWxCLEVBQTlCO0FBRUEsZUFBT0QscUJBQVA7QUFDRCxPQUo4QixDQUEvQjtBQU1BLGFBQU9ILHNCQUFQO0FBQ0Q7OztvREFFK0I7QUFDOUIsVUFBTUssMEJBQTBCLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsbUJBQWhCLEVBQW5DO0FBRUEsYUFBT0QsMEJBQVA7QUFDRDs7O29EQUUrQjtBQUM5QixVQUFNUiwwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFFQSxhQUFPRCwwQkFBUDtBQUNEOzs7eURBRTJDRCxVLEVBQVlELG1CLEVBQXFCO0FBQzNFQSxNQUFBQSxtQkFBbUIsR0FBR0EsbUJBQW1CLENBQUNZLEtBQXBCLEVBQXRCLENBRDJFLENBQ3ZCOztBQUVwRCxVQUFNQyx5QkFBeUIsR0FBR2IsbUJBQW1CLENBQUNjLE1BQXREOztBQUVBLFVBQUlELHlCQUF5QixHQUFHLENBQWhDLEVBQW1DO0FBQ2pDLFlBQU1FLHNCQUFzQixHQUFHbEIsS0FBSyxDQUFDRyxtQkFBRCxDQUFwQztBQUFBLFlBQ01nQiwwQkFBMEIsR0FBR0Qsc0JBQXNCLENBQUNOLE9BQXZCLEVBRG5DO0FBQUEsWUFFTVAsMEJBQTBCLEdBQUdELFVBQVUsQ0FBQ0UsbUJBQVgsRUFGbkM7O0FBSUEsWUFBSWEsMEJBQTBCLEtBQUtkLDBCQUFuQyxFQUErRDtBQUM3REYsVUFBQUEsbUJBQW1CLENBQUNpQixLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUMsWUFBWSxHQUFHLElBQUluQixZQUFKLENBQWlCQyxtQkFBakIsRUFBc0NDLFVBQXRDLENBQXJCO0FBRUEsYUFBT2lCLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpYWxDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpIHtcbiAgICB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgIHRoaXMuY3ljbGljRWRnZSA9IGN5Y2xpY0VkZ2U7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZTtcbiAgfVxuXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMubWFwKGZ1bmN0aW9uKHByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXggPSBmaXJzdChwcmVkZWNlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICAgIGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBpZiAoZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0aWFsQ3ljbGUgPSBuZXcgUGFydGlhbEN5Y2xlKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0aWFsQ3ljbGU7XG4gIH1cbn1cbiJdfQ==