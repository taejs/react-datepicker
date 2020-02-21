const padNumber = (number, targetLength) => {
    const stringified = (new Array(targetLength).fill(0) + number).slice(-number.length);
    return parseInt(stringified);
}

const formatFunctions = {
    'YYYY' : (date) => date.getFullYear(),
    'MM' : (date) => padNumber(date.getMonth() + 1, 2),
    'DD' : (date) => padNumber(date.getDate(), 2)
};

const formattingTokens = new RegExp(Object.keys(formatFunctions).join('|'));

//format is ISO8601 Extended format
export function dateToString(date, format) {
    if(date === undefined) throw error('first parameter : date is required');
    if(!date instanceof Date) throw error('first parameter : date should be internal Date object');
    format = format || 'YYYY-MM-DD';
    
    let array = format.match(formattingTokens);
    for(let i=0; i<length; i++) {
        output = format.replace(new RegExp(array[i]), formatFunctions[array[i]]);
    }

    return output;
}
