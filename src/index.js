module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    for (let m in matrix) {
        if (m % 2 !== 0) {
            matrix[m].reverse();
        }
    }
    let matrix2 = [].concat(...matrix);
    return matrix2;
};
