'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

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

module.exports = PartialCycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxDeWNsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlBhcnRpYWxDeWNsZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlIiwiY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJtYXAiLCJwcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJzbGljZSIsInByZWRlY2Vzc29yVmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByZWRlY2Vzc29yVmVydGV4IiwiZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJzaGlmdCIsInBhcnRpYWxDeWNsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBekI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOztJQUdBQyxZO0FBQ0osd0JBQVlDLG1CQUFaLEVBQWlDQyxVQUFqQyxFQUE2QztBQUFBOztBQUMzQyxTQUFLRCxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLRCxtQkFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNQywwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR0YsMEJBRHpCLENBRG9CLENBRWtDOztBQUV0RCxhQUFPRSxnQkFBUDtBQUNEOzs7Z0RBRTJCO0FBQzFCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtMLG1CQUFMLENBQXlCTSxHQUF6QixDQUE2QixVQUFTQyxpQkFBVCxFQUE0QjtBQUN0RixZQUFNQyxxQkFBcUIsR0FBR0QsaUJBQWlCLENBQUNFLE9BQWxCLEVBQTlCO0FBRUEsZUFBT0QscUJBQVA7QUFDRCxPQUo4QixDQUEvQjtBQU1BLGFBQU9ILHNCQUFQO0FBQ0Q7OztvREFFK0I7QUFDOUIsVUFBTUssMEJBQTBCLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsbUJBQWhCLEVBQW5DO0FBRUEsYUFBT0QsMEJBQVA7QUFDRDs7O29EQUUrQjtBQUM5QixVQUFNUiwwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFFQSxhQUFPRCwwQkFBUDtBQUNEOzs7eURBRTJDRCxVLEVBQVlELG1CLEVBQXFCO0FBQzNFQSxNQUFBQSxtQkFBbUIsR0FBR0EsbUJBQW1CLENBQUNZLEtBQXBCLEVBQXRCLENBRDJFLENBQ3ZCOztBQUVwRCxVQUFNQyx5QkFBeUIsR0FBR2IsbUJBQW1CLENBQUNjLE1BQXREOztBQUVBLFVBQUlELHlCQUF5QixHQUFHLENBQWhDLEVBQW1DO0FBQ2pDLFlBQU1FLHNCQUFzQixHQUFHakIsS0FBSyxDQUFDRSxtQkFBRCxDQUFwQztBQUFBLFlBQ01nQiwwQkFBMEIsR0FBR0Qsc0JBQXNCLENBQUNOLE9BQXZCLEVBRG5DO0FBQUEsWUFFTVAsMEJBQTBCLEdBQUdELFVBQVUsQ0FBQ0UsbUJBQVgsRUFGbkM7O0FBSUEsWUFBSWEsMEJBQTBCLEtBQUtkLDBCQUFuQyxFQUErRDtBQUM3REYsVUFBQUEsbUJBQW1CLENBQUNpQixLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUMsWUFBWSxHQUFHLElBQUluQixZQUFKLENBQWlCQyxtQkFBakIsRUFBc0NDLFVBQXRDLENBQXJCO0FBRUEsYUFBT2lCLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFBhcnRpYWxDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpIHtcbiAgICB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgIHRoaXMuY3ljbGljRWRnZSA9IGN5Y2xpY0VkZ2U7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZTtcbiAgfVxuXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMubWFwKGZ1bmN0aW9uKHByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldEN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLnNsaWNlKCk7ICAvLy9cbiAgICBcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXggPSBmaXJzdChwcmVkZWNlc3NvclZlcnRpY2VzKSxcbiAgICAgICAgICAgIGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gZmlyc3RQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICBpZiAoZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPT09IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0aWFsQ3ljbGUgPSBuZXcgUGFydGlhbEN5Y2xlKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpO1xuICAgIFxuICAgIHJldHVybiBwYXJ0aWFsQ3ljbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWFsQ3ljbGU7XG5cbiJdfQ==