"use strict";

const { assert } = require("chai"),
      { DirectedGraph } = require("../lib/index"); ///

describe("DirectedGraph", () => {
  describe("fromNothing", () => {
    it("instantiates a directed graph", () => {
      const directedGraph = DirectedGraph.fromNothing();

      assert.instanceOf(directedGraph, DirectedGraph);
    });
  });
});
