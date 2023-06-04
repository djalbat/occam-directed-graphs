"use strict";

import { orderVertexes, vertexNamesFromVertexes } from "./utilities/vertex";
import { forwardsDepthFirstSearch, backwardsDepthFirstSearch } from "./utilities/search";

export default class Vertex {
  constructor(name, index, visited, immediateSuccessorVertexes, immediatePredecessorVertexes) {
    this.name = name;
    this.index = index;
    this.visited = visited;
    this.immediateSuccessorVertexes = immediateSuccessorVertexes;
    this.immediatePredecessorVertexes = immediatePredecessorVertexes;
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

  getImmediateSuccessorVertexes() {
    return this.immediateSuccessorVertexes;
  }

  getImmediatePredecessorVertexes() {
    return this.immediatePredecessorVertexes;
  }

  isStranded() {
    const immediateSuccessorVertexesLength = this.immediateSuccessorVertexes.length,
          immediatePredecessorVertexesLength = this.immediatePredecessorVertexes.length,
          stranded = ((immediateSuccessorVertexesLength === 0) && (immediatePredecessorVertexesLength === 0));

    return stranded;
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

  getPredecessorVertexMap(predecessorVertexMap = {}) {
    this.forEachImmediatePredecessorVertex((immediatePredecessorVertex) => {
      const predecessorVertex = immediatePredecessorVertex, ///
            predecessorVertexName = predecessorVertex.getName();

      predecessorVertexMap[predecessorVertexName] = predecessorVertex;

      predecessorVertex.getPredecessorVertexMap(predecessorVertexMap);
    });

    return predecessorVertexMap;
  }

  getSuccessorVertexes() {
    const successorVertexMap = this.getSuccessorVertexMap(),
          successorVertexNames = Object.keys(successorVertexMap),
          successorVertexes = successorVertexNames.map((successorVertexName) => {
            const successorVertex = successorVertexMap[successorVertexName];

            return successorVertex;
          });

    return successorVertexes;
  }

  getPredecessorVertexes() {
    const predecessorVertexMap = this.getPredecessorVertexMap(),
          predecessorVertexNames = Object.keys(predecessorVertexMap),
          predecessorVertexes = predecessorVertexNames.map((predecessorVertexName) => {
            const predecessorVertex = predecessorVertexMap[predecessorVertexName];

            return predecessorVertex;
          });

    return predecessorVertexes;
  }

  getSuccessorVertexNames() {
    const successorVertexes = this.getSuccessorVertexes(),
          successorVertexNames = successorVertexes.map((successorVertex) => {
        const successorVertexName = successorVertex.getName();

        return successorVertexName;
      });

    return successorVertexNames;
  }

  getPredecessorVertexNames() {
    const predecessorVertexes = this.getPredecessorVertexes(),
          predecessorVertexNames = predecessorVertexes.map((predecessorVertex) => {
            const predecessorVertexName = predecessorVertex.getName();

            return predecessorVertexName;
          });

    return predecessorVertexNames;
  }

  getOrderedPredecessorVertexNames() {
    const predecessorVertexes = this.getPredecessorVertexes();

    orderVertexes(predecessorVertexes);

    const orderedPredecessorVertexes = predecessorVertexes,  ///
          orderedPredecessorVertexNames = vertexNamesFromVertexes(orderedPredecessorVertexes);

    return orderedPredecessorVertexNames;
  }

  getImmediateSuccessorVertexNames() {
    const immediateSuccessorVertexNames = this.immediateSuccessorVertexes.map((immediateSuccessorVertex) => {
      const immediateSuccessorVertexName = immediateSuccessorVertex.getName();

      return immediateSuccessorVertexName;
    });

    return immediateSuccessorVertexNames;
  }

  getImmediatePredecessorVertexNames() {
    const immediatePredecessorVertexNames = this.immediatePredecessorVertexes.map((immediatePredecessorVertex) => {
      const immediatePredecessorVertexName = immediatePredecessorVertex.getName();

      return immediatePredecessorVertexName;
    });

    return immediatePredecessorVertexNames;
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

  isVertexImmediateSuccessorVertex(vertex) {
    const vertexImmediateSuccessorVertex = this.immediateSuccessorVertexes.includes(vertex);

    return vertexImmediateSuccessorVertex;
  }

  isVertexImmediatePredecessorVertex(vertex) {
    const vertexImmediatePredecessorVertex = this.immediatePredecessorVertexes.includes(vertex);

    return vertexImmediatePredecessorVertex;
  }

  retrieveForwardsAffectedVertexes(sourceVertex) {
    const visitedVertexes = this.forwardsDepthFirstSearch((visitedVertex) => {
            const terminate = (visitedVertex === sourceVertex);

            if (terminate) {
              return true;
            }
          }),
          forwardsAffectedVertexes = visitedVertexes; ///

    return forwardsAffectedVertexes;
  }

  retrieveBackwardsAffectedVertexes() {
    const visitedVertexes = this.backwardsDepthFirstSearch((visitedVertex) => {
            const terminate = false;

            if (terminate) {
              return true;
            }
          }),
          backwardsAffectedVertexes = visitedVertexes;  ///

    return backwardsAffectedVertexes;
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

  setImmediateSuccessorVertexes(immediateSuccessorVertexes) {
    this.immediateSuccessorVertexes = immediateSuccessorVertexes;
  }

  setImmediatePredecessorVertexes(immediatePredecessorVertexes) {
    this.immediatePredecessorVertexes = immediatePredecessorVertexes;
  }

  decrementIndex() {
    this.index--;
  }

  removeIncomingEdges() {
    const immediateSuccessorVertex = this; ///

    this.immediatePredecessorVertexes.forEach((immediatePredecessorVertex) => {
      immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
    });

    this.immediatePredecessorVertexes = [];
  }

  removeOutgoingEdges() {
    const immediatePredecessorVertex = this; ///

    this.immediateSuccessorVertexes.forEach((immediateSuccessorVertex) => {
      immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
    });

    this.immediateSuccessorVertexes = [];
  }

  addImmediateSuccessorVertex(immediateSuccessorVertex) {
    this.immediateSuccessorVertexes.push(immediateSuccessorVertex);
  }

  addImmediatePredecessorVertex(immediatePredecessorVertex) {
    this.immediatePredecessorVertexes.push(immediatePredecessorVertex);
  }

  removeImmediateSuccessorVertex(immediateSuccessorVertex) {
    const index = this.immediateSuccessorVertexes.indexOf(immediateSuccessorVertex),
          start = index,  ///
          deleteCount = 1;

    this.immediateSuccessorVertexes.splice(start, deleteCount);
  }

  removeImmediatePredecessorVertex(immediatePredecessorVertex) {
    const index = this.immediatePredecessorVertexes.indexOf(immediatePredecessorVertex),
          start = index,  ///
          deleteCount = 1;

    this.immediatePredecessorVertexes.splice(start, deleteCount);
  }

  forwardsDepthFirstSearch(callback) {
    const vertex = this,  ///
          visitedVertexes = forwardsDepthFirstSearch(vertex, callback);

    return visitedVertexes;
  }

  backwardsDepthFirstSearch(callback) {
    const vertex = this,  ///
          visitedVertexes = backwardsDepthFirstSearch(vertex, callback);

    return visitedVertexes;
  }

  someImmediateSuccessorVertex(callback) {
    this.immediateSuccessorVertexes.some(callback);
  }

  someImmediatePredecessorVertex(callback) {
    this.immediatePredecessorVertexes.some(callback);
  }

  forEachImmediateSuccessorVertex(callback) {
    this.immediateSuccessorVertexes.forEach(callback);
  }

  forEachImmediatePredecessorVertex(callback) {
    this.immediatePredecessorVertexes.forEach(callback);
  }

  resetVisited() {
    this.visited = false;
  }

  static fromNameAndIndex(name, index) {
    const visited = false,  ///
          immediateSuccessorVertexes = [],
          immediatePredecessorVertexes = [],
          dependencyVertex = new Vertex(name, index, visited, immediateSuccessorVertexes, immediatePredecessorVertexes);

    return dependencyVertex;
  }
}
