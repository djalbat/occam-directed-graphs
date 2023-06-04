"use strict";

const { assert } = require("chai"),
      { arrayUtilities } = require("necessary"),
      { Edge, Cycle, DirectedGraph } = require("../lib/index"); ///

const { first, second } = arrayUtilities;

describe("DirectedGraph", () => {
  describe("getFirstCycle", () => {
    describe("if there is a cycle present", () => {
      let directedGraph;

      before(() => {
        const vertexNameA = "a",
              vertexNameB = "b",
              vertexNameC = "c",
              vertexNamesArray = [
                [ vertexNameA, vertexNameB ],
                [ vertexNameB, vertexNameC ],
                [ vertexNameC, vertexNameA ]
              ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns a cycle", () => {
        const firstCycle = directedGraph.getFirstCycle();

        assert.instanceOf(firstCycle, Cycle);
      });
    });
  });

  describe("areCyclesPresent", () => {
    describe("if there are no cycles", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("returns false", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isFalse(cyclesPresent);
      });
    });

    describe("if there is a cycle", () => {
      let directedGraph;

      before(() => {
        const vertexNameA = "a",
              vertexNameB = "b",
              vertexNamesArray = [
                [ vertexNameA, vertexNameB ],
                [ vertexNameB, vertexNameB ]
              ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns true", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isTrue(cyclesPresent);
      });
    });

    describe("if there is a cycle one edge of which is subsequently removed", () => {
      let directedGraph;

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        const vertexNamesArray = [
                [ vertexNameA, vertexNameB ],
                [ vertexNameB, vertexNameA ]
              ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      before(() => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ////
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.removeEdge(edge);
      });

      it("returns false", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isFalse(cyclesPresent);
      });
    });

    describe("if there is a cycle one vertex of which is subsequently removed", () => {
      let directedGraph;

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        const vertexNamesArray = [
                [ vertexNameA, vertexNameB ],
                [ vertexNameB, vertexNameA ]
              ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      before(() => {
        const vertexName = vertexNameA; ///

        directedGraph.removeVertexByVertexName(vertexName);
      });

      it("returns false", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isFalse(cyclesPresent);
      });
    });
  });

  describe("getOrderedVertexNames", () => {
    describe("no vertexes are present", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("returns an empty array", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, []);
      });
    });

    describe("a single vertex is present", () => {
      let directedGraph;

      const vertexNameA = "a";

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      before(() => {
        directedGraph.addVertexByVertexName(vertexNameA);
      });

      it("returns an array with the single vertex name", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ vertexNameA ]);
      });
    });

    describe("a single edge is present", () => {
      let directedGraph;

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        const vertexNamesArray = [
                [ vertexNameA, vertexNameB ]
              ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns an array with the ordered vertex names", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ vertexNameA, vertexNameB ]);
      });
    });

    describe("two edges are present", () => {
      let directedGraph;

      const vertexNameA = "a",
            vertexNameB = "b",
            vertexNameC = "c";

      before(() => {
        const vertexNamesArray = [
                [ vertexNameA, vertexNameB ],
                [ vertexNameB, vertexNameC ]
              ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns an array with the ordered vertex names", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ vertexNameA, vertexNameB, vertexNameC ]);
      });
    });
  });
});

function directedGraphFromVertexNamesArray(vertexNamesArray) {
  const directedGraph = DirectedGraph.fromNothing(),
        edges = vertexNamesArray.map((vertexNames) => {
          const firstVertexName = first(vertexNames),
                secondVertexName = second(vertexNames),
                sourceVertexName = firstVertexName, ///
                targetVertexName = secondVertexName,  ///
                edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

          return edge;
        });

  directedGraph.addEdges(edges);

  return directedGraph;
}
