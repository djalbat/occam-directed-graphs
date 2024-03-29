"use strict";

import { arrayUtilities } from "necessary";

import { vertexNamesFromVertexes } from "./utilities/vertex";
import { forwardsDepthFirstSearch, backwardsDepthFirstSearch } from "./utilities/search";

const { last, tail } = arrayUtilities;

export default class Vertex {
  constructor(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes) {
    this.name = name;
    this.index = index;
    this.immediateSuccessorVertexes = immediateSuccessorVertexes;
    this.immediatePredecessorVertexes = immediatePredecessorVertexes;
  }

  getName() {
    return this.name;
  }

  getIndex() {
    return this.index;
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

  isVertexForwardsReachable(vertex) {
    const forwardsReachableVertexes = this.retrieveForwardsReachableVertexes(vertex),
          lastForwardsReachableVertex = last(forwardsReachableVertexes),
          vertexForwardsReachable = (vertex === lastForwardsReachableVertex);

    return vertexForwardsReachable;
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

  retrieveSuccessorVertexNames() {
    const forwardsReachableVertexes = this.retrieveForwardsReachableVertexes(),
          forwardsReachableVertexesTail = tail(forwardsReachableVertexes),
          successorVertexes = forwardsReachableVertexesTail,
          successorVertexNames = vertexNamesFromVertexes(successorVertexes);

    return successorVertexNames;
  }

  retrievePredecessorVertexNames() {
    const backwardsReachableVertexes = this.retrieveBackwardsReachableVertexes(),
          backwardsReachableVertexesTail = tail(backwardsReachableVertexes),
          predecessorVertexes = backwardsReachableVertexesTail,
          predecessorVertexNames = vertexNamesFromVertexes(predecessorVertexes);

    return predecessorVertexNames;
  }

  retrieveForwardsReachableVertexes(vertex = null) {
    const vertexA = vertex, ///
          visitedVertexes = this.forwardsDepthFirstSearch((vertex) => {
            const vertexB = vertex, ///
                  terminate = (vertexA === vertexB);

            if (terminate) {
              return true;
            }
          }),
          forwardsReachableVertexes = visitedVertexes;  ///

    return forwardsReachableVertexes;
  }

  retrieveBackwardsReachableVertexes(vertex = null) {
    const vertexA = vertex, ///
          visitedVertexes = this.backwardsDepthFirstSearch((vertex) => {
            const vertexB = vertex, ///
                  terminate = (vertexA === vertexB);

            if (terminate) {
              return true;
            }
          }),
          backwardsReachableVertexes = visitedVertexes;  ///

    return backwardsReachableVertexes;
  }

  isVertexImmediateSuccessorVertex(vertex) {
    const vertexImmediateSuccessorVertex = this.immediateSuccessorVertexes.includes(vertex);

    return vertexImmediateSuccessorVertex;
  }

  isVertexImmediatePredecessorVertex(vertex) {
    const vertexImmediatePredecessorVertex = this.immediatePredecessorVertexes.includes(vertex);

    return vertexImmediatePredecessorVertex;
  }

  getImmediateSuccessorVertexNames() {
    const immediateSuccessorVertexNames = vertexNamesFromVertexes(this.immediateSuccessorVertexes);

    return immediateSuccessorVertexNames;
  }

  getImmediatePredecessorVertexNames() {
    const immediatePredecessorVertexNames = vertexNamesFromVertexes(this.immediatePredecessorVertexes);

    return immediatePredecessorVertexNames;
  }

  setName(name) {
    this.name = name;
  }

  setIndex(index) {
    this.index = index;
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
          visitedVertexes = [];

    forwardsDepthFirstSearch(vertex, callback, visitedVertexes);

    return visitedVertexes;
  }

  backwardsDepthFirstSearch(callback) {
    const vertex = this,  ///
          visitedVertexes = [];

    backwardsDepthFirstSearch(vertex, callback, visitedVertexes);

    return visitedVertexes;
  }

  someImmediateSuccessorVertex(callback) {
    return this.immediateSuccessorVertexes.some(callback);
  }

  someImmediatePredecessorVertex(callback) {
    return this.immediatePredecessorVertexes.some(callback);
  }

  forEachImmediateSuccessorVertex(callback) {
    this.immediateSuccessorVertexes.forEach(callback);
  }

  forEachImmediatePredecessorVertex(callback) {
    this.immediatePredecessorVertexes.forEach(callback);
  }

  static fromNameAndIndex(name, index) {
    const immediateSuccessorVertexes = [],
          immediatePredecessorVertexes = [],
          dependencyVertex = new Vertex(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes);

    return dependencyVertex;
  }
}
