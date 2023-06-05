"use strict";

import { arrayUtilities } from "necessary";

const { prune } = arrayUtilities;

const remove = prune;  ///

export function checkEdgesIncludesEdge(edges, edge) {
  const edgeA = edge, ///
        edgesIncludesEdge = edges.some((edge) => {
          const edgeB = edge, ///
                matches = edgeA.match(edgeB);

          if (matches) {
            return true;
          }
        });

  return edgesIncludesEdge;
}

export function removeEdgeFromEdges(edge, edges) {
  const edgeA = edge; ///

  remove(edges, (edge) => {
    const edgeB = edge, ///
          matches = edgeA.match(edgeB);

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
