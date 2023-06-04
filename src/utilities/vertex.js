"use strict";

export function orderVertexes(vertexes) {  ///
  vertexes.sort((firstVertex, secondVertex) => {
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

  const orderedVertexes = vertexes;  ///

  return orderedVertexes;
}

export function vertexNamesFromVertexes(vertexes) {
  const vertexNames = vertexes.map((vertex) => {
    const vertexName = vertex.getName();

    return vertexName;
  });

  return vertexNames;
}
