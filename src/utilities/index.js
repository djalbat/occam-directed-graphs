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
