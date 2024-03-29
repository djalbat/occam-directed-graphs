"use strict";

export function forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes = []) {
  let terminate = false;

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
              vertexIndex = vertex.getIndex(),
              predecessorVertexIndex = predecessorVertex.getIndex();

        if (vertexIndex > predecessorVertexIndex) {
          const terminate = forwardsDepthFirstSearch(vertex, callback, visitedVertexes, predecessorVertexes);

          if (terminate) {
            return true;
          }
        }
      });
    }
  }

  return terminate;
}

export function backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes = []) {
  let terminate = false;

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
              vertexIndex = vertex.getIndex(),
              successorVertexIndex = successorVertex.getIndex();

        if (vertexIndex < successorVertexIndex) {
          const terminate = backwardsDepthFirstSearch(vertex, callback, visitedVertexes, successorVertexes);

          if (terminate) {
            return true;
          }
        }
      });
    }
  }

  return terminate;
}
