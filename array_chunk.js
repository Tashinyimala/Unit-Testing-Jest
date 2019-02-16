const chunkArray = (array, len) => {
    // Init chunked arr
    const chunkArr = [];

    // Loop through array
    array.forEach(val => {
        // get last element
        const last = chunkArr[chunkArr.length - 1];

        if (!last || last.length === len) {
            chunkArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkArr;
};

module.exports = chunkArray;