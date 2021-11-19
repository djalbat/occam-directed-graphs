"use strict";

import { Graph } from "occam-kahn";
import { arrayUtilities } from "necessary";
import { DirectedAcyclicGraph } from "occam-pearce-kelly";

import Edge from "./edge";
import Cycle from "./cycle";
import PartialCycle from "./partialCycle";

import { vertexNamesFromVertexLiterals, forwardsDepthFirstSearch } from "./utilities/vertex";
import { edgesFromVertexLiterals, checkEdgesIncludesEdge, removeEdgeFromEdges, edgesBySourceVertexName, edgesByTargetVertexName } from "./utilities/edge";

const { first, filter } = arrayUtilities;

export default class DirectedGraph {
  constructor(cyclicEdges, directedAcyclicGraph) {
    this.cyclicEdges = cyclicEdges;

    this.directedAcyclicGraph = directedAcyclicGraph;
  }

  getCyclicEdges() {
    return this.cyclicEdges;
  }

  getDirectedAcyclicGraph() {
    return this.directedAcyclicGraph;
  }

  getImmediatePredecessorVertexNamesByVertexName(vertexName, includeCyclicEdges = false) {
    const immediatePredecessorVertexNames = this.directedAcyclicGraph.getImmediatePredecessorVertexNamesByVertexName(vertexName);

    if (includeCyclicEdges) {
      this.cyclicEdges.forEach((cyclicEdge) => {
        const cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();

        if (cyclicEdgeTargetVertexName === vertexName) {
          const cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName(),
                immediatePredecessorVertexName = cyclicEdgeSourceVertexName;  ///

          immediatePredecessorVertexNames.push(immediatePredecessorVertexName);
        }
      });
    }

    return immediatePredecessorVertexNames;
  }

  getImmediateSuccessorVertexNamesByVertexName(vertexName, includeCyclicEdges = false) {
    const immediateSuccessorVertexNames = this.directedAcyclicGraph.getImmediateSuccessorVertexNamesByVertexName(vertexName);

    if (includeCyclicEdges) {
      this.cyclicEdges.forEach((cyclicEdge) => {
        const cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName();

        if (cyclicEdgeSourceVertexName === vertexName) {
          const cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName(),
                immediateSuccessorVertexName = cyclicEdgeTargetVertexName;  ///

          immediateSuccessorVertexNames.push(immediateSuccessorVertexName);
        }
      });
    }

    return immediateSuccessorVertexNames;
  }

  getPredecessorVertexNamesByVertexName(vertexName) { return this.directedAcyclicGraph.getPredecessorVertexNamesByVertexName(vertexName); }

  getSuccessorVertexNamesByVertexName(vertexName) { return this.directedAcyclicGraph.getSuccessorVertexNamesByVertexName(vertexName); }

  areCyclesPresentByVertexName(vertexName) {
    let cyclesPresent = false;

    const vertexPresent = this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);

    if (vertexPresent) {
      const firstCycle = this.getFirstCycleByVertexName(vertexName);

      cyclesPresent = (firstCycle !== null);
    }

