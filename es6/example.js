"use strict";

import { DirectedGraph } from "../index";

const directedGraph = DirectedGraph.fromNothing(),
      vertexName = "i",
      sourceVertexName = "j",
      targetVertexName = "k";

directedGraph.addVertexByVertexName(vertexName);

directedGraph.addEdgeByVertexNames(sourceVertexName, targetVertexName);

const topologicallyOrderedVertexNames = directedGraph.getTopologicallyOrderedVertexNames();

debugger