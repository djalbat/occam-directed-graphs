"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Edge;
    }
});
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
var Edge = /*#__PURE__*/ function() {
    function Edge(sourceVertexName, targetVertexName) {
        _class_call_check(this, Edge);
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
    }
    _create_class(Edge, [
        {
            key: "getSourceVertexName",
            value: function getSourceVertexName() {
                return this.sourceVertexName;
            }
        },
        {
            key: "getTargetVertexName",
            value: function getTargetVertexName() {
                return this.targetVertexName;
            }
        },
        {
            key: "match",
            value: function match(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), matches = this.sourceVertexName === sourceVertexName && this.targetVertexName === targetVertexName;
                return matches;
            }
        },
        {
            key: "matchVertexName",
            value: function matchVertexName(vertexName) {
                var matches = this.sourceVertexName === vertexName || this.targetVertexName === vertexName;
                return matches;
            }
        },
        {
            key: "matchSourceVertexName",
            value: function matchSourceVertexName(sourceVertexName) {
                var matches = this.sourceVertexName === sourceVertexName;
                return matches;
            }
        },
        {
            key: "matchTargetVertexName",
            value: function matchTargetVertexName(targetVertexName) {
                var matches = this.targetVertexName === targetVertexName;
                return matches;
            }
        },
        {
            key: "matchVertexNames",
            value: function matchVertexNames(sourceVertexName, targetVertexName) {
                var matches = this.sourceVertexName === sourceVertexName && this.targetVertexName === targetVertexName;
                return matches;
            }
        }
    ], [
        {
            key: "fromSourceVertexNameAndTargetVertexName",
            value: function fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var edge = new Edge(sourceVertexName, targetVertexName);
                return edge;
            }
        }
    ]);
    return Edge;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lZGdlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0U291cmNlVmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIG1hdGNoKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHx8ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHNvdXJjZVZlcnRleE5hbWUpICYmICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpKTtcbiAgICBcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVkZ2UiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwibWF0Y2giLCJlZGdlIiwibWF0Y2hlcyIsIm1hdGNoVmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJtYXRjaFRhcmdldFZlcnRleE5hbWUiLCJtYXRjaFZlcnRleE5hbWVzIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLGdCQUFnQixFQUFFQyxnQkFBZ0I7Z0NBRDNCRjtRQUVqQixJQUFJLENBQUNDLG1CQUFtQkE7UUFDeEIsSUFBSSxDQUFDQyxtQkFBbUJBOztrQkFIUEY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsSUFBSTtnQkFDUixJQUFNTCxtQkFBbUJLLEtBQUtILHVCQUN4QkQsbUJBQW1CSSxLQUFLRix1QkFDeEJHLFVBQVcsQUFBQyxJQUFJLENBQUNOLHFCQUFxQkEsb0JBQXNCLElBQUksQ0FBQ0MscUJBQXFCQTtnQkFFNUYsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLFVBQVU7Z0JBQ3hCLElBQU1GLFVBQVcsQUFBQyxJQUFJLENBQUNOLHFCQUFxQlEsY0FBZ0IsSUFBSSxDQUFDUCxxQkFBcUJPO2dCQUV0RixPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQlQsZ0JBQWdCO2dCQUNwQyxJQUFNTSxVQUFXLElBQUksQ0FBQ04scUJBQXFCQTtnQkFFM0MsT0FBT007WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JULGdCQUFnQjtnQkFDcEMsSUFBTUssVUFBVyxJQUFJLENBQUNMLHFCQUFxQkE7Z0JBRTNDLE9BQU9LO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCWCxnQkFBZ0IsRUFBRUMsZ0JBQWdCO2dCQUNqRCxJQUFNSyxVQUFXLEFBQUMsSUFBSSxDQUFDTixxQkFBcUJBLG9CQUFzQixJQUFJLENBQUNDLHFCQUFxQkE7Z0JBRTVGLE9BQU9LO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esd0NBQXdDWixnQkFBZ0IsRUFBRUMsZ0JBQWdCO2dCQUMvRSxJQUFNSSxPQUFPLElBL0NJTixLQStDS0Msa0JBQWtCQztnQkFFeEMsT0FBT0k7WUFDVDs7O1dBbERtQk4ifQ==