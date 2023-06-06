"use strict";

import { arrayUtilities } from "necessary";

import Edge from "./edge";
import Cycle from "./cycle";
import Vertex from "./vertex";

import { orderIndexes } from "./utilities/index";
import { orderVertexes, indexesFromVertexes, vertexNamesFromVertexes } from "./utilities/vertex";
import { removeEdgeFromEdges, checkEdgesIncludesEdge, filterEdgesBySourceVertexName, filterEdgesByTargetVertexName } from "./utilities/edge";

const { first, filter } = arrayUtilities;

export default class DirectedGraph {
  constructor(vertexMap, cyclicEdges) {
    this.vertexMap = vertexMap;
    this.cyclicEdges = cyclicEdges;
  }

  getVertexNap() {
    return this.vertexMap;
  }

  getCyclicEdges() {
    return this.cyclicEdges;
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
      const firstCyclicEdge = first(this.cyclicEdges),
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

  areCyclesPresent() {
    const cyclicEdgesLength = this.cyclicEdges.length,
          cyclesPresent = (cyclicEdgesLength > 0);

    return cyclesPresent;
  }

  isEdgePresent(edge) {
    let edgePresent = false;

    if (!edgePresent) {
      const cyclicEdge = edge,  ///
            cyclicEdgePresent = this.isCyclicEdgePresent(cyclicEdge);

      edgePresent = cyclicEdgePresent;  ///
    }

    if (!edgePresent) {
      const nonCyclicEdge = edge, ///
            nonCyclicEdgePresent = this.isNonCyclicEdgePresent(nonCyclicEdge);

      edgePresent = nonCyclicEdgePresent; ///
    }

    return edgePresent;
  }

  isCyclicEdgePresent(cyclicEdge) {
    const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(this.cyclicEdges, cyclicEdge),
          cyclicEdgePresent = cyclicEdgesIncludesEdge;  ///

    return cyclicEdgePresent;
  }

  isNonCyclicEdgePresent(edge) {
    let nonCyclicEdgePresent = false;

    const sourceVertexName = edge.getSourceVertexName(),
          sourceVertex = this.getVertexByVertexName(sourceVertexName);

    if (sourceVertex !== null) {
      const targetVertexName = edge.getTargetVertexName(),
            targetVertex = this.getVertexByVertexName(targetVertexName);

      if (targetVertex !== null) {
        const edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);

        nonCyclicEdgePresent = edgePresent; ///
      }
    }

    return nonCyclicEdgePresent;
  }

  isVertexPresentByVertexName(vertexName) {
    const vertexNames = this.getVertexNames(),
          vertexNamesIncludesVertexName = vertexNames.includes(vertexName),
          vertexPresent = vertexNamesIncludesVertexName;  ///

    return vertexPresent;
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

  addEdge(edge) {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName();

    if (sourceVertexName === targetVertexName) {
      return;
    }

    const nonCyclicEdge = edge, ///
          success = this.addNonCyclicEdge(nonCyclicEdge);

    if (!success) {
      const cyclicEdge = edge;  ///

      this.addCyclicEdge(cyclicEdge);
    }

    return success;
  }

  addEdges(edges) {
    edges.forEach((edge) => {
      this.addEdge(edge);
    });
  }

  addCyclicEdge(cyclicEdge) {
    const cyclicEdgesIncludesCyclicEdge = checkEdgesIncludesEdge(this.cyclicEdges, cyclicEdge);

    if (!cyclicEdgesIncludesCyclicEdge) {
      this.cyclicEdges.push(cyclicEdge);
    }
  }

  addNonCyclicEdge(nonCyclicEdge) {
    let success = true;

    const sourceVertexName = nonCyclicEdge.getSourceVertexName(),
          targetVertexName = nonCyclicEdge.getTargetVertexName(),
          sourceVertex = this.addVertexByVertexName(sourceVertexName),
          targetVertex = this.addVertexByVertexName(targetVertexName),
          edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);

    if (!edgePresent) {
      const sourceVertexIndex = sourceVertex.getIndex(),
            targetVertexIndex = targetVertex.getIndex();

      success = (sourceVertexIndex < targetVertexIndex) ?
                  true :
                    this.addNonCyclicEdgeByVertexes(sourceVertex, targetVertex);

      if (success) {
        const immediatePredecessorVertex = sourceVertex, ///
              immediateSuccessorVertex = targetVertex; ///

        immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);

        immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
      }
    }

    return success;
  }

  addNonCyclicEdgeByVertexes(sourceVertex, targetVertex) {
    let success = false;

    const sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex);

    if (!sourceVertexReachable) {
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

      success = true;
    }

    return success;
  }

  removeEdge(edge, removeStrandedVertexes = false) {
    const cyclicEdge = edge,  ///
          cyclicEdgePresent = this.isCyclicEdgePresent(cyclicEdge);

    if (cyclicEdgePresent) {
      this.removeCyclicEdge(cyclicEdge);

      return;
    }

    const nonCyclicEdge = edge, ///
          nonCyclicEdgePresent = this.isNonCyclicEdgePresent(nonCyclicEdge);

    if (nonCyclicEdgePresent) {
      this.removeNonCyclicEdge(nonCyclicEdge, removeStrandedVertexes);
    }
  }

  removeEdges(edges, removeStrandedVertexes = false) {
    edges.forEach((edge) => {
      this.removeEdge(edge, removeStrandedVertexes);
    });
  }

  removeCyclicEdge(cyclicEdge) {
    removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
  }

  removeNonCyclicEdge(nonCyclicEdge, removeStrandedVertexes) {
    const sourceVertexName = nonCyclicEdge.getSourceVertexName(),
          targetVertexName = nonCyclicEdge.getTargetVertexName(),
          sourceVertex = this.getVertexByVertexName(sourceVertexName),
          targetVertex = this.getVertexByVertexName(targetVertexName);

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

  removeAllEdgesAndVertexes() {
    this.vertexMap = {};
    this.cyclicEdges = [];
  }

  removeEdgesBySourceVertexName(sourceVertexName, removeStrandedVertexes = false) {
    const cyclicEdges = filterEdgesBySourceVertexName(this.cyclicEdges, sourceVertexName),
          edges = this.getEdgesBySourceVertexName(sourceVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertexes);

    this.removeEdges(edges, removeStrandedVertexes);
  }

  removeEdgesByTargetVertexName(targetVertexName, removeStrandedVertexes = false) {
    const cyclicEdges = filterEdgesByTargetVertexName(this.cyclicEdges, targetVertexName),
          edges = this.getEdgesByTargetVertexName(targetVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertexes);

    this.removeEdges(edges, removeStrandedVertexes);
  }

  filterCyclicEdges() {
    filter(this.cyclicEdges, (cyclicEdge) => {
      const sourceVertexName = cyclicEdge.getSourceVertexName(),
            targetVertexName = cyclicEdge.getTargetVertexName(),
            sourceVertexPresent = this.isVertexPresentByVertexName(sourceVertexName),
            targetVertexPresent = this.isVertexPresentByVertexName(targetVertexName);

      if (sourceVertexPresent && targetVertexPresent) {
        return true;
      }
    });

    filter(this.cyclicEdges, (cyclicEdge) => {
      const edge = cyclicEdge,  ///
            success = this.addEdge(edge);

      if (!success) {
        return true;
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
          cyclicEdges = [],
          directedGraph = new DirectedGraph(vertexMap, cyclicEdges);
    
    return directedGraph;    
  }
}
