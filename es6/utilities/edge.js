'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { prune } = arrayUtilities;

const remove = prune;  ///

function edgesFromVertexLiterals(vertexLiterals) {
  const edges = [];

  vertexLiterals.forEach(function(vertexLiteral) {
    const firstVertexLiteralElement = first(vertexLiteral),
        secondVertexLiteralElement = second(vertexLiteral),
        ancestorVertexNames = secondVertexLiteralElement, ///
        vertexName = firstVertexLiteralElement; ///

    ancestorVertexNames.forEach(function(ancestorVertexName) {
      const sourceVertexName = ancestorVertexName, ///
          targetVertexName = vertexName,  ///
          edge = new Edge(sourceVertexName, targetVertexName);

      edges.push(edge);
    });
  });

  return edges;
}

function checkEdgesIncludesEdge(edge, edges) {
  const edge1 = edge, ///
      edgesIncludesEdge = edges.some(function(edge) {
        const edge2 = edge, ///
            matches = edge1.match(edge2);

        if (matches) {
          return true;
        }
      });

  return edgesIncludesEdge;
}

function removeEdgeFromEdges(edge, edges) {
  const edge1 = edge; ///

  remove(edges, function(edge) {
    const edge2 = edge, ///
        matches = edge1.match(edge2);

    if (!matches) { ///
      return true;
    }
  });
}

module.exports = {
  edgesFromVertexLiterals,
  checkEdgesIncludesEdge,
  removeEdgeFromEdges
};
