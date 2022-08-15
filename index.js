import { getArguments } from './helpers/index.js'

const main = () => {
    const args = getArguments(process.argv);

    console.info(args)
}

main();
