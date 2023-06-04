"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class PartialCycle {
  constructor(predecessorVertexes, cyclicEdge) {
    this.predecessorVertexes = predecessorVertexes;
    this.cyclicEdge = cyclicEdge;
  }
  
  getPredecessorVertexes() {
    return this.predecessorVertexes;
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
    const predecessorVertexNames = this.predecessorVertexes.map((predecessorVertex) => {
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
  
  static fromCyclicEdgeAndPredecessorVertexes(cyclicEdge, predecessorVertexes) {
    predecessorVertexes = predecessorVertexes.slice();  ///
    
    const predecessorVertexesLength = predecessorVertexes.length;

    if (predecessorVertexesLength > 0) {
      const firstPredecessorVertex = first(predecessorVertexes),
            firstPredecessorVertexName = firstPredecessorVertex.getName(),
            cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();

      if (firstPredecessorVertexName === cyclicEdgeTargetVertexName) {
        predecessorVertexes.shift();
      }
    }

    const partialCycle = new PartialCycle(predecessorVertexes, cyclicEdge);
    
    return partialCycle;
  }
}
