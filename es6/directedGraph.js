'use strict';

const kahn = require('occam-kahn'),
      necessary = require('necessary'),
      pearcekelly = require('occam-pearce-kelly');

const Cycle = require('./cycle'),
      PartialCycle = require('./partialCycle'),
      vertexUtilities = require('./utilities/vertex');

const { Graph } = kahn,
      { arrayUtilities } = necessary,
      { DirectedAcyclicGraph } = pearcekelly,
      { first, filter, prune } = arrayUtilities,
      { forwardsDepthFirstSearch } = vertexUtilities;

const remove = prune;  ///

class DirectedGraph {
  constructor(cyclicEdges, directedAcyclicGraph) {
    this.cyclicEdges = cyclicEdges;
    this.directedAcyclicGraph = directedAcyclicGraph;
  }
  
  areCyclesPresentByVertexName(vertexName) {
    const firstCycle = this.getFirstCycleByVertexName(vertexName),
          cyclesPresent = (firstCycle !== null);

    return cyclesPresent;
  }

  getFirstCycleByVertexName(vertexName) {
    let firstCycle = null;
    
    const vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName),
          cyclicEdges = this.cyclicEdges.slice(), ///
          partialCycles = [],
          cycles = [];

    forwardsDepthFirstSearch(vertex, function(visitedVertex, getPredecessorVertices) {
      const visitedVertexName = visitedVertex.getName(),
            sourceVertexName = visitedVertexName; ///

      filter(cyclicEdges, function(cyclicEdge) {
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

      forwardsDepthFirstSearch(targetVertex, function(visitedVertex, getPredecessorVertices) {
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

  addVertexByVertexName(vertexName) { this.directedAcyclicGraph.addVertexByVertexName(vertexName); }

  removeVertexByVertexName(vertexName) {
    this.directedAcyclicGraph.removeVertexByVertexName(vertexName);

    this.filterCyclicEdges();
  }

  addEdge(edge) {
    const success = this.directedAcyclicGraph.addEdge(edge);
    
    if (!success) {
      const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges);

      if (!cyclicEdgesIncludesEdge) {
        const cyclicEdge = edge;

        this.cyclicEdges.push(cyclicEdge);
      }
    }
  }
  
  addEdges(edges) {
    edges.forEach((edge) => {
      this.addEdge(edge);
    });
  }
  
  removeEdge(edge, removeStrandedVertices = false) {
    const cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges),
          edgeCyclic = cyclicEdgesIncludesEdge, ///
          edgePresent = this.directedAcyclicGraph.isEdgePresent(edge);

    if (false) {
      ///
    } else if (edgeCyclic) {
      const cyclicEdge = edge;  ///

      removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
    } else if (edgePresent) {
      this.directedAcyclicGraph.removeEdge(edge);
    }

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

    this.filterCyclicEdges();
  }

  removeEdges(edges, removeStrandedVertices = false) {
    edges.forEach((edge) => {
      this.removeEdge(edge, removeStrandedVertices);
    });
  }

  removeAllEdgesAndVertices() {
    this.directedAcyclicGraph = DirectedAcyclicGraph.fromNothing();

    this.cyclicEdges = [];
  }

  filterCyclicEdges() {
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

  static fromVertexNamesAndEdges(vertexNames, edges) {
    let directedGraph;

    const graph = Graph.fromVertexNamesAndEdges(vertexNames, edges),
          cyclesPresent = graph.areCyclesPresent();

    if (cyclesPresent) {
      const cyclicEdges = [],
            directedAcyclicGraph = DirectedAcyclicGraph.fromVertexNames(vertexNames);

      directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);

      edges.forEach(function(edge) {
        directedGraph.addEdge(edge);
      });
    } else {
      const topologicallyOrderedVertices = graph.getTopologicallyOrderedVertices(),
            cyclicEdges = [],
            directedAcyclicGraph = DirectedAcyclicGraph.fromTopologicallyOrderedVertices(topologicallyOrderedVertices);

      directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
    }

    return directedGraph;
  }
}

module.exports = DirectedGraph;

function checkEdgesIncludesEdge(edge, edges) {
  const edge1 = edge, ///
        edgesIncludesEdge = edges.some(function(edge) {
          const edge2 = edge, ///
                matches = edge1.match(edge2);

          if (matches) {
            return true;
          }
        });

  return edgesIncludesEdge;
}

function removeEdgeFromEdges(edge, edges) {
  const edge1 = edge; ///

  remove(edges, function(edge) {
    const edge2 = edge, ///
          matches = edge1.match(edge2);

    if (!matches) { ///
      return true;
    }
  });
}
