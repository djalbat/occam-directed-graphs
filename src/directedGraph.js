"use strict";

import { arrayUtilities } from "necessary";

import Edge from "./edge";
import Cycle from "./cycle";
import Vertex from "./vertex";
import PartialCycle from "./partialCycle";

import { forwardsDepthFirstSearch, orderVertices, vertexNamesFromVertices } from "./utilities/vertex";
import { removeEdgeFromEdges, checkEdgesIncludesEdge, edgesBySourceVertexName, edgesByTargetVertexName } from "./utilities/edge";

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

  getVertices() {
    const vertexMapValues = Object.values(this.vertexMap),
          vertices = vertexMapValues; ///

    return vertices;
  }

  getVertexNames() {
    const vertexMapKeys = Object.keys(this.vertexMap),
          vertexNames = vertexMapKeys;  ///

    return vertexNames;
  }

  getOrderedVertexNames() {
    const vertices = this.getVertices();

    orderVertices(vertices);

    const orderedVertices = vertices, ///
          orderedVertexNames = vertexNamesFromVertices(orderedVertices);

    return orderedVertexNames;
  }

  getVertexByVertexName(vertexName) {
    const vertexPresent = this.isVertexPresentByVertexName(vertexName),
          vertex = vertexPresent ?
                     this.vertexMap[vertexName] :
                       null;

    return vertex;
  }

  getFirstCycleByVertexName(vertexName) {
    let firstCycle = null;

    const vertex = this.getVertexByVertexName(vertexName),
          cyclicEdges = this.cyclicEdges.slice(), ///
          partialCycles = [],
          cycles = [];

    forwardsDepthFirstSearch(vertex, (visitedVertex, getPredecessorVertices) => {
      const visitedVertexName = visitedVertex.getName(),
            sourceVertexName = visitedVertexName; ///

      filter(cyclicEdges, (cyclicEdge) => {
        const matches = cyclicEdge.matchSourceVertexName(sourceVertexName);

        if (matches) {
          const predecessorVertices = getPredecessorVertices(),
                partialCycle =  PartialCycle.fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices);

          partialCycles.push(partialCycle);
        } else {
          return true;
        }
      });

      const cyclicEdgesLength = cyclicEdges.length,
            terminate = (cyclicEdgesLength === 0);

      return terminate;
    });

    partialCycles.some((partialCycle) => {
      const targetVertexName = partialCycle.getTargetVertexName(),
            targetVertex = this.getVertexByVertexName(targetVertexName);

      forwardsDepthFirstSearch(targetVertex, (visitedVertex, getPredecessorVertices) => {
        const visitedVertexName = visitedVertex.getName();

        if (visitedVertexName === vertexName) {
          const predecessorVertices = getPredecessorVertices(),
                successorVertices = predecessorVertices,  ///
                cycle = Cycle.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);

          cycles.push(cycle);
        }

        const cyclesLength = cycles.length,
              terminate = (cyclesLength > 0);

        return terminate;
      });
    });

    const cyclesLength = cycles.length;

    if (cyclesLength > 0) {
      firstCycle = first(cycles);
    }

    return firstCycle;
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
    const firstCyclicEdge = first(this.cyclicEdges),
          cyclicEdge = firstCyclicEdge, ///
          sourceVertexName = cyclicEdge.getSourceVertexName(),
          vertexName = sourceVertexName,  ///
          firstCycle = this.getFirstCycleByVertexName(vertexName);

    return firstCycle;
  }

  isEdgePresent(edge) {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName(),
          edgePresent = this.isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

    return edgePresent;
  }

  areCyclesPresent() {
    const cyclicEdgesLength = this.cyclicEdges.length,
          cyclesPresent = (cyclicEdgesLength > 0);

    return cyclesPresent;
  }

  isVertexPresentByVertexName(vertexName) {
    const vertexNames = this.getVertexNames(),
          vertexNamesIncludesVertexName = vertexNames.includes(vertexName),
          vertexPresent = vertexNamesIncludesVertexName;  ///

    return vertexPresent;
  }

  areCyclesPresentByVertexName(vertexName) {
    let cyclesPresent = false;

    const vertexPresent = this.isVertexPresentByVertexName(vertexName);

    if (vertexPresent) {
      const firstCycle = this.getFirstCycleByVertexName(vertexName);

      cyclesPresent = (firstCycle !== null);
    }

    return cyclesPresent;
  }

  getSuccessorVertexNamesByVertexName(vertexName) {
    const vertex = this.getVertexByVertexName(vertexName),
          successorVertexNames = vertex.getSuccessorVertexNames();

    return successorVertexNames;
  }

  getPredecessorVertexNamesByVertexName(vertexName) {
    const vertex = this.getVertexByVertexName(vertexName),
          predecessorVertexNames = vertex.getPredecessorVertexNames();

    return predecessorVertexNames;
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

  addEdge(edge) {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName(),
          success = this.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

    if (!success) {
      const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges);

      if (!cyclicEdgesIncludesEdge) {
        const cyclicEdge = edge;  ///

        this.cyclicEdges.push(cyclicEdge);
      }
    }

    return success;
  }

  addEdges(edges) {
    edges.forEach((edge) => {
      this.addEdge(edge);
    });
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
    let removedEdges = null;

    const vertexPresent = this.isVertexPresentByVertexName(vertexName);

    if (vertexPresent) {
      removedEdges = [];

      const vertex = this.getVertexByVertexName(vertexName);

      vertex.forEachImmediateSuccessorVertex((immediateSuccessVertex) => {
        const immediatePredecessorVertex = vertex,  ///
              immediatePredecessorVertexName = immediatePredecessorVertex.getName(),
              immediateSuccessVertexName = immediateSuccessVertex.getName(),
              removedEdgeSourceVertexName = immediatePredecessorVertexName, ///
              removedEdgeTargetVertexName = immediateSuccessVertexName, ///
              removedEdge = new Edge(removedEdgeSourceVertexName, removedEdgeTargetVertexName);

        removedEdges.push(removedEdge);

        immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
      });

      vertex.forEachImmediatePredecessorVertex((immediatePredecessorVertex) => {
        const immediateSuccessVertex = vertex,  ///
              immediatePredecessorVertexName = immediatePredecessorVertex.getName(),
              immediateSuccessVertexName = immediateSuccessVertex.getName(),  ///
              removedEdgeSourceVertexName = immediatePredecessorVertexName, ///
              removedEdgeTargetVertexName = immediateSuccessVertexName, ///
              removedEdge = new Edge(removedEdgeSourceVertexName, removedEdgeTargetVertexName);

        removedEdges.push(removedEdge);

        immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
      });

      this.deleteVertexByVertexName(vertexName);

      const deletedVertex = vertex, ///
            deletedVertexIndex = deletedVertex.getIndex(),
            vertices = this.getVertices(),
            affectedVertices = vertices.reduce((affectedVertices, vertex) => {
              const vertexIndex = vertex.getIndex(),
                    vertexAffected = (vertexIndex > deletedVertexIndex);

              if (vertexAffected) {
                const affectedVertex = vertex;  ///

                affectedVertices.push(affectedVertex);
              }

              return affectedVertices;
            }, []);

      affectedVertices.forEach((affectedVertex) => {
        affectedVertex.decrementIndex();
      });
    }

    this.filterCyclicEdges();

    return removedEdges;
  }

  removeEdge(edge, removeStrandedVertices = false) {
    const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges);

    if (cyclicEdgesIncludesEdge) {
      const cyclicEdge = edge;  ///

      removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);

      return;
    }

    const edgePresent = this.isEdgePresent(edge);

    if (edgePresent) {
      const sourceVertexName = edge.getSourceVertexName(),
            targetVertexName = edge.getTargetVertexName();

      this.removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      if (removeStrandedVertices) {
        const sourceVertex = this.getVertexByVertexName(sourceVertexName),
              targetVertex = this.getVertexByVertexName(targetVertexName),
              sourceVertexStranded = sourceVertex.isStranded(),
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
  }

  removeEdges(edges, removeStrandedVertices = false) {
    edges.forEach((edge) => {
      this.removeEdge(edge, removeStrandedVertices);
    });
  }

  removeAllEdgesAndVertices() {
    this.vertexMap = {};
    this.cyclicEdges = [];
  }

  removeEdgesBySourceVertexName(sourceVertexName, removeStrandedVertices = false) {
    const cyclicEdges = edgesBySourceVertexName(sourceVertexName, this.cyclicEdges),
          edges = this.getEdgesBySourceVertexName(sourceVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertices);

    this.removeEdges(edges, removeStrandedVertices);
  }

  removeEdgesByTargetVertexName(targetVertexName, removeStrandedVertices = false) {
    const cyclicEdges = edgesByTargetVertexName(targetVertexName, this.cyclicEdges),
          edges = this.getEdgesByTargetVertexName(targetVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertices);

    this.removeEdges(edges, removeStrandedVertices);
  }

  addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
    let success = false;

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
                    addInvalidatingEdgeByVertices(sourceVertex, targetVertex) :
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

  removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
    const sourceVertex = this.getVertexByVertexName(sourceVertexName),
          targetVertex = this.getVertexByVertexName(targetVertexName);

    sourceVertex.removeImmediateSuccessorVertex(targetVertex);

    targetVertex.removeImmediatePredecessorVertex(sourceVertex);
  }

  isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
    let edgePresent = false;

    const sourceVertex = this.getVertexByVertexName(sourceVertexName),
          targetVertex = this.getVertexByVertexName(targetVertexName),
          sourceVertexAndTargetVertexPresent = (sourceVertex !== null) && (targetVertex !== null);

    if (sourceVertexAndTargetVertexPresent) {
      edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
    }

    return edgePresent;
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

function addInvalidatingEdgeByVertices(sourceVertex, targetVertex) {
  let success = false;

  const forwardsAffectedVertices = targetVertex.retrieveForwardsAffectedVertices(sourceVertex),
        lastForwardsAffectedVertex = last(forwardsAffectedVertices),
        resultsInCycle = (lastForwardsAffectedVertex === sourceVertex);

  if (!resultsInCycle) {
    const backwardsAffectedVertices = sourceVertex.retrieveBackwardsAffectedVertices();

    orderVertices(backwardsAffectedVertices);

    orderVertices(forwardsAffectedVertices);

    const affectedVertices = [].concat(backwardsAffectedVertices).concat(forwardsAffectedVertices),
          affectedVertexIndices = affectedVertices.map((affectedVertex) => {
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

    affectedVertices.forEach((affectedVertex, index) => {
      const affectedVertexIndex = affectedVertexIndices[index];

      affectedVertex.setIndex(affectedVertexIndex);
    });

    success = true;
  }

  return success;
}
