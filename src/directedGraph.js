"use strict";

import { arrayUtilities } from "necessary";

import Edge from "./edge";
import Cycle from "./cycle";
import Vertex from "./vertex";

import { orderIndexes, indexesFromVertexes } from "./utilities/index";
import { orderVertexes, vertexNamesFromVertexes } from "./utilities/vertex";

const { first } = arrayUtilities;

export default class DirectedGraph {
  constructor(vertexMap) {
    this.vertexMap = vertexMap;
  }

  getVertexNap() {
    return this.vertexMap;
  }

  getVertexes() {
    const vertexMapValues = Object.values(this.vertexMap),
          vertexes = vertexMapValues; ///

    return vertexes;
  }

  getVertexNames() {
    const vertexMapKeys = Object.keys(this.vertexMap),
          vertexNames = vertexMapKeys;  ///

    return vertexNames;
  }

  getOrderedVertexNames() {
    const vertexes = this.getVertexes();

    orderVertexes(vertexes);

    const orderedVertexes = vertexes, ///
          orderedVertexNames = vertexNamesFromVertexes(orderedVertexes);

    return orderedVertexNames;
  }

  getVertexByVertexName(vertexName) {
    const vertexPresent = this.isVertexPresentByVertexName(vertexName),
          vertex = vertexPresent ?
                     this.vertexMap[vertexName] :
                       null;

    return vertex;
  }

  getEdgesBySourceVertexName(sourceVertexName) {
    const edges = [],
          sourceVertex = this.getVertexByVertexName(sourceVertexName);

    if (sourceVertex !== null) {
      const immediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(),
            immediateSuccessorVertexNames = vertexNamesFromVertexes(immediateSuccessorVertexes),
            targetVertexNames = immediateSuccessorVertexNames;  ///

      targetVertexNames.forEach((targetVertexName) => {
        const edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        edges.push(edge);
      });
    }

    return edges;
  }

  getEdgesByTargetVertexName(targetVertexName) {
    const edges = [],
          targetVertex = this.getVertexByVertexName(targetVertexName);

    if (targetVertex !== null) {
      const immediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes(),
            immediatePredecessorVertexNames = vertexNamesFromVertexes(immediatePredecessorVertexes),
            sourceVertexNames = immediatePredecessorVertexNames;  ///

      sourceVertexNames.forEach((sourceVertexName) => {
        const edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        edges.push(edge);
      });
    }

    return edges;
  }

  getFirstCycle() {
    let firstCycle = null;

    const cyclesPresent = this.areCyclesPresent();

    if (cyclesPresent) {
      const cyclicEdges = this.getCyclicEdges(),
            firstCyclicEdge = first(cyclicEdges),
            sourceVertexName = firstCyclicEdge.getSourceVertexName(), ///
            targetVertexName = firstCyclicEdge.getTargetVertexName(), ///
            sourceVertex = this.getVertexByVertexName(sourceVertexName),
            targetVertex = this.getVertexByVertexName(targetVertexName);

      targetVertex.forwardsDepthFirstSearch((vertex, predecessorVertexes) => {
        let terminate = false;

        if (vertex === sourceVertex) {
          terminate = true;

          const cycle = Cycle.fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes);  ///

          firstCycle = cycle; ///
        }

        return terminate;
      });
    }

