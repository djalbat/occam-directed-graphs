"use strict";

export default class Edge {
  constructor(sourceVertexName, targetVertexName) {
    this.sourceVertexName = sourceVertexName;
    this.targetVertexName = targetVertexName;
  }
  
  getSourceVertexName() {
    return this.sourceVertexName;
  }
  
  getTargetVertexName() {
    return this.targetVertexName;
  }
  
  match(edge) {
    const sourceVertexName = edge.getSourceVertexName(),
          targetVertexName = edge.getTargetVertexName(),
          matches = ((this.sourceVertexName === sourceVertexName) && (this.targetVertexName === targetVertexName));
    
    return matches;
  }

  matchVertexName(vertexName) {
    const matches = ((this.sourceVertexName === vertexName) || (this.targetVertexName === vertexName));

    return matches;
  }

  matchVertexNames(sourceVertexName, targetVertexName) {
    const matches = ((this.sourceVertexName === sourceVertexName) && (this.targetVertexName === targetVertexName));

    return matches;
  }

  matchSourceVertexName(sourceVertexName) {
    const matches = (this.sourceVertexName === sourceVertexName);

    return matches;
  }

  matchTargetVertexName(targetVertexName) {
    const matches = (this.targetVertexName === targetVertexName);

    return matches;
  }

  static fromSourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const sourceVertexName = sourceVertex.getName(),
          targetVertexName = targetVertex.getName(),
          edge = new Edge(sourceVertexName, targetVertexName);

    return edge;
  }

  static fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
    const edge = new Edge(sourceVertexName, targetVertexName);

    return edge;
  }
}
