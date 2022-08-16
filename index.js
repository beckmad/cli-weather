#!/usr/bin/env node

import {getArguments} from './helpers/index.js';
import {getWeather, printError, printHelp, setKeyValue, STORAGE_KEYS, printForecast} from './services/index.js';
import {getKeyValue} from './services/storageService.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }

    try {
        await setKeyValue(STORAGE_KEYS.token, token);
    } catch (e) {
        printError(e)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }

    try {
        await setKeyValue(STORAGE_KEYS.city, city);
        const forecast = await loadForecast();
        printForecast(forecast);
    } catch (e) {
        printError(e)
    }
}

const loadForecast = async () => {
    try {
        const city = await getKeyValue(STORAGE_KEYS.city);
        return await getWeather(city);
    } catch (e) {
        switch (e?.response?.status) {
            case (401):
                printError('Неправильный токен.');
                break;
            case (404):
                printError('Город не найден.');
                break;
            default:
                printError(`Ошибка при получении города. ${e}`);
                break;
        }
    }
}

const main = () => {
    const args = getArguments(process.argv);

    if (args.h) {
        printHelp();
        return;
    }

    if (args.c) {
        saveCity(args.c);
        return
    }

    if (args.t) {
        saveToken(args.t);
    }
}

main();
