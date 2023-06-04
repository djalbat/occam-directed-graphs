"use strict";

export function forwardsDepthFirstSearch(vertex, callback) {
  const visitedVertexes = [];

  retrieveForwardsVisitedVertexes(vertex, (visitedVertex, predecessorVertexes) => {
    const terminate = callback(visitedVertex, predecessorVertexes);  ///

    visitedVertexes.push(visitedVertex);

    return terminate;
  });

  visitedVertexes.forEach((visitedVertex) => {
    visitedVertex.resetVisited();
  });

  return visitedVertexes;
}

export function backwardsDepthFirstSearch(vertex, callback) {
  const visitedVertexes = [];

  retrieveBackwardsVisitedVertexes(vertex, (visitedVertex, successorVertexes) => {
    const terminate = callback(visitedVertex, successorVertexes);  ///

    visitedVertexes.push(visitedVertex);

    return terminate;
  });

  visitedVertexes.forEach((visitedVertex) => {
    visitedVertex.resetVisited();
  });

  return visitedVertexes;
}

function retrieveForwardsVisitedVertexes(vertex, callback, predecessorVertexes = []) {
  let terminate = false;

  const visited = vertex.isVisited();

  if (visited === false) {
    const visited = true;

    vertex.setVisited(visited);

    const visitedVertex = vertex;  ///

    terminate = callback(visitedVertex, predecessorVertexes);

    if (terminate !== true) {
      visitedVertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
        const predecessorVertex = vertex;  ///

        predecessorVertexes = [ ///
          ...predecessorVertexes,
          predecessorVertex
        ];

        terminate = retrieveForwardsVisitedVertexes(immediateSuccessorVertex, callback, predecessorVertexes);

        return terminate;
      });
    }
  }

  return terminate;
}

function retrieveBackwardsVisitedVertexes(vertex, callback, successorVertexes = []) {
  let terminate = false;

  const visited = vertex.isVisited();

  if (visited === false) {
    const visited = true;

    vertex.setVisited(visited);

    const visitedVertex = vertex;  ///

    terminate = callback(visitedVertex, successorVertexes);

    if (terminate !== true) {
      visitedVertex.someImmediatePredecessorVertex((immediatePredecessorVertex) => {
        const successorVertex = vertex;  ///

        successorVertexes = [ ///
          ...successorVertexes,
          successorVertex
        ];

        terminate = retrieveForwardsVisitedVertexes(immediatePredecessorVertex, callback, successorVertexes);

        return terminate;
      });
    }
  }

  return terminate;
}
