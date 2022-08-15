const MINUS_PREFIX = '-';

export const getArguments = (processArguments) => {
    const groupedArgs = {};
    const [,, ...args] = processArguments;

    args.forEach((arg, index, array) => {
        if (arg.charAt(0) === MINUS_PREFIX) {
            const isNextWithPrefix = array[index + 1]?.charAt(0) === MINUS_PREFIX;

            if (isNextWithPrefix) groupedArgs[arg.substring(1)] = true;

            if (!isNextWithPrefix) groupedArgs[arg.substring(1)] = array[index + 1];

            if (index === array.length - 1 && !isNextWithPrefix) groupedArgs[arg.substring(1)] = true;
        }
    });

    return groupedArgs;
}
