"use strict";

export function orderVertices(vertices) {  ///
  vertices.sort((firstVertex, secondVertex) => {
    const firstVertexIndex = firstVertex.getIndex(),
          secondVertexIndex = secondVertex.getIndex();

    if (false) {
      ///
    } else if (firstVertexIndex < secondVertexIndex) {
      return -1;
    } else  if (firstVertexIndex > secondVertexIndex) {
      return +1;
    } else {
      return 0;
    }
  });

  const orderedVertices = vertices;  ///

  return orderedVertices;
}

export function vertexNamesFromVertices(vertices) {
  const vertexNames = vertices.map((vertex) => {
    const vertexName = vertex.getName();

    return vertexName;
  });

  return vertexNames;
}

export function forwardsDepthFirstSearch(vertex, callback) {
  const visitedVertices = [];

  retrieveForwardsVisitedVertices(vertex, (visitedVertex, getPredecessorVertices) => {
    const terminate = callback(visitedVertex, getPredecessorVertices);  ///

    visitedVertices.push(visitedVertex);

    return terminate;
  }, getPredecessorVertices);

  visitedVertices.forEach((visitedVertex) => {
    visitedVertex.resetVisited();
  });

  return visitedVertices;

  function getPredecessorVertices() {
    const predecessorVertices = [];
    
    return predecessorVertices;
  }
}

function retrieveForwardsVisitedVertices(vertex, callback, getPredecessorVertices) {
  let terminate = false;

  const visited = vertex.isVisited();

  if (visited === false) {
    const visited = true;

    vertex.setVisited(visited);

    const visitedVertex = vertex;  ///

    terminate = callback(visitedVertex, getPredecessorVertices);

    if (terminate !== true) {
      visitedVertex.someImmediateSuccessorVertex((immediateSuccessorVertex) => {
        terminate = retrieveForwardsVisitedVertices(immediateSuccessorVertex, callback, () => {
          let predecessorVertices = getPredecessorVertices();

          const immediatePredecessorVertex = vertex,  ///
                predecessorVertex = immediatePredecessorVertex; ///

          predecessorVertices = predecessorVertices.concat(predecessorVertex);

          return predecessorVertices;
        });

        return terminate;
      });
    }
  }

  return terminate;
}
