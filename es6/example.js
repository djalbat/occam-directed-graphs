"use strict";

import { Graph } from "../index";

const graph = Graph.fromVertexLiterals([

  ["a", ["b", "c"]],
  ["b", ["b", "d"]],
  ["c", ["a"]],
  ["d", []]

]);

const cycles = graph.getCycles(),
      vertices = graph.getVertices(),
      stronglyConnectedComponents = graph.getStronglyConnectedComponents();
