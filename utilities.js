const padNumber = (number, targetLength) => {
    const stringified = (new Array(targetLength).fill(0).join('') + number).slice(-targetLength);
    return stringified;
}

//format is ISO8601 Extended format
export function dateToString(date, format) {
    const formatFunctions = {
        'YYYY' : () => date.year,
        'MM' : () => padNumber(date.month, 2),
        'DD' : () => padNumber(date.date, 2)
    };
    const formattingTokens = new RegExp(Object.keys(formatFunctions).join('|'), 'g');
    console.log(formattingTokens);
    let output;
    if(!date) throw Error('first parameter : date is required');
    if(!date instanceof Date) throw Error('first parameter : date should be internal Date object');
    format = format || 'YYYY-MM-DD';
    output = format;
    
    let array = format.match(formattingTokens);
    for(let i=0; i<array.length; i++) {
        output = output.replace(new RegExp(array[i], 'g'), formatFunctions[array[i]]);
    }

    return output;
}
