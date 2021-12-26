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
    dedent`${chalk.bgMagenta.whiteBright(" HELP ")}
	 ${chalk.green.bold("w/o params")} чтобы вывести погоду выбранного города
	 ${chalk.yellow.bold("-c [CITY]")} чтобы установить город
	 ${chalk.magenta.bold("-t [API_KEY]")} чтобы установить токен
	 ${chalk.cyan.bold("-h")} чтобы вывести help
`
  );
};

const printWeather = (res, icon) => {
  console.log(dedent`
    ${chalk.bgBlue.whiteBright(" Погода ")}
    ${res.name}: ${icon} ${res.weather[0].description}
    ${Math.round(res.main.temp)}°C (ощущается как ${Math.round(
    res.main.feels_like
  )}°C)
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed} м/сек
    `);
};

export { printError, printSuccess, printHelp, printWeather };
