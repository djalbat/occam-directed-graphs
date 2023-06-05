"use strict";

const { assert } = require("chai"),
      { arrayUtilities } = require("necessary"),
      { Edge, Cycle, DirectedGraph } = require("../lib/index"); ///

const { first, second } = arrayUtilities;

describe("DirectedGraph", () => {
  const vertexNameA = "a",
        vertexNameB = "b",
        vertexNameC = "c",
        vertexNameD = "d",
        vertexNameE = "e";

  describe("addEdge", () => {
    describe("the edge is not cyclic", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("returns true and does not the edge to the cyclic edges", () => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName),
              success = directedGraph.addEdge(edge);

        assert.isTrue(success);

        const firstCycle = directedGraph.getFirstCycle();

        assert.isNull(firstCycle);
      });
    });

    describe("the edge is cyclic", () => {
      let directedGraph;

      before(() => {
        const vertexNameArray = [
          [ vertexNameB, vertexNameA ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNameArray);
      });

      it("returns false and does not the edge to the cyclic edges", () => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName),
              success = directedGraph.addEdge(edge);

        assert.isFalse(success);

        const firstCycle = directedGraph.getFirstCycle();

        assert.isNotNull(firstCycle);
      });
    });
  });

  describe("removeEdge", () => {
    describe("the edge is not cyclic", () => {
      let edge,
          directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray)
      });

      before(() => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.removeEdge(edge);
      });

      it("removes the edge", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);
      });
    });

    describe("the edge is in a cycle and is the cyclic edge", () => {
      let edge,
          directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ],
          [ vertexNameB, vertexNameA ],
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray)
      });

      before(() => {
        const sourceVertexName = vertexNameB, ///
              targetVertexName = vertexNameA; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.removeEdge(edge);
      });

      it("removes the edge and leaves the remaining edge as non-cyclic", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);

        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        const nonCyclicEdge = edge, ///
              nonCyclicEdgePresent = directedGraph.isNonCyclicEdgePresent(nonCyclicEdge);

        assert.isTrue(nonCyclicEdgePresent);
      });
    });

    describe("the edge is in a cycle and is not the cyclic edge", () => {
      let edge,
          directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ],
          [ vertexNameB, vertexNameA ],
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray)
      });

      before(() => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.removeEdge(edge);
      });

      it("removes the edge and sets the remaining edge to be non-cyclic", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);

        const sourceVertexName = vertexNameB, ///
              targetVertexName = vertexNameA; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        const cyclicEdge = edge,  ///
              nonCyclicEdge = edge, ///
              cyclicEdgePresent = directedGraph.isCyclicEdgePresent(cyclicEdge),
              nonCyclicEdgePresent = directedGraph.isNonCyclicEdgePresent(nonCyclicEdge);

        assert.isFalse(cyclicEdgePresent);

        assert.isTrue(nonCyclicEdgePresent);
      });
    });
  });

  describe("getFirstCycle", () => {
    describe("if there are no cycles", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("returns null", () => {
        const firstCycle = directedGraph.getFirstCycle();

        assert.isNull(firstCycle);
      });
    });

    describe("if there is a cycle present", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ],
          [ vertexNameB, vertexNameC ],
          [ vertexNameC, vertexNameD ],
          [ vertexNameD, vertexNameE ],
          [ vertexNameE, vertexNameB ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns a cycle", () => {
        const firstCycle = directedGraph.getFirstCycle();

        assert.instanceOf(firstCycle, Cycle);

        const vertexNames = firstCycle.getVertexNames();

        assert.deepEqual(vertexNames, [
          vertexNameB,
          vertexNameC,
          vertexNameD,
          vertexNameE
        ]);
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
        const vertexNamesArray = [
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
