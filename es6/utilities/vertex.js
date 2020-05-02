"use strict";

import { arrayUtilities } from "necessary";

const { first, second } = arrayUtilities;

export function vertexNamesFromVertexLiterals(vertexLiterals) {
  const vertexNameMap = {};

  vertexLiterals.forEach((vertexLiteral) => {
    const firstVertexLiteralElement = first(vertexLiteral),
          vertexName = firstVertexLiteralElement, ///
          vertexExists = vertexNameMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      vertexNameMap[vertexName] = vertexName;
    }

      const secondVertexLiteralElement = second(vertexLiteral),
            ancestorVertexNames = secondVertexLiteralElement; ///

    ancestorVertexNames.forEach((ancestorVertexName) => {
      const ancestorVertexExists = vertexNameMap.hasOwnProperty(ancestorVertexName);

      if (!ancestorVertexExists) {
        vertexNameMap[ancestorVertexName] = ancestorVertexName;
      }
    });
  });

  const vertexNameMapKeys = Object.keys(vertexNameMap),
        vertexNames = vertexNameMapKeys;  ///

  return vertexNames;
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

  visitedVertices.forEach((visitedVertex) => visitedVertex.resetVisited());

  return visitedVertices;

  function getPredecessorVertices() {
    const predecessorVertices = [];
    
    return predecessorVertices;
  }
}

function retrieveForwardsVisitedVertices(vertex, callback, getPredecessorVertices) {
  let terminate = false;

  if (vertex.visited === false) {
    vertex.visited = true;

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
