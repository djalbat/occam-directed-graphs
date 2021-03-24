"use strict";

import { DirectedGraph } from "./index";  ///

const directedGraph = DirectedGraph.fromNothing();

directedGraph.addVerticesByVertexNames([
  "./easy-layout",
  "./easy-with-style",
  "./occam-lexers",
  "./with-style"
]);

directedGraph.addEdgeByVertexNames("./easy-with-style", "./easy-layout");
directedGraph.addEdgeByVertexNames("./with-style", "./easy-with-style");
directedGraph.addEdgeByVertexNames("./easy-layout", "./occam-lexers");
directedGraph.addEdgeByVertexNames("./easy-with-style", "./easy-layout");
directedGraph.addEdgeByVertexNames("./occam-lexers", "./with-style");

directedGraph.removeVertexByVertexName("./occam-lexers");

debugger
