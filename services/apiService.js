import axios from "axios";
import { getKeyValue, STORAGE_KEYS } from "./storageService.js";

export const getWeather = async (city) => {
    const token = process.env[STORAGE_KEYS.token] ?? await getKeyValue(STORAGE_KEYS.token);
    const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            appid: token,
            q: city
        }
    });

    return data;
}
