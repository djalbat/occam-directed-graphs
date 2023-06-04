# Occam Directed Graphs

[Occam](https://github.com/djalbat/occam)'s directed graphs.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Running the tests](#running-the-tests)
- [References](#references)
- [Contact](#contact)

## Introduction

This implementation extends an incremental algorithm for directed graphs, one that returns a topological ordering for the graph. If one or more cyclic edges are added then the extended algorithm handles it gracefully rather than throwing an error. In these cases a cycle can be returned rather than a topological ordering. If all cyclic edges are removed thereafter then the algorithm recovers and a topological ordering can be returned again. 

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-directed-graph

You can also clone the repository with [Git](https://git-scm.com/)...

    https://github.com/djalbat/occam-directed-graph.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage
    
An empty directed graph can be created by calling the `fromNothing()` factory method:

```
import { DirectedGraph } from "occam-directed-graphs";

const directedGraph = DirectedGraph.fromNothing();
```

After instantiation, vertices and edges can be added incrementally:

```
import { Edge } from "occam-directed-graphs";

const vertexName = "i";

directedGraph.addVertexByVertexName(vertexName);

const sourceVertexName = "j",
      targetVertexName = "k",
      edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

directedGraph.addEdge(edge);
```

Note that there is no need to add vertices explicitly, they will be added whenever necessary when edges that reference them are added.

You can also remove vertices and edges. Removing a vertex could result in removing edges. When you remove an edge, you can additionally specify that the any stranded vertices that result are also removed:

```
import { Edge } from "occam-directed-graphs";

const vertexName = "i";

directedGraph.removeVertexByName(vertexName);

const sourceVertexName = "j",
      targetVertexName = "k",
      removeStrandedVertices = true,
      edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

directedGraph.removeEdge(edge, removeStrandedVertices);
```

The default is to leave stranded vertices in place.

You can detect and recover cycles thus:

```
const cyclePresent = directedGraph.isCyclePresent();

if (cyclePresent) {
  const firstCycle = directedGraph.getFirstCycle(),
        firstCycleVertexNames = firstCycle.getVertexNames();

  ...
}
```
You can get a topologically ordered list of vertices at any time.
Bear in mind that this is useless information when cycles are present.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Running the tests

Assuming that the packages are installed:

    npm test

## References

This implementation is based on the Pearce-Kelly algorithm:

* [A Dynamic Topological Sort Algorithm for Directed Acyclic Graphs](https://www.doc.ic.ac.uk/~phjk/Publications/DynamicTopoSortAlg-JEA-07.pdf) by David J. Pearce and Paul H.J. Kelly.

## Contact

* james.smith@djalbat.com

