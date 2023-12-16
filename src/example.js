"use strict";

import { Edge, DirectedGraph } from "./index";  ///

const edge1 = Edge.fromSourceVertexNameAndTargetVertexName("./easy-with-style", "./easy-layout"),
      edge2 = Edge.fromSourceVertexNameAndTargetVertexName("./with-style", "./easy-with-style"),
      edge3 = Edge.fromSourceVertexNameAndTargetVertexName("./easy-layout", "./occam-lexers"),
      edge4 = Edge.fromSourceVertexNameAndTargetVertexName("./easy-with-style", "./easy-layout"),
      edge5 = Edge.fromSourceVertexNameAndTargetVertexName("./occam-lexers", "./with-style");

const directedGraph = DirectedGraph.fromNothing();

directedGraph.addEdge(edge1);
directedGraph.addEdge(edge2);
directedGraph.addEdge(edge3);
directedGraph.addEdge(edge4);
directedGraph.addEdge(edge5);

directedGraph.removeVertexByVertexName("./occam-lexers");
