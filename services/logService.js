import chalk from "chalk";
import dedent from "dedent";

export const printError = (message) => {
    console.log(`${chalk.bgRedBright('ERROR')}: ${chalk.redBright(message)}`);
}

export const printSuccess = (message) => {
    console.log(`${chalk.bgGreenBright('SUCCESS')}: ${chalk.greenBright(message)}`);
}

export const printHelp = () => {
    console.log(
        dedent(`${chalk.bgBlueBright('HELP:')}
        -c [CITY] - Для установки города
        -h - Для вывода помощи
        -t [API_KEY] - Для сохранения токена
        `)
    )
}

export const printForecast = (forecast) => {
    console.log(
        dedent(`${chalk.bgCyanBright('Weather:')}
        Город: ${forecast.name}, ${forecast.weather[0].description}
        Температура: ${forecast.main.temp}
        Ощущается: ${forecast.main.feels_like}
        Скорость ветка: ${forecast.wind.speed}
        `)
    )
}
