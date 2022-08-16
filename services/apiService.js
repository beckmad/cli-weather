import axios from "axios";
import { getKeyValue, STORAGE_KEYS } from "./storageService.js";

export const getWeather = async (city) => {
    const token = process.env[STORAGE_KEYS.token] ?? await getKeyValue(STORAGE_KEYS.token);

    if (!token) throw new Error('Не передан токен');

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            appid: token,
            q: city,
            lang: 'ru',
            units: 'metric'
        }
    });

    return data;
}
