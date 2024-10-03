const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { message: 'delayed success!'};
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            let error = new Error ('error: delayed exception!');
            reject(error);
        }, 500)
    });
};

resolvedPromise()
    .then ((result) => console.log(result))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
