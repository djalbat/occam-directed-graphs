"use strict";

import { arrayUtilities } from "necessary";

const { prune } = arrayUtilities;

const remove = prune;  ///

export function edgesFromVertexLiterals(vertexLiterals) {
  const edges = [];

  vertexLiterals.forEach((vertexLiteral) => {
    const firstVertexLiteralElement = first(vertexLiteral),
          secondVertexLiteralElement = second(vertexLiteral),
          ancestorVertexNames = secondVertexLiteralElement, ///
          vertexName = firstVertexLiteralElement; ///

    ancestorVertexNames.forEach((ancestorVertexName) => {
      const sourceVertexName = ancestorVertexName, ///
            targetVertexName = vertexName,  ///
            edge = new Edge(sourceVertexName, targetVertexName);

      edges.push(edge);
    });
  });

  return edges;
}

export function checkEdgesIncludesEdge(edge, edges) {
  const edge1 = edge, ///
        edgesIncludesEdge = edges.some((edge) => {
          const edge2 = edge, ///
                matches = edge1.match(edge2);

          if (matches) {
            return true;
          }
        });

  return edgesIncludesEdge;
}

export function removeEdgeFromEdges(edge, edges) {
  const edge1 = edge; ///

  remove(edges, (edge) => {
    const edge2 = edge, ///
          matches = edge1.match(edge2);

    if (!matches) { ///
      return true;
    }
  });
}

export function edgesBySourceVertexName(sourceVertexName, edges) {
  edges = edges.filter((edge) => {  ///
    const matches = edge.matchSourceVertexName(sourceVertexName);

    if (matches) {
      return true;
    }
  });

  return edges;
}

export function edgesByTargetVertexName(targetVertexName, edges) {
  edges = edges.filter((edge) => {  ///
    const matches = edge.matchTargetVertexName(targetVertexName);

    if (matches) {
      return true;
    }
  });

  return edges;
}
