"use strict";

const { assert } = require("chai"),
      { Edge, Cycle, DirectedGraph } = require("../lib/index"); ///

describe("DirectedGraph", () => {
  describe("getFirstCycle", () => {
    describe("if there is a cycle present", () => {
      let directedGraph;

      before(() => {
        directedGraph = DirectedGraph.fromNothing();
      });

      before(() => {
        let edge,
            sourceVertexName,
            targetVertexName;

        const vertexNameA = "a",
              vertexNameB = "b";

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);
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
        let edge,
            sourceVertexName,
            targetVertexName;

        const vertexNameA = "a",
              vertexNameB = "b";

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);
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
        let edge,
            sourceVertexName,
            targetVertexName;

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);
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
        directedGraph = DirectedGraph.fromNothing();
      });

      const vertexNameA = "a",
            vertexNameB = "b";

      before(() => {
        let edge,
            sourceVertexName,
            targetVertexName;

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameA; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);
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
              targetVertexName = vertexNameB, ///
              edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);
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
        let edge,
            sourceVertexName,
            targetVertexName;

        sourceVertexName = vertexNameA; ///
        targetVertexName = vertexNameB; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);

        sourceVertexName = vertexNameB; ///
        targetVertexName = vertexNameC; ///

        edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

        directedGraph.addEdge(edge);
      });

      it("returns an array with the ordered vertex names", () => {
        const orderedVertexNames = directedGraph.getOrderedVertexNames();

        assert.deepEqual(orderedVertexNames, [ vertexNameA, vertexNameB, vertexNameC ]);
      });
    });
  });
});
