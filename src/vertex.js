"use strict";

import { vertexNamesFromVertices, orderVertices } from "./utilities/vertex";

export default class Vertex {
  constructor(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices) {
    this.name = name;
    this.index = index;
    this.visited = visited;
    this.immediatePredecessorVertices = immediatePredecessorVertices;
    this.immediateSuccessorVertices = immediateSuccessorVertices;
  }

  getName() {
    return this.name;
  }

  getIndex() {
    return this.index;
  }

  isVisited() {
    return this.visited;
  }

  isStranded() {
    const immediatePredecessorVerticesLength = this.immediatePredecessorVertices.length,
          immediateSuccessorVerticesLength = this.immediateSuccessorVertices.length,
          stranded = ((immediatePredecessorVerticesLength === 0) && (immediateSuccessorVerticesLength === 0));

    return stranded;
  }

  getImmediatePredecessorVertexNames() {
    const immediatePredecessorVertexNames = this.immediatePredecessorVertices.map((immediatePredecessorVertex) => {
      const immediatePredecessorVertexName = immediatePredecessorVertex.getName();

      return immediatePredecessorVertexName;
    });

    return immediatePredecessorVertexNames;
  }

  getImmediateSuccessorVertexNames() {
    const immediateSuccessorVertexNames = this.immediateSuccessorVertices.map((immediateSuccessorVertex) => {
      const immediateSuccessorVertexName = immediateSuccessorVertex.getName();

      return immediateSuccessorVertexName;
    });

    return immediateSuccessorVertexNames;
  }

  getImmediatePredecessorVertices() {
    return this.immediatePredecessorVertices;
  }

  getImmediateSuccessorVertices() {
    return this.immediateSuccessorVertices;
  }

  getPredecessorVertexMap(predecessorVertexMap = {}) {
    this.forEachImmediatePredecessorVertex((immediatePredecessorVertex) => {
      const predecessorVertex = immediatePredecessorVertex, ///
            predecessorVertexName = predecessorVertex.getName();

      predecessorVertexMap[predecessorVertexName] = predecessorVertex;

      predecessorVertex.getPredecessorVertexMap(predecessorVertexMap);
    });

    return predecessorVertexMap;
  }

  getSuccessorVertexMap(successorVertexMap = {}) {
    this.forEachImmediateSuccessorVertex((immediateSuccessorVertex) => {
      const successorVertex = immediateSuccessorVertex, ///
            successorVertexName = successorVertex.getName();

      successorVertexMap[successorVertexName] = successorVertex;

      successorVertex.getSuccessorVertexMap(successorVertexMap);
    });

    return successorVertexMap;
  }

  getPredecessorVertexNames() {
    const predecessorVertices = this.getPredecessorVertices(),
          predecessorVertexNames = predecessorVertices.map((predecessorVertex) => {
            const predecessorVertexName = predecessorVertex.getName();

            return predecessorVertexName;
          });

    return predecessorVertexNames;
  }

  getSuccessorVertexNames() {
    const successorVertices = this.getSuccessorVertices(),
          successorVertexNames = successorVertices.map((successorVertex) => {
            const successorVertexName = successorVertex.getName();

            return successorVertexName;
          });

    return successorVertexNames;
  }

  getPredecessorVertices() {
    const predecessorVertexMap = this.getPredecessorVertexMap(),
          predecessorVertexNames = Object.keys(predecessorVertexMap),
          predecessorVertices = predecessorVertexNames.map((predecessorVertexName) => {
            const predecessorVertex = predecessorVertexMap[predecessorVertexName];

            return predecessorVertex;
          });

    return predecessorVertices;
  }

  getSuccessorVertices() {
    const successorVertexMap = this.getSuccessorVertexMap(),
          successorVertexNames = Object.keys(successorVertexMap),
          successorVertices = successorVertexNames.map((successorVertexName) => {
            const successorVertex = successorVertexMap[successorVertexName];
  
            return successorVertex;
          });

    return successorVertices;
  }

  getOrderedPredecessorVertexNames() {
    const predecessorVertices = this.getPredecessorVertices();

    orderVertices(predecessorVertices);

    const orderedPredecessorVertices = predecessorVertices,  ///
          orderedPredecessorVertexNames = vertexNamesFromVertices(orderedPredecessorVertices);

    return orderedPredecessorVertexNames;
  }
  
  retrieveForwardsAffectedVertices(sourceVertex) {
    const forwardsAffectedVertices = this.forwardsDepthFirstSearch((visitedVertex) => {
      const terminate = (visitedVertex === sourceVertex);
      
      if (terminate) {
        return true;
      }
    });
    
    return forwardsAffectedVertices;
  }

  retrieveBackwardsAffectedVertices() {
    const backwardsAffectedVertices = this.backwardsDepthFirstSearch((visitedVertex) => {
      const terminate = false;

      if (terminate) {
        return true;
      }
    });
    
    return backwardsAffectedVertices;
  }
  
