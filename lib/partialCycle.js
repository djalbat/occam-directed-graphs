'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var PartialCycle = function () {
  function PartialCycle(predecessorVertices, cyclicEdge) {
    _classCallCheck(this, PartialCycle);

    this.predecessorVertices = predecessorVertices;
    this.cyclicEdge = cyclicEdge;
  }

  _createClass(PartialCycle, [{
    key: 'getPredecessorVertices',
    value: function getPredecessorVertices() {
      return this.predecessorVertices;
    }
  }, {
    key: 'getCyclicEdge',
    value: function getCyclicEdge() {
      return this.cyclicEdge;
    }
  }, {
    key: 'getTargetVertexName',
    value: function getTargetVertexName() {
      var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName(),
          targetVertexName = cyclicEdgeTargetVertexName; ///

      return targetVertexName;
    }
  }, {
    key: 'getPredecessorVertexNames',
    value: function getPredecessorVertexNames() {
      var predecessorVertexNames = this.predecessorVertices.map(function (predecessorVertex) {
        var predecessorVertexName = predecessorVertex.getName();

        return predecessorVertexName;
      });

      return predecessorVertexNames;
    }
  }, {
    key: 'getCyclicEdgeSourceVertexName',
    value: function getCyclicEdgeSourceVertexName() {
      var cyclicEdgeSourceVertexName = this.cyclicEdge.getSourceVertexName();

      return cyclicEdgeSourceVertexName;
    }
  }, {
    key: 'getCyclicEdgeTargetVertexName',
    value: function getCyclicEdgeTargetVertexName() {
      var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName();

      return cyclicEdgeTargetVertexName;
    }
  }], [{
    key: 'fromCyclicEdgeAndPredecessorVertices',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJ0aWFsQ3ljbGUuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJQYXJ0aWFsQ3ljbGUiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwiY3ljbGljRWRnZSIsImN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleE5hbWUiLCJwcmVkZWNlc3NvclZlcnRleE5hbWVzIiwibWFwIiwicHJlZGVjZXNzb3JWZXJ0ZXgiLCJwcmVkZWNlc3NvclZlcnRleE5hbWUiLCJnZXROYW1lIiwiY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcmVkZWNlc3NvclZlcnRleCIsImZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwic2hpZnQiLCJwYXJ0aWFsQ3ljbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsWTtBQUNKLHdCQUFZQyxtQkFBWixFQUFpQ0MsVUFBakMsRUFBNkM7QUFBQTs7QUFDM0MsU0FBS0QsbUJBQUwsR0FBMkJBLG1CQUEzQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7NkNBRXdCO0FBQ3ZCLGFBQU8sS0FBS0QsbUJBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBTUMsNkJBQTZCLEtBQUtELFVBQUwsQ0FBZ0JFLG1CQUFoQixFQUFuQztBQUFBLFVBQ01DLG1CQUFtQkYsMEJBRHpCLENBRG9CLENBRWtDOztBQUV0RCxhQUFPRSxnQkFBUDtBQUNEOzs7Z0RBRTJCO0FBQzFCLFVBQU1DLHlCQUF5QixLQUFLTCxtQkFBTCxDQUF5Qk0sR0FBekIsQ0FBNkIsVUFBU0MsaUJBQVQsRUFBNEI7QUFDdEYsWUFBTUMsd0JBQXdCRCxrQkFBa0JFLE9BQWxCLEVBQTlCOztBQUVBLGVBQU9ELHFCQUFQO0FBQ0QsT0FKOEIsQ0FBL0I7O0FBTUEsYUFBT0gsc0JBQVA7QUFDRDs7O29EQUUrQjtBQUM5QixVQUFNSyw2QkFBNkIsS0FBS1QsVUFBTCxDQUFnQlUsbUJBQWhCLEVBQW5DOztBQUVBLGFBQU9ELDBCQUFQO0FBQ0Q7OztvREFFK0I7QUFDOUIsVUFBTVIsNkJBQTZCLEtBQUtELFVBQUwsQ0FBZ0JFLG1CQUFoQixFQUFuQzs7QUFFQSxhQUFPRCwwQkFBUDtBQUNEOzs7eURBRTJDRCxVLEVBQVlELG1CLEVBQXFCO0FBQzNFQSw0QkFBc0JBLG9CQUFvQlksS0FBcEIsRUFBdEIsQ0FEMkUsQ0FDdkI7O0FBRXBELFVBQU1DLDRCQUE0QmIsb0JBQW9CYyxNQUF0RDs7QUFFQSxVQUFJRCw0QkFBNEIsQ0FBaEMsRUFBbUM7QUFDakMsWUFBTUUseUJBQXlCakIsTUFBTUUsbUJBQU4sQ0FBL0I7QUFBQSxZQUNNZ0IsNkJBQTZCRCx1QkFBdUJOLE9BQXZCLEVBRG5DO0FBQUEsWUFFTVAsNkJBQTZCRCxXQUFXRSxtQkFBWCxFQUZuQzs7QUFJQSxZQUFJYSwrQkFBK0JkLDBCQUFuQyxFQUErRDtBQUM3REYsOEJBQW9CaUIsS0FBcEI7QUFDRDtBQUNGOztBQUVELFVBQU1DLGVBQWUsSUFBSW5CLFlBQUosQ0FBaUJDLG1CQUFqQixFQUFzQ0MsVUFBdEMsQ0FBckI7O0FBRUEsYUFBT2lCLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJyQixZQUFqQiIsImZpbGUiOiJwYXJ0aWFsQ3ljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUGFydGlhbEN5Y2xlIHtcbiAgY29uc3RydWN0b3IocHJlZGVjZXNzb3JWZXJ0aWNlcywgY3ljbGljRWRnZSkge1xuICAgIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5jeWNsaWNFZGdlID0gY3ljbGljRWRnZTtcbiAgfVxuICBcbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcy5tYXAoZnVuY3Rpb24ocHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuICBcbiAgZ2V0Q3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMuc2xpY2UoKTsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPSBwcmVkZWNlc3NvclZlcnRpY2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RQcmVkZWNlc3NvclZlcnRleCA9IGZpcnN0KHByZWRlY2Vzc29yVmVydGljZXMpLFxuICAgICAgICAgICAgZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBmaXJzdFByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIGlmIChmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSA9PT0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcy5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnRpYWxDeWNsZSA9IG5ldyBQYXJ0aWFsQ3ljbGUocHJlZGVjZXNzb3JWZXJ0aWNlcywgY3ljbGljRWRnZSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnRpYWxDeWNsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpYWxDeWNsZTtcblxuIl19