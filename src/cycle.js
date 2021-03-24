"use strict";

import { arrayUtilities } from "necessary";

import { vertexNamesFromVertices } from "./utilities/vertex";

const { first } = arrayUtilities;

export default class Cycle {
  constructor(vertexNames) {
    this.vertexNames = vertexNames;
  }

  getVertexNames() {
    return this.vertexNames;
  }

  static fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices) {
    successorVertices = successorVertices.slice();  ///
    
    const successorVerticesLength = successorVertices.length;
    
    if (successorVerticesLength > 0) {
      const firstSuccessorVertex = first(successorVertices),
            firstSuccessorVertexName = firstSuccessorVertex.getName(),
            cyclicEdgeTargetVertexName = partialCycle.getTargetVertexName();
      
      if (firstSuccessorVertexName === cyclicEdgeTargetVertexName) {
        successorVertices.shift();
      }
    }

    const cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(),
          cyclicEdgeTargetVertexName = partialCycle.getCyclicEdgeTargetVertexName(),
          predecessorVertexNames = partialCycle.getPredecessorVertexNames(),
          successorVertexNames = vertexNamesFromVertices(successorVertices),
          vertexNames = (vertexName === cyclicEdgeTargetVertexName) ?
                          [].concat(cyclicEdgeTargetVertexName).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) :
                            [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName).concat(successorVertexNames),
          cycle = new Cycle(vertexNames);
    
    return cycle;
  }
}
