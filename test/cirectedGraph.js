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

      it("leaves the source vertex index less than the target vertex index", () => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        const sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.getVertexByVertexName(targetVertexName),
              sourceVertexIndex = sourceVertex.getIndex(),
              targetVertexIndex = targetVertex.getIndex();

        assert.isTrue(sourceVertexIndex < targetVertexIndex);
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

      it("leaves the source vertex index greater than the target vertex index", () => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        const sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.getVertexByVertexName(targetVertexName),
              sourceVertexIndex = sourceVertex.getIndex(),
              targetVertexIndex = targetVertex.getIndex();

        assert.isTrue(sourceVertexIndex > targetVertexIndex);
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

      it("removes the edge and leaves the remaining edge's source vertex index less than its target vertex index", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);

        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB, ///
              sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.getVertexByVertexName(targetVertexName),
              sourceVertexIndex = sourceVertex.getIndex(),
              targetVertexIndex = targetVertex.getIndex();

        assert.isTrue(sourceVertexIndex < targetVertexIndex);
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

      it("removes the edge and set the remaining edge's source vertex index to be less than its target vertex index", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);

        const sourceVertexName = vertexNameB, ///
              targetVertexName = vertexNameA, ///
              sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.getVertexByVertexName(targetVertexName),
              sourceVertexIndex = sourceVertex.getIndex(),
              targetVertexIndex = targetVertex.getIndex();

        assert.isTrue(sourceVertexIndex < targetVertexIndex);
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

      it("leaves the vertex indexes as-is", () => {
        const sourceVertexName = vertexNameB, ///
              targetVertexName = vertexNameA, ///
              sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
              targetVertex = directedGraph.addVertexByVertexName(targetVertexName);

        directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

        const sourceVertexIndex = sourceVertex.getIndex(),
              targetVertexIndex = targetVertex.getIndex();

        assert.isTrue(sourceVertexIndex > targetVertexIndex);
      });
    });

    describe("it will not create a cycle", () => {
      describe("the source vertex is before the target vertex", () => {
        let directedGraph;

        before(() => {
          directedGraph = DirectedGraph.fromNothing();
        });

        it("leaves the vertex indexes as-is", () => {
          const sourceVertexName = vertexNameA, ///
                targetVertexName = vertexNameB, ///
                sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
                targetVertex = directedGraph.addVertexByVertexName(targetVertexName);

          directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

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

          it("swaps the vertex indexes", () => {
            const targetVertexName = vertexNameB, ///
                  sourceVertexName = vertexNameA, ///
                  targetVertex = directedGraph.addVertexByVertexName(targetVertexName),
                  sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName);

            directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

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
                  targetVertex = directedGraph.addVertexByVertexName(targetVertexName);

            directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

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
