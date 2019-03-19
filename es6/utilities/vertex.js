'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

function vertexNamesFromVertexLiterals(vertexLiterals) {
  const vertexNameMap = {};

  vertexLiterals.forEach(function(vertexLiteral) {
    const firstVertexLiteralElement = first(vertexLiteral),
          vertexName = firstVertexLiteralElement, ///
          vertexExists = vertexNameMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      vertexNameMap[vertexName] = vertexName;
    }

      const secondVertexLiteralElement = second(vertexLiteral),
        ancestorVertexNames = secondVertexLiteralElement; ///

    ancestorVertexNames.forEach(function(ancestorVertexName) {
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

function vertexNamesFromVertices(vertices) {
  const vertexNames = vertices.map(function(vertex) {
    const vertexName = vertex.getName();

    return vertexName;
  });

  return vertexNames;
}

function forwardsDepthFirstSearch(vertex, callback) {
  const visitedVertices = [];

  retrieveForwardsVisitedVertices(vertex, function(visitedVertex, getPredecessorVertices) {
    const terminate = callback(visitedVertex, getPredecessorVertices);  ///

    visitedVertices.push(visitedVertex);

    return terminate;
  }, getPredecessorVertices);

  visitedVertices.forEach(function(visitedVertex) {
    visitedVertex.resetVisited();
  });

  return visitedVertices;

  function getPredecessorVertices() {
    const predecessorVertices = [];
    
    return predecessorVertices;
  }
}

module.exports = {
  vertexNamesFromVertexLiterals,
  vertexNamesFromVertices,
  forwardsDepthFirstSearch
};

function retrieveForwardsVisitedVertices(vertex, callback, getPredecessorVertices) {
  let terminate = false;

  if (vertex.visited === false) {
    vertex.visited = true;

    const visitedVertex = vertex;  ///

    terminate = callback(visitedVertex, getPredecessorVertices);

    if (terminate !== true) {
      visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
        terminate = retrieveForwardsVisitedVertices(immediateSuccessorVertex, callback, function() {
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
