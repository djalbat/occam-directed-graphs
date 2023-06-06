"use strict";

import { arrayUtilities } from "necessary";

import Edge from "./edge";
import Cycle from "./cycle";
import Vertex from "./vertex";

import { orderVertexes, vertexNamesFromVertexes } from "./utilities/vertex";
import { removeEdgeFromEdges, checkEdgesIncludesEdge, filterEdgesBySourceVertexName, filterEdgesByTargetVertexName } from "./utilities/edge";

const { last, first, filter } = arrayUtilities;

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
      const immediateSuccessorVertexNames = sourceVertex.getImmediateSuccessorVertexNames(),
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
      const immediatePredecessorVertexNames = targetVertex.getImmediatePredecessorVertexNames(),
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

  addEdge(edge) {
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
    const cyclicEdges = filterEdgesBySourceVertexName(sourceVertexName, this.cyclicEdges),
          edges = this.getEdgesBySourceVertexName(sourceVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertexes);

    this.removeEdges(edges, removeStrandedVertexes);
  }

  removeEdgesByTargetVertexName(targetVertexName, removeStrandedVertexes = false) {
    const cyclicEdges = filterEdgesByTargetVertexName(targetVertexName, this.cyclicEdges),
          edges = this.getEdgesByTargetVertexName(targetVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertexes);

    this.removeEdges(edges, removeStrandedVertexes);
  }

  addNonCyclicEdge(nonCyclicEdge) {
    let success = false;

    const sourceVertexName = nonCyclicEdge.getSourceVertexName(),
          targetVertexName = nonCyclicEdge.getTargetVertexName();

    if (sourceVertexName !== targetVertexName) {
      const sourceVertex = this.addVertexByVertexName(sourceVertexName),
            targetVertex = this.addVertexByVertexName(targetVertexName),
            edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);

      if (edgePresent) {
        success = true;
      } else {
        const sourceVertexIndex = sourceVertex.getIndex(),
              targetVertexIndex = targetVertex.getIndex(),
              invalidatingEdge = (sourceVertexIndex > targetVertexIndex);

        success = invalidatingEdge ?
                    addInvalidatingEdgeByVertexes(sourceVertex, targetVertex) :
                      true;

        if (success) {
          const immediatePredecessorVertex = sourceVertex, ///
                immediateSuccessorVertex = targetVertex; ///

          immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);

          immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
        }
      }
    }

    return success;
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

function addInvalidatingEdgeByVertexes(sourceVertex, targetVertex) {
  let success = false;

  const forwardsAffectedVertexes = targetVertex.retrieveForwardsAffectedVertexes(sourceVertex),
        lastForwardsAffectedVertex = last(forwardsAffectedVertexes),
        resultsInCycle = (lastForwardsAffectedVertex === sourceVertex);

  if (!resultsInCycle) {
    const backwardsAffectedVertexes = sourceVertex.retrieveBackwardsAffectedVertexes();

    orderVertexes(backwardsAffectedVertexes);

    orderVertexes(forwardsAffectedVertexes);

    const affectedVertexes = [].concat(backwardsAffectedVertexes).concat(forwardsAffectedVertexes),
          affectedVertexIndices = affectedVertexes.map((affectedVertex) => {
            const affectedVertexIndex = affectedVertex.getIndex();

            return affectedVertexIndex;
          });

    affectedVertexIndices.sort((indexA, indexB) => {
      if (false) {
        ///
      } else if (indexA < indexB) {
        return -1;
      } else if (indexA > indexB) {
        return +1;
      } else {
        return 0;
      }
    });

    affectedVertexes.forEach((affectedVertex, index) => {
      const affectedVertexIndex = affectedVertexIndices[index];

      affectedVertex.setIndex(affectedVertexIndex);
    });

    success = true;
  }

  return success;
}
