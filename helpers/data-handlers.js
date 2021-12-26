import { getWeather, getWeatherIcon } from "../services/api.service.js";
import {
  printError,
  printSuccess,
  printWeather,
} from "../services/log.service.js";
import { getKeyValue, saveKeyValue } from "../services/storage.service.js";

const saveToken = async (token) => {
  try {
    if (!token.length) {
      throw new Error("Некоректный токен");
    }
    await saveKeyValue("token", token);
    printSuccess("Токен сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  try {
    if (!city.length) {
      throw new Error("Некоректный город");
    }

    await saveKeyValue("city", city);
    printSuccess("Город сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const city = await getKeyValue("city");
    if (!city) {
      throw new Error(
        "Не установлен город.\nУстановите его командой -c [CITY]"
      );
    }
    const weather = await getWeather(city);
    printWeather(weather, getWeatherIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Некорректный город");
      return;
    }
    if (e?.response?.status == 401) {
      printError("Некорректный токен");
      return;
    } else {
      printError(e.message);
    }
  }
};

export { saveToken, saveCity, getForcast };
