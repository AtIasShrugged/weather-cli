import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(`${chalk.bgRed.whiteBright(" Error ")} ${err}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.bgGreen.whiteBright(" Success ")} ${msg}`);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
	 ${chalk.green.bold("w/o params")} to print weather for the selected city
	 ${chalk.yellow.bold("-c [CITY]")} to set up the city
	 ${chalk.magenta.bold("-t [API_KEY]")} to set up the token
	 ${chalk.cyan.bold("-h")} to output the help
`
  );
};

export { printError, printSuccess, printHelp };
