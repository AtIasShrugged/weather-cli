import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const saveKeyValue = async (key, value) => {
  let data = await getData();
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  const data = await getData();
  if (data[key]) {
    return data[key];
  }
  return undefined;
};

const getData = async () => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    if (file.toString().length) {
      data = JSON.parse(file);
    }
  }
  return data;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (err) {
    return false;
  }
};

export { saveKeyValue, getKeyValue };
