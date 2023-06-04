"use strict";

import { arrayUtilities } from "necessary";

import { vertexNamesFromVertexes } from "./utilities/vertex";

const { first } = arrayUtilities;

export default class Cycle {
  constructor(vertexNames) {
    this.vertexNames = vertexNames;
  }

  getVertexNames() {
    return this.vertexNames;
  }

  static fromVertexNamePartialCycleAndSuccessorVertexes(vertexName, partialCycle, successorVertexes) {
    successorVertexes = successorVertexes.slice();  ///
    
    const successorVertexesLength = successorVertexes.length;
    
    if (successorVertexesLength > 0) {
      const firstSuccessorVertex = first(successorVertexes),
            firstSuccessorVertexName = firstSuccessorVertex.getName(),
            cyclicEdgeTargetVertexName = partialCycle.getTargetVertexName();
      
      if (firstSuccessorVertexName === cyclicEdgeTargetVertexName) {
        successorVertexes.shift();
      }
    }

    const cyclicEdgeSourceVertexName = partialCycle.getCyclicEdgeSourceVertexName(),
          cyclicEdgeTargetVertexName = partialCycle.getCyclicEdgeTargetVertexName(),
          predecessorVertexNames = partialCycle.getPredecessorVertexNames(),
          successorVertexNames = vertexNamesFromVertexes(successorVertexes),
          vertexNames = (vertexName === cyclicEdgeTargetVertexName) ?
                          [].concat(cyclicEdgeTargetVertexName).concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName) :
                            [].concat(predecessorVertexNames).concat(cyclicEdgeSourceVertexName).concat(cyclicEdgeTargetVertexName).concat(successorVertexNames),
          cycle = new Cycle(vertexNames);
    
    return cycle;
  }
}
