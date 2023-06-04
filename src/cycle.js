"use strict";

import { vertexNamesFromVertexes } from "./utilities/vertex";

export default class Cycle {
  constructor(vertexNames) {
    this.vertexNames = vertexNames;
  }

  getVertexNames() {
    return this.vertexNames;
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
