#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const main = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    // print Help
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    // save token
  }
  // print weather
};

main();
