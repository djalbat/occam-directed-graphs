"use strict";

export function forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes = []) {
  let terminate = true;

  const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);

  if (!visitedVertexesIncludesVertex) {
    const visitedVertex = vertex; ///

    visitedVertexes.push(visitedVertex);

    terminate = callback(vertex, predecessorVertexes);

    if (!terminate) {
      const predecessorVertex = vertex;  ///

      predecessorVertexes = [ ///
        ...predecessorVertexes,
        predecessorVertex
      ];

      terminate = vertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
        const vertex = immediateSuccessorVertex,  ///
              terminate = forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes);

        if (terminate) {
          return true;
        }
      });
    }
  }

  return terminate;
}

export function backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes = []) {
  let terminate = true;

  const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);

  if (!visitedVertexesIncludesVertex) {
    const visitedVertex = vertex; ///

    visitedVertexes.push(visitedVertex);

    terminate = callback(vertex, successorVertexes);

    if (!terminate) {
      const successorVertex = vertex;  ///

      successorVertexes = [ ///
        ...successorVertexes,
        successorVertex
      ];

      terminate = vertex.someImmediatePredecessorVertex((immediatePredecessorVertex) => {
        const vertex = immediatePredecessorVertex,  ///
              terminate = backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes);

        if (terminate) {
          return true;
        }
      });
    }
  }

  return terminate;
}
