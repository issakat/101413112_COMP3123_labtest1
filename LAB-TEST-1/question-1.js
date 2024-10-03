const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input must be an array'));
        }

        const stringArray = mixedArray.filter((element) => typeof element === 'string');
        const lowerCaseArray = stringArray.map((string) => string.toLowerCase());

        resolve(lowerCaseArray);
    });
};

const mixedArray = ['PIZZA', 10, true, false, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then((result) => console.log(result));