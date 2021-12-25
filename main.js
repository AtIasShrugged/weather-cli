#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { saveToken } from "./helpers/data-handlers.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const main = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.c) {
    // return saveCity(args.c);
  }
  if (args.t) {
    return saveToken(args.t);
  }
};

main();
