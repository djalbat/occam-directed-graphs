"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectedAcyclicGraph;
    }
});
var _necessary = require("necessary");
var _edge = /*#__PURE__*/ _interop_require_default(require("./edge"));
var _vertex = /*#__PURE__*/ _interop_require_default(require("./vertex"));
var _vertex1 = require("./utilities/vertex");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var last = _necessary.arrayUtilities.last;
var DirectedAcyclicGraph = /*#__PURE__*/ function() {
    function DirectedAcyclicGraph(vertexMap) {
        _class_call_check(this, DirectedAcyclicGraph);
        this.vertexMap = vertexMap;
    }
    _create_class(DirectedAcyclicGraph, [
        {
            key: "isEmpty",
            value: function isEmpty() {
                var vertices = this.getVertices(), verticesLength = vertices.length, empty = verticesLength === 0;
                return empty;
            }
        },
        {
            key: "getVertices",
            value: function getVertices() {
                var vertexMapValues = Object.values(this.vertexMap), vertices = vertexMapValues; ///
                return vertices;
            }
        },
        {
            key: "getVertexNames",
            value: function getVertexNames() {
                var vertexMapKeys = Object.keys(this.vertexMap), vertexNames = vertexMapKeys; ///
                return vertexNames;
            }
        },
        {
            key: "getVertexByVertexName",
            value: function getVertexByVertexName(vertexName) {
                var vertexPresent = this.isVertexPresentByVertexName(vertexName), vertex = vertexPresent ? this.vertexMap[vertexName] : null;
                return vertex;
            }
        },
        {
            key: "getImmediatePredecessorVertexNamesByVertexName",
            value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();
                return immediatePredecessorVertexNames;
            }
        },
        {
            key: "getImmediateSuccessorVertexNamesByVertexName",
            value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getPredecessorVertexNamesByVertexName",
            value: function getPredecessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), predecessorVertexNames = vertex.getPredecessorVertexNames();
                return predecessorVertexNames;
            }
        },
        {
            key: "getSuccessorVertexNamesByVertexName",
            value: function getSuccessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), successorVertexNames = vertex.getSuccessorVertexNames();
                return successorVertexNames;
            }
        },
        {
            key: "getEdgesByTargetVertexName",
            value: function getEdgesByTargetVertexName(targetVertexName) {
                var edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
                if (targetVertex !== null) {
                    var immediatePredecessorVertexNames = targetVertex.getImmediatePredecessorVertexNames(), sourceVertexNames = immediatePredecessorVertexNames; ///
                    sourceVertexNames.forEach(function(sourceVertexName) {
                        var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                        edges.push(edge);
                    });
                }
                return edges;
            }
        },
        {
            key: "getEdgesBySourceVertexName",
            value: function getEdgesBySourceVertexName(sourceVertexName) {
                var edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
                if (sourceVertex !== null) {
                    var immediateSuccessorVertexNames = sourceVertex.getImmediateSuccessorVertexNames(), targetVertexNames = immediateSuccessorVertexNames; ///
                    targetVertexNames.forEach(function(targetVertexName) {
                        var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                        edges.push(edge);
                    });
                }
                return edges;
            }
        },
        {
            key: "setVertexByVertexName",
            value: function setVertexByVertexName(vertexName, vertex) {
                this.vertexMap[vertexName] = vertex;
            }
        },
        {
            key: "deleteVertexByVertexName",
            value: function deleteVertexByVertexName(vertexName) {
                delete this.vertexMap[vertexName];
            }
        },
        {
            key: "isEdgePresent",
            value: function isEdgePresent(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), edgePresent = this.isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                return edgePresent;
            }
        },
        {
            key: "isEdgePresentBySourceVertexNameAndTargetVertexName",
            value: function isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var edgePresent = false;
                var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexAndTargetVertexPresent = sourceVertex !== null && targetVertex !== null;
                if (sourceVertexAndTargetVertexPresent) {
                    edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                }
                return edgePresent;
            }
        },
        {
            key: "isVertexPresentByVertexName",
            value: function isVertexPresentByVertexName(vertexName) {
                var vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName), vertexPresent = vertexNamesIncludesVertexName; ///
                return vertexPresent;
            }
        },
        {
            key: "getOrderedVertexNames",
            value: function getOrderedVertexNames() {
                var vertices = this.getVertices();
                (0, _vertex1.orderVertices)(vertices);
                var orderedVertices = vertices, orderedVertexNames = (0, _vertex1.vertexNamesFromVertices)(orderedVertices);
                return orderedVertexNames;
            }
        },
        {
            key: "addEdge",
            value: function addEdge(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), success = this.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                return success;
            }
        },
        {
            key: "addVertexByVertexName",
            value: function addVertexByVertexName(vertexName) {
                var vertexPresent = this.isVertexPresentByVertexName(vertexName);
                if (!vertexPresent) {
                    var vertexNames = this.getVertexNames(), vertexNamesLength = vertexNames.length, name = vertexName, index = vertexNamesLength, vertex = _vertex.default.fromNameAndIndex(name, index);
                    this.setVertexByVertexName(vertexName, vertex);
                }
                var vertex1 = this.getVertexByVertexName(vertexName);
                return vertex1;
            }
        },
        {
            key: "addEdgeBySourceVertexNameAndTargetVertexName",
            value: function addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var success = false;
                if (sourceVertexName !== targetVertexName) {
                    var sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                    if (edgePresent) {
                        success = true;
                    } else {
                        var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex(), invalidatingEdge = sourceVertexIndex > targetVertexIndex;
                        success = invalidatingEdge ? addInvalidatingEdgeByVertices(sourceVertex, targetVertex) : true;
                        if (success) {
                            var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex; ///
                            immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
                            immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
                        }
                    }
                }
                return success;
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
                this.removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
            }
        },
        {
            key: "removeVertexByVertexName",
            value: function removeVertexByVertexName(vertexName) {
                var removedEdges = null;
                var vertexPresent = this.isVertexPresentByVertexName(vertexName);
                if (vertexPresent) {
                    removedEdges = [];
                    var vertex = this.getVertexByVertexName(vertexName);
                    vertex.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
                        var immediatePredecessorVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                        removedEdges.push(removedEdge);
                        immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
                    });
                    vertex.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                        var immediateSuccessVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                        removedEdges.push(removedEdge);
                        immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
                    });
                    this.deleteVertexByVertexName(vertexName);
                    var deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex(), vertices = this.getVertices(), affectedVertices = vertices.reduce(function(affectedVertices, vertex) {
                        var vertexIndex = vertex.getIndex(), vertexAffected = vertexIndex > deletedVertexIndex;
                        if (vertexAffected) {
                            var affectedVertex = vertex; ///
                            affectedVertices.push(affectedVertex);
                        }
                        return affectedVertices;
                    }, []);
                    affectedVertices.forEach(function(affectedVertex) {
                        return affectedVertex.decrementIndex();
                    });
                }
                return removedEdges;
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName) {
                var sourceVertexPresent = this.isVertexPresentByVertexName(sourceVertexName);
                if (sourceVertexPresent) {
                    var sourceVertex = this.getVertexByVertexName(sourceVertexName);
                    sourceVertex.removeOutgoingEdges();
                }
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName) {
                var targetVertexPresent = this.isVertexPresentByVertexName(targetVertexName);
                if (targetVertexPresent) {
                    var targetVertex = this.getVertexByVertexName(targetVertexName);
                    targetVertex.removeIncomingEdges();
                }
            }
        },
        {
            key: "removeEdgeBySourceVertexNameAndTargetVertexName",
            value: function removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var edgePresent = this.isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                if (edgePresent) {
                    var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
                    sourceVertex.removeImmediateSuccessorVertex(targetVertex);
                    targetVertex.removeImmediatePredecessorVertex(sourceVertex);
                }
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var vertexMap = {}, directedAcyclicGraph = new DirectedAcyclicGraph(vertexMap);
                return directedAcyclicGraph;
            }
        }
    ]);
    return DirectedAcyclicGraph;
}();
function addInvalidatingEdgeByVertices(sourceVertex, targetVertex) {
    var success = false;
    var forwardsAffectedVertices = targetVertex.retrieveForwardsAffectedVertices(sourceVertex), lastForwardsAffectedVertex = last(forwardsAffectedVertices), resultsInCycle = lastForwardsAffectedVertex === sourceVertex;
    if (!resultsInCycle) {
        var backwardsAffectedVertices = sourceVertex.retrieveBackwardsAffectedVertices();
        (0, _vertex1.orderVertices)(backwardsAffectedVertices);
        (0, _vertex1.orderVertices)(forwardsAffectedVertices);
        var affectedVertices = [].concat(backwardsAffectedVertices).concat(forwardsAffectedVertices), affectedVertexIndices = affectedVertices.map(function(affectedVertex) {
            var affectedVertexIndex = affectedVertex.getIndex();
            return affectedVertexIndex;
        });
        affectedVertexIndices.sort(function(indexA, indexB) {
            return indexA - indexB;
        });
        affectedVertices.forEach(function(affectedVertex, index) {
            var affectedVertexIndex = affectedVertexIndices[index];
            affectedVertex.setIndex(affectedVertexIndex);
        });
        success = true;
    }
    return success;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEFjeWNsaWNHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IG9yZGVyVmVydGljZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9ICh2ZXJ0aWNlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRleE1hcFZhbHVlczsgLy8vXG5cbiAgICByZXR1cm4gdmVydGljZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBLZXlzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TWFwS2V5czsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGVkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50ID0gKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkgJiYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleE5hbWUgIT09IHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgaW52YWxpZGF0aW5nRWRnZSA9IChzb3VyY2VWZXJ0ZXhJbmRleCA+IHRhcmdldFZlcnRleEluZGV4KTtcblxuICAgICAgICBzdWNjZXNzID0gaW52YWxpZGF0aW5nRWRnZSA/XG4gICAgICAgICAgYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGljZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIDpcbiAgICAgICAgICB0cnVlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgcmVtb3ZlZEVkZ2VzID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZW1vdmVkRWRnZXMgPSBbXTtcblxuICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IG5ldyBFZGdlKHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSwgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5nZXROYW1lKCksICAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IG5ldyBFZGdlKHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSwgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjb25zdCBkZWxldGVkVmVydGV4ID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgYWZmZWN0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLnJlZHVjZSgoYWZmZWN0ZWRWZXJ0aWNlcywgdmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEFmZmVjdGVkID0gKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KTtcblxuICAgICAgICAgICAgICBpZiAodmVydGV4QWZmZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgYWZmZWN0ZWRWZXJ0aWNlcy5wdXNoKGFmZmVjdGVkVmVydGV4KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRpY2VzO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICBhZmZlY3RlZFZlcnRpY2VzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4KSA9PiBhZmZlY3RlZFZlcnRleC5kZWNyZW1lbnRJbmRleCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlZEVkZ2VzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgc291cmNlVmVydGV4LnJlbW92ZU91dGdvaW5nRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW5jb21pbmdFZGdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gbmV3IERpcmVjdGVkQWN5Y2xpY0dyYXBoKHZlcnRleE1hcCk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGljZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICBjb25zdCBmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGljZXMoc291cmNlVmVydGV4KSxcbiAgICAgICAgbGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPSBsYXN0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyksXG4gICAgICAgIHJlc3VsdHNJbkN5Y2xlID0gKGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpO1xuXG4gIGlmICghcmVzdWx0c0luQ3ljbGUpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gc291cmNlVmVydGV4LnJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyhiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKTtcblxuICAgIG9yZGVyVmVydGljZXMoZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKTtcblxuICAgIGNvbnN0IGFmZmVjdGVkVmVydGljZXMgPSBbXS5jb25jYXQoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcykuY29uY2F0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyksXG4gICAgICAgICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzID0gYWZmZWN0ZWRWZXJ0aWNlcy5tYXAoKGFmZmVjdGVkVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4SW5kZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICBhZmZlY3RlZFZlcnRleEluZGljZXMuc29ydCgoaW5kZXhBLCBpbmRleEIpID0+IChpbmRleEEgLSBpbmRleEIpKTtcblxuICAgIGFmZmVjdGVkVmVydGljZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzW2luZGV4XTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0ZXguc2V0SW5kZXgoYWZmZWN0ZWRWZXJ0ZXhJbmRleCk7XG4gICAgfSk7XG5cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4TWFwIiwiaXNFbXB0eSIsInZlcnRpY2VzIiwiZ2V0VmVydGljZXMiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImVtcHR5IiwidmVydGV4TWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleE5hbWUiLCJlZGdlcyIsInRhcmdldFZlcnRleCIsInNvdXJjZVZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInB1c2giLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleE5hbWVzIiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwiZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiaXNFZGdlUHJlc2VudCIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSIsImluY2x1ZGVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0aWNlcyIsIm9yZGVyZWRWZXJ0aWNlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIiwiYWRkRWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWVzTGVuZ3RoIiwibmFtZSIsImluZGV4IiwiVmVydGV4IiwiZnJvbU5hbWVBbmRJbmRleCIsInNvdXJjZVZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJ0YXJnZXRWZXJ0ZXhJbmRleCIsImludmFsaWRhdGluZ0VkZ2UiLCJhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0aWNlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVFZGdlIiwicmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZXMiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSIsInJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSIsInJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZWRFZGdlIiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwiYWZmZWN0ZWRWZXJ0aWNlcyIsInJlZHVjZSIsInZlcnRleEluZGV4IiwidmVydGV4QWZmZWN0ZWQiLCJhZmZlY3RlZFZlcnRleCIsImRlY3JlbWVudEluZGV4IiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhQcmVzZW50IiwicmVtb3ZlT3V0Z29pbmdFZGdlcyIsInJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4UHJlc2VudCIsInJlbW92ZUluY29taW5nRWRnZXMiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwiZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzIiwicmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGljZXMiLCJsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCIsInJlc3VsdHNJbkN5Y2xlIiwiYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyIsInJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyIsImNvbmNhdCIsImFmZmVjdGVkVmVydGV4SW5kaWNlcyIsIm1hcCIsImFmZmVjdGVkVmVydGV4SW5kZXgiLCJzb3J0IiwiaW5kZXhBIiwiaW5kZXhCIiwic2V0SW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOzJEQUVkOzZEQUNFO3VCQUVvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLE9BQVNDLDBCQUFURDtBQUVPLElBQUEsQUFBTUQscUNBNFRsQixBQTVUWTthQUFNQSxxQkFDUEcsU0FBUztnQ0FERkg7UUFFakIsSUFBSSxDQUFDRyxZQUFZQTs7a0JBRkFIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxlQUNoQkMsaUJBQWlCRixTQUFTRyxRQUMxQkMsUUFBU0YsbUJBQW1CO2dCQUVsQyxPQUFPRTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1JLGtCQUFrQkMsT0FBT0MsT0FBTyxJQUFJLENBQUNULFlBQ3JDRSxXQUFXSyxpQkFBaUIsR0FBRztnQkFFckMsT0FBT0w7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JILE9BQU9JLEtBQUssSUFBSSxD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