  isVertexImmediatePredecessorVertex(vertex) {
    const vertexImmediatePredecessorVertex = this.immediatePredecessorVertices.includes(vertex);

    return vertexImmediatePredecessorVertex;
  }

  isVertexImmediateSuccessorVertex(vertex) {
    const vertexImmediateSuccessorVertex = this.immediateSuccessorVertices.includes(vertex);

    return vertexImmediateSuccessorVertex;
  }

  isEdgePresentBySourceVertex(sourceVertex) {
    const sourceVertexImmediatePredecessorVertex = this.isVertexImmediatePredecessorVertex(sourceVertex),
          edgePresent = sourceVertexImmediatePredecessorVertex; ///

    return edgePresent;
  }

  isEdgePresentByTargetVertex(targetVertex) {
    const targetVertexImmediateSuccessorVertex = this.isVertexImmediateSuccessorVertex(targetVertex),
          edgePresent = targetVertexImmediateSuccessorVertex; ///

    return edgePresent;
  }

  setName(name) {
    this.name = name;
  }

  setIndex(index) {
    this.index = index;
  }

  setVisited(visited) {
    this.visited = visited;
  }

  decrementIndex() {
    this.index--;
  }

  removeImmediatePredecessorVertex(immediatePredecessorVertex) {
    const index = this.immediatePredecessorVertices.indexOf(immediatePredecessorVertex),
          start = index,  ///
          deleteCount = 1;

    this.immediatePredecessorVertices.splice(start, deleteCount);
  }

  removeImmediateSuccessorVertex(immediateSuccessorVertex) {
    const index = this.immediateSuccessorVertices.indexOf(immediateSuccessorVertex),
          start = index,  ///
          deleteCount = 1;

    this.immediateSuccessorVertices.splice(start, deleteCount);
  }
  
  removeIncomingEdges() {
    const immediateSuccessorVertex = this; ///
    
    this.immediatePredecessorVertices.forEach((immediatePredecessorVertex) => immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex));

    this.immediatePredecessorVertices = [];
  }

  removeOutgoingEdges() {
    const immediatePredecessorVertex = this; ///

    this.immediateSuccessorVertices.forEach((immediateSuccessorVertex) => immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex));

    this.immediateSuccessorVertices = [];
  }

  addImmediatePredecessorVertex(immediatePredecessorVertex) {
    this.immediatePredecessorVertices.push(immediatePredecessorVertex);
  }

  addImmediateSuccessorVertex(immediateSuccessorVertex) {
    this.immediateSuccessorVertices.push(immediateSuccessorVertex);
  }

  forwardsDepthFirstSearch(callback) {
    const visitedVertices = [];

    this.retrieveForwardsVisitedVertices((visitedVertex) => {
      const terminate = callback(visitedVertex);  ///

      visitedVertices.push(visitedVertex);

      return terminate;
    });

    visitedVertices.forEach((visitedVertex) => visitedVertex.resetVisited());

    return visitedVertices;
  }

  backwardsDepthFirstSearch(callback) {
    const visitedVertices = [];

    this.retrieveBackwardsVisitedVertices((visitedVertex) => {
      const terminate = callback(visitedVertex);  ///

      visitedVertices.push(visitedVertex);

      return terminate;
    });

    visitedVertices.forEach((visitedVertex) => visitedVertex.resetVisited());

    return visitedVertices;
  }

  retrieveForwardsVisitedVertices(callback) {
    let terminate = false;

    if (this.visited === false) {
      this.visited = true;

      const visitedVertex = this;  ///

      terminate = callback(visitedVertex);

      if (terminate !== true) {
        visitedVertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
          terminate = immediateSuccessorVertex.retrieveForwardsVisitedVertices(callback);

          if (terminate) {
            return true;
          }
        });
      }
    }

    return terminate;
  }

  retrieveBackwardsVisitedVertices(callback) {
    let terminate = false;

    if (this.visited === false) {
      this.visited = true;

      const visitedVertex = this;  ///

      terminate = callback(visitedVertex);

      if (terminate !== true) {
        visitedVertex.someImmediatePredecessorVertex((immediatePredecessorVertex) => {
          terminate = immediatePredecessorVertex.retrieveBackwardsVisitedVertices(callback);

          if (terminate) {
            return true;
          }
        });
      }
    }

    return terminate;
  }

  forEachImmediatePredecessorVertex(callback) {
    this.immediatePredecessorVertices.forEach(callback);
  }

  forEachImmediateSuccessorVertex(callback) {
    this.immediateSuccessorVertices.forEach(callback);
  }

  someImmediatePredecessorVertex(callback) {
    this.immediatePredecessorVertices.some(callback);
  }

  someImmediateSuccessorVertex(callback) {
    this.immediateSuccessorVertices.some(callback);
  }

  resetVisited() {
    this.visited = false;
  }

  static fromNameAndIndex(name, index) {
    const visited = false,  ///
          immediatePredecessorVertices = [],
          immediateSuccessorVertices = [],
          dependencyVertex = new Vertex(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices);

    return dependencyVertex;
  }
}
