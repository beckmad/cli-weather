import { getArguments } from './helpers/index.js';
import { printError, setKeyValue, getWeather, printHelp, printSuccess } from './services/index.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }

    try {
        await setKeyValue('token', token);
    } catch (e) {
        printError(e)
    }
}

const getForecast = async (city) => {
    try {
        const weather = await getWeather(city);
        console.log(weather);
    } catch (e) {
        switch (e?.response.status) {
            case (401):
                printError('Неправильный токен.');
                break;
            case (404):
                printError('Город не найден.');
                break;
            default:
                printError('Ошибка при получении города.');
                break;
        };
    }
}

const main = async () => {
    const args = getArguments(process.argv);

    if (args.h) printHelp();

    if (args.t) await saveToken(args.t);

    if (args.c) getForecast(args.c);
}

main();
