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
}

export function indexesFromVertexes(vertexes) {
  const indexes = vertexes.map((vertex) => {
    const index = vertex.getIndex();

    return index;
  });

  return indexes;
}

export function vertexNamesFromVertexes(vertexes) {
  const vertexNames = vertexes.map((vertex) => {
    const vertexName = vertex.getName();

    return vertexName;
  });

  return vertexNames;
}
