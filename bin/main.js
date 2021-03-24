"use strict";

const express = require("express");

const { createLiveReloadHandler } = require("lively-cli");

const server = express(), ///
      staticRouter = express.static("."),
      reloadHandler = createLiveReloadHandler("./example.js");

server.use(staticRouter);

server.get("/live-reload", reloadHandler);

server.listen(8888);