    return cyclesPresent;
  }

  isVertexPresentByVertexName(vertexName) { return this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName); }

  getFirstCycleByVertexName(vertexName) {
    let firstCycle = null;
    
    const vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName),
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
            targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);

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

  getFirstCycle() {
    const firstCyclicEdge = first(this.cyclicEdges),
          cyclicEdge = firstCyclicEdge, ///
          sourceVertexName = cyclicEdge.getSourceVertexName(),
          vertexName = sourceVertexName,  ///
          firstCycle = this.getFirstCycleByVertexName(vertexName);

    return firstCycle;
  }

  getVertexNames() { return this.directedAcyclicGraph.getVertexNames(); }

  getOrderedVertexNames() { return this.directedAcyclicGraph.getOrderedVertexNames(); }

  areCyclesPresent() {
    const cyclicEdgesLength = this.cyclicEdges.length,
          cyclesPresent = (cyclicEdgesLength > 0);

    return cyclesPresent;
  }

  addVertexByVertexName(vertexName) { this.directedAcyclicGraph.addVertexByVertexName(vertexName); }

  addVerticesByVertexNames(vertexNames) {
    vertexNames.forEach((vertexName) => this.addVertexByVertexName(vertexName));
  }

  removeVertexByVertexName(vertexName) {
    this.directedAcyclicGraph.removeVertexByVertexName(vertexName);

    this.filterCyclicEdges();
  }

  removeVerticesByVertexNames(vertexNames) {
    vertexNames.forEach((vertexName) => this.removeVertexByVertexName(vertexName));
  }

  addEdge(edge) {
    const success = this.directedAcyclicGraph.addEdge(edge);
    
    if (!success) {
      const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges);

      if (!cyclicEdgesIncludesEdge) {
        const cyclicEdge = edge;  ///

        this.cyclicEdges.push(cyclicEdge);
      }
    }
  }
  
  addEdges(edges) {
    edges.forEach((edge) => this.addEdge(edge));
  }

  removeEdge(edge, removeStrandedVertices = false) {
    const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges),
          edgePresent = this.directedAcyclicGraph.isEdgePresent(edge),
          edgeCyclic = cyclicEdgesIncludesEdge; ///

    if (false) {
      ///
    } else if (edgeCyclic) {
      const cyclicEdge = edge;  ///

      removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
    } else if (edgePresent) {
      this.directedAcyclicGraph.removeEdge(edge);

      if (removeStrandedVertices) {
        const sourceVertexName = edge.getSourceVertexName(),
              targetVertexName = edge.getTargetVertexName(),
              sourceVertex = this.directedAcyclicGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName),
              sourceVertexStranded = sourceVertex.isStranded(),
              targetVertexStranded = targetVertex.isStranded();

        if (sourceVertexStranded) {
          this.directedAcyclicGraph.removeVertexByVertexName(sourceVertexName);
        }

        if (targetVertexStranded) {
          this.directedAcyclicGraph.removeVertexByVertexName(targetVertexName);
        }
      }
    }

    this.filterCyclicEdges();
  }

  removeEdges(edges, removeStrandedVertices = false) {
    edges.forEach((edge) => this.removeEdge(edge, removeStrandedVertices));
  }

  addEdgeByVertexNames(sourceVertexName, targetVertexName) {
    const edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

    this.addEdge(edge);
  }

  removeEdgeByVertexNames(sourceVertexName, targetVertexName, removeStrandedVertices = false) {
    const edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

    this.removeEdge(edge, removeStrandedVertices);
  }

  removeEdgesByTargetVertexName(targetVertexName, removeStrandedVertices = false) {
    const cyclicEdges = edgesByTargetVertexName(targetVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertices);

    this.removeEdges(edges, removeStrandedVertices);
  }

  removeEdgesBySourceVertexName(sourceVertexName, removeStrandedVertices = false) {
    const cyclicEdges = edgesBySourceVertexName(sourceVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);

    this.removeEdges(cyclicEdges, removeStrandedVertices);

    this.removeEdges(edges, removeStrandedVertices);
  }

  removeAllEdgesAndVertices() {
    this.directedAcyclicGraph = DirectedAcyclicGraph.fromNothing();

    this.cyclicEdges = [];
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
            success = this.directedAcyclicGraph.addEdge(edge);

      if (!success) {
        return true;
      }
    });
  }

  static fromNothing() {
    const cyclicEdges = [],
          directedAcyclicGraph = DirectedAcyclicGraph.fromNothing(),
          directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
    
    return directedGraph;    
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertexNames = vertexNamesFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiterals(vertexLiterals),
          directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);

    return directedGraph;
  }

  static fromVertexNamesAndEdges(vertexNames, edges) {
    let directedGraph;

    const graph = Graph.fromVertexNamesAndEdges(vertexNames, edges),
          cyclesPresent = graph.areCyclesPresent();

    if (cyclesPresent) {
      const cyclicEdges = [],
            directedAcyclicGraph = DirectedAcyclicGraph.fromVertexNames(vertexNames);

      directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);

      edges.forEach((edge) => directedGraph.addEdge(edge));
    } else {
      const orderedVertices = graph.getOrderedVertices(),
            cyclicEdges = [],
            directedAcyclicGraph = DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);

      directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
    }

    return directedGraph;
  }
}