    return firstCycle;
  }

  getCyclicEdges() {
    const cyclicEdges = [],
          vertexes = this.getVertexes();

    vertexes.forEach((vertex) => {
      const sourceVertex = vertex,  ///
            sourceVertexIndex = sourceVertex.getIndex();

      vertex.forEachImmediateSuccessorVertex((immediateSuccessorVertex) => {
        const targetVertex = immediateSuccessorVertex,  ///
              targetVertexIndex = targetVertex.getIndex();

        if (targetVertexIndex < sourceVertexIndex) {
          const sourceVertexName = sourceVertex.getName(),
                targetVertexName = targetVertex.getName(),
                edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName),
                cyclicEdge = edge;  ///

          cyclicEdges.push(cyclicEdge);
        }
      });

      sourceVertex
    });

    return cyclicEdges;
  }

  areCyclesPresent() {
    const vertexes = this.getVertexes(),
          cyclesPresent = vertexes.some((vertex) => {
            const sourceVertex = vertex,  ///
                  sourceVertexIndex = sourceVertex.getIndex(),
                  cyclicEdgePresent = vertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
                    const targetVertex = immediateSuccessorVertex,  ///
                          targetVertexIndex = targetVertex.getIndex();

                    if (targetVertexIndex < sourceVertexIndex) {
                      return true;
                    }
                  });

            if (cyclicEdgePresent) {
              return true;
            }
          });

    return cyclesPresent;
  }

  isEdgePresent(edge) {
    let edgePresent = false;

    const sourceVertexName = edge.getSourceVertexName(),
          sourceVertex = this.getVertexByVertexName(sourceVertexName);

    if (sourceVertex !== null) {
      const targetVertexName = edge.getTargetVertexName(),
            targetVertex = this.getVertexByVertexName(targetVertexName);

      if (targetVertex !== null) {
        edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
      }
    }

    return edgePresent;
  }

  isVertexPresentByVertexName(vertexName) {
    const vertexNames = this.getVertexNames(),
          vertexNamesIncludesVertexName = vertexNames.includes(vertexName),
          vertexPresent = vertexNamesIncludesVertexName;  ///

    return vertexPresent;
  }

  getImmediateSuccessorVertexNamesByVertexName(vertexName) {
    const vertex = this.getVertexByVertexName(vertexName),
          immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();

    return immediateSuccessorVertexNames;
  }

  getImmediatePredecessorVertexNamesByVertexName(vertexName) {
    const vertex = this.getVertexByVertexName(vertexName),
          immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();

    return immediatePredecessorVertexNames;
  }

  isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
    const edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName),
          edgePresent = this.isEdgePresent(edge);

    return edgePresent;
  }

  addVertexByVertexName(vertexName) {
    const vertexPresent = this.isVertexPresentByVertexName(vertexName);

    if (!vertexPresent) {
      const vertexNames = this.getVertexNames(),
            vertexNamesLength = vertexNames.length,
            name = vertexName,  ///
            index = vertexNamesLength, ///
            vertex = Vertex.fromNameAndIndex(name, index);

      this.setVertexByVertexName(vertexName, vertex);
    }

    const vertex = this.getVertexByVertexName(vertexName);

    return vertex;
  }

  removeVertexByVertexName(vertexName) {
    const vertexPresent = this.isVertexPresentByVertexName(vertexName);

    if (!vertexPresent) {
      return;
    }

    const vertex = this.getVertexByVertexName(vertexName);

    vertex.forEachImmediateSuccessorVertex((immediateSuccessVertex) => {
      const immediatePredecessorVertex = vertex;  ///

      immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
    });

    vertex.forEachImmediatePredecessorVertex((immediatePredecessorVertex) => {
      const immediateSuccessVertex = vertex;  ///

      immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
    });

    this.deleteVertexByVertexName(vertexName);

    const vertexes = this.getVertexes(),
          deletedVertex = vertex, ///
          deletedVertexIndex = deletedVertex.getIndex();

    vertexes.forEach((vertex) => {
      const vertexIndex = vertex.getIndex();

      if (vertexIndex > deletedVertexIndex) {
        vertex.decrementIndex();
      }
    });

    this.filterCyclicEdges();
  }

  addVertexesByVertexNames(vertexNames) {
    vertexNames.forEach((vertexName) => {
      this.addVertexByVertexName(vertexName);
    });
  }

  removeVertexesByVertexNames(vertexNames) {
    vertexNames.forEach((vertexName) => {
      this.removeVertexByVertexName(vertexName);
    });
  }

  addEdge(edge) {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName();

    if (sourceVertexName === targetVertexName) {
      return;
    }

    const sourceVertex = this.addVertexByVertexName(sourceVertexName),
          targetVertex = this.addVertexByVertexName(targetVertexName),
          edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);

    if (edgePresent) {
      return;
    }

    const sourceVertexIndex = sourceVertex.getIndex(),
          targetVertexIndex = targetVertex.getIndex();

    if (sourceVertexIndex > targetVertexIndex) {
      this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
    }

    const immediatePredecessorVertex = sourceVertex, ///
          immediateSuccessorVertex = targetVertex; ///

    immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);

    immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
  }

  addEdges(edges) {
    edges.forEach((edge) => {
      this.addEdge(edge);
    });
  }

  removeEdge(edge, removeStrandedVertexes) {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName(),
          sourceVertex = this.addVertexByVertexName(sourceVertexName),
          targetVertex = this.addVertexByVertexName(targetVertexName),
          edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);

    if (!edgePresent) {
      return;
    }

    sourceVertex.removeImmediateSuccessorVertex(targetVertex);

    targetVertex.removeImmediatePredecessorVertex(sourceVertex);

    if (removeStrandedVertexes) {
      const sourceVertexStranded = sourceVertex.isStranded(),
            targetVertexStranded = targetVertex.isStranded();

      if (sourceVertexStranded) {
        this.removeVertexByVertexName(sourceVertexName);
      }

      if (targetVertexStranded) {
        this.removeVertexByVertexName(targetVertexName);
      }
    }

    this.filterCyclicEdges();
  }

  removeEdges(edges, removeStrandedVertexes = false) {
    edges.forEach((edge) => {
      this.removeEdge(edge, removeStrandedVertexes);
    });
  }

  removeAllEdgesAndVertexes() {
    this.vertexMap = {};
  }

  addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
    const edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

    this.addEdge(edge);
  }

  reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex);

    if (sourceVertexReachable) {
      return;
    }

    const forwardsVisitedVertexes = targetVertex.retrieveForwardsVisitedVertexes(),
          backwardsVisitedVertexes = sourceVertex.retrieveBackwardsVisitedVertexes();

    orderVertexes(backwardsVisitedVertexes);

    orderVertexes(forwardsVisitedVertexes);

    const visitedVertexes = [
            ...backwardsVisitedVertexes,
            ...forwardsVisitedVertexes
          ],
          visitedIndexes = indexesFromVertexes(visitedVertexes);

    orderIndexes(visitedIndexes);

    visitedVertexes.forEach((visitedVertex, index) => {
      const visitedIndex = visitedIndexes[index];

      index = visitedIndex; ///

      visitedVertex.setIndex(index);
    });
  }

  filterCyclicEdges() {
    const cyclicEdges = this.getCyclicEdges(),
          edges = cyclicEdges;  ///

    edges.forEach((edge) => {
      const sourceVertexName = edge.getSourceVertexName(),
            targetVertexName = edge.getTargetVertexName(),
            sourceVertex = this.getVertexByVertexName(sourceVertexName),
            targetVertex = this.getVertexByVertexName(targetVertexName),
            sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex);

      if (!sourceVertexReachable) {
        this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
      }
    });
  }

  setVertexByVertexName(vertexName, vertex) {
    this.vertexMap[vertexName] = vertex;
  }

  deleteVertexByVertexName(vertexName) {
    delete this.vertexMap[vertexName];
  }

  static fromNothing() {
    const vertexMap = {},
          directedGraph = new DirectedGraph(vertexMap);
    
    return directedGraph;    
  }
}
