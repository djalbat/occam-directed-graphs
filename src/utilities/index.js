"use strict";

export function orderIndexes(indexes) {  ///
  indexes.sort((firstIndex, secondIndex) => {
    if (false) {
      ///
    } else if (firstIndex < secondIndex) {
      return -1;
    } else  if (firstIndex > secondIndex) {
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
