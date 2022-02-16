let promiseClass = new Promise((resolve, reject) => {
    let x = `I Love Bangldesh`;
    if (x === `I Love Bangldesh`) {
        resolve(`I Love Bangldesh`);
    } else {
        reject(`I miss you`);
    }
});
promiseClass.
then((rec) => console.log(rec))
    .catch((err) => console.log(err))