import { printError, printSuccess } from "../services/log.service.js";
import { saveKeyValue } from "../services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved successfully.");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {};

export { saveToken, saveCity };
