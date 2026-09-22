"use strict";

import { vertexNamesFromVertexes } from "./utilities/vertex";

export default class Cycle {
  constructor(vertexNames) {
    this.vertexNames = vertexNames;
  }

  getVertexNames() {
    return this.vertexNames;
  }

  static fromBackEdgeAndDirectedGraph(backEdge, directedGraph) {
    let cycle;

    const sourceVertexName = backEdge.getSourceVertexName(), ///
          targetVertexName = backEdge.getTargetVertexName(), ///
          sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName),
          targetVertex = directedGraph.getVertexByVertexName(targetVertexName);

    targetVertex.forwardsDepthFirstSearch((vertex, predecessorVertexes) => {
      if (vertex === sourceVertex) {
        const vertexes = [
                ...predecessorVertexes,
                sourceVertex
              ],
              vertexNames = vertexNamesFromVertexes(vertexes);

        cycle = new Cycle(vertexNames);

        return true;
      }
    });

    return cycle;
  }

  static fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes) {
    const vertexes = [
            ...predecessorVertexes,
            sourceVertex
          ],
          vertexNames = vertexNamesFromVertexes(vertexes),
          cycle = new Cycle(vertexNames);

    return cycle;
  }
}
