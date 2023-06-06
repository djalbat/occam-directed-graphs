"use strict";

const { assert } = require("chai"),
      { arrayUtilities } = require("necessary"),
      { Edge, Cycle, DirectedGraph } = require("../lib/index"); ///

const { first, second, third, fourth } = arrayUtilities;

describe("DirectedGraph", () => {
  const vertexNameA = "a",
        vertexNameB = "b",
        vertexNameC = "c",
        vertexNameD = "d",
        vertexNameE = "e";

  describe("getFirstCycle", () => {
    describe("there are no cycles", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("returns null", () => {
        const firstCycle = directedGraph.getFirstCycle();

        assert.isNull(firstCycle);
      });
    });

    describe("there is a cycle present", () => {
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
    describe("there are no cycles", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("returns false", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isFalse(cyclesPresent);
      });
    });

    describe("there is a cycle", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ],
          [ vertexNameB, vertexNameA ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns true", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isTrue(cyclesPresent);
      });
    });

    describe("there is a cycle one edge of which is subsequently removed", () => {
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

    describe("there is a cycle one vertex of which is subsequently removed", () => {
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

  describe("addNonCyclicEdge", () => {
    describe("it will create a cycle", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns false", () => {
        const sourceVertexName = vertexNameB, ///
              targetVertexName = vertexNameA, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName),
              nonCyclicEdge = edge, ///
              success = directedGraph.addNonCyclicEdge(nonCyclicEdge);

        assert.isFalse(success);
      });
    });

    describe("it will not create a cycle", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      it("set the immediate successor and predecessor vertexes of the relevant vertexes and returns true", () => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName),
              nonCyclicEdge = edge, ///
              success = directedGraph.addNonCyclicEdge(nonCyclicEdge);

        assert.isTrue(success);

        const sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.getVertexByVertexName(targetVertexName),
              sourceVertexImmediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(),
              targetVertexImmediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes();

        assert.lengthOf(sourceVertexImmediateSuccessorVertexes, 1);
        assert.lengthOf(targetVertexImmediatePredecessorVertexes, 1);

        const firstSourceVertexImmediateSuccessorVertex = first(sourceVertexImmediateSuccessorVertexes),
              firstTargetVertexImmediatePredecessorVertex = first(targetVertexImmediatePredecessorVertexes);

        assert.equal(firstSourceVertexImmediateSuccessorVertex, targetVertex);
        assert.equal(firstTargetVertexImmediatePredecessorVertex, sourceVertex);
      });
    });
  });

  describe("removeVertexByVertexName", () => {
    describe("the vertex has one immediate predecessor", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("removes itself from the immediate predecessor vertex's immediate successor vertexes", () => {
        const vertexName = vertexNameB; ///

        directedGraph.removeVertexByVertexName(vertexName);

        const immediatePredecessorVertexName = vertexNameA, ///
              immediatePredecessorVertex = directedGraph.getVertexByVertexName(immediatePredecessorVertexName),
              immediateSuccessorVertexes = immediatePredecessorVertex.getImmediateSuccessorVertexes();

        assert.isEmpty(immediateSuccessorVertexes);
      });
    });

    describe("the vertex has one immediate successor", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("removes itself from the immediate successor vertex's immediate predecessor vertexes and decrements its index", () => {
        const vertexName = vertexNameA; ///

        directedGraph.removeVertexByVertexName(vertexName);

        const immediateSuccessorVertexName = vertexNameB, ///
              immediateSuccessorVertex = directedGraph.getVertexByVertexName(immediateSuccessorVertexName),
              immediatePredecessorVertexes = immediateSuccessorVertex.getImmediatePredecessorVertexes();

        assert.isEmpty(immediatePredecessorVertexes);

        const immediateSuccessorVertexIndex = immediateSuccessorVertex.getIndex();

        assert.equal(immediateSuccessorVertexIndex, 0);
      });
    });

    describe("the vertex is part of a cycle of length two", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ],
          [ vertexNameB, vertexNameA ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("removes itself andd the cyclic edge", () => {
        const vertexName = vertexNameA; ///

        directedGraph.removeVertexByVertexName(vertexName);

        const vertex = directedGraph.getVertexByVertexName(vertexName);

        assert.isNull(vertex);

        const cyclicEdges = directedGraph.getCyclicEdges();

        assert.isEmpty(cyclicEdges);
      });
    });
  });

  describe("reorderVertexesBySourceVertexAndTargetVertex", () => {
    describe("it will create a cycle", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ vertexNameA, vertexNameB ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns false", () => {
        const sourceVertexName = vertexNameB, ///
              targetVertexName = vertexNameA, ///
              sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.addVertexByVertexName(targetVertexName),
              success = directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

        assert.isFalse(success);
      });
    });

    describe("it will not create a cycle", () => {
      describe("the source vertex is before the target vertex", () => {
        let directedGraph;

        before(() => {
          directedGraph = DirectedGraph.fromNothing();
        });

        it("leaves the vertexes in place and returns true", () => {
          const sourceVertexName = vertexNameA, ///
                targetVertexName = vertexNameB, ///
                sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
                targetVertex = directedGraph.addVertexByVertexName(targetVertexName),
                success = directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

          assert.isTrue(success);

          const orderedVertexNames = directedGraph.getOrderedVertexNames(),
                firstOrderedVertexName = first(orderedVertexNames),
                secondOrderedVertexName = second(orderedVertexNames);

          assert.equal(firstOrderedVertexName, vertexNameA);
          assert.equal(secondOrderedVertexName, vertexNameB);
        });
      });

      describe("the source vertex is after the target vertex", () => {
        describe("there are no other vertexes", () => {
          let directedGraph;

          before(() => {
            directedGraph = DirectedGraph.fromNothing();
          });

          it("swaps the vertexes and returns true", () => {
            const targetVertexName = vertexNameB, ///
                  sourceVertexName = vertexNameA, ///
                  targetVertex = directedGraph.addVertexByVertexName(targetVertexName),
                  sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
                  success = directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

            assert.isTrue(success);

            const orderedVertexNames = directedGraph.getOrderedVertexNames(),
                  firstOrderedVertexName = first(orderedVertexNames),
                  secondOrderedVertexName = second(orderedVertexNames);

            assert.equal(firstOrderedVertexName, vertexNameA);
            assert.equal(secondOrderedVertexName, vertexNameB);
          });
        });

        describe("there are other vertexes", () => {
          let directedGraph;

          before(() => {
            const vertexNamesArray = [
              [ vertexNameA, vertexNameB ],
              [ vertexNameC, vertexNameD ]
            ];

            directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
          });

          it("rearranges the vertexes and returns true", () => {
            const sourceVertexName = vertexNameD, ///
                  targetVertexName = vertexNameA, ///
                  sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
                  targetVertex = directedGraph.addVertexByVertexName(targetVertexName),
                  success = directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

            assert.isTrue(success);

            const orderedVertexNames = directedGraph.getOrderedVertexNames(),
                  firstOrderedVertexName = first(orderedVertexNames),
                  secondOrderedVertexName = second(orderedVertexNames),
                  thirdOrderedVertexName = third(orderedVertexNames),
                  fourthOrderedVertexName = fourth(orderedVertexNames);

            assert.equal(firstOrderedVertexName, vertexNameC);
            assert.equal(secondOrderedVertexName, vertexNameD);
            assert.equal(thirdOrderedVertexName, vertexNameA);
            assert.equal(fourthOrderedVertexName, vertexNameB);
          });
        });
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
