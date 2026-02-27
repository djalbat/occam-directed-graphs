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
const _vertex = require("./utilities/vertex");
class Cycle {
    constructor(vertexNames){
        this.vertexNames = vertexNames;
    }
    getVertexNames() {
        return this.vertexNames;
    }
    static fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes) {
        const vertexes = [
            ...predecessorVertexes,
            sourceVertex
        ], vertexNames = (0, _vertex.vertexNamesFromVertexes)(vertexes), cycle = new Cycle(vertexNames);
        return cycle;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGV4TmFtZXMpIHtcbiAgICB0aGlzLnZlcnRleE5hbWVzID0gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLnByZWRlY2Vzc29yVmVydGV4ZXMsXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModmVydGV4ZXMpLFxuICAgICAgICAgIGN5Y2xlID0gbmV3IEN5Y2xlKHZlcnRleE5hbWVzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkN5Y2xlIiwidmVydGV4TmFtZXMiLCJnZXRWZXJ0ZXhOYW1lcyIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzIiwic291cmNlVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInZlcnRleGVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJjeWNsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozt3QkFGbUI7QUFFekIsTUFBTUE7SUFDbkIsWUFBWUMsV0FBVyxDQUFFO1FBQ3ZCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0QsV0FBVztJQUN6QjtJQUVBLE9BQU9FLHVDQUF1Q0MsWUFBWSxFQUFFQyxtQkFBbUIsRUFBRTtRQUMvRSxNQUFNQyxXQUFXO2VBQ05EO1lBQ0hEO1NBQ0QsRUFDREgsY0FBY00sSUFBQUEsK0JBQXVCLEVBQUNELFdBQ3RDRSxRQUFRLElBQUlSLE1BQU1DO1FBRXhCLE9BQU9PO0lBQ1Q7QUFDRiJ9