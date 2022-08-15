import { homedir } from 'os';
import { join } from 'path';
import { promises, existsSync } from 'fs';
import { printError } from './logService.js';

const filePath = join(homedir(), 'weather-token.json');

export const STORAGE_KEYS = {
    token: 'token'
}

export const setKeyValue = async (key, value) => {
    let map = new Map();

    if (existsSync(filePath)) {
        const file = await promises.readFile(filePath);
        const entries = Object.entries(JSON.parse(file));
        map = new Map(entries);
    }

    map.set(key, value);

    await promises.writeFile(filePath, JSON.stringify(Object.fromEntries(map)));
}

export const getKeyValue = async (key) => {
    if (!existsSync(filePath)) {
        printError('Нет существует файла. Задайте сначала значение.')
    }

    const file = await promises.readFile(filePath);
    const entries = Object.entries(JSON.parse(file));
    const map = new Map (entries);

    return map.get(key);
}
