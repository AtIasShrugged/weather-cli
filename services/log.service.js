import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(`
  ${chalk.bgRed.whiteBright(" Ошибка ")} ${err}
  `);
};

const printSuccess = (msg) => {
  console.log(`
  ${chalk.bgGreen.whiteBright(" Успех ")} ${msg}
  `);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
	 ${chalk.green.bold("w/o params")} чтобы вывести погоду выбранного города
	 ${chalk.yellow.bold("-c [CITY]")} чтобы установить город
	 ${chalk.magenta.bold("-t [API_KEY]")} чтобы установить токен
	 ${chalk.cyan.bold("-h")} чтобы вывести help
`
  );
};

export { printError, printSuccess, printHelp };
