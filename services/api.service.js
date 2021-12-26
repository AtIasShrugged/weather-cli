import axios from "axios";
import { getKeyValue } from "./storage.service.js";

const getWeather = async (city) => {
  const token = await getKeyValue("token");
  if (!token) {
    throw new Error(
      "Не установлен api-key.\nУстановите его командой -t [API_KEY]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    { params: { q: city, appid: token, lang: "ru", units: "metric" } }
  );

  return data;
};

export { getWeather };
