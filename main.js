#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const main = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.c) {
    saveKeyValue("city", args.c);
  }
  if (args.t) {
    saveKeyValue("token", args.t);
  }
};

main();
