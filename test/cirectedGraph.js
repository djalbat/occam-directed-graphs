"use strict";

const { assert } = require("chai"),
      { Cycle, DirectedGraph } = require("../lib/index"); ///

describe("DirectedGraph", () => {
  describe("getFirstCycle", () => {
    describe("if there is a cycle present", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      before(() => {
        let sourceVertexName,
            targetVertexName;

        const vertexNameA = "a",
              vertexNameB = "b";

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
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
        directedGraph = DirectedGraph.fromNothing();
      });

      before(() => {
        let sourceVertexName,
            targetVertexName;

        const vertexNameA = "a",
              vertexNameB = "b";

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
      });

      it("returns true", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isTrue(cyclesPresent);
      });
    });

    describe("if there is a cycle one edge of which is subsequently removed", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        let sourceVertexName,
            targetVertexName;

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
      });

      before(() => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB; ////

        directedGraph.removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
      });

      it("returns false", () => {
        const cyclesPresent = directedGraph.areCyclesPresent();

        assert.isFalse(cyclesPresent);
      });
    });

    describe("if there is a cycle one vertex of which is subsequently removed", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        let sourceVertexName,
            targetVertexName;

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
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

    describe("a single edge present", () => {
      let directedGraph;

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      before(() => {
        const sourceVertexName = vertexNameA, ///
              targetVertexName = vertexNameB; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
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
        directedGraph = DirectedGraph.fromNothing();
      });

      before(() => {
        let sourceVertexName,
            targetVertexName;

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameC; ///

        directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
      });

      it("returns an array with the ordered vertex names", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ vertexNameA, vertexNameB, vertexNameC ]);
      });
    });
  });
});
