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
