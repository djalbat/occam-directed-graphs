"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class PartialCycle {
  constructor(predecessorVertices, cyclicEdge) {
    this.predecessorVertices = predecessorVertices;
    this.cyclicEdge = cyclicEdge;
  }
  
  getPredecessorVertices() {
    return this.predecessorVertices;
  }

  getCyclicEdge() {
    return this.cyclicEdge;
  }

  getTargetVertexName() {
    const cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName(),
          targetVertexName = cyclicEdgeTargetVertexName;  ///
    
    return targetVertexName;
  }
  
  getPredecessorVertexNames() {
    const predecessorVertexNames = this.predecessorVertices.map((predecessorVertex) => {
      const predecessorVertexName = predecessorVertex.getName();

      return predecessorVertexName;
    });
    
    return predecessorVertexNames;
  }
  
  getCyclicEdgeSourceVertexName() {
    const cyclicEdgeSourceVertexName = this.cyclicEdge.getSourceVertexName();
    
    return cyclicEdgeSourceVertexName;
  }
  
  getCyclicEdgeTargetVertexName() {
    const cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName();
    
    return cyclicEdgeTargetVertexName;
  }
  
  static fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices) {
    predecessorVertices = predecessorVertices.slice();  ///
    
    const predecessorVerticesLength = predecessorVertices.length;

    if (predecessorVerticesLength > 0) {
      const firstPredecessorVertex = first(predecessorVertices),
            firstPredecessorVertexName = firstPredecessorVertex.getName(),
            cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();

      if (firstPredecessorVertexName === cyclicEdgeTargetVertexName) {
        predecessorVertices.shift();
      }
    }

    const partialCycle = new PartialCycle(predecessorVertices, cyclicEdge);
    
    return partialCycle;
  }
}
