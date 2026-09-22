"use strict";

const { arrayUtilities } = require("necessary"),
      { Edge, Cycle, DirectedGraph } = require("../lib/index"); ///

const { first, second, third, fourth } = arrayUtilities;

describe("DirectedGraph", () => {
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
          [ "a", "b" ],
          [ "b", "c" ],
          [ "c", "d" ],
          [ "d", "e" ],
          [ "e", "b" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns a cycle", () => {
        const firstCycle = directedGraph.getFirstCycle();

        assert.instanceOf(firstCycle, Cycle);

        const vertexNames = firstCycle.getVertexNames();

        assert.deepEqual(vertexNames, [
          "b",
          "c",
          "d",
          "e"
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
          [ "a", "b" ],
          [ "b", "a" ]
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
          [ "a", "b" ],
          [ "b", "a" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      before(() => {
        const sourceVertexName = "a",
              targetVertexName = "b",
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
          [ "a", "v" ],
          [ "v", "a" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      before(() => {
        const vertexName = "a";

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
        const vertexName = "a";

        directedGraph.addVertexByVertexName(vertexName);
      });

      it("returns an array with the single vertex name", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ "a" ]);
      });
    });

    describe("a single edge is present", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ "a", "b" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns an array with the ordered vertex names", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ "a", "b" ]);
      });
    });

    describe("two edges are present", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ "a", "b" ],
          [ "b", "c" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("returns an array with the ordered vertex names", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ "a", "b", "c" ]);
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
        const sourceVertexName = "a",
              targetVertexName = "b",
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
          [ "b", "a" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNameArray);
      });

      it("leaves the source vertex index greater than the target vertex index", () => {
        const sourceVertexName = "a",
              targetVertexName = "b",
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
          [ "a", "b" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray)
      });

      before(() => {
        const sourceVertexName = "a",
              targetVertexName = "b";

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
          [ "a", "b" ],
          [ "b", "a" ],
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray)
      });

      before(() => {
        const sourceVertexName = "b",
              targetVertexName = "a";

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.removeEdge(edge);
      });

      it("removes the edge and leaves the remaining edge's source vertex index less than its target vertex index", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);

        const sourceVertexName = "a",
              targetVertexName = "b",
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
          [ "a", "b" ],
          [ "b", "a" ],
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray)
      });

      before(() => {
        const sourceVertexName = "a",
              targetVertexName = "b";

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.removeEdge(edge);
      });

      it("removes the edge and set the remaining edge's source vertex index to be less than its target vertex index", () => {
        const edgePresent = directedGraph.isEdgePresent(edge);

        assert.isFalse(edgePresent);

        const sourceVertexName = "b",
              targetVertexName = "a",
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
          [ "a", "b" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("removes itself from the immediate predecessor vertex's immediate successor vertexes", () => {
        const vertexName = "b";

        directedGraph.removeVertexByVertexName(vertexName);

        const immediatePredecessorVertexName = "a",
              immediatePredecessorVertex = directedGraph.getVertexByVertexName(immediatePredecessorVertexName),
              immediateSuccessorVertexes = immediatePredecessorVertex.getImmediateSuccessorVertexes();

        assert.isEmpty(immediateSuccessorVertexes);
      });
    });

    describe("the vertex has one immediate successor", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ "a", "b" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("removes itself from the immediate successor vertex's immediate predecessor vertexes and decrements its index", () => {
        const vertexName = "a";

        directedGraph.removeVertexByVertexName(vertexName);

        const immediateSuccessorVertexName = "b",
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
          [ "a", "b" ],
          [ "b", "a" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("removes itself and the cyclic edge", () => {
        const vertexName = "a";

        directedGraph.removeVertexByVertexName(vertexName);

        const vertex = directedGraph.getVertexByVertexName(vertexName);

        assert.isNull(vertex);

        const backEdgess = directedGraph.getBackEdges();

        assert.isEmpty(backEdgess);
      });
    });
  });

  describe("reorderVertexesBySourceVertexAndTargetVertex", () => {
    describe("it will create a cycle", () => {
      let directedGraph;

      before(() => {
        const vertexNamesArray = [
          [ "a", "b" ]
        ];

        directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
      });

      it("leaves the vertex indexes as-is", () => {
        const sourceVertexName = "b",
              targetVertexName = "a",
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
          const sourceVertexName = "a",
                targetVertexName = "b",
                sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
                targetVertex = directedGraph.addVertexByVertexName(targetVertexName);

          directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

          const orderedVertexNames = directedGraph.getOrderedVertexNames(),
                firstOrderedVertexName = first(orderedVertexNames),
                secondOrderedVertexName = second(orderedVertexNames);

          assert.equal(firstOrderedVertexName, "a");
          assert.equal(secondOrderedVertexName, "b");
        });
      });

      describe("the source vertex is after the target vertex", () => {
        describe("there are no other vertexes", () => {
          let directedGraph;

          before(() => {
            directedGraph = DirectedGraph.fromNothing();
          });

          it("swaps the vertex indexes", () => {
            const targetVertexName = "b",
                  sourceVertexName = "a",
                  targetVertex = directedGraph.addVertexByVertexName(targetVertexName),
                  sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName);

            directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

            const orderedVertexNames = directedGraph.getOrderedVertexNames(),
                  firstOrderedVertexName = first(orderedVertexNames),
                  secondOrderedVertexName = second(orderedVertexNames);

            assert.equal(firstOrderedVertexName, "a");
            assert.equal(secondOrderedVertexName, "b");
          });
        });

        describe("there are other vertexes", () => {
          let directedGraph;

          before(() => {
            const vertexNamesArray = [
              [ "a", "b" ],
              [ "c", "d" ]
            ];

            directedGraph = directedGraphFromVertexNamesArray(vertexNamesArray);
          });

          it("rearranges the vertexes and returns true", () => {
            const sourceVertexName = "d",
                  targetVertexName = "a",
                  sourceVertex = directedGraph.addVertexByVertexName(sourceVertexName),
                  targetVertex = directedGraph.addVertexByVertexName(targetVertexName);

            directedGraph.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

            const orderedVertexNames = directedGraph.getOrderedVertexNames(),
                  firstOrderedVertexName = first(orderedVertexNames),
                  secondOrderedVertexName = second(orderedVertexNames),
                  thirdOrderedVertexName = third(orderedVertexNames),
                  fourthOrderedVertexName = fourth(orderedVertexNames);

            assert.equal(firstOrderedVertexName, "c");
            assert.equal(secondOrderedVertexName, "d");
            assert.equal(thirdOrderedVertexName, "a");
            assert.equal(fourthOrderedVertexName, "b");
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
                sourceVertexName = firstVertexName,
                targetVertexName = secondVertexName,
                edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

          return edge;
        });

  directedGraph.addEdges(edges);

  return directedGraph;
}
